import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, BookOpen, Layers, Cpu, HardDrive, Monitor, Shield, 
  CheckCircle2, Languages, RefreshCw, Smartphone, Laptop
} from 'lucide-react';

interface Lesson16TheoryProps {
  onClose: () => void;
}

export const Lesson16Theory: React.FC<Lesson16TheoryProps> = ({ onClose }) => {
  const [activeTab16, setActiveTab16] = useState<'16.1' | '16.2' | '16.3' | 'minitest'>('16.1');

  // Interactive Virtual Memory & Swapping Simulator State (16.2)
  const [ramUsage, setRamUsage] = useState<number>(70);
  const [swapActive, setSwapActive] = useState<boolean>(false);
  const [swapLogs, setSwapLogs] = useState<string[]>([]);

  const handleSimulateAppLoad = () => {
    if (ramUsage + 40 > 100) {
      setSwapActive(true);
      setRamUsage(60);
      setSwapLogs(prev => [
        ...prev,
        `⚠️ RAM đầy (${ramUsage + 40}%)! Kích hoạt スワッピング (Swapping): Chuyển tiến trình nhàn rỗi sang 仮想記憶 (Ổ cứng Virtual Memory). RAM giảm về 60%.`
      ]);
    } else {
      setRamUsage(prev => prev + 25);
      setSwapLogs(prev => [
        ...prev,
        `▶️ Nạp thêm ứng dụng mới. Dung lượng RAM hiện tại: ${ramUsage + 25}%.`
      ]);
    }
  };

  const handleResetRam = () => {
    setRamUsage(30);
    setSwapActive(false);
    setSwapLogs(["Khởi tạo trạng thái RAM: 30% sử dụng."]);
  };

  // Multi-tasking CPU Time-slicing Simulator (16.2)
  const [activeTaskIndex, setActiveTaskIndex] = useState<number>(0);
  const tasks = ['Word (Nhập văn bản)', 'Excel (Tính toán)', 'Music (Phát nhạc)', 'Browser (Duyệt web)'];

  // IT Passport Practice State
  const [selectedItOption, setSelectedItOption] = useState<string | null>(null);
  const [showItExplanation, setShowItExplanation] = useState<boolean>(false);

  // Minitest 1 State
  const l16Mini1Vocab = useMemo(() => [
    { term: 'ミドルウェア', reading: 'middleware', meaning: 'phần mềm trung gian' },
    { term: '若干', reading: 'じゃっかん', meaning: 'một chút / đôi chút' },
    { term: '相違', reading: 'そうい', meaning: 'sự khác biệt' },
    { term: '吸収する', reading: 'きゅうしゅうする', meaning: 'hấp thụ / triệt tiêu khuyết điểm' },
    { term: '仮想記憶', reading: 'かそうきおく', meaning: 'bộ nhớ ảo (Virtual Memory)' },
    { term: 'スワッピング', reading: 'swapping', meaning: 'tráo đổi dữ liệu RAM - Disk' },
    { term: 'スケジューリング', reading: 'scheduling', meaning: 'lập lịch tiến trình CPU' },
    { term: 'マルチユーザ', reading: 'multi-user', meaning: 'đa người dùng' },
    { term: '本質的な', reading: 'ほんしつてきな', meaning: 'bản chất / cốt lõi' },
    { term: 'ブート', reading: 'boot', meaning: 'khởi động hệ thống' }
  ], []);

  const [mini1Revealed16, setMini1Revealed16] = useState<number[]>([]);
  const [mini1Trans1_16, setMini1Trans1_16] = useState('');
  const [mini1ShowAnswer1_16, setMini1ShowAnswer1_16] = useState(false);
  const [mini1Trans2_16, setMini1Trans2_16] = useState('');
  const [mini1ShowAnswer2_16, setMini1ShowAnswer2_16] = useState(false);

  // Minitest 2 State
  const l16Mini2Vocab = useMemo(() => [
    { term: '無償奉仕', reading: 'むしょうほうし', meaning: 'cống hiến / phục vụ miễn phí' },
    { term: '実装', reading: 'じっそう', meaning: 'triển khai / cài đặt tính năng' },
    { term: 'ベンチャー企業', reading: 'venture company', meaning: 'công ty khởi nghiệp (startup)' },
    { term: '興す', reading: 'おこす', meaning: 'sáng lập / gây dựng' },
    { term: '巨大企業', reading: 'きょだいきぎょう', meaning: 'tập đoàn khổng lồ' },
    { term: '参入する', reading: 'さんにゅうする', meaning: 'gia nhập thị trường' },
    { term: '飛躍的に', reading: 'ひやくてきに', meaning: 'vượt bậc / nhảy vọt' },
    { term: 'ガレージ', reading: 'garage', meaning: 'nhà để xe (gara công ty)' },
    { term: '画期的', reading: 'かっきてき', meaning: 'mang tính đột phá / bước ngoặt' },
    { term: '競う', reading: 'きそう', meaning: 'cạnh tranh / tranh đua' }
  ], []);

  const [mini2Revealed16, setMini2Revealed16] = useState<number[]>([]);
  const [mini2Trans1_16, setMini2Trans1_16] = useState('');
  const [mini2ShowAnswer1_16, setMini2ShowAnswer1_16] = useState(false);
  const [mini2Trans2_16, setMini2Trans2_16] = useState('');
  const [mini2ShowAnswer2_16, setMini2ShowAnswer2_16] = useState(false);

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
            LÝ THUYẾT BÀI 16
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            オペレーティングシステム (Hệ điều hành OS)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab16('16.1')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab16 === '16.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <BookOpen size={16} />
          16.1 Khái niệm OS & Phân loại
        </button>
        <button
          onClick={() => setActiveTab16('16.2')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab16 === '16.2' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Cpu size={16} />
          16.2 5 Chức năng chính của OS
        </button>
        <button
          onClick={() => setActiveTab16('16.3')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab16 === '16.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Laptop size={16} />
          16.3 Các loại OS tiêu biểu
        </button>
        <button
          onClick={() => setActiveTab16('minitest')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab16 === 'minitest' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Languages size={16} />
          Bài tập & Mini Tests
        </button>
      </div>

      {/* Main Tab Content */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 md:p-8 shadow-xl shadow-slate-100/40 min-h-[500px]">

        {/* ================= TAB 16.1 ================= */}
        {activeTab16 === '16.1' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50/40 p-4 rounded-r-xl">
              <span className="text-[10px] font-extrabold uppercase text-indigo-600 tracking-wider">SGK 16.1</span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">16.1 オペレーティングシステムとは (Hệ điều hành OS là gì?)</h3>
              <p className="text-slate-700 text-sm leading-relaxed mt-2 select-text font-serif italic">
                「Windows，MacOS，Linuxなどのソフトウェアは，オペレーティングシステム，または略してOSと呼ばれます．OSはソフトウェアの一種ですが，ワープロや表計算などのアプリケーションソフトと，ハードウェアとの中間的な位置付けになります．このため日本語では基本ソフトと呼ばれることもあります．」
              </p>
              <div className="mt-3 text-xs text-slate-600 bg-white/80 p-3 rounded-xl border border-slate-200 leading-relaxed">
                <span className="font-bold text-indigo-600">Dịch nghĩa:</span> Các phần mềm như Windows, MacOS, Linux… được gọi là Hệ điều hành (Operating System - OS). OS là một loại phần mềm đóng vai trò trung gian giữa phần mềm ứng dụng (Word, Excel...) và phần cứng (Hardware). Trong tiếng Nhật còn gọi là **Phần mềm cơ bản (基本ソフト)**.
              </div>
            </div>

            {/* Software Architecture Classification Stack Diagram (図94) */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg">
              <h4 className="text-sm font-extrabold text-indigo-300 mb-4 flex items-center gap-2">
                <Layers size={18} /> Phân loại phần mềm trong hệ thống (図94)
              </h4>

              <div className="flex flex-col gap-3">
                {/* Level 1: App */}
                <div className="p-3.5 bg-indigo-600/30 border border-indigo-400/50 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-indigo-500 rounded-lg text-white font-bold text-xs">APP</span>
                    <div>
                      <h5 className="font-bold text-xs text-white">アプリケーションソフト (Phần mềm ứng dụng)</h5>
                      <p className="text-[11px] text-indigo-200">Word, Excel, Trình duyệt web, Game...</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-indigo-500/50 px-2 py-0.5 rounded text-white">Người dùng thao tác</span>
                </div>

                {/* Level 2: Middleware */}
                <div className="p-3.5 bg-purple-600/30 border border-purple-400/50 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-purple-500 rounded-lg text-white font-bold text-xs">MID</span>
                    <div>
                      <h5 className="font-bold text-xs text-white">ミドルウェア (Middleware / Phần mềm trung gian)</h5>
                      <p className="text-[11px] text-purple-200">Hệ quản trị CSDL (DBMS), Tool hỗ trợ phát triển...</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-purple-500/50 px-2 py-0.5 rounded text-white">Nằm giữa OS & App</span>
                </div>

                {/* Level 3: OS */}
                <div className="p-3.5 bg-emerald-600/30 border border-emerald-400/50 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-emerald-500 rounded-lg text-white font-bold text-xs">OS</span>
                    <div>
                      <h5 className="font-bold text-xs text-white">OS (オペレーティングシステム / 基本ソフト)</h5>
                      <p className="text-[11px] text-emerald-200">Windows, MacOS, Linux, Android, iOS...</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-500/50 px-2 py-0.5 rounded text-white">Quản lý tài nguyên</span>
                </div>

                {/* Level 4: BIOS */}
                <div className="p-3.5 bg-amber-600/30 border border-amber-400/50 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-amber-500 rounded-lg text-white font-bold text-xs">BIOS</span>
                    <div>
                      <h5 className="font-bold text-xs text-white">BIOS (バイオス / Boot firmware)</h5>
                      <p className="text-[11px] text-amber-200">Khống chế phần cứng tối thiểu, khi Boot (ブート) nạp OS từ HDD vào RAM.</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-amber-500/50 px-2 py-0.5 rounded text-white">Firmware phần cứng</span>
                </div>

                {/* Level 5: Hardware */}
                <div className="p-3.5 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-slate-700 rounded-lg text-white font-bold text-xs">HW</span>
                    <div>
                      <h5 className="font-bold text-xs text-white">ハードウェア (Phần cứng)</h5>
                      <p className="text-[11px] text-slate-400">CPU, RAM, HDD/SSD, Màn hình, Chuột, Bàn phím...</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-slate-700 px-2 py-0.5 rounded text-slate-300">Vật lý</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 16.2 ================= */}
        {activeTab16 === '16.2' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div>
              <span className="text-[10px] font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full uppercase">Mục 16.2</span>
              <h3 className="text-lg font-extrabold text-slate-800 mt-1">16.2 OS の機能 (5 Chức năng quan trọng của OS)</h3>
              <p className="text-xs text-slate-600 mt-1">Chi tiết 5 chức năng cốt lõi của OS kèm theo các đoạn trích & câu tiếng Nhật trọng tâm cho kỳ thi IT.</p>
            </div>

            {/* 5 Detailed Function Sections with Japanese Sentences */}
            <div className="flex flex-col gap-5">
              {/* Function 1 */}
              <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-blue-200 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-extrabold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 uppercase">Chức năng (1)</span>
                  <h4 className="font-extrabold text-base text-slate-800">1. ユーザインタフェース (Giao diện người dùng - UI & GUI)</h4>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 font-serif italic mb-3 select-text">
                  <p className="font-bold text-slate-800">「(1) ユーザインタフェース」</p>
                  <p className="mt-1">「OS の機能の第 1 は，操作性を決めることです．...この操作性のことをユーザインタフェースと言います．特に見え方に関することを GUI(Graphical User Interface)と言います．」</p>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed space-y-2">
                  <p>• <strong>操作性 (Tính thao tác):</strong> OS quy định cách dùng chuột, bàn phím, giao diện cửa sổ (Window).</p>
                  <p>• <strong>GUI (Graphical User Interface):</strong> Nhấn mạnh vào yếu tố thị giác (<strong>見え方</strong>), giao diện đồ họa trực quan.</p>
                  <p>• <strong>Khác biệt hệ thống:</strong> Mac dùng chuột 1 nút, Windows 2 nút, Unix 3 nút; mỗi hệ điều hành có phím tắt và bàn phím đặc thù riêng.</p>
                </div>
                <div className="mt-3 p-2.5 bg-blue-50/70 border border-blue-100 rounded-lg text-[11px] text-blue-900">
                  <span className="font-bold">🔑 Câu tiếng Nhật trọng tâm:</span> 「操作性のことをユーザインタフェースと言います。」 / 「特に見え方に関することを GUIと言います。」
                </div>
              </div>

              {/* Function 2 */}
              <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-emerald-200 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 uppercase">Chức năng (2)</span>
                  <h4 className="font-extrabold text-base text-slate-800">2. ソフトとハードの仲介 (Trung gian Phần mềm & Phần cứng - 図95)</h4>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 font-serif italic mb-3 select-text">
                  <p className="font-bold text-slate-800">「(2) ソフトとハードの仲介」</p>
                  <p className="mt-1">「OS の機能の第 2 は，図 95 に示すように，ハードウェアの相違を吸収することです．...OS が定めた基準を満たしている限り，どのメーカのソフト，ハードでも問題なく使うことができるようになります．」</p>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed space-y-2">
                  <p>• <strong>吸収する (Triệt tiêu/Trung hòa):</strong> Che giấu sự khác biệt phần cứng của các nhà sản xuất khác nhau (<strong>ハードウェアの相違を吸収する</strong>).</p>
                  <p>• <strong>Cải thiện hiệu quả phát triển (開発効率):</strong> Trước khi có OS, phần mềm phải viết riêng cho từng phần cứng của từng hãng. Nhờ OS chuẩn hóa, nhà phát triển chỉ cần tuân thủ tiêu chuẩn của OS.</p>
                </div>
                <div className="mt-3 p-2.5 bg-emerald-50/70 border border-emerald-100 rounded-lg text-[11px] text-emerald-900">
                  <span className="font-bold">🔑 Câu tiếng Nhật trọng tâm:</span> 「ハードウェアの相違を吸収することです。」 / 「OSが定めた基準を満たしている限り、どのメーカのソフト、ハードでも問題なく使うことができるようになります。」
                </div>
              </div>

              {/* Function 3 */}
              <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-amber-200 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-100 uppercase">Chức năng (3)</span>
                  <h4 className="font-extrabold text-base text-slate-800">3. 記憶管理 (Quản lý bộ nhớ, 仮想記憶 & スワッピング - 図96)</h4>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 font-serif italic mb-3 select-text">
                  <p className="font-bold text-slate-800">「(3) 記憶管理」</p>
                  <p className="mt-1">「見かけ上の記憶容量を実際のメモリ容量よりも大きくし，足りない部分はハードディスクを利用することで，大きなメモリ空間を確保することを仮想記憶と言い，メモリとハードディスクのデータの交換をスワッピングと言います．」</p>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed space-y-2">
                  <p>• <strong>Tối ưu hóa thứ cấp bộ nhớ:</strong> Luân chuyển dữ liệu giữa <strong>キャッシュ (Cache) ↔ メモリ (RAM) ↔ ハードディスク (HDD/SSD)</strong> dựa theo tốc độ truy xuất và dung lượng.</p>
                  <p>• <strong>仮想記憶 (Virtual Memory):</strong> Mượn bộ nhớ đĩa cứng làm RAM ảo, giúp tăng không gian bộ nhớ hiển thị trên bề mặt (<strong>見かけ上の記憶容量</strong>).</p>
                  <p>• <strong>スワッピング (Swapping):</strong> Đổi dữ liệu liên tục giữa RAM và Ổ cứng khi RAM bị đầy.</p>
                </div>
                <div className="mt-3 p-2.5 bg-amber-50/70 border border-amber-100 rounded-lg text-[11px] text-amber-900">
                  <span className="font-bold">🔑 Câu tiếng Nhật trọng tâm:</span> 「大きなメモリ空間を確保することを仮想記憶と言い、メモリとハードディスクのデータの交換をスワッピングと言います。」
                </div>
              </div>

              {/* Function 4 */}
              <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-purple-200 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-extrabold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100 uppercase">Chức năng (4)</span>
                  <h4 className="font-extrabold text-base text-slate-800">4. プロセス管理 (Quản lý tiến trình & マルチタスク - 図97)</h4>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 font-serif italic mb-3 select-text">
                  <p className="font-bold text-slate-800">「(4) プロセス管理」</p>
                  <p className="mt-1">「プロセスとはソフトウェアの処理のことです．...OS はアプリケーションソフトのプロセスを細かい単位に分け，それぞれの負荷に応じて最適なスケジューリングを行うことで，複数のソフトが同時に動いているように見せています．複数のプログラムが同時に動くように管理することをマルチタスクと呼んでいます．」</p>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed space-y-2">
                  <p>• <strong>プロセス (Process):</strong> Tiến trình xử lý phần mềm. 1 nhân CPU chỉ tính toán 1 tiến trình tại một thời điểm.</p>
                  <p>• <strong>スケジューリング (Scheduling):</strong> OS phân chia tiến trình và lập lịch tối ưu tùy theo tải (<strong>負荷</strong>), tạo ra xử lý đồng thời giả lập (<strong>見かけ上の同時処理</strong>).</p>
                  <p>• <strong>マルチタスク (Multitasking):</strong> Quản lý để nhiều phần mềm chạy cùng lúc.</p>
                </div>
                <div className="mt-3 p-2.5 bg-purple-50/70 border border-purple-100 rounded-lg text-[11px] text-purple-900">
                  <span className="font-bold">🔑 Câu tiếng Nhật trọng tâm:</span> 「プロセスとはソフトウェアの処理のことです。」 / 「複数のプログラムが同時に動くように管理することをマルチタスクと呼んでいます。」
                </div>
              </div>

              {/* Function 5 */}
              <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-rose-200 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-extrabold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-100 uppercase">Chức năng (5)</span>
                  <h4 className="font-extrabold text-base text-slate-800">5. ユーザ管理 (Quản lý người dùng & マルチユーザ)</h4>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 font-serif italic mb-3 select-text">
                  <p className="font-bold text-slate-800">「(5) ユーザ管理」</p>
                  <p className="mt-1">「複数ユーザが利用するときには，ユーザ毎に利用環境を保存し，他人のファイルや情報へのアクセスを制限するユーザ管理機能が必要です．複数のユーザが利用することをマルチユーザと言います．...他人のファイルや作業を侵害しない安全性、安定性を持つ必要があります．」</p>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed space-y-2">
                  <p>• <strong>Bảo mật & Phân quyền:</strong> Lưu môi trường sử dụng của từng cá nhân, hạn chế truy cập file của người khác.</p>
                  <p>• <strong>マルチユーザ (Multi-user):</strong> Nhiều người cùng truy cập máy qua mạng đồng thời mà vẫn đảm bảo độ an toàn (<strong>安全性</strong>) và độ ổn định (<strong>安定性</strong>).</p>
                </div>
                <div className="mt-3 p-2.5 bg-rose-50/70 border border-rose-100 rounded-lg text-[11px] text-rose-900">
                  <span className="font-bold">🔑 Câu tiếng Nhật trọng tâm:</span> 「ユーザ毎に利用環境を保存し、他人のファイルや情報へのアクセスを制限する...」 / 「複数のユーザが利用することをマルチユーザと言います。」
                </div>
              </div>
            </div>

            {/* SIMULATOR 1: Virtual Memory & Swapping Interactive Demo (図96) */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-amber-50/40 via-white to-orange-50/40">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-extrabold text-slate-800 flex items-center gap-2">
                  <HardDrive size={16} className="text-amber-600" />
                  Mô phỏng Quản lý Bộ nhớ ảo (仮想記憶) & Tráo đổi Swapping (スワッピング)
                </h4>
                <button
                  onClick={handleResetRam}
                  className="px-2.5 py-1 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg border transition-all cursor-pointer flex items-center gap-1"
                >
                  <RefreshCw size={12} /> Reset RAM
                </button>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Dung lượng RAM thực tế sử dụng:</span>
                  <span className={ramUsage > 80 ? "text-rose-600" : "text-emerald-600"}>{ramUsage}%</span>
                </div>
                <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden p-0.5">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      ramUsage > 80 ? "bg-rose-500" : ramUsage > 50 ? "bg-amber-500" : "bg-emerald-500"
                    }`}
                    style={{ width: `${ramUsage}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={handleSimulateAppLoad}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow cursor-pointer transition-all active:scale-95"
                >
                  ➕ Mở thêm ứng dụng mới vào RAM
                </button>
                {swapActive && (
                  <span className="text-xs font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200 animate-pulse">
                    ⚙️ スワッピング (Swapping) Đang hoạt động trên HDD!
                  </span>
                )}
              </div>

              {/* Console log */}
              <div className="p-3 bg-slate-900 text-slate-300 font-mono text-xs rounded-xl max-h-[140px] overflow-y-auto space-y-1">
                {swapLogs.map((log, idx) => (
                  <div key={idx} className="border-l-2 border-amber-400 pl-2">
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* SIMULATOR 2: Multi-tasking CPU Time-slicing (図97) */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/40">
              <h4 className="text-sm font-extrabold text-slate-800 mb-2 flex items-center gap-2">
                <Cpu size={16} className="text-indigo-600" />
                Mô phỏng Đa nhiệm CPU (マルチタスク & スケジューリング) (図97)
              </h4>
              <p className="text-xs text-slate-500 mb-4">
                CPU chỉ có thể xử lý 1 tiến trình tại một thời điểm cực ngắn, nhưng OS chia nhỏ thời gian lập lịch (Scheduling) giúp người dùng thấy 4 ứng dụng chạy song song.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {tasks.map((task, idx) => {
                  const isActive = activeTaskIndex === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveTaskIndex(idx)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all text-center ${
                        isActive
                          ? 'bg-indigo-600 text-white border-indigo-600 font-bold shadow-md scale-105'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-[10px] opacity-80 block font-mono">Tiến trình {idx + 1}</span>
                      <span className="text-xs font-extrabold">{task}</span>
                      {isActive && <span className="text-[9px] block mt-1 bg-white/20 rounded py-0.5 font-bold">CPU đang xử lý</span>}
                    </div>
                  );
                })}
              </div>

              <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-xs text-indigo-900 flex items-center justify-between">
                <span>⚡ Tiến trình CPU được OS chuyển đổi liên tục trong vài miligiây.</span>
                <button
                  onClick={() => setActiveTaskIndex(prev => (prev + 1) % tasks.length)}
                  className="px-3 py-1 bg-indigo-600 text-white font-bold rounded-lg text-xs hover:bg-indigo-700 cursor-pointer"
                >
                  Chuyển tiến trình CPU tiếp ▶
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 16.3 ================= */}
        {activeTab16 === '16.3' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50/40 p-4 rounded-r-xl">
              <span className="text-[10px] font-extrabold uppercase text-indigo-600 tracking-wider">SGK 16.3</span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">16.3 OS の種類 (Các hệ điều hành phổ biến & Lịch sử)</h3>
              <p className="text-slate-700 text-sm leading-relaxed mt-2 select-text font-serif italic">
                「OS は，家電製品からスーパーコンピュータまで，多くの機器で使われています．」
              </p>
            </div>

            {/* OS Categories Showcase Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* UNIX & Linux */}
              <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-indigo-300 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">UNIX & Linux</span>
                  <Shield size={18} className="text-indigo-600" />
                </div>
                <h4 className="font-extrabold text-base text-slate-800">UNIX & Linux (リーナス・トーバルズ)</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  • <strong>UNIX</strong>: Phát triển bởi AT&T Bell Labs & ĐH Berkeley. Ban đầu công khai mã nguồn, miễn phí cho nghiên cứu.
                </p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  • <strong>Linux</strong>: Phát triển bởi Linus Torvalds dưới dạng Freeware độc lập. Mã nguồn mở, an toàn, sử dụng phổ biến cho Máy chủ doanh nghiệp (企業サーバ).
                </p>
              </div>

              {/* Windows */}
              <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-blue-300 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">Windows</span>
                  <Monitor size={18} className="text-blue-600" />
                </div>
                <h4 className="font-extrabold text-base text-slate-800">Microsoft Windows (ビル・ゲイツ)</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  • Khởi nguồn từ <strong>MS-DOS</strong> của Microsoft (Bill Gates). Phát triển vượt bậc khi được tập đoàn khổng lồ <strong>IBM</strong> chọn làm OS cho PC.
                </p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  • Chuyển từ giao diện gõ dòng lệnh sang giao diện cửa sổ thao tác bằng chuột (Windows). Từ Windows 2000 tăng tính ổn định cao.
                </p>
              </div>

              {/* MacOS */}
              <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-purple-300 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">MacOS</span>
                  <Laptop size={18} className="text-purple-600" />
                </div>
                <h4 className="font-extrabold text-base text-slate-800">Apple MacOS (スティーブ・ジョブズ)</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  • Sáng lập bởi Steve Jobs & Steve Wozniak từ xưởng nhà để xe (ガレージ).
                </p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  • Năm 1984 ra mắt hệ thống cửa sổ thao tác bằng chuột đột phá. Từ MacOS X tích hợp công nghệ UNIX mang lại sự ổn định tuyệt vời.
                </p>
              </div>

              {/* Embedded OS */}
              <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-emerald-300 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">家電用OS</span>
                  <Smartphone size={18} className="text-emerald-600" />
                </div>
                <h4 className="font-extrabold text-base text-slate-800">家電用OS (Hệ điều hành nhúng)</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  • Tích hợp trong thiết bị gia dụng, đầu ghi HDD, máy định vị ô tô, máy chơi game, điện thoại di động (Symbian, iOS, Android, Windows Phone...).
                </p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  • Giúp rút ngắn đáng kể thời gian phát triển sản phẩm mới và có số lượng tiêu thụ cực kỳ khổng lồ.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB MINITEST ================= */}
        {activeTab16 === 'minitest' && (
          <div className="flex flex-col gap-8 animate-fadeIn">
            {/* IT Passport Practice Question */}
            <div className="border border-indigo-200 rounded-2xl p-5 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-indigo-600 text-white rounded-full">
                  練習問題 - IT Passport (H22 Xuân)
                </span>
                <h3 className="text-sm font-extrabold text-slate-800">Phát biểu đúng về Hệ điều hành (OS) của PC</h3>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4 text-xs text-slate-700 select-text leading-relaxed font-serif italic">
                「PCのOSに関する記述のうち，適切なものはどれか．」
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {[
                  { opt: 'ア', text: 'OS が異なっていても OS とアプリケーションプログラム間のインタフェースは統一されているので，アプリケーションプログラムは OS の種別を意識せずに処理を行うことができる．' },
                  { opt: 'イ', text: 'OS はアプリケーションプログラムに対して，CPU やメモリ，補助記憶装置などのコンピュータ資源を割り当てる．' },
                  { opt: 'ウ', text: 'OS はファイルの文字コードを自動変換する機能をもつので，アプリケーションプログラムは，ファイルにアクセスするときにファイル名や入出力データの文字コード種別の違いを意識しなくても処理できる．' },
                  { opt: 'エ', text: 'アプリケーションプログラムが自由に OS の各種機能を利用できるようにするために，OSには，そのソースコードの公開が義務付けられている．' },
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
                    ĐÁP ÁN ĐÚNG: (イ)
                  </div>
                  <div className="mt-2 space-y-1 text-slate-700 leading-relaxed text-xs">
                    <p>• <strong>(イ) Chính xác:</strong> OS quản lý và phân bổ tài nguyên máy tính (CPU, RAM, thiết bị lưu trữ phụ...) cho các chương trình ứng dụng.</p>
                    <p>• <strong>(ア) Sai:</strong> Ứng dụng phải viết riêng cho từng loại OS (Mac phần mềm không chạy được trên Windows).</p>
                    <p>• <strong>(ウ) Sai:</strong> OS không tự động chuyển đổi mã ký tự (character code) của file.</p>
                    <p>• <strong>(エ) Sai:</strong> Không có nghĩa vụ bắt buộc OS phải công khai mã nguồn (như Windows là thương mại đóng).</p>
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
                <span className="text-xs font-bold text-slate-600 block mb-2">Mục I: Từ vựng Bài 16 (Bấm xem đọc & nghĩa)</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
                  {l16Mini1Vocab.map((item, idx) => {
                    const isRevealed = mini1Revealed16.includes(idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          setMini1Revealed16(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
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
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục II: Dịch câu Nhật → Việt (Vai trò trung gian của OS)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  「パソコンに OS が搭載される以前において，アプリケーションソフトは，ハードウェアメーカ毎に対応する製品が作られていました．また，マウスやキーボードなどのハードウェアもメーカ毎に開発されていました．OS によって共通化されることにより，このような開発効率の悪さが改善され，OS が定めた基準を満たしている限り，どのメーカのソフト，ハードでも問題なく使うことができるようになります．」
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  rows={3}
                  value={mini1Trans1_16}
                  onChange={(e) => setMini1Trans1_16(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini1ShowAnswer1_16(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini1ShowAnswer1_16 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini1ShowAnswer1_16 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án gợi ý:</span>
                    Trước khi máy tính cá nhân được cài đặt OS, phần mềm ứng dụng được làm ra dưới dạng sản phẩm tương ứng cho từng nhà sản xuất phần cứng. Ngoài ra, phần cứng như chuột hay bàn phím cũng được phát triển theo từng nhà sản xuất. Nhờ việc dùng chung qua OS, hiệu quả phát triển kém như vậy đã được cải thiện, và chỉ cần đáp ứng các tiêu chuẩn do OS quy định thì phần mềm, phần cứng của bất kỳ nhà sản xuất nào cũng có thể sử dụng mà không gặp vấn đề gì.
                  </div>
                )}
              </div>

              {/* Translation 2 V-J */}
              <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục III: Dịch câu Việt → Nhật (Định nghĩa OS)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  "Các phần mềm như Windows, MacOS, Linux… được gọi là hệ điều hành, viết tắt là OS. OS cũng là một loại phần mềm nhưng có vị trí trung gian giữa các phần mềm ứng dụng như word, excel… và phần cứng. Do vậy, trong tiếng Nhật cũng có khi người ta gọi đó là phần mềm cơ bản."
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Nhật của bạn..."
                  rows={3}
                  value={mini1Trans2_16}
                  onChange={(e) => setMini1Trans2_16(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini1ShowAnswer2_16(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini1ShowAnswer2_16 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini1ShowAnswer2_16 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án SGK gốc:</span>
                    <p className="font-serif italic font-bold text-slate-800">
                      「Windows，MacOS，Linuxなどのソフトウェアは，オペレーティングシステム，または略してOSと呼ばれます．OSはソフトウェアの一種ですが，ワープロや表計算などのアプリケーションソフトと，ハードウェアとの中間的な位置付けになります．このため日本語では基本ソフトと呼ばれることもあります．」
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
                  {l16Mini2Vocab.map((item, idx) => {
                    const isRevealed = mini2Revealed16.includes(idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          setMini2Revealed16(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
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
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục II: Dịch câu Nhật → Việt (OS trong đồ gia dụng)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  「OS はパソコンだけでなく，ハードディスクレコーダ，カーナビ，ゲーム機などの家電製品にも組み込まれています．従来，家電製品用ソフトウェアは製品ごとに開発されていましたが，OS の搭載により開発期間が短縮されています．」
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  rows={2}
                  value={mini2Trans1_16}
                  onChange={(e) => setMini2Trans1_16(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini2ShowAnswer1_16(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini2ShowAnswer1_16 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini2ShowAnswer1_16 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án gợi ý:</span>
                    OS không chỉ được dùng trong máy tính cá nhân mà còn được nhúng vào các sản phẩm gia dụng như đầu ghi HDD, hệ thống định vị ô tô, máy chơi game... Trước đây, phần mềm cho thiết bị gia dụng được phát triển riêng cho từng sản phẩm, nhưng nhờ việc trang bị OS mà thời gian phát triển đã được rút ngắn.
                  </div>
                )}
              </div>

              {/* Translation 2 V-J 2 */}
              <div className="bg-slate-50 p-4 border border-slate-200 rounded-xl">
                <span className="text-xs font-bold text-slate-700 block mb-2">Mục III: Dịch câu Việt → Nhật (Định nghĩa Đa nhiệm)</span>
                <p className="text-xs font-serif italic text-slate-800 mb-3 bg-white p-2.5 rounded border border-slate-200 select-text">
                  "Việc quản lý nhiều chương trình cùng chạy cùng một lúc được gọi là đa nhiệm."
                </p>
                <textarea
                  placeholder="Nhập bản dịch tiếng Nhật của bạn..."
                  rows={2}
                  value={mini2Trans2_16}
                  onChange={(e) => setMini2Trans2_16(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-400"
                />
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setMini2ShowAnswer2_16(prev => !prev)}
                    className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-indigo-700"
                  >
                    {mini2ShowAnswer2_16 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                </div>
                {mini2ShowAnswer2_16 && (
                  <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg text-xs text-indigo-900 animate-fadeIn">
                    <span className="font-bold block mb-1">Đáp án SGK gốc:</span>
                    <p className="font-serif italic font-bold text-slate-800">
                      「複数のプログラムが同時に動くように管理することをマルチタスクと呼んでいます．」
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
