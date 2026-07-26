import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Cpu, HelpCircle, RefreshCw, Languages, Zap, Layers, Play
} from 'lucide-react';

interface Lesson11TheoryProps {
  onClose: () => void;
}

export const Lesson11Theory: React.FC<Lesson11TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'11.1' | '11.2' | '11.4' | 'minitest'>('11.1');

  // Simulator 1: Turing Machine (Section 11.1)
  const [tape, setTape] = useState<string[]>(['1', '0', '1', '1', '0', '0']);
  const [headPos, setHeadPos] = useState<number>(0);
  const [turingState, setTuringState] = useState<'A' | 'B'>('A');
  const [turingLogs, setTuringLogs] = useState<string[]>(['Khởi tạo băng Turing...']);

  const stepTuringMachine = () => {
    if (headPos < 0 || headPos >= tape.length) {
      setTuringLogs((prev) => [...prev, '🏁 Đầu đọc ra ngoài băng. Dừng máy.']);
      return;
    }

    const currentVal = tape[headPos];
    const newTape = [...tape];

    if (turingState === 'A') {
      if (currentVal === '1') {
        newTape[headPos] = '0';
        setTape(newTape);
        setHeadPos((p) => p + 1);
        setTuringLogs((prev) => [
          ...prev,
          `Trạng thái A: Đọc 1 -> Viết 0, Dịch PHẢI, giữ trạng thái A`
        ]);
      } else {
        newTape[headPos] = '1';
        setTape(newTape);
        setTuringState('B');
        setTuringLogs((prev) => [
          ...prev,
          `Trạng thái A: Đọc 0 -> Viết 1, chuyển trạng thái B`
        ]);
      }
    } else {
      // State B
      if (currentVal === '1') {
        setHeadPos((p) => p + 1);
        setTuringLogs((prev) => [
          ...prev,
          `Trạng thái B: Đọc 1 -> Dịch PHẢI, chuyển trạng thái A`
        ]);
        setTuringState('A');
      } else {
        setHeadPos((p) => p - 1);
        setTuringLogs((prev) => [
          ...prev,
          `Trạng thái B: Đọc 0 -> Dịch TRÁI, giữ trạng thái B`
        ]);
      }
    }
  };

  const resetTuringMachine = () => {
    setTape(['1', '0', '1', '1', '0', '0']);
    setHeadPos(0);
    setTuringState('A');
    setTuringLogs(['Reset máy Turing. Sẵn sàng...']);
  };

  // Simulator 2: Diode P-N Junction (Section 11.3)
  const [diodeBias, setDiodeBias] = useState<'forward' | 'reverse'>('forward');

  // Simulator 3: Logic Circuit Half Adder (Section 11.4)
  const [switchX, setSwitchX] = useState<boolean>(false);
  const [switchY, setSwitchY] = useState<boolean>(false);

  // Logic evaluations:
  // Z = X OR Y (Z)
  // U = X AND Y (U - Carry)
  // V = NOT U
  // W = Z AND V (W - Sum)
  const logicalZ = useMemo(() => switchX || switchY, [switchX, switchY]);
  const logicalU = useMemo(() => switchX && switchY, [switchX, switchY]);
  const logicalV = useMemo(() => !logicalU, [logicalU]);
  const logicalW = useMemo(() => logicalZ && logicalV, [logicalZ, logicalV]);

  // Vocabulary lists for minitests
  const mini1Vocab = useMemo(() => [
    { term: '論理素子', reading: 'ろんりそし', meaning: 'phần tử lô-gíc, bóng bán dẫn' },
    { term: '集積回路', reading: 'しゅうせきかいろ', meaning: 'mạch tích hợp (IC)' },
    { term: '論理和', reading: 'ろんりわ', meaning: 'phép toán OR / Tổng lô-gíc' },
    { term: '真空管', reading: 'しんくうかん', meaning: 'bóng chân không' },
    { term: '単結晶', reading: 'たんけっしょう', meaning: 'tinh thể đơn, đơn tinh thể' },
    { term: '電極', reading: 'でんきょく', meaning: 'điện cực' },
    { term: '数学的モデル', reading: 'すうがくてきモデル', meaning: 'mô hình toán học' },
    { term: 'トランジスタ', reading: 'transistor', meaning: 'bóng bán dẫn' },
    { term: '発光ダイオード', reading: 'LED', meaning: 'đi-ốt phát quang' },
    { term: 'ヒータ', reading: 'heater', meaning: 'sợi đốt, bộ nung nóng' }
  ], []);

  const mini2Vocab = useMemo(() => [
    { term: '立体的', reading: 'りったいてき', meaning: 'mang tính ba chiều, lập thể' },
    { term: '構造', reading: 'こうぞう', meaning: 'cấu trúc, cơ cấu' },
    { term: '薄い', reading: 'うすい', meaning: 'mỏng' },
    { term: 'しくみ', reading: 'mechanism', meaning: 'cơ chế hoạt động, cấu tạo' },
    { term: 'マス目', reading: 'ますめ', meaning: 'ô vuông (trên băng Turing)' },
    { term: '断面', reading: 'だんめん', meaning: 'mặt cắt ngang' },
    { term: '反対方向', reading: 'はんたいほうこう', meaning: 'hướng ngược lại' },
    { term: '半導体', reading: 'はんどうたい', meaning: 'chất bán dẫn' },
    { term: '読み書きする', reading: 'よみかきする', meaning: 'đọc và ghi dữ liệu' },
    { term: '製造工程', reading: 'せいぞうこうてい', meaning: 'quy trình chế tạo/sản xuất' }
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
            LÝ THUYẾT BÀI 11
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Nguyên lý hoạt động CPU (CPUの動作原理)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('11.1')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '11.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Cpu size={16} />
          11.1 Máy Turing
        </button>
        <button
          onClick={() => setActiveTab('11.2')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '11.2' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          11.2 & 11.3 Mạch bán dẫn
        </button>
        <button
          onClick={() => setActiveTab('11.4')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '11.4' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Zap size={16} />
          11.4 Mạch logic & Cộng nhị phân
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
        
        {/* Tab 11.1: Turing Machine & Automaton */}
        {activeTab === '11.1' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                11.1 CPUの動作 (Nguyên lý máy Turing & Automaton)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Nguyên lý hoạt động của CPU dựa trên khái niệm toán học **máy Turing (チューリングマシン)**:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1.5">
                    <li>Một dải băng dài được phân thành các ô vuông (<strong>マス目 - Masume</strong>).</li>
                    <li>Đầu đọc/ghi dữ liệu trên ô (<strong>ヘッド - Head</strong>).</li>
                    <li>Trạng thái chương trình lưu trữ trong bộ nhớ (<strong>メモリ - Memory</strong>).</li>
                  </ul>
                  <p>
                    Hệ thống máy tính hiện đại hoạt động tương ứng: Đầu đọc xử lý tương ứng là **CPU**, còn dải băng tương ứng là **thiết bị lưu trữ phụ** (ổ cứng).
                  </p>
                  <p>
                    Mô hình toán học của các máy tự động xuất kết quả dựa trên đầu vào và trạng thái bên trong được gọi là **Automaton (オートマトン)**.
                  </p>
                </div>

                {/* Turing Machine Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-slate-800 text-sm">Mô phỏng máy Turing tương tác</h4>
                    <button
                      onClick={resetTuringMachine}
                      className="px-2 py-1 text-[10px] font-bold text-slate-500 border border-slate-200 rounded hover:bg-slate-100 flex items-center gap-1 active:scale-95 transition-all"
                    >
                      <RefreshCw size={10} /> Reset băng
                    </button>
                  </div>

                  {/* Tape layout */}
                  <div className="flex flex-col gap-1 bg-white border border-slate-200 p-4 rounded-xl shadow-inner">
                    {/* Head Indicator Row */}
                    <div className="flex gap-2 justify-center">
                      {tape.map((_, idx) => (
                        <div key={idx} className="w-10 text-center font-black text-indigo-700 text-xs">
                          {headPos === idx ? '▼ Head' : ''}
                        </div>
                      ))}
                    </div>
                    {/* Tape cells */}
                    <div className="flex gap-2 justify-center pt-1">
                      {tape.map((cell, idx) => (
                        <div
                          key={idx}
                          className={`w-10 h-10 border rounded-lg flex items-center justify-center font-mono text-sm font-black transition-all ${
                            headPos === idx ? 'bg-indigo-50 border-indigo-500 scale-105 shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          {cell}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-2 text-[11px]">
                    <span className="font-extrabold text-slate-500">TRẠNG THÁI HIỆN TẠI:</span>
                    <span className="font-mono font-black text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded">
                      State {turingState}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={stepTuringMachine}
                      className="flex-1 py-2 font-bold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all text-xs cursor-pointer text-center flex items-center justify-center gap-1.5 shadow"
                    >
                      <Play size={12} /> Chạy 1 bước (Step)
                    </button>
                  </div>

                  {/* Console log */}
                  <div className="bg-slate-900 text-emerald-400 p-3 rounded-xl font-mono text-[10px] min-h-[90px] max-h-[120px] overflow-y-auto flex flex-col gap-1">
                    {turingLogs.map((log, i) => (
                      <div key={i}>{log}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 11.2: Logic elements generations & Vacuum tube/diode */}
        {activeTab === '11.2' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                11.2 論理素子の歴史 & 11.3 動作原理 (Lịch sử linh kiện & Đi-ốt bán dẫn)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Lịch sử máy tính được phân chia thành **4 thế hệ** dựa trên các linh kiện lô-gíc (論理素子) cấu thành:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1">
                    <li><strong>Thế hệ 1 (1940s)</strong>: Bóng chân không (真空管 - Shinkukan).</li>
                    <li><strong>Thế hệ 2 (1950s)</strong>: Bóng bán dẫn (トランジスタ - Transistor).</li>
                    <li><strong>Thế hệ 3 (1960s)</strong>: Mạch tích hợp (IC - Integrated Circuit).</li>
                    <li><strong>Thế hệ 4 (1970s)</strong>: Mạch tích hợp quy mô lớn (LSI - Large Scale Integration).</li>
                  </ul>
                  <p>
                    <strong>Nguyên lý bán dẫn</strong>: Đi-ốt bán dẫn ghép bởi lớp P và N. Chỉ cho dòng điện đi từ cực P sang cực N (**dòng điện một chiều - 電流の一方通行**), tương đương với trạng thái mở/khóa nhị phân.
                  </p>
                </div>

                {/* Diode Bias Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Mô phỏng nguyên lý phân cực đi-ốt bán dẫn (P-N Junction)</h4>
                  <p className="text-slate-400 text-[10px]">Đổi chiều phân cực để quan sát dòng hạt tải điện qua lớp đi-ốt</p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setDiodeBias('forward')}
                      className={`flex-1 py-2 font-bold rounded-lg border transition-all text-xs cursor-pointer ${
                        diodeBias === 'forward' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      Phân cực thuận (Forward bias)
                    </button>
                    <button
                      onClick={() => setDiodeBias('reverse')}
                      className={`flex-1 py-2 font-bold rounded-lg border transition-all text-xs cursor-pointer ${
                        diodeBias === 'reverse' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      Phân cực ngược (Reverse bias)
                    </button>
                  </div>

                  <div className="bg-white border border-slate-100 p-4 rounded-xl flex items-center justify-center gap-4 min-h-[110px]">
                    <div className="flex border border-slate-300 rounded overflow-hidden font-bold">
                      <div className="w-16 h-12 bg-rose-50 text-rose-800 flex items-center justify-center border-r border-slate-300">
                        Vùng P (+)
                      </div>
                      <div className="w-16 h-12 bg-indigo-50 text-indigo-800 flex items-center justify-center">
                        Vùng N (-)
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 text-[11px]">
                      <span className="font-bold">Trạng thái:</span>
                      {diodeBias === 'forward' ? (
                        <span className="text-emerald-700 font-extrabold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                          🟢 CHO DÒNG ĐIỆN ĐI QUA (Dòng thuận)
                        </span>
                      ) : (
                        <span className="text-rose-700 font-extrabold bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                          🔴 CHẶN DÒNG ĐIỆN (Dòng ngược)
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 11.4: Logic circuits & Half adder calculation */}
        {activeTab === '11.4' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                11.4 論理回路 (Mạch logic & Bộ cộng nhị phân 1-bit)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Các cổng logic cơ bản bao gồm:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1.5">
                    <li><strong>OR回路 (論理和)</strong>: Mạch song song. Kết quả bằng 1 nếu một trong hai đầu vào bằng 1.</li>
                    <li><strong>AND回路 (論理積)</strong>: Mạch nối tiếp. Kết quả bằng 1 nếu cả hai đầu vào đều bằng 1.</li>
                    <li><strong>NOT回路 (否定)</strong>: Mạch phủ định ngược giá trị đầu vào.</li>
                  </ul>
                  <p>
                    Bằng cách kết hợp các đi-ốt bán dẫn thành mạch logic, ta tạo ra được **Bộ cộng bán phần (Half Adder)** để cộng 1-bit nhị phân, tính ra kết quả **Sum (W)** và số nhớ **Carry (U)**.
                  </p>
                </div>

                {/* Half Adder Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Bộ cộng nhị phân 1-bit tương tác (Half Adder)</h4>
                  <p className="text-slate-400 text-[10px]">Bấm thay đổi trạng thái công tắc đầu vào X và Y để quan sát kết quả</p>

                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => setSwitchX(!switchX)}
                      className={`px-4 py-2 font-bold rounded-lg border transition-all text-xs cursor-pointer ${
                        switchX ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      Công tắc X: {switchX ? '1 (ON)' : '0 (OFF)'}
                    </button>
                    <button
                      onClick={() => setSwitchY(!switchY)}
                      className={`px-4 py-2 font-bold rounded-lg border transition-all text-xs cursor-pointer ${
                        switchY ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      Công tắc Y: {switchY ? '1 (ON)' : '0 (OFF)'}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                      <span className="font-extrabold text-slate-400 block text-[9px] uppercase">Carry Out (Nhớ U):</span>
                      <span className="font-mono text-sm md:text-base font-black text-indigo-700 block mt-1">
                        {logicalU ? '1 (ON)' : '0 (OFF)'}
                      </span>
                      <p className="text-[8.5px] text-slate-400 mt-1">Công thức: X AND Y</p>
                    </div>

                    <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                      <span className="font-extrabold text-slate-400 block text-[9px] uppercase">Sum (Kết quả W):</span>
                      <span className="font-mono text-sm md:text-base font-black text-emerald-700 block mt-1">
                        {logicalW ? '1 (ON)' : '0 (OFF)'}
                      </span>
                      <p className="text-[8.5px] text-slate-400 mt-1">Công thức: (X OR Y) AND NOT (X AND Y)</p>
                    </div>
                  </div>

                  <div className="p-3 bg-indigo-50 border border-indigo-100 text-indigo-950 rounded-lg text-xs leading-relaxed font-sans">
                    🧮 **Kết quả phép tính cộng:** <code>{switchX ? '1' : '0'} + {switchY ? '1' : '0'} = {logicalU ? '10' : logicalW ? '01' : '00'}</code> (Nhị phân)
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
                Câu hỏi luyện tập (Thiết kế công tắc cầu thang)
              </h4>
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 text-xs md:text-sm">
                <p className="font-bold text-slate-800 mb-3 leading-relaxed">
                  「階段の上下にあるスイッチXまたはYで，1つの照明を点灯・消灯できる，すなわち，一方のスイッチの状態にかかわらず，他方のスイッチで照明を点灯・消灯できる」という条件を満足する論理回路はどれか。 (Công tắc cầu thang X và Y điều khiển một bóng đèn sao cho dù ở trạng thái nào của công tắc này cũng bật tắt được bằng công tắc kia, tương ứng với mạch logic nào?)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                  {[
                    { label: '(ア) X  AND  Y', isCorrect: false },
                    { label: '(イ) U = X AND Y -> NOT U', isCorrect: false },
                    { label: '(ウ) Z = X OR Y -> NOT Z', isCorrect: false },
                    { label: '(エ) U = X AND Y, Z = X OR Y, V = NOT U -> Z AND V', isCorrect: true }
                  ].map((opt, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border font-bold transition-all ${
                        opt.isCorrect 
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      {opt.label} {opt.isCorrect && '✓ [Đáp án đúng (Mạch XOR)]'}
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-900 leading-relaxed text-xs">
                  💡 **Giải thích chi tiết:**<br />
                  Công tắc cầu thang hoạt động theo nguyên lý **phép XOR (Exclusive OR)**: Đèn chỉ sáng khi 2 công tắc ở trạng thái ngược nhau (1 và 0, hoặc 0 và 1). Sơ đồ mạch logic XOR tương đương với phép toán: <code>(X OR Y) AND NOT (X AND Y)</code>, chính xác là mô tả của tùy chọn **(エ)**.
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
                      ダイオードは，p(positive)型と n(negative)型の 2 つの物質を貼り合わせた構造になっています．n 型は電子が余っている状態で安定した物質であり，p 型は電子が足りない状態で安定した物質なので，n 型から p 型に電子が移動しやすくなり，電子の移動 di chuyển の反対方向に電流が流れ，逆向きには流れません．
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
                        <strong>Gợi ý đối chiếu:</strong> Đi-ốt được cấu tạo bởi việc ghép 2 chất bán dẫn loại p (dương) và loại n (âm). Chất bán dẫn loại n ổn định trong trạng thái dư thừa electron, còn chất loại p ổn định trong trạng thái thiếu hụt electron. Vì vậy, các hạt electron rất dễ di chuyển từ n sang p, tạo ra dòng điện chạy theo hướng ngược chiều chuyển động của electron, dòng điện không thể đi theo chiều ngược lại.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Phần cứng của máy tính về cơ bản được cấu tạo bởi mạch lô gic với 2 giá trị 0 và 1. Trong các mạch lô gic có mạch OR. Mạch OR là mạch có các công tắc được nối song song. Nếu hoặc công tắc X hoặc công tắc Y bật thì bóng đèn Z cũng được bật.
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
                        <strong>Gợi ý đối chiếu:</strong> コンピュータの基本回路の 1 つに OR 回路があります．OR 回路とは，スイッチが並列に並んだ回路としてモデル化されます．スイッチ X か Y のどちらかを on にすれば電球 Z が on になります．
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
                      第 3 世代の論理素子である IC は，集積回路と訳され，1 つの IC パッケージの中に十数個程度のトランジスタが入っているもので，原理的には第 2 世代と変わりません．
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
                        <strong>Gợi ý đối chiếu:</strong> IC, linh kiện lô-gíc thế hệ thứ ba, được dịch là mạch tích hợp, chứa khoảng mười mấy bóng bán dẫn bên trong một vỏ bọc IC. Về mặt nguyên lý hoạt động, nó không khác biệt so với thế hệ thứ hai.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Nguyên lý hoạt động của CPU được căn cứ vào máy turing, một loại máy được nhắc đến như là một khái niệm toán học trước khi máy tính điện tử ra đời.
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
                      <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-950 rounded font-mono leading-relaxed mt-1 text-xs">
                        <strong>Gợi ý đối chiếu:</strong> CPUの動作原理は，電子式計算機の登場以前に数学的な概念として提唱されたチューリングマシンに基づいています．
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
