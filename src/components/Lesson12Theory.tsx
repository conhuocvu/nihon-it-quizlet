import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Cpu, HelpCircle, Languages, Zap, Layers, Play
} from 'lucide-react';

interface Lesson12TheoryProps {
  onClose: () => void;
}

export const Lesson12Theory: React.FC<Lesson12TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'12.1' | '12.3' | '12.5' | '12.6' | 'minitest'>('12.1');

  // Simulator 1: Radix Converter (Section 12.1 & 12.2)
  const [decInput, setDecInput] = useState<number>(209);
  const [decFloatInput, setDecFloatInput] = useState<string>('0.8125');

  const binaryIntegerSteps = useMemo(() => {
    let num = Math.floor(decInput);
    if (num <= 0) return [{ val: 0, rem: 0, next: 0 }];
    const steps = [];
    while (num > 0) {
      const rem = num % 2;
      const next = Math.floor(num / 2);
      steps.push({ val: num, rem, next });
      num = next;
    }
    return steps;
  }, [decInput]);

  const binaryFloatSteps = useMemo(() => {
    let val = parseFloat(decFloatInput);
    if (isNaN(val) || val <= 0 || val >= 1) return [];
    const steps = [];
    let count = 0;
    // Limit to 12 steps to prevent infinite loop for periodic fractions like 0.1
    while (val > 0 && count < 12) {
      const mul = val * 2;
      const bit = Math.floor(mul);
      const next = mul - bit;
      steps.push({ val, mul, bit, next });
      val = next;
      count++;
    }
    return steps;
  }, [decFloatInput]);

  // Simulator 2: 2's Complement & Binary Addition (Section 12.3 & 12.4)
  const [addX, setAddX] = useState<number>(5);
  const [addY, setAddY] = useState<number>(-3);

  const get8BitBinary = (n: number): string => {
    if (n >= 0) {
      return n.toString(2).padStart(8, '0');
    } else {
      // 2's complement for negative numbers
      const positiveBinary = Math.abs(n).toString(2).padStart(8, '0');
      // Invert bits
      const inverted = positiveBinary.split('').map(b => b === '0' ? '1' : '0').join('');
      // Add 1
      const num = parseInt(inverted, 2) + 1;
      return num.toString(2).slice(-8).padStart(8, '0');
    }
  };

  const onesComplement = (n: number): string => {
    if (n >= 0) return get8BitBinary(n);
    const positiveBinary = Math.abs(n).toString(2).padStart(8, '0');
    return positiveBinary.split('').map(b => b === '0' ? '1' : '0').join('');
  };

  // Simulator 3: Bit Shift Visualizer (Section 12.5)
  const [shiftNum, setShiftNum] = useState<number>(3); // decimal 3 = 11 binary
  const [shiftCount, setShiftCount] = useState<number>(1); // shift amount

  const shiftLeftResult = useMemo(() => {
    return shiftNum << shiftCount;
  }, [shiftNum, shiftCount]);

  const shiftRightResult = useMemo(() => {
    return shiftNum >> shiftCount;
  }, [shiftNum, shiftCount]);

  // Simulator 4: Taylor Expansion for sin(x) (Section 12.6)
  const [taylorAngleDeg, setTaylorAngleDeg] = useState<number>(30);
  const [taylorTerms, setTaylorTerms] = useState<number>(3); // 1, 2, 3, 4 terms

  const taylorResult = useMemo(() => {
    // Convert to radians
    const x = (taylorAngleDeg * Math.PI) / 180;
    let sum = 0;
    
    // Factorial helper
    const fact = (num: number): number => {
      if (num <= 1) return 1;
      return num * fact(num - 1);
    };

    const steps = [];
    for (let n = 0; n < taylorTerms; n++) {
      const exponent = 2 * n + 1;
      const termVal = (Math.pow(-1, n) * Math.pow(x, exponent)) / fact(exponent);
      sum += termVal;
      steps.push({ termIndex: n, exponent, val: termVal });
    }

    return { total: sum, steps, x };
  }, [taylorAngleDeg, taylorTerms]);

  // Vocabulary lists for minitests
  const mini1Vocab = useMemo(() => [
    { term: '2進数', reading: 'にしんすう', meaning: 'số nhị phân' },
    { term: 'べき乗', reading: 'べきじょう', meaning: 'lũy thừa, số mũ' },
    { term: '10進数', reading: 'じっしんすう', meaning: 'số thập phân' },
    { term: '演算処理', reading: 'えんざんしょり', meaning: 'xử lý tính toán' },
    { term: '丸め誤差', reading: 'まるめごさ', meaning: 'sai số do làm tròn' },
    { term: '割り切れる', reading: 'わりきれる', meaning: 'chia hết, chia chẵn' },
    { term: '余り', reading: 'あまり', meaning: 'phần dư (phép chia)' },
    { term: '変換', reading: 'へんかん', meaning: 'biến đổi, chuyển đổi cơ số' },
    { term: '繰り返し', reading: 'くりかえし', meaning: 'lặp đi lặp lại' },
    { term: '枠', reading: 'わく', meaning: 'khung (được đóng khung)' }
  ], []);

  const mini2Vocab = useMemo(() => [
    { term: '補数', reading: 'ほすう', meaning: 'phần bù (mã bù)' },
    { term: '符号ビット', reading: 'ふごうビット', meaning: 'bít dấu (biểu thị âm dương)' },
    { term: '類推', reading: 'るいすい', meaning: 'suy luận, suy ra' },
    { term: '三角関数', reading: 'さんかくかんすう', meaning: 'hàm số lượng giác (sin, cos, tan)' },
    { term: '四則演算', reading: 'しそくえんざん', meaning: 'phép tính cộng trừ nhân chia' },
    { term: '階乗', reading: 'かいじょう', meaning: 'giai thừa (!)' },
    { term: '近似', reading: 'きんじ', meaning: 'xấp xỉ, tiệm cận' },
    { term: '多項式', reading: 'たこうしき', meaning: 'đa thức' },
    { term: 'ビットシフト', reading: 'bit shift', meaning: 'phép dịch chuyển bit' },
    { term: '右辺', reading: 'うへん', meaning: 'vế phải (của phương trình)' }
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
            LÝ THUYẾT BÀI 12
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Xử lý tính toán (演算処理)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('12.1')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '12.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Cpu size={16} />
          12.1 & 12.2 Đổi cơ số
        </button>
        <button
          onClick={() => setActiveTab('12.3')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '12.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          12.3 & 12.4 Số âm bù 2
        </button>
        <button
          onClick={() => setActiveTab('12.5')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '12.5' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Zap size={16} />
          12.5 Dịch bit & Nhân chia
        </button>
        <button
          onClick={() => setActiveTab('12.6')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '12.6' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Play size={16} />
          12.6 Taylor & sin(x)
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
        
        {/* Tab 12.1: Radix Conversion */}
        {activeTab === '12.1' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                12.1 基数 & 12.2 変換 (Cơ số & Đổi hệ cơ số 2 ➔ 10)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Máy tính dùng hệ nhị phân (**2進数**) dựa trên 2 trạng thái bật/tắt (on/off). Ngoài ra hệ bát phân (8進数) và thập lục phân (16進数) cũng thường được sử dụng.
                  </p>
                  <p>
                    <strong>Quy tắc đổi số nguyên 10 ➔ 2</strong>: Chia liên tiếp số nguyên cho 2 cho đến khi thương số bằng 0, sau đó đọc ngược số dư từ dưới lên.
                  </p>
                  <p>
                    <strong>Quy tắc đối với số thập phân lẻ (小数の変換)</strong>: Nhân liên tiếp phần thập phân với 2, lấy phần nguyên (0 hoặc 1) làm bit nhị phân sau dấu phẩy.
                  </p>
                  <p className="p-3 bg-rose-50 border border-rose-150 rounded-xl text-rose-950 text-xs leading-relaxed">
                    ⚠️ **Sai số làm tròn (丸め誤差 - Marume Gosa):**
                    <br />
                    Hầu hết các số thực phân số như `0.1` khi chuyển sang hệ nhị phân sẽ thành số tuần hoàn vô hạn (`0.0001100110011...`). Vì máy tính có số bit giới hạn nên bắt buộc phải làm tròn, sinh ra sai số làm tròn trong các phép toán.
                  </p>
                </div>

                {/* Radix Converter Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-5 shadow-sm text-xs">
                  {/* Integer conversion */}
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">1. Quy trình đổi số nguyên (10進数 ➔ 2進数)</h4>
                    <div className="flex gap-2 mb-3">
                      <input
                        type="number"
                        value={decInput}
                        onChange={(e) => setDecInput(Math.max(0, Number(e.target.value)))}
                        className="flex-1 p-2 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none"
                        placeholder="Nhập số nguyên thập phân..."
                      />
                    </div>

                    <div className="bg-white border border-slate-100 p-3 rounded-xl max-h-[140px] overflow-y-auto font-mono text-[10px] flex flex-col gap-1 shadow-inner">
                      {binaryIntegerSteps.map((step, idx) => (
                        <div key={idx} className="flex justify-between border-b border-slate-100 pb-1">
                          <span>{step.val} ÷ 2 = {step.next}</span>
                          <span className="font-bold text-indigo-700">Dư: {step.rem}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2.5 p-2 bg-indigo-50 border border-indigo-150 rounded text-center text-xs font-black text-indigo-900 font-mono">
                      ➔ Kết quả (đọc ngược): {Math.floor(decInput).toString(2)}
                    </div>
                  </div>

                  {/* Float conversion */}
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 text-sm mb-2">2. Quy trình đổi số thực (0.8125 hoặc 0.1)</h4>
                    <div className="flex gap-2 mb-3">
                      <input
                        type="text"
                        value={decFloatInput}
                        onChange={(e) => setDecFloatInput(e.target.value)}
                        className="flex-1 p-2 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none"
                        placeholder="Nhập phần thập phân (vd: 0.8125)..."
                      />
                    </div>

                    <div className="bg-white border border-slate-100 p-3 rounded-xl max-h-[150px] overflow-y-auto font-mono text-[10px] flex flex-col gap-1 shadow-inner">
                      {binaryFloatSteps.map((step, idx) => (
                        <div key={idx} className="flex justify-between border-b border-slate-100 pb-1">
                          <span>{step.val.toFixed(4)} × 2 = {step.mul.toFixed(4)}</span>
                          <span className="font-bold text-emerald-700">Lấy: {step.bit}</span>
                        </div>
                      ))}
                      {decFloatInput === '0.1' && (
                        <div className="text-rose-600 font-bold text-[9px] pt-1">
                          ⚠ Tính toán bị lặp lại tuần hoàn vô hạn!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 12.3: 2's Complement */}
        {activeTab === '12.3' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                12.3 桁数の多い足し算 & 12.4 負の表現 (Phép cộng & Biểu diễn số âm bù 2)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Để thực hiện phép trừ, CPU không xây dựng một mạch trừ riêng mà quy về phép cộng với số âm (**負の表現**).
                  </p>
                  <p>
                    <strong>符号ビット (Bit dấu)</strong>: Sử dụng bit ngoài cùng bên trái làm bit dấu (0 là dương, 1 là âm).
                  </p>
                  <p>
                    <strong>2の補数 (Mã bù 2)</strong>: Để tránh việc số 0 có hai cách biểu diễn (+0 và -0 ở mã bù 1), máy tính sử dụng mã bù 2:
                    <br />
                    <span className="block font-bold text-indigo-900 bg-indigo-50 border border-indigo-150 p-2.5 rounded-lg text-xs mt-1">
                      Mã bù 2 = (Đảo ngược tất cả các bit 0 ➔ 1 và 1 ➔ 0) + 1
                    </span>
                  </p>
                  <p>
                    Ví dụ, phép trừ `5 - 3` được chuyển thành phép cộng: `5 + (-3)`.
                  </p>
                </div>

                {/* 2's Complement Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Mô phỏng phép cộng số âm nhị phân 8-bit</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Số dương X (0 ~ 127):</span>
                      <input
                        type="number"
                        value={addX}
                        onChange={(e) => setAddX(Math.min(127, Math.max(0, Number(e.target.value))))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Số âm Y (-128 ~ 0):</span>
                      <input
                        type="number"
                        value={addY}
                        onChange={(e) => setAddY(Math.max(-128, Math.min(0, Number(e.target.value))))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-100 rounded-xl flex flex-col gap-2.5 shadow-sm font-mono">
                    <div className="flex justify-between">
                      <span>Nhị phân X ({addX}):</span>
                      <span className="font-bold text-indigo-700">{get8BitBinary(addX)}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span>Bù 1 của Y ({addY}):</span>
                      <span className="text-slate-400">{onesComplement(addY)}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2 font-bold">
                      <span>Bù 2 của Y ({addY}):</span>
                      <span className="text-rose-600">{get8BitBinary(addY)}</span>
                    </div>
                    <div className="flex justify-between pt-1.5 font-black text-sm text-emerald-800 bg-emerald-50 px-2 py-1 rounded">
                      <span>Kết quả X + Y ({addX + addY}):</span>
                      <span>{get8BitBinary(addX + addY)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 12.5: Bit shifts */}
        {activeTab === '12.5' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                12.5 かけ算・割り算 (Phép dịch bit & Nhân chia nhị phân)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Phép nhân và chia có thể được tối ưu hóa cực nhanh nhờ phép dịch bit (**ビットシフト - Bit Shift**).
                  </p>
                  <p>
                    <strong>Dịch trái n bit (左シフト)</strong>: Tương đương với việc nhân số đó với <strong>2<sup>n</sup></strong>.
                  </p>
                  <p>
                    <strong>Dịch phải n bit (右シフト)</strong>: Tương đương với việc chia số đó cho <strong>2<sup>n</sup></strong>.
                  </p>
                  <p className="p-3 bg-amber-50 border border-amber-150 rounded-xl text-amber-900 text-xs">
                    💡 Phép dịch bit là các chỉ lệnh cơ bản chạy trực tiếp trên thanh ghi CPU với tốc độ xử lý nhanh nhất trong tập lệnh.
                  </p>
                </div>

                {/* Bit Shift Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Mô phỏng phép dịch bit 8-bit nhị phân</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Số thập phân ban đầu (m):</span>
                      <input
                        type="number"
                        value={shiftNum}
                        onChange={(e) => setShiftNum(Math.max(1, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Số bit dịch (n):</span>
                      <input
                        type="number"
                        value={shiftCount}
                        onChange={(e) => setShiftCount(Math.max(1, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-100 rounded-xl flex flex-col gap-3 shadow-sm font-mono">
                    <div className="flex justify-between items-center">
                      <span>Nguyên bản m ({shiftNum}):</span>
                      <span className="font-black text-slate-700">{get8BitBinary(shiftNum)}</span>
                    </div>

                    <div className="flex justify-between items-center border-t border-slate-100 pt-2 text-rose-800 bg-rose-50 px-2 py-1.5 rounded">
                      <span>Dịch trái n bit (m × 2<sup>{shiftCount}</sup>):</span>
                      <span className="font-black">{get8BitBinary(shiftLeftResult)} ({shiftLeftResult})</span>
                    </div>

                    <div className="flex justify-between items-center border-t border-slate-100 pt-2 text-emerald-800 bg-emerald-50 px-2 py-1.5 rounded">
                      <span>Dịch phải n bit (m ÷ 2<sup>{shiftCount}</sup>):</span>
                      <span className="font-black">{get8BitBinary(shiftRightResult)} ({shiftRightResult})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 12.6: Taylor Approximation */}
        {activeTab === '12.6' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                12.6 数学関数 (Hàm lượng giác & Khai triển Taylor)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Các hàm số phức tạp như `sin`, `cos`, `log`, `exp` được máy tính tính toán bằng cách quy về bốn phép tính cơ bản (+, -, *, /).
                  </p>
                  <p>
                    <strong>Khai triển Taylor (テイラー展開)</strong>: Biến đổi hàm lượng giác thành một đa thức có số số hạng vô hạn:
                  </p>
                  <p className="font-mono bg-indigo-50 border border-indigo-150 p-3 rounded-xl text-indigo-950 text-xs">
                    sin(x) = x - x³/3! + x⁵/5! - x⁷/7! + ...
                  </p>
                  <p>
                    Do lũy thừa và giai thừa đều là tích của phép nhân, máy tính chỉ cần tính đa thức này tới một số số hạng nhất định để đạt độ chính xác yêu cầu.
                  </p>
                </div>

                {/* Taylor Expansion Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Mô phỏng khai triển Taylor xấp xỉ sin(x)</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Góc x (Độ - Degrees):</span>
                      <input
                        type="number"
                        value={taylorAngleDeg}
                        onChange={(e) => setTaylorAngleDeg(Number(e.target.value))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Số số hạng khai triển (Terms):</span>
                      <input
                        type="number"
                        min="1"
                        max="4"
                        value={taylorTerms}
                        onChange={(e) => setTaylorTerms(Math.min(4, Math.max(1, Number(e.target.value))))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border border-slate-100 rounded-xl flex flex-col gap-2 shadow-sm font-mono text-[10px]">
                    <div className="font-bold text-slate-400 uppercase text-[9px] mb-1">Các bước cộng dồn đa thức:</div>
                    {taylorResult.steps.map((step, idx) => (
                      <div key={idx} className="flex justify-between border-b border-slate-100 pb-1">
                        <span>Số hạng {idx+1} (x<sup>{step.exponent}</sup> / {step.exponent}!):</span>
                        <span className={step.val >= 0 ? 'text-indigo-700' : 'text-rose-600'}>
                          {step.val >= 0 ? '+' : ''}{step.val.toFixed(6)}
                        </span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 border-t border-slate-200 font-bold text-xs">
                      <span>Giá trị xấp xỉ Taylor:</span>
                      <span className="text-indigo-700">{taylorResult.total.toFixed(6)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-xs text-slate-500">
                      <span>Giá trị chính xác (Math.sin):</span>
                      <span>{Math.sin(taylorResult.x).toFixed(6)}</span>
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
                  2 進数1.101を10進数で表現したものはどれか。 (Đổi số nhị phân 1.101 sang hệ thập phân?)
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[
                    { label: '(ア) 1.2', isCorrect: false },
                    { label: '(イ) 1.5', isCorrect: false },
                    { label: '(ウ) 1.505', isCorrect: false },
                    { label: '(エ) 1.625', isCorrect: true }
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
                  Phần nguyên: 1 = 1.<br />
                  Phần thập phân:<br />
                  • Chữ số thứ nhất sau dấu phẩy: 1 × 2<sup>-1</sup> = 0.5.<br />
                  • Chữ số thứ hai sau dấu phẩy: 0 × 2<sup>-2</sup> = 0.<br />
                  • Chữ số thứ ba sau dấu phẩy: 1 × 2<sup>-3</sup> = 0.125.<br />
                  Cộng lại tất cả: 1 + 0.5 + 0 + 0.125 = **1.625** (Tương ứng đáp án **エ**).
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
                      コンピュータは on と off の 2 つの状態によって処理を行います．2 つの状態を表すのに都合のいい表現法として，2 進数があります．通常，私たちが使っている数字は 0 から 9 までの 10 個の異なる記号を使い，記号が足りなくなったところで 1 桁増やしていく 10 進数です．
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
                        <strong>Gợi ý đối chiếu:</strong> Máy tính thực hiện các xử lý thông tin dựa trên hai trạng thái tắt (off) và bật (on). Số nhị phân là một phương pháp biểu diễn vô cùng tiện lợi để thể hiện hai trạng thái này. Thông thường, các chữ số chúng ta đang sử dụng là hệ thập phân sử dụng 10 ký tự số khác nhau từ 0 đến 9, và sẽ tăng thêm 1 chữ số ở hàng tiếp theo khi các ký hiệu số không còn đủ dùng.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Có điểm cần lưu ý với trường hợp là số thực. Thí dụ chúng ta thử cùng suy nghĩ về trường hợp số 0,1 của hệ cơ số 10. Nếu tính toán theo phương pháp như trên thì từ số 0,4 trở đi sự tính toán sẽ bị lặp đi lặp lại như ở hình 12.5. Có nghĩa là số 0,1 của hệ cơ số 10 khi chuyển sang hệ nhị phân sẽ là 0.0001100110011… và tiếp tục kéo dài đến vô hạn.
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
                        <strong>Gợi ý đối chiếu:</strong> ただし，小数の場合，注意しなければいけないことがあります．たとえば，10 進数の 0.1 という数字を考えてみます．この方法で計算していくと，図 74 のように 0.4 から下は同じ計算の繰り返しになります．つまり，10 進数の 0.1 は 2 進数では 0.00011001100110011 …となり，無限に続くことになってしまいます．
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
                      かけ算，割り算も足し算で実現できます．たとえば 5×3 の計算をする場合，5 は 2 進数で 101，3 は 2 進数で 11 なので，筆算で下に書かれた 1 のあるところまで桁をずらして 101 を書いて足せば，10進数で15を表す1111となり，かけ算が実現できます．
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
                        <strong>Gợi ý đối chiếu:</strong> Phép nhân và phép chia cũng có thể thực hiện được thông qua phép cộng. Ví dụ như khi tính phép nhân 5 × 3, số 5 trong hệ nhị phân là 101, số 3 là 11. Bằng cách viết nháp dịch chuyển lùi đầu số 101 tương ứng với vị trí chữ số 1 ở hàng dưới rồi cộng dồn lại, ta thu được kết quả 1111 biểu diễn số 15 trong hệ thập phân, và phép nhân đã được thực hiện.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Để thực hiện phép trừ, thì người ta không xây dựng mới mạch phép trừ, mà người ta quy về mạch phép cộng và biểu diễn con số dưới dạng số âm. Cách biểu diễn số âm rất đơn giản, người ta quy ước chữ số đầu tiên không phải là để biểu thị con số thông thường mà nó có ý nghĩa biểu thị dấu của con số.
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
                        <strong>Gợi ý đối chiếu:</strong> 引き算の実現には引き算回路を新たに作るのではなく，数字を負の表現にすることで足し算回路に帰着しています．負の表現は単純で，一番左の桁を通常の数字ではなく，符号を表すものと解釈します．
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
