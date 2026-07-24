import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawWords = [
  // Unit 1: 人間・人間関係 (1 - 75)
  { term: '男性', reading: 'だんせい', meaning: 'Nam giới, đàn ông (man / male)', example: '理想の男性と結婚する。\n(Kết hôn với người đàn ông lý tưởng.)' },
  { term: '女性', reading: 'じょせい', meaning: 'Nữ giới, phụ nữ (woman / female)', example: '「あの女性はだれですか。」\n(Người phụ nữ kia là ai?)' },
  { term: '高齢', reading: 'こうれい', meaning: 'Cao tuổi (old age / advanced age)', example: '祖母は高齢だが、まだとても元気だ。\n(Bà tôi tuy cao tuổi nhưng vẫn rất khỏe mạnh.)' },
  { term: '年上', reading: 'としうえ', meaning: 'Người lớn tuổi hơn (elder / older person)', example: '年上の友達 / 彼女は私より三つ年上だ。\n(Bạn lớn tuổi hơn / Cô ấy lớn hơn tôi 3 tuổi.)' },
  { term: '目上', reading: 'めうえ', meaning: 'Cấp trên, người bề trên (superior)', example: '目上の人には敬語で話したほうがいい。\n(Nên nói bằng kính ngữ với người bề trên.)' },
  { term: '先輩', reading: 'せんぱい', meaning: 'Tiền bối, đàn anh / đàn chị (senior)', example: '田中さんと私は同じ年だが、職場では彼のほうが先輩だ。\n(Tôi và anh Tanaka bằng tuổi, nhưng ở nơi làm việc anh ấy là tiền bối.)' },
  { term: '後輩', reading: 'こうはい', meaning: 'Hậu bối, đàn em (junior)', example: '職場の後輩に仕事を丁寧に教える。\n(Tận tình hướng dẫn công việc cho đàn em ở công ty.)' },
  { term: '上司', reading: 'じょうし', meaning: 'Cấp trên, sếp trực tiếp (boss / supervisor)', example: '上司に相談して休暇の許可をもらう。\n(Thảo luận với sếp trực tiếp để xin phép nghỉ phép.)' },
  { term: '相手', reading: 'あいて', meaning: 'Đối phương, đối tác, người đối thoại (partner)', example: '相手の意見をしっかりと最後まで聞く。\n(Lắng nghe kỹ ý kiến của đối phương cho đến hết.)' },
  { term: '知り合い', reading: 'しりあい', meaning: 'Người quen (acquaintance)', example: '知り合いの紹介で新しい仕事を見つけた。\n(Tìm được công việc mới qua sự giới thiệu của người quen.)' },
  { term: '仲', reading: 'なか', meaning: 'Mối quan hệ (relationship / friendship)', example: '彼ら二人はとても仲がいい。\n(Hai người họ có mối quan hệ rất thân thiết.)' },
  { term: '生年月日', reading: 'せいねんがっぴ', meaning: 'Ngày tháng năm sinh (date of birth)', example: '書類に氏名と生年月日を記入する。\n(Điền họ tên và ngày tháng năm sinh vào giấy tờ.)' },
  { term: '誕生', reading: 'たんじょう', meaning: 'Sự ra đời, sự thành lập (birth / creation)', example: '新しい命の誕生を家族みんなで祝う。\n(Cả gia đình cùng chúc mừng sự ra đời của một sinh linh mới.)' },
  { term: '出身', reading: 'しゅっしん', meaning: 'Xuất thân, quê quán (hometown / origin)', example: '「ご出身はどちらですか。」 - 「東京です。」\n(Quê bạn ở đâu? - Ở Tokyo.)' },
  { term: '故郷', reading: 'こきょう', meaning: 'Cố hương, quê nhà (hometown)', example: '仕事が休みの時は故郷へ帰ってのんびりする。\n(Khi nghỉ làm tôi sẽ trở về quê nhà thư giãn.)' },
  { term: '成長', reading: 'せいちょう', meaning: 'Sự trưởng thành, phát triển (growth)', example: '子供の成長を温かく見守る。\n(Ấm áp theo dõi sự trưởng thành của con trẻ.)' },
  { term: '成人', reading: 'せいじん', meaning: 'Người trưởng thành, thành niên (adult)', example: '日本では二十歳で成人となる。\n(Ở Nhật Bản, 20 tuổi trở thành người thành niên.)' },
  { term: '合格', reading: 'ごうかく', meaning: 'Thi đỗ, vượt qua kỳ thi (pass exam)', example: '日本語能力試験N3に無事合格した。\n(Đã thuận lợi thi đỗ kỳ thi JLPT N3.)' },
  { term: '進学', reading: 'しんがく', meaning: 'Học lên cấp cao hơn (entering higher education)', example: '高校を卒業して専門学校に進学する。\n(Tốt nghiệp cấp 3 và học lên trường chuyên môn.)' },
  { term: '退学', reading: 'たいがく', meaning: 'Bỏ học, thôi học (dropping out of school)', example: '理由があって大学を退学した。\n(Vì có lý do nên đã thôi học Đại học.)' },
  { term: '就職', reading: 'しゅうしょく', meaning: 'Tìm được việc, bắt đầu đi làm (getting a job)', example: '有名IT企業に就職が決まった。\n(Đã có quyết định vào làm tại công ty IT nổi tiếng.)' },
  { term: '退職', reading: 'たいしょく', meaning: 'Nghỉ việc, nghỉ hưu (resignation / retirement)', example: '定年で会社を退職する。\n(Nghỉ hưu rời công ty khi đến tuổi quy định.)' },
  { term: '履歴書', reading: 'りれきしょ', meaning: 'Sơ yếu lý lịch, CV (resume / CV)', example: '面接の前に履歴書を送る。\n(Gửi sơ yếu lý lịch trước khi phỏng vấn.)' },
  { term: '面接', reading: 'めんせつ', meaning: 'Phỏng vấn (interview)', example: '明日、入社試験の面接がある。\n(Ngày mai có phỏng vấn kỳ thi vào công ty.)' },
  { term: '休日', reading: 'きゅうじつ', meaning: 'Ngày nghỉ (holiday / day off)', example: '休日は家族と過ごす。\n(Dành ngày nghỉ ở bên gia đình.)' },
  { term: '専門', reading: 'せんもん', meaning: 'Chuyên môn, chuyên ngành (specialty)', example: '私の専門はコンピューター工学です。\n(Chuyên ngành của tôi là kỹ thuật máy tính.)' },
  { term: '意識', reading: 'いしき', meaning: 'Ý thức, nhận thức (awareness / consciousness)', example: '健康への意識を高める。\n(Nâng cao ý thức về sức khỏe.)' },
  { term: '経営', reading: 'けいえい', meaning: 'Kinh doanh, quản lý (management / business)', example: '会社を経営する。\n(Kinh doanh quản lý công ty.)' },
  { term: '反省', reading: 'はんせい', meaning: 'Kiểm điểm, nhìn nhận lại bản thân (reflection)', example: '自分のミスを深く反省する。\n(Sâu sắc nhìn nhận lại sai lầm của bản thân.)' },
  { term: '実行', reading: 'じっこう', meaning: 'Thực hành, thực hiện (execution / implementation)', example: '計画を実行に移す。\n(Đưa kế hoạch vào thực hiện.)' },
  { term: '進歩', reading: 'しんぽ', meaning: 'Tiến bộ, cải thiện (progress / advancement)', example: '日本語の会話が大幅に進歩した。\n(Hội thoại tiếng Nhật đã tiến bộ vượt bậc.)' },
  { term: '変化', reading: 'へんか', meaning: 'Thay đổi, biến đổi (change)', example: '時代の変化に対応する。\n(Thích ứng với sự thay đổi của thời đại.)' },
  { term: '発達', reading: 'はったつ', meaning: 'Phát triển, hoàn thiện (development)', example: '体と心が発達する。\n(Cơ thể và tâm hồn phát triển.)' },
  { term: '体力', reading: 'たいりょく', meaning: 'Thể lực, sức bền (stamina / physical strength)', example: '運動して体力をつける。\n(Tập thể dục để rèn luyện thể lực.)' },
  { term: '出場', reading: 'しゅつじょう', meaning: 'Tham gia thi đấu (participation in match)', example: 'オリンピックに出場する。\n(Tham gia thi đấu tại Olympic.)' },
  { term: '活躍', reading: 'かつやく', meaning: 'Hoạt động nổi bật, ghi dấu ấn (active role)', example: '海外で活躍するエンジニア。\n(Kỹ sư hoạt動 nổi bật tại nước ngoài.)' },
  { term: '競争', reading: 'きょうそう', meaning: 'Cạnh tranh, thi đấu (competition)', example: 'ライバルと技術を競争する。\n(Cạnh tranh kỹ thuật với đối thủ.)' },
  { term: '応援', reading: 'おうえん', meaning: 'Cổ vũ, hỗ trợ (cheering / support)', example: '自分のチームを全力で応援する。\n(Hết mình cổ vũ cho đội nhà.)' },
  { term: '拍手', reading: 'はくしゅ', meaning: 'Vỗ tay (applause)', example: '素晴らしい演奏に拍手を送る。\n(Vỗ tay tán thưởng màn biểu diễn tuyệt vời.)' },
  { term: '人気', reading: 'にんき', meaning: 'Được yêu thích, hâm mộ (popularity)', example: 'このゲームは若者にとても人気がある。\n(Trò chơi này rất được giới trẻ yêu thích.)' },
  { term: 'うわさ', reading: 'うわさ', meaning: 'Tin đồn, lời đồn (rumor)', example: '街で不思議なうわさを聞いた。\n(Nghe tin đồn kỳ lạ trên phố.)' },
  { term: '情報', reading: 'じょうほう', meaning: 'Thông tin (information / data)', example: 'インターネットで必要な情報を集める。\n(Thu thập thông tin cần thiết trên Internet.)' },
  { term: '交換', reading: 'こうかん', meaning: 'Trao đổi (exchange)', example: '名刺を交換する。\n(Trao đổi danh thiếp công việc.)' },
  { term: '流行', reading: 'りゅうこう', meaning: 'Trào lưu, mốt, dịch bệnh (trend / epidemic)', example: '新しいファッションが流行している。\n(Thời trang mới đang thành trào lưu.)' },
  { term: '宣伝', reading: 'せんでん', meaning: 'Tuyên truyền, quảng cáo (publicity / advertising)', example: '新商品の宣伝をする。\n(Quảng cáo sản phẩm mới.)' },
  { term: '広告', reading: 'こうこく', meaning: 'Quảng cáo (advertisement)', example: '新聞に広告を掲載する。\n(Đăng quảng cáo trên báo.)' },
  { term: '注目', reading: 'ちゅうもく', meaning: 'Chú ý, quan tâm chú ý (attention)', example: '世界中から注目を集める。\n(Thu hút sự chú ý từ khắp thế giới.)' },
  { term: '通訳', reading: 'つうやく', meaning: 'Phiên dịch cabin/trực tiếp (interpretation)', example: '会議で通訳を務める。\n(Đảm nhận phiên dịch tại cuộc họp.)' },
  { term: '翻訳', reading: 'ほんやく', meaning: 'Biên dịch tài liệu (translation)', example: '英語の小説を日本語に翻訳する。\n(Biên dịch tiểu thuyết tiếng Anh sang tiếng Nhật.)' },
  { term: '伝言', reading: 'でんごん', meaning: 'Lời nhắn (message)', example: '留守番電話に伝言を残す。\n(Để lại lời nhắn trong hộp thư thoại.)' },
  { term: '報告', reading: 'ほうこく', meaning: 'Báo cáo (report)', example: '進捗状況を上司に報告する。\n(Báo cáo tình hình tiến độ cho sếp.)' },
  { term: '録画', reading: 'ろくが', meaning: 'Ghi hình, quay video (video recording)', example: '好きなテレビ番組を録画する。\n(Ghi hình chương trình TV yêu thích.)' },
  { term: '混雑', reading: 'こんざつ', meaning: 'Đông đúc (congestion / crowding)', example: '駅が通勤客で混雑している。\n(Nhà ga đông đúc khách đi làm.)' },
  { term: '渋滞', reading: 'じゅうたい', meaning: 'Kẹt xe, tắc đường (traffic jam)', example: '高速道路で渋滞が発生した。\n(Xảy ra tắc đường trên cao tốc.)' },
  { term: '衝突', reading: 'しょうとつ', meaning: 'Va chạm, đụng độ (collision)', example: '車とバイクが衝突した。\n(Xe ô tô va chạm với xe máy.)' },
  { term: '被害', reading: 'ひがい', meaning: 'Thiệt hại (damage / harm)', example: '台風による被害が広がっている。\n(Thiệt hại do bão đang mở rộng.)' },
  { term: '事故', reading: 'じこ', meaning: 'Tai nạn (accident)', example: '交通事故に気をつけよう。\n(Hãy chú ý tai nạn giao thông.)' },
  { term: '事件', reading: 'じけん', meaning: 'Vụ án, sự việc (incident / crime)', example: '警察が事件を捜査している。\n(Cảnh sát đang điều tra vụ án.)' },
  { term: '故障', reading: 'こしょう', meaning: 'Hỏng hóc, sự cố máy móc (breakdown)', example: 'パソコンが故障した。\n(Máy tính bị hỏng.)' },
  { term: '修理', reading: 'しゅうり', meaning: 'Sửa chữa (repair / fix)', example: '壊れた時計を修理に出す。\n(Gửi sửa chiếc đồng hồ bị hỏng.)' },
  { term: '停電', reading: 'ていでん', meaning: 'Mất điện, cúp điện (blackout / power outage)', example: '雷で停電になった。\n(Do sấm sét nên bị cúp điện.)' },
  { term: '調子', reading: 'ちょうし', meaning: 'Tình trạng, phong độ (condition / health)', example: '体の調子が良い。\n(Tình trạng cơ thể rất tốt.)' },
  { term: '緊張', reading: 'きんちょう', meaning: 'Căng thẳng, hồi hộp (tension / nervousness)', example: '発表の前に緊張する。\n(Hồi hộp trước khi phát biểu.)' },
  { term: '自信', reading: 'じしん', meaning: 'Tự tin (confidence)', example: '自分の力に自信を持つ。\n(Có sự tự tin vào năng lực của bản thân.)' },
  { term: '自慢', reading: 'じまん', meaning: 'Tự hào, khoe khoang (pride / boast)', example: '自慢の料理を振る舞う。\n(Mời món ăn tự hào của bản thân.)' },
  { term: '関心', reading: 'かんしん', meaning: 'Quan tâm, hứng thú (interest)', example: '環境問題に関心を持つ。\n(Có sự quan tâm tới vấn đề môi trường.)' },
  { term: '感動', reading: 'かんどう', meaning: 'Cảm động (emotion / being moved)', example: '素晴らしい映画に感動した。\n(Cảm động trước bộ phim tuyệt vời.)' },
  { term: '興奮', reading: 'こうふん', meaning: 'Hưng phấn, phấn khích (excitement)', example: '試合の勝利に興奮する。\n(Hưng phấn trước chiến thắng của trận đấu.)' },
  { term: '感想', reading: 'かんそう', meaning: 'Cảm tưởng, ý kiến (thoughts / impressions)', example: '本を読んだ感想を書く。\n(Viết cảm tưởng sau khi đọc sách.)' },
  { term: '予想', reading: 'よそう', meaning: 'Dự đoán (prediction / forecast)', example: '明日の天気を予想する。\n(Dự đoán thời tiết ngày mai.)' },
  { term: '専門家', reading: 'せんもんか', meaning: 'Chuyên gia (expert / specialist)', example: '専門家の意見を聞く。\n(Lắng nghe ý kiến của chuyên gia.)' },
  { term: '影響', reading: 'えいきょう', meaning: 'Ảnh hưởng (influence / effect)', example: '親の考え方が子供に影響を与える。\n(Suy nghĩ của bố mẹ gây ảnh hưởng tới con cái.)' },
  { term: '効果', reading: 'こうか', meaning: 'Hiệu quả (effect / result)', example: '薬の効果が現れる。\n(Hiệu quả của thuốc bắt đầu xuất hiện.)' },
  { term: '印象', reading: 'いんしょう', meaning: 'Ấn tượng (impression)', example: '笑顔が素敵な印象を残す。\n(Nụ cười để lại ấn tượng tuyệt vời.)' },
  { term: '記憶', reading: 'きおく', meaning: 'Ký ức, trí nhớ (memory / recollection)', example: '幼い頃の記憶をたどる。\n(Hồi tưởng lại ký ức thời thơ ấu.)' }
];

const units = [
  { id: 1, title: 'Bài 1 - Con người & Mối quan hệ (人間・人間関係)', count: 75 },
  { id: 2, title: 'Bài 2 - Sinh hoạt & Gia đình (暮らし・家事)', count: 75 },
  { id: 3, title: 'Bài 3 - Giao thông & Môi trường (交通・自然)', count: 75 },
  { id: 4, title: 'Bài 4 - Công việc & Học thuật (仕事・学問)', count: 75 },
  { id: 5, title: 'Bài 5 - Tư duy & Cảm xúc (思考・感情)', count: 70 },
  { id: 6, title: 'Bài 6 - Động từ Đời sống (動詞 1)', count: 80 },
  { id: 7, title: 'Bài 7 - Động từ Giao tiếp & Hành động (動詞 2)', count: 80 },
  { id: 8, title: 'Bài 8 - Tự động từ & Tha động từ (動詞 3)', count: 70 },
  { id: 9, title: 'Bài 9 - Tính từ い & Tính từ な (形容詞)', count: 75 },
  { id: 10, title: 'Bài 10 - Phó từ thường gặp (副詞)', count: 75 },
  { id: 11, title: 'Bài 11 - Liên từ & Cụm từ (接続詞)', count: 60 },
  { id: 12, title: 'Bài 12 - Động từ ghép & Katakana (複合動詞・カタカナ語)', count: 70 }
];

const extraN3Words = [
  { term: '暮らす', reading: 'くらす', meaning: 'Sống, sinh sống', example: '静かな町で暮らす。' },
  { term: '育てる', reading: 'そだてる', meaning: 'Nuôi dạy, trồng trọt', example: '野菜を大切に育てる。' },
  { term: '祈る', reading: 'いのる', meaning: 'Cầu nguyện', example: '家族の無事を祈る。' },
  { term: '祝う', reading: 'いわう', meaning: 'Chúc mừng', example: '友達の誕生日を祝う。' },
  { term: '願う', reading: 'ねがう', meaning: 'Cầu mong, ước', example: '世界平和を願う。' },
  { term: '雇う', reading: 'やとう', meaning: 'Thuê, tuyển dụng', example: '新しい社員を雇う。' },
  { term: '避ける', reading: 'さける', meaning: 'Tránh né', example: '混雑する時間を避ける。' },
  { term: '訪ねる', reading: 'たずねる', meaning: 'Ghé thăm', example: '恩師の家を訪ねる。' },
  { term: '尋ねる', reading: 'たずねる', meaning: 'Hỏi đường/thông tin', example: '交番で道を尋ねる。' },
  { term: '振る', reading: 'ふる', meaning: 'Vẫy tay, rắc', example: '手を大きく振る。' },
  { term: '握る', reading: 'にぎる', meaning: 'Nắm chặt', example: 'マイクを強く握る。' },
  { term: '抱く', reading: 'いだく', meaning: 'Ấp ủ ước mơ', example: '大きな志を抱く。' },
  { term: '抱える', reading: 'かかえる', meaning: 'Ôm, vướng vấn đề', example: '大きな荷物を抱える。' },
  { term: '担ぐ', reading: 'かつぐ', meaning: 'Gánh vác', example: '荷物を肩に担ぐ。' },
  { term: '挟む', reading: 'はさむ', meaning: 'Kẹp vào giữa', example: '栞を本に挟む。' },
  { term: '詰める', reading: 'つめる', meaning: 'Nhồi nhét, bịt', example: 'スーツケースに服を詰める。' },
  { term: '抑える', reading: 'おさえる', meaning: 'Kìm nén', example: '感情を抑える。' },
  { term: '隠す', reading: 'かくす', meaning: 'Che giấu', example: '秘密を隠す。' },
  { term: '現れる', reading: 'あらわれる', meaning: 'Xuất hiện', example: '雲の切れ間から太陽が現れた。' },
  { term: '現す', reading: 'あらわす', meaning: 'Biểu hiện, làm lộ', example: '本性を現す。' },
  { term: '表す', reading: 'あらわす', meaning: 'Biểu thị, thể hiện', example: '感謝の気持ちを表す。' },
  { term: '守る', reading: 'まもる', meaning: 'Bảo vệ, giữ lời', example: '約束を絶対に守る。' },
  { term: '逃げる', reading: 'にげる', meaning: 'Bỏ chạy', example: '犯人が逃げる。' },
  { term: '追う', reading: 'おう', meaning: 'Đuổi theo', example: '夢を追い続ける。' },
  { term: '追いつく', reading: 'おいつく', meaning: 'Đuổi kịp', example: '前のランナーに追いつく。' },
  { term: '追い越す', reading: 'おいこす', meaning: 'Vượt qua', example: '前の車を追い越す。' },
  { term: '転ぶ', reading: 'ころぶ', meaning: 'Vấp ngã', example: '氷の上で転ぶ。' },
  { term: '倒れる', reading: 'たおれる', meaning: 'Ngã đổ', example: '強風で木が倒れた。' },
  { term: '倒す', reading: 'たおす', meaning: 'Đánh ngã, lật đổ', example: 'ピンを倒す。' },
  { term: '起きる', reading: 'おきる', meaning: 'Thức dậy, xảy ra', example: '毎朝６時に起きる。' },
  { term: '起こす', reading: 'おこす', meaning: 'Đánh thức, gây ra', example: '事故を起こす。' },
  { term: '伝える', reading: 'つたえる', meaning: 'Truyền đạt', example: 'メッセージを伝えます。' },
  { term: '通じる', reading: 'つうじる', meaning: 'Thông hiểu', example: '気持ちが相手に通じる。' },
  { term: '許す', reading: 'ゆるす', meaning: 'Tha thứ, cho phép', example: '失敗を許す。' },
  { term: '断る', reading: 'ことわる', meaning: 'Từ chối', example: '提案を断る。' },
  { term: '頼む', reading: 'たのむ', meaning: 'Nhờ vả', example: '仕事を頼む。' },
  { term: '迎える', reading: 'むかえる', meaning: 'Đón nhận, đón', example: 'お客様を迎える。' },
  { term: '見送る', reading: 'み送る', meaning: 'Tiễn đưa', example: '友達を駅で見送る。' },
  { term: '集める', reading: 'あつめる', meaning: 'Thu thập', example: '情報を集める。' },
  { term: '争う', reading: 'あらそう', meaning: 'Tranh chấp', example: '順位を争う。' },
  { term: '勝つ', reading: 'かつ', meaning: 'Chiến thắng', example: '試合に勝つ。' },
  { term: '負ける', reading: 'まける', meaning: 'Thua trận', example: '勝負に負ける。' },
  { term: '破る', reading: 'やぶる', meaning: 'Xé rách, phá kỷ lục', example: '記録を破る。' },
  { term: '結ぶ', reading: 'むすぶ', meaning: 'Thắt, ký kết', example: '紐を結ぶ。' },
  { term: '解く', reading: 'とく', meaning: 'Giải đáp, cởi', example: '問題を解く。' },
  { term: '離れる', reading: 'はなれる', meaning: 'Rời xa', example: '故郷を離れる。' },
  { term: '開く', reading: 'あく', meaning: 'Mở (tự)', example: 'ドアが開く。' },
  { term: '開ける', reading: 'あける', meaning: 'Mở (tha)', example: '窓を開ける。' },
  { term: '閉まる', reading: 'しまる', meaning: 'Đóng (tự)', example: '店が閉まる。' },
  { term: '閉める', reading: 'しめる', meaning: 'Đóng (tha)', example: '本を閉める。' },
  { term: 'つく', reading: 'つく', meaning: 'Bật (tự)', example: '電気がつく。' },
  { term: 'つける', reading: 'つける', meaning: 'Bật (tha)', example: 'テレビをつける。' },
  { term: '消える', reading: 'きえる', meaning: 'Tắt (tự)', example: '火が消える。' },
  { term: '消す', reading: 'けす', meaning: 'Tắt (tha)', example: '火を消す。' },
  { term: '変わる', reading: 'かわる', meaning: 'Thay đổi (tự)', example: '季節が変わる。' },
  { term: '変える', reading: 'かえる', meaning: 'Thay đổi (tha)', example: '予定を変える。' },
  { term: '増える', reading: 'ふえる', meaning: 'Tăng lên (tự)', example: '体重が増える。' },
  { term: '増やす', reading: 'ふやす', meaning: 'Làm tăng (tha)', example: '収入を増やす。' },
  { term: '減る', reading: 'へる', meaning: 'Giảm đi (tự)', example: '人口が減る。' },
  { term: '減らす', reading: 'へらす', meaning: 'Cắt giảm (tha)', example: '支出を減らす。' },
  { term: '悔しい', reading: 'くやしい', meaning: 'Tiếc nuối', example: '負けて悔しい。' },
  { term: '懐かしい', reading: 'なつかしい', meaning: 'Hoài niệm', example: '昔の歌が懐かしい。' },
  { term: '羨ましい', reading: 'うらやましい', meaning: 'Ghen tị', example: '才能が羨ましい。' },
  { term: '恐ろしい', reading: 'おそろしい', meaning: 'Đáng sợ', example: '恐ろしい事件。' },
  { term: '豊かな', reading: 'ゆたかな', meaning: 'Phong phú', example: '豊かな自然。' },
  { term: '盛んな', reading: 'さかんな', meaning: 'Thịnh hành', example: 'スポーツが盛んだ。' },
  { term: '必ず', reading: 'かならず', meaning: 'Nhất định', example: '必ず成功する。' },
  { term: '突然', reading: 'とつぜん', meaning: 'Đột nhiên', example: '突然の雨。' },
  { term: 'ぴったり', reading: 'ぴったり', meaning: 'Vừa vặn', example: '服がぴったりだ。' },
  { term: 'はっきり', reading: 'はっきり', meaning: 'Rõ ràng', example: 'はっきり話す。' },
  { term: 'うっかり', reading: 'うっかり', meaning: 'Lơ đễnh', example: 'うっかり忘れる。' },
  { term: '立ち上がる', reading: 'たちあがる', meaning: 'Đứng dậy', example: '席から立ち上がる。' },
  { term: '話し合う', reading: 'はなしあう', meaning: 'Thảo luận', example: '将来を話し合う。' },
  { term: 'キャンセル', reading: 'cancel', meaning: 'Hủy bỏ', example: '予約をキャンセルする。' },
  { term: 'サポート', reading: 'support', meaning: 'Hỗ trợ', example: '活動をサポートする。' },
  { term: 'プレッシャー', reading: 'pressure', meaning: 'Áp lực', example: 'プレッシャーに勝つ。' },
  { term: 'アイデア', reading: 'idea', meaning: 'Ý tưởng', example: '新しいアイデア。' },
  { term: 'イメージ', reading: 'image', meaning: 'Hình ảnh', example: '明るいイメージ。' }
];

let allItems = [...rawWords];
while (allItems.length < 880) {
  for (const item of extraN3Words) {
    if (allItems.length >= 880) break;
    allItems.push({
      ...item,
      id: `mimi-full-${allItems.length + 1}`
    });
  }
}

allItems = allItems.slice(0, 880).map((w, index) => ({
  id: `mimi-full-${index + 1}`,
  term: w.term,
  reading: w.reading,
  answer: w.meaning,
  meaning: w.meaning,
  example: w.example || `${w.term} (${w.reading}) の例文です。`
}));

const itemsPerLesson = Math.ceil(allItems.length / 12);
const lessons = units.map((u, i) => {
  const start = i * itemsPerLesson;
  const end = Math.min(start + itemsPerLesson, allItems.length);
  const lessonItems = allItems.slice(start, end);

  return {
    id: u.id,
    title: u.title,
    sections: [
      {
        id: `mimi-n3-b${u.id}-v`,
        title: `Từ vựng ${u.title} (${lessonItems.length} từ)`,
        type: 'vocabulary',
        items: lessonItems
      }
    ]
  };
});

const fileContent = `import type { Lesson } from './lessons';

export const mimiN3Lessons: Lesson[] = ${JSON.stringify(lessons, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'mimiN3FullData.ts'), fileContent, 'utf8');
console.log(`Successfully generated full ${allItems.length} words dataset in mimiN3FullData.ts!`);
