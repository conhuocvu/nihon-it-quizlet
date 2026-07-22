import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  ArrowLeft, BookOpen, ChevronRight,
  Sparkles, CheckCircle2, Play, Languages, RefreshCw, Layers, Layout, ArrowUpDown, Info
} from 'lucide-react';

interface Lesson20TheoryProps {
  onClose: () => void;
}

export const Lesson20Theory: React.FC<Lesson20TheoryProps> = ({ onClose }) => {
  const [activeTab20, setActiveTab20] = useState<'20.1' | '20.2' | '20.3' | '20.4' | 'minitest'>('20.1');

  // Vending Machine Interactive State (20.1)
  const [vendingMoney, setVendingMoney] = useState<number>(0);
  const [vendingMessage, setVendingMessage] = useState<string>('Vui lòng nạp tiền (giá nước 120円)...');

  // Multi-Algorithm Sorting Visualizer State (20.3)
  const [selectedAlgo, setSelectedAlgo] = useState<'bubble' | 'selection' | 'insertion'>('bubble');
  const [sortArray, setSortArray] = useState<number[]>([40, 20, 30, 10]);
  const [sortLogs, setSortLogs] = useState<string[]>([]);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [activeI, setActiveI] = useState<number | null>(null);
  const [activeJ, setActiveJ] = useState<number | null>(null);
  const [activeMin, setActiveMin] = useState<number | null>(null);

  const abortSortRef = useRef<boolean>(false);

  // Stop sorting loop on unmount or tab change
  useEffect(() => {
    return () => {
      abortSortRef.current = true;
    };
  }, []);

  const resetSortVisualizer = () => {
    abortSortRef.current = true;
    setTimeout(() => {
      abortSortRef.current = false;
      setSortArray([40, 20, 30, 10]);
      setSortLogs([]);
      setIsSorting(false);
      setActiveI(null);
      setActiveJ(null);
      setActiveMin(null);
    }, 60);
  };

  const delay = (ms: number) => {
    return new Promise<void>((resolve) => {
      const start = Date.now();
      const timer = setInterval(() => {
        if (abortSortRef.current || Date.now() - start >= ms) {
          clearInterval(timer);
          resolve();
        }
      }, 30);
    });
  };

  const runSortingAlgorithm = async () => {
    if (isSorting) return;
    abortSortRef.current = false;
    setIsSorting(true);

    let arr = [40, 20, 30, 10];
    let logs: string[] = [];
    const n = arr.length;

    setSortArray([...arr]);
    setSortLogs([]);

    if (selectedAlgo === 'bubble') {
      logs.push("🔥 Bắt đầu Bubble Sort (Nổi bọt): [40, 20, 30, 10]");
      setSortLogs([...logs]);

      for (let i = 0; i <= n - 2; i++) {
        if (abortSortRef.current) break;
        setActiveI(i);
        logs.push(`--- Vòng i = ${i}: Tìm phần tử nhỏ nhất xếp vào a[${i}] ---`);
        setSortLogs([...logs]);

        for (let j = n - 1; j >= i + 1; j--) {
          if (abortSortRef.current) break;
          setActiveJ(j);
          logs.push(`So sánh a[${j}] (${arr[j]}) và a[${j - 1}] (${arr[j - 1]})...`);
          setSortLogs([...logs]);
          await delay(600);
          if (abortSortRef.current) break;

          if (arr[j] < arr[j - 1]) {
            logs.push(`👉 Đổi chỗ a[${j}] (${arr[j]}) ↔️ a[${j - 1}] (${arr[j - 1]})`);
            const temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            setSortArray([...arr]);
            setSortLogs([...logs]);
            await delay(600);
          } else {
            logs.push(`✔️ Giữ nguyên (${arr[j]} >= ${arr[j - 1]})`);
            setSortLogs([...logs]);
          }
        }
      }
    } else if (selectedAlgo === 'selection') {
      logs.push("🔥 Bắt đầu Selection Sort (Sắp xếp chọn): [40, 20, 30, 10]");
      setSortLogs([...logs]);

      for (let i = 0; i < n - 1; i++) {
        if (abortSortRef.current) break;
        setActiveI(i);
        let minIdx = i;
        setActiveMin(minIdx);
        logs.push(`--- Vòng i = ${i}: Giả định nhỏ nhất là a[${i}] = ${arr[i]} ---`);
        setSortLogs([...logs]);

        for (let j = i + 1; j < n; j++) {
          if (abortSortRef.current) break;
          setActiveJ(j);
          logs.push(`So sánh a[${j}] (${arr[j]}) với min hiện tại (${arr[minIdx]})...`);
          setSortLogs([...logs]);
          await delay(500);
          if (abortSortRef.current) break;

          if (arr[j] < arr[minIdx]) {
            minIdx = j;
            setActiveMin(minIdx);
            logs.push(`👉 Tìm thấy nhỏ hơn mới: a[${j}] = ${arr[j]}`);
            setSortLogs([...logs]);
          }
        }

        if (minIdx !== i && !abortSortRef.current) {
          logs.push(`🔄 Đổi chỗ a[${i}] (${arr[i]}) ↔️ a[${minIdx}] (${arr[minIdx]})`);
          const temp = arr[i];
          arr[i] = arr[minIdx];
          arr[minIdx] = temp;
          setSortArray([...arr]);
          setSortLogs([...logs]);
          await delay(600);
        }
      }
    } else if (selectedAlgo === 'insertion') {
      logs.push("🔥 Bắt đầu Insertion Sort (Sắp xếp chèn): [40, 20, 30, 10]");
      setSortLogs([...logs]);

      for (let i = 1; i < n; i++) {
        if (abortSortRef.current) break;
        setActiveI(i);
        const key = arr[i];
        let j = i - 1;
        logs.push(`--- Vòng i = ${i}: Lấy phần tử key = ${key} để chèn vào dãy đã chọn ---`);
        setSortLogs([...logs]);
        await delay(500);

        while (j >= 0 && arr[j] > key) {
          if (abortSortRef.current) break;
          setActiveJ(j);
          logs.push(`Do a[${j}] (${arr[j]}) > ${key} → dịch a[${j}] sang a[${j + 1}]`);
          arr[j + 1] = arr[j];
          setSortArray([...arr]);
          setSortLogs([...logs]);
          j--;
          await delay(500);
        }

        if (!abortSortRef.current) {
          arr[j + 1] = key;
          setSortArray([...arr]);
          logs.push(`👉 Chèn key = ${key} vào vị trí a[${j + 1}]`);
          setSortLogs([...logs]);
          await delay(500);
        }
      }
    }

    if (!abortSortRef.current) {
      setActiveI(null);
      setActiveJ(null);
      setActiveMin(null);
      logs.push("🎉 Hoàn tất sắp xếp tăng dần: a = [" + arr.join(", ") + "]");
      setSortLogs([...logs]);
    }
    setIsSorting(false);
  };

  // IT Passport Practice State
  const [selectedItOption, setSelectedItOption] = useState<string | null>(null);
  const [showItExplanation, setShowItExplanation] = useState<boolean>(false);

  // Minitest 1 State
  const l20Mini1Vocab = useMemo(() => [
    { term: '逐一', reading: 'ちくいち', meaning: 'từng tí một / chi tiết' },
    { term: '書き下す', reading: 'かきくだす', meaning: 'viết ra / ghi chép lại' },
    { term: 'フローチャート', reading: 'flowchart', meaning: 'sơ đồ thuật toán (lưu đồ)' },
    { term: 'バブルソート', reading: 'bubble sort', meaning: 'sắp xếp nổi bọt' },
    { term: 'クイックソート', reading: 'quick sort', meaning: 'sắp xếp nhanh' },
    { term: '挿入ソート', reading: 'insertion sort', meaning: 'sắp xếp chèn' },
    { term: 'シェルソート', reading: 'shell sort', meaning: 'sắp xếp Shell' },
    { term: 'マージソート', reading: 'merge sort', meaning: 'sắp xếp trộn' },
    { term: 'ヒューマンインタフェース', reading: 'human interface', meaning: 'giao diện người - máy' },
    { term: 'ショートカット', reading: 'shortcut', meaning: 'phím tắt / đường tắt' }
  ], []);

  const [mini1Revealed20, setMini1Revealed20] = useState<number[]>([]);
  const [mini1Trans1_20, setMini1Trans1_20] = useState('');
  const [mini1ShowAnswer1_20, setMini1ShowAnswer1_20] = useState(false);
  const [mini1Trans2_20, setMini1Trans2_20] = useState('');
  const [mini1ShowAnswer2_20, setMini1ShowAnswer2_20] = useState(false);

  // Minitest 2 State
  const l20Mini2Vocab = useMemo(() => [
    { term: '頻繁', reading: 'ひんぱん', meaning: 'thường xuyên / tấp nập' },
    { term: 'エラー対策', reading: 'エラーたいさく', meaning: 'biện pháp xử lý lỗi' },
    { term: 'カスタマイズ', reading: 'customize', meaning: 'tùy chỉnh theo yêu cầu' },
    { term: '試行錯誤', reading: 'しこうさくご', meaning: 'thử nghiệm và sửa sai' },
    { term: '身振り', reading: 'みぶり', meaning: 'điệu bộ / cử chỉ' },
    { term: 'マルチ画面', reading: 'multi-screen', meaning: 'nhiều màn hình' },
    { term: '没入型表示装置', reading: 'ぼんにゅうがたひょうじそうち', meaning: 'thiết bị hiển thị đắm chìm (VR)' },
    { term: '触覚装置', reading: 'しょっかくそうち', meaning: 'thiết bị xúc giác' },
    { term: '最適な', reading: 'さいてきな', meaning: 'tối ưu / phù hợp nhất' },
    { term: '嗅覚装置', reading: 'きゅうかくそうち', meaning: 'thiết bị khứu giác' }
  ], []);

  const [mini2Revealed20, setMini2Revealed20] = useState<number[]>([]);
  const [mini2Trans1_20, setMini2Trans1_20] = useState('');
  const [mini2ShowAnswer1_20, setMini2ShowAnswer1_20] = useState(false);
  const [mini2Trans2_20, setMini2Trans2_20] = useState('');
  const [mini2ShowAnswer2_20, setMini2ShowAnswer2_20] = useState(false);

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
            LÝ THUYẾT BÀI 20
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            アルゴリズム (Thuật toán & Thiết kế UI)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab20('20.1')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab20 === '20.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <BookOpen size={16} />
          20.1 Thuật toán là gì?
        </button>
        <button
          onClick={() => setActiveTab20('20.2')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab20 === '20.2' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          20.2 Sơ đồ Flowchart
        </button>
        <button
          onClick={() => setActiveTab20('20.3')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab20 === '20.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <ArrowUpDown size={16} />
          20.3 Thuật toán Sắp xếp
        </button>
        <button
          onClick={() => setActiveTab20('20.4')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab20 === '20.4' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layout size={16} />
          20.4 Thiết kế UI & 8 Quy tắc
        </button>
        <button
          onClick={() => setActiveTab20('minitest')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab20 === 'minitest' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Languages size={16} />
          Bài tập & Mini Tests
        </button>
      </div>

      {/* Main Tab Content */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 md:p-8 shadow-xl shadow-slate-100/40 min-h-[500px]">

        {/* ================= TAB 20.1 ================= */}
        {activeTab20 === '20.1' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50/40 p-4 rounded-r-xl">
              <span className="text-[10px] font-extrabold uppercase text-indigo-600 tracking-wider">SGK 20.1</span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">20.1 アルゴリズム (Thuật toán là gì?)</h3>
              <p className="text-slate-700 text-sm leading-relaxed mt-2 select-text font-serif italic">
                「プログラムの基本的な処理の手順をアルゴリズムと言います．アルゴリズムの目的は入力，出力，処理手順を明確にすることです．」
              </p>
              <div className="mt-3 text-xs text-slate-600 bg-white/80 p-3 rounded-xl border border-slate-200 leading-relaxed">
                <span className="font-bold text-indigo-600">Dịch nghĩa:</span> Quy trình xử lý cơ bản của một chương trình được gọi là **Thuật toán (Algorithm)**. Mục đích của thuật toán là làm rõ **Đầu vào (入力 - Input)**, **Đầu ra (出力 - Output)** và **Quy trình xử lý (処理手順)**.
              </div>
            </div>

            {/* 3 Components Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-blue-100 bg-blue-50/30 rounded-xl">
                <span className="text-[10px] font-bold text-blue-600 bg-white px-2 py-0.5 rounded border border-blue-200">1. 入力 (Input)</span>
                <h4 className="font-bold text-sm text-slate-800 mt-2">Đầu vào</h4>
                <p className="text-xs text-slate-600 mt-1">Dữ liệu được nạp vào hệ thống (Ví dụ: Tiền nạp, Nút bấm chọn hàng...)</p>
              </div>

              <div className="p-4 border border-amber-100 bg-amber-50/30 rounded-xl">
                <span className="text-[10px] font-bold text-amber-600 bg-white px-2 py-0.5 rounded border border-amber-200">2. 処理手順 (Process)</span>
                <h4 className="font-bold text-sm text-slate-800 mt-2">Quy trình xử lý</h4>
                <p className="text-xs text-slate-600 mt-1">Kiểm tra điều kiện, tính toán, so sánh (Ví dụ: Đợi đủ 120円, kiểm tra nút bấm...)</p>
              </div>

              <div className="p-4 border border-emerald-100 bg-emerald-50/30 rounded-xl">
                <span className="text-[10px] font-bold text-emerald-600 bg-white px-2 py-0.5 rounded border border-emerald-200">3. 出力 (Output)</span>
                <h4 className="font-bold text-sm text-slate-800 mt-2">Đầu ra</h4>
                <p className="text-xs text-slate-600 mt-1">Kết quả xuất ra sau xử lý (Ví dụ: Lon nước, tiền thói thừa...)</p>
              </div>
            </div>

            {/* Interactive Vending Machine Simulation */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-indigo-50/20 via-white to-purple-50/20">
              <h4 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <Sparkles size={16} className="text-indigo-600" />
                Mô phỏng Thuật toán Máy bán hàng tự động (図111)
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="p-4 bg-slate-900 text-white rounded-xl flex flex-col justify-between min-h-[200px]">
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold border-b border-slate-800 pb-1 mb-3">MÁY BÁN HÀNG TỰ ĐỘNG (120円/lon)</div>
                    <div className="text-sm font-bold text-emerald-400 mb-2">Số tiền đã nạp: {vendingMoney} 円</div>
                    <div className="p-3 bg-slate-800 rounded-lg text-xs text-slate-200 border border-slate-700">
                      {vendingMessage}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => {
                        const newTotal = vendingMoney + 50;
                        setVendingMoney(newTotal);
                        if (newTotal >= 120) {
                          setVendingMessage(`Đã nạp ${newTotal}円 (Đủ tiền!). Hãy bấm chọn lon nước.`);
                        } else {
                          setVendingMessage(`Đã nạp ${newTotal}円. Vui lòng nạp thêm ${120 - newTotal}円.`);
                        }
                      }}
                      className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg cursor-pointer transition-all"
                    >
                      + Nạp 50円
                    </button>

                    <button
                      onClick={() => {
                        const newTotal = vendingMoney + 100;
                        setVendingMoney(newTotal);
                        if (newTotal >= 120) {
                          setVendingMessage(`Đã nạp ${newTotal}円 (Đủ tiền!). Hãy bấm chọn lon nước.`);
                        } else {
                          setVendingMessage(`Đã nạp ${newTotal}円. Vui lòng nạp thêm ${120 - newTotal}円.`);
                        }
                      }}
                      className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg cursor-pointer transition-all"
                    >
                      + Nạp 100円
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => {
                      if (vendingMoney >= 120) {
                        const change = vendingMoney - 120;
                        setVendingMessage(`🎉 Xuất lon nước ngon lành! Tiền thói trả lại: ${change}円.`);
                        setVendingMoney(0);
                      } else {
                        setVendingMessage(`❌ Chưa đủ tiền! Cần nạp ít nhất 120円 (hiện có ${vendingMoney}円).`);
                      }
                    }}
                    className="p-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>🥤 Bấm mua lon nước (120円)</span>
                    <ChevronRight size={16} />
                  </button>

                  <button
                    onClick={() => {
                      if (vendingMoney > 0) {
                        setVendingMessage(`🔄 Hủy thao tác! Trả lại toàn bộ tiền nạp: ${vendingMoney}円.`);
                        setVendingMoney(0);
                      } else {
                        setVendingMessage(`Không có tiền để hoàn trả.`);
                      }
                    }}
                    className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>❌ Nút Hủy (取消ボタン)</span>
                    <RefreshCw size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 20.2 ================= */}
        {activeTab20 === '20.2' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50/40 p-4 rounded-r-xl">
              <span className="text-[10px] font-extrabold uppercase text-indigo-600 tracking-wider">SGK 20.2</span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">20.2 フローチャート (Sơ đồ thuật toán / Flowchart)</h3>
              <p className="text-slate-700 text-sm leading-relaxed mt-2 select-text font-serif italic">
                「アルゴリズムを図形と矢印で表現したものをフローチャート(流れ図)と言い，直観的な理解のために使われます．」
              </p>
              <div className="mt-3 text-xs text-slate-600 bg-white/80 p-3 rounded-xl border border-slate-200 leading-relaxed">
                <span className="font-bold text-indigo-600">Dịch nghĩa:</span> Việc biểu diễn thuật toán bằng các hình vẽ và mũi tên được gọi là **Flowchart (Sơ đồ lưu đồ)**, dùng để hiểu thuật toán một cách trực quan.
              </div>
            </div>

            {/* Flowchart Symbol Table */}
            <div>
              <h4 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <Sparkles size={16} className="text-indigo-600" />
                Các ký hiệu Flowchart chuẩn SGK (図112)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border border-slate-200 rounded-xl bg-white text-center">
                  <div className="w-16 h-8 mx-auto bg-indigo-100 border border-indigo-400 rounded-full flex items-center justify-center font-bold text-xs text-indigo-800 mb-2">
                    開始 / 終了
                  </div>
                  <h5 className="font-bold text-xs text-slate-800">Hình Ovan (端子)</h5>
                  <p className="text-[11px] text-slate-500 mt-1">Bắt đầu hoặc Kết thúc</p>
                </div>

                <div className="p-4 border border-slate-200 rounded-xl bg-white text-center">
                  <div className="w-16 h-8 mx-auto bg-emerald-100 border border-emerald-400 rounded flex items-center justify-center font-bold text-xs text-emerald-800 mb-2">
                    処理
                  </div>
                  <h5 className="font-bold text-xs text-slate-800">Hình Chữ nhật (処理)</h5>
                  <p className="text-[11px] text-slate-500 mt-1">Thao tác tính toán / Gán biến</p>
                </div>

                <div className="p-4 border border-slate-200 rounded-xl bg-white text-center">
                  <div className="w-12 h-8 mx-auto bg-amber-100 border border-amber-400 rotate-45 flex items-center justify-center font-bold text-[10px] text-amber-800 mb-2">
                    <span className="-rotate-45">判断</span>
                  </div>
                  <h5 className="font-bold text-xs text-slate-800 mt-2">Hình Thoi (判断)</h5>
                  <p className="text-[11px] text-slate-500 mt-1">Rẽ nhánh điều kiện (Đúng/Sai)</p>
                </div>

                <div className="p-4 border border-slate-200 rounded-xl bg-white text-center">
                  <div className="w-16 h-8 mx-auto flex items-center justify-center font-bold text-indigo-600 text-lg mb-2">
                    ↓ / →
                  </div>
                  <h5 className="font-bold text-xs text-slate-800">Đường mũi tên (線/矢印)</h5>
                  <p className="text-[11px] text-slate-500 mt-1">Chỉ hướng luồng xử lý</p>
                </div>
              </div>
            </div>

            {/* Sum Flowchart Demo (図113) */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-900 text-white font-mono text-xs">
              <span className="text-[10px] font-extrabold text-indigo-400 uppercase block mb-2">Mô phỏng Flowchart tính tổng từ 0 đến 10 (図113):</span>
              <div className="space-y-1.5 text-slate-300 font-sans text-xs">
                <p>1. [Bắt đầu] → Gán <code className="text-emerald-400 font-mono">sum = 0, i = 0</code></p>
                <p>2. [Xử lý] → <code className="text-emerald-400 font-mono">sum = sum + i</code></p>
                <p>3. [Xử lý] → <code className="text-emerald-400 font-mono">i = i + 1</code></p>
                <p>4. [Phán đoán] → Nếu <code className="text-emerald-400 font-mono">i &lt;= 10</code> thì quay lại Bước 2; Nếu không thì xuống [Kết thúc].</p>
                <p className="font-extrabold text-emerald-400 pt-2 font-mono text-sm">👉 Kết quả sum cuối cùng = 55</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 20.3 ================= */}
        {activeTab20 === '20.3' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Header intro */}
            <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50/40 p-4 rounded-r-xl">
              <span className="text-[10px] font-extrabold uppercase text-indigo-600 tracking-wider">SGK 20.3</span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">20.3 ソーティング (Thuật toán Sắp xếp - Sorting)</h3>
              <p className="text-slate-700 text-sm leading-relaxed mt-2 select-text font-serif italic">
                「ソーティングとは小さいものから順に，または逆に大きいものから順にデータを並べ替えることです．」
              </p>
              <div className="mt-3 text-xs text-slate-600 bg-white/80 p-3 rounded-xl border border-slate-200 leading-relaxed">
                <span className="font-bold text-indigo-600">Dịch nghĩa:</span> Sắp xếp (Sorting) là việc hoán đổi thứ tự dữ liệu theo chiều tăng dần từ nhỏ đến lớn (昇順) hoặc giảm dần từ lớn đến nhỏ (降順). Con người có thể nhìn toàn cục cùng lúc, nhưng máy tính **chỉ có thể so sánh 2 dữ liệu tại một thời điểm**!
              </div>
            </div>

            {/* SECTION 1: SUMMARY OF 6 SORTING ALGORITHMS */}
            <div className="space-y-4">
              <h4 className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
                <Sparkles size={16} className="text-indigo-600" />
                1. Tóm tắt & So sánh 6 Thuật toán Sắp xếp trong SGK
              </h4>

              {/* Comparison Summary Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm">
                <table className="w-full text-xs text-left text-slate-700">
                  <thead className="bg-slate-100 text-slate-800 font-extrabold uppercase text-[10px] border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3">Tên tiếng Nhật / Anh</th>
                      <th className="px-4 py-3">Tên tiếng Việt</th>
                      <th className="px-4 py-3">Nguyên lý hoạt động chính</th>
                      <th className="px-4 py-3 text-center">Độ phức tạp (TB)</th>
                      <th className="px-4 py-3 text-center">Độ ổn định</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white font-medium">
                    <tr className="hover:bg-slate-50/80">
                      <td className="px-4 py-3 font-bold text-indigo-900">バブルソート (Bubble)</td>
                      <td className="px-4 py-3 text-indigo-700 font-bold">Nổi bọt</td>
                      <td className="px-4 py-3">So sánh từng cặp phần tử liền kề, đổi chỗ để đưa phần tử nhỏ/lớn nổi dần về đầu/cuối.</td>
                      <td className="px-4 py-3 text-center font-mono font-bold text-rose-600">O(n²)</td>
                      <td className="px-4 py-3 text-center font-bold text-emerald-600">Ổn định (Stable)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="px-4 py-3 font-bold text-indigo-900">選択法 (Selection)</td>
                      <td className="px-4 py-3 text-indigo-700 font-bold">Chọn trực tiếp</td>
                      <td className="px-4 py-3">Duyệt tìm phần tử nhỏ nhất trong phần chưa sắp xếp rồi đổi chỗ về vị trí đầu.</td>
                      <td className="px-4 py-3 text-center font-mono font-bold text-rose-600">O(n²)</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-400">Không ổn định</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="px-4 py-3 font-bold text-indigo-900">挿入ソート (Insertion)</td>
                      <td className="px-4 py-3 text-indigo-700 font-bold">Chèn trực tiếp</td>
                      <td className="px-4 py-3">Rút từng phần tử chưa sắp xếp chèn vào đúng vị trí thích hợp trong dãy đã sắp xếp trước đó.</td>
                      <td className="px-4 py-3 text-center font-mono font-bold text-rose-600">O(n²)</td>
                      <td className="px-4 py-3 text-center font-bold text-emerald-600">Ổn định (Stable)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 bg-amber-50/30">
                      <td className="px-4 py-3 font-bold text-amber-900">クイックソート (Quick)</td>
                      <td className="px-4 py-3 text-amber-700 font-bold">Sắp xếp nhanh</td>
                      <td className="px-4 py-3">Chọn giá trị chốt (pivot), phân chia dãy thành 2 nhóm nhỏ hơn & lớn hơn pivot, sắp xếp đệ quy. Nhanh nhất thực tế!</td>
                      <td className="px-4 py-3 text-center font-mono font-bold text-emerald-700">O(n log n)</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-400">Không ổn định</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="px-4 py-3 font-bold text-indigo-900">シェルソート (Shell)</td>
                      <td className="px-4 py-3 text-indigo-700 font-bold">Sắp xếp Shell</td>
                      <td className="px-4 py-3">Cải tiến của Insertion sort bằng cách chia dãy thành các nhóm theo khoảng cách gap h để chèn trước.</td>
                      <td className="px-4 py-3 text-center font-mono font-bold text-amber-600">O(n<sup>1.3</sup>)</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-400">Không ổn định</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="px-4 py-3 font-bold text-indigo-900">マージソート (Merge)</td>
                      <td className="px-4 py-3 text-indigo-700 font-bold">Sắp xếp trộn</td>
                      <td className="px-4 py-3">Chia đôi dãy thành các nửa nhỏ (Chia để trị), sắp xếp đệ quy từng nửa rồi trộn (merge) lại thành dãy hoàn chỉnh.</td>
                      <td className="px-4 py-3 text-center font-mono font-bold text-emerald-700">O(n log n)</td>
                      <td className="px-4 py-3 text-center font-bold text-emerald-600">Ổn định (Stable)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Detailed Breakdown Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/30">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-700">1. バブルソート</span>
                  <h5 className="font-bold text-xs text-slate-800 mt-2">Bubble Sort (Nổi bọt)</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    So sánh từng cặp kề nhau từ phải qua trái. Nếu sai thứ tự thì đổi chỗ. Phần tử nhỏ nhất sẽ "nổi" dần lên vị trí đầu tiên.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">2. 選択法</span>
                  <h5 className="font-bold text-xs text-slate-800 mt-2">Selection Sort (Chọn)</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Duyệt toàn bộ mảng tìm phần tử nhỏ nhất, sau đó đổi chỗ nó với phần tử đầu tiên của dãy chưa sắp xếp. Lặp lại cho đến hết.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-purple-100 bg-purple-50/30">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-700">3. 挿入ソート</span>
                  <h5 className="font-bold text-xs text-slate-800 mt-2">Insertion Sort (Chèn)</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Coi phần tử đầu đã sắp xếp. Lấy phần tử kế tiếp chèn vào đúng vị trí thích hợp trong đoạn đã sắp xếp (như xếp bài trên tay).
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 2: INTERACTIVE DEMO VISUALIZER */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/30 mt-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200/80">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
                    <Play size={16} className="text-indigo-600" fill="currentColor" />
                    2. Mô phỏng Trực quan thuật toán sắp xếp (Mảng ban đầu: [40, 20, 30, 10])
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">Chọn thuật toán muốn xem và bấm nút bắt đầu để theo dõi diễn biến từng bước.</p>
                </div>

                {/* Algorithm Selector Buttons */}
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
                    <button
                      onClick={() => {
                        setSelectedAlgo('bubble');
                        resetSortVisualizer();
                      }}
                      disabled={isSorting}
                      className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                        selectedAlgo === 'bubble' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Bubble Sort
                    </button>
                    <button
                      onClick={() => {
                        setSelectedAlgo('selection');
                        resetSortVisualizer();
                      }}
                      disabled={isSorting}
                      className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                        selectedAlgo === 'selection' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Selection Sort
                    </button>
                    <button
                      onClick={() => {
                        setSelectedAlgo('insertion');
                        resetSortVisualizer();
                      }}
                      disabled={isSorting}
                      className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                        selectedAlgo === 'insertion' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Insertion Sort
                    </button>
                  </div>

                  <div className="flex gap-1.5">
                    <button
                      onClick={runSortingAlgorithm}
                      disabled={isSorting}
                      className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow cursor-pointer transition-all disabled:opacity-50 flex items-center gap-1"
                    >
                      <Play size={14} fill="currentColor" />
                      <span>{isSorting ? 'Đang chạy...' : '▶️ Bắt đầu'}</span>
                    </button>
                    <button
                      onClick={resetSortVisualizer}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 transition-all cursor-pointer flex items-center gap-1"
                    >
                      <RefreshCw size={14} />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Interactive Array Cards */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                {sortArray.map((val, idx) => {
                  const isI = activeI === idx;
                  const isJ = activeJ === idx;
                  const isMin = activeMin === idx;

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border text-center transition-all duration-300 shadow-sm ${
                        isMin
                          ? 'bg-emerald-100 border-emerald-400 scale-105 shadow-md ring-2 ring-emerald-300'
                          : isJ
                          ? 'bg-amber-100 border-amber-400 scale-105 shadow-md ring-2 ring-amber-300'
                          : isI
                          ? 'bg-indigo-100 border-indigo-400'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <span className="text-[10px] font-extrabold text-slate-400 block font-mono">a[{idx}]</span>
                      <span className="text-2xl font-black text-slate-800 mt-1 block">{val}</span>
                      
                      <div className="min-h-[18px] mt-1 flex flex-col items-center justify-center gap-0.5">
                        {isMin && <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-200/80 px-1.5 py-0.5 rounded">Min mới</span>}
                        {isJ && !isMin && <span className="text-[9px] font-extrabold text-amber-700 bg-amber-200/80 px-1.5 py-0.5 rounded">Đang so (j)</span>}
                        {isI && !isJ && !isMin && <span className="text-[9px] font-extrabold text-indigo-700 bg-indigo-200/80 px-1.5 py-0.5 rounded">Vị trí (i)</span>}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Step Logs Terminal Box */}
              <div className="p-4 bg-slate-900 text-slate-300 font-mono text-xs rounded-xl max-h-[200px] overflow-y-auto space-y-1 shadow-inner">
                {sortLogs.length === 0 ? (
                  <div className="text-slate-500 italic flex items-center gap-2">
                    <Info size={14} />
                    <span>Bấm "▶️ Bắt đầu" để chạy mô phỏng từng bước cho thuật toán {selectedAlgo.toUpperCase()}...</span>
                  </div>
                ) : (
                  sortLogs.map((log, index) => (
                    <div key={index} className="border-l-2 border-indigo-500 pl-2 leading-relaxed">
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 20.4 ================= */}
        {activeTab20 === '20.4' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50/40 p-4 rounded-r-xl">
              <span className="text-[10px] font-extrabold uppercase text-indigo-600 tracking-wider">SGK 20.4</span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">20.4 ヒューマンインタフェースの設計 (Thiết kế Giao diện Người - Máy)</h3>
              <p className="text-slate-700 text-sm leading-relaxed mt-2 select-text font-serif italic">
                「ヒューマンインタフェース，もしくはユーザインタフェースとは，ユーザに対するコンピュータなどの機械の使い勝手のことを言います．」
              </p>
              <div className="mt-3 text-xs text-slate-600 bg-white/80 p-3 rounded-xl border border-slate-200 leading-relaxed">
                <span className="font-bold text-indigo-600">Dịch nghĩa:</span> **Human Interface (Giao diện người - máy)** hay **User Interface (UI)** chính là **Tính tiện dụng / Dễ sử dụng (使い勝手)** của máy tính đối với người dùng. Dù xử lý bên trong tốt đến đâu, nếu thao tác nhập phiền phức thì cũng không thể gọi là chương trình tốt.
              </div>
            </div>

            {/* Ben Shneiderman's 8 Golden Rules */}
            <div>
              <h4 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <Sparkles size={16} className="text-indigo-600" />
                8 Nguyên tắc vàng thiết kế UI của Ben Shneiderman (シュナイダーマンの8項目)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { num: 1, name: '1. 統一性', desc: 'Màu sắc, bố cục, thao tác nhất quán.' },
                  { num: 2, name: '2. ショートカット', desc: 'Có phím tắt cho tính năng thường dùng.' },
                  { num: 3, name: '3. フィードバック', desc: 'Phản hồi nhanh trạng thái hệ thống.' },
                  { num: 4, name: '4. 結果の反映', desc: 'Hiển thị kết quả rõ ràng, dễ hiểu.' },
                  { num: 5, name: '5. エラー対策', desc: 'Báo lỗi, nguyên nhân & hướng khắc phục.' },
                  { num: 6, name: '6. 取り消し操作', desc: 'Cho phép khôi phục / hoàn tác (Undo).' },
                  { num: 7, name: '7. 制御性', desc: 'Cho phép tùy chỉnh (Customize) theo ý người dùng.' },
                  { num: 8, name: '8. 負担軽減', desc: 'Giảm tải cho trí nhớ (không phải nhẩm/ghi chép).' },
                ].map((rule) => (
                  <div key={rule.num} className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-indigo-300 transition-all">
                    <span className="font-extrabold text-xs text-indigo-600 block">{rule.name}</span>
                    <p className="text-xs text-slate-600 mt-1">{rule.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prototyping & Multimodal UI */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50/50 border border-purple-100 rounded-xl">
                <h5 className="font-extrabold text-sm text-purple-900">プロトタイピング (Prototyping)</h5>
                <p className="text-xs text-purple-700 mt-1 leading-relaxed">
                  Thiết kế UI thường không thể làm hoàn hảo ngay từ đầu, mà phải tạo bản mẫu thử nghiệm, sửa đổi liên tục thông qua quá trình **Thử nghiệm & Sửa sai (試行錯誤)**.
                </p>
              </div>

              <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                <h5 className="font-extrabold text-sm text-blue-900">マルチモーダル (Multimodal UI)</h5>
                <p className="text-xs text-blue-700 mt-1 leading-relaxed">
                  Kết hợp nhiều phương thức tương tác: Âm thanh, cử chỉ (身振り), màn hình đắm chìm VR (没入型表示装置), thiết bị xúc giác (触覚装置), và khứu giác (嗅覚装置).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB MINITEST ================= */}
        {activeTab20 === 'minitest' && (
          <div className="flex flex-col gap-8 animate-fadeIn">
            {/* IT Passport Practice Question */}
            <div className="border border-indigo-200 rounded-2xl p-5 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-indigo-600 text-white rounded-full">
                  練習問題 - IT Passport (H22 Thu)
                </span>
                <h3 className="text-sm font-extrabold text-slate-800">Tính giá trị biến x sau thủ tục vòng lặp</h3>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4 text-xs text-slate-700 select-text leading-relaxed font-mono">
                [手続き]{"\n"}
                ① x に 2 を代入し，y に 3 を代入する．{"\n"}
                ② y の値から 1 を引いたものを y に代入する．{"\n"}
                ③ x の値と y の値を加えたものを x に代入する．{"\n"}
                ④ y が 1 でないなら手続き②に戻り，y=1 なら処理を終了する．
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {[
                  { opt: 'ア', text: '4' },
                  { opt: 'イ', text: '5' },
                  { opt: 'ウ', text: '7' },
                  { opt: 'エ', text: '8' },
                ].map((item) => (
                  <button
                    key={item.opt}
                    onClick={() => {
                      setSelectedItOption(item.opt);
                      setShowItExplanation(true);
                    }}
                    className={`p-3 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                      selectedItOption === item.opt
                        ? (item.opt === 'イ' ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' : 'bg-rose-600 text-white border-rose-600 shadow-sm')
                        : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span className="mr-2 font-extrabold">({item.opt})</span>
                    {item.text}
                  </button>
                ))}
              </div>

              {showItExplanation && (
                <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-xs text-indigo-900 animate-fadeIn">
                  <div className="font-extrabold text-sm mb-1 flex items-center gap-1.5 text-indigo-950">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    ĐÁP ÁN ĐÚNG: (イ) 5
                  </div>
                  <div className="mt-2 space-y-1 text-slate-700 leading-relaxed font-mono text-[11px]">
                    <p>• Ban đầu: x = 2, y = 3</p>
                    <p>• Lần 1: y = 3 - 1 = 2 → x = 2 + 2 = 4 → y != 1 nên lặp tiếp</p>
                    <p>• Lần 2: y = 2 - 1 = 1 → x = 4 + 1 = 5 → y == 1 nên KẾT THÚC!</p>
                    <p className="font-bold text-emerald-700">👉 Giá trị cuối cùng của x = 5.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Mini Test 1 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-base font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <Languages size={18} className="text-indigo-600" />
                ミニテスト 1 (Mini Test 1)
              </h3>

              {/* Vocab check */}
              <div className="mb-6">
                <span className="text-xs font-bold text-slate-600 block mb-2">Mục I: Từ vựng Bài 20 (Bấm xem đọc & nghĩa)</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
                  {l20Mini1Vocab.map((item, idx) => {
                    const isRevealed = mini1Revealed20.includes(idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          setMini1Revealed20(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
                        }}
                        className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                          isRevealed ? 'bg-indigo-50 border-indigo-300 text-indigo-900 shadow-sm' : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                        }`}
                      >
                        <span className="font-extrabold text-xs block">{item.term}</span>
                        {isRevealed ? (
                          <div className="mt-1.5 text-[10px] text-indigo-700 animate-fadeIn font-semibold">
                            <div>{item.reading}</div>
                            <div className="font-bold">{item.meaning}</div>
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-400 mt-1 block">Bấm mở</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Translation 1 J-V */}
              <div className="mb-6 bg-slate-50 p-4 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục II: Dịch câu Nhật → Việt (Thuật toán sắp xếp)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  「アルゴリズムは問題毎に検討しなければなりませんが，重要でよく使われる問題には有効なアルゴリズムが提案されています．よく使われる問題の代表的なものとしてソーティングがあります．」
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  rows={2}
                  value={mini1Trans1_20}
                  onChange={(e) => setMini1Trans1_20(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini1ShowAnswer1_20(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini1ShowAnswer1_20 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini1ShowAnswer1_20 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án gợi ý:</span>
                    Thuật toán phải được xem xét tùy theo từng bài toán, nhưng đối với các bài toán quan trọng và hay được sử dụng thì những thuật toán hiệu quả đã được đề xuất. Một trong những đại diện tiêu biểu cho bài toán hay dùng chính là phép sắp xếp (Sorting).
                  </div>
                )}
              </div>

              {/* Translation 2 V-J */}
              <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục III: Dịch câu Việt → Nhật (Định nghĩa thuật toán)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  "Quy trình xử lý cơ bản của một chương trình được gọi là giải thuật. Mục đích của giải thuật là làm rõ các bước nhập, xuất, xử lý."
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Nhật của bạn..."
                  rows={2}
                  value={mini1Trans2_20}
                  onChange={(e) => setMini1Trans2_20(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini1ShowAnswer2_20(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini1ShowAnswer2_20 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini1ShowAnswer2_20 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án SGK gốc:</span>
                    <p className="font-serif italic font-bold text-slate-800">
                      「プログラムの基本的な処理の手順をアルゴリズムと言います．アルゴリズムの目的は入力，出力，処理手順を明確にすることです．」
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Mini Test 2 */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-base font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <Languages size={18} className="text-indigo-600" />
                ミニテスト 2 (Mini Test 2)
              </h3>

              {/* Vocab check 2 */}
              <div className="mb-6">
                <span className="text-xs font-bold text-slate-600 block mb-2">Mục I: Từ vựng Mini Test 2</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
                  {l20Mini2Vocab.map((item, idx) => {
                    const isRevealed = mini2Revealed20.includes(idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          setMini2Revealed20(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
                        }}
                        className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                          isRevealed ? 'bg-purple-50 border-purple-300 text-purple-900 shadow-sm' : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                        }`}
                      >
                        <span className="font-extrabold text-xs block">{item.term}</span>
                        {isRevealed ? (
                          <div className="mt-1.5 text-[10px] text-purple-700 animate-fadeIn font-semibold">
                            <div>{item.reading}</div>
                            <div className="font-bold">{item.meaning}</div>
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-400 mt-1 block">Bấm mở</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Translation 1 J-V 2 */}
              <div className="mb-6 bg-slate-50 p-4 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục II: Dịch câu Nhật → Việt (Giao diện người - máy UI)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  「新たなプログラムを作成するときに，効率的な内部処理とともに考慮しなければならない重要な要素はヒューマンインタフェースです．ヒューマンインタフェース，もしくはユーザインタフェースとは，ユーザに対するコンピュータなどの機械の使い勝手のことを言います．」
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  rows={2}
                  value={mini2Trans1_20}
                  onChange={(e) => setMini2Trans1_20(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini2ShowAnswer1_20(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini2ShowAnswer1_20 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini2ShowAnswer1_20 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án gợi ý:</span>
                    Khi tạo một chương trình mới, cùng với việc xử lý nội bộ hiệu quả, yếu tố quan trọng phải xem xét chính là giao diện người dùng (Human Interface). Giao diện người dùng hay User Interface có nghĩa là tính tiện dụng của máy móc như máy tính đối với người dùng.
                  </div>
                )}
              </div>

              {/* Translation 2 V-J 2 */}
              <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục III: Dịch câu Việt → Nhật (Tạo bản mẫu Prototyping)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  "Nhìn chung thiết kế của giao diện người máy nhiều trường hợp không thể tiến hành đầy đủ khi xem xét giải thuật, do vậy thường thì người ta sẽ làm thử chương trình thử nghiệm, sau đó chỉnh sửa các vấn đề tồn tại. Việc thiết kế trên cơ sở lỗi phát hiện khi thử như thế này được gọi là sự tạo nguyên mẫu."
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Nhật của bạn..."
                  rows={2}
                  value={mini2Trans2_20}
                  onChange={(e) => setMini2Trans2_20(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini2ShowAnswer2_20(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini2ShowAnswer2_20 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini2ShowAnswer2_20 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án SGK gốc:</span>
                    <p className="font-serif italic font-bold text-slate-800">
                      「一般に，ヒューマンインタフェースの設計は，アルゴリズム検討時では十分に行えないことが多く，試作プログラムを作ってみて問題点を修正していくというやり方になります．このように試行錯誤を前提に設計していくことをプロトタイピングと呼びます．」
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
