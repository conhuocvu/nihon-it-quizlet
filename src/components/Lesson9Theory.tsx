import React, { useState, useMemo } from 'react';
import {
  ArrowLeft, ShieldAlert, ShieldCheck, Database, Languages, Activity, Server, AlertTriangle, HelpCircle
} from 'lucide-react';

interface Lesson9TheoryProps {
  onClose: () => void;
}

export const Lesson9Theory: React.FC<Lesson9TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'9.1' | '9.3' | '9.5' | '9.6' | 'minitest'>('9.1');

  // Simulator 1: Malware & Backup Media Lifespan (Section 9.1 & 9.2)
  const [mediaType, setMediaType] = useState<'usb' | 'cdr' | 'hdd'>('hdd');
  const [malwareState, setMalwareState] = useState<'idle' | 'virus' | 'worm' | 'trojan'>('idle');

  const mediaLifespanInfo = useMemo(() => {
    if (mediaType === 'usb') {
      return {
        name: 'Bộ nhớ flash (USB/Thẻ SD)',
        limit: '⚠️ Có giới hạn số lần ghi (書き換え制限がある)',
        desc: 'Không thích hợp để lưu trữ dữ liệu lâu dài (長期保存には適しません). Dễ hỏng đột ngột nếu hết chu kỳ ghi xóa.'
      };
    } else if (mediaType === 'cdr') {
      return {
        name: 'Đĩa CD-R (Quang học)',
        limit: '⚠️ Nhạy cảm với ánh sáng (光に弱い)',
        desc: 'Nếu để ở nơi có ánh sáng trực tiếp chiếu vào, dữ liệu sẽ bị mất. Cần bảo quản cẩn thận tránh tia cực tím.'
      };
    } else {
      return {
        name: 'Ổ đĩa cứng HDD (Từ tính)',
        limit: '⚠️ Dễ hỏng bộ phận chuyển động (可動部分がある)',
        desc: 'Chứa phiến đĩa quay cơ học, rất kỵ bụi bẩn (埃), khói thuốc lá (タバコの煙), va đập cơ học (衝撃) hoặc mất điện đột ngột (停電).'
      };
    }
  }, [mediaType]);

  // Simulator 2: Trojan Horse & Phishing Simulator (Section 9.3 & 9.4)
  const [showTrojanScreen, setShowTrojanScreen] = useState<boolean>(false);
  const [trojanInput, setTrojanInput] = useState({ user: '', pass: '' });
  const [trojanStatus, setTrojanStatus] = useState<string>('');

  const [showPhishingEmail, setShowPhishingEmail] = useState<boolean>(false);
  const [phishingUrlClicked, setPhishingUrlClicked] = useState<boolean>(false);

  // Simulator 3: MTBF / MTTR & Series/Parallel System Calculator (Section 9.6)
  const [mtbf, setMtbf] = useState<number>(900);
  const [mttr, setMttr] = useState<number>(100);
  const availabilityRate = useMemo(() => {
    if (mtbf + mttr === 0) return 0;
    return mtbf / (mtbf + mttr);
  }, [mtbf, mttr]);

  const [rA, setRA] = useState<number>(0.90);
  const [rB, setRB] = useState<number>(0.95);
  const [rC, setRC] = useState<number>(0.95);

  // System diagrams calculations:
  // Option (ア) in textbook: A in series with (B parallel C)
  const optA_Availability = useMemo(() => {
    const parallel_BC = 1 - (1 - rB) * (1 - rC);
    return rA * parallel_BC;
  }, [rA, rB, rC]);

  // Option (イ) in textbook: B in series with (A parallel C)
  const optB_Availability = useMemo(() => {
    const parallel_AC = 1 - (1 - rA) * (1 - rC);
    return rB * parallel_AC;
  }, [rA, rB, rC]);

  // Option (ウ) in textbook: A, B, C in series
  const optC_Availability = useMemo(() => {
    return rA * rB * rC;
  }, [rA, rB, rC]);

  // Option (エ) in textbook: (A parallel B) in series with C
  const optD_Availability = useMemo(() => {
    const parallel_AB = 1 - (1 - rA) * (1 - rB);
    return parallel_AB * rC;
  }, [rA, rB, rC]);

  // Minitest 1 state variables
  const [mini1Revealed, setMini1Revealed] = useState<number[]>([]);
  const [mini1Trans1, setMini1Trans1] = useState('');
  const [mini1ShowAnswer1, setMini1ShowAnswer1] = useState(false);
  const [mini1Trans2, setMini1Trans2] = useState('');
  const [mini1ShowAnswer2, setMini1ShowAnswer2] = useState(false);

  // Minitest 2 state variables
  const [mini2Revealed, setMini2Revealed] = useState<number[]>([]);
  const [mini2Trans1, setMini2Trans1] = useState('');
  const [mini2ShowAnswer1, setMini2ShowAnswer1] = useState(false);
  const [mini2Trans2, setMini2Trans2] = useState('');
  const [mini2ShowAnswer2, setMini2ShowAnswer2] = useState(false);

  const mini1Vocab = useMemo(() => [
    { term: '悪用する', reading: 'あくようする', meaning: 'lạm dụng, dùng vào mục đích xấu' },
    { term: 'ハードディスク', reading: 'HDD', meaning: 'ổ đĩa cứng' },
    { term: 'フロッピーディスク', reading: 'FDD', meaning: 'đĩa mềm' },
    { term: '可動部分', reading: 'かどうぶぶん', meaning: 'bộ phận chuyển động cơ học' },
    { term: '増殖する', reading: 'ぞうしょくする', meaning: 'tự sao chép, tự nhân bản' },
    { term: '潜伏期間', reading: 'せんぷくきかん', meaning: 'thời gian ủ bệnh (chờ kích hoạt)' },
    { term: 'バックアップ', reading: 'backup', meaning: 'sao lưu dữ liệu dự phòng' },
    { term: '磁性体', reading: 'じせいたい', meaning: 'vật liệu từ tính' },
    { term: '消耗する', reading: 'しょうもうする', meaning: 'tiêu hao, hao mòn' },
    { term: 'コンパクトフラッシュ', reading: 'CF card', meaning: 'thẻ nhớ CF (CompactFlash)' }
  ], []);

  const mini2Vocab = useMemo(() => [
    { term: '稼働率', reading: 'かどうりつ', meaning: 'tỷ lệ hoạt động / độ khả dụng' },
    { term: '直列システム', reading: 'ちょくれつ system', meaning: 'hệ thống nối tiếp' },
    { term: '平均修理時間', reading: 'へいきんしゅうりじかん / MTTR', meaning: 'thời gian sửa chữa trung bình' },
    { term: '不正侵入', reading: 'ふせいしんにゅう', meaning: 'xâm nhập bất hợp pháp' },
    { term: '狙う', reading: 'ねらう', meaning: 'nhắm tới, nhằm vào' },
    { term: 'スパムメール', reading: 'spam mail', meaning: 'thư rác, thư quảng cáo phiền toái' },
    { term: '装う', reading: 'よそおう', meaning: 'giả danh, ngụy trang' },
    { term: 'バイオメトリクス', reading: 'biometrics', meaning: 'xác thực sinh trắc học' },
    { term: '入力画面', reading: 'にゅうりょくがめん', meaning: 'màn hình nhập dữ liệu' },
    { term: 'プログラムミス', reading: 'bug', meaning: 'lỗi lập trình (bug)' }
  ], []);

  const handleRevealMini1 = (idx: number) => {
    if (mini1Revealed.includes(idx)) {
      setMini1Revealed(mini1Revealed.filter(i => i !== idx));
    } else {
      setMini1Revealed([...mini1Revealed, idx]);
    }
  };

  const handleRevealMini2 = (idx: number) => {
    if (mini2Revealed.includes(idx)) {
      setMini2Revealed(mini2Revealed.filter(i => i !== idx));
    } else {
      setMini2Revealed([...mini2Revealed, idx]);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-4 md:py-8 flex flex-col gap-6">
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <button
          onClick={onClose}
          className="flex items-center gap-2 py-2 px-4 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl active:scale-95 transition-all cursor-pointer border border-slate-200 bg-white shadow-sm"
        >
          <ArrowLeft size={16} />
          Quay lại danh sách
        </button>
        <div className="text-right">
          <span className="text-[10px] font-extrabold tracking-widest text-indigo-600 uppercase bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
            LÝ THUYẾT BÀI 9
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            An toàn thông tin & Bảo mật (セキュリティ)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('9.1')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${activeTab === '9.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
            }`}
        >
          <ShieldAlert size={16} />
          9.1 Sự cố & Virus
        </button>
        <button
          onClick={() => setActiveTab('9.3')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${activeTab === '9.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
            }`}
        >
          <Server size={16} />
          9.3 & 9.4 Tấn công & Trojan
        </button>
        <button
          onClick={() => setActiveTab('9.5')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${activeTab === '9.5' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
            }`}
        >
          <ShieldCheck size={16} />
          9.5 Lưu ý khi sử dụng
        </button>
        <button
          onClick={() => setActiveTab('9.6')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${activeTab === '9.6' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
            }`}
        >
          <Activity size={16} />
          9.6 An toàn hệ thống
        </button>
        <button
          onClick={() => setActiveTab('minitest')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${activeTab === 'minitest' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
            }`}
        >
          <Languages size={16} />
          Bài tập & Minitests
        </button>
      </div>

      {/* Tab Contents */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm animate-fadeIn">

        {/* Tab 9.1: Hardware failures, backup media, virus/worm */}
        {activeTab === '9.1' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                9.1 事故 & 9.2 ウィルス (Sự cố phần cứng & Virus máy tính)
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Sự cố phần cứng (事故 - Jiko)</strong>: Thường gặp nhất ở các bộ phận chuyển động (<strong>可動部分 - Kadobubun</strong>) như ổ đĩa cứng (HDD), CD-ROM. Cần tránh bụi bẩn (<strong>埃 - Hokori</strong>), khói thuốc lá (タバコの煙), va đập mạnh (衝撃).
                  </p>
                  <p>
                    <strong>Sao lưu (バックアップ - Backup)</strong>: Việc lưu trữ bản sao dữ liệu tại nhiều nơi. Lưu ý là bộ nhớ flash (USB/thẻ SD) có giới hạn số lần ghi nên không thích hợp để lưu trữ lâu dài. Đĩa CD-R để nơi có ánh sáng chiếu trực tiếp cũng dễ mất dữ liệu.
                  </p>
                  <p>
                    <strong>Lỗi phần mềm (バグ - Bug)</strong>: Gây lỗi bất thường cho hệ thống. Người dùng phải thường xuyên cập nhật phiên bản mới nhất (最新版) của hệ điều hành (OS), trình duyệt để tránh bị lợi dụng lỗ hổng bảo mật làm bàn đạp tấn công.
                  </p>
                  <p>
                    <strong>Virus & Worm</strong>: Là các chương trình phá hoại nhân tạo (<strong>人為的 - Jin'iteki</strong>). Worm (sâu máy tính) tự lây lan trực tiếp qua mạng độc lập mà không cần người dùng thao tác. Phát hiện virus mới hàng ngày nên bắt buộc phải cập nhật tệp nhận diện mẫu (<strong>パターンファイル</strong>) thường xuyên.
                  </p>
                </div>

                {/* Hardware Media & Virus Sandbox */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-5 shadow-sm text-xs">
                  <div>
                    <h4 className="font-black text-indigo-800 text-sm flex items-center gap-1.5">
                      <Database size={16} />
                      Mô phỏng 1: Độ tin cậy của thiết bị lưu trữ dữ liệu
                    </h4>
                    <p className="text-slate-400 text-[10px] mt-0.5">Lựa chọn loại thiết bị lưu trữ để xem hạn chế phần cứng vật lý</p>
                  </div>

                  <div className="flex gap-2">
                    {[
                      { type: 'hdd', label: 'Ổ đĩa HDD (可動部分)' },
                      { type: 'cdr', label: 'Đĩa CD-R (光に弱い)' },
                      { type: 'usb', label: 'USB/Thẻ SD (書き換え制限)' }
                    ].map((btn) => (
                      <button
                        key={btn.type}
                        onClick={() => setMediaType(btn.type as any)}
                        className={`flex-1 py-2 font-bold rounded-lg border transition-all text-xs text-center cursor-pointer ${mediaType === btn.type
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                          }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 bg-white border border-slate-100 rounded-xl">
                    <span className="font-extrabold text-indigo-700 text-xs">{mediaLifespanInfo.name}</span>
                    <span className="block text-[10px] text-rose-600 font-extrabold mt-1">{mediaLifespanInfo.limit}</span>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">{mediaLifespanInfo.desc}</p>
                  </div>

                  <div className="border-t border-slate-200 pt-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-700">Mô phỏng lây nhiễm Virus/Worm trên máy tính:</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setMalwareState('virus')}
                        className={`flex-1 py-1.5 rounded font-bold border transition-all text-[11px] ${malwareState === 'virus' ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-slate-600 border-slate-200'
                          }`}
                      >
                        Nhiễm Virus
                      </button>
                      <button
                        onClick={() => setMalwareState('worm')}
                        className={`flex-1 py-1.5 rounded font-bold border transition-all text-[11px] ${malwareState === 'worm' ? 'bg-amber-600 text-white border-amber-600' : 'bg-white text-slate-600 border-slate-200'
                          }`}
                      >
                        Nhiễm Sâu (Worm)
                      </button>
                      <button
                        onClick={() => setMalwareState('idle')}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded font-bold text-slate-600 text-[11px]"
                      >
                        Diệt sạch
                      </button>
                    </div>

                    <div className="p-3 bg-slate-900 text-emerald-400 rounded-xl font-mono text-[10px] leading-relaxed">
                      {malwareState === 'virus' && (
                        <>
                          <span className="text-rose-400 font-bold block">⚠️ PHÁT HIỆN VIRUS:</span>
                          • Virus xâm nhập tệp tin thực thi hiện có.<br />
                          • Bắt buộc người dùng phải click mở tệp hoặc chạy chương trình mới phát tác lây lan.
                        </>
                      )}
                      {malwareState === 'worm' && (
                        <>
                          <span className="text-amber-400 font-bold block">🚨 PHÁT HIỆN SÂU MÁY TÍNH (WORM):</span>
                          • Sâu là chương trình hoạt động độc lập.<br />
                          • Tự động sao chép và phát tán trực tiếp qua mạng Internet mà không cần sự can thiệp của người dùng, gây tê liệt cổng mạng.
                        </>
                      )}
                      {malwareState === 'idle' && '🟢 Hệ thống an toàn. Chưa phát hiện virus/sâu.'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 9.3: Server attacks, Trojan Horse, Phishing, Scavenging */}
        {activeTab === '9.3' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                9.3 & 9.4 攻撃と窃盗 (Tấn công máy chủ & Các thủ đoạn đánh cắp mật khẩu)
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Tấn công máy chủ (不正侵入)</strong>: Máy chủ của công ty lưu trữ dữ liệu quan trọng luôn là mục tiêu hàng đầu. Việc người dùng đặt mật khẩu yếu tạo điều kiện cho hacker đột nhập.
                  </p>
                  <p>
                    <strong>Làm bàn đạp (踏み台 - Fumidai)</strong>: Kẻ xấu không phá hoại hệ thống hiện tại mà dùng máy tính bị hack làm bàn đạp trung chuyển để tấn công hệ thống cơ quan tối mật khác nhằm che dấu vết. Các máy tính của trường đại học thường là nạn nhân phổ biến.
                  </p>
                  <p>
                    <strong>Trojan Horse (トロイの木馬)</strong>: Ngụy trang giao diện đăng nhập giả giống hệt thật để lừa người dùng gõ Username/Password rồi ghi lại gửi đi.
                  </p>
                  <p>
                    <strong>Phishing (フィッシング)</strong>: Gửi email giả mạo người gửi (ngân hàng) yêu cầu đổi mật khẩu gấp trên một trang web có giao diện nhái giống thật nhưng địa chỉ URL khác (hoặc địa chỉ số).
                  </p>
                  <p>
                    <strong>Scavenging (スカベンジング)</strong>: Thủ đoạn &quot;lục lọi rác&quot; thu thập dữ liệu bị bỏ lại trên máy tính dùng chung bằng cách khôi phục các tệp đã xóa trên đĩa cứng, dò tìm bộ nhớ RAM hoặc phân tích lịch sử phím gõ.
                  </p>
                </div>

                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-5 shadow-sm text-xs">
                  {/* Trojan Horse Visual Simulator */}
                  <div>
                    <h4 className="font-black text-rose-800 text-sm flex items-center gap-1.5 mb-2">
                      <AlertTriangle size={16} />
                      Mô phỏng 1: Trojan Horse (Màn hình đăng nhập giả)
                    </h4>
                    <button
                      onClick={() => { setShowTrojanScreen(!showTrojanScreen); setTrojanStatus(''); }}
                      className="px-3 py-1 bg-white border border-slate-200 rounded-lg font-bold text-slate-600 active:scale-95 transition-all cursor-pointer"
                    >
                      {showTrojanScreen ? 'Đóng màn hình giả lập' : 'Kích hoạt Trojan Horse'}
                    </button>

                    {showTrojanScreen && (
                      <div className="mt-3 p-4 bg-white border border-rose-200 rounded-xl flex flex-col gap-2 relative shadow-md">
                        <span className="text-[10px] font-black text-rose-600 block mb-1">⚠️ Giao diện giả do Trojan tạo ra (Trông giống thật 99%):</span>
                        <div className="flex flex-col gap-1">
                          <label className="font-bold text-slate-500">Tên người dùng:</label>
                          <input
                            type="text"
                            placeholder="Nhập tên đăng nhập..."
                            value={trojanInput.user}
                            onChange={(e) => setTrojanInput({ ...trojanInput, user: e.target.value })}
                            className="p-1.5 border border-slate-200 rounded text-xs bg-slate-50 focus:outline-none"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-bold text-slate-500">Mật khẩu:</label>
                          <input
                            type="password"
                            placeholder="Nhập mật khẩu..."
                            value={trojanInput.pass}
                            onChange={(e) => setTrojanInput({ ...trojanInput, pass: e.target.value })}
                            className="p-1.5 border border-slate-200 rounded text-xs bg-slate-50 focus:outline-none"
                          />
                        </div>
                        <button
                          onClick={() => {
                            if (trojanInput.user && trojanInput.pass) {
                              setTrojanStatus(`😈 Trojan đã ghi lại thông tin: [User: ${trojanInput.user} | Pass: ${trojanInput.pass}] vào tệp tin ngầm và gửi cho hacker!`);
                            }
                          }}
                          className="mt-2 py-1.5 bg-indigo-600 text-white font-bold rounded active:scale-95 transition-all cursor-pointer text-center text-xs"
                        >
                          Đăng nhập
                        </button>
                        {trojanStatus && (
                          <div className="mt-2 p-2 bg-rose-50 border border-rose-100 text-rose-900 rounded font-mono text-[10px] leading-relaxed">
                            {trojanStatus}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Phishing Email Visualizer */}
                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="font-black text-indigo-800 text-sm flex items-center gap-1.5 mb-2">
                      <Languages size={16} />
                      Mô phỏng 2: Thư điện tử lừa đảo (Phishing Email)
                    </h4>
                    <button
                      onClick={() => { setShowPhishingEmail(!showPhishingEmail); setPhishingUrlClicked(false); }}
                      className="px-3 py-1 bg-white border border-slate-200 rounded-lg font-bold text-slate-600 active:scale-95 transition-all cursor-pointer"
                    >
                      {showPhishingEmail ? 'Đóng Email giả' : 'Hiển thị Phishing Email'}
                    </button>

                    {showPhishingEmail && (
                      <div className="mt-3 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md">
                        {/* Mock Email header */}
                        <div className="bg-slate-100 p-3 border-b border-slate-250 flex flex-col gap-1 text-[10px]">
                          <div><span className="font-extrabold text-slate-500">Từ (Giả mạo):</span> admin@secured-bank-jp.com</div>
                          <div><span className="font-extrabold text-slate-500">Tiêu đề:</span> [Khẩn cấp] Cập nhật lại mật khẩu tài khoản ngân hàng của bạn</div>
                        </div>
                        {/* Mock Email body */}
                        <div className="p-4 flex flex-col gap-3">
                          <p className="leading-relaxed">
                            Kính gửi quý khách, chúng tôi phát hiện tài khoản của bạn đăng nhập bất thường. Hãy bấm vào đường link bên dưới để cập nhật lại thông tin thẻ tín dụng và mật khẩu để tránh khóa tài khoản:
                          </p>
                          <button
                            onClick={() => setPhishingUrlClicked(true)}
                            className="text-indigo-600 font-mono font-extrabold underline text-left hover:text-indigo-800"
                          >
                            http://133.43.25.12/update-bank-info/secure
                          </button>

                          {phishingUrlClicked && (
                            <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-900 leading-relaxed">
                              🚨 **Cảnh báo lừa đảo Phishing!** Đường link trên trỏ về địa chỉ IP số lạ không thuộc trang web của ngân hàng chính thống. Nhập dữ liệu tại đây sẽ dẫn tới mất sạch số tài khoản và thông tin thẻ tín dụng.
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 9.5: Best practices for Email, Browser, Password creation */}
        {activeTab === '9.5' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                9.5 利用上の注意点 (Lưu ý sử dụng máy tính & Tạo mật khẩu an toàn)
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <div className="border-l-4 border-indigo-500 pl-4 py-1">
                    <h4 className="font-bold text-slate-800 text-sm md:text-base">Quy tắc xử lý Email</h4>
                    <p className="text-xs md:text-sm mt-1">
                      Xóa ngay lập tức không cần đọc thư nếu từ người lạ. Các tệp đính kèm có đuôi thực thi nguy hại như <strong>.exe, .vbs, .scr, .pif</strong> phải xóa tức thì (<strong>即座に削除</strong>).
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-4 py-1">
                    <h4 className="font-bold text-slate-800 text-sm md:text-base">Quy tắc sử dụng trình duyệt</h4>
                    <p className="text-xs md:text-sm mt-1">
                      Luôn cập nhật trình duyệt lên bản mới nhất. Chỉ gửi thông tin cá nhân như ngày sinh, số thẻ tín dụng, mã PIN trên các trang đã được mã hóa an toàn qua <strong>SSL/TLS (https)</strong>.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-4 py-1">
                    <h4 className="font-bold text-slate-800 text-sm md:text-base">Mẹo tạo mật khẩu an toàn (パスワード設定)</h4>
                    <p className="text-xs md:text-sm mt-1 mb-2">
                      Tránh sử dụng các từ có nghĩa, số dễ đoán (tên, người yêu, số điện thoại, biển số xe) hoặc các từ vựng đơn thuần trong từ điển vì dễ bị máy tính dò quét vét cạn (<strong>総当たり - Soataru</strong>).
                    </p>
                    <p className="text-xs font-bold text-indigo-900 bg-indigo-50 border border-indigo-100 p-2.5 rounded-lg">
                      💡 **Giải pháp:** Kết hợp khéo léo chữ thường, chữ hoa, chữ số và các ký tự đặc biệt ví dụ như <strong>$#-</strong> để làm tăng độ phức tạp của mật khẩu lên gấp nhiều lần.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Danh sách kiểm tra an toàn hàng tuần (Checklist)</h4>

                  <div className="flex flex-col gap-2">
                    {[
                      'Cập nhật Windows Update định kỳ để vá lỗi hệ điều hành và driver.',
                      'Định cấu hình phần mềm diệt virus tự động cập nhật Pattern File tối thiểu 1 tuần/lần.',
                      'Quét virus kỹ lưỡng trước khi copy tệp từ USB, đĩa CD hay các file tải trên mạng về.',
                      'Đổi mật khẩu tài khoản định kỳ và tuyệt đối không chia sẻ mật khẩu cho người khác.'
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start p-2.5 bg-white border border-slate-100 rounded-lg">
                        <span className="w-5 h-5 bg-indigo-50 text-indigo-700 font-extrabold flex items-center justify-center rounded-full text-[10px] shrink-0 mt-0.5">{idx + 1}</span>
                        <span className="text-slate-600 leading-relaxed font-sans">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 9.6: Bathtub curve, S-curve, Availability Calculator, Series/Parallel RAID availability */}
        {activeTab === '9.6' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                9.6 システムの安全性評価 (Đánh giá độ an toàn và độ tin cậy hệ thống)
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Đường cong bồn tắm (バスタブ曲線)</strong>: Mô tả lỗi của linh kiện cơ khí/phần cứng: Ban đầu nhiều lỗi (lỗi thiết kế/lắp ráp), sau đó ổn định lâu dài, và tăng dần về cuối đời do hao mòn tự nhiên.
                  </p>
                  <p>
                    <strong>Đường cong lỗi phần mềm</strong>: Ban đầu phát sinh rất nhiều lỗi lập trình (Bug), sau khi debug sửa chữa hệ thống sẽ ổn định dần và số lượng lỗi đi ngang gần về không.
                  </p>
                  <p>
                    <strong>Đường cong tăng trưởng độ tin cậy (信頼度成長曲線)</strong>: Sơ đồ tích lũy số lượng lỗi phát hiện theo thời gian vẽ nên biểu đồ chữ S đặc trưng.
                  </p>
                  <p>
                    <strong>Chỉ số khả dụng (稼働率 - Availability)</strong>:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1.5">
                    <li>MTBF (平均故障間隔): Thời gian hoạt động không lỗi trung bình (Chất lượng máy).</li>
                    <li>MTTR (平均修理時間): Thời gian sửa chữa trung bình (Tính bảo trì).</li>
                  </ul>
                </div>

                {/* Interactive Reliability Calculator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Tính toán tỷ lệ khả dụng hệ thống và kết nối RAID</h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Giờ chạy tốt (MTBF):</span>
                      <input
                        type="number"
                        value={mtbf}
                        onChange={(e) => setMtbf(Math.max(0, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Giờ sửa lỗi (MTTR):</span>
                      <input
                        type="number"
                        value={mttr}
                        onChange={(e) => setMttr(Math.max(0, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-100 rounded-xl flex items-center justify-between shadow-sm">
                    <span className="font-extrabold text-slate-500">ĐỘ KHẢ DỤNG THIẾT BỊ (稼働率):</span>
                    <span className="font-mono text-sm md:text-base font-black text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded">
                      {(availabilityRate * 100).toFixed(2)}%
                    </span>
                  </div>

                  {/* Series vs Parallel connection visualizer */}
                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="font-bold text-slate-800 text-sm mb-2">Độ khả dụng hệ phức hợp (Mô phỏng RAID)</h4>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-slate-500 text-[10px]">Linh kiện A: {rA}</span>
                        <input
                          type="range"
                          min="0.5"
                          max="0.99"
                          step="0.01"
                          value={rA}
                          onChange={(e) => setRA(Number(e.target.value))}
                          className="h-1 bg-slate-200 rounded appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-slate-500 text-[10px]">Linh kiện B: {rB}</span>
                        <input
                          type="range"
                          min="0.5"
                          max="0.99"
                          step="0.01"
                          value={rB}
                          onChange={(e) => setRB(Number(e.target.value))}
                          className="h-1 bg-slate-200 rounded appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-slate-500 text-[10px]">Linh kiện C: {rC}</span>
                        <input
                          type="range"
                          min="0.5"
                          max="0.99"
                          step="0.01"
                          value={rC}
                          onChange={(e) => setRC(Number(e.target.value))}
                          className="h-1 bg-slate-200 rounded appearance-none cursor-pointer accent-indigo-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="p-3.5 bg-white border border-slate-100 rounded-lg shadow-sm">
                        <span className="font-extrabold text-slate-400 block text-[9px] uppercase tracking-wide">ア: Nối tiếp A + (B // C)</span>
                        <span className="font-mono text-sm md:text-base font-black text-rose-700 block mt-1">{(optA_Availability * 100).toFixed(2)}%</span>
                        <p className="text-[8.5px] text-slate-400 mt-1">Công thức: A * (1 - (1 - B)*(1 - C))</p>
                      </div>

                      <div className="p-3.5 bg-white border border-slate-100 rounded-lg shadow-sm">
                        <span className="font-extrabold text-slate-400 block text-[9px] uppercase tracking-wide">イ: Nối tiếp B + (A // C)</span>
                        <span className="font-mono text-sm md:text-base font-black text-indigo-700 block mt-1">{(optB_Availability * 100).toFixed(2)}%</span>
                        <p className="text-[8.5px] text-slate-400 mt-1">Công thức: B * (1 - (1 - A)*(1 - C))</p>
                      </div>

                      <div className="p-3.5 bg-white border border-slate-100 rounded-lg shadow-sm">
                        <span className="font-extrabold text-slate-400 block text-[9px] uppercase tracking-wide">ウ: Nối tiếp cả A + B + C</span>
                        <span className="font-mono text-sm md:text-base font-black text-slate-500 block mt-1">{(optC_Availability * 100).toFixed(2)}%</span>
                        <p className="text-[8.5px] text-slate-400 mt-1">Công thức: A * B * C</p>
                      </div>

                      <div className="p-3.5 bg-white border border-slate-100 rounded-lg shadow-sm">
                        <span className="font-extrabold text-slate-400 block text-[9px] uppercase tracking-wide">エ: Nối tiếp (A // B) + C</span>
                        <span className="font-mono text-sm md:text-base font-black text-emerald-700 block mt-1">{(optD_Availability * 100).toFixed(2)}%</span>
                        <p className="text-[8.5px] text-slate-400 mt-1">Công thức: (1 - (1 - A)*(1 - B)) * C</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Exercises & Minitests */}
        {activeTab === 'minitest' && (
          <div className="flex flex-col gap-10 font-sans">

            {/* IT Passport Practice Question */}
            <div>
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-base md:text-lg">
                <HelpCircle className="text-indigo-600" />
                Câu hỏi luyện tập IT Passport (ITパスポート試験)
              </h4>
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 text-xs md:text-sm">
                <p className="font-bold text-slate-800 mb-3 leading-relaxed">
                  3 つの装置A，B，Cの稼働率はそれぞれ0.90，0.95，0.95である．これらを組み合わせた図のシステムのうち，最も稼働率が高いものはどれか． (Ba thiết bị A, B, C có độ khả dụng tương ứng là 0.90, 0.95, 0.95. Hỏi trong các sơ đồ kết hợp dưới đây, hệ thống nào có tổng tỷ lệ khả dụng cao nhất?)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                  {[
                    { label: '(ア) A mắc nối tiếp với cụm (B song song C) -> R = 0.898', isCorrect: false },
                    { label: '(イ) B mắc nối tiếp với cụm (A song song C) -> R = 0.945', isCorrect: true },
                    { label: '(ウ) Cả 3 thiết bị A, B, C mắc nối tiếp -> R = 0.812', isCorrect: false },
                    { label: '(エ) Cụm (A song song B) mắc nối tiếp với C -> R = 0.945', isCorrect: true }
                  ].map((opt, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border font-bold transition-all ${opt.isCorrect
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                          : 'bg-white border-slate-200 text-slate-600'
                        }`}
                    >
                      {opt.label} {opt.isCorrect && '✓ [Đáp án cao nhất]'}
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-900 leading-relaxed text-xs">
                  💡 **Giải thích:** Cả sơ đồ (イ) và (エ) đều có cùng giá trị lớn nhất là **94.53%**, vượt trội so với sơ đồ nối tiếp hoàn toàn (ウ) và sơ đồ đặt linh kiện độ tin cậy thấp nhất A ở cổng chính nối tiếp (ア).
                </div>
              </div>
            </div>

            {/* Minitest 1 */}
            <div className="border-t border-slate-200 pt-8">
              <h4 className="font-black text-slate-800 text-base md:text-lg mb-4">
                ミニテスト 1 (Từ vựng & Dịch thuật Phần 1)
              </h4>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Vocabulary Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-3">
                  <span className="font-extrabold text-slate-400 text-[10px] uppercase tracking-wider block mb-2">Đọc từ vựng (Nhấn để lật nghĩa)</span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {mini1Vocab.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleRevealMini1(idx)}
                        className="bg-white border border-slate-200 p-2.5 rounded-lg cursor-pointer hover:border-indigo-400 active:scale-95 transition-all text-left flex flex-col justify-between min-h-[55px]"
                      >
                        <span className="font-black text-slate-800">{item.term}</span>
                        {mini1Revealed.includes(idx) ? (
                          <span className="text-[10px] text-indigo-600 font-bold mt-1">
                            {item.reading ? `${item.reading} | ` : ''}{item.meaning}
                          </span>
                        ) : (
                          <span className="text-[9px] text-slate-400 mt-1 italic">Click để xem nghĩa...</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Translation Card */}
                <div className="flex flex-col gap-4 text-xs">
                  {/* JP -> VI */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Nhật ➔ Việt:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium leading-relaxed">
                      未承諾の広告，詐欺紛いの内容などの迷惑メールのことをスパムメールと言いますが，感染したウィルスによってアドレス帳の情報が盗み取られ，スパムメールの宛先として利用されることがあります．
                    </p>
                    <textarea
                      value={mini1Trans1}
                      onChange={(e) => setMini1Trans1(e.target.value)}
                      placeholder="Nhập bản dịch tiếng Việt của bạn..."
                      className="w-full h-16 p-2 border border-slate-200 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <button
                      onClick={() => setMini1ShowAnswer1(!mini1ShowAnswer1)}
                      className="self-start px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded transition-all active:scale-95 cursor-pointer"
                    >
                      {mini1ShowAnswer1 ? 'Ẩn đáp án gợi ý' : 'Xem đáp án đối chiếu'}
                    </button>
                    {mini1ShowAnswer1 && (
                      <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-950 rounded leading-relaxed mt-1">
                        <strong>Gợi ý đối chiếu:</strong> Thư rác (Spam mail) là các email quảng cáo chưa được sự đồng ý của người nhận, hoặc chứa nội dung lừa đảo gây phiền toái. Danh bạ địa chỉ có thể bị virus đánh cắp và lợi dụng làm đích gửi của thư rác.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Máy chủ là máy có nhiều thông tin quan trọng nhất trong các công ty, tổ chức, nên máy chủ là đối tượng dễ bị tấn công.
                    </p>
                    <textarea
                      value={mini1Trans2}
                      onChange={(e) => setMini1Trans2(e.target.value)}
                      placeholder="Nhập bản dịch tiếng Nhật của bạn..."
                      className="w-full h-16 p-2 border border-slate-200 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <button
                      onClick={() => setMini1ShowAnswer2(!mini1ShowAnswer2)}
                      className="self-start px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded transition-all active:scale-95 cursor-pointer"
                    >
                      {mini1ShowAnswer2 ? 'Ẩn đáp án gợi ý' : 'Xem đáp án đối chiếu'}
                    </button>
                    {mini1ShowAnswer2 && (
                      <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-950 rounded font-mono leading-relaxed mt-1">
                        <strong>Gợi ý đối chiếu:</strong> 会社などの組織で最も重要な情報を持っているサーバは攻撃対象となりやすいです。
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Minitest 2 */}
            <div className="border-t border-slate-200 pt-8">
              <h4 className="font-black text-slate-800 text-base md:text-lg mb-4">
                ミニテスト 2 (Từ vựng & Dịch thuật Phần 2)
              </h4>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Vocabulary Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-3">
                  <span className="font-extrabold text-slate-400 text-[10px] uppercase tracking-wider block mb-2">Đọc từ vựng (Nhấn để lật nghĩa)</span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {mini2Vocab.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleRevealMini2(idx)}
                        className="bg-white border border-slate-200 p-2.5 rounded-lg cursor-pointer hover:border-indigo-400 active:scale-95 transition-all text-left flex flex-col justify-between min-h-[55px]"
                      >
                        <span className="font-black text-slate-800">{item.term}</span>
                        {mini2Revealed.includes(idx) ? (
                          <span className="text-[10px] text-indigo-600 font-bold mt-1">
                            {item.reading ? `${item.reading} | ` : ''}{item.meaning}
                          </span>
                        ) : (
                          <span className="text-[9px] text-slate-400 mt-1 italic">Click để xem nghĩa...</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Translation Card */}
                <div className="flex flex-col gap-4 text-xs">
                  {/* JP -> VI */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Nhật ➔ Việt:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium leading-relaxed">
                      パスワードを設定する際の注意事項として，意味のある語句，数字を避けてください．たとえば，自分の氏名，芸能人名，家族・友人・恋人の氏名，ペット，電話番号，車のナンバーなどは個人が分かれば容易に類推できてしまいます．また，辞書に載っているような単純な単語や短い単語も，コンピュータの辞書ファイルなどを利用して総当たりで調べられてしまいます．
                    </p>
                    <textarea
                      value={mini2Trans1}
                      onChange={(e) => setMini2Trans1(e.target.value)}
                      placeholder="Nhập bản dịch tiếng Việt của bạn..."
                      className="w-full h-16 p-2 border border-slate-200 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <button
                      onClick={() => setMini2ShowAnswer1(!mini2ShowAnswer1)}
                      className="self-start px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded transition-all active:scale-95 cursor-pointer"
                    >
                      {mini2ShowAnswer1 ? 'Ẩn đáp án gợi ý' : 'Xem đáp án đối chiếu'}
                    </button>
                    {mini2ShowAnswer1 && (
                      <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-950 rounded leading-relaxed mt-1">
                        <strong>Gợi ý đối chiếu:</strong> Lưu ý khi thiết lập mật khẩu là hãy tránh các cụm từ hoặc dãy số có ý nghĩa. Ví dụ như tên của chính bạn, tên nghệ sĩ, tên người thân, bạn bè hay người yêu, thú cưng, số điện thoại, biển số xe... có thể dễ dàng bị đoán ra nếu biết thông tin cá nhân. Ngoài ra, các từ đơn giản hoặc từ ngắn có trong từ điển cũng có thể bị dò tìm vét cạn bằng tệp từ điển của máy tính.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Do có nguy cơ bị nhiễm vi rút, nếu thấy tên người gửi và tiêu đề gửi là của người mình không biết, thì tốt nhất không cần xác nhận nội dung mà xóa thư đó đi ngay.
                    </p>
                    <textarea
                      value={mini2Trans2}
                      onChange={(e) => setMini2Trans2(e.target.value)}
                      placeholder="Nhập bản dịch tiếng Nhật của bạn..."
                      className="w-full h-16 p-2 border border-slate-200 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <button
                      onClick={() => setMini2ShowAnswer2(!mini2ShowAnswer2)}
                      className="self-start px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded transition-all active:scale-95 cursor-pointer"
                    >
                      {mini2ShowAnswer2 ? 'Ẩn đáp án gợi ý' : 'Xem đáp án đối chiếu'}
                    </button>
                    {mini2ShowAnswer2 && (
                      <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-950 rounded font-mono leading-relaxed mt-1">
                        <strong>Gợi ý đối chiếu:</strong> ウィルスに感染する危険性があるので、送り主とタイトルを見て自分が知らない人であれば内容を確認するまでもなく削除してもほとんどの場合問題ありません。
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
