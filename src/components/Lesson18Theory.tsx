import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, BookOpen, Layers, Database, 
  Code, Filter, ArrowUpDown, Link as LinkIcon, CheckCircle2, XCircle, Sparkles, Check, Play, Languages
} from 'lucide-react';

interface Lesson18TheoryProps {
  onClose: () => void;
}

export const Lesson18Theory: React.FC<Lesson18TheoryProps> = ({ onClose }) => {
  const [activeTab18, setActiveTab18] = useState<'18.1' | '18.2' | '18.3' | '18.4' | 'minitest'>('18.1');

  // Data for Lesson 18 Tables
  const gakuseiboData = useMemo(() => [
    { id: '0500124', name: '香川', birthplace: '東京都' },
    { id: '0500125', name: '田中香', birthplace: '千葉県' },
    { id: '0500126', name: '佐藤', birthplace: '神奈川県' },
    { id: '0500127', name: '鈴木', birthplace: '東京都' },
  ], []);

  const seisekiData = useMemo(() => [
    { id: '0500124', name: '香川', english: 85, math: 90 },
    { id: '0500125', name: '田中香', english: 70, math: 88 },
    { id: '0500126', name: '佐藤', english: 92, math: 75 },
    { id: '0500127', name: '鈴木', english: 60, math: 95 },
  ], []);

  // SQL Operation Classifier for 18.1
  const [ddlQuiz, setDdlQuiz] = useState<{[key: string]: 'DDL' | 'DML' | 'DCL'}>({});

  const ddlQuizItems = useMemo(() => [
    { id: 'q1', text: '表の定義 (Tạo/định nghĩa bảng)', category: 'DDL' },
    { id: 'q2', text: '表の削除 (Xóa cấu trúc bảng)', category: 'DDL' },
    { id: 'q3', text: '読み書きの制限 (Hạn chế quyền đọc/ghi)', category: 'DML' },
    { id: 'q4', text: '照会 (Truy vấn - SELECT)', category: 'DCL' },
    { id: 'q5', text: '挿入 (Chèn dữ liệu - INSERT)', category: 'DCL' },
    { id: 'q6', text: '更新 (Cập nhật - UPDATE)', category: 'DCL' },
    { id: 'q7', text: '削除 (Xóa dữ liệu - DELETE)', category: 'DCL' },
  ], []);

  // SQL Query Presets for Playground
  const [activeQueryIndex, setActiveQueryIndex] = useState<number>(0);

  const sqlPresets = useMemo(() => [
    {
      id: 'p1',
      title: 'Phép chiếu (射影): Lấy danh sách quê quán',
      query: "SELECT 出身地\nFROM 学籍簿",
      type: '18.2',
      explanation: "Rút ra cột '出身地' từ bảng '学籍簿'. Không hiển thị các cột khác.",
      resultRows: [
        { birthplace: '東京都' },
        { birthplace: '千葉県' },
        { birthplace: '神奈川県' },
        { birthplace: '東京都' }
      ]
    },
    {
      id: 'p2',
      title: "Phép chọn (選択): Lấy dữ liệu người ở '東京都'",
      query: "SELECT *\nFROM 学籍簿\nWHERE 出身地 = '東京都'",
      type: '18.2',
      explanation: "Dùng '*' để chọn tất cả các trường. Ký tự '東京都' bắt buộc bọc trong nháy đơn (').",
      resultRows: [
        { id: '0500124', name: '香川', birthplace: '東京都' },
        { id: '0500127', name: '鈴木', birthplace: '東京都' }
      ]
    },
    {
      id: 'p3',
      title: 'Tính toán trong SELECT (式): Tổng điểm Anh + Toán',
      query: "SELECT 氏名, 英語＋数学\nFROM 成績表",
      type: '18.2',
      explanation: "SELECT cho phép viết biểu thức tính toán giữa các trường (英語 + 数学).",
      resultRows: [
        { name: '香川', total: 175 },
        { name: '田中香', total: 158 },
        { name: '佐藤', total: 167 },
        { name: '鈴木', total: 155 }
      ]
    },
    {
      id: 'p4',
      title: "Wildcard '%': Tên kết thúc bằng '香' (LIKE '%香')",
      query: "SELECT 氏名, 出身地\nFROM 学籍簿\nWHERE 氏名 LIKE '%香'",
      type: '18.3',
      explanation: "'%' đại diện cho bất kỳ chuỗi ký tự nào (như Joker). Dùng 'LIKE' thay vì '='.",
      resultRows: [
        { name: '香川', birthplace: '東京都' },
        { name: '田中香', birthplace: '千葉県' }
      ]
    },
    {
      id: 'p5',
      title: "Điều kiện AND: Kết thúc '香' VÀ quê '千葉県'",
      query: "SELECT 氏名 FROM 学籍簿\nWHERE 氏名 LIKE '%香' AND 出身地='千葉県'",
      type: '18.3',
      explanation: "Yêu cầu thỏa mãn đồng thời cả 2 điều kiện tên và quê quán.",
      resultRows: [
        { name: '田中香' }
      ]
    },
    {
      id: 'p6',
      title: "Điều kiện OR: Quê '神奈川県' HOẶC Mã SV >= '0500126'",
      query: "SELECT 氏名 FROM 学籍簿\nWHERE 出身地='神奈川県' OR 学生証番号>='0500126'",
      type: '18.3',
      explanation: "Dùng '>=' (không dùng ≧ hay =>). Chỉ cần thỏa mãn 1 trong 2 điều kiện.",
      resultRows: [
        { name: '佐藤' },
        { name: '鈴木' }
      ]
    },
    {
      id: 'p7',
      title: "BETWEEN AND: Mã SV từ '0500124' đến '0500126'",
      query: "SELECT 氏名 FROM 学籍簿\nWHERE 学生証番号 BETWEEN '0500124' AND '0500126'",
      type: '18.3',
      explanation: "Tương đương với (学生証番号 >= '0500124' AND 学生証番号 <= '0500126').",
      resultRows: [
        { name: '香川' },
        { name: '田中香' },
        { name: '佐藤' }
      ]
    },
    {
      id: 'p8',
      title: "IN (...): Quê ở '東京都' hoặc '神奈川県'",
      query: "SELECT 氏名 FROM 学籍簿\nWHERE 出身地 IN ('東京都', '神奈川県')",
      type: '18.3',
      explanation: "Tương đương với (出身地 = '東京都' OR 出身地 = '神奈川県').",
      resultRows: [
        { name: '香川' },
        { name: '佐藤' },
        { name: '鈴木' }
      ]
    },
    {
      id: 'p9',
      title: "Sắp xếp ORDER BY 英語 ASC (Tăng dần)",
      query: "SELECT 氏名, 英語\nFROM 成績表\nORDER BY 英語 ASC",
      type: '18.4',
      explanation: "ASC = ascend (昇順 - Sắp xếp nhỏ đến lớn).",
      resultRows: [
        { name: '鈴木', english: 60 },
        { name: '田中香', english: 70 },
        { name: '香川', english: 85 },
        { name: '佐藤', english: 92 }
      ]
    },
    {
      id: 'p10',
      title: "Sắp xếp ORDER BY 英語 DESC (Giảm dần)",
      query: "SELECT 氏名, 英語\nFROM 成績表\nORDER BY 英語 DESC",
      type: '18.4',
      explanation: "DESC = descend (降順 - Sắp xếp lớn đến nhỏ).",
      resultRows: [
        { name: '佐藤', english: 92 },
        { name: '香川', english: 85 },
        { name: '田中香', english: 70 },
        { name: '鈴木', english: 60 }
      ]
    },
    {
      id: 'p11',
      title: "Phép nối (結合): Nối bảng 学籍簿 và 成績表",
      query: "SELECT 学籍簿.氏名, 英語, 出身地\nFROM 学籍簿, 成績表\nWHERE 学籍簿.学生証番号＝成績表.学生証番号",
      type: '18.4',
      explanation: "Chỉ định điều kiện '学籍簿.学生証番号 = 成績表.学生証番号' trong WHERE. Viết '学籍簿.氏名' để làm rõ tên bảng.",
      resultRows: [
        { name: '香川', english: 85, birthplace: '東京都' },
        { name: '田中香', english: 70, birthplace: '千葉県' },
        { name: '佐藤', english: 92, birthplace: '神奈川県' },
        { name: '鈴木', english: 60, birthplace: '東京都' }
      ]
    }
  ], []);

  // IT Passport Problem State
  const [selectedItOption, setSelectedItOption] = useState<string | null>(null);
  const [showItExplanation, setShowItExplanation] = useState<boolean>(false);

  // Minitest 1 State (Lesson 18)
  const l18Mini1Vocab = useMemo(() => [
    { term: '改行', reading: 'かいぎょう', meaning: 'xuống dòng' },
    { term: '記述', reading: 'きじゅつ', meaning: 'mô tả / trình bày' },
    { term: 'フィールド', reading: 'field', meaning: 'trường dữ liệu' },
    { term: '代わりに', reading: 'かわりに', meaning: 'thay vì / thay cho' },
    { term: 'シングルクォート', reading: 'single quote', meaning: 'dấu nháy đơn' },
    { term: '人工言語', reading: 'じんこうげんご', meaning: 'ngôn ngữ nhân tạo' },
    { term: '挿入', reading: 'そうにゅう', meaning: 'chèn vào' },
    { term: 'データ制御', reading: 'データせいぎょ', meaning: 'điều khiển dữ liệu' },
    { term: '更新', reading: 'こうしん', meaning: 'cập nhật' },
    { term: '削除', reading: 'さくじょ', meaning: 'xóa' }
  ], []);

  const [mini1Revealed18, setMini1Revealed18] = useState<number[]>([]);
  const [mini1Trans1_18, setMini1Trans1_18] = useState('');
  const [mini1ShowAnswer1_18, setMini1ShowAnswer1_18] = useState(false);
  const [mini1Trans2_18, setMini1Trans2_18] = useState('');
  const [mini1ShowAnswer2_18, setMini1ShowAnswer2_18] = useState(false);

  // Minitest 2 State (Lesson 18)
  const l18Mini2Vocab = useMemo(() => [
    { term: '囲む', reading: 'かこむ', meaning: 'bọc / bao quanh' },
    { term: '等しい', reading: 'ひとしい', meaning: 'bằng nhau / tương đương' },
    { term: 'ワイルドカード', reading: 'wildcard', meaning: 'ký tự đại diện' },
    { term: '順序', reading: 'じゅんじょ', meaning: 'thứ tự' },
    { term: '置き換える', reading: 'おきかえる', meaning: 'thay thế' },
    { term: '構文', reading: 'こうぶん', meaning: 'cú pháp' },
    { term: '要素名', reading: 'ようそめい', meaning: 'tên phần tử' },
    { term: '中身', reading: 'なかみ', meaning: 'nội dung bên trong' },
    { term: '文字列', reading: 'もじれつ', meaning: 'chuỗi ký tự' },
    { term: '並べ替える', reading: 'ならべかえる', meaning: 'sắp xếp / phân loại' }
  ], []);

  const [mini2Revealed18, setMini2Revealed18] = useState<number[]>([]);
  const [mini2Trans1_18, setMini2Trans1_18] = useState('');
  const [mini2ShowAnswer1_18, setMini2ShowAnswer1_18] = useState(false);
  const [mini2Trans2_18, setMini2Trans2_18] = useState('');
  const [mini2ShowAnswer2_18, setMini2ShowAnswer2_18] = useState(false);

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
            LÝ THUYẾT BÀI 18
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            SQL (Ngôn ngữ truy vấn CSDL)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation for Lesson 18 */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab18('18.1')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab18 === '18.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <BookOpen size={16} />
          18.1 SQL là gì & Phân loại
        </button>
        <button
          onClick={() => setActiveTab18('18.2')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab18 === '18.2' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Code size={16} />
          18.2 Cú pháp & 射影・選択
        </button>
        <button
          onClick={() => setActiveTab18('18.3')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab18 === '18.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Filter size={16} />
          18.3 Tìm kiếm điều kiện
        </button>
        <button
          onClick={() => setActiveTab18('18.4')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab18 === '18.4' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <ArrowUpDown size={16} />
          18.4 Sắp xếp & 18.5 結合
        </button>
        <button
          onClick={() => setActiveTab18('minitest')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab18 === 'minitest' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Languages size={16} />
          Bài tập & Mini Tests
        </button>
      </div>

      {/* Main Tab Content Container */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 md:p-8 shadow-xl shadow-slate-100/40 min-h-[500px]">

        {activeTab18 === '18.1' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Textbook Intro Section */}
            <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50/40 p-4 rounded-r-xl">
              <span className="text-[10px] font-extrabold uppercase text-indigo-600 tracking-wider">Khái niệm SGK (18.1)</span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">18.1 SQLとは (SQL là gì?)</h3>
              <p className="text-slate-700 text-sm leading-relaxed mt-2 select-text font-serif italic">
                「SQLとは，Structured Query Languageの頭文字をとったもので，直訳すると構造化された問い合わせ用の言語ということになります．データベースを操作するための命令の集まりであり，関係データベースを基本としています．したがって，関係データベースで学習した操作を実現できます．」
              </p>
              <div className="mt-3 text-xs text-slate-600 bg-white/80 p-3 rounded-xl border border-slate-200 leading-relaxed">
                <span className="font-bold text-indigo-600">Dịch nghĩa:</span> SQL là chữ viết tắt của <strong>Structured Query Language</strong> (Ngôn ngữ truy vấn có cấu trúc). Đây là tập hợp các câu lệnh để thao tác với cơ sở dữ liệu và dựa trên nền tảng cơ sở dữ liệu quan hệ (RDBMS). Do đó, nó thực hiện được tất cả các thao tác đã học trong phần CSDL quan hệ.
              </div>
            </div>

            {/* 3 Categories of SQL Operations */}
            <div>
              <h4 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Layers size={18} className="text-indigo-600" />
                3 nhóm thao tác SQL trong giáo trình
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* Category 1 */}
                <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-b from-blue-50/40 to-white flex flex-col justify-between hover:border-blue-300 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full uppercase">1. データ定義</span>
                      <span className="text-xs font-bold text-slate-400">DDL</span>
                    </div>
                    <h5 className="font-extrabold text-base text-slate-800">Định nghĩa dữ liệu</h5>
                    <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-center gap-1.5 font-medium"><Check size={14} className="text-blue-500" /> 表の定義 (Tạo/định nghĩa bảng)</li>
                      <li className="flex items-center gap-1.5 font-medium"><Check size={14} className="text-blue-500" /> 表の削除 (Xóa bảng)</li>
                    </ul>
                  </div>
                </div>

                {/* Category 2 */}
                <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-b from-amber-50/40 to-white flex flex-col justify-between hover:border-amber-300 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full uppercase">2. データ操作</span>
                      <span className="text-xs font-bold text-slate-400">DML</span>
                    </div>
                    <h5 className="font-extrabold text-base text-slate-800">Thao tác dữ liệu</h5>
                    <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-center gap-1.5 font-medium"><Check size={14} className="text-amber-500" /> 読み書きの制限 (Hạn chế quyền đọc/ghi)</li>
                    </ul>
                  </div>
                </div>

                {/* Category 3 */}
                <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-b from-emerald-50/40 to-white flex flex-col justify-between hover:border-emerald-300 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase">3. データ制御</span>
                      <span className="text-xs font-bold text-slate-400">DCL</span>
                    </div>
                    <h5 className="font-extrabold text-base text-slate-800">Điều khiển dữ liệu</h5>
                    <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-center gap-1.5 font-medium"><Check size={14} className="text-emerald-500" /> 照会 (Truy vấn - SELECT)</li>
                      <li className="flex items-center gap-1.5 font-medium"><Check size={14} className="text-emerald-500" /> 挿入 (Chèn - INSERT)</li>
                      <li className="flex items-center gap-1.5 font-medium"><Check size={14} className="text-emerald-500" /> 更新 (Cập nhật - UPDATE)</li>
                      <li className="flex items-center gap-1.5 font-medium"><Check size={14} className="text-emerald-500" /> 削除 (Xóa dữ liệu - DELETE)</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* RDBMS Examples Box */}
            <div className="p-4 bg-purple-50/50 border border-purple-100 rounded-2xl flex items-start gap-3">
              <span className="p-2 bg-purple-600 text-white rounded-xl shrink-0"><Database size={18} /></span>
              <div>
                <h5 className="text-sm font-extrabold text-purple-900">Phần mềm quản lý cơ sở dữ liệu tiêu biểu</h5>
                <p className="text-xs text-purple-700 mt-1 leading-relaxed">
                  Các phần mềm như <strong>Microsoft Access</strong> đều dựa trên CSDL quan hệ, có thể lưu trữ và thao tác dưới dạng file SQL. 
                  Ngoài ra, <strong>MySQL</strong> là một phần mềm SQL mã nguồn mở vô cùng phổ biến được dùng <strong>hoàn toàn miễn phí (無償で使える)</strong>.
                </p>
              </div>
            </div>

            {/* Interactive Classification Game */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
                    <Sparkles size={16} className="text-indigo-600" />
                    Thử thách: Phân loại câu lệnh SQL theo SGK
                  </h4>
                  <p className="text-xs text-slate-500">Hãy chọn đúng nhóm thao tác cho từng câu lệnh dưới đây.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ddlQuizItems.map((item) => {
                  const currentSelection = ddlQuiz[item.id];
                  const isCorrect = currentSelection === item.category;

                  return (
                    <div key={item.id} className="p-3.5 bg-white border border-slate-200 rounded-xl flex flex-col justify-between gap-2 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-xs text-slate-800">{item.text}</span>
                        {currentSelection && (
                          isCorrect 
                            ? <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full"><CheckCircle2 size={12} /> Chính xác</span>
                            : <span className="flex items-center gap-1 text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full"><XCircle size={12} /> Sai rồi</span>
                        )}
                      </div>

                      <div className="flex gap-1.5 mt-1">
                        {(['DDL', 'DML', 'DCL'] as const).map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setDdlQuiz(prev => ({ ...prev, [item.id]: cat }))}
                            className={`flex-1 py-1 px-2 text-[11px] font-bold rounded-lg border transition-all cursor-pointer ${
                              currentSelection === cat 
                                ? (cat === item.category ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-rose-600 text-white border-rose-600')
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {cat === 'DDL' ? '1. データ定義' : cat === 'DML' ? '2. データ操作' : '3. データ制御'}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab18 === '18.2' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Syntax Explanation */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-r from-slate-900 to-indigo-950 text-white shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Code className="text-indigo-400" size={20} />
                <h3 className="text-base font-extrabold text-white">18.2 SQL の基本構文 (Cú pháp cơ bản của SQL)</h3>
              </div>
              
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 my-3 font-mono text-sm tracking-wide text-indigo-300">
                <div><span className="text-purple-400 font-bold">SELECT</span> (項目，式)</div>
                <div><span className="text-purple-400 font-bold">FROM</span> (表)</div>
                <div><span className="text-purple-400 font-bold">WHERE</span> (条件)</div>
              </div>

              <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <p>• Các từ tiếng Anh như <code className="text-purple-300 font-bold">SELECT</code>, <code className="text-purple-300 font-bold">FROM</code>, <code className="text-purple-300 font-bold">WHERE</code> là từ khóa cố định được đăng ký trong SQL.</p>
                <p>• Trong ngoặc <code className="text-indigo-300 font-bold">( )</code> là các phần tử do người dùng chỉ định (tên trường, tên bảng, điều kiện).</p>
                <p>• Câu lệnh đọc từ trên xuống dưới, nhưng không bắt buộc xuống dòng, có thể gom thành 1 dòng.</p>
              </div>
            </div>

            {/* Display Original Sample Tables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-700 block mb-2">Bảng dữ liệu mẫu: 学籍簿 (Học bạ)</span>
                <table className="w-full text-xs text-left border-collapse bg-white border border-slate-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-indigo-50 border-b border-slate-200 font-bold text-indigo-900">
                      <th className="p-2">学生証番号</th>
                      <th className="p-2">氏名</th>
                      <th className="p-2">出身地</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gakuseiboData.map((row) => (
                      <tr key={row.id} className="border-b border-slate-100">
                        <td className="p-2 font-mono">{row.id}</td>
                        <td className="p-2 font-bold">{row.name}</td>
                        <td className="p-2">{row.birthplace}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-700 block mb-2">Bảng dữ liệu mẫu: 成績表 (Bảng điểm)</span>
                <table className="w-full text-xs text-left border-collapse bg-white border border-slate-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-indigo-50 border-b border-slate-200 font-bold text-indigo-900">
                      <th className="p-2">学生証番号</th>
                      <th className="p-2">氏名</th>
                      <th className="p-2">英語</th>
                      <th className="p-2">数学</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seisekiData.map((row) => (
                      <tr key={row.id} className="border-b border-slate-100">
                        <td className="p-2 font-mono">{row.id}</td>
                        <td className="p-2 font-bold">{row.name}</td>
                        <td className="p-2 text-indigo-600 font-bold">{row.english}</td>
                        <td className="p-2 text-purple-600 font-bold">{row.math}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Projection, Selection & Expression Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-indigo-100 bg-indigo-50/30 rounded-xl">
                <span className="text-[10px] font-extrabold text-indigo-600 uppercase bg-white border border-indigo-200 px-2 py-0.5 rounded-full">Phép chiếu</span>
                <h4 className="font-bold text-sm text-slate-800 mt-2">射影 (Projection)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Rút trích các cột/trường cụ thể từ bảng.</p>
                <code className="text-[11px] block mt-2 p-2 bg-white rounded border border-indigo-100 font-mono text-indigo-900 font-bold">
                  SELECT 出身地 FROM 学籍簿
                </code>
              </div>

              <div className="p-4 border border-indigo-100 bg-indigo-50/30 rounded-xl">
                <span className="text-[10px] font-extrabold text-indigo-600 uppercase bg-white border border-indigo-200 px-2 py-0.5 rounded-full">Phép chọn</span>
                <h4 className="font-bold text-sm text-slate-800 mt-2">選択 (Selection)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Dùng '*' lấy tất cả trường. Chuỗi '東京都' bọc trong nháy đơn (').</p>
                <code className="text-[11px] block mt-2 p-2 bg-white rounded border border-indigo-100 font-mono text-indigo-900 font-bold">
                  SELECT * FROM 学籍簿 WHERE 出身地 = '東京都'
                </code>
              </div>

              <div className="p-4 border border-indigo-100 bg-indigo-50/30 rounded-xl">
                <span className="text-[10px] font-extrabold text-indigo-600 uppercase bg-white border border-indigo-200 px-2 py-0.5 rounded-full">Biểu thức</span>
                <h4 className="font-bold text-sm text-slate-800 mt-2">式 (Expression)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Có thể thực hiện tính toán giữa các trường trong SELECT.</p>
                <code className="text-[11px] block mt-2 p-2 bg-white rounded border border-indigo-100 font-mono text-indigo-900 font-bold">
                  SELECT 氏名, 英語＋数学 FROM 成績表
                </code>
              </div>
            </div>

            {/* Interactive Query Runner for 18.2 */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h4 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <Play size={16} className="text-indigo-600" fill="currentColor" />
                Mô phỏng chạy câu lệnh SQL 18.2
              </h4>

              <div className="flex flex-wrap gap-2 mb-4">
                {sqlPresets.filter(p => p.type === '18.2').map((preset) => {
                  const idx = sqlPresets.findIndex(p => p.id === preset.id);
                  return (
                    <button
                      key={preset.id}
                      onClick={() => setActiveQueryIndex(idx)}
                      className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        activeQueryIndex === idx
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {preset.title.split(':')[0]}
                    </button>
                  );
                })}
              </div>

              {/* Code Box & Output */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col justify-between font-mono text-xs">
                  <div>
                    <div className="text-[10px] text-slate-400 border-b border-slate-800 pb-1 mb-2 font-sans flex justify-between">
                      <span>CÂU LỆNH SQL:</span>
                      <span className="text-indigo-400 font-bold">{sqlPresets[activeQueryIndex].title}</span>
                    </div>
                    <pre className="text-emerald-400 font-bold whitespace-pre-wrap">{sqlPresets[activeQueryIndex].query}</pre>
                  </div>
                  <div className="mt-4 text-[11px] font-sans text-slate-300 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                    <span className="font-bold text-indigo-300">Giải thích: </span>
                    {sqlPresets[activeQueryIndex].explanation}
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <span className="text-xs font-bold text-slate-700 block mb-2">BẢNG KẾT QUẢ XUẤT RA:</span>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-indigo-50 border-b border-indigo-100 text-indigo-900 font-extrabold">
                          {Object.keys(sqlPresets[activeQueryIndex].resultRows[0]).map((col) => (
                            <th key={col} className="p-2 border-r border-indigo-100 last:border-r-0">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sqlPresets[activeQueryIndex].resultRows.map((row: any, i: number) => (
                          <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                            {Object.values(row).map((val: any, j: number) => (
                              <td key={j} className="p-2 font-medium text-slate-800">{val}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab18 === '18.3' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Header Title */}
            <div>
              <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full uppercase">Mục 18.3</span>
              <h3 className="text-lg font-extrabold text-slate-800 mt-1">18.3 条件検索 (Tìm kiếm có điều kiện)</h3>
            </div>

            {/* Condition Rules Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Wildcard % */}
              <div className="p-4 border border-slate-200 rounded-xl bg-white hover:border-indigo-300 transition-all">
                <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">Wildcard %</span>
                <h4 className="font-extrabold text-sm text-slate-800 mt-2">LIKE '%香'</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Dấu <code className="text-purple-600 font-bold">%</code> đóng vai trò lá bài Joker đại diện cho mọi ký tự. Dùng từ khóa <code className="text-indigo-600 font-bold">LIKE</code> thay vì '='.
                </p>
              </div>

              {/* AND / OR */}
              <div className="p-4 border border-slate-200 rounded-xl bg-white hover:border-indigo-300 transition-all">
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">AND / OR</span>
                <h4 className="font-extrabold text-sm text-slate-800 mt-2">AND / OR</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Ghép điều kiện. Chú ý biểu diễn 'hoặc bằng' bằng <code className="text-blue-600 font-bold font-mono text-[11px] font-extrabold flex-inline">&gt;=</code> (không dùng ≧ hoặc =&gt;).
                </p>
              </div>

              {/* BETWEEN AND */}
              <div className="p-4 border border-slate-200 rounded-xl bg-white hover:border-indigo-300 transition-all">
                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">BETWEEN AND</span>
                <h4 className="font-extrabold text-sm text-slate-800 mt-2">BETWEEN A AND B</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Trích xuất trong khoảng từ A đến B. Tương đương ghép <code className="text-amber-700 font-bold">&gt;= A AND &lt;= B</code>.
                </p>
              </div>

              {/* IN */}
              <div className="p-4 border border-slate-200 rounded-xl bg-white hover:border-indigo-300 transition-all">
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">IN (...)</span>
                <h4 className="font-extrabold text-sm text-slate-800 mt-2">IN ('A', 'B')</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Kiểm tra phần tử nằm trong danh sách. Tương đương câu lệnh ghép nhiều dấu <code className="text-emerald-700 font-bold font-mono text-[11px]">OR</code>.
                </p>
              </div>

            </div>

            {/* Interactive Query Playground for 18.3 */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h4 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <Filter size={16} className="text-indigo-600" />
                Mô phỏng Chạy Tìm kiếm Điều kiện 18.3
              </h4>

              <div className="flex flex-wrap gap-2 mb-4">
                {sqlPresets.filter(p => p.type === '18.3').map((preset) => {
                  const idx = sqlPresets.findIndex(p => p.id === preset.id);
                  return (
                    <button
                      key={preset.id}
                      onClick={() => setActiveQueryIndex(idx)}
                      className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        activeQueryIndex === idx
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {preset.title.split(':')[0]}
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col justify-between font-mono text-xs">
                  <div>
                    <div className="text-[10px] text-slate-400 border-b border-slate-800 pb-1 mb-2 font-sans flex justify-between">
                      <span>CÂU LỆNH SQL:</span>
                      <span className="text-indigo-400 font-bold">{sqlPresets[activeQueryIndex].title}</span>
                    </div>
                    <pre className="text-emerald-400 font-bold whitespace-pre-wrap">{sqlPresets[activeQueryIndex].query}</pre>
                  </div>
                  <div className="mt-4 text-[11px] font-sans text-slate-300 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                    <span className="font-bold text-indigo-300">Giải thích: </span>
                    {sqlPresets[activeQueryIndex].explanation}
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <span className="text-xs font-bold text-slate-700 block mb-2">BẢNG KẾT QUẢ LỌC:</span>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-indigo-50 border-b border-indigo-100 text-indigo-900 font-extrabold">
                          {Object.keys(sqlPresets[activeQueryIndex].resultRows[0]).map((col) => (
                            <th key={col} className="p-2 border-r border-indigo-100 last:border-r-0">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sqlPresets[activeQueryIndex].resultRows.map((row: any, i: number) => (
                          <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                            {Object.values(row).map((val: any, j: number) => (
                              <td key={j} className="p-2 font-medium text-slate-800">{val}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab18 === '18.4' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* 18.4 ORDER BY Section */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-indigo-50/30 to-purple-50/30">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUpDown className="text-indigo-600" size={20} />
                <h3 className="text-base font-extrabold text-slate-800">18.4 並べ替え (Sắp xếp dữ liệu với ORDER BY)</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Sử dụng cú pháp <code className="text-indigo-700 font-bold">ORDER BY</code> để sắp xếp kết quả trích xuất. 
                Sắp xếp tăng dần từ nhỏ đến lớn ghi <code className="text-indigo-700 font-bold">ASC</code> (ascend - 昇順), 
                sắp xếp giảm dần từ lớn đến nhỏ ghi <code className="text-indigo-700 font-bold">DESC</code> (descend - 降順).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">ASC - Tăng dần (昇順)</span>
                  <pre className="font-mono text-xs text-slate-800 mt-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-bold">
                    SELECT 氏名, 英語{"\n"}FROM 成績表{"\n"}ORDER BY 英語 ASC
                  </pre>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[10px] font-extrabold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">DESC - Giảm dần (降順)</span>
                  <pre className="font-mono text-xs text-slate-800 mt-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-bold">
                    SELECT 氏名, 英語{"\n"}FROM 成績表{"\n"}ORDER BY 英語 DESC
                  </pre>
                </div>
              </div>
            </div>

            {/* 18.5 JOIN Section */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-purple-50/30 to-indigo-50/30">
              <div className="flex items-center gap-2 mb-2">
                <LinkIcon className="text-purple-600" size={20} />
                <h3 className="text-base font-extrabold text-slate-800">18.5 結合 (Phép nối 2 hay nhiều bảng)</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Thao tác kết hợp sử dụng 2 hoặc nhiều bảng (2つ以上の表). Trong điều kiện <code className="text-purple-700 font-bold">WHERE</code> phải chỉ rõ vị trí các trường trùng khớp dữ liệu: 
                <code className="text-purple-700 font-bold bg-white px-2 py-0.5 rounded border border-purple-200 ml-1">学籍簿.学生証番号 ＝ 成績表.学生証番号</code>.
              </p>
              <div className="p-3.5 bg-slate-900 text-white rounded-xl font-mono text-xs">
                <div className="text-purple-300 font-bold">SELECT <span className="text-emerald-400">学籍簿.氏名, 英語, 出身地</span></div>
                <div className="text-purple-300 font-bold">FROM <span className="text-emerald-400">学籍簿, 成績表</span></div>
                <div className="text-purple-300 font-bold">WHERE <span className="text-emerald-400">学籍簿.学生証番号 ＝ 成績表.学生証番号</span></div>
              </div>
            </div>

            {/* Interactive Query Playground for 18.4 & 18.5 */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h4 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <Play size={16} className="text-indigo-600" fill="currentColor" />
                Mô phỏng Sắp xếp ORDER BY & Phép nối 結合 (JOIN)
              </h4>

              <div className="flex flex-wrap gap-2 mb-4">
                {sqlPresets.filter(p => p.type === '18.4').map((preset) => {
                  const idx = sqlPresets.findIndex(p => p.id === preset.id);
                  return (
                    <button
                      key={preset.id}
                      onClick={() => setActiveQueryIndex(idx)}
                      className={`px-3 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        activeQueryIndex === idx
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {preset.title.split(':')[0]}
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col justify-between font-mono text-xs">
                  <div>
                    <div className="text-[10px] text-slate-400 border-b border-slate-800 pb-1 mb-2 font-sans flex justify-between">
                      <span>CÂU LỆNH SQL:</span>
                      <span className="text-indigo-400 font-bold">{sqlPresets[activeQueryIndex].title}</span>
                    </div>
                    <pre className="text-emerald-400 font-bold whitespace-pre-wrap">{sqlPresets[activeQueryIndex].query}</pre>
                  </div>
                  <div className="mt-4 text-[11px] font-sans text-slate-300 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                    <span className="font-bold text-indigo-300">Giải thích: </span>
                    {sqlPresets[activeQueryIndex].explanation}
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <span className="text-xs font-bold text-slate-700 block mb-2">BẢNG KẾT QUẢ SAU THAO TÁC:</span>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-indigo-50 border-b border-indigo-100 text-indigo-900 font-extrabold">
                          {Object.keys(sqlPresets[activeQueryIndex].resultRows[0]).map((col) => (
                            <th key={col} className="p-2 border-r border-indigo-100 last:border-r-0">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sqlPresets[activeQueryIndex].resultRows.map((row: any, i: number) => (
                          <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                            {Object.values(row).map((val: any, j: number) => (
                              <td key={j} className="p-2 font-medium text-slate-800">{val}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab18 === 'minitest' && (
          <div className="flex flex-col gap-8 animate-fadeIn">
            
            {/* IT Passport Practice Question */}
            <div className="border border-indigo-200 rounded-2xl p-5 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-indigo-600 text-white rounded-full">
                  練習問題 - IT Passport (H22 Thu)
                </span>
                <h3 className="text-sm font-extrabold text-slate-800">Thứ tự chèn dữ liệu khi thêm nhà cung cấp & hàng mới</h3>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4 text-xs text-slate-700 select-text leading-relaxed">
                <p className="font-bold text-slate-800 mb-2">Đề bài SGK:</p>
                「業者コード」「業者名」のフィールドを持つ"業者"表，「伝票番号」「枝番」「日付」「商品コード」「数量」のフィールドを持つ"仕入明細"表，「商品コード」「商品名」「業者コード」「単価」のフィールドを持つ"商品"表の 3 つの表が関係データベースで管理されている．新たな業者から新たな商品を仕入れた場合，表にデータを追加する順序のうち，適切なものはどれか．
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {[
                  { opt: 'ア', text: '(1) 業者表 → (2) 仕入明細表 → (3) 商品表' },
                  { opt: 'イ', text: '(1) 業者表 → (2) 商品表 → (3) 仕入明細表' },
                  { opt: 'ウ', text: '(1) 仕入明細表 → (2) 商品表 → (3) 業者表' },
                  { opt: 'エ', text: '(1) 商品表 → (2) 業者表 → (3) 仕入明細表' },
                ].map((item) => (
                  <button
                    key={item.opt}
                    onClick={() => {
                      setSelectedItOption(item.opt);
                      setShowItExplanation(true);
                    }}
                    className={`p-3 text-xs font-bold rounded-xl border text-left transition-all cursor-pointer ${
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
                    ĐÁP ÁN ĐÚNG: (イ) (1) 業者表 → (2) 商品表 → (3) 仕入明細表
                  </div>
                  <div className="mt-2 space-y-1 text-slate-700 leading-relaxed">
                    <p>• Bảng <strong>商品 (Sản phẩm)</strong> chứa trường <code>業者コード</code> làm khóa ngoại (FK) tham chiếu tới bảng <strong>業者 (Nhà cung cấp)</strong>. Do đó phải thêm <strong>業者</strong> trước khi tạo <strong>商品</strong>!</p>
                    <p>• Bảng <strong>仕入明細 (Chi tiết nhập)</strong> chứa trường <code>商品コード</code> làm khóa ngoại (FK) tham chiếu tới bảng <strong>商品</strong>. Do đó phải có dữ liệu trong <strong>商品</strong> trước khi tạo <strong>仕入明細</strong>!</p>
                    <p>👉 Thứ tự chèn đúng bắt buộc: <strong>(1) 業者表 → (2) 商品表 → (3) 仕入明細表</strong>.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Mini Test 1 Section */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-base font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <Languages size={18} className="text-indigo-600" />
                ミニテスト 1 (Mini Test 1)
              </h3>

              {/* Vocab check */}
              <div className="mb-6">
                <span className="text-xs font-bold text-slate-600 block mb-2">Mục I: Từ vựng Bài 18 (Bấm để xem đáp án cách đọc & nghĩa)</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
                  {l18Mini1Vocab.map((item, idx) => {
                    const isRevealed = mini1Revealed18.includes(idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          setMini1Revealed18(prev => 
                            prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
                          );
                        }}
                        className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                          isRevealed 
                            ? 'bg-indigo-50 border-indigo-300 text-indigo-900 shadow-sm'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
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
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục II: Dịch câu Nhật → Việt (Khái niệm SQL)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  「SQL とは，Structured Query Language の頭文字をとったもので，直訳すると構造化された問い合わせ用の言語ということになります．データベースを操作するための命令の集まりであり，関係データベースを基本としています．」
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  rows={2}
                  value={mini1Trans1_18}
                  onChange={(e) => setMini1Trans1_18(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini1ShowAnswer1_18(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini1ShowAnswer1_18 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini1ShowAnswer1_18 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án gợi ý:</span>
                    SQL là chữ viết tắt của Structured Query Language, dịch trực tiếp có nghĩa là ngôn ngữ dùng để truy vấn có cấu trúc. Đây là tập hợp các câu lệnh để thao tác với cơ sở dữ liệu và dựa trên nền tảng cơ sở dữ liệu quan hệ.
                  </div>
                )}
              </div>

              {/* Translation 2 V-J */}
              <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục III: Dịch câu Việt → Nhật (Access & MySQL)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  "Vì nhiều phần mềm cơ sở dữ liệu, điển形 là Access của Microsoft, có dữ liệu kiểu quan hệ nên có thể lưu trữ, sử dụng các file bằng định dạng SQL. Hiện nay có phần mềm MySQL là một trong những phần mềm SQL đang được sử dụng miễn phí."
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Nhật của bạn..."
                  rows={2}
                  value={mini1Trans2_18}
                  onChange={(e) => setMini1Trans2_18(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini1ShowAnswer2_18(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini1ShowAnswer2_18 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini1ShowAnswer2_18 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án SGK gốc:</span>
                    <p className="font-serif italic font-bold text-slate-800">
                      「Microsoft の Access を始め，多くのデータベースソフトウェアは関係データベースを基本としているため，SQL 形式でファイルを保存したり，操作したりすることができます．なお，無償で使えるSQLには，MySQLというソフトがあります．」
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Mini Test 2 Section */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-base font-extrabold text-slate-800 mb-3 flex items-center gap-2">
                <Languages size={18} className="text-indigo-600" />
                ミニテスト 2 (Mini Test 2)
              </h3>

              {/* Vocab check 2 */}
              <div className="mb-6">
                <span className="text-xs font-bold text-slate-600 block mb-2">Mục I: Từ vựng Mini Test 2</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
                  {l18Mini2Vocab.map((item, idx) => {
                    const isRevealed = mini2Revealed18.includes(idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          setMini2Revealed18(prev => 
                            prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
                          );
                        }}
                        className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                          isRevealed 
                            ? 'bg-purple-50 border-purple-300 text-purple-900 shadow-sm'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
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
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục II: Dịch câu Nhật → Việt (Sắp xếp ORDER BY, ASC/DESC)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  「射影の結果を並べ替えるには ORDER BY という単語を使います．昇順(小さい順)の場合は ASC，降順(大きい順)の場合には DESC を記述します．ASC は ascend(上る)，DESC はdescend(下る)の略です．」
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  rows={2}
                  value={mini2Trans1_18}
                  onChange={(e) => setMini2Trans1_18(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini2ShowAnswer1_18(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini2ShowAnswer1_18 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini2ShowAnswer1_18 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án gợi ý:</span>
                    Để sắp xếp kết quả của phép chiếu, chúng ta sử dụng từ ORDER BY. Viết ASC đối với thứ tự tăng dần (từ nhỏ đến lớn), và DESC đối với thứ tự giảm dần (từ lớn đến nhỏ). ASC là viết tắt của ascend (đi lên), DESC là viết tắt của descend (đi xuống).
                  </div>
                )}
              </div>

              {/* Translation 2 V-J 2 */}
              <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục III: Dịch câu Việt → Nhật (Điều kiện AND / OR)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  "Trong phần điều kiện ta có thể viết các điều kiện phức tạp bằng cách dùng AND hoặc OR."
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Nhật của bạn..."
                  rows={2}
                  value={mini2Trans2_18}
                  onChange={(e) => setMini2Trans2_18(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini2ShowAnswer2_18(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini2ShowAnswer2_18 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini2ShowAnswer2_18 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án SGK gốc:</span>
                    <p className="font-serif italic font-bold text-slate-800">
                      「条件の部分には AND や OR で複雑な条件を書くことができます．」
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
