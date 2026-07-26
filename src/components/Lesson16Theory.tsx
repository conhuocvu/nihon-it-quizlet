import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Cpu, HelpCircle, Languages, Zap, Layers, HardDrive, RefreshCw
} from 'lucide-react';

interface Lesson16TheoryProps {
  onClose: () => void;
}

export const Lesson16Theory: React.FC<Lesson16TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'16.1' | '16.2' | '16.3' | 'minitest'>('16.1');

  // Simulator 1: Virtual Memory & Swapping (Section 16.2)
  const [ramApps, setRamApps] = useState<{ id: string; name: string; size: number; active: boolean }[]>([
    { id: 'word', name: 'Word', size: 25, active: true },
    { id: 'excel', name: 'Excel', size: 30, active: true },
    { id: 'music', name: 'Music Player', size: 15, active: true }
  ]);
  const [diskApps, setDiskApps] = useState<{ id: string; name: string; size: number }[]>([]);
  const [swapLogs, setSwapLogs] = useState<string[]>(['Khởi tạo hệ điều hành...']);

  const ramUsage = useMemo(() => {
    return ramApps.reduce((sum, app) => sum + app.size, 0);
  }, [ramApps]);

  const loadApp = (name: string, size: number) => {
    const newApp = { id: Date.now().toString(), name, size, active: true };
    const potentialRam = ramUsage + size;

    if (potentialRam > 100) {
      // Find an inactive or smallest app in RAM to swap out to disk
      if (ramApps.length === 0) {
        setSwapLogs(prev => [...prev, `⚠️ Ứng dụng quá lớn (${size}%) không thể nạp vào RAM!`]);
        return;
      }
      const appToSwap = ramApps[0];
      setRamApps(prev => [...prev.slice(1), newApp]);
      setDiskApps(prev => [...prev, { id: appToSwap.id, name: appToSwap.name, size: appToSwap.size }]);
      setSwapLogs(prev => [
        ...prev,
        `⚠️ RAM đầy (${potentialRam}%)! OS thực hiện Swapping: Chuyển ${appToSwap.name} (${appToSwap.size}%) sang ổ đĩa cứng (Virtual Memory), nạp thành công ${name} (${size}%).`
      ]);
    } else {
      setRamApps(prev => [...prev, newApp]);
      setSwapLogs(prev => [...prev, `▶️ Nạp thành công ứng dụng ${name} (${size}%) vào RAM.`]);
    }
  };

  const swapBack = (appId: string) => {
    const appToRestore = diskApps.find(a => a.id === appId);
    if (!appToRestore) return;

    const potentialRam = ramUsage + appToRestore.size;
    if (potentialRam > 100) {
      // Swap out the first app in RAM to make space
      const appToSwap = ramApps[0];
      setRamApps(prev => [...prev.slice(1), { id: appToRestore.id, name: appToRestore.name, size: appToRestore.size, active: true }]);
      setDiskApps(prev => [...prev.filter(a => a.id !== appId), { id: appToSwap.id, name: appToSwap.name, size: appToSwap.size }]);
      setSwapLogs(prev => [
        ...prev,
        `🔄 Swapping: Hoán đổi ngược ${appToRestore.name} từ Ổ cứng vào RAM, chuyển ${appToSwap.name} ra Ổ cứng làm bộ nhớ ảo.`
      ]);
    } else {
      setRamApps(prev => [...prev, { id: appToRestore.id, name: appToRestore.name, size: appToRestore.size, active: true }]);
      setDiskApps(prev => prev.filter(a => a.id !== appId));
      setSwapLogs(prev => [...prev, `🔄 Nạp lại ${appToRestore.name} vào RAM thành công.`]);
    }
  };

  const resetMemorySimulator = () => {
    setRamApps([
      { id: 'word', name: 'Word', size: 25, active: true },
      { id: 'excel', name: 'Excel', size: 30, active: true },
      { id: 'music', name: 'Music Player', size: 15, active: true }
    ]);
    setDiskApps([]);
    setSwapLogs(['Reset hệ thống bộ nhớ. Sẵn sàng...']);
  };

  // Simulator 2: Multitasking & CPU Scheduling Time-slicing
  const [activeTaskIdx, setActiveTaskIdx] = useState<number>(0);
  const tasksList = ['Word Processor', 'Spreadsheet', 'Web Browser', 'Audio Stream'];

  const nextScheduleStep = () => {
    setActiveTaskIdx(prev => (prev + 1) % tasksList.length);
  };

  // Vocabulary lists for minitests
  const mini1Vocab = useMemo(() => [
    { term: 'ミドルウェア', reading: 'middleware', meaning: 'phần mềm trung gian' },
    { term: '若干', reading: 'じゃっかん', meaning: 'một chút, một ít' },
    { term: '相違', reading: 'そうい', meaning: 'sự khác biệt, tương dị' },
    { term: '吸収する', reading: 'きゅうしゅうする', meaning: 'hấp thụ, trung hòa sự khác biệt' },
    { term: '仮想記憶', reading: 'かそうきおく', meaning: 'bộ nhớ ảo (Virtual Memory)' },
    { term: 'スワッピング', reading: 'swapping', meaning: 'tráo đổi dữ liệu RAM - Ổ cứng' },
    { term: 'スケジューリング', reading: 'scheduling', meaning: 'phân chia lịch trình CPU' },
    { term: 'マルチユーザ', reading: 'multiuser', meaning: 'đa người dùng' },
    { term: '本質的な', reading: 'ほんしつてきな', meaning: 'mang tính bản chất' },
    { term: 'ブート', reading: 'boot', meaning: 'khởi động máy tính (boot)' }
  ], []);

  const mini2Vocab = useMemo(() => [
    { term: '無償奉仕', reading: 'むしょうほうし', meaning: 'cống hiến miễn phí, vô gia' },
    { term: '実装', reading: 'じっそう', meaning: 'triển khai thực tế, lập trình ra tính năng' },
    { term: 'ベンチャー企業', reading: 'venture company', meaning: 'doanh nghiệp khởi nghiệp (startup)' },
    { term: '興す', reading: 'おこす', meaning: 'gây dựng nên, chấn hưng' },
    { term: '巨大企業', reading: 'きょだいきぎょう', meaning: 'tập đoàn khổng lồ' },
    { term: '参入する', reading: 'さんにゅうする', meaning: 'tham gia vào thị trường' },
    { term: '飛躍的に', reading: 'ひやくてきに', meaning: 'nhảy vọt, tăng tiến vượt bậc' },
    { term: 'ガレージ', reading: 'garage', meaning: 'nhà xe, ga-ra' },
    { term: '画期的な', reading: 'かっきてきな', meaning: 'mang tính đột phá, mở ra kỷ nguyên mới' },
    { term: '競う', reading: 'きそう', meaning: 'cạnh tranh, thi đấu' }
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
            LÝ THUYẾT BÀI 16
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Hệ điều hành (オペレーティングシステム)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('16.1')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '16.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Cpu size={16} />
          16.1 Hệ điều hành là gì?
        </button>
        <button
          onClick={() => setActiveTab('16.2')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '16.2' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          16.2 Chức năng & Swapping
        </button>
        <button
          onClick={() => setActiveTab('16.3')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '16.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Zap size={16} />
          16.3 Các loại OS
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
        
        {/* Tab 16.1: OS Concept */}
        {activeTab === '16.1' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                16.1 オペレーティングシステムとは (Khái niệm về Hệ điều hành OS)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Hệ điều hành (Operating System - OS)</strong> là phần mềm hệ thống (基本ソフト) đóng vai trò trung gian liên kết phần cứng máy tính và ứng dụng của người dùng.
                  </p>
                  <p>
                    <strong>Phân loại phần mềm (ソフトウェアの種類)</strong>:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1.5">
                    <li><strong>アプリケーション (Application)</strong>: Các phần mềm ứng dụng như Word, Excel, Trình duyệt.</li>
                    <li><strong>ミドルウェア (Middleware)</strong>: Nằm giữa OS và App (như Hệ quản trị CSDL - DBMS).</li>
                    <li><strong>BIOS</strong>: Hệ thống điều khiển phần cứng tối thiểu để nạp OS từ đĩa cứng vào RAM khi khởi động (<strong>ブート - Boot</strong>).</li>
                  </ul>
                </div>

                {/* Software Stack Diagram */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-3 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Mô hình phân cấp hệ thống phần mềm (図 94)</h4>
                  <div className="flex flex-col gap-1 bg-white border border-slate-200 p-3 rounded-xl shadow-inner font-mono text-center">
                    <div className="p-2 bg-rose-50 border border-rose-200 text-rose-800 rounded font-black">
                      Ứng dụng (アプリケーションソフト)
                    </div>
                    <div className="text-[10px] text-slate-400">⬇ Chạy trên nền tảng</div>
                    <div className="p-2 bg-amber-50 border border-amber-200 text-amber-800 rounded font-black">
                      Phần mềm trung gian (ミドルウェア)
                    </div>
                    <div className="text-[10px] text-slate-400">⬇ Hệ điều hành hỗ trợ</div>
                    <div className="p-2 bg-indigo-50 border border-indigo-200 text-indigo-800 rounded font-black">
                      OS (基本ソフト)
                    </div>
                    <div className="text-[10px] text-slate-400">⬇ Nạp bởi</div>
                    <div className="p-2 bg-slate-100 border border-slate-200 text-slate-600 rounded font-black">
                      BIOS (ブート処理)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 16.2: Functions, Swapping & Virtual Memory */}
        {activeTab === '16.2' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                16.2 OS の機能 (Chức năng cốt lõi & Cơ chế RAM ảo)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Hệ điều hành gánh vác 5 chức năng quản lý nền tảng:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1.5">
                    <li><strong>Giao diện (ユーザインタフェース - GUI)</strong>: Quyết định cách thức hiển thị và thao tác.</li>
                    <li><strong>Điều phối (ソフトとハードの仲介)</strong>: Dung hòa các khác biệt phần cứng của các hãng.</li>
                    <li><strong>Quản lý bộ nhớ (記憶管理)</strong>: Trao đổi tối ưu giữa Cache ↔ RAM ↔ HDD.</li>
                    <li><strong>Tiến trình (プロセス管理)</strong>: Lập lịch (Scheduling) đa nhiệm (マルチタスク) cho CPU.</li>
                    <li><strong>Người dùng (ユーザ管理)</strong>: Bảo mật truy cập file khi có nhiều người dùng (マルチユーザ).</li>
                  </ul>
                  <p className="p-3.5 bg-indigo-50 border border-indigo-150 rounded-xl text-indigo-950 text-xs">
                    💡 **仮想記憶 (Virtual Memory) & Swapping (スワッピング):**
                    <br />
                    Khi dung lượng ứng dụng vượt quá bộ nhớ RAM thực tế, OS sử dụng một phân vùng ổ đĩa cứng làm bộ nhớ RAM ảo. Quá trình di chuyển hoán đổi liên tục dữ liệu nhàn rỗi từ RAM ra ổ cứng và ngược lại gọi là **Swapping**.
                  </p>
                </div>

                {/* Virtual Memory & Swapping Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                      <HardDrive size={16} className="text-amber-600 animate-pulse" />
                      Giả lập bộ nhớ ảo (仮想記憶) & Swapping
                    </span>
                    <button
                      onClick={resetMemorySimulator}
                      className="px-2 py-1 text-[10px] font-bold text-slate-500 border border-slate-200 rounded hover:bg-slate-100 flex items-center gap-1 active:scale-95 transition-all"
                    >
                      <RefreshCw size={10} /> Reset
                    </button>
                  </div>

                  <div className="mb-2">
                    <span className="font-bold text-slate-500 block mb-1">Dung lượng RAM thực tế:</span>
                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          ramUsage > 85 ? 'bg-rose-600' : ramUsage > 60 ? 'bg-amber-500' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${ramUsage}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                      <span>Đang dùng: {ramUsage}%</span>
                      <span>Trống: {100 - ramUsage}%</span>
                    </div>
                  </div>

                  {/* Apps in RAM & Apps in Disk */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 border border-slate-200 rounded-xl">
                      <span className="font-bold text-slate-700 block mb-2">Bộ nhớ chính RAM:</span>
                      <div className="flex flex-col gap-1.5 min-h-[90px]">
                        {ramApps.map(app => (
                          <div key={app.id} className="p-1.5 bg-indigo-50 border border-indigo-150 rounded flex justify-between items-center font-mono">
                            <span>{app.name}</span>
                            <span>{app.size}%</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-3 border border-slate-200 rounded-xl">
                      <span className="font-bold text-slate-700 block mb-2">Ổ cứng (RAM Ảo):</span>
                      <div className="flex flex-col gap-1.5 min-h-[90px]">
                        {diskApps.map(app => (
                          <div key={app.id} className="p-1.5 bg-amber-50 border border-amber-150 rounded flex justify-between items-center font-mono">
                            <span>{app.name}</span>
                            <button
                              onClick={() => swapBack(app.id)}
                              className="px-1.5 py-0.5 bg-amber-600 text-white rounded text-[9px] hover:bg-amber-700 active:scale-95 cursor-pointer"
                            >
                              Khôi phục
                            </button>
                          </div>
                        ))}
                        {diskApps.length === 0 && (
                          <span className="text-[10px] text-slate-400 italic">Trống</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => loadApp('Chrome Web', 25)}
                      className="flex-1 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded font-bold transition-all text-[11px] cursor-pointer"
                    >
                      + Nạp thêm Chrome (25% RAM)
                    </button>
                    <button
                      onClick={() => loadApp('Photoshop', 40)}
                      className="flex-1 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded font-bold transition-all text-[11px] cursor-pointer"
                    >
                      + Nạp thêm Photoshop (40% RAM)
                    </button>
                  </div>

                  <div className="bg-slate-900 text-emerald-400 p-2.5 rounded-xl font-mono text-[9px] max-h-[85px] overflow-y-auto flex flex-col gap-1">
                    {swapLogs.map((log, i) => (
                      <div key={i}>{log}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CPU Scheduling Simulator */}
              <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/40 text-xs mt-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                    <Cpu size={16} className="text-indigo-600 animate-pulse" />
                    Mô phỏng Đa nhiệm CPU (マルチタスク & スケジューリング)
                  </h4>
                  <button
                    onClick={nextScheduleStep}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold active:scale-95 transition-all cursor-pointer"
                  >
                    Gửi chu kỳ CPU tiếp theo ➔
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
                  Vì CPU tại một thời điểm chỉ xử lý một dòng lệnh của một phần mềm duy nhất, hệ điều hành sẽ cắt vụn thời gian (Time-slicing) và lập lịch tuần hoàn siêu nhanh để tạo ra cảm giác đa nhiệm đồng thời.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {tasksList.map((task, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${
                        activeTaskIdx === idx
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-950 font-bold scale-105 shadow-sm'
                          : 'border-slate-200 bg-white text-slate-600'
                      }`}
                    >
                      <div className="text-[10px] text-slate-400 mb-1 font-mono">TASK 0{idx + 1}</div>
                      <div className="font-bold">{task}</div>
                      {activeTaskIdx === idx ? (
                        <div className="text-[9px] text-indigo-700 bg-indigo-100 rounded px-1.5 py-0.5 mt-2 font-mono animate-pulse">
                          ● ACTIVE (CPU Executing)
                        </div>
                      ) : (
                        <div className="text-[9px] text-slate-400 rounded px-1.5 py-0.5 mt-2 font-mono">
                          WAITING
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 16.3: OS Types */}
        {activeTab === '16.3' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                16.3 OS の種類 (Lịch sử & Phân loại các Hệ điều hành tiêu biểu)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-indigo-300 transition-all flex flex-col gap-2">
                  <span className="font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-150 px-2 py-0.5 rounded self-start text-[10px]">
                    UNIX & Linux
                  </span>
                  <h4 className="font-bold text-lg text-slate-800">UNIX / Linux (Linus Torvalds)</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    UNIX được phát triển tại AT&T Bell Labs, thiết kế nhỏ gọn, dễ mở rộng. Linux được phát triển bởi Linus Torvalds dưới dạng Freeware mã nguồn mở, kế thừa tinh thần chia sẻ của UNIX, hiện đóng vai trò chủ đạo cho máy chủ doanh nghiệp.
                  </p>
                </div>

                <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-blue-300 transition-all flex flex-col gap-2">
                  <span className="font-extrabold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded self-start text-[10px]">
                    Windows
                  </span>
                  <h4 className="font-bold text-lg text-slate-800">Microsoft Windows (Bill Gates)</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Khởi nguồn từ hệ điều hành MS-DOS hiển thị ký tự văn bản của Bill Gates, bùng nổ khi được hãng khổng lồ IBM chọn làm hệ điều hành cho máy tính cá nhân (PC). Sau đó phát triển giao diện đồ họa chuột và cửa sổ (GUI).
                  </p>
                </div>

                <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-purple-300 transition-all flex flex-col gap-2">
                  <span className="font-extrabold text-purple-700 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded self-start text-[10px]">
                    MacOS
                  </span>
                  <h4 className="font-bold text-lg text-slate-800">Apple MacOS (Steve Jobs)</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Khởi nghiệp từ ga-ra ô tô gia đình của Steve Jobs và Steve Wozniak. Năm 1984, Apple ra mắt MacOS tích hợp giao diện chuột kéo thả mang tính đột phá lớn về trải nghiệm người dùng. OS X về sau sử dụng lõi UNIX để tăng tính ổn định.
                  </p>
                </div>

                <div className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm hover:border-amber-300 transition-all flex flex-col gap-2">
                  <span className="font-extrabold text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded self-start text-[10px]">
                    家電用OS
                  </span>
                  <h4 className="font-bold text-lg text-slate-800">Hệ điều hành nhúng & Gia dụng</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    OS tích hợp trong đầu đĩa, định vị ô tô, máy game. Đặc biệt trên thị trường di động, các hệ điều hành Symbian, iOS, Android, Windows Phone cạnh tranh thị phần gay gắt, đóng vai trò then chốt cho kinh doanh IT.
                  </p>
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
                  PCのOSに関する記述のうち，適切なものはどれか。
                </p>
                <div className="grid grid-cols-1 gap-2 mt-4 text-xs font-medium">
                  {[
                    { label: '(ア) OS が異なっていても OS とアプリ間の I/F は統一されているため意識せず処理できる。', isCorrect: false },
                    { label: '(イ) OS はアプリケーションに対して，CPU やメモリ，補助記憶装置などのコンピュータ資源を割り当てる。', isCorrect: true },
                    { label: '(ウ) OS はファイルの文字コードを自動変換する機能をもつので意識せずに処理できる。', isCorrect: false },
                    { label: '(エ) アプリが自由に OS 機能を利用できるようにソースコード公開が義務付けられている。', isCorrect: false }
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
                  Hệ điều hành (OS) chịu trách nhiệm quản lý, phân phối tài nguyên hệ thống (bao gồm CPU, RAM, ổ đĩa cứng/bộ nhớ phụ) cho các ứng dụng một cách hợp lý và an toàn (Đáp án **イ**).
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
                      パソコンに OS が搭載される以前において，アプリケーションソフトは，ハードウェアメーカ毎に対応する製品が作られていました．また，マウスやキーボードなどのハードウェアもメーカ毎に開発されていました．
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
                        <strong>Gợi ý đối chiếu:</strong> Trước khi máy tính cá nhân được cài đặt hệ điều hành, các phần mềm ứng dụng phải được sản xuất riêng tương thích với từng nhà sản xuất phần cứng. Hơn nữa, các phần cứng như chuột và bàn phím cũng được phát triển riêng bởi mỗi nhà sản xuất.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Các phần mềm như Windows, MacOS, Linux… được gọi là hệ điều hành, viết tắt là OS. OS cũng là một loại phần mềm nhưng có vị trí trung gian giữa các phần mềm ứng dụng như word, excel… và phần cứng.
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
                        <strong>Gợi ý đối chiếu:</strong> Windows，MacOS，Linuxなどのソフトウェアは，オペレーティングシステム，または略してOSと呼ばれます．OSはソフトウェアの一種ですが，ワープロや表計算などのアプリケーションソフトと，ハードウェアとの中間的な位置付けになります．
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
                      OS はパソコンだけでなく，ハードディスクレコーダ，カーナビ，ゲーム機などの家電製品にも組み込まれています．従来，家電製品用ソフトウェアは製品ごとに開発されていましたが，OSの搭載により開発期間が短縮されています．
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
                        <strong>Gợi ý đối chiếu:</strong> Hệ điều hành không chỉ chạy trên máy tính cá nhân, mà còn được nhúng tích hợp sẵn vào các thiết bị điện tử gia dụng như đầu ghi đĩa cứng, định vị vệ tinh ô tô (car navigation), máy chơi game. Trước đây phần mềm gia dụng phải được phát triển thủ công cho từng mẫu máy riêng biệt, nay nhờ trang bị hệ điều hành chung mà thời gian phát triển đã rút ngắn đáng kể.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Việc quản lý nhiều chương trình cùng chạy cùng một lúc được gọi là đa nhiệm.
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
                        <strong>Gợi ý đối chiếu:</strong> 複数のプログラムが同時に動くように管理することをマルチタスクと呼んでいます。
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
