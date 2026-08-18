import type { Lesson } from './lessons';

export interface KanjiChar {
  char: string;
  hanViet: string;
  strokes: number;
  onyomi: string[];
  kunyomi: string[];
  meaning: string;
  examples: { word: string; reading: string; meaning: string }[];
}

export const kanjiMasterN3Lessons: Lesson[] = [
  {
    id: 1,
    title: "Chương 3 - Bài 1: 作り方 1 (熱, 冷, 温, 度)",
    sections: [
      {
        id: "km-n3-c3-l1-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c3-l1-1", "term": "熱い", "reading": "あつい", "answer": "Nóng (nước nóng, cà phê nóng)", "meaning": "Nóng (nước nóng, cà phê nóng)", "example": "熱いコーヒーで舌をやけどする。\n(Bị bỏng lưỡi vì cà phê nóng.)" },
          { "id": "km-n3-c3-l1-2", "term": "高熱", "reading": "こうねつ", "answer": "Sốt cao", "meaning": "Sốt cao", "example": "インフルエンザにかかり高熱が出た。\n(Bị nhiễm cúm nên đã sốt cao.)" },
          { "id": "km-n3-c3-l1-3", "term": "冷える", "reading": "ひえる", "answer": "Lạnh đi, nguội đi (Tự động từ)", "meaning": "Lạnh đi, nguội đi (Tự động từ)", "example": "寒さで体がすっかり冷えてしまった。\n(Vì lạnh nên toàn thân bị lạnh ngắt.)" },
          { "id": "km-n3-c3-l1-4", "term": "冷やす", "reading": "ひやす", "answer": "Làm lạnh (Tha động từ)", "meaning": "Làm lạnh (Tha động từ)", "example": "ビールを冷やしておく。\n(Làm lạnh sẵn bia.)" },
          { "id": "km-n3-c3-l1-5", "term": "冷たい", "reading": "つめたい", "answer": "Lạnh, buốt", "meaning": "Lạnh, buốt", "example": "冷たいジュースを一気に飲んだ。\n(Uống một hơi hết cốc nước ép lạnh.)" },
          { "id": "km-n3-c3-l1-6", "term": "冷める", "reading": "さめる", "answer": "Nguội đi (Tự động từ)", "meaning": "Nguội đi (Tự động từ)", "example": "気持ちが冷めて、恋人とわかれた。\n(Tình cảm nguội lạnh nên đã chia tay người yêu.)" },
          { "id": "km-n3-c3-l1-7", "term": "温まる", "reading": "あたたまる", "answer": "Ấm lên (Tự động từ)", "meaning": "Ấm lên (Tự động từ)", "example": "スープを飲んだら、体が温まった。\n(Uống súp xong thì cơ thể ấm lên.)" },
          { "id": "km-n3-c3-l1-8", "term": "温かい", "reading": "あたたかい", "answer": "Ấm áp", "meaning": "Ấm áp", "example": "温かいおふろにつかってつかれを取る。\n(Ngâm mình trong bồn tắm ấm áp để xua tan mệt mỏi.)" },
          { "id": "km-n3-c3-l1-9", "term": "温度", "reading": "おんど", "answer": "Nhiệt độ", "meaning": "Nhiệt độ", "example": "日本では温度を「セルシウス（℃）」で表す。\n(Ở Nhật Bản, nhiệt độ được biểu thị bằng độ C.)" },
          { "id": "km-n3-c3-l1-10", "term": "この度", "reading": "このたび", "answer": "Lần này, dịp này", "meaning": "Lần này, dịp này", "example": "この度はお世話になりました。\n(Lần này đã làm phiền/được giúp đỡ rất nhiều.)" },
          { "id": "km-n3-c3-l1-11", "term": "熱心", "reading": "ねっしん", "answer": "Nhiệt tình, chăm chỉ", "meaning": "Nhiệt tình, chăm chỉ", "example": "ねっしんに勉強する。\n(Chăm chỉ học tập.)" },
          { "id": "km-n3-c3-l1-12", "term": "冷や", "reading": "ひや", "answer": "Rượu lạnh, nước mát", "meaning": "Rượu lạnh, nước mát", "example": "お酒をひやで飲む。\n(Uống rượu lạnh.)" },
          { "id": "km-n3-c3-l1-13", "term": "冷やかす", "reading": "ひやかす", "answer": "Trêu chọc, ghẹo", "meaning": "Trêu chọc, ghẹo", "example": "新婚の二人をみんなでひやかす。\n(Mọi người cùng trêu chọc cặp đôi mới cưới.)" },
          { "id": "km-n3-c3-l1-14", "term": "冷ます", "reading": "さます", "answer": "Làm nguội (Tha động từ)", "meaning": "Làm nguội (Tha động từ)", "example": "薬を飲んで熱をさます。\n(Uống thuốc để hạ nhiệt.)" },
          { "id": "km-n3-c3-l1-15", "term": "温か", "reading": "あたたか", "answer": "Ấm áp", "meaning": "Ấm áp", "example": "あたたかな気持ちになる。\n(Cảm thấy lòng ấm áp.)" },
          { "id": "km-n3-c3-l1-16", "term": "温める", "reading": "あたためる", "answer": "Làm ấm (Tha động từ)", "meaning": "Làm ấm (Tha động từ)", "example": "電子レンジでおにぎりをあたためる。\n(Làm nóng cơm nắm bằng lò vi sóng.)" },
          { "id": "km-n3-c3-l1-17", "term": "体温計", "reading": "たいおんけい", "answer": "Nhiệt kế", "meaning": "Nhiệt kế", "example": "たいおんけいで熱を計る。\n(Đo nhiệt độ cơ thể bằng nhiệt kế.)" },
          { "id": "km-n3-c3-l1-18", "term": "支度", "reading": "したく", "answer": "Chuẩn bị, sửa soạn", "meaning": "Chuẩn bị, sửa soạn", "example": "早起きして朝食のしたくをする。\n(Dậy sớm chuẩn bị bữa sáng.)" },
          { "id": "km-n3-c3-l1-19", "term": "法度", "reading": "はっと", "answer": "Luật lệ, điều cấm kỵ", "meaning": "Luật lệ, điều cấm kỵ", "example": "昔の法度を調べる。\n(Tìm hiểu luật lệ/điều cấm kỵ ngày xưa.)" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Chương 3 - Bài 2: 作り方 2 (材, 型, 焼, 器)",
    sections: [
      {
        id: "km-n3-c3-l2-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c3-l2-1", "term": "材料", "reading": "ざいりょう", "answer": "Nguyên liệu", "meaning": "Nguyên liệu", "example": "ケーキの材料を買いそろえる。\n(Mua đầy đủ nguyên liệu làm bánh.)" },
          { "id": "km-n3-c3-l2-2", "term": "木材", "reading": "もくざい", "answer": "Gỗ, mộc tài", "meaning": "Gỗ, mộc tài", "example": "古い木材を再利用する。\n(Tái sử dụng gỗ cũ.)" },
          { "id": "km-n3-c3-l2-3", "term": "型", "reading": "かた", "answer": "Khuôn, mẫu, nhóm", "meaning": "Khuôn, mẫu, nhóm", "example": "彼は型にはまった答えしか言わない。\n(Anh ta chỉ toàn đưa ra những câu trả lời theo khuôn mẫu.)" },
          { "id": "km-n3-c3-l2-4", "term": "典型的な", "reading": "てんけいてきな", "answer": "Điển hình", "meaning": "Điển hình", "example": "鼻水と熱は典型的なかぜの症状だ。\n(Sổ mũi và sốt là những triệu chứng điển hình của cảm cúm.)" },
          { "id": "km-n3-c3-l2-5", "term": "模型", "reading": "もけい", "answer": "Mô hình", "meaning": "Mô hình", "example": "飛行機の模型をかざる。\n(Trang trí mô hình máy ảnh/máy bay.)" },
          { "id": "km-n3-c3-l2-6", "term": "焼く", "reading": "やく", "answer": "Nướng, rán (Tha động từ)", "meaning": "Nướng, rán (Tha động từ)", "example": "焼いたパンとコーヒーが毎朝の食事だ。\n(Bánh mì nướng và cà phê là bữa sáng hằng ngày.)" },
          { "id": "km-n3-c3-l2-7", "term": "延焼", "reading": "えんしょう", "answer": "Lửa cháy lan rộng", "meaning": "Lửa cháy lan rộng", "example": "延焼を防ぐために、必死に消火する。\n(Nỗ lực dập lửa để ngăn đám cháy lan rộng.)" },
          { "id": "km-n3-c3-l2-8", "term": "日焼け", "reading": "ひやけ", "answer": "Cháy nắng", "meaning": "Cháy nắng", "example": "日焼けしすぎて、全身真っ赤になった。\n(Bị cháy nắng quá mức nên toàn thân đỏ ửng lên.)" },
          { "id": "km-n3-c3-l2-9", "term": "器", "reading": "うつわ", "answer": "Bát đĩa, đồ đựng", "meaning": "Bát đĩa, đồ đựng", "example": "料理を器にもってテーブルに運ぶ。\n(Bày thức ăn vào bát đĩa rồi bưng ra bàn.)" },
          { "id": "km-n3-c3-l2-10", "term": "食器", "reading": "しょっき", "answer": "Dụng cụ ăn uống, bát đĩa", "meaning": "Dụng cụ ăn uống, bát đĩa", "example": "夕食に使った食器を洗う。\n(Rửa bát đĩa đã dùng trong bữa tối.)" },
          { "id": "km-n3-c3-l2-11", "term": "素材", "reading": "そざい", "answer": "Nguyên liệu thô, nguyên bản", "meaning": "Nguyên liệu thô, nguyên bản", "example": "そざいをいかした料理。\n(Món ăn tận dụng được sự nguyên bản của nguyên liệu.)" },
          { "id": "km-n3-c3-l2-12", "term": "材料", "reading": "ざいりょう", "answer": "Tư liệu, nguyên liệu", "meaning": "Tư liệu, nguyên liệu", "example": "人生を小説のざいりょうにする。\n(Lấy cuộc đời làm tư liệu cho cuốn tiểu thuyết.)" },
          { "id": "km-n3-c3-l2-13", "term": "人材", "reading": "じんざい", "answer": "Nhân tài, nguồn nhân lực", "meaning": "Nhân tài, nguồn nhân lực", "example": "優れたじんざいを集める。\n(Thu hút nguồn nhân tài ưu tú.)" },
          { "id": "km-n3-c3-l2-15", "term": "焼ける", "reading": "やける", "answer": "Được nướng chín, tỏa hương (Tự động từ)", "meaning": "Được nướng chín, tỏa hương (Tự động từ)", "example": "パンがやけるいいにおいがする。\n(Có mùi thơm nức của bánh mì đang được nướng.)" },
          { "id": "km-n3-c3-l2-16", "term": "容器", "reading": "ようき", "answer": "Đồ đựng, hộp chứa", "meaning": "Đồ đựng, hộp chứa", "example": "ガラスのようきに入ったジャム。\n(Mứt đựng trong lọ thủy tinh.)" },
          { "id": "km-n3-c3-l2-17", "term": "器", "reading": "うつわ", "answer": "Khí chất, tài làm sếp", "meaning": "Khí chất, tài làm sếp", "example": "彼は社長のうつわではない。\n(Anh ta không có khí chất để làm giám đốc.)" },
          { "id": "km-n3-c3-l2-18", "term": "器用な", "reading": "きような", "answer": "Khéo léo, khéo tay", "meaning": "Khéo léo, khéo tay", "example": "手先がきような人。\n(Người có bàn tay khéo léo.)" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Chương 3 - Bài 3: 食材 1 (卵, 乳, 粉, 塩)",
    sections: [
      {
        id: "km-n3-c3-l3-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c3-l3-1", "term": "卵", "reading": "たまご", "answer": "Quả trứng", "meaning": "Quả trứng", "example": "卵をわって、ボールに入れる。\n(Đập trứng cho vào bát.)" },
          { "id": "km-n3-c3-l3-2", "term": "卵白", "reading": "らんぱく", "answer": "Lòng trắng trứng", "meaning": "Lòng trắng trứng", "example": "卵白にさとうを入れてよくあわ立てる。\n(Cho đường vào lòng trắng trứng rồi đánh bông lên.)" },
          { "id": "km-n3-c3-l3-3", "term": "乳", "reading": "ちち", "answer": "Sữa mẹ, vú, sữa", "meaning": "Sữa mẹ, vú, sữa", "example": "山羊の乳を使ったチーズはおいしい。\n(Phô mai làm từ sữa dê rất ngon.)" },
          { "id": "km-n3-c3-l3-4", "term": "乳歯", "reading": "にゅうし", "answer": "Răng sữa", "meaning": "Răng sữa", "example": "永久歯が生え始め、乳歯がぬける。\n(Răng vĩnh viễn bắt đầu mọc và răng sữa rụng đi.)" },
          { "id": "km-n3-c3-l3-5", "term": "小麦粉", "reading": "こむぎこ", "answer": "Bột mì", "meaning": "Bột mì", "example": "小麦粉はしっかりふるってください。\n(Hãy rây bột mì thật kỹ.)" },
          { "id": "km-n3-c3-l3-6", "term": "粉末", "reading": "ふんまつ", "answer": "Dạng bột, bột mịn", "meaning": "Dạng bột, bột mịn", "example": "粉末スープにお湯を入れる。\n(Cho nước nóng vào gói súp bột.)" },
          { "id": "km-n3-c3-l3-7", "term": "粉薬", "reading": "こなぐすり", "answer": "Thuốc bột", "meaning": "Thuốc bột", "example": "毎日、食後に二種類の粉薬を飲む。\n(Mỗi ngày uống 2 loại thuốc bột sau bữa ăn.)" },
          { "id": "km-n3-c3-l3-8", "term": "塩味", "reading": "しおあじ", "answer": "Vị muối, vị mặn", "meaning": "Vị muối, vị mặn", "example": "塩味のラーメンを注文する。\n(Gọi món mì ramen vị muối mặn.)" },
          { "id": "km-n3-c3-l3-9", "term": "塩", "reading": "しお", "answer": "Muối", "meaning": "Muối", "example": "塩をひとつまみ入れると味が変わる。\n(Thêm một nhúm muối là hương vị thay đổi.)" },
          { "id": "km-n3-c3-l3-10", "term": "塩素", "reading": "えんそ", "answer": "Chất clo tẩy rửa", "meaning": "Chất clo tẩy rửa", "example": "じょうすいきで水道の塩素を取る。\n(Dùng máy lọc để loại bỏ chất clo trong nước máy.)" },
          { "id": "km-n3-c3-l3-11", "term": "ゆで卵", "reading": "ゆでたまご", "answer": "Trứng luộc", "meaning": "Trứng luộc", "example": "ゆでたまごの黄身は半じゅくがおいしい。\n(Lòng đỏ trứng luộc ăn nửa chín nửa lòng đào là ngon nhất.)" },
          { "id": "km-n3-c3-l3-12", "term": "産卵", "reading": "さんらん", "answer": "Đẻ trứng, sinh sản", "meaning": "Đẻ trứng, sinh sản", "example": "ウミガメが海辺でさんらんする。\n(Rùa biển đẻ trứng bên bờ biển.)" },
          { "id": "km-n3-c3-l3-13", "term": "牛乳", "reading": "ぎゅうにゅう", "answer": "Sữa bò", "meaning": "Sữa bò", "example": "ぎゅうにゅうパックを再利用する。\n(Tái sử dụng vỏ hộp sữa.)" },
          { "id": "km-n3-c3-l3-14", "term": "乳飲み子", "reading": "ちのみご", "answer": "Trẻ sơ sinh, trẻ còn bú sữa", "meaning": "Trẻ sơ sinh, trẻ còn bú sữa", "example": "ち飲み子をかかえて、働きに出る。\n(Ẵm đứa con còn ẵm ngửa đi làm kiếm sống.)" },
          { "id": "km-n3-c3-l3-15", "term": "哺乳類", "reading": "ほにゅうるい", "answer": "Thủ loại, động vật có vú", "meaning": "Thủ loại, động vật có vú", "example": "地球上のほにゅうるいは約五千種だ。\n(Động vật có vú trên Trái đất có khoảng 5.000 loài.)" },
          { "id": "km-n3-c3-l3-16", "term": "粉雪", "reading": "こなゆき", "answer": "Tuyết bột, tuyết mịn", "meaning": "Tuyết bột, tuyết mịn", "example": "寒さがきびしくなり、こなゆきがちらつく。\n(Trời trở lạnh gay gắt, tuyết bột rơi lất phất.)" },
          { "id": "km-n3-c3-l3-17", "term": "花粉", "reading": "かふん", "answer": "Phấn hoa", "meaning": "Phấn hoa", "example": "春になるとかふんが大量に飛ぶ。\n(Khi mùa xuân đến, phấn hoa bay ngập tràn.)" },
          { "id": "km-n3-c3-l3-18", "term": "塩分", "reading": "えんぶん", "answer": "Lượng muối, độ mặn", "meaning": "Lượng muối, độ mặn", "example": "えんぶんのとりすぎはよくない。\n(Hấp thụ quá nhiều lượng muối là không tốt.)" },
          { "id": "km-n3-c3-l3-19", "term": "粉", "reading": "こな", "answer": "Bột, chất bột", "meaning": "Bột, chất bột", "example": "小麦から粉を作る。\n(Làm bột từ lúa mì.)" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Chương 3 - Bài 4: 食材 2 (菜, 果, 豆, 缶)",
    sections: [
      {
        id: "km-n3-c3-l4-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c3-l4-1", "term": "野菜", "reading": "やさい", "answer": "Rau", "meaning": "Rau", "example": "緑黄色野菜をたくさん食べる。\n(Ăn nhiều rau xanh đậm/vàng.)" },
          { "id": "km-n3-c3-l4-2", "term": "菜の花", "reading": "なのはな", "answer": "Hoa cải dầu", "meaning": "Hoa cải dầu", "example": "春になると菜の花で一面黄色になる。\n(Vào mùa xuân, hoa cải nhuộm vàng cả một góc trời.)" },
          { "id": "km-n3-c3-l4-3", "term": "成果", "reading": "せいか", "answer": "Thành quả, kết quả", "meaning": "Thành quả, kết quả", "example": "日ごろの練習の成果を出す。\n(Thể hiện thành quả tập luyện hằng ngày.)" },
          { "id": "km-n3-c3-l4-4", "term": "果たす", "reading": "はたす", "answer": "Hoàn thành, thực hiện lời hứa (Tha động từ)", "meaning": "Hoàn thành, thực hiện lời hứa (Tha động từ)", "example": "何があっても彼女との約束を果たす。\n(Dù thế nào đi nữa tôi cũng sẽ thực hiện lời hứa với cô ấy.)" },
          { "id": "km-n3-c3-l4-5", "term": "果実酒", "reading": "かじつしゅ", "answer": "Rượu quả, rượu ngâm trái cây", "meaning": "Rượu quả, rượu ngâm trái cây", "example": "いろいろな果実酒を作る。\n(Ủ các loại rượu ngâm trái cây khác nhau.)" },
          { "id": "km-n3-c3-l4-6", "term": "豆腐", "reading": "とうふ", "answer": "Đậu phụ", "meaning": "Đậu phụ", "example": "低カロリーの豆腐はダイエットにいい。\n(Đậu phụ ít calo rất tốt cho việc giảm cân.)" },
          { "id": "km-n3-c3-l4-7", "term": "豆まき", "reading": "まめまき", "answer": "Ném đậu trừ tà, rải đậu", "meaning": "Ném đậu trừ tà, rải đậu", "example": "2月のせつぶんの日は豆まきをする。\n(Vào ngày Tiết phân tháng Hai, mọi người rải đậu trừ tà.)" },
          { "id": "km-n3-c3-l4-8", "term": "大豆", "reading": "だいず", "answer": "Đậu nành", "meaning": "Đậu nành", "example": "大豆からしょう油やみそが作られる。\n(Tương bần và nước tương được làm từ hạt đậu nành.)" },
          { "id": "km-n3-c3-l4-9", "term": "空き缶", "reading": "あきかん", "answer": "Lon rỗng", "meaning": "Lon rỗng", "example": "川辺の空き缶を拾う活動にさんかする。\n(Tham gia hoạt động thu nhặt vỏ lon rỗng ven bờ sông.)" },
          { "id": "km-n3-c3-l4-10", "term": "缶コーヒー", "reading": "かんこーひー", "answer": "Cà phê lon", "meaning": "Cà phê lon", "example": "缶コーヒーを飲んで一休みする。\n(Uống lon cà phê rồi nghỉ ngơi một chút.)" },
          { "id": "km-n3-c3-l4-11", "term": "生野菜", "reading": "なまやさい", "answer": "Rau sống, rau tươi", "meaning": "Rau sống, rau tươi", "example": "なまやさいのサラダを食べる。\n(Ăn món salad rau sống.)" },
          { "id": "km-n3-c3-l4-12", "term": "菜園", "reading": "さいえん", "answer": "Vườn rau", "meaning": "Vườn rau", "example": "家庭さいえんでトマトを育てる。\n(Trồng cà chua ở vườn rau gia đình.)" },
          { "id": "km-n3-c3-l4-13", "term": "果てる", "reading": "はてる", "answer": "Tận cùng, kiệt sức (Tự động từ)", "meaning": "Tận cùng, kiệt sức (Tự động từ)", "example": "働きすぎてつかれはてた。 / 世界のはてまで旅をしたい。\n(Làm việc quá sức nên kiệt quệ mệt mỏi. / Muốn đi du lịch đến tận cùng thế giới.)" },
          { "id": "km-n3-c3-l4-14", "term": "豆", "reading": "まめ", "answer": "Hạt đậu, hạt cà phê", "meaning": "Hạt đậu, hạt cà phê", "example": "数種類のコーヒーまめをブレンドする。\n(Trộn lẫn vài loại hạt cà phê.)" },
          { "id": "km-n3-c3-l4-15", "term": "豆知識", "reading": "まめちしき", "answer": "Mẹo nhỏ, kiến thức bên lề", "meaning": "Mẹo nhỏ, kiến thức bên lề", "example": "まめ知識が豊富な人。\n(Người có lượng kiến thức bên lề phong phú.)" },
          { "id": "km-n3-c3-l4-17", "term": "缶詰", "reading": "かんづめ", "answer": "Đồ hộp, thực phẩm đóng hộp", "meaning": "Đồ hộp, thực phẩm đóng hộp", "example": "かんづめを使ったかんたんな料理。\n(Món ăn đơn giản làm bằng đồ đóng hộp.)" },
          { "id": "km-n3-c3-l4-18", "term": "菜", "reading": "な", "answer": "Rau, ngọn rau", "meaning": "Rau, ngọn rau", "example": "春の菜を摘む。\n(Hái rau mùa xuân.)" },
          { "id": "km-n3-c3-l4-19", "term": "果て", "reading": "はて", "answer": "Tận cùng, nơi cuối cùng", "meaning": "Tận cùng, nơi cuối cùng", "example": "世界のはてまで旅をする。\n(Đi du lịch đến tận cùng thế giới.)" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Chương 3 - Bài 5: 単位 (杯, 枚, 匹, 量)",
    sections: [
      {
        id: "km-n3-c3-l5-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c3-l5-1", "term": "杯", "reading": "さかずき", "answer": "Chén rượu", "meaning": "Chén rượu", "example": "杯にお酒をなみとなみと注ぐ。\n(Rót rượu tràn đầy miệng chén.)" },
          { "id": "km-n3-c3-l5-2", "term": "一杯", "reading": "いっぱい", "answer": "Một ly, một cốc", "meaning": "Một ly, một cốc", "example": "一杯飲んでから帰ることにする。\n(Quyết định làm một ly rồi mới đi về.)" },
          { "id": "km-n3-c3-l5-3", "term": "乾杯", "reading": "かんぱい", "answer": "Cạn ly, nâng ly chúc mừng", "meaning": "Cạn ly, nâng ly chúc mừng", "example": "二人の幸せを願って乾杯した。\n(Cạn ly cầu chúc cho hạnh phúc của hai người.)" },
          { "id": "km-n3-c3-l5-4", "term": "枚数", "reading": "まいすう", "answer": "Số tờ, số tấm", "meaning": "Số tờ, số tấm", "example": "コピーしたプリントの枚数を確認する。\n(Xác nhận số lượng bản in đã photocopy.)" },
          { "id": "km-n3-c3-l5-5", "term": "二枚目", "reading": "にまいめ", "answer": "Anh chàng hào hoa đẹp trai", "meaning": "Anh chàng hào hoa đẹp trai", "example": "モデルの彼はさすがに二枚目だ。\n(Là người mẫu nên anh ấy quả nhiên là chàng trai lịch lãm.)" },
          { "id": "km-n3-c3-l5-6", "term": "二匹", "reading": "にひき", "answer": "Hai con (động vật nhỏ)", "meaning": "Hai con (động vật nhỏ)", "example": "道に二匹の子猫が捨てられている。\n(Có hai chú mèo con bị bỏ rơi trên đường.)" },
          { "id": "km-n3-c3-l5-7", "term": "匹敵する", "reading": "ひってきする", "answer": "Sánh tầm, tương đương với", "meaning": "Sánh tầm, tương đương với", "example": "彼はプロに匹敵する絵の才能を持つ。\n(Anh ấy có tài năng hội họa tương đương với họa sĩ chuyên nghiệp.)" },
          { "id": "km-n3-c3-l5-8", "term": "計量", "reading": "けいりょう", "answer": "Cân đo, định lượng", "meaning": "Cân đo, định lượng", "example": "おかし作りは計量がポイントだ。\n(Việc định lượng chính xác là mấu chốt khi làm bánh kẹo.)" },
          { "id": "km-n3-c3-l5-9", "term": "分量", "reading": "ぶんりょう", "answer": "Liều lượng, phân lượng", "meaning": "Liều lượng, phân lượng", "example": "分量をまちがえたのか、味がおかしい。\n(Không biết có bị sai liều lượng không mà mùi vị rất lạ.)" },
          { "id": "km-n3-c3-l5-10", "term": "重量", "reading": "じゅうりょう", "answer": "Trọng lượng", "meaning": "Trọng lượng", "example": "くうこうでは荷物の重量検査がある。\n(Tại sân bay có kiểm tra trọng lượng hành lý.)" },
          { "id": "km-n3-c3-l5-12", "term": "杯", "reading": "さかずき", "answer": "Chén rượu", "meaning": "Chén rượu", "example": "さかずきを交わす。\n(Giao bôi, trao đổi chén rượu thề.)" },
          { "id": "km-n3-c3-l5-13", "term": "三枚", "reading": "さんまい", "answer": "Ba tấm/tờ (lạng/phần phi lê cá)", "meaning": "Ba tấm/tờ (lạng/phần phi lê cá)", "example": "魚をさんまいにおろす。\n(Phi lê xẻ cá làm 3 phần.)" },
          { "id": "km-n3-c3-l5-14", "term": "五枚", "reading": "ごまい", "answer": "Năm tờ/tấm", "meaning": "Năm tờ/tấm", "example": "八十円切手をごまい買う。\n(Mua 5 con tem 80 Yên.)" },
          { "id": "km-n3-c3-l5-15", "term": "二十匹", "reading": "にじゅっぴき", "answer": "Hai mươi con (động vật)", "meaning": "Hai mươi con (động vật)", "example": "にじゅっぴきの熱帯魚。\n(20 con cá nhiệt đới.)" },
          { "id": "km-n3-c3-l5-16", "term": "三匹", "reading": "さんびき", "answer": "Ba con (động vật)", "meaning": "Ba con (động vật)", "example": "「さんびきの子ぶた」の物語を読む。\n(Đọc câu chuyện \"Ba chú heo con\".)" },
          { "id": "km-n3-c3-l5-17", "term": "量る", "reading": "はかる", "answer": "Cân, đo (Tha động từ)", "meaning": "Cân, đo (Tha động từ)", "example": "ダイエットのために毎日体重をはかる。\n(Hằng ngày cân trọng lượng để giảm cân.)" },
          { "id": "km-n3-c3-l5-18", "term": "軽量", "reading": "けいりょう", "answer": "Trọng lượng nhẹ, siêu nhẹ", "meaning": "Trọng lượng nhẹ, siêu nhẹ", "example": "けいりょうでじょうぶな自転車。\n(Chiếc xe đạp nhẹ mà vô cùng bền chắc.)" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Chương 4 - Bài 1: 体 (頭, 顔, 首, 鼻)",
    sections: [
      {
        id: "km-n3-c4-l1-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c4-l1-1", "term": "頭", "reading": "あたま", "answer": "Cái đầu", "meaning": "Cái đầu", "example": "頭をなでて子どもをほめる。\n(Xoa đầu khen ngợi đứa trẻ.)" },
          { "id": "km-n3-c4-l1-2", "term": "頭痛", "reading": "ずつう", "answer": "Đau đầu", "meaning": "Đau đầu", "example": "昨日からひどい頭痛が続いている。\n(Cơn đau đầu dữ dội kéo dài từ hôm qua.)" },
          { "id": "km-n3-c4-l1-3", "term": "年頭", "reading": "ねんとう", "answer": "Đầu năm", "meaning": "Đầu năm", "example": "社長が年頭のあいさつに立つ。\n(Giám đốc đứng phát biểu chúc mừng đầu năm.)" },
          { "id": "km-n3-c4-l1-4", "term": "顔", "reading": "かお", "answer": "Khuôn mặt", "meaning": "Khuôn mặt", "example": "朝起きてすぐに顔を洗う。\n(Sáng thức dậy là rửa mặt ngay.)" },
          { "id": "km-n3-c4-l1-5", "term": "顔面", "reading": "がんめん", "answer": "Khuôn mặt, mặt trước", "meaning": "Khuôn mặt, mặt trước", "example": "ボールが顔面に当たり鼻血が出た。\n(Quả bóng đập trúng mặt làm chảy máu mũi.)" },
          { "id": "km-n3-c4-l1-6", "term": "首", "reading": "くび", "answer": "Cổ", "meaning": "Cổ", "example": "寝ちがえて首が回らない。\n(Nằm ngủ sai tư thế nên đau cổ không quay được.)" },
          { "id": "km-n3-c4-l1-7", "term": "首位", "reading": "しゅい", "answer": "Vị trí đầu bảng, ngôi đầu", "meaning": "Vị trí đầu bảng, ngôi đầu", "example": "二位のチームが逆転して首位に立つ。\n(Đội xếp thứ hai lội ngược dòng vươn lên dẫn đầu bảng.)" },
          { "id": "km-n3-c4-l1-8", "term": "鼻水", "reading": "はなみず", "answer": "Nước mũi", "meaning": "Nước mũi", "example": "かぜをひいて鼻水が出る。\n(Bị cảm lạnh nên nước mũi chảy ra.)" },
          { "id": "km-n3-c4-l1-9", "term": "鼻", "reading": "はな", "answer": "Mũi (Tự hào)", "meaning": "Mũi (Tự hào)", "example": "有名大学に合格して鼻が高い。\n(Đỗ trường đại học danh tiếng nên rất tự hào/phổng mũi.)" },
          { "id": "km-n3-c4-l1-10", "term": "耳鼻科", "reading": "じびか", "answer": "Khoa tai mũi họng", "meaning": "Khoa tai mũi họng", "example": "耳の調子が悪く、耳鼻科へ行く。\n(Tai có vấn đề nên đi khám tai mũi họng.)" },
          { "id": "km-n3-c4-l1-11", "term": "口頭", "reading": "こうとう", "answer": "Nói miệng, vấn đáp", "meaning": "Nói miệng, vấn đáp", "example": "受験科目にこうとう試験がある。\n(Trong các môn thi có bài thi vấn đáp.)" },
          { "id": "km-n3-c4-l1-12", "term": "頭文字", "reading": "かしらもじ", "answer": "Chữ cái đầu", "meaning": "Chữ cái đầu", "example": "名前のかしら文字を書く。\n(Viết chữ cái đầu của tên mình.)" },
          { "id": "km-n3-c4-l1-13", "term": "笑顔", "reading": "えがお", "answer": "Gương mặt tươi cười", "meaning": "Gương mặt tươi cười", "example": "友人をえがおで出迎える。\n(Đón tiếp người bạn bằng gương mặt rạng rỡ nụ cười.)" },
          { "id": "km-n3-c4-l1-14", "term": "顔負け", "reading": "かおまけ", "answer": "Xấu hổ, nể phục, chào thua", "meaning": "Xấu hổ, nể phục, chào thua", "example": "大人かおまけの知識がある。\n(Có kiến thức uyên bác khiến người lớn cũng chào thua.)" },
          { "id": "km-n3-c4-l1-15", "term": "顔色", "reading": "かおいろ", "answer": "Sắc mặt", "meaning": "Sắc mặt", "example": "じょうしのかおいろをうかがう。\n(Quan sát sắc mặt của sếp.)" },
          { "id": "km-n3-c4-l1-17", "term": "首相", "reading": "しゅしょう", "answer": "Thủ tướng", "meaning": "Thủ tướng", "example": "歴代のしゅしょうを調べる。\n(Tìm hiểu các vị thủ tướng qua các thời kỳ.)" },
          { "id": "km-n3-c4-l1-19", "term": "音頭", "reading": "おんど", "answer": "Dẫn đầu, xướng nhịp", "meaning": "Dẫn đầu, xướng nhịp", "example": "宴会で乾杯の音頭を取る。\n(Bắt nhịp cạn ly trong buổi tiệc.)" }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Chương 4 - Bài 2: 呼吸 (呼, 吸, 息, 汗)",
    sections: [
      {
        id: "km-n3-c4-l2-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c4-l2-1", "term": "呼ぶ", "reading": "よぶ", "answer": "Gọi (tên, taxi...)", "meaning": "Gọi (tên, taxi...)", "example": "出欠を取るために学生の名前を呼ぶ。 / 手を上げてタクシーをよぶ。\n(Gọi tên học sinh để điểm danh. / Giơ tay gọi taxi.)" },
          { "id": "km-n3-c4-l2-2", "term": "吸う", "reading": "すう", "answer": "Hút, hít", "meaning": "Hút, hít", "example": "ここでタバコを吸わないでください。 / しんせんな空気を吸う。\n(Xin đừng hút thuốc ở đây. / Hít thở không khí trong lành.)" },
          { "id": "km-n3-c4-l2-3", "term": "深呼吸", "reading": "しんこきゅう", "answer": "Hít thở sâu", "meaning": "Hít thở sâu", "example": "深呼吸して気持ちを落ち着かせる。\n(Hít thở thật sâu để bình tâm lại.)" },
          { "id": "km-n3-c4-l2-4", "term": "休息", "reading": "きゅうそく", "answer": "Nghỉ ngơi", "meaning": "Nghỉ ngơi", "example": "休息の時間をたっぷり取る。\n(Dành nhiều thời gian nghỉ ngơi dưỡng sức.)" },
          { "id": "km-n3-c4-l2-5", "term": "息", "reading": "いき", "answer": "Hơi thở", "meaning": "Hơi thở", "example": "向こうから息を切らして走ってくる。 / びっくりして息が止まるかと思った。\n(Hớt hải chạy đứt hơi từ phía kia lại. / Giật mình ngỡ như tim ngưng đập hơi thở ngừng lại.)" },
          { "id": "km-n3-c4-l2-6", "term": "利息", "reading": "りそく", "answer": "Lợi tức, tiền lãi", "meaning": "Lợi tức, tiền lãi", "example": "借りていたお金の利息をはらう。\n(Trả tiền lãi của số tiền đã vay.)" },
          { "id": "km-n3-c4-l2-7", "term": "汗", "reading": "あせ", "answer": "Mồ hôi", "meaning": "Mồ hôi", "example": "たくさん運動して汗をかいた。 / きんちょうしてあせが出る。\n(Vận động nhiều toát cả mồ hôi. / Lo lắng toát hết mồ hôi.)" },
          { "id": "km-n3-c4-l2-8", "term": "呼吸", "reading": "こきゅう", "answer": "Hô hấp, thở", "meaning": "Hô hấp, thở", "example": "こきゅうが苦しい。\n(Hơi thở khó nhọc, khó thở.)" },
          { "id": "km-n3-c4-l2-9", "term": "吸い取る", "reading": "すいとる", "answer": "Hút đi", "meaning": "Hút đi", "example": "そうじきで部屋のゴミをすい取る。\n(Dùng máy hút bụi hút sạch rác trong phòng.)" },
          { "id": "km-n3-c4-l2-11", "term": "息苦しい", "reading": "いきぐるしい", "answer": "Ngột ngạt, khó thở", "meaning": "Ngột ngạt, khó thở", "example": "この部屋はなんだかいきぐるしい。\n(Căn phòng này có vẻ gì đó ngột ngạt khó thở.)" },
          { "id": "km-n3-c4-l2-12", "term": "冷や汗", "reading": "ひやあせ", "answer": "Mồ hôi lạnh (Vì xấu hổ, sợ hãi)", "meaning": "Mồ hôi lạnh (Vì xấu hổ, sợ hãi)", "example": "はずかしくてひやあせをかいた。\n(Vì xấu hổ quá nên toát mồ hôi hột.)" },
          { "id": "km-n3-c4-l2-13", "term": "発汗", "reading": "はっかん", "answer": "Sự đổ mồ hôi", "meaning": "Sự đổ mồ hôi", "example": "この食品にははっかん作用がある。\n(Loại thực phẩm này có tác dụng kích thích đổ mồ hôi.)" },
          { "id": "km-n3-c4-l2-14", "term": "息子", "reading": "むすこ", "answer": "Con trai", "meaning": "Con trai", "example": "とくべつな言葉: 息子\n(Con trai tôi.)" }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Chương 4 - Bài 3: 検査 (検, 査, 歯, 痛)",
    sections: [
      {
        id: "km-n3-c4-l3-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c4-l3-1", "term": "点検", "reading": "てんけん", "answer": "Kiểm tra định kỳ, kiểm tra lửa/thiết bị", "meaning": "Kiểm tra định kỳ, kiểm tra lửa/thiết bị", "example": "出かける前に火の元を点検する。\n(Trước khi ra ngoài phải kiểm tra nguồn lửa cẩn thận.)" },
          { "id": "km-n3-c4-l3-2", "term": "探査", "reading": "たんさ", "answer": "Thám hiểm, thăm dò", "meaning": "Thám hiểm, thăm dò", "example": "だれも知らない土地を探査する。\n(Thám hiểm vùng đất chưa ai từng biết đến.)" },
          { "id": "km-n3-c4-l3-3", "term": "検査", "reading": "けんさ", "answer": "Xét nghiệm, kiểm tra y tế", "meaning": "Xét nghiệm, kiểm tra y tế", "example": "病気を調べるために検査する。 / けんさの結果が出る。\n(Xét nghiệm y tế để chẩn đoán bệnh. / Có kết quả xét nghiệm.)" },
          { "id": "km-n3-c4-l3-4", "term": "調査", "reading": "ちょうさ", "answer": "Điều tra, khảo sát", "meaning": "Điều tra, khảo sát", "example": "学生が希望する進路を調査する。\n(Khảo sát định hướng tương lai của học sinh.)" },
          { "id": "km-n3-c4-l3-5", "term": "査証", "reading": "さしょう", "answer": "Visa, thị thực", "meaning": "Visa, thị thực", "example": "空港で入国の査証を受ける。\n(Nhận visa nhập cảnh tại sân bay.)" },
          { "id": "km-n3-c4-l3-6", "term": "歯", "reading": "は", "answer": "Răng", "meaning": "Răng", "example": "一さいをすぎて歯が生えてきた。\n(Qua 1 tuổi răng bắt đầu mọc.)" },
          { "id": "km-n3-c4-l3-7", "term": "虫歯", "reading": "むしば", "answer": "Răng sâu", "meaning": "Răng sâu", "example": "虫歯のちりょうは大人でもこわい。\n(Điều trị răng sâu thì ngay cả người lớn cũng sợ.)" },
          { "id": "km-n3-c4-l3-8", "term": "永久歯", "reading": "えいきゅうし", "answer": "Răng vĩnh viễn", "meaning": "Răng vĩnh viễn", "example": "永久歯に生え変わる。\n(Thay răng thành răng vĩnh viễn.)" },
          { "id": "km-n3-c4-l3-9", "term": "痛い", "reading": "いたい", "answer": "Đau (tính từ)", "meaning": "Đau (tính từ)", "example": "急におなかが痛くなり救急車を呼ぶ。 / 赤字で頭がいたい。\n(Đột nhiên đau bụng dữ dội nên gọi xe cấp cứu. / Đau đầu nhức óc vì bị thua lỗ.)" },
          { "id": "km-n3-c4-l3-10", "term": "激痛", "reading": "げきつう", "answer": "Đau dữ dội, đau nhói", "meaning": "Đau dữ dội, đau nhói", "example": "階段で転んでひざに激痛が走った。\n(Ngã cầu thang làm đầu gối đau buốt nhói lên.)" },
          { "id": "km-n3-c4-l3-11", "term": "歯科医院", "reading": "しかいいん", "answer": "Phòng khám nha khoa", "meaning": "Phòng khám nha khoa", "example": "近所のしか医院に通う。\n(Đi khám tại phòng khám nha khoa gần nhà.)" },
          { "id": "km-n3-c4-l3-12", "term": "歯車", "reading": "はぐるま", "answer": "Bánh răng", "meaning": "Bánh răng", "example": "二人の関係のはぐるまがくるう。\n(Bánh răng mối quan hệ của hai người bị trệch hướng.)" },
          { "id": "km-n3-c4-l3-13", "term": "痛む", "reading": "いたむ", "answer": "Đau nhức (động từ)", "meaning": "Đau nhức (động từ)", "example": "寒さでひざがいたむ。\n(Đầu gối đau nhức buốt vì trời lạnh.)" },
          { "id": "km-n3-c4-l3-14", "term": "検証", "reading": "けんしょう", "answer": "Kiểm chứng, xác minh nguyên nhân", "meaning": "Kiểm chứng, xác minh nguyên nhân", "example": "火事のげんいんをけんしょうする。\n(Xác minh nguyên nhân vụ hỏa hoạn.)" },
          { "id": "km-n3-c4-l3-15", "term": "検討", "reading": "けんとう", "answer": "Cân nhắc, thảo luận xem xét", "meaning": "Cân nhắc, thảo luận xem xét", "example": "会議でけんとうしたうえで決める。\n(Cân nhắc kỹ lưỡng trong cuộc họp rồi mới quyết định.)" },
          { "id": "km-n3-c4-l3-16", "term": "審査員", "reading": "しんさいん", "answer": "Giám khảo, hội đồng thẩm định", "meaning": "Giám khảo, hội đồng thẩm định", "example": "スピーチ大会のしんさいん。\n(Ban giám khảo của cuộc thi hùng biện.)" },
          { "id": "km-n3-c4-l3-17", "term": "痛める", "reading": "いためる", "answer": "Làm đau, làm tổn thương (Tha động từ)", "meaning": "Làm đau, làm tổn thương (Tha động từ)", "example": "足の関節を痛める。\n(Làm tổn thương khớp chân.)" }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Chương 4 - Bài 4: けが (血, 液, 包, 帯)",
    sections: [
      {
        id: "km-n3-c4-l4-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c4-l4-1", "term": "血", "reading": "ち", "answer": "Máu", "meaning": "Máu", "example": "道で転んで、ひざから血が出た。 / 歯ぐきからちが出る。\n(Ngã trên đường làm máu chảy rỉ ra từ đầu gối. / Chảy máu từ nướu lợi.)" },
          { "id": "km-n3-c4-l4-2", "term": "血管", "reading": "けっかん", "answer": "Mạch máu", "meaning": "Mạch máu", "example": "血管がつまる病気になる。\n(Mắc chứng bệnh tắc nghẽn mạch máu.)" },
          { "id": "km-n3-c4-l4-3", "term": "血統書", "reading": "けっとうしょ", "answer": "Giấy chứng nhận huyết thống, gia phả", "meaning": "Giấy chứng nhận huyết thống, gia phả", "example": "血統書付きの犬をかっている。\n(Nuôi chú chó có giấy tờ gia phả huyết thống thuần chủng.)" },
          { "id": "km-n3-c4-l4-4", "term": "冷血", "reading": "れいけつ", "answer": "Máu lạnh, tàn nhẫn", "meaning": "Máu lạnh, tàn nhẫn", "example": "犯行の手口があまりにも冷血だ。\n(Thủ đoạn phạm tội vô cùng tàn nhẫn máu lạnh.)" },
          { "id": "km-n3-c4-l4-5", "term": "赤血球", "reading": "せっけっきゅう", "answer": "Hồng cầu", "meaning": "Hồng cầu", "example": "赤血球の量を調べる。\n(Xét nghiệm kiểm tra số lượng hồng cầu.)" },
          { "id": "km-n3-c4-l4-6", "term": "包む", "reading": "つつむ", "answer": "Gói, bọc, bao quanh", "meaning": "Gói, bọc, bao quanh", "example": "プレゼントをきれいに包んでもらう。 / 毛皮のコートに身をつつんだ女性。\n(Nhờ gói bọc giùm món quà thật đẹp. / Người phụ nữ khoác bao bọc quanh mình chiếc áo lông thú.)" },
          { "id": "km-n3-c4-l4-7", "term": "包帯", "reading": "ほうたい", "answer": "Băng gạc vết thương", "meaning": "Băng gạc vết thương", "example": "けがをしたところを包帯でまく。\n(Băng bó chỗ bị thương bằng băng gạc.)" },
          { "id": "km-n3-c4-l4-8", "term": "帯びる", "reading": "おびる", "answer": "Mang nồng độ, mang tính chất/hơi hướng", "meaning": "Mang nồng độ, mang tính chất/hơi hướng", "example": "酒気帯び運転は法律で禁止されている。\n(Luật cấm tuyệt đối việc lái xe khi có nồng độ cồn/hơi men.)" },
          { "id": "km-n3-c4-l4-9", "term": "一帯", "reading": "いったい", "answer": "Cả khu vực, toàn vùng", "meaning": "Cả khu vực, toàn vùng", "example": "じしんのひがいは関東一帯におよんだ。\n(Thiệt hại do trận động đất lan ra khắp toàn vùng Kanto.)" },
          { "id": "km-n3-c4-l4-10", "term": "帯", "reading": "おび", "answer": "Thắt lưng Kimono", "meaning": "Thắt lưng Kimono", "example": "着物に合わせた帯をしめる。\n(Thắt đai lưng phù hợp với bộ Kimono.)" },
          { "id": "km-n3-c4-l4-12", "term": "血色", "reading": "けっしょく", "answer": "Sắc mặt hồng hào tươi tắn", "meaning": "Sắc mặt hồng hào tươi tắn", "example": "けっしょくのいい顔。\n(Khuôn mặt tươi tắn hồng hào sắc khí tốt.)" },
          { "id": "km-n3-c4-l4-13", "term": "液体", "reading": "えきたい", "answer": "Chất lỏng", "meaning": "Chất lỏng", "example": "びんの中の茶色いえきたい。\n(Chất lỏng màu nâu bên trong lọ.)" },
          { "id": "km-n3-c4-l4-14", "term": "血液型", "reading": "けつえきがた", "answer": "Nhóm máu", "meaning": "Nhóm máu", "example": "自分のけつえきがたを調べる。\n(Tìm hiểu/xét nghiệm nhóm máu của mình.)" },
          { "id": "km-n3-c4-l4-15", "term": "連帯感", "reading": "れんたいかん", "answer": "Cảm giác đoàn kết gắn bó", "meaning": "Cảm giác đoàn kết gắn bó", "example": "クラスのれんたいかんを高める。\n(Nâng cao tinh thần liên đới/đoàn kết của lớp học.)" },
          { "id": "km-n3-c4-l4-16", "term": "携帯", "reading": "けいたい", "answer": "Điện thoại di động, mang theo bên người", "meaning": "Điện thoại di động, mang theo bên người", "example": "子どももけいたい電話を持つ時代。\n(Thời đại mà trẻ con cũng mang điện thoại di động theo người.)" }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Chương 4 - Bài 5: 救急 (救, 助, 死, 亡)",
    sections: [
      {
        id: "km-n3-c4-l10-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c4-l10-1", "term": "救う", "reading": "すくう", "answer": "Cứu vớt, cứu sống, giải cứu", "meaning": "Cứu vớt, cứu sống, giải cứu", "example": "燃える火の中から人を救う。 / いのちをすくってくれた大切な人。\n(Cứu người khỏi đám cháy dữ dội. / Người ân nhân quan trọng đã cứu mạng sống tôi.)" },
          { "id": "km-n3-c4-l10-2", "term": "救急車", "reading": "きゅうきゅうしゃ", "answer": "Xe cấp cứu", "meaning": "Xe cấp cứu", "example": "救急車で病院に運ばれる。 / きゅうきゅうばこを用意する。\n(Được đưa đi bệnh viện bằng xe cứu thương. / Chuẩn bị hộp dụng cụ sơ cứu.)" },
          { "id": "km-n3-c4-l10-3", "term": "救援", "reading": "きゅうえん", "answer": "Cứu viện, tiếp tế cứu tế", "meaning": "Cứu viện, tiếp tế cứu tế", "example": "救援のぶっしをヘリコプターで運ぶ。\n(Vận chuyển nhu yếu phẩm cứu tế bằng trực thăng.)" },
          { "id": "km-n3-c4-l10-4", "term": "助かる", "reading": "たすかる", "answer": "Được cứu, sống sót, đỡ vất vả (Tự động từ)", "meaning": "Được cứu, sống sót, đỡ vất vả (Tự động từ)", "example": "この病気は手術をすれば助かる。\n(Căn bệnh này nếu phẫu thuật kịp thời thì sẽ sống sót.)" },
          { "id": "km-n3-c4-l10-5", "term": "助ける", "reading": "たすける", "answer": "Giúp đỡ, giải nguy (Tha động từ)", "meaning": "Giúp đỡ, giải nguy (Tha động từ)", "example": "道にまよっていた人を助ける。 / 池に落ちた子どもをたすけた。\n(Giúp đỡ người đi lạc đường. / Cứu vớt đứa bé bị ngã xuống ao.)" },
          { "id": "km-n3-c4-l10-6", "term": "助言", "reading": "じょげん", "answer": "Lời khuyên răn, lời khuyên tư vấn", "meaning": "Lời khuyên răn, lời khuyên tư vấn", "example": "せんぱいに助言を求める。\n(Tìm kiếm lời khuyên từ tiền bối đi trước.)" },
          { "id": "km-n3-c4-l10-7", "term": "救助", "reading": "きゅうじょ", "answer": "Cứu hộ, giải cứu", "meaning": "Cứu hộ, giải cứu", "example": "海でおぼれている人を救助する。\n(Giải cứu người đuối nước ngoài biển.)" },
          { "id": "km-n3-c4-l10-8", "term": "死ぬ", "reading": "しぬ", "answer": "Chết (động từ)", "meaning": "Chết (động từ)", "example": "かっていた犬が病気で死んだ。\n(Chú chó nuôi trong nhà bị ốm chết.)" },
          { "id": "km-n3-c4-l10-9", "term": "死守する", "reading": "ししゅする", "answer": "Tử thủ, liều chết bảo vệ", "meaning": "Tử thủ, liều chết bảo vệ", "example": "キーパーがゴールを死守する。\n(Thủ môn liều mình giữ vững bảo vệ khung thành.)" },
          { "id": "km-n3-c4-l10-10", "term": "亡者", "reading": "もうじゃ", "answer": "Kẻ cuồng dại cuồng tín, vong hồn", "meaning": "Kẻ cuồng dại cuồng tín, vong hồn", "example": "彼はけちでよくばりな金の亡者だ。\n(Hắn ta là một kẻ keo kiệt tham lam cuồng tiền.)" },
          { "id": "km-n3-c4-l10-11", "term": "救済", "reading": "きゅうさい", "answer": "Cứu tế, giải nguy kinh tế/đời sống", "meaning": "Cứu tế, giải nguy kinh tế/đời sống", "example": "失業者をきゅうさいする。\n(Cứu trợ, hỗ trợ đời sống cho người thất nghiệp.)" },
          { "id": "km-n3-c4-l10-12", "term": "援助", "reading": "えんじょ", "answer": "Viện trợ tài chính, giúp đỡ", "meaning": "Viện trợ tài chính, giúp đỡ", "example": "親に学費をえんじょしてもらう。\n(Được cha mẹ trợ giúp hỗ trợ học phí.)" },
          { "id": "km-n3-c4-l10-13", "term": "補助", "reading": "ほじょ", "answer": "Bổ trợ, phụ giúp chi phí", "meaning": "Bổ trợ, phụ giúp chi phí", "example": "息子の大学の学費をほじょする。\n(Hỗ trợ chu cấp một phần học phí đại học cho con trai.)" },
          { "id": "km-n3-c4-l10-14", "term": "亡命", "reading": "ぼうめい", "answer": "Tị nạn chính trị, đào tẩu", "meaning": "Tị nạn chính trị, đào tẩu", "example": "外国へぼうめいする。\n(Đào tẩu, tị nạn chính trị sang nước ngoài.)" },
          { "id": "km-n3-c4-l10-15", "term": "死亡者", "reading": "しぼうしゃ", "answer": "Nạn nhân tử vong, số người chết", "meaning": "Nạn nhân tử vong, số người chết", "example": "交通じこによるしぼう者が多い。\n(Số người chết do tai nạn giao thông chiếm tỷ lệ cao.)" },
          { "id": "km-n3-c4-l10-16", "term": "救急箱", "reading": "きゅうきゅうばこ", "answer": "Hộp dụng cụ y tế sơ cứu", "meaning": "Hộp dụng cụ y tế sơ cứu", "example": "いざという時のために救急箱を用意する。\n(Chuẩn bị sẵn hộp dụng cụ y tế sơ cứu phòng khi khẩn cấp.)" }
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Chương 5 - Bài 1: 勝負 (戦, 決, 勝, 負)",
    sections: [
      {
        id: "km-n3-c5-l1-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c5-l1-1", "term": "戦う", "reading": "たたかう", "answer": "Chiến đấu, thi đấu", "meaning": "Chiến đấu, thi đấu", "example": "次の試合でライバルと戦う。\n(Thi đấu với đối thủ trong trận tiếp theo.)" },
          { "id": "km-n3-c5-l1-2", "term": "負け戦", "reading": "まけいくさ", "answer": "Trận thua, thế trận thua", "meaning": "Trận thua, thế trận thua", "example": "負け戦でも投げ出さずにがんばる。\n(Dù là thế trận thua nhưng vẫn nỗ lực không bỏ cuộc.)" },
          { "id": "km-n3-c5-l1-3", "term": "作戦", "reading": "さくせん", "answer": "Chiến thuật, kế hoạch tác chiến", "meaning": "Chiến thuật, kế hoạch tác chiến", "example": "プランを成功させるための作戦を練る。\n(Bàn chiến thuật để kế hoạch thành công.)" },
          { "id": "km-n3-c5-l1-4", "term": "優勝決定戦", "reading": "ゆうしょうけっていせん", "answer": "Trận chung kết quyết định vô địch", "meaning": "Trận chung kết quyết định vô địch", "example": "優勝決定戦は来週行われる。\n(Trận chung kết quyết định ngôi vô địch sẽ diễn ra vào tuần tới.)" },
          { "id": "km-n3-c5-l1-5", "term": "決意", "reading": "けつい", "answer": "Quyết ý, ý định chắc chắn", "meaning": "Quyết ý, ý định chắc chắn", "example": "会社を辞める決意をかためた。\n(Củng cố quyết định nghỉ việc ở công ty.)" },
          { "id": "km-n3-c5-l1-6", "term": "圧勝", "reading": "あっしょう", "answer": "Thắng áp đảo", "meaning": "Thắng áp đảo", "example": "試合は私たちのチームの圧勝だった。\n(Trận đấu là chiến thắng áp đảo của đội chúng tôi.)" },
          { "id": "km-n3-c5-l1-7", "term": "勝っている", "reading": "まさっている", "answer": "Vượt trội hơn, giỏi hơn", "meaning": "Vượt trội hơn, giỏi hơn", "example": "実力は田中より木村が勝っている。\n(Thực lực thì Kimura vượt trội hơn Tanaka.)" },
          { "id": "km-n3-c5-l1-8", "term": "勝負", "reading": "しょうぶ", "answer": "Thắng bại, cuộc đọ sức", "meaning": "Thắng bại, cuộc đọ sức", "example": "あっという間に勝負が決まった。\n(Trong chớp mắt cuộc đọ sức đã ngã ngũ.)" },
          { "id": "km-n3-c5-l1-9", "term": "負担", "reading": "ふたん", "answer": "Gánh vác, chịu chi phí", "meaning": "Gánh vác, chịu chi phí", "example": "費用は各自で負担してください。\n(Chi phí vui lòng mỗi người tự gánh vác.)" },
          { "id": "km-n3-c5-l1-10", "term": "背負う", "reading": "せおう", "answer": "Cõng, gánh vác trên lưng", "meaning": "Cõng, gánh vác trên lưng", "example": "荷物を背負って歩く。\n(Đeo/gánh hành lý trên lưng đi bộ.)" },
          { "id": "km-n3-c5-l1-11", "term": "挑戦", "reading": "ちょうせん", "answer": "Thử sức, thách thức", "meaning": "Thử sức, thách thức", "example": "世界チャンピオンにちょうせんする。\n(Thử sức với nhà vô địch thế giới.)" },
          { "id": "km-n3-c5-l1-12", "term": "戦い", "reading": "たたかい", "answer": "Cuộc chiến, trận đấu gian khổ", "meaning": "Cuộc chiến, trận đấu gian khổ", "example": "苦しいたたかいをせいした。\n(Đã chiến thắng cuộc chiến gian khổ.)" },
          { "id": "km-n3-c5-l1-13", "term": "決心", "reading": "けっしん", "answer": "Quyết tâm", "meaning": "Quyết tâm", "example": "日本への留学をけっしんした。\n(Quyết tâm đi du học Nhật Bản.)" },
          { "id": "km-n3-c5-l1-14", "term": "多数決", "reading": "たすうけつ", "answer": "Biểu quyết theo số đông", "meaning": "Biểu quyết theo số đông", "example": "たすうけつをとる。\n(Lấy ý kiến biểu quyết theo đa số.)" },
          { "id": "km-n3-c5-l1-15", "term": "決める", "reading": "きめる", "answer": "Quyết định, chọn lựa", "meaning": "Quyết định, chọn lựa", "example": "クラスのリーダーをきめる。\n(Bầu/chọn người trưởng nhóm của lớp.)" },
          { "id": "km-n3-c5-l1-16", "term": "決勝", "reading": "けっしょう", "answer": "Trận chung kết", "meaning": "Trận chung kết", "example": "けっしょうで勝利した。\n(Giành chiến thắng ở trận chung kết.)" },
          { "id": "km-n3-c5-l1-17", "term": "負ける", "reading": "まける", "answer": "Bị thua", "meaning": "Bị thua", "example": "試合にまけてしまった。\n(Đã bị thua trong trận đấu.)" },
          { "id": "km-n3-c5-l1-18", "term": "負かす", "reading": "まかす", "answer": "Đánh bại đối thủ", "meaning": "Đánh bại đối thủ", "example": "口げんかで相手をまかした。\n(Đánh bại đối thủ trong cuộc tranh luận/cãi lộn.)" }
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Chương 5 - Bài 2: 大会 (代, 表, 第, 回)",
    sections: [
      {
        id: "km-n3-c5-l2-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c5-l2-1", "term": "代わって", "reading": "かわって", "answer": "Thay mặt, đại diện", "meaning": "Thay mặt, đại diện", "example": "父に代わって式に出た。\n(Thay mặt bố tham dự buổi lễ.)" },
          { "id": "km-n3-c5-l2-2", "term": "年代", "reading": "ねんだい", "answer": "Những năm, thập niên", "meaning": "Những năm, thập niên", "example": "この歌は1980年代にヒットした。\n(Bài hát này đã trở thành bản Hit vào những năm 1980.)" },
          { "id": "km-n3-c5-l2-3", "term": "食事代", "reading": "しょくじだい", "answer": "Tiền ăn uống", "meaning": "Tiền ăn uống", "example": "デートの食事代は私がはらった。\n(Tiền ăn uống trong buổi hẹn hò là do tôi trả.)" },
          { "id": "km-n3-c5-l2-4", "term": "代理", "reading": "だいり", "answer": "Đại lý, đại diện", "meaning": "Đại lý, đại diện", "example": "かちょうの代理で会議に出る。\n(Tham gia cuộc họp thay mặt cho tổ trưởng.)" },
          { "id": "km-n3-c5-l2-5", "term": "身代金", "reading": "みのしろきん", "answer": "Tiền chuộc người", "meaning": "Tiền chuộc người", "example": "犯人は身代金を要求した。\n(Hung thủ đã yêu cầu tiền chuộc người.)" },
          { "id": "km-n3-c5-l2-6", "term": "表", "reading": "ひょう", "answer": "Bảng biểu, danh sách", "meaning": "Bảng biểu, danh sách", "example": "アンケートの結果を表にまとめる。\n(Tóm tắt kết quả khảo sát thành dạng bảng.)" },
          { "id": "km-n3-c5-l2-7", "term": "表せない", "reading": "あらわせない", "answer": "Không thể diễn tả thành lời", "meaning": "Không thể diễn tả thành lời", "example": "言葉で表せないくらい感動した。\n(Cảm動 đến mức không thể diễn tả bằng lời.)" },
          { "id": "km-n3-c5-l2-8", "term": "表示", "reading": "ひょうじ", "answer": "Nhãn hiển thị, chỉ dẫn", "meaning": "Nhãn hiển thị, chỉ dẫn", "example": "洗濯する前に、服の表示を確認する。\n(Trước khi giặt phải kiểm tra nhãn chỉ dẫn trên quần áo.)" },
          { "id": "km-n3-c5-l2-9", "term": "回数券", "reading": "かいすうけん", "answer": "Tập vé lượt, vé tập", "meaning": "Tập vé lượt, vé tập", "example": "バスの回数券を買った。\n(Mua tập vé xe buýt theo lượt.)" },
          { "id": "km-n3-c5-l2-10", "term": "回っている", "reading": "まわっている", "answer": "Quay quanh, xoay", "meaning": "Quay quanh, xoay", "example": "地球のまわりを月が回っている。\n(Mặt trăng quay quanh Trái đất.)" },
          { "id": "km-n3-c5-l2-11", "term": "時代", "reading": "じだい", "answer": "Thời đại, thời đi học", "meaning": "Thời đại, thời đi học", "example": "学生じだいを思い出す。\n(Nhớ lại thời sinh viên học sinh.)" },
          { "id": "km-n3-c5-l2-12", "term": "交代", "reading": "こうたい", "answer": "Thay ca, đổi người", "meaning": "Thay ca, đổi người", "example": "けがをしたのでこうたいした。\n(Vì bị thương nên đã thay người.)" },
          { "id": "km-n3-c5-l2-13", "term": "表れる", "reading": "あらわれる", "answer": "Bộc lộ ra trên gương mặt", "meaning": "Bộc lộ ra trên gương mặt", "example": "うれしさが顔にあらわれている。\n(Sự vui mừng bộc lộ rõ trên gương mặt.)" },
          { "id": "km-n3-c5-l2-14", "term": "表", "reading": "おもて", "answer": "Bề ngoài, phía trước", "meaning": "Bề ngoài, phía trước", "example": "家のおもてから入る。\n(Đi vào từ cửa trước của ngôi nhà.)" },
          { "id": "km-n3-c5-l2-15", "term": "代表", "reading": "だいひょう", "answer": "Đại biểu, đội tuyển đại diện", "meaning": "Đại biểu, đội tuyển đại diện", "example": "サッカーの日本だいひょうに選ばれた。\n(Được tuyển chọn vào đội tuyển đại diện Nhật Bản.)" },
          { "id": "km-n3-c5-l2-16", "term": "回収", "reading": "かいしゅう", "answer": "Thu hồi, thu gom", "meaning": "Thu hồi, thu gom", "example": "宿題は授業の最初にかいしゅうする。\n(Bài tập về nhà được thu hồi vào đầu giờ học.)" },
          { "id": "km-n3-c5-l2-17", "term": "回す", "reading": "まわす", "answer": "Xoay, vặn", "meaning": "Xoay, vặn", "example": "こまをまわしてあそぶ。\n(Chơi trò xoay con quay.)" },
          { "id": "km-n3-c5-l2-18", "term": "第一回", "reading": "だいいっかい", "answer": "Lần thứ nhất, giải đấu lần đầu", "meaning": "Lần thứ nhất, giải đấu lần đầu", "example": "だいいっかい大会は東京で行われた。\n(Giải đấu lần thứ nhất đã được tổ chức ở Tokyo.)" }
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Chương 5 - Bài 3: 記録 1 (記, 録, 優, 賞)",
    sections: [
      {
        id: "km-n3-c5-l3-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c5-l3-1", "term": "記す", "reading": "しるす", "answer": "Ghi chép lại, lưu vết", "meaning": "Ghi chép lại, lưu vết", "example": "1日の出来事をノートに記す。\n(Ghi lại sự việc trong ngày vào cuốn sổ.)" },
          { "id": "km-n3-c5-l3-2", "term": "暗記", "reading": "あんき", "answer": "Học thuộc lòng", "meaning": "Học thuộc lòng", "example": "漢字を暗記する。\n(Học thuộc lòng các chữ Hán.)" },
          { "id": "km-n3-c5-l3-3", "term": "記入", "reading": "きにゅう", "answer": "Điền thông tin", "meaning": "Điền thông tin", "example": "書類に必要なことを記入する。\n(Điền các thông tin cần thiết vào giấy tờ.)" },
          { "id": "km-n3-c5-l3-4", "term": "登録", "reading": "とうろく", "answer": "Đăng ký khóa học/tài khoản", "meaning": "Đăng ký khóa học/tài khoản", "example": "英語のクラスに登録する。\n(Đăng ký vào lớp học tiếng Anh.)" },
          { "id": "km-n3-c5-l3-5", "term": "議事録", "reading": "ぎじろく", "answer": "Biên bản cuộc họp", "meaning": "Biên bản cuộc họp", "example": "会議の議事録を書いた。\n(Đã viết biên bản cuộc họp.)" },
          { "id": "km-n3-c5-l3-6", "term": "録画", "reading": "ろくが", "answer": "Ghi hình, thu hình", "meaning": "Ghi hình, thu hình", "example": "好きなドラマをDVDに録画する。\n(Thu hình bộ phim truyền hình yêu thích vào đĩa DVD.)" },
          { "id": "km-n3-c5-l3-7", "term": "優れる", "reading": "すぐれる", "answer": "Xuất sắc, ưu tú", "meaning": "Xuất sắc, ưu tú", "example": "数学で優れた成績をとる。\n(Đạt thành tích xuất sắc trong môn Toán.)" },
          { "id": "km-n3-c5-l3-8", "term": "優勝", "reading": "ゆうしょう", "answer": "Vô địch", "meaning": "Vô địch", "example": "初出場のチームが優勝した。\n(Đội lần đầu tham dự đã giành chức vô địch.)" },
          { "id": "km-n3-c5-l3-9", "term": "優先", "reading": "ゆうせん", "answer": "Ưu tiên thứ tự", "meaning": "Ưu tiên thứ tự", "example": "仕事の優先順位をつける。\n(Đặt thứ tự ưu tiên cho công việc.)" },
          { "id": "km-n3-c5-l3-10", "term": "賞状", "reading": "しょうじょう", "answer": "Giấy khen, bằng khen", "meaning": "Giấy khen, bằng khen", "example": "大会で一位になり、賞状をもらった。\n(Đạt vị trí thứ nhất ở giải đấu và nhận bằng khen.)" },
          { "id": "km-n3-c5-l3-11", "term": "日記", "reading": "にっき", "answer": "Nhật ký", "meaning": "Nhật ký", "example": "毎日にっきをつけている。\n(Hằng ngày đều viết nhật ký.)" },
          { "id": "km-n3-c5-l3-12", "term": "記事", "reading": "きじ", "answer": "Bài báo, bản tin", "meaning": "Bài báo, bản tin", "example": "事件についての新聞きじを読む。\n(Đọc bài báo về vụ án.)" },
          { "id": "km-n3-c5-l3-13", "term": "記念", "reading": "きねん", "answer": "Kỷ niệm", "meaning": "Kỷ niệm", "example": "旅行のきねんに写真をとる。\n(Chụp ảnh làm kỷ niệm chuyến đi du lịch.)" },
          { "id": "km-n3-c5-l3-14", "term": "新記録", "reading": "しんきろく", "answer": "Kỷ kỷ lục mới", "meaning": "Kỷ kỷ lục mới", "example": "今回の大会で世界新きろくが出た。\n(Tại giải đấu lần này kỷ lục thế giới mới đã được xác lập.)" },
          { "id": "km-n3-c5-l3-15", "term": "録音", "reading": "ろくおん", "answer": "Ghi âm", "meaning": "Ghi âm", "example": "首相のインタビューをろくおんする。\n(Ghi âm cuộc phỏng vấn thủ tướng.)" },
          { "id": "km-n3-c5-l3-16", "term": "優しい", "reading": "やさしい", "answer": "Dịu dàng, hiền lành", "meaning": "Dịu dàng, hiền lành", "example": "私の姉はとてもやさしい人だ。\n(Chị gái tôi là một người rất dịu dàng.)" },
          { "id": "km-n3-c5-l3-17", "term": "受賞", "reading": "じゅしょう", "answer": "Nhận giải thưởng, đoạt giải", "meaning": "Nhận giải thưởng, đoạt giải", "example": "田中氏はノーベル賞をじゅしょうした。\n(Ông Tanaka đã đoạt giải thưởng Nobel.)" },
          { "id": "km-n3-c5-l3-18", "term": "賞金", "reading": "しょうきん", "answer": "Tiền thưởng", "meaning": "Tiền thưởng", "example": "クイズ大会で、しょうきんをもらった。\n(Đã nhận được tiền thưởng ở cuộc thi đố vui.)" }
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Chương 5 - Bài 4: 記録 2 (秒, 差, 測, 順)",
    sections: [
      {
        id: "km-n3-c5-l4-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c5-l4-1", "term": "秒読み", "reading": "びょうよみ", "answer": "Đếm ngược từng giây", "meaning": "Đếm ngược từng giây", "example": "ビルの完成まで秒読みに入った。\n(Đã bước vào giai đoạn đếm ngược từng ngày/giây tới lúc hoàn thành tòa nhà.)" },
          { "id": "km-n3-c5-l4-2", "term": "毎秒", "reading": "まいびょう", "answer": "Mỗi giây", "meaning": "Mỗi giây", "example": "台風が毎秒30メートルで進む。\n(Cơn bão di chuyển với tốc độ 30m mỗi giây.)" },
          { "id": "km-n3-c5-l4-3", "term": "日差し", "reading": "ひざし", "answer": "Ánh nắng chiếu", "meaning": "Ánh nắng chiếu", "example": "夏は日差しが強い。\n(Vào mùa hè ánh nắng chiếu rất gay gắt.)" },
          { "id": "km-n3-c5-l4-4", "term": "時差", "reading": "じさ", "answer": "Chênh lệch múi giờ", "meaning": "Chênh lệch múi giờ", "example": "中国と日本の時差は1時間だ。\n(Chênh lệch múi giờ giữa Trung Quốc và Nhật Bản là 1 tiếng.)" },
          { "id": "km-n3-c5-l4-5", "term": "差", "reading": "さ", "answer": "Khoảng cách, chênh lệch", "meaning": "Khoảng cách, chênh lệch", "example": "大人と子どもは体力に大きな差がある。\n(Giữa người lớn và trẻ em có khoảng cách thể lực lớn.)" },
          { "id": "km-n3-c5-l4-6", "term": "差別", "reading": "さべつ", "answer": "Phân biệt đối xử", "meaning": "Phân biệt đối xử", "example": "人を差別してはいけない。\n(Không được phân biệt đối xử với người khác.)" },
          { "id": "km-n3-c5-l4-7", "term": "予測", "reading": "よそく", "answer": "Dự đoán", "meaning": "Dự đoán", "example": "来年はどんな年になるか予測する。\n(Dự đoán xem năm tới sẽ là một năm như thế nào.)" },
          { "id": "km-n3-c5-l4-8", "term": "測定", "reading": "そくてい", "answer": "Đo đạc, định lượng", "meaning": "Đo đạc, định lượng", "example": "来週、学校で体重測定がある。\n(Tuần tới ở trường sẽ có buổi kiểm tra đo trọng lượng cơ thể.)" },
          { "id": "km-n3-c5-l4-9", "term": "順序", "reading": "じゅんじょ", "answer": "Trình tự, thứ tự", "meaning": "Trình tự, thứ tự", "example": "数式を順序立てて説明する。\n(Giải thích công thức toán theo đúng trình tự.)" },
          { "id": "km-n3-c5-l4-10", "term": "順番", "reading": "じゅんばん", "answer": "Lượt, thứ tự", "meaning": "Lượt, thứ tự", "example": "自分の順番が来るまで楽屋で待つ。\n(Chờ trong phòng chờ cho tới lượt mình.)" },
          { "id": "km-n3-c5-l4-11", "term": "秒", "reading": "びょう", "answer": "Giây", "meaning": "Giây", "example": "100メートルを10びょうで走る選手。\n(Vận động viên chạy 100 mét hết 10 giây.)" },
          { "id": "km-n3-c5-l4-12", "term": "秒速", "reading": "びょうそく", "answer": "Vận tốc tính theo giây", "meaning": "Vận tốc tính theo giây", "example": "びょうそく10メートルの風がふく。\n(Gió thổi với vận tốc 10 mét mỗi giây.)" },
          { "id": "km-n3-c5-l4-13", "term": "大差", "reading": "たいさ", "answer": "Khác biệt nhiều", "meaning": "Khác biệt nhiều", "example": "どのパソコンも性能はたいさない。\n(Máy tính nào thì hiệu năng cũng không có khác biệt mấy.)" },
          { "id": "km-n3-c5-l4-14", "term": "さしてきた", "reading": "さしてきた", "answer": "Ánh nắng rọi chiếu", "meaning": "Ánh nắng rọi chiếu", "example": "雨が止んで、日があたってきた。\n(Mưa tạnh và ánh nắng bắt đầu chiếu rọi.)" },
          { "id": "km-n3-c5-l4-15", "term": "測量", "reading": "そくりょう", "answer": "Đo đạc địa hình/đất đai", "meaning": "Đo đạc địa hình/đất đai", "example": "家を建てるため土地をそくりょうする。\n(Đo đạc diện tích đất để xây nhà.)" },
          { "id": "km-n3-c5-l4-16", "term": "計測", "reading": "けいそく", "answer": "Cân đo, định lượng", "meaning": "Cân đo, định lượng", "example": "スーツケースの重量をけいそくする。\n(Cân đo định lượng trọng lượng chiếc vali.)" },
          { "id": "km-n3-c5-l4-17", "term": "順に", "reading": "じゅんに", "answer": "Theo thứ tự", "meaning": "Theo thứ tự", "example": "せが高いじゅんにならぶ。\n(Xếp hàng theo thứ tự chiều cao từ thấp đến cao.)" },
          { "id": "km-n3-c5-l4-18", "term": "不順", "reading": "ふじゅん", "answer": "Thất thường, không thuận lợi", "meaning": "Thất thường, không thuận lợi", "example": "てんこうふじゅんで作物が育たない。\n(Thời tiết thất thường nên cây trồng không thể phát triển.)" }
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Chương 5 - Bài 5: 野球 (球, 打, 投, 点)",
    sections: [
      {
        id: "km-n3-c5-l5-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c5-l5-1", "term": "地球儀", "reading": "ちきゅうぎ", "answer": "Quả địa cầu", "meaning": "Quả địa cầu", "example": "父に地球儀を買ってもらった。\n(Được bố mua cho quả địa cầu.)" },
          { "id": "km-n3-c5-l5-2", "term": "球技", "reading": "きゅうぎ", "answer": "Các môn thể thao dùng bóng", "meaning": "Các môn thể thao dùng bóng", "example": "球技は何でもとくいだ。\n(Môn thể thao dùng bóng nào tôi cũng giỏi.)" },
          { "id": "km-n3-c5-l5-3", "term": "打球", "reading": "だきゅう", "answer": "Cú đánh bóng", "meaning": "Cú đánh bóng", "example": "打球は遠くまで飛んだ。\n(Cú đánh bóng đã bay ra rất xa.)" },
          { "id": "km-n3-c5-l5-4", "term": "強打", "reading": "きょうだ", "answer": "Cú đập mạnh, đánh trúng mạnh", "meaning": "Cú đập mạnh, đánh trúng mạnh", "example": "転んで頭を強打した。\n(Bị ngã đập mạnh vào đầu.)" },
          { "id": "km-n3-c5-l5-5", "term": "代打", "reading": "だいだ", "answer": "Cầu thủ đánh bóng thay (bóng chày)", "meaning": "Cầu thủ đánh bóng thay (bóng chày)", "example": "代打に出てホームランを打った。\n(Vào sân đánh bóng thay và đánh được một cú Home run.)" },
          { "id": "km-n3-c5-l5-6", "term": "投打", "reading": "とうだ", "answer": "Ném và đánh bóng", "meaning": "Ném và đánh bóng", "example": "このチームは投打ともに優れている。\n(Đội bóng này xuất sắc ở cả kỹ năng ném và đánh bóng.)" },
          { "id": "km-n3-c5-l5-7", "term": "投書", "reading": "とうしょ", "answer": "Thư đóng góp ý kiến, bài viết gửi tòa báo", "meaning": "Thư đóng góp ý kiến, bài viết gửi tòa báo", "example": "記事についての投書がよせられる。\n(Nhận được nhiều thư độc giả gửi về bài báo.)" },
          { "id": "km-n3-c5-l5-8", "term": "重点", "reading": "じゅうてん", "answer": "Trọng tâm, điểm nhấn", "meaning": "Trọng tâm, điểm nhấn", "example": "苦手な英語に重点を置いて勉強する。\n(Tập trung học trọng tâm vào môn tiếng Anh vốn là điểm yếu.)" },
          { "id": "km-n3-c5-l5-9", "term": "満点", "reading": "まんてん", "answer": "Điểm tối đa, điểm tuyệt đối", "meaning": "Điểm tối đa, điểm tuyệt đối", "example": "勉強をがんばって試験で満点を取った。\n(Cố gắng học tập và đạt điểm tuyệt đối trong kỳ thi.)" },
          { "id": "km-n3-c5-l5-10", "term": "打点", "reading": "だてん", "answer": "Điểm số ghi được từ cú đánh bóng", "meaning": "Điểm số ghi được từ cú đánh bóng", "example": "その試合で彼は五打点をあげた。\n(Trong trận đấu đó anh ấy đã ghi được 5 điểm đánh bóng.)" },
          { "id": "km-n3-c5-l5-11", "term": "野球", "reading": "やきゅう", "answer": "Bóng chày", "meaning": "Bóng chày", "example": "高校生の時、やきゅうぶに入っていた。\n(Thời học sinh cấp 3 tôi tham gia câu lạc bộ bóng chày.)" },
          { "id": "km-n3-c5-l5-12", "term": "打つ", "reading": "うつ", "answer": "Đánh bóng, đập", "meaning": "Đánh bóng, đập", "example": "大事な試合でヒットをうった。\n(Đã đánh trúng cú Hit trong trận đấu quan trọng.)" },
          { "id": "km-n3-c5-l5-13", "term": "投手", "reading": "とうしゅ", "answer": "Cầu thủ ném bóng (Pitcher)", "meaning": "Cầu thủ ném bóng (Pitcher)", "example": "山田とうしゅは球が速い。\n(Cầu thủ ném bóng Yamada ném bóng rất nhanh.)" },
          { "id": "km-n3-c5-l5-14", "term": "投げる", "reading": "なげる", "answer": "Ném (sỏi, bóng...)", "meaning": "Ném (sỏi, bóng...)", "example": "川に向かって小石をなげた。\n(Ném hòn sỏi nhỏ hướng về phía dòng sông.)" },
          { "id": "km-n3-c5-l5-15", "term": "同点", "reading": "どうてん", "answer": "Hòa điểm", "meaning": "Hòa điểm", "example": "試合はどうてん引き分けに終わった。\n(Trận đấu kết thúc với tỷ số hòa điểm.)" },
          { "id": "km-n3-c5-l5-16", "term": "利点", "reading": "りてん", "answer": "Ưu điểm, điểm lợi", "meaning": "Ưu điểm, điểm lợi", "example": "駅に近いのがこの店のりてんだ。\n(Gần ga là ưu điểm lớn của cửa hàng này.)" },
          { "id": "km-n3-c5-l5-17", "term": "点数", "reading": "てんすう", "answer": "Điểm số", "meaning": "Điểm số", "example": "テストのてんすうが悪かった。\n(Điểm số bài kiểm tra rất tệ.)" },
          { "id": "km-n3-c5-l5-18", "term": "交差点", "reading": "こうさてん", "answer": "Ngã tư, giao lộ", "meaning": "Ngã tư, giao lộ", "example": "車に気を付けてこうさてんをわたる。\n(Chú ý xe ô tô khi sang đường ở ngã tư giao lộ.)" }
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Chương 6 - Bài 1: 恋愛 1 (感, 情, 恋, 愛)",
    sections: [
      {
        id: "km-n3-c6-l1-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c6-l1-1", "term": "感情的", "reading": "かんじょうてき", "answer": "Mang tính cảm xúc, xúc động", "meaning": "Mang tính cảm xúc, xúc động", "example": "感情的に話してはいけない。\n(Không nên nói chuyện một cách quá cảm xúc/xúc động.)" },
          { "id": "km-n3-c6-l1-2", "term": "安心感", "reading": "あんしんかん", "answer": "Cảm giác an tâm", "meaning": "Cảm giác an tâm", "example": "子どもをだきしめて安心感をあたえる。\n(Ôm chặt đứa trẻ mang lại cảm giác an tâm.)" },
          { "id": "km-n3-c6-l1-3", "term": "感動", "reading": "かんどう", "answer": "Cảm động", "meaning": "Cảm động", "example": "実話を元にした映画を見て感動した。\n(Xem bộ phim dựa trên câu chuyện có thật và rất cảm động.)" },
          { "id": "km-n3-c6-l1-4", "term": "情け深い", "reading": "なさけぶかい", "answer": "Giàu lòng nhân ái, nhiều tình thương", "meaning": "Giàu lòng nhân ái, nhiều tình thương", "example": "彼は情け深い人だ。\n(Anh ấy là một người vô cùng giàu lòng nhân ái.)" },
          { "id": "km-n3-c6-l1-5", "term": "風情", "reading": "ふじょう", "answer": "Phong vị, nét trữ tình cổ kính", "meaning": "Phong vị, nét trữ tình cổ kính", "example": "この辺りは古い町の風情が残っている。\n(Khu vực này vẫn còn lưu giữ nét phong vị của thị trấn cổ.)" },
          { "id": "km-n3-c6-l1-6", "term": "恋しい", "reading": "こいしい", "answer": "Thương nhớ", "meaning": "Thương nhớ", "example": "母が作る料理が恋しい。\n(Thương nhớ món ăn do chính tay mẹ nấu.)" },
          { "id": "km-n3-c6-l1-7", "term": "恋う", "reading": "こう", "answer": "Thương nhớ người đã khuất", "meaning": "Thương nhớ người đã khuất", "example": "亡くなった妻を今も恋う。\n(Đến nay vẫn da diết thương nhớ người vợ đã qua đời.)" },
          { "id": "km-n3-c6-l1-8", "term": "愛用", "reading": "あいよう", "answer": "Thích dùng, dùng thường xuyên", "meaning": "Thích dùng, dùng thường xuyên", "example": "父にもらったペンを愛用している。\n(Thích và dùng thường xuyên chiếc bút được bố tặng.)" },
          { "id": "km-n3-c6-l1-9", "term": "愛情", "reading": "あいじょう", "answer": "Tình yêu thương", "meaning": "Tình yêu thương", "example": "彼は愛情表現が下手だ。\n(Anh ấy vụng về trong việc biểu lộ tình yêu thương.)" },
          { "id": "km-n3-c6-l1-10", "term": "大恋愛", "reading": "だいれんあい", "answer": "Mối tình sâu đậm", "meaning": "Mối tình sâu đậm", "example": "二人は大恋愛の末、結婚した。\n(Hai người sau một mối tình sâu đậm đã kết hôn.)" },
          { "id": "km-n3-c6-l1-11", "term": "感じた", "reading": "かんじた", "answer": "Cảm nhận được", "meaning": "Cảm nhận được", "example": "わずかだが、家がゆれたのをかんじた。\n(Cảm nhận được ngôi nhà bị rung nhẹ một chút.)" },
          { "id": "km-n3-c6-l1-12", "term": "感想", "reading": "かんそう", "answer": "Cảm tưởng, nhận xét", "meaning": "Cảm tưởng, nhận xét", "example": "本を読んだかんそうを言う。\n(Nêu cảm tưởng sau khi đọc xong cuốn sách.)" },
          { "id": "km-n3-c6-l1-13", "term": "感心した", "reading": "かんしんした", "answer": "Khâm phục, thán phục", "meaning": "Khâm phục, thán phục", "example": "彼の心優しい行動にかんしんした。\n(Khâm phục trước hành động nhân hậu tràn đầy tình thương của anh ấy.)" },
          { "id": "km-n3-c6-l1-14", "term": "友情", "reading": "ゆうじょう", "answer": "Tình bạn", "meaning": "Tình bạn", "example": "二人のゆうじょうは末長く続くだろう。\n(Tình bạn của hai người chắc sẽ kéo dài mãi mãi.)" },
          { "id": "km-n3-c6-l1-15", "term": "同情する", "reading": "どうじょうする", "answer": "Đồng cảm, thương hại", "meaning": "Đồng cảm, thương hại", "example": "病気の友達に心からどうじょうする。\n(Đồng cảm chia sẻ từ đáy lòng với người bạn bị bệnh.)" },
          { "id": "km-n3-c6-l1-16", "term": "恋", "reading": "こい", "answer": "Tình yêu, phải lòng", "meaning": "Tình yêu, phải lòng", "example": "彼女は田中さんにこいをしている。\n(Cô ấy đang phải lòng/yêu anh Tanaka.)" },
          { "id": "km-n3-c6-l1-17", "term": "恋人", "reading": "こいびと", "answer": "Người yêu", "meaning": "Người yêu", "example": "こいびとは今外国に留学している。\n(Người yêu tôi hiện đang đi du học nước ngoài.)" },
          { "id": "km-n3-c6-l1-18", "term": "愛", "reading": "あい", "answer": "Tình yêu thương", "meaning": "Tình yêu thương", "example": "手紙を読んで、母のあいを知った。\n(Đọc bức thư mới hiểu được tình yêu thương của mẹ.)" }
        ]
      }
    ]
  },
  {
    id: 17,
    title: "Chương 6 - Bài 2: 恋愛 2 (信, 想, 伝, 欲)",
    sections: [
      {
        id: "km-n3-c6-l2-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c6-l2-1", "term": "信頼", "reading": "しんらい", "answer": "Tin cậy, tin tưởng", "meaning": "Tin cậy, tin tưởng", "example": "私は親から信頼されている。\n(Tôi nhận được sự tin cậy từ cha mẹ.)" },
          { "id": "km-n3-c6-l2-2", "term": "信号", "reading": "しんごう", "answer": "Đèn tín hiệu giao thông", "meaning": "Đèn tín hiệu giao thông", "example": "信号をよく見て横断歩道をわたる。\n(Nhìn kỹ đèn tín hiệu rồi mới đi qua vạch sang đường.)" },
          { "id": "km-n3-c6-l2-3", "term": "空想", "reading": "くうそう", "answer": "Tưởng tượng, mơ mộng", "meaning": "Tưởng tượng, mơ mộng", "example": "未来の生活を空想する。\n(Mơ mộng tưởng tượng về cuộc sống tương lai.)" },
          { "id": "km-n3-c6-l2-4", "term": "愛想がいい", "reading": "あいそがいい", "answer": "Thái độ hòa nhã, thiện cảm", "meaning": "Thái độ hòa nhã, thiện cảm", "example": "彼女はだれに対しても愛想がいい。\n(Cô ấy đối với ai cũng giữ thái độ rất hòa nhã dễ mến.)" },
          { "id": "km-n3-c6-l2-5", "term": "伝える", "reading": "つたえる", "answer": "Truyền đạt, nhắn lại", "meaning": "Truyền đạt, nhắn lại", "example": "電話で用件を伝える。\n(Nhắn lại nội dung công việc qua điện thoại.)" },
          { "id": "km-n3-c6-l2-6", "term": "伝って", "reading": "つたって", "answer": "Đi men theo", "meaning": "Đi men theo", "example": "階段の手すりを伝って上る。\n(Đi men theo tay vịn cầu thang để bước lên.)" },
          { "id": "km-n3-c6-l2-7", "term": "伝説", "reading": "でんせつ", "answer": "Truyền thuyết", "meaning": "Truyền thuyết", "example": "この村には昔からの伝説が多くある。\n(Ở ngôi làng này có nhiều truyền thuyết từ ngày xưa.)" },
          { "id": "km-n3-c6-l2-8", "term": "伝言", "reading": "でんごん", "answer": "Lời nhắn", "meaning": "Lời nhắn", "example": "友達に先生への伝言をたのむ。\n(Nhờ bạn gửi lời nhắn tới thầy giáo.)" },
          { "id": "km-n3-c6-l2-9", "term": "伝統", "reading": "でんとう", "answer": "Truyền thống", "meaning": "Truyền thống", "example": "日本の伝統文化にきょうみがある。\n(Có hứng thú đối với văn hóa truyền thống Nhật Bản.)" },
          { "id": "km-n3-c6-l2-10", "term": "欲する", "reading": "ほっする", "answer": "Ham muốn, mong muốn", "meaning": "Ham muốn, mong muốn", "example": "心の欲するままに行動する。\n(Hành động theo đúng ước muốn khao khát của con tim.)" },
          { "id": "km-n3-c6-l2-11", "term": "信じている", "reading": "しんじている", "answer": "Tin tưởng", "meaning": "Tin tưởng", "example": "私は彼をしんじている。\n(Tôi luôn tin tưởng anh ấy.)" },
          { "id": "km-n3-c6-l2-12", "term": "自信", "reading": "じしん", "answer": "Sự tự tin", "meaning": "Sự tự tin", "example": "人の前で話すことにじしんがある。\n(Có sự tự tin khi nói chuyện trước đám đông.)" },
          { "id": "km-n3-c6-l2-13", "term": "信用", "reading": "しんよう", "answer": "Tin tưởng, tín nhiệm", "meaning": "Tin tưởng, tín nhiệm", "example": "友達をしんようしてお金を貸した。\n(Tin tưởng bạn bè nên đã cho mượn tiền.)" },
          { "id": "km-n3-c6-l2-14", "term": "予想", "reading": "よそう", "answer": "Dự đoán", "meaning": "Dự đoán", "example": "どちらが勝つかよそうする。\n(Dự đoán xem bên nào sẽ giành chiến thắng.)" },
          { "id": "km-n3-c6-l2-15", "term": "理想", "reading": "りそう", "answer": "Lý tưởng", "meaning": "Lý tưởng", "example": "彼はりそうの恋人だ。\n(Anh ấy là mẫu người yêu lý tưởng.)" },
          { "id": "km-n3-c6-l2-16", "term": "伝わった", "reading": "つたわった", "answer": "Được truyền tải, cảm nhận", "meaning": "Được truyền tải, cảm nhận", "example": "表情から彼の悲しみがつたわった。\n(Cảm nhận được nỗi buồn của anh ấy qua nét mặt.)" },
          { "id": "km-n3-c6-l2-17", "term": "食欲", "reading": "しょくよく", "answer": "Cảm giác thèm ăn", "meaning": "Cảm giác thèm ăn", "example": "いいにおいがしてしょくよくがわく。\n(Thấy mùi thơm nức là cảm giác thèm ăn dâng trào.)" },
          { "id": "km-n3-c6-l2-18", "term": "欲しい", "reading": "ほしい", "answer": "Muốn có", "meaning": "Muốn có", "example": "人気ブランドの洋服がほしい。\n(Muốn có bộ quần áo của thương hiệu nổi tiếng.)" }
        ]
      }
    ]
  },
  {
    id: 18,
    title: "Chương 6 - Bài 3: 悩み (苦, 悩, 困, 難)",
    sections: [
      {
        id: "km-n3-c6-l3-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c6-l3-1", "term": "苦しんでいる", "reading": "くるしんでいる", "answer": "Đau đớn, chịu đựng", "meaning": "Đau đớn, chịu đựng", "example": "重い病気で長い間苦しんでいる。\n(Chịu đựng đau đớn trong thời gian dài vì bệnh nặng.)" },
          { "id": "km-n3-c6-l3-2", "term": "苦しめた", "reading": "くるしめた", "answer": "Làm khổ", "meaning": "Làm khổ", "example": "若いころ非行に走って親を苦しめた。\n(Thời trẻ lỡ bước sa ngã làm khổ cha mẹ.)" },
          { "id": "km-n3-c6-l3-3", "term": "苦み", "reading": "にがみ", "answer": "Vị đắng", "meaning": "Vị đắng", "example": "このコーヒーは少し苦みがある。\n(Cà phê này có vị đắng nhẹ.)" },
          { "id": "km-n3-c6-l3-4", "term": "苦痛", "reading": "くつう", "answer": "Nỗi đau đớn", "meaning": "Nỗi đau đớn", "example": "苦痛を和らげる薬を飲む。\n(Uống thuốc xoa dịu nỗi đau đớn.)" },
          { "id": "km-n3-c6-l3-5", "term": "苦情", "reading": "くじょう", "answer": "Phàn nàn, khiếu nại", "meaning": "Phàn nàn, khiếu nại", "example": "テレビの音がうるさくて苦情を言った。\n(Phàn nàn vì tiếng tivi quá ồn ào.)" },
          { "id": "km-n3-c6-l3-6", "term": "悩まされている", "reading": "なやまされている", "answer": "Bị hành hạ, đau đầu", "meaning": "Bị hành hạ, đau đầu", "example": "頭痛に悩まされている。\n(Bị hành hạ chịu đựng chứng đau đầu.)" },
          { "id": "km-n3-c6-l3-7", "term": "困った", "reading": "こまった", "answer": "Gặp rắc rối, khó khăn", "meaning": "Gặp rắc rối, khó khăn", "example": "急に雨が降り出して困った。\n(Trời đột nhiên đổ mưa làm gặp rắc rối.)" },
          { "id": "km-n3-c6-l3-8", "term": "困難", "reading": "こんなん", "answer": "Khó khăn, gian khổ", "meaning": "Khó khăn, gian khổ", "example": "彼はどんな困難にも立ち向かう人だ。\n(Anh ấy là người luôn đương đầu với mọi khó khăn.)" },
          { "id": "km-n3-c6-l3-9", "term": "たえ難い", "reading": "たえがたい", "answer": "Khó mà chịu đựng nổi", "meaning": "Khó mà chịu đựng nổi", "example": "たえ難い痛みに病院へ運ばれた。\n(Đau đớn khó chịu đựng nổi phải đưa đi cấp cứu.)" },
          { "id": "km-n3-c6-l3-10", "term": "難所", "reading": "なんしょ", "answer": "Khâu khó khăn nhất", "meaning": "Khâu khó khăn nhất", "example": "工事は今、最大の難所にかかっている。\n(Công trình hiện đang ở khâu khó khăn nhất.)" },
          { "id": "km-n3-c6-l3-11", "term": "くるしい", "reading": "くるしい", "answer": "Khó thở, vất vả", "meaning": "Khó thở, vất vả", "example": "せきが止まらなくてくるしい。\n(Ho không dứt nên rất khó thở.)" },
          { "id": "km-n3-c6-l3-12", "term": "にがい", "reading": "にがい", "answer": "Đắng", "meaning": "Đắng", "example": "このお茶はにがい。\n(Trà này vị rất đắng.)" },
          { "id": "km-n3-c6-l3-13", "term": "くろうした", "reading": "くろうした", "answer": "Vất vả gian khổ", "meaning": "Vất vả gian khổ", "example": "私の親は若い時くろうしたそうだ。\n(Cha mẹ tôi nghe nói thời trẻ rất vất vả.)" },
          { "id": "km-n3-c6-l3-14", "term": "くしんする", "reading": "くしんする", "answer": "Khổ công, nhọc công", "meaning": "Khổ công, nhọc công", "example": "レポートをまとめるのにくしんする。\n(Nhọc công tóm tắt bài báo cáo.)" },
          { "id": "km-n3-c6-l3-15", "term": "なやんでいる", "reading": "なやんでいる", "answer": "Trăn trở, băn khoăn", "meaning": "Trăn trở, băn khoăn", "example": "進学するか帰国するか、なやんでいる。\n(Đang băn khoăn trăn trở giữa việc học tiếp hay về nước.)" },
          { "id": "km-n3-c6-l3-16", "term": "こまっている", "reading": "こまっている", "answer": "Gặp khó khăn", "meaning": "Gặp khó khăn", "example": "お金がなくて生活にこまっている。\n(Không có tiền nên gặp khó khăn trong cuộc sống.)" },
          { "id": "km-n3-c6-l3-17", "term": "むずかしくて", "reading": "むずかしくて", "answer": "Khó khăn", "meaning": "Khó khăn", "example": "問題がむずかしくて、答えがわからない。\n(Bài toán khó quá không biết câu trả lời.)" },
          { "id": "km-n3-c6-l3-18", "term": "なんもん", "reading": "なんもん", "answer": "Bài toán hóc húa, câu hỏi khó", "meaning": "Bài toán hóc húa, câu hỏi khó", "example": "数学のなんもんをすらすら解いた。\n(Giải trơn tru bài toán hóc húa môn toán.)" }
        ]
      }
    ]
  },
  {
    id: 19,
    title: "Chương 6 - Bài 4: 気持ちの表れ 1 (怒, 悲, 笑, 喜)",
    sections: [
      {
        id: "km-n3-c6-l4-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c6-l4-1", "term": "怒られた", "reading": "おこられた", "answer": "Bị mắng", "meaning": "Bị mắng", "example": "成績が下がって親に怒られた。\n(Thành tích học tập sụt giảm nên bị cha mẹ mắng.)" },
          { "id": "km-n3-c6-l4-2", "term": "激怒する", "reading": "げきどする", "answer": "Tức giận đùng đùng", "meaning": "Tức giận đùng đùng", "example": "相手の失礼なたいどに激怒する。\n(Tức giận đùng đùng trước thái độ thất lễ của đối phương.)" },
          { "id": "km-n3-c6-l4-3", "term": "悲しい", "reading": "かなしい", "answer": "Đau buồn", "meaning": "Đau buồn", "example": "かわいがっていた犬が死んで悲しい。\n(Chú chó cưng yêu quý qua đời thật đau buồn.)" },
          { "id": "km-n3-c6-l4-4", "term": "悲劇", "reading": "ひげき", "answer": "Bi kịch", "meaning": "Bi kịch", "example": "二人の結婚は悲劇に終わった。\n(Cuộc hôn nhân của hai người kết thúc bằng bi kịch.)" },
          { "id": "km-n3-c6-l4-5", "term": "悲観", "reading": "ひかん", "answer": "Bi quan", "meaning": "Bi quan", "example": "しょうらいを悲観してはいけない。\n(Không được quá bi quan về tương lai.)" },
          { "id": "km-n3-c6-l4-6", "term": "笑った", "reading": "わらった", "answer": "Cười to thành tiếng", "meaning": "Cười to thành tiếng", "example": "面白い話に声をあげて笑った。\n(Nghe câu chuyện thú vị và cười to thành tiếng.)" },
          { "id": "km-n3-c6-l4-7", "term": "爆笑した", "reading": "ばくしょうした", "answer": "Cười nổ tung, cười phá lên", "meaning": "Cười nổ tung, cười phá lên", "example": "彼のギャグにクラス中が爆笑した。\n(Cả lớp cười nổ tung trước trò đùa của anh ấy.)" },
          { "id": "km-n3-c6-l4-8", "term": "ほほ笑んだ", "reading": "ほほえんだ", "answer": "Mỉm cười", "meaning": "Mỉm cười", "example": "赤ちゃんを見て、思わずほほ笑んだ。\n(Ngắm đứa bé và vô thức mỉm cười.)" },
          { "id": "km-n3-c6-l4-9", "term": "喜ばれた", "reading": "よろこばれた", "answer": "Được đón nhận vui vẻ", "meaning": "Được đón nhận vui vẻ", "example": "ジュースを差し入れて喜ばれた。\n(Mang nước giải khát đến tiếp tế và được đón nhận vui vẻ.)" },
          { "id": "km-n3-c6-l4-10", "term": "喜怒哀楽", "reading": "きどあいらく", "answer": "Hỷ nộ ái ố, cảm xúc vui buồn", "meaning": "Hỷ nộ ái ố, cảm xúc vui buồn", "example": "彼女は喜怒哀楽がはっきりした性格だ。\n(Cô ấy có tính cách biểu lộ rõ ràng hỷ nộ ái ố.)" },
          { "id": "km-n3-c6-l4-11", "term": "いかり", "reading": "いかり", "answer": "Cơn giận", "meaning": "Cơn giận", "example": "失言により相手のいかりを買った。\n(Do lỡ lời nên đã chuốc lấy cơn giận của đối phương.)" },
          { "id": "km-n3-c6-l4-12", "term": "かなしむ", "reading": "かなしむ", "answer": "Đau buồn", "meaning": "Đau buồn", "example": "友人の死をかなしむ。\n(Đau buồn trước sự ra đi của bạn mình.)" },
          { "id": "km-n3-c6-l4-13", "term": "ひれん", "reading": "ひれん", "answer": "Mối tình buồn, thất tình", "meaning": "Mối tình buồn, thất tình", "example": "ひれんの物語を読んだ。\n(Đọc cuốn tiểu thuyết về mối tình buồn.)" },
          { "id": "km-n3-c6-l4-14", "term": "おおわらいする", "reading": "おおわらいする", "answer": "Cười lớn", "meaning": "Cười lớn", "example": "落語を聞いておおわらいする。\n(Nghe kịch Rakugo và cười khoái chí.)" },
          { "id": "km-n3-c6-l4-15", "term": "えがお", "reading": "えがお", "answer": "Nụ cười rạng rỡ", "meaning": "Nụ cười rạng rỡ", "example": "彼女はいつもえがおを絶やさない。\n(Cô ấy lúc nào cũng rạng rỡ nụ cười tươi.)" },
          { "id": "km-n3-c6-l4-16", "term": "わらいごえ", "reading": "わらいごえ", "answer": "Tiếng cười", "meaning": "Tiếng cười", "example": "となりの教室からわらいごえがする。\n(Nghe thấy tiếng cười từ phòng học bên cạnh.)" },
          { "id": "km-n3-c6-l4-17", "term": "よろこんでくれた", "reading": "よろこんでくれた", "answer": "Vui mừng cho", "meaning": "Vui mừng cho", "example": "母は大学合格をよろこんでくれた。\n(Mẹ đã rất vui mừng vì tôi thi đỗ đại học.)" },
          { "id": "km-n3-c6-l4-18", "term": "おおよろこびする", "reading": "おおよろこびする", "answer": "Vui mừng khôn xiết", "meaning": "Vui mừng khôn xiết", "example": "さいふが見つかっておおよろこびする。\n(Vui mừng khôn xiết khi tìm lại được chiếc ví.)" }
        ]
      }
    ]
  },
  {
    id: 20,
    title: "Chương 6 - Bài 5: 気持ちの表れ 2 (残, 念, 泣, 涙)",
    sections: [
      {
        id: "km-n3-c6-l5-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          { "id": "km-n3-c6-l5-1", "term": "残して", "reading": "のこして", "answer": "Để thừa lại", "meaning": "Để thừa lại", "example": "注文した料理を残してしまった。\n(Đã lỡ để thừa lại món ăn đã gọi.)" },
          { "id": "km-n3-c6-l5-2", "term": "残留する", "reading": "ざんりゅうする", "answer": "Đọng lại, còn sót lại", "meaning": "Đọng lại, còn sót lại", "example": "野菜に農薬が残留する。\n(Dư lượng thuốc trừ sâu còn đọng lại trên rau.)" },
          { "id": "km-n3-c6-l5-3", "term": "残雪", "reading": "ざんせつ", "answer": "Tuyết đọng còn sót lại", "meaning": "Tuyết đọng còn sót lại", "example": "山に残雪があるのが見える。\n(Nhìn thấy vết tuyết đọng còn sót lại trên núi.)" },
          { "id": "km-n3-c6-l5-4", "term": "専念する", "reading": "せんねんする", "answer": "Chuyên tâm", "meaning": "Chuyên tâm", "example": "アルバイトを辞めて勉強に専念する。\n(Nghỉ làm thêm để chuyên tâm vào học hành.)" },
          { "id": "km-n3-c6-l5-5", "term": "念願", "reading": "ねんがん", "answer": "Nguyện vọng thiết tha", "meaning": "Nguyện vọng thiết tha", "example": "念願のマイホームを手に入れた。\n(Sắm được ngôi nhà riêng mơ ước bấy lâu.)" },
          { "id": "km-n3-c6-l5-6", "term": "信念", "reading": "しんねん", "answer": "Niềm tin, giữ vững niềm tin", "meaning": "Niềm tin, giữ vững niềm tin", "example": "彼は信念を曲げない人だ。\n(Anh ấy là người không bao giờ từ bỏ niềm tin.)" },
          { "id": "km-n3-c6-l5-7", "term": "念のため", "reading": "ねんのため", "answer": "Để cho cẩn thận", "meaning": "Để cho cẩn thận", "example": "念のため、連絡先を教えてもらう。\n(Hỏi xin địa chỉ liên lạc cho cẩn thận.)" },
          { "id": "km-n3-c6-l5-8", "term": "泣いた", "reading": "ないた", "answer": "Khóc", "meaning": "Khóc", "example": "映画のラストシーンに泣いた。\n(Rơi nước mắt ở cảnh kết của bộ phim.)" },
          { "id": "km-n3-c6-l5-9", "term": "号泣する", "reading": "ごうきゅうする", "answer": "Khóc nức nở", "meaning": "Khóc nức nở", "example": "そふが亡くなり、号泣する父を見た。\n(Chứng kiến cảnh bố khóc nức nở khi ông nội qua đời.)" },
          { "id": "km-n3-c6-l5-10", "term": "涙声", "reading": "なみだごえ", "answer": "Giọng nghẹn ngào nước mắt", "meaning": "Giọng nghẹn ngào nước mắt", "example": "話の途中で突然涙声になる。\n(Đang nói chuyện đột nhiên giọng trở nên nghẹn ngào.)" },
          { "id": "km-n3-c6-l5-11", "term": "のこって", "reading": "のこって", "answer": "Ở lại", "meaning": "Ở lại", "example": "会社に遅くまでのこって仕事をした。\n(Ở lại công ty muộn để làm việc.)" },
          { "id": "km-n3-c6-l5-12", "term": "ざんねんながら", "reading": "ざんねんながら", "answer": "Đáng tiếc là", "meaning": "Đáng tiếc là", "example": "ざんねんながら今年も不合格だった。\n(Thật đáng tiếc là năm nay lại thi trượt.)" },
          { "id": "km-n3-c6-l5-13", "term": "のこさず", "reading": "のこさず", "answer": "Không chừa lại tẹo nào", "meaning": "Không chừa lại tẹo nào", "example": "出された料理をのこさず全部食べた。\n(Ăn hết sạch món ăn bưng ra không chừa lại tẹo nào.)" },
          { "id": "km-n3-c6-l5-14", "term": "にゅうねんに", "reading": "にゅうねんに", "answer": "Kỹ lưỡng, tỉ mỉ", "meaning": "Kỹ lưỡng, tỉ mỉ", "example": "忘れ物がないかにゅうねんに確認する。\n(Kiểm tra tỉ mỉ xem có quên đồ gì không.)" },
          { "id": "km-n3-c6-l5-15", "term": "りねん", "reading": "りねん", "answer": "Triết lý", "meaning": "Triết lý", "example": "大学の教育りねんに共感する。\n(Đồng cảm với triết lý giáo dục của trường đại học.)" },
          { "id": "km-n3-c6-l5-16", "term": "くやしなき", "reading": "くやしなき", "answer": "Khóc vì tức giận/uất khuất", "meaning": "Khóc vì tức giận/uất khuất", "example": "試合に負けてくやしなきをした。\n(Khóc uất khuất vì thua trận đấu.)" },
          { "id": "km-n3-c6-l5-17", "term": "なきむし", "reading": "なきむし", "answer": "Đứa trẻ mít ướt", "meaning": "Đứa trẻ mít ướt", "example": "子どものころはなきむしだった。\n(Hồi nhỏ tôi là một đứa trẻ rất mít ướt.)" },
          { "id": "km-n3-c6-l5-18", "term": "なみだ", "reading": "なみだ", "answer": "Nước mắt", "meaning": "Nước mắt", "example": "玉ねぎを切ったらなみだが出た。\n(Thái hành tây làm nước mắt chảy ra.)" }
        ]
      }
    ]
  }
];

export const kanjiMasterN3Chars: { [lessonId: number]: KanjiChar[] } = {
  1: [
    { char: "熱", hanViet: "NHIỆT", strokes: 15, onyomi: ["ネツ"], kunyomi: ["あつ-い"], meaning: "Nóng, nhiệt độ, nhiệt tình", examples: [{ word: "熱い", reading: "あつい", meaning: "Nóng" }, { word: "高熱", reading: "こうねつ", meaning: "Sốt cao" }, { word: "熱心", reading: "ねっしん", meaning: "Nhiệt tình" }] },
    { char: "冷", hanViet: "LÃNH", strokes: 7, onyomi: ["レイ"], kunyomi: ["ひ-える", "ひ-やす", "さ-める", "さ-ます", "ひ-や"], meaning: "Lạnh, nguội, làm lạnh", examples: [{ word: "冷える", reading: "ひえる", meaning: "Lạnh đi" }, { word: "冷やす", reading: "ひやす", meaning: "Làm lạnh" }, { word: "冷たい", reading: "つめたい", meaning: "Lạnh" }] },
    { char: "温", hanViet: "ÔN", strokes: 12, onyomi: ["オン"], kunyomi: ["あたた-まる", "あたた-める", "あたた-かい", "あたた-か"], meaning: "Ấm, ôn hòa", examples: [{ word: "温まる", reading: "あたたまる", meaning: "Ấm lên" }, { word: "温かい", reading: "あたたかい", meaning: "Ấm áp" }] },
    { char: "度", hanViet: "ĐỘ", strokes: 9, onyomi: ["ド", "ト", "タク"], kunyomi: ["たび"], meaning: "Mức độ, lần, chuẩn bị", examples: [{ word: "温度", reading: "おんど", meaning: "Nhiệt độ" }, { word: "支度", reading: "したく", meaning: "Sửa soạn" }] }
  ],
  2: [
    { char: "材", hanViet: "TÀI", strokes: 7, onyomi: ["ザイ"], kunyomi: [], meaning: "Nguyên liệu, gỗ, nhân tài", examples: [{ word: "材料", reading: "ざいりょう", meaning: "Nguyên liệu" }, { word: "木材", reading: "もくざい", meaning: "Gỗ" }] },
    { char: "型", hanViet: "HÌNH", strokes: 9, onyomi: ["ケイ"], kunyomi: ["かた"], meaning: "Khuôn, mẫu, điển hình", examples: [{ word: "型", reading: "かた", meaning: "Khuôn mẫu" }, { word: "典型的な", reading: "てんけいてきな", meaning: "Điển hình" }] },
    { char: "焼", hanViet: "THIÊU", strokes: 12, onyomi: ["ショウ"], kunyomi: ["や-ける", "や-く"], meaning: "Nướng, thiêu đốt", examples: [{ word: "焼く", reading: "やく", meaning: "Nướng" }, { word: "日焼け", reading: "ひやけ", meaning: "Cháy nắng" }] },
    { char: "器", hanViet: "KHÍ", strokes: 15, onyomi: ["キ"], kunyomi: ["うつわ"], meaning: "Bát đĩa, đồ đựng, khéo léo", examples: [{ word: "器", reading: "うつわ", meaning: "Bát đĩa" }, { word: "食器", reading: "しょっき", meaning: "Bát đĩa" }] }
  ],
  3: [
    { char: "卵", hanViet: "NOÃN", strokes: 7, onyomi: ["ラン"], kunyomi: ["たまご"], meaning: "Quả trứng", examples: [{ word: "卵", reading: "たまご", meaning: "Quả trứng" }, { word: "卵白", reading: "らんぱく", meaning: "Lòng trắng trứng" }] },
    { char: "乳", hanViet: "NHŨ", strokes: 8, onyomi: ["ニュウ"], kunyomi: ["ちち", "ち"], meaning: "Sữa", examples: [{ word: "牛乳", reading: "ぎゅうにゅう", meaning: "Sữa bò" }, { word: "乳歯", reading: "にゅうし", meaning: "Răng sữa" }] },
    { char: "粉", hanViet: "PHẤN", strokes: 10, onyomi: ["フン"], kunyomi: ["こな", "こ"], meaning: "Bột", examples: [{ word: "小麦粉", reading: "こむぎこ", meaning: "Bột mì" }, { word: "粉末", reading: "ふんまつ", meaning: "Dạng bột" }] },
    { char: "塩", hanViet: "DIÊM", strokes: 13, onyomi: ["エン"], kunyomi: ["しお"], meaning: "Muối", examples: [{ word: "塩", reading: "しお", meaning: "Muối" }, { word: "塩味", reading: "しおあじ", meaning: "Vị muối" }] }
  ],
  4: [
    { char: "菜", hanViet: "THÁI", strokes: 11, onyomi: ["サイ"], kunyomi: ["な"], meaning: "Rau", examples: [{ word: "野菜", reading: "やさい", meaning: "Rau" }, { word: "菜の花", reading: "なのはな", meaning: "Hoa cải" }] },
    { char: "果", hanViet: "QUẢ", strokes: 8, onyomi: ["カ"], kunyomi: ["は-たす", "は-てる", "は-て"], meaning: "Quả, kết quả", examples: [{ word: "成果", reading: "せいか", meaning: "Thành quả" }, { word: "果たす", reading: "はたす", meaning: "Hoàn thành" }] },
    { char: "豆", hanViet: "ĐẬU", strokes: 7, onyomi: ["トウ", "ズ"], kunyomi: ["まめ"], meaning: "Đậu phụ, hạt đậu", examples: [{ word: "豆腐", reading: "とうふ", meaning: "Đậu phụ" }, { word: "大豆", reading: "だいず", meaning: "Đậu nành" }] },
    { char: "缶", hanViet: "PHẪU", strokes: 6, onyomi: ["カン"], kunyomi: [], meaning: "Lon, đồ hộp", examples: [{ word: "空き缶", reading: "あきかん", meaning: "Lon rỗng" }, { word: "缶詰", reading: "かんづめ", meaning: "Đồ hộp" }] }
  ],
  5: [
    { char: "杯", hanViet: "BÔI", strokes: 8, onyomi: ["ハイ"], kunyomi: ["さかずき"], meaning: "Cốc, ly", examples: [{ word: "杯", reading: "さかずき", meaning: "Chén rượu" }, { word: "乾杯", reading: "かんぱい", meaning: "Cạn ly" }] },
    { char: "枚", hanViet: "MAI", strokes: 8, onyomi: ["マイ"], kunyomi: [], meaning: "Tờ, tấm", examples: [{ word: "枚数", reading: "まいすう", meaning: "Số tờ" }] },
    { char: "匹", hanViet: "THẤT", strokes: 4, onyomi: ["ヒツ"], kunyomi: ["ひき"], meaning: "Con (động vật nhỏ)", examples: [{ word: "二匹", reading: "にひき", meaning: "Hai con" }] },
    { char: "量", hanViet: "LƯỢNG", strokes: 12, onyomi: ["リョウ"], kunyomi: ["はか-る"], meaning: "Cân, trọng lượng", examples: [{ word: "重量", reading: "じゅうりょう", meaning: "Trọng lượng" }, { word: "分量", reading: "ぶんりょう", meaning: "Liều lượng" }] }
  ],
  6: [
    { char: "頭", hanViet: "ĐẦU", strokes: 16, onyomi: ["トウ", "ズ"], kunyomi: ["あたま", "かしら"], meaning: "Cái đầu", examples: [{ word: "頭", reading: "あたま", meaning: "Đầu" }, { word: "頭痛", reading: "ずつう", meaning: "Đau đầu" }] },
    { char: "顔", hanViet: "NHAN", strokes: 18, onyomi: ["ガン"], kunyomi: ["かお"], meaning: "Khuôn mặt", examples: [{ word: "顔", reading: "かお", meaning: "Khuôn mặt" }, { word: "笑顔", reading: "えがお", meaning: "Nụ cười" }] },
    { char: "首", hanViet: "THỦ", strokes: 9, onyomi: ["シュ"], kunyomi: ["くび"], meaning: "Cổ, sa thải", examples: [{ word: "首", reading: "くび", meaning: "Cổ" }, { word: "首相", reading: "しゅしょう", meaning: "Thủ tướng" }] },
    { char: "鼻", hanViet: "TỊ", strokes: 14, onyomi: ["ビ"], kunyomi: ["はな"], meaning: "Cái mũi", examples: [{ word: "鼻", reading: "はな", meaning: "Mũi" }, { word: "鼻水", reading: "はなみず", meaning: "Nước mũi" }] }
  ],
  7: [
    { char: "呼", hanViet: "HÔ", strokes: 8, onyomi: ["コ"], kunyomi: ["よ-ぶ"], meaning: "Gọi, thở", examples: [{ word: "呼ぶ", reading: "よぶ", meaning: "Gọi" }, { word: "呼吸", reading: "こきゅう", meaning: "Hô hấp" }] },
    { char: "吸", hanViet: "HẤP", strokes: 6, onyomi: ["キュウ"], kunyomi: ["す-う"], meaning: "Hút, hít", examples: [{ word: "吸う", reading: "すう", meaning: "Hút" }, { word: "深呼吸", reading: "しんこきゅう", meaning: "Hít thở sâu" }] },
    { char: "息", hanViet: "TỨC", strokes: 10, onyomi: ["ソク"], kunyomi: ["いき"], meaning: "Hơi thở, con trai", examples: [{ word: "息", reading: "いき", meaning: "Hơi thở" }, { word: "息子", reading: "むすこ", meaning: "Con trai" }] },
    { char: "汗", hanViet: "HÃN", strokes: 6, onyomi: ["カン"], kunyomi: ["あせ"], meaning: "Mồ hôi", examples: [{ word: "汗", reading: "あせ", meaning: "Mồ hôi" }, { word: "冷や汗", reading: "ひやあせ", meaning: "Mồ hôi lạnh" }] }
  ],
  8: [
    { char: "検", hanViet: "KIỂM", strokes: 12, onyomi: ["ケン"], kunyomi: [], meaning: "Kiểm tra", examples: [{ word: "検査", reading: "けんさ", meaning: "Xét nghiệm" }, { word: "点検", reading: "てんけん", meaning: "Kiểm tra" }] },
    { char: "査", hanViet: "TRA", strokes: 9, onyomi: ["サ"], kunyomi: [], meaning: "Điều tra, visa", examples: [{ word: "調査", reading: "ちょうさ", meaning: "Khảo sát" }, { word: "査証", reading: "さしょう", meaning: "Thị thực" }] },
    { char: "歯", hanViet: "XỈ", strokes: 12, onyomi: ["シ"], kunyomi: ["は"], meaning: "Cái răng", examples: [{ word: "歯", reading: "は", meaning: "Răng" }, { word: "虫歯", reading: "むしば", meaning: "Răng sâu" }] },
    { char: "痛", hanViet: "THỐNG", strokes: 12, onyomi: ["ツウ"], kunyomi: ["いた-む", "いた-い"], meaning: "Đau nhức", examples: [{ word: "痛い", reading: "いたい", meaning: "Đau" }, { word: "激痛", reading: "げきつう", meaning: "Đau dữ dội" }] }
  ],
  9: [
    { char: "血", hanViet: "HUYẾT", strokes: 6, onyomi: ["ケツ"], kunyomi: ["ち"], meaning: "Máu", examples: [{ word: "血", reading: "ち", meaning: "Máu" }, { word: "血管", reading: "けっかん", meaning: "Mạch máu" }] },
    { char: "液", hanViet: "DỊCH", strokes: 11, onyomi: ["エキ"], kunyomi: [], meaning: "Chất lỏng", examples: [{ word: "液体", reading: "えきたい", meaning: "Chất lỏng" }, { word: "血液型", reading: "けつえきがた", meaning: "Nhóm máu" }] },
    { char: "包", hanViet: "BAO", strokes: 5, onyomi: ["ホウ"], kunyomi: ["つつ-む"], meaning: "Bọc, gói", examples: [{ word: "包む", reading: "つつむ", meaning: "Bọc" }, { word: "包帯", reading: "ほうたい", meaning: "Băng gạc" }] },
    { char: "帯", hanViet: "ĐỚI", strokes: 10, onyomi: ["タイ"], kunyomi: ["お-びる", "おび"], meaning: "Đai lưng, mang", examples: [{ word: "帯", reading: "おび", meaning: "Thắt lưng Kimono" }, { word: "携帯", reading: "けいたい", meaning: "Điện thoại di động" }] }
  ],
  10: [
    { char: "救", hanViet: "CỨU", strokes: 11, onyomi: ["キュウ"], kunyomi: ["すく-う"], meaning: "Cứu sống", examples: [{ word: "救う", reading: "すくう", meaning: "Cứu" }, { word: "救急車", reading: "きゅうきゅうしゃ", meaning: "Xe cứu thương" }] },
    { char: "助", hanViet: "TRỢ", strokes: 7, onyomi: ["ジョ"], kunyomi: ["たす-かる", "たす-ける"], meaning: "Giúp đỡ", examples: [{ word: "助ける", reading: "たすける", meaning: "Giúp đỡ" }, { word: "助言", reading: "じょげん", meaning: "Lời khuyên" }] },
    { char: "死", hanViet: "TỬ", strokes: 6, onyomi: ["シ"], kunyomi: ["し-ぬ"], meaning: "Chết", examples: [{ word: "死ぬ", reading: "しぬ", meaning: "Chết" }, { word: "死亡者", reading: "しぼうしゃ", meaning: "Người tử vong" }] },
    { char: "亡", hanViet: "VONG", strokes: 3, onyomi: ["ボウ", "モウ"], kunyomi: ["な-い"], meaning: "Qua đời, vong", examples: [{ word: "亡くなる", reading: "なくなる", meaning: "Qua đời" }, { word: "亡命", reading: "ぼうめい", meaning: "Tị nạn chính trị" }] }
  ],
  11: [
    { char: "戦", hanViet: "CHIẾN", strokes: 13, onyomi: ["セン"], kunyomi: ["たたか-う"], meaning: "Chiến đấu", examples: [{ word: "戦う", reading: "たたかう", meaning: "Thi đấu" }, { word: "作戦", reading: "さくせん", meaning: "Chiến thuật" }] },
    { char: "決", hanViet: "QUYẾT", strokes: 7, onyomi: ["ケツ"], kunyomi: ["き-まる", "き-める"], meaning: "Quyết định", examples: [{ word: "決める", reading: "きめる", meaning: "Quyết định" }, { word: "決意", reading: "けつい", meaning: "Quyết ý" }] },
    { char: "勝", hanViet: "THẮNG", strokes: 12, onyomi: ["ショウ"], kunyomi: ["か-つ", "まさ-る"], meaning: "Chiến thắng", examples: [{ word: "勝つ", reading: "かつ", meaning: "Thắng" }, { word: "優勝", reading: "ゆうしょう", meaning: "Vô địch" }] },
    { char: "負", hanViet: "PHỤ", strokes: 9, onyomi: ["フ"], kunyomi: ["ま-ける", "ま-かす"], meaning: "Thua, gánh vác", examples: [{ word: "負ける", reading: "まける", meaning: "Thua" }, { word: "負担", reading: "ふたん", meaning: "Gánh vác" }] }
  ],
  12: [
    { char: "代", hanViet: "ĐẠI", strokes: 5, onyomi: ["ダイ", "タイ"], kunyomi: ["かわ-る"], meaning: "Thay thế, đại diện", examples: [{ word: "代わる", reading: "かわる", meaning: "Thay mặt" }, { word: "代表", reading: "だいひょう", meaning: "Đại biểu" }] },
    { char: "表", hanViet: "BIỂU", strokes: 8, onyomi: ["ヒョウ"], kunyomi: ["あらわ-れる", "おもて"], meaning: "Bảng biểu, bộc lộ", examples: [{ word: "表", reading: "ひょう", meaning: "Bảng biểu" }, { word: "表示", reading: "ひょうじ", meaning: "Hiển thị" }] },
    { char: "第", hanViet: "ĐỆ", strokes: 11, onyomi: ["ダイ"], kunyomi: [], meaning: "Số thứ tự", examples: [{ word: "第一回", reading: "だいいっかい", meaning: "Lần đầu" }] },
    { char: "回", hanViet: "HỒI", strokes: 6, onyomi: ["カイ"], kunyomi: ["まわ-る", "まわ-す"], meaning: "Lần, xoay", examples: [{ word: "回る", reading: "まわる", meaning: "Xoay quanh" }, { word: "回数券", reading: "かいすうけん", meaning: "Vé lượt" }] }
  ],
  13: [
    { char: "記", hanViet: "KÝ", strokes: 10, onyomi: ["キ"], kunyomi: ["しる-す"], meaning: "Ghi chép", examples: [{ word: "記す", reading: "しるす", meaning: "Ghi chép" }, { word: "暗記", reading: "あんき", meaning: "Học thuộc" }] },
    { char: "録", hanViet: "LỤC", strokes: 16, onyomi: ["ロク"], kunyomi: [], meaning: "Đăng ký, kỷ lục", examples: [{ word: "登録", reading: "とうろく", meaning: "Đăng ký" }, { word: "新記録", reading: "しんきろく", meaning: "Kỷ kỷ lục" }] },
    { char: "優", hanViet: "ƯU", strokes: 17, onyomi: ["ユウ"], kunyomi: ["すぐ-れる", "やさ-しい"], meaning: "Ưu tú, dịu dàng", examples: [{ word: "優れる", reading: "すぐれる", meaning: "Xuất sắc" }, { word: "優しい", reading: "やさしい", meaning: "Dịu dàng" }] },
    { char: "賞", hanViet: "THƯỞNG", strokes: 15, onyomi: ["ショウ"], kunyomi: [], meaning: "Giải thưởng", examples: [{ word: "賞状", reading: "しょうじょう", meaning: "Bằng khen" }, { word: "賞金", reading: "しょうきん", meaning: "Tiền thưởng" }] }
  ],
  14: [
    { char: "秒", hanViet: "BÀO", strokes: 9, onyomi: ["ビョウ"], kunyomi: [], meaning: "Giây", examples: [{ word: "秒読み", reading: "びょうよみ", meaning: "Đếm ngược" }, { word: "毎秒", reading: "まいびょう", meaning: "Mỗi giây" }] },
    { char: "差", hanViet: "SAI", strokes: 10, onyomi: ["サ"], kunyomi: ["さ-す"], meaning: "Chênh lệch", examples: [{ word: "差", reading: "さ", meaning: "Khoảng cách" }, { word: "時差", reading: "じさ", meaning: "Chênh lệch múi giờ" }] },
    { char: "測", hanViet: "TRẮC", strokes: 12, onyomi: ["ソク"], kunyomi: ["はか-る"], meaning: "Đo đạc", examples: [{ word: "予測", reading: "よそく", meaning: "Dự đoán" }, { word: "測定", reading: "そくてい", meaning: "Đo đạc" }] },
    { char: "順", hanViet: "THUẬN", strokes: 12, onyomi: ["ジュン"], kunyomi: [], meaning: "Thứ tự", examples: [{ word: "順序", reading: "じゅんじょ", meaning: "Trình tự" }, { word: "順番", reading: "じゅんばん", meaning: "Lượt" }] }
  ],
  15: [
    { char: "球", hanViet: "CẦU", strokes: 11, onyomi: ["キュウ"], kunyomi: ["たま"], meaning: "Quả bóng", examples: [{ word: "野球", reading: "やきゅう", meaning: "Bóng chày" }, { word: "地球儀", reading: "ちきゅうぎ", meaning: "Quả địa cầu" }] },
    { char: "打", hanViet: "ĐẢ", strokes: 5, onyomi: ["ダ"], kunyomi: ["う-つ"], meaning: "Đánh, đập", examples: [{ word: "打つ", reading: "うつ", meaning: "Đánh bóng" }, { word: "打球", reading: "だきゅう", meaning: "Cú đánh" }] },
    { char: "投", hanViet: "ĐẦU", strokes: 7, onyomi: ["トウ"], kunyomi: ["な-げる"], meaning: "Ném", examples: [{ word: "投げる", reading: "なげる", meaning: "Ném" }, { word: "投手", reading: "とうしゅ", meaning: "Pitcher" }] },
    { char: "点", hanViet: "ĐIỂM", strokes: 9, onyomi: ["テン"], kunyomi: [], meaning: "Điểm số", examples: [{ word: "満点", reading: "まんてん", meaning: "Điểm tối đa" }, { word: "点数", reading: "てんすう", meaning: "Điểm số" }] }
  ],
  16: [
    { char: "感", hanViet: "CẢM", strokes: 13, onyomi: ["カン"], kunyomi: [], meaning: "Cảm xúc, cảm động, nhận xét", examples: [{ word: "感情的", reading: "かんじょうてき", meaning: "Cảm xúc" }, { word: "安心感", reading: "あんしんかん", meaning: "An tâm" }, { word: "感動", reading: "かんどう", meaning: "Cảm động" }] },
    { char: "情", hanViet: "TÌNH", strokes: 11, onyomi: ["ジョウ", "セイ"], kunyomi: ["なさ-け"], meaning: "Tình cảm, nhân ái, phong vị", examples: [{ word: "情け深い", reading: "なさけぶかい", meaning: "Nhân ái" }, { word: "風情", reading: "ふじょう", meaning: "Phong vị" }, { word: "友情", reading: "ゆうじょう", meaning: "Tình bạn" }] },
    { char: "恋", hanViet: "LUYẾN", strokes: 10, onyomi: ["レン"], kunyomi: ["こ-う", "こい-しい", "こい"], meaning: "Tình yêu, thương nhớ, người yêu", examples: [{ word: "恋しい", reading: "こいしい", meaning: "Thương nhớ" }, { word: "恋人", reading: "こいびと", meaning: "Người yêu" }] },
    { char: "愛", hanViet: "ÁI", strokes: 13, onyomi: ["アイ"], kunyomi: [], meaning: "Yêu thương, thích dùng", examples: [{ word: "愛用", reading: "あいよう", meaning: "Thích dùng" }, { word: "愛情", reading: "あいじょう", meaning: "Tình yêu thương" }] }
  ],
  17: [
    { char: "信", hanViet: "TÍN", strokes: 9, onyomi: ["シン"], kunyomi: [], meaning: "Tin tưởng, tự tin, tín hiệu", examples: [{ word: "信頼", reading: "しんらい", meaning: "Tin cậy" }, { word: "信号", reading: "しんごう", meaning: "Tín hiệu" }, { word: "自信", reading: "じしん", meaning: "Tự tin" }] },
    { char: "想", hanViet: "TƯỞNG", strokes: 13, onyomi: ["ソウ", "ソ"], kunyomi: [], meaning: "Tưởng tượng, lý tưởng, mơ mộng", examples: [{ word: "空想", reading: "くうそう", meaning: "Tưởng tượng" }, { word: "理想", reading: "りそう", meaning: "Lý tưởng" }] },
    { char: "伝", hanViet: "TRUYỀN", strokes: 6, onyomi: ["デン"], kunyomi: ["つた-わる", "つた-える", "つた-う"], meaning: "Truyền đạt, truyền thống, nhắn lại", examples: [{ word: "伝える", reading: "つたえる", meaning: "Truyền đạt" }, { word: "伝説", reading: "でんせつ", meaning: "Truyền thuyết" }] },
    { char: "欲", hanViet: "DỤC", strokes: 11, onyomi: ["ヨク"], kunyomi: ["ほっ-する", "ほ-しい"], meaning: "Ham muốn, ước muốn, thèm ăn", examples: [{ word: "欲する", reading: "ほっする", meaning: "Mong muốn" }, { word: "食欲", reading: "しょくよく", meaning: "Thèm ăn" }] }
  ],
  18: [
    { char: "苦", hanViet: "KHỔ", strokes: 8, onyomi: ["ク"], kunyomi: ["くる-しむ", "くる-しい", "にが-い"], meaning: "Đau khổ, đắng, vất vả, phàn nàn", examples: [{ word: "苦しむ", reading: "くるしむ", meaning: "Đau đớn" }, { word: "苦痛", reading: "くつう", meaning: "Nỗi đau" }, { word: "苦しい", reading: "くるしい", meaning: "Vất vả, khó thở" }] },
    { char: "悩", hanViet: "NÃO", strokes: 10, onyomi: ["ノウ"], kunyomi: ["なや-む", "なや-ます"], meaning: "Trăn trở, băn khoăn, đau đầu", examples: [{ word: "悩む", reading: "なやむ", meaning: "Băn khoăn" }, { word: "頭痛に悩まされる", reading: "ずつうになやまされる", meaning: "Bị đau đầu hành hạ" }] },
    { char: "困", hanViet: "KHỐN", strokes: 7, onyomi: ["コン"], kunyomi: ["こま-る"], meaning: "Khó khăn, rắc rối", examples: [{ word: "困る", reading: "こまる", meaning: "Gặp rắc rối" }, { word: "困難", reading: "こんなん", meaning: "Khó khăn" }] },
    { char: "難", hanViet: "NAN", strokes: 18, onyomi: ["ナン"], kunyomi: ["むずか-しい", "かた-い"], meaning: "Khó, bài toán hóc húa", examples: [{ word: "たえ難い", reading: "たえがたい", meaning: "Khó chịu đựng" }, { word: "難問", reading: "なんもん", meaning: "Bài toán khó" }] }
  ],
  19: [
    { char: "怒", hanViet: "NỘ", strokes: 9, onyomi: ["ド"], kunyomi: ["いか-る", "おこ-る"], meaning: "Tức giận, phẫn nộ", examples: [{ word: "怒る", reading: "おこる", meaning: "Tức giận" }, { word: "激怒する", reading: "げきどする", meaning: "Tức giận đùng đùng" }] },
    { char: "悲", hanViet: "BI", strokes: 12, onyomi: ["ヒ"], kunyomi: ["かな-しむ", "かな-しい"], meaning: "Đau buồn, bi kịch, bi quan", examples: [{ word: "悲しい", reading: "かなしい", meaning: "Đau buồn" }, { word: "悲劇", reading: "ひげき", meaning: "Bi kịch" }] },
    { char: "笑", hanViet: "TIẾU", strokes: 10, onyomi: ["ショウ"], kunyomi: ["わら-う", "え-む"], meaning: "Cười, mỉm cười, nụ cười", examples: [{ word: "笑う", reading: "わらう", meaning: "Cười" }, { word: "爆笑する", reading: "ばくしょうする", meaning: "Cười nổ tung" }, { word: "笑顔", reading: "えがお", meaning: "Nụ cười" }] },
    { char: "喜", hanViet: "HỶ", strokes: 12, onyomi: ["キ"], kunyomi: ["よろこ-ぶ"], meaning: "Vui mừng, hỷ nộ ái ố", examples: [{ word: "喜ぶ", reading: "よろこぶ", meaning: "Vui mừng" }, { word: "喜怒哀楽", reading: "きどあいらく", meaning: "Hỷ nộ ái ố" }] }
  ],
  20: [
    { char: "残", hanViet: "TÀN", strokes: 10, onyomi: ["ザン"], kunyomi: ["のこ-る", "のこ-す"], meaning: "Còn lại, đọng lại, tuyết đọng", examples: [{ word: "残す", reading: "のこす", meaning: "Để thừa lại" }, { word: "残雪", reading: "ざんせつ", meaning: "Vết tuyết đọng" }] },
    { char: "念", hanViet: "NIỆM", strokes: 8, onyomi: ["ネン"], kunyomi: [], meaning: "Chuyên tâm, nguyện vọng, cẩn thận, đáng tiếc", examples: [{ word: "専念する", reading: "せんねんする", meaning: "Chuyên tâm" }, { word: "念願", reading: "ねんがん", meaning: "Nguyện vọng" }, { word: "念のため", reading: "ねんのため", meaning: "Cho cẩn thận" }, { word: "残念", reading: "ざんねん", meaning: "Đáng tiếc" }] },
    { char: "泣", hanViet: "KHẤP", strokes: 8, onyomi: ["キュウ"], kunyomi: ["な-く"], meaning: "Khóc, khóc nức nở, mít ướt", examples: [{ word: "泣く", reading: "なく", meaning: "Khóc" }, { word: "号泣する", reading: "ごうきゅうする", meaning: "Khóc nức nở" }] },
    { char: "涙", hanViet: "LỆ", strokes: 10, onyomi: ["ルイ"], kunyomi: ["なみだ"], meaning: "Nước mắt, giọng nghẹn ngào", examples: [{ word: "涙", reading: "なみだ", meaning: "Nước mắt" }, { word: "涙声", reading: "なみだごえ", meaning: "Giọng nghẹn ngào" }] }
  ]
};

export const kanjiMasterN3LessonsCount = kanjiMasterN3Lessons.length;
