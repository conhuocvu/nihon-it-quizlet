import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Cpu, Layers, HelpCircle, HardDrive, RefreshCw, Languages, Zap
} from 'lucide-react';

interface Lesson10TheoryProps {
  onClose: () => void;
}

export const Lesson10Theory: React.FC<Lesson10TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'10.1' | '10.3' | '10.5' | '10.6' | 'minitest'>('10.1');

  // Simulator 1: 5-Element Computer Architecture & PC Components
  const [fiveElementActive, setFiveElementActive] = useState<string | null>(null);

  // Simulator 2: VRAM & Resolution Calculator (Section 10.4)
  const [screenWidth, setScreenWidth] = useState<number>(1920);
  const [screenHeight, setScreenHeight] = useState<number>(1080);
  const [colorBits, setColorBits] = useState<number>(24); // 8, 16, 24, 32

  const calculatedVram = useMemo(() => {
    // Total pixels * bits per pixel / 8 / 1024 / 1024 (MB)
    const totalBits = screenWidth * screenHeight * colorBits;
    return totalBits / 8 / 1024 / 1024;
  }, [screenWidth, screenHeight, colorBits]);

  // Simulator 3: HDD Sector & Defragmentation (Section 10.5)
  const [hddBlocks, setHddBlocks] = useState<string[]>([
    'A', 'B', 'free', 'A', 'free', 'C', 'B', 'C', 'free', 'A', 'free', 'B'
  ]);
  const [isDefragging, setIsDefragging] = useState<boolean>(false);

  const triggerDefrag = () => {
    setIsDefragging(true);
    setTimeout(() => {
      // Group all identical letters together and leave free space at the end
      setHddBlocks(['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'free', 'free', 'free', 'free']);
      setIsDefragging(false);
    }, 2000);
  };

  const resetDefrag = () => {
    setHddBlocks(['A', 'B', 'free', 'A', 'free', 'C', 'B', 'C', 'free', 'A', 'free', 'B']);
  };

  // Simulator 4: CPU Clock Cycles & Nanosecond Instruction Runner (Section 10.6 & Exam)
  const [clockFrequencyGHz, setClockFrequencyGHz] = useState<number>(2); // GHz
  const [instructionClocks, setInstructionClocks] = useState<number>(5); // clock cycles

  const nanosecondsPerInstruction = useMemo(() => {
    if (clockFrequencyGHz === 0) return 0;
    // Time for 1 clock cycle = 1 / (frequency * 10^9) seconds
    // In nanoseconds = 1 / frequency
    const oneClockNs = 1 / clockFrequencyGHz;
    return instructionClocks * oneClockNs;
  }, [clockFrequencyGHz, instructionClocks]);

  // Vocabulary lists for minitests
  const mini1Vocab = useMemo(() => [
    { term: '帯電', reading: 'たいでん', meaning: 'nhiễm điện, tích điện' },
    { term: '感電', reading: 'かでん', meaning: 'giật điện, điện giật' },
    { term: '密閉', reading: 'みっぺい', meaning: 'đóng kín, bịt kín' },
    { term: '反比例', reading: 'はんぴれい', meaning: 'tỷ lệ nghịch' },
    { term: '放熱板', reading: 'ほうねつばん', meaning: 'tấm tản nhiệt, phiến tản nhiệt' },
    { term: 'マザーボード', reading: 'motherboard', meaning: 'bo mạch chủ' },
    { term: 'キャッシュ', reading: 'cache', meaning: 'bộ nhớ đệm (tốc độ cao)' },
    { term: 'バス', reading: 'bus', meaning: 'kênh/đường truyền dẫn dữ liệu' },
    { term: 'チップセット', reading: 'chipset', meaning: 'bộ chip điều khiển giao tiếp' },
    { term: '外部インターフェース', reading: 'interface', meaning: 'cổng giao tiếp bên ngoài (như USB)' }
  ], []);

  const mini2Vocab = useMemo(() => [
    { term: '割り当てる', reading: 'わりあてる', meaning: 'phân bổ, phân chia' },
    { term: '円板', reading: 'えんばん', meaning: 'đĩa kim loại quay (trong HDD)' },
    { term: '消去する', reading: 'しょうきょする', meaning: 'xóa bỏ, triệt tiêu dữ liệu' },
    { term: '蓄える', reading: 'たくわえる', meaning: 'tích trữ, lưu trữ' },
    { term: '等分割', reading: 'とうぶんかつ', meaning: 'chia đều bằng nhau' },
    { term: 'マイクロプロセッサ', reading: 'microprocessor', meaning: 'bộ vi xử lý' },
    { term: 'ベンチマークテスト', reading: 'benchmark test', meaning: 'bài kiểm chuẩn đánh giá hiệu năng' },
    { term: 'トラック', reading: 'track', meaning: 'rãnh ghi (quỹ đạo đầu đọc trên đĩa)' },
    { term: 'セクタ', reading: 'sector', meaning: 'phân cung từ (vùng chia nhỏ của track)' },
    { term: 'デフラグメンテーション', reading: 'defragmentation', meaning: 'chống phân mảnh đĩa cứng' }
  ], []);

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
            LÝ THUYẾT BÀI 10
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Cấu trúc máy tính (コンピュータの構造)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('10.1')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '10.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Cpu size={16} />
          10.1 & 10.2 Linh kiện PC
        </button>
        <button
          onClick={() => setActiveTab('10.3')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '10.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          10.3 & 10.4 RAM / ROM
        </button>
        <button
          onClick={() => setActiveTab('10.5')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '10.5' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <HardDrive size={16} />
          10.5 Cơ cấu HDD
        </button>
        <button
          onClick={() => setActiveTab('10.6')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '10.6' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Zap size={16} />
          10.6 Xung nhịp CPU
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
        
        {/* Tab 10.1 & 10.2: 5 elements & PC interior */}
        {activeTab === '10.1' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                10.1 コンピュータの構成要素 & 10.2 内部構成 (5 yếu tố & Cấu tạo linh kiện PC)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Máy tính được cấu tạo từ **5 yếu tố cơ bản** (5要素):
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1">
                    <li><strong>演算装置 (Thiết bị tính toán)</strong>: Xử lý số liệu, tính toán (CPU / MPU).</li>
                    <li><strong>制御装置 (Thiết bị điều khiển)</strong>: Đọc lệnh từ bộ nhớ, gửi tín hiệu kiểm soát.</li>
                    <li><strong>記憶装置 (Thiết bị bộ nhớ)</strong>: Lưu dữ liệu (RAM, HDD).</li>
                    <li><strong>入力装置 (Thiết bị nhập)</strong>: Nhận tín hiệu từ người dùng (Keyboard, Mouse).</li>
                    <li><strong>出力装置 (Thiết bị xuất)</strong>: Trả kết quả ra ngoài (Display, Printer).</li>
                  </ul>
                  <p>
                    **Bo mạch chủ (マザーボード)** là bảng mạch lớn nhất chứa CPU, RAM. Cáp truyền kết nối HDD (bộ nhớ phụ / 補助記憶装置). Cổng **USB (Universal System Bus)** làm cổng giao tiếp ngoại vi.
                  </p>
                </div>

                {/* Interactive 5 Elements Explorer */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Mô phỏng: Dòng chảy dữ liệu qua 5 yếu tố máy tính</h4>
                  <p className="text-slate-400 text-[10px]">Click vào từng khối để xem mối tương tác và hoạt động tương ứng</p>

                  <div className="grid grid-cols-3 gap-2 text-center font-bold">
                    <div
                      onClick={() => setFiveElementActive('input')}
                      className={`p-3 rounded-lg border cursor-pointer transition-all active:scale-95 ${
                        fiveElementActive === 'input' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      ⌨️ Thiết bị nhập<br />(入力装置)
                    </div>

                    <div className="flex flex-col gap-2">
                      <div
                        onClick={() => setFiveElementActive('control')}
                        className={`p-2 rounded-lg border cursor-pointer transition-all active:scale-95 ${
                          fiveElementActive === 'control' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        ⚙️ Điều khiển<br />(制御装置)
                      </div>
                      <div
                        onClick={() => setFiveElementActive('arithmetic')}
                        className={`p-2 rounded-lg border cursor-pointer transition-all active:scale-95 ${
                          fiveElementActive === 'arithmetic' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        🧮 Tính toán<br />(演算装置)
                      </div>
                    </div>

                    <div
                      onClick={() => setFiveElementActive('output')}
                      className={`p-3 rounded-lg border cursor-pointer transition-all active:scale-95 ${
                        fiveElementActive === 'output' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      🖥️ Thiết bị xuất<br />(出力装置)
                    </div>
                  </div>

                  <div className="col-span-3 flex justify-center">
                    <div
                      onClick={() => setFiveElementActive('memory')}
                      className={`w-2/3 p-3 rounded-lg border text-center font-bold cursor-pointer transition-all active:scale-95 ${
                        fiveElementActive === 'memory' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      💾 Thiết bị bộ nhớ (記憶装置)
                    </div>
                  </div>

                  <div className="p-3 bg-white border border-slate-100 rounded-xl min-h-[75px] flex items-center justify-center text-slate-600 leading-relaxed">
                    {fiveElementActive === 'input' && '⌨️ Người dùng gõ phím/chuột -> Dữ liệu chuyển qua bus dữ liệu đưa vào bộ nhớ chính RAM.'}
                    {fiveElementActive === 'control' && '⚙️ Thiết bị điều khiển (thuộc CPU) đọc các mã lệnh từ bộ nhớ chính để điều phối thứ tự chạy linh kiện.'}
                    {fiveElementActive === 'arithmetic' && '🧮 Thiết bị tính toán (thuộc CPU) nhận dữ liệu từ các thanh ghi bộ nhớ để thực hiện phép toán cộng, trừ, so sánh.'}
                    {fiveElementActive === 'output' && '🖥️ Dữ liệu sau khi xử lý được truyền đến màn hình hoặc máy in để hiển thị kết quả cho người dùng.'}
                    {fiveElementActive === 'memory' && '💾 Bộ nhớ (RAM, HDD) lưu trữ dữ liệu nguồn và cả kết quả tính toán trung gian phục vụ CPU làm việc.'}
                    {!fiveElementActive && 'Bấm chọn một khối ở trên để bắt đầu quan sát dòng chảy dữ liệu.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 10.3 & 10.4: Memory hierarchy, RAM, ROM, VRAM calculator */}
        {activeTab === '10.3' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                10.3 記憶装置の特徴 & 10.4 半導体メモリ (Phân cấp bộ nhớ & Bộ nhớ RAM/ROM)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Đặc điểm bộ nhớ (記憶装置の特徴)</strong>: Tốc độ truy cập (アクセス速度) và Dung lượng lưu trữ (記憶容量) tỷ lệ nghịch với nhau.
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1">
                    <li><strong>Cache (SRAM)</strong>: Tốc độ nhanh nhất, dung lượng rất nhỏ.</li>
                    <li><strong>Memory (DRAM)</strong>: Bộ nhớ chính, trung bình. Phải làm tươi (Refresh) điện tích định kỳ nên tốc độ trung bình.</li>
                    <li><strong>HDD / SSD</strong>: Bộ nhớ phụ, dung lượng cực lớn nhưng tốc độ ghi cơ học chậm.</li>
                  </ul>
                  <p>
                    <strong>ROM (Read Only Memory)</strong>: Bộ nhớ chỉ đọc, không mất điện khi tắt máy, dùng chứa chương trình khởi động tối thiểu của hệ thống. Flash memory cũng thuộc dòng ROM.
                  </p>
                  <p>
                    <strong>VRAM (Video RAM)</strong>: Bộ nhớ chuyên dụng lưu trữ hình ảnh trên màn hình. Dung lượng VRAM quyết định trực tiếp độ phân giải tối đa và độ sâu màu sắc hiển thị.
                  </p>
                </div>

                {/* VRAM Calculator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Bộ tính toán dung lượng VRAM thực tế</h4>
                  <p className="text-slate-400 text-[10px]">Thay đổi độ phân giải màn hình để tính dung lượng bộ nhớ tối thiểu cần dùng</p>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Chiều ngang (Pixels):</span>
                      <input
                        type="number"
                        value={screenWidth}
                        onChange={(e) => setScreenWidth(Math.max(1, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Chiều dọc (Pixels):</span>
                      <input
                        type="number"
                        value={screenHeight}
                        onChange={(e) => setScreenHeight(Math.max(1, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Độ sâu màu (Bits):</span>
                      <select
                        value={colorBits}
                        onChange={(e) => setColorBits(Number(e.target.value))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-bold"
                      >
                        <option value={8}>8-bit (256 màu)</option>
                        <option value={16}>16-bit (High Color)</option>
                        <option value={24}>24-bit (True Color)</option>
                        <option value={32}>32-bit (Deep Color)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-100 rounded-xl flex justify-between items-center shadow-sm">
                    <span className="font-extrabold text-slate-500">DUNG LƯỢNG VRAM TỐI THIỂU:</span>
                    <span className="font-mono text-sm md:text-base font-black text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded">
                      {calculatedVram.toFixed(2)} MB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 10.5: HDD structure & defragmentation */}
        {activeTab === '10.5' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                10.5 ハードディスク (Ổ đĩa cứng HDD & Chống phân mảnh)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Cấu trúc HDD</strong>: Gồm các phiến đĩa kim loại từ tính (<strong>円板 - Enban</strong>) quay tốc độ cao. Cần cơ học (<strong>アーム - Arm</strong>) đưa đầu đọc (<strong>ヘッド - Head</strong>) di chuyển vuông góc để đọc dữ liệu không chạm đĩa.
                  </p>
                  <p>
                    Do đầu đọc di chuyển cơ học, va đập (衝撃) có thể gây đầu đọc cọ xát đĩa từ gây hỏng vật lý hoàn toàn.
                  </p>
                  <p>
                    <strong>Track & Sector</strong>: Đường tròn quỹ đạo đầu đọc vẽ nên gọi là <strong>トラック (Track)</strong>. Track được chia đều thành các phân khu gọi là <strong>セクタ (Sector)</strong>.
                  </p>
                  <p>
                    <strong>Chống phân mảnh (デフラグメンテーション - Defrag)</strong>: Gom xếp các tệp rời rạc nằm rải rác về cùng rãnh hoặc các rãnh lân cận nhau để hạn chế đầu đọc cơ học phải dịch chuyển lung tung, tăng tốc độ truy cập.
                  </p>
                </div>

                {/* Defrag Game Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-extrabold text-slate-800 text-sm">Mô phỏng cơ chế chống phân mảnh đĩa cứng</span>
                    <button
                      onClick={resetDefrag}
                      className="px-2 py-1 text-[10px] font-bold text-slate-500 border border-slate-200 rounded hover:bg-slate-100 flex items-center gap-1 active:scale-95 transition-all"
                    >
                      <RefreshCw size={10} /> Reset đĩa
                    </button>
                  </div>

                  <div className="grid grid-cols-6 gap-2 pt-2">
                    {hddBlocks.map((block, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg border text-center font-black transition-all ${
                          block === 'A' ? 'bg-rose-100 border-rose-300 text-rose-800' :
                          block === 'B' ? 'bg-amber-100 border-amber-300 text-amber-800' :
                          block === 'C' ? 'bg-indigo-100 border-indigo-300 text-indigo-800' :
                          'bg-slate-200 border-slate-300 text-slate-400 font-normal'
                        }`}
                      >
                        {block === 'free' ? 'Trống' : `Tệp ${block}`}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={triggerDefrag}
                      disabled={isDefragging}
                      className={`flex-1 py-2 font-bold rounded-lg text-white transition-all text-xs cursor-pointer text-center ${
                        isDefragging ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
                      }`}
                    >
                      {isDefragging ? 'Đang sắp xếp khối đĩa...' : 'Chạy Defragmentation (Dọn đĩa)'}
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-500 leading-relaxed mt-1">
                    *Mô phỏng:* Trước khi dọn đĩa, tệp tin bị lưu trữ xen kẽ ngắt quãng khiến đầu đọc cơ học phải dịch chuyển qua lại liên tục. Chạy chống phân mảnh sẽ dồn tệp tin về các phân vùng liền mạch giúp tăng tốc đọc đĩa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 10.6: CPU clock, core, frequency, MIPS/FLOPS */}
        {activeTab === '10.6' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                10.6 CPU (Tần số xung nhịp & Đánh giá hiệu năng)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Tần số xung nhịp (クロック周波数)</strong>: Đơn vị là Hertz (Hz). Mỗi nhịp xung nhịp là một時計 (đồng hồ) định chu kỳ để CPU đồng bộ các hoạt động tính toán logic.
                  </p>
                  <p>
                    Tần số càng cao CPU tính toán càng nhanh. Tuy nhiên, tăng xung nhịp quá mức sẽ gây tiêu thụ điện năng lớn và sinh lượng nhiệt cực độ (発熱量) đòi hỏi tấm tản nhiệt (放熱板) lớn.
                  </p>
                  <p>
                    <strong>Chỉ số đo lường hiệu năng</strong>:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1">
                    <li><strong>MIPS (Million Instructions Per Second)</strong>: Triệu lệnh xử lý trên giây.</li>
                    <li><strong>FLOPS (Floating point number Operations Per Second)</strong>: Số phép tính dấu phẩy động (số thực) xử lý trên giây.</li>
                    <li><strong>Benchmark test</strong>: Phương pháp so sánh hiệu năng CPU qua chạy chung một chương trình đo thời gian thực tế.</li>
                  </ul>
                </div>

                {/* Clock Cycle & Nanosecond runner */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Giả lập tính toán chu kỳ lệnh CPU (Đề thi IT Passport)</h4>
                  <p className="text-slate-400 text-[10px]">Nhập thông số xung nhịp và số nhịp lệnh để tính thời gian thực hiện</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Tần số xung nhịp (GHz):</span>
                      <input
                        type="number"
                        step="0.5"
                        value={clockFrequencyGHz}
                        onChange={(e) => setClockFrequencyGHz(Math.max(0.1, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Số xung nhịp của lệnh (Clocks):</span>
                      <input
                        type="number"
                        value={instructionClocks}
                        onChange={(e) => setInstructionClocks(Math.max(1, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-100 rounded-xl flex justify-between items-center shadow-sm">
                    <span className="font-extrabold text-slate-500">THỜI GIAN THỰC HIỆN 1 LỆNH:</span>
                    <span className="font-mono text-sm md:text-base font-black text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded">
                      {nanosecondsPerInstruction.toFixed(2)} Nanoseconds (ns)
                    </span>
                  </div>

                  <div className="p-3 bg-amber-50 border border-amber-250 rounded-xl text-amber-900 leading-relaxed text-[11px]">
                    📋 **Bài toán IT Passport mẫu:**<br />
                    Với xung nhịp **2 GHz** và lệnh cần **5 Clocks**:
                    <br />
                    • Thời gian 1 nhịp xung: <code>1 / 2 GHz = 0.5 ns</code>.
                    <br />
                    • Thời gian chạy 5 nhịp: <code>5 * 0.5 ns = 2.5 ns</code>.
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
                  クロック周波数2 GHzのプロセッサにおいて，1つの命令が5クロックで実行できるとき，1命令の実行に必要な時間は何ナノ秒か。
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[
                    { label: '(ア) 0.1 ns', isCorrect: false },
                    { label: '(イ) 0.5 ns', isCorrect: false },
                    { label: '(ウ) 2.5 ns', isCorrect: true },
                    { label: '(エ) 10.0 ns', isCorrect: false }
                  ].map((opt, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border font-bold transition-all ${
                        opt.isCorrect 
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      {opt.label} {opt.isCorrect && '✓ [Đáp án đúng]'}
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-900 leading-relaxed text-xs">
                  💡 **Giải thích chi tiết:**<br />
                  Tần số xung nhịp 2 GHz = 2 * 10^9 Hz. Thời gian của 1 chu kỳ xung nhịp là 1 / (2 * 10^9) giây = 0.5 * 10^-9 giây = 0.5 ns. Lệnh cần 5 chu kỳ thực thi nên tổng thời gian cần thiết là 5 * 0.5 ns = 2.5 ns (Đáp án ウ).
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
                      マザーボード上での CPU，メモリ間などの電気の通り道のことをバスと言います．バスを流れるデータや外部機器とのデータを制御するICの組をチップセットと言います．
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
                        <strong>Gợi ý đối chiếu:</strong> Đường truyền dẫn tín hiệu điện giữa CPU, bộ nhớ, v.v... trên bo mạch chủ được gọi là Bus. Tổ hợp các chip IC làm nhiệm vụ kiểm soát luồng dữ liệu chạy qua Bus và dữ liệu trao đổi với các thiết bị ngoại vi được gọi là Chipset.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Máy tính cấu tạo từ 5 bộ phận đó là thiết bị tính toán, thiết bị điều khiển, thiết bị ghi nhớ, thiết bị vào và thiết bị ra. Thiết bị tính toán là thiết bị đầu não của máy tính, thực hiện việc xử lý tính toán. Thiết bị điều khiển đọc dữ liệu từ thiết bị ghi nhớ, làm theo chỉ dẫn của thiết bị tính toán, ghi kết quả tính toán vào thiết bị ghi nhớ, gửi tín hiệu điều khiển. Thiết bị ghi nhớ là bộ phận ghi nhớ nhiều dữ liệu khác nhau. Thiết bị vào tiếp nhận việc nhập dữ liệu từ người sử dụng, thiết bị ra trình kết quả cho người sử dụng
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
                      <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-950 rounded font-mono leading-relaxed mt-1 text-xs">
                        <strong>Gợi ý đối chiếu:</strong> コンピュータは，演算装置，記憶装置，制御装置，入力装置，出力装置の5要素からなります。演算装置は，コンピュータの頭脳にあたる装置で，計算などの処理を行います。制御装置は，記憶装置からデータを読み込み，演算装置の指示に従って，演算結果を記憶装置に書き込んだり，制御信号を送ったりします。記憶装置は，さまざまなデータを記憶しておく部品です。入力装置は，ユーザからデータ入力を受ける装置で，出力装置は，結果をユーザに提示する装置です。
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
                      クロック周波数が高くなればなるほど高速に計算することができます．ただし，これは同一 CPU で比較した場合だけで，命令セットの異なる CPU の場合には，処理内容によって得意，不得意があるので，クロック周波数だけで計算が高速かどうかを知ることはできません．
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
                        <strong>Gợi ý đối chiếu:</strong> Tần số xung nhịp càng cao thì tốc độ tính toán xử lý càng nhanh. Tuy nhiên, điều này chỉ đúng khi so sánh giữa các dòng CPU có cùng chủng loại kiến trúc. Đối với các CPU có tập chỉ thị lệnh khác nhau, khả năng xử lý các tác vụ thực tế có sự chuyên môn hóa thế mạnh khác nhau nên không thể chỉ dựa vào mỗi thông số tần số xung nhịp để kết luận tốc độ chạy chương trình.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Bên trong đĩa cứng có vài đĩa kim loại được phủ một lớp vật liệu từ tính, chúng thường xuyên quay vòng với tốc độ vài nghìn vòng trong một phút. Ở đầu cần di chuyển vuông góc với vòng tròn đĩa có gắn đầu đọc.
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
                        <strong>Gợi ý đối chiếu:</strong> ハードディスクの内部では，磁性体を塗った何枚かの金属の円板が1分間に数千回転の高速で常に回転しています．円板の円周に直交する方向に動くアームの先端には磁性体の情報を読み書きするヘッドが取り付けられています。
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
