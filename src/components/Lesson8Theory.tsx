import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Key, Lock, Unlock, ShieldAlert, ShieldCheck, Languages, HelpCircle, RefreshCw, Layers
} from 'lucide-react';

interface Lesson8TheoryProps {
  onClose: () => void;
}

export const Lesson8Theory: React.FC<Lesson8TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'8.1' | '8.2' | '8.3' | '8.4' | 'minitest'>('8.1');

  // Simulator 1: Caesar Cipher
  const [caesarText, setCaesarText] = useState('NIHON');
  const [caesarShift, setCaesarShift] = useState<number>(3);

  const caesarCipheredText = useMemo(() => {
    return caesarText.toUpperCase().split('').map(char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + caesarShift) % 26) + 65);
      }
      return char;
    }).join('');
  }, [caesarText, caesarShift]);

  // Simulator 2: Scytale Transposition
  const [scytaleText, setScytaleText] = useState('HELLOWORLD');
  const [scytaleRows, setScytaleRows] = useState<number>(3);
  const [scytaleWrapMode, setScytaleWrapMode] = useState<boolean>(true);

  const scytaleEncrypted = useMemo(() => {
    const cols = Math.ceil(scytaleText.length / scytaleRows);
    let result = '';
    for (let r = 0; r < scytaleRows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = c * scytaleRows + r;
        if (idx < scytaleText.length) {
          result += scytaleText[idx];
        } else {
          result += ' ';
        }
      }
    }
    return result;
  }, [scytaleText, scytaleRows]);

  // Simulator 3: Public Key Cryptography
  const [pkStep, setPkStep] = useState<number>(1);
  const [pkMode, setPkMode] = useState<'encrypt' | 'sign'>('encrypt');

  // Simulator 4: SSL/TLS Handshake
  const [sslStep, setSslStep] = useState<number>(0);
  const [sslLog, setSslLog] = useState<string[]>(['Trình duyệt đang chờ kết nối...']);

  const runSslHandshake = (step: number) => {
    setSslStep(step);
    if (step === 0) {
      setSslLog(['Trình duyệt đang chờ kết nối...']);
    } else if (step === 1) {
      setSslLog([
        'Step 1: Khởi tạo kết nối',
        '-> Trình duyệt gửi Client Hello tới Website để yêu cầu giao tiếp bảo mật (HTTPS).'
      ]);
    } else if (step === 2) {
      setSslLog([
        'Step 1: Khởi tạo kết nối hoàn tất.',
        'Step 2: Gửi chứng chỉ CA',
        '<- Web Server phản hồi, gửi kèm Chứng thư số (Digital Certificate) chứa Khóa công khai (Web Server Public Key) đã được xác thực bởi CA.'
      ]);
    } else if (step === 3) {
      setSslLog([
        'Step 1 & 2: Xác thực hoàn tất.',
        'Step 3: Tạo Khóa chung tạm thời (Session Key)',
        '-> Trình duyệt tạo khóa đối xứng tạm thời (Symmetric Key / Common Key) để mã hóa dữ liệu.',
        '-> Trình duyệt mã hóa Khóa chung này bằng Khóa công khai nhận từ Server và gửi đi.',
        '<- Web Server dùng Khóa bí mật (Server Private Key) của mình để giải mã lấy Khóa chung.'
      ]);
    } else if (step === 4) {
      setSslLog([
        'Step 1 - 3: Thiết lập kênh truyền bảo mật thành công!',
        'Step 4: Giao tiếp qua kênh bảo mật SSL/TLS',
        '🔒 Biểu tượng ổ khóa xuất hiện trên trình duyệt.',
        '双 Hai bên trao đổi thông tin bằng phương thức khóa chung (共通鍵方式), sử dụng khóa chung vừa thống nhất để tối ưu hiệu năng tính toán.'
      ]);
    }
  };

  // Mini-test state variables
  const [mini1Revealed, setMini1Revealed] = useState<number[]>([]);
  const [mini2Revealed, setMini2Revealed] = useState<number[]>([]);

  const [mini1Trans1, setMini1Trans1] = useState('');
  const [mini1ShowAnswer1, setMini1ShowAnswer1] = useState(false);
  const [mini1Trans2, setMini1Trans2] = useState('');
  const [mini1ShowAnswer2, setMini1ShowAnswer2] = useState(false);

  const [mini2Trans1, setMini2Trans1] = useState('');
  const [mini2ShowAnswer1, setMini2ShowAnswer1] = useState(false);
  const [mini2Trans2, setMini2Trans2] = useState('');
  const [mini2ShowAnswer2, setMini2ShowAnswer2] = useState(false);

  // Vocabulary Data
  const mini1Vocab = useMemo(() => [
    { term: '変換する', reading: 'へんかんする', meaning: 'biến đổi, chuyển đổi' },
    { term: '転置式', reading: 'てんちしき', meaning: 'kiểu hoán vị, chuyển đổi vị trí' },
    { term: '円筒', reading: 'えんとう', meaning: 'hình trụ, ống hình trụ' },
    { term: '巻き付く', reading: 'まきつく', meaning: 'quấn quanh, cuốn vào' },
    { term: '素因数', reading: 'そいんすう', meaning: 'thừa số nguyên tố' },
    { term: 'スキュタレー暗号', reading: 'Scytale あんごう', meaning: 'mật mã Scytale (cổ đại)' },
    { term: '実用的な時間', reading: 'じつようてきなじかん', meaning: 'thời gian thực tế (có ý nghĩa trong thực tế)' },
    { term: '暗号を解く', reading: 'あんごうをとく', meaning: 'giải mã, phá mã' },
    { term: 'ネットワーク経由', reading: '経由 - けいゆ', meaning: 'thông qua mạng Internet, trung chuyển qua mạng' },
    { term: '直径', reading: 'ちょっけい', meaning: 'đường kính' }
  ], []);

  const mini2Vocab = useMemo(() => [
    { term: '乱数表', reading: 'らんすうひょう', meaning: 'bảng số ngẫu nhiên' },
    { term: '古典的な暗号', reading: 'こてんてきあんごう', meaning: 'mật mã cổ điển' },
    { term: '敵', reading: 'てき', meaning: 'kẻ địch, quân địch, đối phương' },
    { term: '身元を偽る', reading: 'みもとをいつわる', meaning: 'giả mạo danh tính, làm giả lai lịch' },
    { term: '欠かせない', reading: 'かかせない', meaning: 'không thể thiếu, mang tính thiết yếu' },
    { term: '共通鍵', reading: 'きょうつうかぎ', meaning: 'khóa chung (Symmetric key)' },
    { term: '公開鍵', reading: 'こうかいかぎ', meaning: 'khóa công khai (Public key)' },
    { term: '素因数分解', reading: 'そいんすうぶんかい', meaning: 'phân tích thừa số nguyên tố' },
    { term: '準備を整える', reading: 'ととのえる', meaning: 'hoàn tất khâu chuẩn bị, thiết lập sẵn sàng' },
    { term: '関数の形', reading: 'かんすうのかたち', meaning: 'dạng hàm số' }
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
            LÝ THUYẾT BÀI 8
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Mật mã & Xác thực (暗号化と認証)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('8.1')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '8.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          8.1 Mật mã Cổ điển
        </button>
        <button
          onClick={() => setActiveTab('8.2')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '8.2' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <RefreshCw size={16} />
          8.2 Mật mã Hiện đại
        </button>
        <button
          onClick={() => setActiveTab('8.3')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '8.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Key size={16} />
          8.3 Khóa chung & Công khai
        </button>
        <button
          onClick={() => setActiveTab('8.4')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '8.4' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Lock size={16} />
          8.4 Bảo mật SSL/TLS
        </button>
        <button
          onClick={() => setActiveTab('minitest')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'minitest' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Languages size={16} />
          Bài tập & Minitests
        </button>
      </div>

      {/* Tab Contents */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm animate-fadeIn">
        
        {/* Tab 8.1: Classical Cipher */}
        {activeTab === '8.1' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                8.1 古典的暗号 (Mật mã cổ điển & Khái niệm mã hóa)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>暗号化 (Mã hóa)</strong>: Chuyển đổi dữ liệu bản rõ ban đầu (<strong>原文 - Genbun</strong>) thành dạng không thể suy đoán được nội dung nhằm bảo mật thông tin.
                  </p>
                  <p>
                    <strong>復号化 (Giải mã)</strong>: Quá trình chuyển đổi dữ liệu đã mã hóa ngược lại về bản rõ ban đầu.
                  </p>
                  
                  <div className="border-l-4 border-indigo-500 pl-4 py-1.5 my-2">
                    <h4 className="font-bold text-slate-800 text-sm md:text-base">換字式暗号 (Mật mã thay thế)</h4>
                    <p className="text-xs md:text-sm mt-1">
                      Điển hình là <strong>シーザー暗号 (Mật mã Caesar)</strong>. Hoạt động bằng cách dịch chuyển (<strong>ずらす - Zurasu</strong>) các chữ cái trong bảng chữ cái đi một số vị trí cố định. Để tăng tính bảo mật, người ta sử dụng các bảng số ngẫu nhiên <strong>乱数表 (Ransuhyo)</strong> để hoán đổi thay vì dịch chuyển theo chu kỳ đều đặn.
                    </p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-4 py-1.5">
                    <h4 className="font-bold text-slate-800 text-sm md:text-base">転置式暗号 (Mật mã hoán vị)</h4>
                    <p className="text-xs md:text-sm mt-1">
                      Điển hình là <strong>スキュタレー暗号 (Mật mã Scytale)</strong> của Hy Lạp cổ đại. Hoạt động bằng cách thay đổi vị trí, thứ tự sắp xếp của các chữ cái trên một dải ruy-băng quấn quanh trục gỗ hình trụ tròn (<strong>円筒 - Ento</strong>).
                    </p>
                  </div>
                </div>

                {/* Caesar Cipher Sandbox */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-5 shadow-sm text-xs">
                  <div>
                    <h4 className="font-black text-indigo-800 text-sm flex items-center gap-1.5">
                      <Key size={16} />
                      Mô phỏng 1: Mật mã thay thế Caesar (シーザー暗号)
                    </h4>
                    <p className="text-slate-400 text-[10px] mt-0.5">Dịch chuyển vị trí các ký tự trong bảng chữ cái để tạo mật mã</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Nhập văn bản (chữ in không dấu):</span>
                      <input
                        type="text"
                        value={caesarText}
                        onChange={(e) => setCaesarText(e.target.value.toUpperCase())}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono uppercase focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Khóa dịch chuyển (鍵 - Shift): {caesarShift}</span>
                      <input
                        type="range"
                        min="0"
                        max="25"
                        value={caesarShift}
                        onChange={(e) => setCaesarShift(Number(e.target.value))}
                        className="mt-2 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-100 rounded-xl flex flex-col gap-3">
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                      <span className="font-extrabold text-slate-500">VĂN BẢN GỐC (原文):</span>
                      <span className="font-mono text-sm md:text-base font-black text-slate-700 bg-slate-50 px-2.5 py-0.5 rounded">{caesarText || '---'}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5">
                      <span className="font-extrabold text-indigo-600">BẢN MÃ HÓA (暗号):</span>
                      <span className="font-mono text-sm md:text-base font-black text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded">{caesarCipheredText || '---'}</span>
                    </div>
                  </div>

                  {/* Scytale Transposition Cipher Simulation */}
                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="font-black text-emerald-800 text-sm flex items-center gap-1.5 mb-2">
                      <Layers size={16} />
                      Mô phỏng 2: Mật mã hoán vị gỗ Scytale (スキュタレー暗号)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-slate-500">Nhập văn bản hoán vị:</span>
                        <input
                          type="text"
                          value={scytaleText}
                          onChange={(e) => setScytaleText(e.target.value.replace(/\s+/g, '').toUpperCase())}
                          className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono uppercase focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-slate-500">Đường kính trục gỗ (Số hàng): {scytaleRows}</span>
                        <div className="flex gap-2 mt-1">
                          {[2, 3, 4, 5].map((r) => (
                            <button
                              key={r}
                              onClick={() => setScytaleRows(r)}
                              className={`flex-1 py-1 rounded font-bold border transition-all text-xs ${
                                scytaleRows === r 
                                  ? 'bg-emerald-600 text-white border-emerald-600 shadow'
                                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                              }`}
                            >
                              {r} hàng
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-white border border-slate-100 rounded-xl flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-500">Trạng thái ruy-băng:</span>
                        <button
                          onClick={() => setScytaleWrapMode(!scytaleWrapMode)}
                          className={`px-3 py-1 rounded-full text-[10px] font-bold border transition-all ${
                            scytaleWrapMode 
                              ? 'bg-indigo-50 border-indigo-100 text-indigo-700' 
                              : 'bg-amber-50 border-amber-100 text-amber-700'
                          }`}
                        >
                          {scytaleWrapMode ? '🔄 Đang quấn quanh trục' : '⚡ Đang tháo thẳng ruy-băng'}
                        </button>
                      </div>

                      {scytaleWrapMode ? (
                        <div className="flex flex-col gap-1 items-center justify-center p-3 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                          <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wide">Mặt cắt trục gỗ hình tròn ({scytaleRows} hàng)</span>
                          <div className="flex flex-col font-mono text-sm font-black text-slate-800 gap-1 bg-white p-3.5 border border-slate-100 rounded-lg shadow-sm">
                            {Array.from({ length: scytaleRows }).map((_, r) => {
                              const cols = Math.ceil(scytaleText.length / scytaleRows);
                              const charsInRow = [];
                              for (let c = 0; c < cols; c++) {
                                const idx = c * scytaleRows + r;
                                charsInRow.push(idx < scytaleText.length ? scytaleText[idx] : '_');
                              }
                              return (
                                <div key={r} className="flex gap-2.5">
                                  <span className="text-[10px] text-slate-400 w-12 text-right">Vòng {r+1}:</span>
                                  {charsInRow.map((ch, idx) => (
                                    <span key={idx} className="bg-slate-100 px-2 py-0.5 rounded text-emerald-700 font-extrabold">{ch}</span>
                                  ))}
                                </div>
                              );
                            })}
                          </div>
                          <p className="text-[9px] text-slate-400 mt-1 italic">✓ Đọc theo chiều dọc để giải mã: {scytaleText}</p>
                        </div>
                      ) : (
                        <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg text-amber-900 leading-relaxed font-mono text-center">
                          <span className="text-[10px] text-slate-400 font-bold block mb-1">DÒNG CHỮ SAU KHI THÁO DẢI RUY-BĂNG (MÃ HÓA):</span>
                          <span className="text-sm font-black text-amber-800 tracking-widest bg-white border border-amber-200 px-4 py-1.5 rounded shadow-sm inline-block">
                            {scytaleEncrypted}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 8.2: Modern Cipher */}
        {activeTab === '8.2' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                8.2 最近の暗号 (Mật mã hiện đại bằng máy tính)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Trong mật mã hiện đại, quá trình mã hóa được diễn đạt một cách khoa học dưới dạng toán học bằng **Hàm số (関数 - Kansu)**:
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center font-mono my-2 shadow-sm">
                    <span className="text-xl md:text-2xl font-black text-indigo-700 block">y = f(x, k)</span>
                    <div className="grid grid-cols-3 gap-2 mt-4 text-[10px] md:text-xs text-slate-500 font-sans font-bold">
                      <div>
                        <span className="text-indigo-600 block text-sm font-black">x (Input)</span>
                        Văn bản gốc (原文)
                      </div>
                      <div>
                        <span className="text-indigo-600 block text-sm font-black">k (Key)</span>
                        Khóa mật mã (鍵)
                      </div>
                      <div>
                        <span className="text-indigo-600 block text-sm font-black">y (Output)</span>
                        Bản mật mã (暗号)
                      </div>
                    </div>
                  </div>
                  <p>
                    Ví dụ, đối với mật mã Caesar mã hóa chữ <code>NIHON</code> dịch sang phải 3 vị trí để được bản mã <code>QLKRQ</code>, ta biểu diễn dưới dạng hàm:
                  </p>
                  <p className="font-mono bg-indigo-50 text-indigo-800 p-2.5 rounded-xl text-center text-xs md:text-sm font-bold border border-indigo-100">
                    &quot;QLKRQ&quot; = f(&quot;NIHON&quot;, 3)
                  </p>
                  <p>
                    Các hệ mã hóa phổ biến ngày nay như **DES (Data Encryption Standard)** hay **RSA (Rivest, Shamir, Adleman)** sử dụng các cơ chế số ngẫu nhiên phức tạp, phép phân tích thừa số nguyên tố lớn (**素因数分解 - Soinsubunkai**), hoặc đường cong elliptic.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs md:text-sm text-amber-900 leading-relaxed">
                    💡 **Tính chất cốt lõi:** Ngay cả khi thuật toán và cách tính toán hàm f được công khai hoàn toàn trên thế giới, kẻ tấn công vẫn không thể giải mã được bản tin trong một khoảng thời gian thực tế (**実用的な時間 - Jitsuyotekina jikan**) nếu không biết trước giá trị khóa k.
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4 text-xs">
                    <h4 className="font-extrabold text-slate-800 text-sm">So sánh DES vs RSA</h4>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px] md:text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="py-2 text-left font-extrabold text-slate-500 uppercase">Hệ mã hóa</th>
                            <th className="py-2 text-left font-extrabold text-slate-500 uppercase">Loại khóa</th>
                            <th className="py-2 text-left font-extrabold text-slate-500 uppercase">Nguyên lý bảo mật</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-100">
                            <td className="py-3 font-bold text-slate-800">DES (đối xứng)</td>
                            <td className="py-3 text-slate-600">Khóa chung (Symmetric)</td>
                            <td className="py-3 text-slate-600">Xáo trộn bit, hoán vị & thay thế tuần hoàn cực nhanh.</td>
                          </tr>
                          <tr>
                            <td className="py-3 font-bold text-indigo-700">RSA (bất đối xứng)</td>
                            <td className="py-3 text-indigo-600 font-semibold">Khóa công khai (Public Key)</td>
                            <td className="py-3 text-slate-600 font-sans">Độ khó của phép toán phân tích thừa số nguyên tố (素因数分解) đối với các số cực lớn.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-6 flex flex-col gap-3 text-xs leading-relaxed text-indigo-950 shadow-sm">
                    <h4 className="font-extrabold text-indigo-900 text-sm">Phép toán RSA thực tế:</h4>
                    <p>
                      Mật mã RSA dựa trên thực tế là: Việc nhân hai số nguyên tố rất lớn (ví dụ p và q) để tìm tích N là cực kỳ nhanh chóng cho máy tính, nhưng chiều ngược lại - phân tích một số N khổng lồ thành hai thừa số nguyên tố p và q là bài toán cần hàng ngàn năm để máy tính hiện tại tính toán xong nếu không có khóa bổ trợ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 8.3: Public/Private Key */}
        {activeTab === '8.3' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                8.3 共通鍵と公開鍵 (So sánh khóa chung và khóa công khai)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>共通鍵方式 (Phương thức khóa chung)</strong> / <strong>秘密鍵方式 (Khóa bí mật)</strong>:
                    Cả bên gửi và bên nhận dùng chung **duy nhất một khóa mật** để mã hóa và giải mã. Giao thức này có tốc độ nhanh nhưng gặp khó khăn lớn trong việc phân phối khóa an toàn qua mạng Internet.
                  </p>
                  
                  <p>
                    <strong>公開鍵方式 (Phương thức khóa công khai)</strong>:
                    Tạo ra một **cặp khóa bất đối xứng**:
                  </p>
                  <ul className="list-disc pl-5 font-bold text-slate-800 text-xs md:text-sm flex flex-col gap-1.5">
                    <li>公開鍵 (Khóa công khai): Dùng để mã hóa, có thể chia sẻ rộng rãi cho bất kỳ ai.</li>
                    <li>秘密鍵 (Khóa bí mật): Chỉ người nhận giữ kín, dùng để giải mã bản mật tương ứng.</li>
                  </ul>
                  
                  <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs md:text-sm text-amber-900 leading-relaxed">
                    💡 **Tại sao khóa công khai trở thành tiêu chuẩn?** 
                    Do việc truyền khóa qua Internet rất kém an toàn (như viết trên bưu thiếp <strong>ハガキ</strong>). Khóa công khai giải quyết triệt để vấn đề này vì khóa mã hóa có bị lộ cũng không giúp kẻ xấu giải mã được thư (chỉ có khóa bí mật được giữ an toàn tại đầu nhận mới giải mã được).
                  </div>
                </div>

                {/* Public Key interactive animator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <span className="font-extrabold text-slate-800 text-sm">Trình hoạt ảnh các bước mã hóa khóa công khai</span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => { setPkMode('encrypt'); setPkStep(1); }}
                        className={`px-3 py-1 rounded-lg font-bold text-xs border transition-all ${
                          pkMode === 'encrypt' 
                            ? 'bg-indigo-600 text-white border-indigo-600'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        Gửi thư mật
                      </button>
                      <button
                        onClick={() => { setPkMode('sign'); setPkStep(1); }}
                        className={`px-3 py-1 rounded-lg font-bold text-xs border transition-all ${
                          pkMode === 'sign' 
                            ? 'bg-indigo-600 text-white border-indigo-600'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        Xác thực nguồn gốc (Chữ ký số)
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-100 p-4 rounded-xl flex flex-col items-center justify-center min-h-[140px] text-center gap-4 relative overflow-hidden">
                    {/* Visual entities */}
                    <div className="flex justify-between w-full px-8 items-center z-10">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-indigo-50 border border-indigo-200 text-indigo-700 font-extrabold flex items-center justify-center rounded-full shadow-sm text-sm">A</div>
                        <span className="font-bold text-slate-700 text-[10px]">Người gửi Alice</span>
                      </div>
                      
                      {/* Interactive animation channel */}
                      <div className="flex-1 px-4 flex flex-col items-center justify-center relative">
                        <div className="w-full h-0.5 bg-dashed border-t border-slate-300"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full text-[10px] font-black text-indigo-700 animate-pulse">
                          {pkStep === 1 && 'Bước 1: Khởi tạo/Yêu cầu Khóa'}
                          {pkStep === 2 && (pkMode === 'encrypt' ? '🔑 B gửi Khóa công khai cho A' : '🔑 A giữ khóa bí mật riêng')}
                          {pkStep === 3 && '🔒 Tiến hành mã hóa dữ liệu'}
                          {pkStep === 4 && '✉️ Truyền bản mã qua Internet'}
                          {pkStep === 5 && '🔓 Giải mã thành công bản rõ'}
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold flex items-center justify-center rounded-full shadow-sm text-sm">B</div>
                        <span className="font-bold text-slate-700 text-[10px]">Người nhận Bob</span>
                      </div>
                    </div>

                    {/* Step descriptions */}
                    <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl w-full text-slate-600 text-xs text-left min-h-[75px]">
                      {pkMode === 'encrypt' ? (
                        <>
                          {pkStep === 1 && 'A muốn gửi thư bí mật cho B. B tạo cặp khóa: Khóa công khai (Public) và Khóa bí mật (Private).'}
                          {pkStep === 2 && 'B gửi công khai Khóa công khai của B (Bの公開鍵) cho A qua mạng Internet.'}
                          {pkStep === 3 && 'A sử dụng Khóa công khai của B vừa nhận để mã hóa bức thư. Bản mã này không ai có thể giải mã ngược lại được kể cả A.'}
                          {pkStep === 4 && 'A gửi bức thư đã mã hóa cho B qua đường Internet. Kẻ xấu nghe lén cũng vô ích vì không có khóa bí mật.'}
                          {pkStep === 5 && 'B nhận thư mã hóa, sử dụng Khóa bí mật của B (Bの秘密鍵) được lưu trữ an toàn để giải mã đọc nội dung bản rõ.'}
                        </>
                      ) : (
                        <>
                          {pkStep === 1 && 'A muốn ký số xác minh thư do chính A gửi. A tạo cặp khóa riêng: Khóa công khai của A (Aの公開鍵) và Khóa bí mật của A (Aの秘密鍵).'}
                          {pkStep === 2 && 'A giữ kín Khóa bí mật của mình, và công khai rộng rãi Khóa công khai của A cho B và mọi người.'}
                          {pkStep === 3 && 'A dùng Khóa bí mật của A để mã hóa thư (Tạo chữ ký số).'}
                          {pkStep === 4 && 'A gửi thư đã mã hóa bằng khóa bí mật của A sang cho B.'}
                          {pkStep === 5 && 'B dùng Khóa công khai của A để giải mã. Nếu giải mã ra thông tin khớp, chứng minh 100% thư do người giữ khóa bí mật A gửi (Xác thực 認証 thành công).'}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 justify-between">
                    <button
                      onClick={() => setPkStep(Math.max(1, pkStep - 1))}
                      disabled={pkStep === 1}
                      className="px-3 py-1.5 font-bold rounded bg-white text-slate-600 border border-slate-200 disabled:opacity-50 text-[11px] active:scale-95 transition-all cursor-pointer"
                    >
                      Bước trước
                    </button>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className={`w-2 h-2 rounded-full ${pkStep === s ? 'bg-indigo-600' : 'bg-slate-200'}`}></span>
                      ))}
                    </div>
                    <button
                      onClick={() => setPkStep(Math.min(5, pkStep + 1))}
                      disabled={pkStep === 5}
                      className="px-4 py-1.5 font-bold rounded bg-indigo-600 text-white disabled:opacity-50 text-[11px] active:scale-95 transition-all cursor-pointer"
                    >
                      Bước tiếp theo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 8.4: SSL/TLS */}
        {activeTab === '8.4' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                8.4 SSLによるウェブ認証 (Xác thực web bằng giao thức SSL/TLS)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Khi truy cập website bảo mật, ta thấy giao thức là **https** và có biểu tượng **ổ khóa (錠のアイコン - Jo no icon)** trên thanh địa chỉ.
                  </p>
                  <p>
                    <strong>SSL (Secure Socket Layer)</strong> / TLS là giao thức bảo mật kết hợp cả **公開鍵方式 (Phương thức khóa công khai)** để xác thực, truyền khóa an toàn ban đầu và **秘密鍵方式 (Khóa chung)** để mã hóa nội dung trao đổi sau đó.
                  </p>
                  <p>
                    <strong>Quy trình bắt tay (Handshake) thiết lập SSL/TLS:</strong>
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1.5">
                    <li>Website tạo cặp khóa, đăng ký Khóa công khai với cơ quan chứng thực **CA (Certificate Authority)** nhận chứng thư số.</li>
                    <li>Người dùng truy cập, website gửi Chứng thư kèm khóa công khai cho trình duyệt.</li>
                    <li>Trình duyệt tạo khóa chung tạm thời, dùng khóa công khai của web để mã hóa gửi lại cho Server.</li>
                    <li>Server giải mã lấy khóa chung tạm thời. Từ đó hai bên trao đổi thông tin được mã hóa bằng khóa chung này.</li>
                  </ul>
                </div>

                {/* Handshake Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-extrabold text-slate-800 text-sm">Trình giả lập kết nối HTTPS Bảo mật</h4>
                  
                  {/* Web Browser URL input simulator */}
                  <div className="bg-slate-200 p-2 rounded-xl flex items-center gap-2 border border-slate-300">
                    <div className="flex gap-1.5 pl-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    </div>
                    <div className="flex-1 bg-white border border-slate-300 rounded-lg py-1 px-3 flex items-center justify-between text-[11px] font-mono text-slate-600 shadow-inner">
                      <div className="flex items-center gap-1.5">
                        {sslStep === 4 ? (
                          <Lock size={12} className="text-emerald-600 font-extrabold" />
                        ) : (
                          <Unlock size={12} className="text-rose-500" />
                        )}
                        <span className={sslStep === 4 ? 'text-emerald-700 font-bold' : 'text-rose-700'}>
                          {sslStep === 4 ? 'https://' : 'http://'}online-shop.co.jp
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400">
                        {sslStep === 4 ? '🔒 Đã bảo mật SSL' : '⚠️ Kết nối kém an toàn'}
                      </span>
                    </div>
                  </div>

                  {/* Simulator steps */}
                  <div className="grid grid-cols-5 gap-1.5 text-center font-bold text-[9px] md:text-[10px]">
                    {[
                      { step: 0, label: 'Bắt đầu' },
                      { step: 1, label: 'Client Hello' },
                      { step: 2, label: 'Server Cert' },
                      { step: 3, label: 'Session Key' },
                      { step: 4, label: 'HTTPS Đã khóa' }
                    ].map((s) => (
                      <button
                        key={s.step}
                        onClick={() => runSslHandshake(s.step)}
                        className={`py-2 px-1 rounded-lg border transition-all cursor-pointer ${
                          sslStep === s.step 
                            ? 'bg-indigo-600 border-indigo-600 text-white shadow' 
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  {/* Log panel */}
                  <div className="bg-slate-900 text-emerald-400 p-4 rounded-xl font-mono text-[10px] md:text-xs flex flex-col gap-1.5 min-h-[140px] shadow-sm leading-relaxed">
                    {sslLog.map((log, index) => (
                      <div key={index} className={log.startsWith('<-') || log.startsWith('->') ? 'pl-2 text-slate-300' : 'font-bold'}>
                        {log}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center bg-indigo-50 border border-indigo-100 p-3.5 rounded-xl">
                    <div className="flex items-center gap-2 text-indigo-900 font-bold">
                      {sslStep === 4 ? (
                        <ShieldCheck className="text-indigo-600" size={20} />
                      ) : (
                        <ShieldAlert className="text-amber-600" size={20} />
                      )}
                      <span>Trạng thái bảo mật website:</span>
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                      sslStep === 4 ? 'bg-indigo-200 text-indigo-800' : 'bg-amber-200 text-amber-800'
                    }`}>
                      {sslStep === 4 ? 'SSL Đang bật' : 'Chưa bảo mật'}
                    </span>
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
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <p className="font-bold text-slate-800 mb-3 text-sm md:text-base leading-relaxed">
                  X さんは，Y さんにインターネットを使って電子メールを送ろうとしている．電子メールの内容を秘密にする必要があるので，公開鍵暗号方式を用いて暗号化して送信したい．電子メールの内容を暗号化するのに使用する鍵はどれか． (Ông X muốn gửi email mật cho ông Y qua mạng Internet sử dụng phương thức khóa công khai. Hỏi ông X cần dùng khóa nào dưới đây để tiến hành mã hóa email?)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 text-xs md:text-sm">
                  {[
                    { label: '(ア) Xさんの公開鍵 (Khóa công khai của X)', isCorrect: false },
                    { label: '(イ) Xさんの秘密鍵 (Khóa bí mật của X)', isCorrect: false },
                    { label: '(ウ) Yさんの公開鍵 (Khóa công khai của Y)', isCorrect: true },
                    { label: '(エ) Yさんの秘密鍵 (Khóa bí mật của Y)', isCorrect: false }
                  ].map((opt, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border font-bold transition-all cursor-pointer ${
                        opt.isCorrect 
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {opt.label} {opt.isCorrect && '✓ [Đáp án chính xác]'}
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-900 leading-relaxed text-xs">
                  💡 **Giải thích:** Để gửi thư bảo mật cho Y sao cho chỉ Y mới đọc được, người gửi X phải lấy **Khóa công khai của người nhận Y (Yさんの公開鍵)** để mã hóa. Sau đó chỉ có **Khóa bí mật tương ứng của Y (Yさんの秘密鍵)** mới có khả năng giải mã được bản mật này.
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
                      認証とは，送られてきた文書が確かに本人のものであるかどうかを確かめることです．インターネットでは相手の顔が見えないため，身元を偽るなりすましが容易であり，特にオンラインショッピングでは注文主を確認することは重要になります．
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
                        <strong>Gợi ý đối chiếu:</strong> Xác thực là việc xác nhận xem tài liệu gửi đến có thực sự là của chính người đó hay không. Trên Internet, do không nhìn thấy khuôn mặt của đối phương nên việc giả mạo danh tính rất dễ xảy ra, và đặc biệt trong mua sắm trực tuyến, việc xác nhận người đặt hàng là vô cùng quan trọng.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Nếu bên nhận không biết bên gửi đã dịch chuyển bao nhiêu ký tự thì không thể giải mã được nội dung.
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
                        <strong>Gợi ý đối chiếu:</strong> 受け取る側では何文字ずらしたかを知らないと復号化ができません。
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
                      A から B へ文書を送る場合を考えます．受け手である B は暗号化する鍵と，その暗号を解く鍵を持っています．このとき，A は最初に B から暗号化するための公開鍵をインターネット経由で送ってもらいます．公開するのは暗号化の鍵だけであり，復号化の鍵は B だけが保管しているため他人に知られることはありません．
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
                        <strong>Gợi ý đối chiếu:</strong> Xét trường hợp gửi tài liệu từ A đến B. Người nhận là B có khóa dùng để mã hóa và khóa dùng để giải mã. Lúc này, trước tiên A sẽ nhận khóa công khai dùng để mã hóa từ B thông qua mạng Internet. Chỉ có khóa mã hóa là được công khai, còn khóa giải mã thì chỉ có B lưu giữ nên người khác không thể biết được.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Người ta gọi việc biến đổi bản gốc sao cho không thể đoán được nội dung là mã hóa, và việc chuyển về bản gốc là giải mã.
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
                        <strong>Gợi ý đối chiếu:</strong> 与えられた原文が推測できないように変換することを暗号化と言い、原文に戻すことを復号化と言います。
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
