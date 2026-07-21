import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, BookOpen, Cpu, Code, 
  Sparkles, CheckCircle2, Play, Languages, Box, ChevronRight
} from 'lucide-react';

interface Lesson19TheoryProps {
  onClose: () => void;
}

export const Lesson19Theory: React.FC<Lesson19TheoryProps> = ({ onClose }) => {
  const [activeTab19, setActiveTab19] = useState<'19.1' | '19.2' | '19.3' | '19.4' | 'minitest'>('19.1');

  // Interactive Code Execution Demo for 19.3
  const [arrIndexDemo, setArrIndexDemo] = useState<number>(0);
  const [ifNumber, setIfNumber] = useState<number>(10);
  const [forStep, setForStep] = useState<number>(0);

  // IT Passport State
  const [selectedItOption, setSelectedItOption] = useState<string | null>(null);
  const [showItExplanation, setShowItExplanation] = useState<boolean>(false);

  // Object Oriented Class Inheritance Demo
  const [activeClassTab, setActiveClassTab] = useState<'animal' | 'mammal' | 'human'>('human');

  // Minitest 1 State
  const l19Mini1Vocab = useMemo(() => [
    { term: '人工知能', reading: 'じんこうちのう', meaning: 'trí tuệ nhân tạo (AI)' },
    { term: '事務処理', reading: 'じむしょり', meaning: 'xử lý công việc văn phòng' },
    { term: '定型的', reading: 'ていてきてき', meaning: 'mang tính định hình / định kiểu' },
    { term: '属する', reading: 'ぞくする', meaning: 'thuộc về / phụ thuộc' },
    { term: '内部動作', reading: 'ないぶどうさ', meaning: 'hoạt động bên trong' },
    { term: '読み込む', reading: 'よみこむ', meaning: 'nạp / đọc dữ liệu vào' },
    { term: '逐次', reading: 'ちくじ', meaning: 'tuần tự / nối tiếp' },
    { term: '蓄える', reading: 'たくわえる', meaning: 'tích trữ / lưu trữ' },
    { term: '機械語', reading: 'きかいご', meaning: 'ngôn ngữ máy' },
    { term: '低級言語', reading: 'ていきゅうげんご', meaning: 'ngôn ngữ cấp thấp' }
  ], []);

  const [mini1Revealed19, setMini1Revealed19] = useState<number[]>([]);
  const [mini1Trans1_19, setMini1Trans1_19] = useState('');
  const [mini1ShowAnswer1_19, setMini1ShowAnswer1_19] = useState(false);
  const [mini1Trans2_19, setMini1Trans2_19] = useState('');
  const [mini1ShowAnswer2_19, setMini1ShowAnswer2_19] = useState(false);

  // Minitest 2 State
  const l19Mini2Vocab = useMemo(() => [
    { term: 'コンパイラ', reading: 'compiler', meaning: 'trình biên dịch' },
    { term: '変数', reading: 'へんすう', meaning: 'biến số' },
    { term: '代入', reading: 'だいにゅう', meaning: 'phép gán giá trị' },
    { term: '配列', reading: 'はいれつ', meaning: 'mảng dữ liệu' },
    { term: '添え字', reading: 'そえじ', meaning: 'chỉ số mảng (index)' },
    { term: '演算子', reading: 'えんざんし', meaning: 'toán tử (+, -, *, /)' },
    { term: 'オブジェクト指向', reading: 'オブジェクトしこう', meaning: 'hướng đối tượng' },
    { term: 'クラス', reading: 'class', meaning: 'lớp (khuôn mẫu)' },
    { term: 'メソッド', reading: 'method', meaning: 'phương thức (hành vi)' },
    { term: 'カプセル化', reading: 'カプセルか', meaning: 'đóng gói (encapsulation)' }
  ], []);

  const [mini2Revealed19, setMini2Revealed19] = useState<number[]>([]);
  const [mini2Trans1_19, setMini2Trans1_19] = useState('');
  const [mini2ShowAnswer1_19, setMini2ShowAnswer1_19] = useState(false);
  const [mini2Trans2_19, setMini2Trans2_19] = useState('');
  const [mini2ShowAnswer2_19, setMini2ShowAnswer2_19] = useState(false);

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
            LÝ THUYẾT BÀI 19
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            プログラミングの基礎 (Cơ sở lập trình)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab19('19.1')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab19 === '19.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <BookOpen size={16} />
          19.1 Ngôn ngữ lập trình
        </button>
        <button
          onClick={() => setActiveTab19('19.2')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab19 === '19.2' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Cpu size={16} />
          19.2 Hoạt động bên trong
        </button>
        <button
          onClick={() => setActiveTab19('19.3')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab19 === '19.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Code size={16} />
          19.3 Xử lý cơ bản & Giả lập
        </button>
        <button
          onClick={() => setActiveTab19('19.4')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab19 === '19.4' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Box size={16} />
          19.4 Hướng đối tượng
        </button>
        <button
          onClick={() => setActiveTab19('minitest')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab19 === 'minitest' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Languages size={16} />
          Bài tập & Mini Tests
        </button>
      </div>

      {/* Main Tab Content */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 md:p-8 shadow-xl shadow-slate-100/40 min-h-[500px]">

        {/* ================= TAB 19.1 ================= */}
        {activeTab19 === '19.1' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50/40 p-4 rounded-r-xl">
              <span className="text-[10px] font-extrabold uppercase text-indigo-600 tracking-wider">SGK 19.1</span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">19.1 プログラミング言語 (Ngôn ngữ lập trình)</h3>
              <p className="text-slate-700 text-sm leading-relaxed mt-2 select-text font-serif italic">
                「プログラミング言語とは，コンピュータに対する命令記述の集まりであって，人工的な文法規則を持ちます．たとえば，SQLもプログラミング言語の1つと考えられます．」
              </p>
              <div className="mt-3 text-xs text-slate-600 bg-white/80 p-3 rounded-xl border border-slate-200 leading-relaxed">
                <span className="font-bold text-indigo-600">Dịch nghĩa:</span> Ngôn ngữ lập trình là tập hợp các mô tả câu lệnh dành cho máy tính, có các quy tắc ngữ pháp nhân tạo. Ví dụ, SQL cũng được coi là một loại ngôn ngữ lập trình.
              </div>
            </div>

            {/* Classification: Procedural vs Non-procedural */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-b from-blue-50/40 to-white hover:border-blue-300 transition-all">
                <span className="text-[10px] font-extrabold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full uppercase">Phân loại 1</span>
                <h4 className="font-extrabold text-base text-slate-800 mt-2">手続型言語 (Ngôn ngữ thủ tục)</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Mô tả chi tiết <strong>Làm thế nào / Quy trình (How)</strong> để đạt kết quả. Chi phối đa số ngôn ngữ hiện nay.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 text-xs font-extrabold bg-blue-600 text-white rounded-lg">C++</span>
                  <span className="px-2.5 py-1 text-xs font-extrabold bg-blue-600 text-white rounded-lg">Java</span>
                  <span className="px-2.5 py-1 text-xs font-extrabold bg-blue-600 text-white rounded-lg">C</span>
                  <span className="px-2.5 py-1 text-xs font-extrabold bg-blue-600 text-white rounded-lg">Python</span>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-b from-purple-50/40 to-white hover:border-purple-300 transition-all">
                <span className="text-[10px] font-extrabold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full uppercase">Phân loại 2</span>
                <h4 className="font-extrabold text-base text-slate-800 mt-2">非手続型言語 (Ngôn ngữ phi thủ tục)</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Mô tả <strong>Cái gì / Mục tiêu (What)</strong> cần lấy ra mà không cần quan tâm chi tiết từng bước. Thường đặc hóa chuyên biệt.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 text-xs font-extrabold bg-purple-600 text-white rounded-lg">SQL</span>
                </div>
              </div>
            </div>

            {/* Language Comparisons */}
            <div>
              <h4 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <Sparkles size={16} className="text-indigo-600" />
                Đặc điểm các ngôn ngữ lập trình tiêu biểu trong SGK
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                  <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">C++</span>
                  <h5 className="font-bold text-sm text-slate-800 mt-2">Đa năng / Cấp thấp hơn</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Tính vạn năng cao (汎用性が高い). Tuy nhiên chương trình biên dịch phải chuẩn bị riêng theo từng OS (Windows, Mac...).
                  </p>
                </div>

                <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                  <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Java</span>
                  <h5 className="font-bold text-sm text-slate-800 mt-2">Độc lập OS (OS依存しない)</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Cú pháp giống C++. Chạy tốt trên Windows, MacOS, điện thoại... Tốc độ thực thi chậm hơn C++ một chút.
                  </p>
                </div>

                <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                  <span className="text-[10px] font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">HTML & JS</span>
                  <h5 className="font-bold text-sm text-slate-800 mt-2">Trang web (ホームページ)</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    HTML dùng mô tả giao diện web nhưng không thể tính toán. Để tính toán hay rẽ nhánh phải kết hợp với JavaScript.
                  </p>
                </div>

                <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                  <span className="text-[10px] font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">XML</span>
                  <h5 className="font-bold text-sm text-slate-800 mt-2">Mở rộng HTML</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Là bản mở rộng của HTML, dùng như hệ thống CSDL trên trang web, có vai trò rất quan trọng trong kinh doanh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 19.2 ================= */}
        {activeTab19 === '19.2' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50/40 p-4 rounded-r-xl">
              <span className="text-[10px] font-extrabold uppercase text-indigo-600 tracking-wider">SGK 19.2</span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">19.2 プログラムの内部動作 (Hoạt động bên trong của chương trình)</h3>
              <p className="text-slate-700 text-sm leading-relaxed mt-2 select-text font-serif italic">
                「プログラムは内部的にはメモリに記憶されますが，メモリ上ではデータもプログラムも区別がありません．CPU はメモリ上のデータをアドレスに従って 1 つずつ読み込み，逐次的に処理を継続します．」
              </p>
              <div className="mt-3 text-xs text-slate-600 bg-white/80 p-3 rounded-xl border border-slate-200 leading-relaxed">
                <span className="font-bold text-indigo-600">Dịch nghĩa:</span> Chương trình được ghi nhớ bên trong bộ nhớ (Memory). Trên bộ nhớ, dữ liệu và chương trình không có sự phân biệt. CPU đọc dữ liệu trên bộ nhớ từng cái một theo địa chỉ (address) và thực hiện xử lý một cách tuần tự (逐次的に処理).
              </div>
            </div>

            {/* Architecture Concept Diagram */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg">
              <h4 className="text-sm font-extrabold text-indigo-300 mb-4 flex items-center gap-2">
                <Cpu size={18} /> Sơ đồ biên dịch & giải thích chương trình (図105)
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
                {/* Step 1 */}
                <div className="p-4 bg-slate-800/90 border border-slate-700 rounded-xl">
                  <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 uppercase">1. Mã nguồn</span>
                  <h5 className="font-extrabold text-sm text-white mt-2">高級言語 (Ngôn ngữ cấp cao)</h5>
                  <p className="text-[11px] text-slate-400 mt-1">Java, C++, Python...</p>
                  <code className="block mt-2 p-2 bg-slate-950 rounded text-emerald-300 font-mono text-[11px]">
                    c = a + b;
                  </code>
                </div>

                {/* Compiler Arrow */}
                <div className="flex flex-col items-center justify-center p-2">
                  <span className="text-xs font-bold text-purple-300 bg-purple-900/60 px-3 py-1 rounded-full border border-purple-700 mb-1">
                    コンパイラ (Compiler)
                  </span>
                  <span className="text-[11px] text-slate-400">Tự động dịch (自動的に翻訳)</span>
                  <ChevronRight size={24} className="text-indigo-400 hidden md:block mt-1" />
                </div>

                {/* Step 2 */}
                <div className="p-4 bg-slate-800/90 border border-slate-700 rounded-xl">
                  <span className="text-[10px] font-extrabold text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800 uppercase">2. Mã máy</span>
                  <h5 className="font-extrabold text-sm text-white mt-2">低級言語 / 機械語 (Mã máy)</h5>
                  <p className="text-[11px] text-slate-400 mt-1">Phụ thuộc dòng CPU cụ thể</p>
                  <code className="block mt-2 p-2 bg-slate-950 rounded text-amber-300 font-mono text-[11px]">
                    01001010 11000101
                  </code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 19.3 ================= */}
        {activeTab19 === '19.3' && (
          <div className="flex flex-col gap-8 animate-fadeIn">
            <div>
              <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full uppercase">Mục 19.3</span>
              <h3 className="text-lg font-extrabold text-slate-800 mt-1">19.3 高級言語の基本処理 (Các xử lý cơ bản của Ngôn ngữ cấp cao)</h3>
            </div>

            {/* 1. 代入 (Phép gán) */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-indigo-50/30 to-white">
              <h4 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs">1</span>
                代入 (Phép gán giá trị vào Biến 変数)
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Biến (変数) là chiếc hộp chứa giá trị (tương tự ô Excel A1, B1). Dấu <code className="text-indigo-700 font-bold bg-white px-1.5 py-0.5 rounded border">=</code> có nghĩa là gán giá trị ở vế phải vào biến ở vế trái (không phải bằng nhau trong toán học). Dấu <code className="text-indigo-700 font-bold bg-white px-1.5 py-0.5 rounded border">;</code> ngắt câu.
              </p>

              {/* Code simulation box */}
              <div className="mt-4 p-4 bg-slate-900 text-white rounded-xl font-mono text-xs grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                  <div className="text-slate-400 text-[10px] mb-2 font-sans font-bold">MÃ NGUỒN CÂU LỆNH:</div>
                  <pre className="text-emerald-400 leading-relaxed font-bold">
                    a = 3;{"\n"}
                    b = 5;{"\n"}
                    c = a + b;
                  </pre>
                </div>
                <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 font-sans text-xs">
                  <div className="font-bold text-indigo-300 mb-2">Trạng thái các hộp chứa (Biến):</div>
                  <div className="flex gap-3 text-center">
                    <div className="flex-1 bg-slate-900 p-2 rounded border border-indigo-500/50">
                      <span className="text-[10px] text-slate-400 block font-bold">Biến a</span>
                      <span className="text-lg font-bold text-emerald-400">3</span>
                    </div>
                    <div className="flex-1 bg-slate-900 p-2 rounded border border-indigo-500/50">
                      <span className="text-[10px] text-slate-400 block font-bold">Biến b</span>
                      <span className="text-lg font-bold text-emerald-400">5</span>
                    </div>
                    <div className="flex-1 bg-slate-900 p-2 rounded border border-purple-500/50">
                      <span className="text-[10px] text-slate-400 block font-bold">Biến c</span>
                      <span className="text-lg font-bold text-purple-400">8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. 配列 (Mảng) */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-purple-50/30 to-white">
              <h4 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs">2</span>
                配列 (Mảng dữ liệu & Chỉ số 添え字)
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Khi cần quản lý hàng nghìn dữ liệu, ta dùng Mảng <code className="text-purple-700 font-bold bg-white px-1.5 py-0.5 rounded border">a[0], a[1], a[2]</code>. Trong ngoặc vuông là Chỉ số (添え字 - index), bắt đầu từ số 0.
              </p>

              {/* Array Index Simulator */}
              <div className="mt-4 p-4 bg-white border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-700 block mb-2">Mô phỏng gán chỉ số biến:</span>
                <div className="flex flex-wrap gap-2 mb-3">
                  {['a[0] = 3', 'a[1] = 5', 'i = 0', 'a[i + 2] = a[i] + a[i + 1]'].map((cmd, idx) => (
                    <button
                      key={idx}
                      onClick={() => setArrIndexDemo(idx)}
                      className={`px-3 py-1.5 text-xs font-bold font-mono rounded-lg border transition-all cursor-pointer ${
                        arrIndexDemo === idx ? 'bg-purple-600 text-white border-purple-600' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
                <div className="p-3 bg-purple-50 border border-purple-100 rounded-lg text-xs text-purple-950 font-mono">
                  {arrIndexDemo === 0 && "👉 Gán giá trị 3 vào phần tử đầu tiên a[0]."}
                  {arrIndexDemo === 1 && "👉 Gán giá trị 5 vào phần tử thứ hai a[1]."}
                  {arrIndexDemo === 2 && "👉 Gán biến chỉ số i = 0."}
                  {arrIndexDemo === 3 && "👉 a[0 + 2] tức là a[2] = a[0] + a[1] = 3 + 5 = 8. Phần tử a[2] mang giá trị 8!"}
                </div>
              </div>
            </div>

            {/* 3. 四則演算 (4 phép toán) */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-amber-50/30 to-white">
              <h4 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs">3</span>
                四則演算 (4 phép toán & Thứ tự ưu tiên)
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Ký tự nhân/chia dùng <code className="text-amber-700 font-bold bg-white px-1.5 py-0.5 rounded border">*</code> và <code className="text-amber-700 font-bold bg-white px-1.5 py-0.5 rounded border">/</code>. Ký tự <code className="text-amber-700 font-bold bg-white px-1.5 py-0.5 rounded border">%</code> tính phần dư.
                Thứ tự ưu tiên: <strong>1. ( ) → 2. * / % → 3. + -</strong>.
              </p>

              {/* Calculator Priority Demo */}
              <div className="mt-4 p-4 bg-slate-900 text-white rounded-xl font-mono text-xs">
                <div className="text-amber-400 font-bold mb-2">Bài toán tính SGK: (1 + 2 * (3 + 4) - 5) % 6 + 7</div>
                <div className="space-y-1 text-slate-300 text-[11px] font-sans">
                  <p>• Bước 1: Tính trong ngoặc trong cùng (3 + 4) = 7 👉 <code className="text-emerald-400 font-mono">(1 + 2 * 7 - 5) % 6 + 7</code></p>
                  <p>• Bước 2: Nhân trước 2 * 7 = 14 👉 <code className="text-emerald-400 font-mono">(1 + 14 - 5) % 6 + 7</code></p>
                  <p>• Bước 3: Cộng trừ trong ngoặc (15 - 5) = 10 👉 <code className="text-emerald-400 font-mono">10 % 6 + 7</code></p>
                  <p>• Bước 4: Chia lấy dư 10 % 6 = 4 👉 <code className="text-emerald-400 font-mono">4 + 7</code></p>
                  <p className="font-extrabold text-sm text-emerald-400 pt-1">👉 Kết quả cuối cùng = 11</p>
                </div>
              </div>
            </div>

            {/* 4. 条件判断 (if - else) */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-emerald-50/30 to-white">
              <h4 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs">4</span>
                条件判断 (Rẽ nhánh điều kiện if - else)
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Đánh giá điều kiện đúng (真) hay sai (偽). Dấu so sánh bằng ghi <code className="text-emerald-700 font-bold bg-white px-1.5 py-0.5 rounded border">==</code>, khác nhau ghi <code className="text-emerald-700 font-bold bg-white px-1.5 py-0.5 rounded border">!=</code>.
              </p>

              {/* Interactive IF-ELSE Runner */}
              <div className="mt-4 p-4 bg-white border border-slate-200 rounded-xl flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 w-full">
                  <label className="text-xs font-bold text-slate-700 block mb-1">Thử nhập số a để kiểm tra Chẵn/Lẻ:</label>
                  <input
                    type="number"
                    value={ifNumber}
                    onChange={(e) => setIfNumber(Number(e.target.value))}
                    className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg font-bold"
                  />
                </div>
                <div className="flex-1 w-full bg-slate-900 text-white p-3 rounded-xl font-mono text-xs">
                  <div>a = {ifNumber};</div>
                  <div>rem = a % 2; <span className="text-slate-400">({ifNumber % 2})</span></div>
                  <div className={ifNumber % 2 === 1 ? "text-emerald-400 font-bold" : "text-slate-400"}>
                    if (rem == 1) &#123; // In "奇数 (Số lẻ)" &#125;
                  </div>
                  <div className={ifNumber % 2 === 0 ? "text-emerald-400 font-bold" : "text-slate-400"}>
                    else &#123; // In "偶数 (Số chẵn)" &#125;
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-800 font-sans text-xs font-bold text-emerald-300">
                    👉 Kết quả: Số {ifNumber} là {ifNumber % 2 === 1 ? "奇数 (Số lẻ)" : "偶数 (Số chẵn)"}!
                  </div>
                </div>
              </div>
            </div>

            {/* 5. 繰り返し (for loop) */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-blue-50/30 to-white">
              <h4 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs">5</span>
                繰り返し (Vòng lặp for)
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Lặp lại câu lệnh khi điều kiện thỏa mãn. Cú pháp: <code className="text-blue-700 font-bold bg-white px-1.5 py-0.5 rounded border">for (Khởi tạo; Điều kiện; Tăng dần)</code>.
              </p>

              {/* Interactive For Loop Simulator */}
              <div className="mt-4 p-4 bg-slate-900 text-white rounded-xl font-mono text-xs">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-2 font-sans">
                  <span className="text-slate-400 text-[10px] font-bold">MÔ PHỎNG VÒNG LẶP FOR SGK:</span>
                  <button
                    onClick={() => setForStep(prev => (prev + 2 > 10 ? 0 : prev + 2))}
                    className="px-2.5 py-1 bg-blue-600 text-white rounded text-xs font-bold cursor-pointer hover:bg-blue-500"
                  >
                    <Play size={12} className="inline mr-1" /> Bước tiếp (i + 2)
                  </button>
                </div>
                <pre className="text-blue-300 font-bold">
                  for (i = 0; i &lt;= 10; i = i + 2) &#123;{"\n"}
                  {"  "}// In ra giá trị của i{"\n"}
                  &#125;
                </pre>
                <div className="mt-3 p-2.5 bg-slate-800 rounded-lg font-sans text-xs text-emerald-400 font-bold flex items-center justify-between">
                  <span>Giá trị biến i hiện tại: <span className="text-white text-sm font-mono">{forStep}</span></span>
                  <span>Chuỗi giá trị xuất ra: [0, 2, 4, 6, 8, 10]</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ================= TAB 19.4 ================= */}
        {activeTab19 === '19.4' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50/40 p-4 rounded-r-xl">
              <span className="text-[10px] font-extrabold uppercase text-indigo-600 tracking-wider">SGK 19.4</span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">19.4 オブジェクト指向 (Lập trình hướng đối tượng - OOP)</h3>
              <p className="text-slate-700 text-sm leading-relaxed mt-2 select-text font-serif italic">
                「オブジェクト指向とは，従来のプログラミングのような『こと』を中心にするのではなく，『もの』を中心にするという考え方です．」
              </p>
              <div className="mt-3 text-xs text-slate-600 bg-white/80 p-3 rounded-xl border border-slate-200 leading-relaxed">
                <span className="font-bold text-indigo-600">Dịch nghĩa:</span> Hướng đối tượng là tư duy tập trung vào **"Vật / Đối tượng (もの)"** thay vì tập trung vào **"Hành động / Sự việc (こと)"** như lập trình truyền thống.
              </div>
            </div>

            {/* OOP Key Concepts Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase">Khái niệm 1</span>
                <h4 className="font-extrabold text-sm text-slate-800 mt-2">クラス (Class / Lớp)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Là tập hợp khuôn mẫu các đối tượng có chung tính chất (VD: Lớp "ヒト - Con người").
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 uppercase">Khái niệm 2</span>
                <h4 className="font-extrabold text-sm text-slate-800 mt-2">インスタンス (Instance)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Thực thể đối tượng cụ thể mang giá trị thực (VD: "Tanaka", cao 180cm, nặng 70kg).
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                <span className="text-[10px] font-extrabold text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-100 uppercase">Khái niệm 3</span>
                <h4 className="font-extrabold text-sm text-slate-800 mt-2">メソッド (Method)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Hành vi / Động tác của đối tượng (VD: nói, cười, thở, ngủ...).
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                <span className="text-[10px] font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 uppercase">Khái niệm 4</span>
                <h4 className="font-extrabold text-sm text-slate-800 mt-2">カプセル化 (Đóng gói)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Ẩn giấu thông tin bên trong. Thay đổi ở lớp này không làm ảnh hưởng lớp khác, giữ tính nhất quán (整合性).
                </p>
              </div>
            </div>

            {/* Inheritance Visualizer (図110) */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/40">
              <h4 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <Sparkles size={16} className="text-indigo-600" />
                Mô phỏng quan hệ Kế thừa (継承 - Inheritance) (図110)
              </h4>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { id: 'animal', label: 'Lớp Cấp cao: Động vật (動物クラス)' },
                  { id: 'mammal', label: 'Lớp Trung gian: Động vật vú (哺乳類クラス)' },
                  { id: 'human', label: 'Lớp Cấp dưới: Con người (ヒトクラス)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveClassTab(item.id as any)}
                    className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      activeClassTab === item.id ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed">
                {activeClassTab === 'animal' && (
                  <div>
                    <span className="font-bold text-indigo-700 block text-sm mb-1">上位クラス: 動物クラス (Lớp Động vật)</span>
                    <p>• Chứa các thuộc tính & hành vi chung nhất cho mọi động vật: Thở (息をする), Cần dinh dưỡng...</p>
                  </div>
                )}
                {activeClassTab === 'mammal' && (
                  <div>
                    <span className="font-bold text-purple-700 block text-sm mb-1">中位クラス: 哺乳類クラス (Lớp Động vật vú)</span>
                    <p>• Kế thừa tất cả tính chất của Lớp Động vật + bổ sung thuộc tính riêng: Nuôi con bằng sữa, Thân nhiệt ổn định...</p>
                  </div>
                )}
                {activeClassTab === 'human' && (
                  <div>
                    <span className="font-bold text-emerald-700 block text-sm mb-1">下位クラス: ヒトクラス (Lớp Con người)</span>
                    <p>• Kế thừa toàn bộ tính chất của Động vật & Động vật vú + bổ sung hành vi riêng (Phương thức): Nói chuyện (話す), Cười (笑う), Tên, Chiều cao, Cân nặng...</p>
                    <p className="mt-2 text-indigo-700 font-bold">👉 Nhờ Kế thừa (継承), khi lập trình Con người ta chỉ cần viết phần khác biệt nhỏ nhất mà không phải định nghĩa lại từ đầu!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB MINITEST ================= */}
        {activeTab19 === 'minitest' && (
          <div className="flex flex-col gap-8 animate-fadeIn">
            {/* IT Passport Practice Question */}
            <div className="border border-indigo-200 rounded-2xl p-5 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-indigo-600 text-white rounded-full">
                  練習問題 - IT Passport (H22 Thu)
                </span>
                <h3 className="text-sm font-extrabold text-slate-800">Đặc điểm ngôn ngữ Java</h3>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4 text-xs text-slate-700 select-text leading-relaxed font-serif italic">
                「Java 言語に関する記述として，適切なものはどれか．」
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {[
                  { opt: 'ア', text: 'Webページを記述するためのマークアップ言語である．' },
                  { opt: 'イ', text: '科学技術向けに開発された言語である．' },
                  { opt: 'ウ', text: 'コンピュータの機種や OS に依存しないソフトウェアが開発できる，オブジェクト指向型の言語である．' },
                  { opt: 'エ', text: '事務処理向けに開発された言語である．' },
                ].map((item) => (
                  <button
                    key={item.opt}
                    onClick={() => {
                      setSelectedItOption(item.opt);
                      setShowItExplanation(true);
                    }}
                    className={`p-3 text-xs font-bold rounded-xl border text-left transition-all cursor-pointer ${
                      selectedItOption === item.opt
                        ? (item.opt === 'ウ' ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' : 'bg-rose-600 text-white border-rose-600 shadow-sm')
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
                    ĐÁP ÁN ĐÚNG: (ウ)
                  </div>
                  <div className="mt-2 space-y-1 text-slate-700 leading-relaxed">
                    <p>• Java là ngôn ngữ lập trình hướng đối tượng (オブジェクト指向型), có khả năng phát triển phần mềm không phụ thuộc vào thiết bị hay hệ điều hành (OS に依存しない).</p>
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
                <span className="text-xs font-bold text-slate-600 block mb-2">Mục I: Từ vựng Bài 19 (Bấm xem đọc & nghĩa)</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
                  {l19Mini1Vocab.map((item, idx) => {
                    const isRevealed = mini1Revealed19.includes(idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          setMini1Revealed19(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
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
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục II: Dịch câu Nhật → Việt (Chương trình máy tính)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  「コンピュータのソフトウェアにはワープロ，表計算などがありますが，これらは，プログラムという命令の集まりによって記述されています．プログラムの基本は比較的単純であり，それを論理的に組み立てていくことで複雑な作業を実現することができます．」
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  rows={2}
                  value={mini1Trans1_19}
                  onChange={(e) => setMini1Trans1_19(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini1ShowAnswer1_19(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini1ShowAnswer1_19 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini1ShowAnswer1_19 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án gợi ý:</span>
                    Phần mềm máy tính có phần mềm xử lý văn bản (Word), tính toán bảng tính (Excel)... những phần mềm này được viết bằng tập hợp các câu lệnh gọi là chương trình. Cơ bản của chương trình tương đối đơn giản, bằng cách lắp ghép chúng một cách logic ta có thể thực hiện được các công việc phức tạp.
                  </div>
                )}
              </div>

              {/* Translation 2 V-J */}
              <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục III: Dịch câu Việt → Nhật (Định nghĩa ngôn ngữ lập trình)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  "Ngôn ngữ lập trình là tập hợp các lệnh viết cho máy tính, có quy tắc ngữ pháp nhân tạo. Thí dụ, SQL cũng được coi là một ngôn ngữ lập trình."
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Nhật của bạn..."
                  rows={2}
                  value={mini1Trans2_19}
                  onChange={(e) => setMini1Trans2_19(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini1ShowAnswer2_19(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini1ShowAnswer2_19 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini1ShowAnswer2_19 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án SGK gốc:</span>
                    <p className="font-serif italic font-bold text-slate-800">
                      「プログラミング言語とは，コンピュータに対する命令記述の集まりであって，人工的な文法規則を持ちます．たとえば，SQLもプログラミング言語の1つと考えられます．」
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
                  {l19Mini2Vocab.map((item, idx) => {
                    const isRevealed = mini2Revealed19.includes(idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          setMini2Revealed19(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
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
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục II: Dịch câu Nhật → Việt (Rẽ nhánh điều kiện)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  「四則演算以外で最も重要なプログラムの機能の 1 つが条件判断です．条件判断と言っても複雑な判断ができるわけではなく，真か偽かを簡単に判定できるものに限られ，具体的には等しいかどうかや大小関係の判断になります．」
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  rows={2}
                  value={mini2Trans1_19}
                  onChange={(e) => setMini2Trans1_19(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini2ShowAnswer1_19(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini2ShowAnswer1_19 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini2ShowAnswer1_19 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án gợi ý:</span>
                    Ngoài 4 phép toán cơ bản, một trong những chức năng quan trọng nhất của chương trình là phán đoán điều kiện. Nói là phán đoán điều kiện không có nghĩa là thực hiện được phán đoán phức tạp, mà giới hạn ở việc dễ dàng đánh giá Đúng (真) hay Sai (偽), cụ thể là phán đoán xem có bằng nhau hay không hoặc mối quan hệ lớn nhỏ.
                  </div>
                )}
              </div>

              {/* Translation 2 V-J 2 */}
              <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục III: Dịch câu Việt → Nhật (Hướng đối tượng)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  "Trong ngôn ngữ thủ tục, người ta viết quy trình bằng ngữ pháp đơn giản, khái niệm hướng đối tượng đã được đề xuất ra để có thể sử dụng lại chương trình đã viết."
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Nhật của bạn..."
                  rows={2}
                  value={mini2Trans2_19}
                  onChange={(e) => setMini2Trans2_19(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini2ShowAnswer2_19(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini2ShowAnswer2_19 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini2ShowAnswer2_19 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án SGK gốc:</span>
                    <p className="font-serif italic font-bold text-slate-800">
                      「手続型の言語では，単純な文法で手順を記述しますが，一度作成したプログラムの再利用を容易にするためにオブジェクト指向という概念が考案されました．」
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
