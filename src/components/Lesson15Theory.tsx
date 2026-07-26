import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Cpu, HelpCircle, Languages, Zap, Layers, RefreshCw
} from 'lucide-react';

interface Lesson15TheoryProps {
  onClose: () => void;
}

export const Lesson15Theory: React.FC<Lesson15TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'15.1' | '15.3' | '15.5' | 'minitest'>('15.1');

  // Simulator 1: Bandwidth Road Lane & Data Transmission Speed (Section 15.1)
  const [selectedMedia, setSelectedMedia] = useState<number>(1200000); // 1.2 Mbps for CD/Low Video

  // Road Lanes visual: map media requirement to lanes
  const laneCount = useMemo(() => {
    if (selectedMedia <= 14400) return 1; // 14.4 Kbps
    if (selectedMedia <= 1200000) return 2; // 1.2 Mbps
    if (selectedMedia <= 6000000) return 4; // 6 Mbps
    return 8; // 19+ Mbps
  }, [selectedMedia]);

  // ASCII vs Binary size (Section 15.2)
  const [numToFormat, setNumToFormat] = useState<number>(123);
  const formattingComparison = useMemo(() => {
    const asciiBytes = numToFormat.toString().length;
    // Calculate binary bits required: ceil(log2(n + 1))
    const binaryBits = Math.max(1, Math.ceil(Math.log2(numToFormat + 1)));
    const binaryBytes = Math.ceil(binaryBits / 8);

    return {
      asciiBytes,
      binaryBits,
      binaryBytes
    };
  }, [numToFormat]);

  // Simulator 2: Interactive Run-Length Compressor (Section 15.4)
  const [rleString, setRleString] = useState<string>('WWWWWWBBWWWW');
  
  const rleCompressed = useMemo(() => {
    if (!rleString) return { compressed: '', ratio: 100 };
    const cleanStr = rleString.toUpperCase().replace(/[^BW]/g, '');
    let result = '';
    let i = 0;
    while (i < cleanStr.length) {
      let count = 1;
      while (i + 1 < cleanStr.length && cleanStr[i] === cleanStr[i + 1]) {
        count++;
        i++;
      }
      if (count >= 2) {
        result += cleanStr[i] + count;
      } else {
        result += cleanStr[i];
      }
      i++;
    }

    const originalLen = cleanStr.length;
    const compressedLen = result.length;
    const ratio = originalLen > 0 ? (compressedLen / originalLen) * 100 : 100;

    return {
      cleanStr,
      compressed: result,
      originalLen,
      compressedLen,
      ratio
    };
  }, [rleString]);

  // Simulator 3: 2D Parity Matrix Grid Error Correction (Section 15.6)
  // Grid size: 3 rows of 8 bits each
  const [parityGrid, setParityGrid] = useState<number[][]>([
    [1, 0, 1, 1, 0, 0, 0, 1],
    [0, 1, 1, 0, 1, 1, 0, 0],
    [1, 1, 0, 1, 0, 1, 1, 0]
  ]);

  // Odd parities calculated from original state (transmitting side)
  // Let's use even parity or odd parity. The textbook says odd parity: 1s count must be odd.
  // Row parities
  const rowParities = useMemo(() => {
    return parityGrid.map(row => {
      const ones = row.reduce((sum, b) => sum + b, 0);
      return ones % 2 === 1 ? 0 : 1; // 0 if odd, 1 if even (to make it odd)
    });
  }, [parityGrid]);

  // Column parities
  const colParities = useMemo(() => {
    const cols = [];
    for (let c = 0; c < 8; c++) {
      let ones = 0;
      for (let r = 0; r < 3; r++) {
        ones += parityGrid[r][c];
      }
      cols.push(ones % 2 === 1 ? 0 : 1);
    }
    return cols;
  }, [parityGrid]);

  // Toggle grid bit
  const toggleBit = (r: number, c: number) => {
    const newGrid = parityGrid.map((row, ri) => 
      row.map((val, ci) => ri === r && ci === c ? (val === 1 ? 0 : 1) : val)
    );
    setParityGrid(newGrid);
  };

  const resetParityGrid = () => {
    setParityGrid([
      [1, 0, 1, 1, 0, 0, 0, 1],
      [0, 1, 1, 0, 1, 1, 0, 0],
      [1, 1, 0, 1, 0, 1, 1, 0]
    ]);
  };

  // Vocabulary lists for minitests
  const mini1Vocab = useMemo(() => [
    { term: '圧縮', reading: 'あっしゅく', meaning: 'nén (nén dữ liệu/tệp tin)' },
    { term: '情報量', reading: 'じょうほうりょう', meaning: 'lượng thông tin' },
    { term: '通信速度', reading: 'つうしんそくど', meaning: 'tốc độ truyền tin, tốc độ mạng' },
    { term: '誤り検出方法', reading: 'あやまりけんしゅつほうほう', meaning: 'phương pháp phát hiện lỗi sai' },
    { term: '転送レート', reading: 'transfer rate', meaning: 'tỷ lệ truyền tải, tốc độ truyền' },
    { term: 'ブロードバンド', reading: 'broadband', meaning: 'băng thông rộng (tốc độ cao)' },
    { term: 'ナローバンド', reading: 'narrowband', meaning: 'băng thông hẹp (tốc độ thấp)' },
    { term: '低品質', reading: 'ていひんしつ', meaning: 'chất lượng thấp' },
    { term: '帯域幅', reading: 'たいいきはば', meaning: 'băng thông, độ rộng dải băng' },
    { term: 'スムーズ', reading: 'smooth', meaning: 'mượt mà, trơn tru' }
  ], []);

  const mini2Vocab = useMemo(() => [
    { term: 'バイナリ形式', reading: 'binaryけいしき', meaning: 'dạng nhị phân, định dạng nhị phân' },
    { term: '正弦波', reading: 'せいげんは', meaning: 'sóng hình sin (sine wave)' },
    { term: 'トレードオフ', reading: 'trade-off', meaning: 'quan hệ đánh đổi (cái này tăng cái kia giảm)' },
    { term: 'ランレングス圧縮', reading: 'run-length', meaning: 'nén run-length (độ dài loạt)' },
    { term: '不可逆', reading: 'ふかぎゃく', meaning: 'không thể đảo ngược (hao tổn dữ liệu)' },
    { term: '偽色', reading: 'ぎしょく', meaning: 'màu giả, nhiễu màu sắc (do nén ảnh JPEG)' },
    { term: '差分', reading: 'さぶん', meaning: 'phần chênh lệch, hiệu số (trong nén MPEG)' },
    { term: 'プロセッサー', reading: 'processor', meaning: 'bộ vi xử lý' },
    { term: '判定', reading: 'はんてい', meaning: 'phán đoán, phán định' },
    { term: '微細', reading: 'びさい', meaning: 'vi mô, cực nhỏ' }
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
            LÝ THUYẾT BÀI 15
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Truyền dữ liệu, nén & sửa lỗi (データ通信)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('15.1')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '15.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Cpu size={16} />
          15.1 & 15.2 Truyền tin & Nén chữ
        </button>
        <button
          onClick={() => setActiveTab('15.3')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '15.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          15.3 & 15.4 Nén âm thanh/ảnh
        </button>
        <button
          onClick={() => setActiveTab('15.5')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '15.5' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Zap size={16} />
          15.5 & 15.6 Sửa lỗi chẵn lẻ
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
        
        {/* Tab 15.1 & 15.2: Transmission and ASCII vs Binary */}
        {activeTab === '15.1' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                15.1 通信の情報量 & 15.2 文字情報圧縮 (Băng thông truyền dẫn & Dạng lưu trữ ASCII vs Nhị phân)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Tốc độ truyền mạng (bps - bit per second)</strong>: Đo lượng bit truyền trên giây. Băng thông rộng (**ブロードバンド - Broadband**) thường từ 1 Mbps trở lên, còn mạng chậm được gọi là băng thông hẹp (**ナローバンド - Narrowband**).
                  </p>
                  <p>
                    <strong>Lưu trữ ASCII vs Nhị phân (Binary)</strong>:
                    <br />
                    Nếu lưu trữ tệp số như "123" ở dạng văn bản chữ viết (ASCII), ta tốn 3 chữ số = 3 Byte (24 bit). Nhưng nếu chuyển thành dạng nhị phân (Binary), do 123 nhỏ hơn 128 (2^7) nên chỉ tốn đúng **7 bit** để ghi nhớ.
                  </p>
                </div>

                {/* Road lanes & ASCII vs Binary Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-5 shadow-sm text-xs">
                  {/* Road lanes visualizer */}
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">1. Minh họa độ rộng băng thông (Số làn xe chạy)</h4>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-bold text-slate-500">Yêu cầu phương tiện truyền thông:</span>
                      <select
                        value={selectedMedia}
                        onChange={(e) => setSelectedMedia(Number(e.target.value))}
                        className="p-2 border border-slate-200 rounded-lg text-xs bg-white font-bold"
                      >
                        <option value={14400}>Audio chất lượng thấp (14.4 Kbps)</option>
                        <option value={1200000}>CD & Video thấp (1.2 Mbps)</option>
                        <option value={6000000}>Truyền hình SDTV (6 Mbps)</option>
                        <option value={19000000}>Truyền hình HDTV (19 Mbps)</option>
                      </select>
                    </div>

                    <div className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col gap-1.5 shadow-inner">
                      <div className="text-[10px] text-slate-400 font-bold mb-1">Mô phỏng làn đường truyền tải dữ liệu:</div>
                      <div className="flex flex-col gap-1 bg-slate-800 p-2 rounded">
                        {Array.from({ length: laneCount }).map((_, i) => (
                          <div key={i} className="h-2 border-b border-dashed border-slate-600 flex justify-end items-center pr-2 font-mono text-[8px] text-indigo-400">
                            🚗💨 🚗💨 🚗💨
                          </div>
                        ))}
                      </div>
                      <div className="text-[10px] font-bold text-slate-600 mt-1">
                        Cần {laneCount} làn đường truyền tải để hoạt động mượt mà.
                      </div>
                    </div>
                  </div>

                  {/* ASCII vs Binary Calculator */}
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 text-sm mb-2">2. So sánh dung lượng ASCII vs Binary</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-bold text-slate-500">Nhập số nguyên dương:</span>
                      <input
                        type="number"
                        min="1"
                        value={numToFormat}
                        onChange={(e) => setNumToFormat(Math.max(1, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-xs bg-white font-mono w-28"
                      />
                    </div>
                    <div className="p-3.5 bg-white border border-slate-100 rounded-xl flex flex-col gap-1.5 font-mono text-[11px] shadow-sm">
                      <div className="flex justify-between">
                        <span>Định dạng ASCII (Text):</span>
                        <span className="font-black text-rose-700">{formattingComparison.asciiBytes} Bytes ({formattingComparison.asciiBytes * 8} bits)</span>
                      </div>
                      <div className="flex justify-between border-t border-slate-100 pt-1.5">
                        <span>Định dạng Nhị phân (Binary):</span>
                        <span className="font-black text-emerald-700">{formattingComparison.binaryBytes} Bytes ({formattingComparison.binaryBits} bits)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 15.3: Run Length & Audio/Video Compression */}
        {activeTab === '15.3' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                15.3 音声情報圧縮 & 15.4 画像情報圧縮 (Thuật toán nén Fourier & Run-Length)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Nén âm thanh (フーリエ変換)</strong>: Biến đổi Fourier phân tách sóng âm phức tạp thành các thành phần sóng sin (正弦波). Lọc bỏ các tần số cao không nghe thấy để nén sâu (mã hóa chuẩn MP3).
                  </p>
                  <p>
                    <strong>Nén Run-Length (ランレングス圧縮)</strong>: Phương pháp nén ảnh không mất mát thông tin cơ bản nhất. Đếm và viết số lượng ký tự/màu liên tiếp.
                  </p>
                  <p>
                    <strong>JPEG vs GIF</strong>:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1">
                    <li><strong>GIF</strong>: Nén không mất mát (lossless), giới hạn dưới 256 màu, phù hợp ảnh vẽ đồ họa.</li>
                    <li><strong>JPEG</strong>: Nén mất mát (lossy), nén ảnh tự nhiên chất lượng cao, tuy nhiên nén quá mức sẽ xuất hiện nhiễu màu sắc giả (**偽色 - Gishoku**).</li>
                  </ul>
                </div>

                {/* Run-Length Compressor Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Bộ giả lập nén ảnh Run-Length</h4>
                  
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Chuỗi màu sắc pixel (Chỉ nhập W: trắng, B: đen):</span>
                    <input
                      type="text"
                      value={rleString}
                      onChange={(e) => setRleString(e.target.value)}
                      className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                    />
                  </div>

                  <div className="p-4 bg-white border border-slate-100 rounded-xl flex flex-col gap-2.5 shadow-sm font-mono">
                    <div className="flex justify-between">
                      <span>Chuỗi gốc ({rleCompressed.originalLen} ký tự):</span>
                      <span className="font-bold text-slate-700">{rleCompressed.cleanStr}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-100 pt-2 font-bold">
                      <span>Chuỗi sau nén ({rleCompressed.compressedLen} ký tự):</span>
                      <span className="text-indigo-700">{rleCompressed.compressed}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-100 pt-2 text-emerald-800 bg-emerald-50 px-2 py-1 rounded font-bold text-xs">
                      <span>Tỷ lệ nén (Compression Ratio):</span>
                      <span>{rleCompressed.ratio.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 15.5: Odd/Even Parity Check Grid */}
        {activeTab === '15.5' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                15.5 動画像圧縮 & 15.6 誤り検出・訂正 (Cơ chế nén video & Sửa lỗi chẵn lẻ Parity)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Nén Video MPEG (差分記録)</strong>: Ghi nhớ phần khác biệt (chênh lệch) giữa các khung hình liền kề thay vì lưu toàn bộ khung hình, giúp giảm thiểu dung lượng lưu trữ cực kỳ lớn.
                  </p>
                  <p>
                    <strong>Kiểm tra chẵn lẻ (パリティチェック)</strong>:
                    <br />
                    Phương thức phát hiện lỗi cơ bản nhất. Thêm 1 bit vào dữ liệu sao cho tổng số bit 1 trong khối là lẻ (Odd) hoặc chẵn (Even).
                  </p>
                  <p>
                    <strong>Sửa lỗi 2D (Block Parity)</strong>:
                    Kết hợp bit kiểm tra của từng dòng và từng cột để chỉ định chính xác tọa độ bit bị lỗi và đảo ngược lại nó để sửa tự động. Tuy nhiên nếu lỗi xảy ra ở từ 2 vị trí trở lên, cơ chế này sẽ mất tác dụng định vị lỗi.
                  </p>
                </div>

                {/* Parity Grid Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-slate-800 text-sm">Giả lập sửa lỗi ma trận Parity 2D (Odd Parity)</h4>
                    <button
                      onClick={resetParityGrid}
                      className="px-2 py-1 text-[10px] font-bold text-slate-500 border border-slate-200 rounded hover:bg-slate-100 flex items-center gap-1 active:scale-95 transition-all"
                    >
                      <RefreshCw size={10} /> Reset lưới
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-400 leading-relaxed">
                    *Mô phỏng:* Click vào bất kỳ ô số 0 hoặc 1 nào trong lưới để gây ra lỗi truyền dẫn. Các ô kiểm tra (Parity ở rìa) sẽ đổi sang màu đỏ chỉ ra vị trí dòng/cột bị sai lệch dữ liệu!
                  </p>

                  <div className="flex flex-col gap-2 pt-2 bg-white border border-slate-200 p-4 rounded-xl shadow-inner">
                    {parityGrid.map((row, ri) => (
                      <div key={ri} className="flex gap-2 items-center justify-center">
                        {row.map((bit, ci) => (
                          <button
                            key={ci}
                            onClick={() => toggleBit(ri, ci)}
                            className="w-8 h-8 font-mono font-bold text-xs bg-slate-100 hover:bg-indigo-50 border border-slate-200 rounded cursor-pointer transition-all active:scale-90"
                          >
                            {bit}
                          </button>
                        ))}
                        {/* Row parity result display */}
                        <div
                          className={`w-10 h-8 flex items-center justify-center font-bold text-[10px] rounded border ${
                            rowParities[ri] === 0 ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-rose-50 border-rose-300 text-rose-800'
                          }`}
                        >
                          P: {rowParities[ri]}
                        </div>
                      </div>
                    ))}
                    
                    {/* Column parity row */}
                    <div className="flex gap-2 items-center justify-center pt-2 border-t border-slate-100">
                      {colParities.map((cp, ci) => (
                        <div
                          key={ci}
                          className={`w-8 h-8 flex items-center justify-center font-bold text-[10px] rounded border ${
                            cp === 0 ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-rose-50 border-rose-300 text-rose-800'
                          }`}
                        >
                          {cp}
                        </div>
                      ))}
                      <div className="w-10 h-8 bg-slate-100 border border-slate-200 rounded flex items-center justify-center text-[8.5px] font-bold text-slate-400">
                        Parity
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
                  5×5 画素の図が 'BBBBB BWWWW BBBBW BWWWW BWWWW' で表されるとき，同じ手法（ランレングス圧縮）で表現すると，圧縮率は何%か。
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[
                    { label: '(ア) 48.0%', isCorrect: false },
                    { label: '(イ) 52.0%', isCorrect: true },
                    { label: '(ウ) 76.0%', isCorrect: false },
                    { label: '(エ) 88.0%', isCorrect: false }
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
                  • Đọc chuỗi liên tục (bỏ dấu cách): <code>BBBBBBWWWWBBBBWBWWWWWBWWWW</code> (Tổng 25 ký tự).<br />
                  • Áp dụng quy tắc nén Run-Length (ký tự kèm số lượng lặp):<br />
                  1. `BBBBBB` ➔ **B6** (2 ký tự)<br />
                  2. `WWWW` ➔ **W4** (2 ký tự)<br />
                  3. `BBBB` ➔ **B4** (2 ký tự)<br />
                  4. `W` ➔ **W** (1 ký tự)<br />
                  5. `B` ➔ **B** (1 ký tự)<br />
                  6. `WWWW` ➔ **W4** (2 ký tự)<br />
                  7. `B` ➔ **B** (1 ký tự)<br />
                  8. `WWWW` ➔ **W4** (2 ký tự)<br />
                  • Chuỗi sau nén: <code>B6W4B4WBW4BW4</code> có độ dài 13 ký tự.<br />
                  • Tỷ lệ nén: <code>13 / 25 = 52.0%</code> (Tương ứng đáp án **イ**).
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
                      ホームページを閲覧するのに，自宅からアクセスした場合と，ホットスポットなどの外部からアクセスした場合とでは体感速度が大きく異なることがあります．このような通信速度の速い，遅いは客観的な数字で表すことができます．
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
                        <strong>Gợi ý đối chiếu:</strong> Khi duyệt trang web, tốc độ truy cập cảm nhận thực tế khi bạn kết nối từ nhà riêng và khi kết nối từ các điểm phát công cộng (Hotspot) bên ngoài đôi khi có sự khác biệt rất lớn. Sự nhanh hay chậm của tốc độ truyền tin này hoàn toàn có thể biểu diễn được bằng những số liệu khách quan.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Để nén dữ liệu người ta sử dụng phần mềm nén. Tùy theo hình thức nén mà đuôi mở rộng của file sau khi nén sẽ là zip, lzh, gz…
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
                        <strong>Gợi ý đối chiếu:</strong> 圧縮・解凍ソフトによってファイルを圧縮すると，圧縮方式に応じてファイル名の拡張子はzip，lzh，gz などになります。
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
                      データ通信では，他の通信機器の電波，コネクタ端子の接触不良，電化製品の電源オンオフ，雷などによりノイズが発生し，この影響を強く受けるために誤りが多くなります．
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
                        <strong>Gợi ý đối chiếu:</strong> Trong truyền thông dữ liệu, sóng điện từ của các thiết bị viễn thông khác, hiện tượng tiếp xúc kém của các đầu cắm cổng kết nối, quá trình bật tắt nguồn của thiết bị gia dụng hay sấm sét... có thể sinh ra tiếng ồn nhiễu tín hiệu (noise), khiến cho các lỗi sai xuất hiện nhiều hơn do chịu ảnh hưởng mạnh từ các tác nhân này.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Trong cơ cấu kiểm tra lỗi sai và chỉnh sửa, cách cơ bản nhất đơn giản nhất là phát hiện ra lỗi sai bằng kiểm chẵn lẻ.
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
                        <strong>Gợi ý đối chiếu:</strong> 誤り検出・訂正機構の中で，最も単純で基本的なのがパリティチェックによる誤り検出です。
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
