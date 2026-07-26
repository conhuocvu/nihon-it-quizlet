import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, BookOpen, Cpu, HardDrive, Monitor, 
  CheckCircle2, Languages, RefreshCw, Smartphone, Laptop,
  Folder, FileText, Activity, HelpCircle, History, ArrowRight
} from 'lucide-react';

interface Lesson1TheoryProps {
  onClose: () => void;
}

export const Lesson1Theory: React.FC<Lesson1TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'1.1' | '1.3' | '1.5' | 'minitest'>('1.1');

  // Simulator 1: Analog vs Digital
  const [samplingRate, setSamplingRate] = useState<number>(12); // steps in wave
  const [bitDepth, setBitDepth] = useState<number>(3); // 2^3 = 8 levels

  // Simulator 2: Carry Addition (345 + 67)
  const [additionStep, setAdditionStep] = useState<number>(0);
  const additionSteps = [
    { desc: "Phép tính ban đầu: 345 + 67. Ta tính từ hàng đơn vị sang hàng trăm.", carry: 0, sum: "" },
    { desc: "Hàng đơn vị: 5 + 7 = 12. Ghi 2, nhớ 1 (Carry = 1).", carry: 1, sum: "2" },
    { desc: "Hàng chục: 4 + 6 + 1 (nhớ) = 11. Ghi 1, nhớ 1 (Carry = 1).", carry: 1, sum: "12" },
    { desc: "Hàng trăm: 3 + 0 + 1 (nhớ) = 4. Ghi 4, nhớ 0 (Carry = 0).", carry: 0, sum: "412" },
    { desc: "Hoàn thành! Kết quả phép tính là 412.", carry: 0, sum: "412" }
  ];

  // Simulator 3: Path Explorer
  const [currentPath, setCurrentPath] = useState<string>('C:\\ユーザー\\Admin\\マイピクチャ');
  const targetPaths = {
    'C:\\ユーザー\\Admin\\マイ ドキュメント\\文書ファイル.doc': '..\\マイ ドキュメント\\文書ファイル.doc',
    'C:\\ユーザー\\Admin\\マイピクチャ\\写真.jpg': '写真.jpg',
    'C:\\ユーザー\\Admin': '..'
  };
  const [selectedTarget, setSelectedTarget] = useState<string>('C:\\ユーザー\\Admin\\マイ ドキュメント\\文書ファイル.doc');

  // IT Passport Question State
  const [selectedItOption, setSelectedItOption] = useState<string | null>(null);
  const [showItExplanation, setShowItExplanation] = useState<boolean>(false);

  // Mini-test 1 states
  const mini1Vocab = useMemo(() => [
    { term: '触れる', reading: 'ふれる', meaning: 'chạm vào, tiếp xúc' },
    { term: '日常的', reading: 'にちじょうてき', meaning: 'hàng ngày, thường nhật' },
    { term: '身の回り', reading: 'みのまわり', meaning: 'quanh mình, cá nhân' },
    { term: '扱う', reading: 'あつかう', meaning: 'xử lý, đối xử' },
    { term: '連続的', reading: 'れんぞくてき', meaning: 'liên tục' },
    { term: '起源', reading: 'きげん', meaning: 'nguồn gốc, khởi đầu' },
    { term: '機械式', reading: 'きかいしき', meaning: 'kiểu cơ học' },
    { term: '歯車', reading: 'はぐるま', meaning: 'bánh răng' },
    { term: '弾道', reading: 'だんどう', meaning: 'quỹ đạo đường đạn' },
    { term: '内蔵', reading: 'ないぞう', meaning: 'tích hợp sẵn bên trong' }
  ], []);

  const [mini1Revealed, setMini1Revealed] = useState<number[]>([]);
  const [mini1Trans1, setMini1Trans1] = useState('');
  const [mini1ShowAnswer1, setMini1ShowAnswer1] = useState(false);
  const [mini1Trans2, setMini1Trans2] = useState('');
  const [mini1ShowAnswer2, setMini1ShowAnswer2] = useState(false);

  // Mini-test 2 states
  const mini2Vocab = useMemo(() => [
    { term: '汎用', reading: 'はんよう', meaning: 'đa dụng, thông dụng' },
    { term: '座席', reading: 'ざせき', meaning: 'chỗ ngồi' },
    { term: '可搬性', reading: 'かはんせい', meaning: 'tính di động, xách tay' },
    { term: '思い浮かべる', reading: 'おもいうかべる', meaning: 'liên tưởng, nghĩ về' },
    { term: '筆算', reading: 'ひっさん', meaning: 'phép tính viết trên giấy' },
    { term: 'シミュレーション', reading: 'simulation', meaning: 'mô phỏng' },
    { term: '１桁', reading: 'ひとけた', meaning: '1 chữ số' },
    { term: '繰り返し', reading: 'くりかえし', meaning: 'lặp đi lặp lại' },
    { term: '大型', reading: 'おおがた', meaning: 'cỡ lớn' },
    { term: '特化', reading: 'とっか', meaning: 'chuyên dụng, chuyên biệt hoá' }
  ], []);

  const [mini2Revealed, setMini2Revealed] = useState<number[]>([]);
  const [mini2Trans1, setMini2Trans1] = useState('');
  const [mini2ShowAnswer1, setMini2ShowAnswer1] = useState(false);
  const [mini2Trans2, setMini2Trans2] = useState('');
  const [mini2ShowAnswer2, setMini2ShowAnswer2] = useState(false);

  // Match test state
  const [matchAnswers, setMatchAnswers] = useState<Record<number, string>>({});
  const correctMatch = {
    1: 'backup',
    2: 'folder',
    3: 'explorer',
    4: 'extension',
    5: 'storage'
  };

  const analogPoints = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 100; i++) {
      const x = i;
      const y = 50 + 35 * Math.sin((i / 100) * 2 * Math.PI);
      pts.push(`${x},${y}`);
    }
    return pts.join(' ');
  }, []);

  const digitalSteps = useMemo(() => {
    const steps = [];
    const stepSize = 100 / samplingRate;
    const yLevels = Math.pow(2, bitDepth);
    const yScale = 70 / (yLevels - 1);

    for (let i = 0; i < samplingRate; i++) {
      const t = (i + 0.5) * stepSize;
      const analogY = 50 + 35 * Math.sin((t / 100) * 2 * Math.PI);
      
      const normalizedY = (analogY - 15) / 70; // 0 to 1
      const quantizedLevel = Math.round(normalizedY * (yLevels - 1));
      const digitalY = 15 + quantizedLevel * yScale;

      const startX = i * stepSize;
      const endX = (i + 1) * stepSize;
      steps.push({ startX, endX, y: digitalY, level: quantizedLevel });
    }
    return steps;
  }, [samplingRate, bitDepth]);

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
            LÝ THUYẾT BÀI 1
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Cơ bản về máy tính & Hệ thống tệp tin
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('1.1')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '1.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <BookOpen size={16} />
          1.1 - 1.2 Digital/Analog & Lịch sử
        </button>
        <button
          onClick={() => setActiveTab('1.3')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '1.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Cpu size={16} />
          1.3 - 1.4 Phân loại & Chức năng
        </button>
        <button
          onClick={() => setActiveTab('1.5')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '1.5' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <HardDrive size={16} />
          1.5 - 1.7 File, Folder & Drive
        </button>
        <button
          onClick={() => setActiveTab('minitest')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'minitest' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Languages size={16} />
          Bài tập & Mini Tests
        </button>
      </div>

      {/* Tab Contents */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
        {/* Tab 1: Digital/Analog & History */}
        {activeTab === '1.1' && (
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">1.1</span> デジタルとアナログ (Digital & Analog)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                  <p>
                    Máy tính chúng ta sử dụng ngày nay là <strong>デジタルコンピュータ (Máy tính kỹ thuật số)</strong>.
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>
                      <strong className="text-indigo-600">デジタル (Digital - Kỹ thuật số)</strong>: Biểu thị các đại lượng đã được số hóa dưới dạng rời rạc (数値化された量).
                    </li>
                    <li>
                      <strong className="text-pink-600">アナログ (Analog - Tương tự)</strong>: Biểu thị các đại lượng liên tục (連続的な量).
                    </li>
                  </ul>
                  <p>
                    Hầu hết các đại lượng vật lý xung quanh chúng ta như chiều dài, trọng lượng, thời gian đều là <strong>đại lượng Analog</strong>. Tuy nhiên, máy tính chỉ xử lý dữ liệu rời rạc bằng cách xấp xỉ chúng thành các đơn vị số nhất định.
                  </p>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs md:text-sm">
                    <strong>Ví dụ về thời gian:</strong> Thời gian trôi qua một cách liên tục (Analog), nhưng đồng hồ số (digital clock) hiển thị nó dưới dạng các giây rời rạc (1s, 2s, 3s...).
                  </div>
                  <p>
                    Bản chất bên trong máy tính sử dụng các mức điện áp cao (<strong>オン - ON</strong> ứng với số 1) và thấp (<strong>オフ - OFF</strong> ứng với số 0) để lưu trữ và tính toán.
                  </p>
                </div>

                {/* SVG Analog vs Digital Wave Simulator */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 shadow-inner">
                  <h4 className="font-bold text-slate-800 flex items-center gap-2 text-sm md:text-base">
                    <Activity size={18} className="text-indigo-600" />
                    Mô phỏng sóng Analog & Số hóa (Digital)
                  </h4>
                  <div className="relative w-full h-48 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* Grid Lines */}
                      <line x1="0" y1="50" x2="100" y2="50" stroke="#f1f5f9" strokeWidth="0.5" />
                      <line x1="0" y1="15" x2="100" y2="15" stroke="#f1f5f9" strokeWidth="0.5" />
                      <line x1="0" y1="85" x2="100" y2="85" stroke="#f1f5f9" strokeWidth="0.5" />
                      
                      {/* Digital Stepped Wave */}
                      {digitalSteps.map((step, idx) => (
                        <g key={idx}>
                          <line 
                            x1={step.startX} 
                            y1={step.y} 
                            x2={step.endX} 
                            y2={step.y} 
                            stroke="#4f46e5" 
                            strokeWidth="1.2" 
                          />
                          {idx > 0 && (
                            <line 
                              x1={step.startX} 
                              y1={digitalSteps[idx-1].y} 
                              x2={step.startX} 
                              y2={step.y} 
                              stroke="#4f46e5" 
                              strokeWidth="0.8" 
                              strokeDasharray="1,1"
                            />
                          )}
                        </g>
                      ))}

                      {/* Smooth Analog Wave */}
                      <polyline 
                        fill="none" 
                        stroke="#ec4899" 
                        strokeWidth="1.5" 
                        points={analogPoints} 
                      />
                    </svg>
                  </div>
                  {/* Controls */}
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-semibold text-slate-700">Tần suất lấy mẫu (Sampling): {samplingRate}Hz</label>
                      <input 
                        type="range" min="4" max="30" value={samplingRate} 
                        onChange={(e) => setSamplingRate(Number(e.target.value))}
                        className="w-full accent-indigo-600"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-semibold text-slate-700">Số lượng bit lượng hóa: {bitDepth}-bit ({Math.pow(2, bitDepth)} mức)</label>
                      <input 
                        type="range" min="1" max="4" value={bitDepth} 
                        onChange={(e) => setBitDepth(Number(e.target.value))}
                        className="w-full accent-pink-600"
                      />
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500 text-center leading-relaxed">
                    Sóng màu hồng đại diện cho tín hiệu <span className="text-pink-500 font-bold">Analog (Liên tục)</span>. Các bậc thang màu xanh đại diện cho tín hiệu <span className="text-indigo-500 font-bold">Digital (Rời rạc)</span> sau khi được lượng hóa. Lấy mẫu và bit càng cao, tín hiệu số càng tiệm cận tín hiệu tương tự.
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">1.2</span> コンピュータの歴史 (Lịch sử máy tính)
              </h3>
              <div className="relative border-l-2 border-indigo-100 pl-6 ml-4 flex flex-col gap-6">
                {/* 1 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 bg-white border-2 border-indigo-600 rounded-full w-4 h-4 flex items-center justify-center">
                    <div className="bg-indigo-600 rounded-full w-1.5 h-1.5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">Thời cổ đại - Bàn tính cổ (アバカス - Abacus)</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">
                    Được coi là nguồn gốc của bàn tính gảy (そろばん), dùng để hỗ trợ tính toán thủ công từ trước Công nguyên.
                  </p>
                </div>
                {/* 2 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 bg-white border-2 border-indigo-600 rounded-full w-4 h-4 flex items-center justify-center">
                    <div className="bg-indigo-600 rounded-full w-1.5 h-1.5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">Thế kỷ 17 - Máy tính cơ học bánh răng</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">
                    Các nhà khoa học phát minh ra máy tính Pascal (パスカルの計算機) hay máy tính nhân Leibniz (ライプニッツの乗算機) sử dụng chuyển động của các bánh răng cơ học để cộng trừ nhân chia.
                  </p>
                </div>
                {/* 3 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 bg-white border-2 border-indigo-600 rounded-full w-4 h-4 flex items-center justify-center">
                    <div className="bg-indigo-600 rounded-full w-1.5 h-1.5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">Thập niên 1930 - Máy tính điện cơ (電気機械式)</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">
                    Sử dụng các rơ-le điện từ (リレー) làm công tắc cơ học để chuyển mạch và tính toán tự động.
                  </p>
                </div>
                {/* 4 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 bg-white border-2 border-indigo-600 rounded-full w-4 h-4 flex items-center justify-center">
                    <div className="bg-indigo-600 rounded-full w-1.5 h-1.5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">Năm 1946 - ENIAC (Máy tính điện tử đầu tiên)</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">
                    Được phát triển bởi John Eckert và John Mauchly tại Đại học Pennsylvania cho mục đích quân sự (tính toán quỹ đạo đạn đạo). ENIAC sử dụng gần 20.000 bóng chân không (真空管), tiêu thụ điện khổng lồ và mỗi lần đổi chương trình phải cắm lại dây thủ công.
                  </p>
                </div>
                {/* 5 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 bg-white border-2 border-indigo-600 rounded-full w-4 h-4 flex items-center justify-center">
                    <div className="bg-indigo-600 rounded-full w-1.5 h-1.5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">Năm 1949 - EDSAC & Kiến trúc Neumann (ノイマン型)</h4>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">
                    EDSAC ra đời tại Đại học Cambridge giới thiệu nguyên lý <strong>プログラム内蔵方式 (Chương trình lưu sẵn)</strong>. Thay vì cắm dây lại, chương trình được lưu vào bộ nhớ như dữ liệu. Kiến trúc này do John von Neumann đề xuất, trở thành nền tảng của mọi máy tính hiện đại.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Types & Functions */}
        {activeTab === '1.3' && (
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">1.3</span> 身の回りのコンピュータ (Phân loại máy tính)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-slate-200 rounded-xl p-5 flex gap-4 bg-slate-50">
                  <Laptop className="text-indigo-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-black text-slate-800 text-sm md:text-base">汎用計算機 (Máy tính đa dụng)</h4>
                    <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                      Có thể thực hiện nhiều công việc khác nhau bằng cách cài đặt hoặc thay đổi chương trình.
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-xs text-slate-500 flex flex-col gap-1">
                      <li><strong>スーパーコンピュータ (Supercomputer)</strong>: Tốc độ cao nhất, dùng mô phỏng, dự báo thời tiết.</li>
                      <li><strong>大型汎用計算機 (Mainframe)</strong>: Tính toán lớn cho hệ thống ngân hàng, đặt vé tàu xe.</li>
                      <li><strong>ワークステーション (Workstation)</strong>: Máy tính trạm làm việc ổn định, bền bỉ, chạy liên tục.</li>
                      <li><strong>パソコン (PC/Laptop) & ネットブック</strong>: Máy tính cá nhân, máy phụ trợ duyệt web.</li>
                      <li><strong>スマートフォン (Smartphone)</strong>: Máy tính thu nhỏ tích hợp truyền thông.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="border border-slate-200 rounded-xl p-5 flex gap-4 bg-slate-50">
                  <Smartphone className="text-pink-600 shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-black text-slate-800 text-sm md:text-base">専用計算機 (Máy tính chuyên dụng)</h4>
                    <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                      Thiết kế phần cứng và phần mềm chuyên biệt hóa cho một chức năng duy nhất, không dùng đa năng được.
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-xs text-slate-500 flex flex-col gap-1">
                      <li><strong>ゲーム機 (Console game)</strong>: Chuyên xử lý đồ họa chơi game.</li>
                      <li><strong>カーナビ (Car Navigation)</strong>: Định vị và dẫn đường xe hơi.</li>
                      <li><strong>電卓 (Calculator)</strong>: Chỉ thực hiện tính toán cơ bản.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">1.4</span> コンピュータの機能 (Chức năng: Ký ức & Xử lý)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                  <p>
                    Một thiết bị chỉ được gọi là Máy tính khi hội tụ đủ 2 chức năng:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-indigo-100 bg-indigo-50/50 p-4 rounded-xl text-center">
                      <span className="block font-black text-indigo-700 text-lg">記憶</span>
                      <span className="text-xs text-indigo-500">Storage / Ghi nhớ</span>
                    </div>
                    <div className="border border-pink-100 bg-pink-50/50 p-4 rounded-xl text-center">
                      <span className="block font-black text-pink-700 text-lg">処理</span>
                      <span className="text-xs text-pink-500">Processing / Xử lý</span>
                    </div>
                  </div>
                  <p>
                    Máy tính thực tế chỉ làm các phép tính nhị phân cực kỳ đơn giản siêu nhanh. Nhờ có bộ nhớ lưu trữ kết quả trung gian và bộ xử lý lặp lại liên tục, ta có thể xây dựng các tác vụ phức tạp bậc cao.
                  </p>
                  <p className="text-xs text-slate-400 italic">
                    * Nếu thiếu 1 trong 2 chức năng, thiết bị đó không được coi là máy tính.
                  </p>
                </div>

                {/* Carry Addition Step-by-Step Simulator */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
                  <h4 className="font-bold text-slate-800 flex items-center justify-between text-sm md:text-base">
                    <span>Mô phỏng phép cộng lặp (345 + 67)</span>
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold">
                      Bước {additionStep + 1}/5
                    </span>
                  </h4>
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-3 font-mono text-center">
                    <div className="text-right max-w-[120px] mx-auto text-lg border-b border-slate-300 pb-1">
                      <div className="text-slate-400 text-xs">Carry: {additionSteps[additionStep].carry}</div>
                      <div>345</div>
                      <div>+ 67</div>
                    </div>
                    <div className="text-lg font-bold text-indigo-600">
                      Kết quả: {additionSteps[additionStep].sum || "___"}
                    </div>
                    <div className="text-xs text-slate-500 font-sans leading-relaxed text-left min-h-[40px]">
                      {additionSteps[additionStep].desc}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setAdditionStep(prev => Math.max(0, prev - 1))}
                      disabled={additionStep === 0}
                      className="flex-1 py-2 text-xs font-bold bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
                    >
                      Quay lại
                    </button>
                    <button
                      onClick={() => setAdditionStep(prev => Math.min(additionSteps.length - 1, prev + 1))}
                      disabled={additionStep === additionSteps.length - 1}
                      className="flex-1 py-2 text-xs font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
                    >
                      Tiếp theo
                    </button>
                    <button
                      onClick={() => setAdditionStep(0)}
                      className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-500 cursor-pointer active:scale-95 transition-all"
                      title="Reset"
                    >
                      <RefreshCw size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: File, Folder & Drive */}
        {activeTab === '1.5' && (
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">1.5</span> ファイル (File - Tệp dữ liệu)
              </h3>
              <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                <p>
                  Các tệp dữ liệu được lưu trữ trên các thiết bị ghi (<strong>記録媒体</strong>) dưới dạng <strong>ファイル (File)</strong>.
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>
                    <strong>ファイル名 (Tên file) & 拡張子 (Đuôi file - Extension)</strong>: Tên file hoàn chỉnh gồm tên chính và phần đuôi (ngăn cách bởi dấu chấm `.`). Phần đuôi chỉ rõ định dạng file (ví dụ: Word là `.doc`/`.docx`, Excel là `.xls`/`.xlsx`, trang web là `.htm`/`.html`).
                  </li>
                  <li>
                    <strong>Hành vi hệ thống</strong>: Thông thường hệ điều hành ẩn đuôi file để người dùng không bấm nhầm, nhưng khi sao lưu hoặc lưu tệp cụ thể đôi khi ta cần tự chọn đuôi tệp thủ công.
                  </li>
                </ul>
              </div>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">1.6</span> フォルダ (Folder - Thư mục)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                  <p>
                    <strong>フォルダ (Folder/Directory)</strong> là các hộp chứa dùng để quản lý cấu trúc file ngăn nắp. Cấu trúc lồng nhau (Cha - Con - Cháu) tạo thành **ディレクトリ構造 (Directory Structure - Cấu trúc hình cây)**.
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li>
                      <strong>パス (Path - Đường dẫn)</strong>: Cách biểu thị vị trí thư mục dùng dấu gạch chéo ngược `\`. Ví dụ: <code className="bg-slate-100 px-1 py-0.5 rounded text-pink-600 text-xs">C:\ユーザー\Admin\マイ ドキュメント</code>
                    </li>
                    <li>
                      <strong>カレントパス (Current Path)</strong>: Thư mục hiện hành ta đang đứng.
                    </li>
                    <li>
                      <strong>Đường dẫn tương đối</strong>: Chỉ vị trí xuất phát từ thư mục hiện hành. Dùng ký hiệu <code className="bg-slate-100 px-1 py-0.5 rounded font-bold text-xs">..</code> để chỉ thư mục mẹ phía trên.
                    </li>
                  </ul>
                </div>

                {/* Interactive Path Explorer */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <Folder size={16} className="text-amber-500" />
                    Mô phỏng Đường dẫn Tương đối (Relative Path)
                  </h4>
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <div className="flex justify-between items-center bg-slate-100 p-2 rounded">
                      <span className="font-bold text-slate-500">Đang đứng ở (Current Path):</span>
                      <span className="font-mono text-indigo-600 font-bold">{currentPath}</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <span className="font-bold text-slate-700">Chọn file mục tiêu cần trỏ tới:</span>
                      {Object.keys(targetPaths).map((tgt) => (
                        <label 
                          key={tgt} 
                          className={`flex items-center gap-2 p-2 rounded border cursor-pointer transition-all ${
                            selectedTarget === tgt 
                              ? 'border-indigo-400 bg-indigo-50/20 font-bold' 
                              : 'border-slate-200 hover:bg-slate-50'
                          }`}
                          onClick={() => setSelectedTarget(tgt)}
                        >
                          <input 
                            type="radio" name="target" checked={selectedTarget === tgt} readOnly 
                            className="accent-indigo-600"
                          />
                          <span className="font-mono text-[10px] text-slate-600">{tgt}</span>
                        </label>
                      ))}
                    </div>
                    <div className="mt-2 pt-3 border-t border-slate-100 bg-slate-50 p-2 rounded flex flex-col gap-1.5">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Đường dẫn tuyệt đối:</span>
                        <span className="font-mono font-bold text-[10px] text-slate-700">{selectedTarget}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Đường dẫn tương đối từ Current Path:</span>
                        <span className="font-mono font-bold text-sm text-pink-600">
                          {targetPaths[selectedTarget as keyof typeof targetPaths]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">1.7</span> ドライブ (Drive - Ổ đĩa)
              </h3>
              <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                <p>
                  Các phân vùng hoặc thiết bị phần cứng cắm vào máy tính được hệ điều hành gán các ký tự chữ cái gọi là <strong>ドライブ名 (Drive Name - Tên ổ đĩa)</strong>, như ổ đĩa <code className="bg-slate-100 px-1 py-0.5 rounded text-pink-600 text-xs">(C:)</code>, <code className="bg-slate-100 px-1 py-0.5 rounded text-pink-600 text-xs">(D:)</code>, hoặc ổ USB rời.
                </p>
                <p>
                  Thư mục gốc bắt đầu bằng chữ cái ổ đĩa kèm theo dấu gạch chéo ngược (ví dụ: `C:\`). Thông thường phân vùng chứa hệ điều hành sẽ là **C ドライブ**.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Minitest */}
        {activeTab === 'minitest' && (
          <div className="flex flex-col gap-10">
            {/* IT Passport Question */}
            <div>
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-base md:text-lg">
                <HelpCircle className="text-indigo-600" />
                Câu hỏi luyện tập IT Passport (ITパスポート試験)
              </h4>
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <p className="font-bold text-slate-800 mb-3 text-sm md:text-base leading-relaxed">
                  PCのファイルシステムの役割として，適切なものはどれか． (Vai trò của hệ thống tệp tin trên máy tính là gì?)
                </p>
                <div className="flex flex-col gap-2 mt-4 text-xs md:text-sm">
                  {[
                    { key: 'a', text: '(ア) Cung cấp giao diện thống nhất để các chương trình ứng dụng truy cập tệp mà không cần quan tâm đến sự khác biệt giữa các phương tiện lưu trữ như ổ đĩa cứng hay DVD.' },
                    { key: 'b', text: '(イ) Cập CPU cho chương trình ứng dụng khác khi một chương trình bắt đầu truy cập tệp và đang đợi hoàn thành.' },
                    { key: 'c', text: '(ウ) Tự động chuyển đổi bảng mã ký tự của tệp tin để chương trình không cần quan tâm đến sự khác biệt giữa các bộ mã.' },
                    { key: 'd', text: '(エ) Kiểm tra tệp tin có bị nhiễm mã độc/virus máy tính hay không trước khi chương trình ứng dụng truy cập.' }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setSelectedItOption(opt.key);
                        setShowItExplanation(true);
                      }}
                      className={`w-full text-left py-3 px-4 rounded-lg border-2 transition-all ${
                        selectedItOption === opt.key 
                          ? opt.key === 'a' 
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-800' 
                            : 'border-rose-500 bg-rose-50 text-rose-800'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
                {showItExplanation && (
                  <div className="mt-4 p-4 bg-indigo-50 border border-indigo-100 rounded-lg text-xs md:text-sm text-indigo-900 leading-relaxed">
                    <strong>Giải thích chi tiết:</strong> Đáp án đúng là <strong>(ア)</strong>. Vai trò cơ bản của hệ thống tệp tin là trừu tượng hóa và cung cấp một giao diện truy cập chuẩn (API) chung để các ứng dụng có thể đọc/ghi tệp tin một cách thống nhất mà không cần bận tâm đến việc tệp đang lưu trên ổ cứng HDD, SSD hay đĩa quang DVD.
                  </div>
                )}
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Match Test */}
            <div>
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-base md:text-lg">
                <Languages className="text-indigo-600" />
                Mini Test 1: Nối từ và định nghĩa phù hợp
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start text-xs md:text-sm">
                {/* Words */}
                <div className="flex flex-col gap-2">
                  {[
                    { id: 1, text: '(1) バックアップ (Backup)' },
                    { id: 2, text: '(2) 記録媒体 (Storage Media / Folder)' },
                    { id: 3, text: '(3) エクスプローラ (Explorer)' },
                    { id: 4, text: '(4) 拡張子 (Extension)' },
                    { id: 5, text: '(5) 外部記憶装置 (External Storage)' }
                  ].map((item) => (
                    <div key={item.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                      <span className="font-bold text-slate-700">{item.text}</span>
                      <select 
                        value={matchAnswers[item.id] || ''}
                        onChange={(e) => setMatchAnswers(prev => ({ ...prev, [item.id]: e.target.value }))}
                        className="bg-white border border-slate-300 rounded p-1 text-slate-700 font-bold"
                      >
                        <option value="">Chọn định nghĩa</option>
                        <option value="explorer">Màn hình duyệt thư mục / file</option>
                        <option value="extension">Chuỗi ký tự phân loại loại file sau dấu chấm</option>
                        <option value="backup">Bản sao dữ liệu phòng trừ hỏng hóc</option>
                        <option value="storage">Thiết bị lưu trữ ngoài CPU không trực tiếp truy cập</option>
                        <option value="folder">Hộp chứa file dữ liệu (HDD, đĩa mềm...)</option>
                      </select>
                    </div>
                  ))}
                </div>
                {/* Check Match Result */}
                <div className="p-5 border border-slate-200 rounded-xl bg-slate-50 flex flex-col gap-4">
                  <h5 className="font-bold text-slate-800">Kết quả kiểm tra:</h5>
                  <div className="flex flex-col gap-2 text-xs">
                    {[1, 2, 3, 4, 5].map((id) => {
                      const isCorrect = matchAnswers[id] === correctMatch[id as keyof typeof correctMatch];
                      return (
                        <div key={id} className="flex items-center gap-2">
                          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-slate-200 text-slate-700 font-bold">
                            {id}
                          </span>
                          {matchAnswers[id] ? (
                            isCorrect ? (
                              <span className="text-emerald-600 font-bold flex items-center gap-1">
                                <CheckCircle2 size={14} /> Chính xác!
                              </span>
                            ) : (
                              <span className="text-rose-600 font-bold">Chưa đúng, thử lại!</span>
                            )
                          ) : (
                            <span className="text-slate-400">Chưa nối</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Vocab Tests */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mini Test 1: Vocab */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <h5 className="font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200 flex justify-between items-center text-sm md:text-base">
                  <span>Kiểm tra Từ vựng 1.1 - 1.2</span>
                  <button 
                    onClick={() => setMini1Revealed(mini1Vocab.map((_, idx) => idx))}
                    className="text-xs text-indigo-600 hover:underline cursor-pointer"
                  >
                    Xem tất cả
                  </button>
                </h5>
                <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                  {mini1Vocab.map((word, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setMini1Revealed(prev => prev.includes(idx) ? prev.filter(x => x !== idx) : [...prev, idx])}
                      className="p-2.5 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-indigo-400 transition-all flex flex-col gap-0.5"
                    >
                      <span className="font-bold text-slate-800">{word.term} ({word.reading})</span>
                      <span className={`text-slate-500 text-[11px] transition-all ${
                        mini1Revealed.includes(idx) ? 'opacity-100 block' : 'opacity-0 hidden'
                      }`}>
                        {word.meaning}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini Test 2: Vocab */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <h5 className="font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200 flex justify-between items-center text-sm md:text-base">
                  <span>Kiểm tra Từ vựng 1.3 - 1.4</span>
                  <button 
                    onClick={() => setMini2Revealed(mini2Vocab.map((_, idx) => idx))}
                    className="text-xs text-indigo-600 hover:underline cursor-pointer"
                  >
                    Xem tất cả
                  </button>
                </h5>
                <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                  {mini2Vocab.map((word, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setMini2Revealed(prev => prev.includes(idx) ? prev.filter(x => x !== idx) : [...prev, idx])}
                      className="p-2.5 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-indigo-400 transition-all flex flex-col gap-0.5"
                    >
                      <span className="font-bold text-slate-800">{word.term} ({word.reading})</span>
                      <span className={`text-slate-500 text-[11px] transition-all ${
                        mini2Revealed.includes(idx) ? 'opacity-100 block' : 'opacity-0 hidden'
                      }`}>
                        {word.meaning}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Translation Exercises */}
            <div className="flex flex-col gap-6">
              <h4 className="font-bold text-slate-800 text-base md:text-lg">Dịch câu Nhật - Việt</h4>
              
              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex flex-col gap-3 text-xs md:text-sm">
                <p className="font-bold text-slate-700">Câu 1 (Dịch Việt):</p>
                <p className="italic text-slate-600">
                  「一般的に，長さ，重さ，時間など身の回りの多くの物理量はアナログ量ですが，デジタルコンピュータでは，一定単位の数字に近似して扱っています。」
                </p>
                <textarea 
                  value={mini1Trans1} 
                  onChange={(e) => setMini1Trans1(e.target.value)}
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:border-indigo-500 font-sans focus:outline-none"
                  rows={2}
                />
                <div>
                  <button 
                    onClick={() => setMini1ShowAnswer1(!mini1ShowAnswer1)}
                    className="text-xs text-indigo-600 hover:underline font-bold"
                  >
                    {mini1ShowAnswer1 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                  {mini1ShowAnswer1 && (
                    <div className="mt-2 p-3 bg-white border border-slate-200 rounded-lg text-emerald-700 leading-relaxed">
                      <strong>Đáp án mẫu:</strong> Nhìn chung, nhiều đại lượng vật lý xung quanh chúng ta như chiều dài, trọng lượng, thời gian đều là các đại lượng Analog, nhưng trong máy tính kỹ thuật số, chúng được xử lý dưới dạng xấp xỉ thành các chữ số của một đơn vị nhất định.
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex flex-col gap-3 text-xs md:text-sm">
                <p className="font-bold text-slate-700">Câu 2 (Dịch Việt):</p>
                <p className="italic text-slate-600">
                  「ワークステーションは，形も性能もパソコンと大差ありませんが，パソコンと違い，常時稼働させても故障が少ないという安定性があります。」
                </p>
                <textarea 
                  value={mini1Trans2} 
                  onChange={(e) => setMini1Trans2(e.target.value)}
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:border-indigo-500 font-sans focus:outline-none"
                  rows={2}
                />
                <div>
                  <button 
                    onClick={() => setMini1ShowAnswer2(!mini1ShowAnswer2)}
                    className="text-xs text-indigo-600 hover:underline font-bold"
                  >
                    {mini1ShowAnswer2 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                  {mini1ShowAnswer2 && (
                    <div className="mt-2 p-3 bg-white border border-slate-200 rounded-lg text-emerald-700 leading-relaxed">
                      <strong>Đáp án mẫu:</strong> Máy trạm (workstation) không có nhiều sự khác biệt về hình dáng và hiệu năng so với máy tính cá nhân (PC), nhưng khác với PC, nó có độ tin cậy và sự ổn định cao, ít gặp sự cố ngay cả khi hoạt động liên tục.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
