import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, BookOpen, Layers, GitFork, Network, Database, 
  Cpu, List, Table, Languages, Info, ChevronRight, Check, Play, RefreshCw, Eye, EyeOff
} from 'lucide-react';

interface TheoryViewerProps {
  lessonId: number;
  onClose: () => void;
}

export const TheoryViewer: React.FC<TheoryViewerProps> = ({ lessonId, onClose }) => {
  const [activeTab, setActiveTab] = useState<'17.1' | '17.2' | '17.3' | 'minitest'>('17.1');

  if (lessonId !== 17) {
    return (
      <div className="w-full max-w-md mx-auto text-center py-16 px-4 bg-white border rounded-2xl shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-2">Chưa có lý thuyết</h3>
        <p className="text-slate-500 mb-6">Mục lý thuyết cho bài học này hiện đang được biên soạn.</p>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          Quay lại chọn bài
        </button>
      </div>
    );
  }

  // Interactive state for 17.1 index demo
  const [searchMethod, setSearchMethod] = useState<'linear' | 'indexed'>('linear');
  const [searchTarget, setSearchTarget] = useState<string>('Sato');
  const [searchStep, setSearchStep] = useState<number>(-1);
  const [searchLogs, setSearchLogs] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Address book data for searching
  const addressBook = useMemo(() => [
    { name: 'Abe', group: 'A' },
    { name: 'Aoki', group: 'A' },
    { name: 'Ito', group: 'I' },
    { name: 'Ueno', group: 'U' },
    { name: 'Kato', group: 'K' },
    { name: 'Kimura', group: 'K' },
    { name: 'Sato', group: 'S' },
    { name: 'Suzuki', group: 'S' },
    { name: 'Tanaka', group: 'T' },
    { name: 'Nakajima', group: 'N' }
  ], []);

  // Run Index Search Simulation
  const runSearchSimulation = () => {
    setIsSearching(true);
    setSearchStep(0);
    setSearchLogs([]);
    let steps: string[] = [];
    
    if (searchMethod === 'linear') {
      let index = 0;
      const interval = setInterval(() => {
        if (index < addressBook.length) {
          const item = addressBook[index];
          setSearchStep(index);
          const log = `Bước ${index + 1}: Kiểm tra "${item.name}"... ${item.name === searchTarget ? 'Đúng!' : 'Không phải.'}`;
          steps.push(log);
          setSearchLogs([...steps]);
          
          if (item.name === searchTarget) {
            clearInterval(interval);
            setIsSearching(false);
          } else {
            index++;
          }
        } else {
          clearInterval(interval);
          setIsSearching(false);
        }
      }, 400);
    } else {
      // Indexed search simulation
      const group = searchTarget.substring(0, 1).toUpperCase();
      let index = addressBook.findIndex(item => item.group === group);
      
      steps.push(`1. Sử dụng chỉ mục: Nhảy thẳng tới nhóm chữ cái "${group}" (vị trí danh sách bắt đầu từ phần tử thứ ${index + 1})`);
      setSearchLogs([...steps]);
      setSearchStep(index);
      
      setTimeout(() => {
        if (index !== -1) {
          let found = false;
          while (index < addressBook.length && addressBook[index].group === group) {
            const item = addressBook[index];
            steps.push(`2. Tìm trong nhóm "${group}": Kiểm tra "${item.name}"... ${item.name === searchTarget ? 'Đúng!' : 'Không phải.'}`);
            setSearchStep(index);
            setSearchLogs([...steps]);
            
            if (item.name === searchTarget) {
              found = true;
              break;
            }
            index++;
          }
          if (!found) {
            steps.push(`Không tìm thấy "${searchTarget}" trong nhóm "${group}".`);
            setSearchLogs([...steps]);
          }
        } else {
          steps.push(`Không có nhóm chỉ mục "${group}" trong danh bạ.`);
          setSearchLogs([...steps]);
        }
        setIsSearching(false);
      }, 800);
    }
  };

  // Interactive state for 17.2 Tree representation path
  const [treeSelectedNode, setTreeSelectedNode] = useState<string | null>(null);

  // Interactive state for 17.2 Relational Model tracer
  const [relationalLecture, setRelationalLecture] = useState<string | null>(null);

  // Interactive state for 17.3 Set operations
  const [setSelectedOp, setSetSelectedOp] = useState<'union' | 'intersection' | 'difference' | 'product'>('union');
  const setA = ['A (Tanaka)', 'B (Sato)', 'C (Suzuki)'];
  const setB = ['B (Sato)', 'C (Suzuki)', 'D (Takahashi)'];

  // Interactive state for 17.3 DB operations
  const [dbSelectedOp, setDbSelectedOp] = useState<'original' | 'project' | 'select' | 'join'>('original');

  // Student table for operations
  const originalStudentTable = [
    { id: '101', name: 'Tanaka', birthplace: 'Tokyo', age: 20 },
    { id: '102', name: 'Sato', birthplace: 'Osaka', age: 21 },
    { id: '103', name: 'Suzuki', birthplace: 'Tokyo', age: 22 },
    { id: '104', name: 'Takahashi', birthplace: 'Fukuoka', age: 19 }
  ];

  // Address lookup table for join
  const birthplaceCodeTable = [
    { birthplace: 'Tokyo', region: 'Kanto' },
    { birthplace: 'Osaka', region: 'Kansai' },
    { birthplace: 'Fukuoka', region: 'Kyushu' }
  ];



  // Minitest state
  const vocabList = [
    { term: '完備性', reading: 'かんびせい', meaning: 'tính toàn vẹn / hoàn bị' },
    { term: '実用性', reading: 'じつようせい', meaning: 'tính ứng dụng / thực tiễn' },
    { term: '索引', reading: 'さくいん', meaning: 'chỉ mục' },
    { term: '急激', reading: 'きゅうげき', meaning: 'mạnh mẽ / gấp gáp' },
    { term: '整合性', reading: 'せいごうせい', meaning: 'tính nhất quán / tương thích' },
    { term: '保つ', reading: 'たもつ', meaning: 'bảo đảm / duy trì' },
    { term: '一貫性', reading: 'いっかんせい', meaning: 'tính thống nhất / nhất quán' },
    { term: 'レコード', reading: 'record', meaning: 'đĩa / bản ghi' },
    { term: '節/ノード', reading: 'せつ/node', meaning: 'nhánh / nút' },
    { term: 'たどる', reading: 'たどる', meaning: 'đến nơi / lần theo' }
  ];

  const [minitestAnswers, setMinitestAnswers] = useState<{[key: number]: {reading: string, meaning: string}}>({});
  const [showMinitestVocabAnswers, setShowMinitestVocabAnswers] = useState(false);
  const [revealedVocabIndices, setRevealedVocabIndices] = useState<number[]>([]);

  const toggleRevealVocab = (idx: number) => {
    setRevealedVocabIndices(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };
  const [minitestTranslation1, setMinitestTranslation1] = useState('');
  const [showTranslation1Answer, setShowTranslation1Answer] = useState(false);
  const [minitestTranslation2, setMinitestTranslation2] = useState('');
  const [showTranslation2Answer, setShowTranslation2Answer] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-4 md:py-8 flex flex-col gap-6">
      {/* Back Header */}
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
            LÝ THUYẾT BÀI 17
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">データベース理論 (Lý thuyết CSDL)</h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('17.1')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '17.1'
              ? 'bg-white text-indigo-700 shadow-md'
              : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <BookOpen size={16} />
          17.1 Định nghĩa & Yêu cầu
        </button>
        <button
          onClick={() => setActiveTab('17.2')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '17.2'
              ? 'bg-white text-indigo-700 shadow-md'
              : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          17.2 Các mô hình biểu diễn
        </button>
        <button
          onClick={() => setActiveTab('17.3')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '17.3'
              ? 'bg-white text-indigo-700 shadow-md'
              : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Database size={16} />
          17.3 Các phép toán dữ liệu
        </button>

        <button
          onClick={() => setActiveTab('minitest')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'minitest'
              ? 'bg-white text-indigo-700 shadow-md'
              : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Languages size={16} />
          Mini Test 1
        </button>
      </div>

      {/* Main Tab Content */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 md:p-8 shadow-xl shadow-slate-100/40 min-h-[500px]">
        
        {/* ==================== TAB 17.1 ==================== */}
        {activeTab === '17.1' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Textbook Intro */}
            <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50/40 p-4 rounded-r-xl">
              <span className="text-[10px] font-extrabold uppercase text-indigo-600 tracking-wider">Định nghĩa SGK</span>
              <h3 className="text-lg font-bold text-slate-800 mt-1">17.1 データベースとは (Cơ sở dữ liệu là gì?)</h3>
              <p className="text-slate-700 text-sm leading-relaxed mt-2 select-text font-serif italic">
                「データベースとは大量のデータを保存，管理でき，データの検索，書き換えが容易に行えるものです．学籍簿などの比較的小規模のシステムから，銀行のオンライン，戸籍管理などの大規模なものまであります．インターネット上の膨大なホームページもデータの集まりと見ることはできますが，組織的に保存，管理され，検索できるわけではないので，通常データベースシステムとは見なされません．」
              </p>
              <div className="mt-3 text-xs text-slate-500 bg-white/70 p-2 rounded-lg border border-slate-100">
                <span className="font-bold text-indigo-600">Dịch nghĩa:</span> CSDL là hệ thống có thể lưu trữ, quản lý một lượng lớn dữ liệu, giúp việc tìm kiếm và ghi đè (thay đổi) dữ liệu được thực hiện dễ dàng. Từ các hệ thống quy mô tương đối nhỏ như Học bạ/Danh sách học sinh (学籍簿) cho đến các hệ thống quy mô lớn như Hệ thống ngân hàng trực tuyến, Quản lý hộ khẩu (戸籍管理). Các trang web khổng lồ trên Internet có thể coi là tập hợp dữ liệu, nhưng do không được lưu trữ, quản lý và tìm kiếm một cách có hệ thống, nên thông thường chúng không được coi là hệ thống CSDL.
              </div>
            </div>

            {/* 3 Important Elements */}
            <div>
              <h4 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Info size={18} className="text-indigo-600" />
                3 yếu tố quan trọng của Hệ thống CSDL (Học thuộc lòng!)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Yếu tố 1: Tốc độ tìm kiếm */}
                <div className="border border-slate-200 rounded-xl p-5 hover:border-indigo-200 transition-all flex flex-col justify-between bg-slate-50/30">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">Yếu tố 1</span>
                      <span className="text-xs text-slate-400 font-bold">Tìm kiếm nhanh</span>
                    </div>
                    <h5 className="font-extrabold text-base text-slate-800">1. 検索速度 (Tốc độ tìm kiếm)</h5>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Để xử lý lượng lớn dữ liệu, tốc độ khi tìm kiếm rất quan trọng. Thay vì duyệt từng phần tử từ đầu đến cuối (tốn thời gian), CSDL sử dụng <strong>Chỉ mục (索引 - Index)</strong> (ví dụ tra cứu theo vần A, K, S...) để tăng tốc độ tìm kiếm.
                    </p>
                  </div>
                </div>

                {/* Yếu tố 2: Lượng dữ liệu */}
                <div className="border border-slate-200 rounded-xl p-5 hover:border-indigo-200 transition-all flex flex-col justify-between bg-slate-50/30">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">Yếu tố 2</span>
                      <span className="text-xs text-slate-400 font-bold">Chứa lượng lớn</span>
                    </div>
                    <h5 className="font-extrabold text-base text-slate-800">2. データ量 (Lượng dữ liệu)</h5>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Ít nhất phải xử lý được hàng vạn (chục nghìn) dữ liệu. Nếu bị giới hạn bởi phần cứng, hệ điều hành (OS) hoặc đường truyền, hay khi lượng dữ liệu lớn lên làm tốc độ tìm kiếm giảm đột ngột (急激), thì không thể xây dựng CSDL lớn.
                    </p>
                  </div>
                </div>

                {/* Yếu tố 3: Hoàn bị */}
                <div className="border border-slate-200 rounded-xl p-5 hover:border-indigo-200 transition-all flex flex-col justify-between bg-slate-50/30">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">Yếu tố 3</span>
                      <span className="text-xs text-slate-400 font-bold">Độ toàn vẹn</span>
                    </div>
                    <h5 className="font-extrabold text-base text-slate-800">3. 完備性 (Tính toàn vẹn / Hoàn bị)</h5>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Đảm bảo tính nhất quán (整合性 - Integrity) của dữ liệu kể cả khi thay đổi hoặc xóa. Ví dụ: Khi thay đổi địa chỉ (住所), mã bưu điện (郵便番号) liên quan cũng phải tự động thay đổi đồng bộ để giữ tính nhất quán (一貫性).
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Demo: Linear vs Indexed Search */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-indigo-50/20 via-white to-purple-50/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="p-1 rounded-lg bg-indigo-500 text-white"><Cpu size={16} /></span>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-800">Trực quan hóa: Tìm kiếm Tuyến tính (Linear) vs Chỉ mục (Index)</h4>
                  <p className="text-xs text-slate-500">Mô phỏng cách hệ thống CSDL sử dụng Chỉ mục để tăng tốc độ truy cập.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                {/* Control Panel */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 block mb-1">Phương thức tìm kiếm</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSearchMethod('linear')}
                        className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all ${
                          searchMethod === 'linear' 
                            ? 'bg-indigo-600 border-indigo-600 text-white' 
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        Tuyến tính (Duyệt từng câu)
                      </button>
                      <button
                        onClick={() => setSearchMethod('indexed')}
                        className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all ${
                          searchMethod === 'indexed' 
                            ? 'bg-indigo-600 border-indigo-600 text-white' 
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        Bằng Chỉ mục (Index)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 block mb-1.5">Tên cần tìm kiếm</label>
                    <div className="flex flex-wrap gap-1.5">
                      {['Aoki', 'Kato', 'Sato', 'Tanaka', 'Nakajima'].map((name) => (
                        <button
                          key={name}
                          onClick={() => setSearchTarget(name)}
                          disabled={isSearching}
                          className={`px-2.5 py-1 text-xs font-semibold rounded-md border transition-all ${
                            searchTarget === name
                              ? 'bg-indigo-55 border-indigo-300 text-indigo-700 font-bold'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                          } ${isSearching ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={runSearchSimulation}
                    disabled={isSearching}
                    className="w-full py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-indigo-100 disabled:opacity-50"
                  >
                    <Play size={14} fill="currentColor" />
                    Bắt đầu Tìm kiếm
                  </button>
                </div>

                {/* List simulation */}
                <div className="border border-slate-200 rounded-xl p-4 bg-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-500">Danh bạ lưu trữ</span>
                    {searchMethod === 'indexed' && (
                      <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                        Đã lập Chỉ mục (A, I, U, K, S, T, N)
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5 max-h-[180px] overflow-y-auto pr-1">
                    {addressBook.map((item, idx) => {
                      const isCurrentStep = searchStep === idx;
                      const isTarget = item.name === searchTarget && searchStep >= idx;
                      return (
                        <div
                          key={item.name}
                          className={`flex items-center justify-between p-2 rounded-lg text-xs border transition-all duration-300 ${
                            isCurrentStep
                              ? 'border-indigo-400 bg-indigo-50 font-bold text-indigo-900 scale-[1.02] shadow-sm'
                              : isTarget && idx <= searchStep
                              ? 'border-emerald-400 bg-emerald-50 text-emerald-800 font-bold'
                              : 'border-slate-100 bg-slate-50/50 text-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] ${
                              searchMethod === 'indexed' 
                                ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' 
                                : 'bg-slate-200 text-slate-600'
                            }`}>
                              {item.group}
                            </span>
                            <span>{item.name}</span>
                          </div>
                          {isCurrentStep && (
                            <span className="text-[10px] text-indigo-600 font-bold animate-pulse">
                              Đang kiểm tra...
                            </span>
                          )}
                          {item.name === searchTarget && searchStep >= idx && (
                            <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                              <Check size={12} className="stroke-[3px]" /> Khớp!
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Logs / Console */}
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-900 text-slate-300 font-mono text-[11px] h-[210px] flex flex-col justify-between">
                  <div>
                    <div className="text-slate-500 border-b border-slate-800 pb-1.5 mb-2 font-bold flex justify-between">
                      <span>KẾT QUẢ MÔ PHỎNG</span>
                      <span className="text-[10px] bg-slate-800 text-indigo-400 px-1.5 py-0.2 rounded uppercase">
                        {searchMethod}
                      </span>
                    </div>
                    <div className="overflow-y-auto max-h-[140px] flex flex-col gap-1 pr-1">
                      {searchLogs.length === 0 ? (
                        <span className="text-slate-500 italic">Chọn phương thức và bắt đầu tìm kiếm...</span>
                      ) : (
                        searchLogs.map((log, idx) => (
                          <div key={idx} className="leading-relaxed border-l-2 border-indigo-500 pl-2 animate-fadeIn">
                            {log}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                  {searchLogs.length > 0 && !isSearching && (
                    <div className="text-right text-emerald-400 font-bold border-t border-slate-800 pt-1">
                      Hoàn tất! Số lượt kiểm tra: {searchMethod === 'linear' ? searchStep + 1 : 2}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 17.2 ==================== */}
        {activeTab === '17.2' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Textbook Intro */}
            <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50/40 p-4 rounded-r-xl">
              <h3 className="text-lg font-bold text-slate-800">17.2 データベースの表現法 (Mô hình biểu diễn CSDL)</h3>
              <p className="text-slate-700 text-sm leading-relaxed mt-2 select-text font-serif italic">
                「データベースのデータを表す単位のことをレコードと言い，レコード間の関係を表す代表的な表現法は階層的表現，網的表現，関係的表現の3つです．」
              </p>
              <div className="mt-2 text-xs text-slate-500">
                <span className="font-bold text-indigo-600">Chú ý:</span> Đơn vị biểu diễn dữ liệu gọi là <strong>Record (レコード - Bản ghi)</strong>. Có 3 mô hình biểu diễn mối quan hệ giữa các bản ghi tiêu biểu:
              </div>
            </div>

            {/* The 3 Models Visualization tabs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Model Select Sidebar */}
              <div className="lg:col-span-4 flex flex-col gap-2.5">
                
                {/* 1. Hierarchical */}
                <div 
                  onClick={() => setTreeSelectedNode(null)} 
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    treeSelectedNode === null && activeTab === '17.2'
                      ? 'border-indigo-500 bg-indigo-50/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <h4 className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
                    <GitFork size={15} className="text-indigo-600 rotate-90" />
                    (1) 階層的表現 (木構造)
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-semibold">Phân cấp / Dạng cây (Tree)</p>
                  <ul className="text-[11px] text-slate-600 mt-2 list-disc pl-4 flex flex-col gap-0.5">
                    <li>Dạng quan hệ cha-con-cháu.</li>
                    <li>Tìm từ gốc (根/ルート) rồi rẽ nhánh (節/ノード) để xuống lá (葉).</li>
                    <li><span className="text-rose-600 font-bold">Nhược điểm:</span> Tốn thời gian tìm kiếm; dữ liệu ở lá dễ trùng lặp; xóa nút cha sẽ xóa luôn nút con (ảnh hưởng đến <span className="font-bold">完備性</span>).</li>
                  </ul>
                </div>

                {/* 2. Network */}
                <div 
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 opacity-90"
                >
                  <h4 className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
                    <Network size={15} className="text-indigo-600" />
                    (2) 網的表現 (親子構造)
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-semibold">Dạng mạng lưới (Network)</p>
                  <ul className="text-[11px] text-slate-600 mt-2 list-disc pl-4 flex flex-col gap-0.5">
                    <li>Mối quan hệ mẹ-con 2 cấp liên kết tuần tự.</li>
                    <li>Sử dụng cấu trúc bản ghi đặc biệt (構造レコード) liên kết với bản ghi dữ liệu (データレコード).</li>
                    <li>Đảm bảo không trùng dữ liệu và bảo đảm hoàn bị.</li>
                    <li><span className="text-rose-600 font-bold">Nhược điểm:</span> Tạo quan hệ tùy ý (場当たり的), thiếu quy tắc, toán học khó chứng minh.</li>
                  </ul>
                </div>

                {/* 3. Relational */}
                <div 
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 opacity-90"
                >
                  <h4 className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
                    <Table size={15} className="text-indigo-600" />
                    (3) 関係的表現 (リレーショナル)
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-semibold">Dạng quan hệ (Relational)</p>
                  <ul className="text-[11px] text-slate-600 mt-2 list-disc pl-4 flex flex-col gap-0.5">
                    <li>Biểu diễn dữ liệu bằng các <strong>Bảng độc lập (表)</strong>.</li>
                    <li>Liên kết các bảng thông qua khóa để truy cập dữ liệu.</li>
                    <li>Thiết kế đơn giản, phổ thông, có toán học đảm bảo tính hoàn bị và dễ lập trình.</li>
                    <li><span className="text-emerald-600 font-bold">Ưu điểm:</span> Là nền tảng của đa số hệ CSDL hiện đại.</li>
                  </ul>
                </div>

              </div>

              {/* Model Live Visualizer Display */}
              <div className="lg:col-span-8 border-2 border-dashed border-slate-200 rounded-2xl p-5 flex flex-col justify-between bg-slate-50/20 min-h-[400px]">
                
                {/* Visualizer header */}
                <div className="border-b border-slate-200 pb-3 mb-4 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 uppercase">Mô phỏng trực quan</span>
                    <h5 className="font-bold text-slate-800 text-sm mt-1">Hãy bấm tương tác vào sơ đồ dưới đây để xem cách hoạt động</h5>
                  </div>
                  <button 
                    onClick={() => { setTreeSelectedNode(null); setRelationalLecture(null); }}
                    className="text-xs text-indigo-600 font-bold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <RefreshCw size={12} /> Reset
                  </button>
                </div>

                {/* VISUALIZER 1: Tree / Hierarchical structure */}
                <div className="flex-grow flex flex-col justify-center items-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-center">
                    
                    {/* SVG Tree Graph */}
                    <div className="flex justify-center p-2 bg-white rounded-xl border border-slate-200 shadow-sm">
                      <svg width="280" height="240" viewBox="0 0 280 240" className="overflow-visible">
                        {/* Lines */}
                        {/* Root to Nodes */}
                        <line x1="140" y1="30" x2="70" y2="100" stroke={treeSelectedNode?.startsWith('Shinjuku') || treeSelectedNode === 'Root' ? '#6366f1' : '#cbd5e1'} strokeWidth="2.5" />
                        <line x1="140" y1="30" x2="210" y2="100" stroke={treeSelectedNode?.startsWith('Shibuya') || treeSelectedNode === 'Root' ? '#6366f1' : '#cbd5e1'} strokeWidth="2.5" />
                        
                        {/* Nodes to Leaves */}
                        <line x1="70" y1="100" x2="35" y2="170" stroke={treeSelectedNode === 'Nishi-Shinjuku' ? '#6366f1' : '#cbd5e1'} strokeWidth="2" />
                        <line x1="70" y1="100" x2="105" y2="170" stroke={treeSelectedNode === 'Kabukicho' ? '#6366f1' : '#cbd5e1'} strokeWidth="2" />
                        
                        <line x1="210" y1="100" x2="175" y2="170" stroke={treeSelectedNode === 'Udagawacho' ? '#6366f1' : '#cbd5e1'} strokeWidth="2" />
                        <line x1="210" y1="100" x2="245" y2="170" stroke={treeSelectedNode === 'Dogenzaka' ? '#6366f1' : '#cbd5e1'} strokeWidth="2" />

                        {/* Root Node */}
                        <g className="cursor-pointer" onClick={() => setTreeSelectedNode('Root')}>
                          <circle cx="140" cy="30" r="18" fill={treeSelectedNode ? '#818cf8' : '#6366f1'} className="transition-all" />
                          <text x="140" y="34" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">東京都</text>
                        </g>
                        <text x="140" y="10" fill="#64748b" fontSize="8" fontWeight="black" textAnchor="middle">根 (ルート - Root)</text>

                        {/* Middle Nodes */}
                        <g className="cursor-pointer" onClick={() => setTreeSelectedNode('Shinjuku')}>
                          <circle cx="70" cy="100" r="18" fill={treeSelectedNode === 'Shinjuku' || treeSelectedNode?.startsWith('Nishi') || treeSelectedNode === 'Kabukicho' ? '#6366f1' : '#94a3b8'} className="transition-all" />
                          <text x="70" y="104" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">新宿区</text>
                        </g>

                        <g className="cursor-pointer" onClick={() => setTreeSelectedNode('Shibuya')}>
                          <circle cx="210" cy="100" r="18" fill={treeSelectedNode === 'Shibuya' || treeSelectedNode === 'Udagawacho' || treeSelectedNode === 'Dogenzaka' ? '#6366f1' : '#94a3b8'} className="transition-all" />
                          <text x="210" y="104" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">渋谷区</text>
                        </g>
                        <text x="5" y="104" fill="#64748b" fontSize="8" fontWeight="black" textAnchor="start">節 (ノード - Node)</text>

                        {/* Leaves */}
                        <g className="cursor-pointer" onClick={() => setTreeSelectedNode('Nishi-Shinjuku')}>
                          <circle cx="35" cy="170" r="18" fill={treeSelectedNode === 'Nishi-Shinjuku' ? '#4f46e5' : '#cbd5e1'} className="transition-all" />
                          <text x="35" y="174" fill="black" fontSize="7" fontWeight="bold" textAnchor="middle">西新宿</text>
                        </g>

                        <g className="cursor-pointer" onClick={() => setTreeSelectedNode('Kabukicho')}>
                          <circle cx="105" cy="170" r="18" fill={treeSelectedNode === 'Kabukicho' ? '#4f46e5' : '#cbd5e1'} className="transition-all" />
                          <text x="105" y="174" fill="black" fontSize="7" fontWeight="bold" textAnchor="middle">歌舞伎町</text>
                        </g>

                        <g className="cursor-pointer" onClick={() => setTreeSelectedNode('Udagawacho')}>
                          <circle cx="175" cy="170" r="18" fill={treeSelectedNode === 'Udagawacho' ? '#4f46e5' : '#cbd5e1'} className="transition-all" />
                          <text x="175" y="174" fill="black" fontSize="7" fontWeight="bold" textAnchor="middle">宇田川</text>
                        </g>

                        <g className="cursor-pointer" onClick={() => setTreeSelectedNode('Dogenzaka')}>
                          <circle cx="245" cy="170" r="18" fill={treeSelectedNode === 'Dogenzaka' ? '#4f46e5' : '#cbd5e1'} className="transition-all" />
                          <text x="245" y="174" fill="black" fontSize="7" fontWeight="bold" textAnchor="middle">道玄坂</text>
                        </g>
                        <text x="5" y="174" fill="#64748b" fontSize="8" fontWeight="black" textAnchor="start">葉 (リーフ - Leaf)</text>
                      </svg>
                    </div>

                    {/* Explanatory description card */}
                    <div className="bg-white border border-slate-200 rounded-xl p-4 text-xs flex flex-col gap-2 shadow-sm min-h-[180px] justify-center">
                      {treeSelectedNode === null ? (
                        <div className="text-center text-slate-500 italic">
                          Bấm vào một nút (Root, Node hoặc Leaf) trên sơ đồ cây bên trái để khám phá cách tìm kiếm!
                        </div>
                      ) : (
                        <div>
                          <div className="font-bold text-indigo-700 text-sm mb-1 uppercase flex items-center gap-1.5">
                            <ChevronRight size={14} className="stroke-[3px]" />
                            {treeSelectedNode === 'Root' && 'Nút gốc: 東京都 (Root)'}
                            {(treeSelectedNode === 'Shinjuku' || treeSelectedNode === 'Shibuya') && `Nút rẽ nhánh: ${treeSelectedNode === 'Shinjuku' ? '新宿区' : '渋谷区'} (Node)`}
                            {!(treeSelectedNode === 'Root' || treeSelectedNode === 'Shinjuku' || treeSelectedNode === 'Shibuya') && `Nút Lá: ${treeSelectedNode} (Leaf)`}
                          </div>
                          
                          <p className="text-slate-600 leading-relaxed mt-1">
                            {treeSelectedNode === 'Root' && 'Để tìm kiếm bất kỳ địa chỉ nào, bắt đầu từ gốc (Root - 東京都). Sau đó nhìn sang tầng tiếp theo để xem rẽ nhánh đi đâu.'}
                            {treeSelectedNode === 'Shinjuku' && 'Nút rẽ nhánh (Node) trung gian của Quận Shinjuku. Từ đây có hai nhánh nhỏ hơn dẫn tới các Phường (Lá - Leaf) là Tây Shinjuku hoặc Kabukicho.'}
                            {treeSelectedNode === 'Shibuya' && 'Nút rẽ nhánh (Node) trung gian của Quận Shibuya. Dẫn tới các phường là Udagawa hoặc Dogenzaka.'}
                            {treeSelectedNode === 'Nishi-Shinjuku' && 'Để tìm đến "西新宿" (Tây Shinjuku), thuật toán phải đi từ gốc: 東京都 (Root) -> rẽ xuống Shinjuku (Node) -> rồi đi tiếp xuống Nishi-Shinjuku (Leaf). Không thể truy cập trực tiếp từ Shibuya.'}
                            {treeSelectedNode === 'Kabukicho' && 'Lộ trình tìm kiếm: 東京都 (Root) -> 新宿区 (Node) -> 歌舞伎町 (Leaf).'}
                            {treeSelectedNode === 'Udagawacho' && 'Lộ trình tìm kiếm: 東京都 (Root) -> 渋谷区 (Node) -> 宇田川 (Leaf).'}
                            {treeSelectedNode === 'Dogenzaka' && 'Lộ trình tìm kiếm: 東京都 (Root) -> 渋谷区 (Node) -> 道玄坂 (Leaf).'}
                          </p>

                          <div className="mt-3 p-2 bg-indigo-50 rounded-lg text-[10px] text-indigo-800 border border-indigo-100">
                            <strong>Khuyết điểm cấu trúc cây:</strong> Nếu bạn muốn xóa Quận Shinjuku, thì toàn bộ các Phường (Tây Shinjuku, Kabukicho) ở bên dưới sẽ biến mất theo, gây mất tính <strong>完備性</strong> (toàn vẹn dữ liệu).
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Interactive Relational Model Simulator */}
                <div className="border-t border-slate-200 pt-5 mt-5">
                  <div className="flex justify-between items-center mb-2.5">
                    <h6 className="font-bold text-xs text-slate-800">So sánh: (3) 関係的表現 (Relational Model) - Truy vết liên kết qua các bảng</h6>
                    <span className="text-[10px] bg-indigo-50 border border-indigo-200 text-indigo-700 px-2 py-0.5 rounded font-bold">Nền tảng của SQL</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs text-slate-500 font-bold self-center">Chọn môn học cần tra:</span>
                    <button
                      onClick={() => setRelationalLecture('English')}
                      className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all ${
                        relationalLecture === 'English'
                          ? 'bg-indigo-600 border-indigo-600 text-white'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Tiếng Anh (英語)
                    </button>
                    <button
                      onClick={() => setRelationalLecture('Math')}
                      className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all ${
                        relationalLecture === 'Math'
                          ? 'bg-indigo-600 border-indigo-600 text-white'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Toán học (数学)
                    </button>
                  </div>

                  {/* Flow of Relational Tables */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    {/* Table 1: Lecture Table */}
                    <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-sm">
                      <span className="text-[9px] font-bold text-slate-400 block mb-1">Bảng 1: Bảng Bài học (講義)</span>
                      <table className="w-full text-[10px] text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-100 text-slate-500 font-bold border-b border-slate-200">
                            <th className="p-1">Mã</th>
                            <th className="p-1">Tên bài học</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className={`border-b border-slate-100 ${relationalLecture === 'English' ? 'bg-indigo-50 font-bold text-indigo-700' : ''}`}>
                            <td className="p-1">L01</td>
                            <td className="p-1">英語 (Tiếng Anh)</td>
                          </tr>
                          <tr className={`${relationalLecture === 'Math' ? 'bg-indigo-50 font-bold text-indigo-700' : ''}`}>
                            <td className="p-1">L02</td>
                            <td className="p-1">数学 (Toán học)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Table 2: Enrollment Table */}
                    <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-sm">
                      <span className="text-[9px] font-bold text-slate-400 block mb-1">Bảng 2: Bảng đăng ký (履修)</span>
                      <table className="w-full text-[10px] text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-100 text-slate-500 font-bold border-b border-slate-200">
                            <th className="p-1">Mã môn</th>
                            <th className="p-1">Mã SV</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className={`border-b border-slate-100 ${relationalLecture === 'English' ? 'bg-indigo-50 font-bold text-indigo-700' : ''}`}>
                            <td className="p-1">L01</td>
                            <td className="p-1">S101 (Tanaka)</td>
                          </tr>
                          <tr className={`border-b border-slate-100 ${relationalLecture === 'English' ? 'bg-indigo-50 font-bold text-indigo-700' : ''}`}>
                            <td className="p-1">L01</td>
                            <td className="p-1">S102 (Sato)</td>
                          </tr>
                          <tr className={`${relationalLecture === 'Math' ? 'bg-indigo-50 font-bold text-indigo-700' : ''}`}>
                            <td className="p-1">L02</td>
                            <td className="p-1">S101 (Tanaka)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Table 3: Student Table */}
                    <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-sm">
                      <span className="text-[9px] font-bold text-slate-400 block mb-1">Bảng 3: Danh sách SV (学生名簿)</span>
                      <table className="w-full text-[10px] text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-100 text-slate-500 font-bold border-b border-slate-200">
                            <th className="p-1">Mã SV</th>
                            <th className="p-1">Tên</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className={`border-b border-slate-100 ${
                            relationalLecture === 'English' || relationalLecture === 'Math' ? 'bg-indigo-50 font-bold text-indigo-700' : ''
                          }`}>
                            <td className="p-1">S101</td>
                            <td className="p-1">Tanaka (田中)</td>
                          </tr>
                          <tr className={`${
                            relationalLecture === 'English' ? 'bg-indigo-50 font-bold text-indigo-700' : ''
                          }`}>
                            <td className="p-1">S102</td>
                            <td className="p-1">Sato (佐藤)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                  </div>

                  {relationalLecture && (
                    <div className="mt-3 p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-xs text-indigo-900 animate-fadeIn">
                      <strong>Luồng truy xuất:</strong> Khi tìm học sinh học môn <strong>{relationalLecture === 'English' ? 'Tiếng Anh' : 'Toán'}</strong>:
                      Hệ thống tìm mã môn <code>{relationalLecture === 'English' ? 'L01' : 'L02'}</code> trong Bảng 1 → Tra cứu Bảng 2 thấy mã sinh viên là <code>{relationalLecture === 'English' ? 'S101, S102' : 'S101'}</code> → Tra cứu Bảng 3 lấy ra thông tin cá nhân. Sự kết hợp linh hoạt này giúp lưu trữ độc lập, ngắn gọn và bảo đảm tính完備性 (hoàn bị) bằng toán học!
                    </div>
                  )}

                </div>

              </div>

            </div>
          </div>
        )}

        {/* ==================== TAB 17.3 ==================== */}
        {activeTab === '17.3' && (
          <div className="flex flex-col gap-6 animate-fadeIn">
            {/* Textbook Intro */}
            <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-50/40 p-4 rounded-r-xl">
              <h3 className="text-lg font-bold text-slate-800">17.3 関係的表現のデータ操作 (Thao tác dữ liệu quan hệ)</h3>
              <p className="text-slate-700 text-sm leading-relaxed mt-2 select-text font-serif italic">
                「関係的表現の数学的基礎はエドガー・フランク・コッドによって1970年頃に研究されました．データ操作を数学的に表現することで，完備性を保証しています．」
              </p>
              <div className="mt-2 text-xs text-slate-500">
                <span className="font-bold text-indigo-600">Lịch sử:</span> Nền tảng toán học do nhà khoa học <strong>Edgar F. Codd (エドガー・フランク・コッド)</strong> phát minh năm 1970 nhằm chứng minh tính hoàn bị bằng toán học.
              </div>
            </div>

            {/* Set Operations (集合演算) */}
            <div className="border border-slate-200 rounded-2xl p-5">
              <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2.5">
                <div>
                  <h4 className="text-sm font-extrabold text-indigo-700 flex items-center gap-1.5">
                    <List size={16} /> Phép toán Tập hợp (集合演算 - 4 phép)
                  </h4>
                  <p className="text-xs text-slate-500">Bấm vào các phép toán để xem biểu diễn giản đồ Venn trực quan.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Selector */}
                <div className="lg:col-span-4 flex flex-col gap-2">
                  {[
                    { id: 'union', symbol: '∪', jp: '合併 (Phép hợp)', desc: 'Ý nghĩa "HOẶC (OR)". Gom tất cả phần tử của hai tập hợp lại, phần tử trùng chỉ lấy 1.' },
                    { id: 'intersection', symbol: '∩', jp: '共通部分 (Phép giao)', desc: 'Ý nghĩa "VÀ (AND)". Chỉ lấy các phần tử chung xuất hiện ở cả hai tập hợp.' },
                    { id: 'difference', symbol: '－', jp: '差 (Phép trừ / hiệu)', desc: 'Lấy các phần tử thuộc tập hợp A nhưng KHÔNG thuộc tập hợp B.' },
                    { id: 'product', symbol: '×', jp: '直積 (Tích đề-các)', desc: 'Kết nối (連結する). Ghép cặp mỗi phần tử của tập A với mọi phần tử của tập B.' }
                  ].map((op) => (
                    <div
                      key={op.id}
                      onClick={() => setSetSelectedOp(op.id as any)}
                      className={`p-3 rounded-xl border-2 transition-all cursor-pointer text-left ${
                        setSelectedOp === op.id
                          ? 'border-indigo-500 bg-indigo-50/30'
                          : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800">{op.jp}</span>
                        <span className="text-sm font-black text-indigo-600 bg-white border border-indigo-100 w-6 h-6 rounded-full flex items-center justify-center font-mono">
                          {op.symbol}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">{op.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Venn Diagrams / Output Visualizer */}
                <div className="lg:col-span-8 bg-slate-50/50 border border-slate-200 rounded-2xl p-5 flex flex-col items-center justify-center min-h-[300px]">
                  
                  {/* Venn SVG Graphics */}
                  {setSelectedOp !== 'product' ? (
                    <div className="relative w-[300px] h-[160px] mb-4">
                      {/* Left Circle A */}
                      <div 
                        className={`absolute left-4 top-2 w-[150px] h-[150px] rounded-full border-2 border-indigo-600/60 flex items-center justify-start pl-6 text-xs font-bold transition-all duration-300 ${
                          setSelectedOp === 'union' 
                            ? 'bg-indigo-300/40' 
                            : setSelectedOp === 'difference' 
                            ? 'bg-indigo-300/40' 
                            : 'bg-transparent'
                        }`}
                      >
                        A
                      </div>
                      
                      {/* Right Circle B */}
                      <div 
                        className={`absolute right-4 top-2 w-[150px] h-[150px] rounded-full border-2 border-purple-600/60 flex items-center justify-end pr-6 text-xs font-bold transition-all duration-300 ${
                          setSelectedOp === 'union' 
                            ? 'bg-purple-300/40' 
                            : 'bg-transparent'
                        }`}
                      >
                        B
                      </div>

                      {/* Intersection Overlap Area (Custom overlay) */}
                      <div 
                        className={`absolute left-[79px] top-[2px] w-[142px] h-[150px] rounded-full transition-all duration-300 overflow-hidden pointer-events-none`}
                        style={{
                          clipPath: 'rect(0px, 142px, 150px, 63px)' // Show only intersection
                        }}
                      >
                        <div className={`w-[150px] h-[150px] border-2 border-indigo-600/60 rounded-full ${
                          setSelectedOp === 'union' || setSelectedOp === 'intersection' 
                            ? 'bg-gradient-to-r from-indigo-300/40 to-purple-300/40' 
                            : setSelectedOp === 'difference'
                            ? 'bg-transparent border-t-0 border-b-0'
                            : 'bg-transparent'
                        }`} style={{ marginLeft: '-63px' }} />
                      </div>

                      {/* Labels inside overlap */}
                      <div className="absolute left-[138px] top-[60px] text-slate-800 font-bold text-xs pointer-events-none">
                        A ∩ B
                      </div>
                    </div>
                  ) : (
                    /* Cartesian Product Visualizer */
                    <div className="w-full bg-white border border-slate-200 rounded-xl p-3 mb-4 max-h-[160px] overflow-y-auto">
                      <table className="w-full text-[10px] text-center border-collapse">
                        <thead>
                          <tr className="bg-slate-100 text-slate-500 font-bold border-b">
                            <th className="p-1">Tập A</th>
                            <th className="p-1">Tập B</th>
                            <th className="p-1">Cặp ghép (A x B)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {setA.map(a => 
                            setB.map(b => (
                              <tr key={`${a}-${b}`} className="border-b border-slate-100 hover:bg-slate-50">
                                <td className="p-1 text-slate-600">{a.split(' ')[0]}</td>
                                <td className="p-1 text-slate-600">{b.split(' ')[0]}</td>
                                <td className="p-1 font-mono font-bold text-indigo-600">({a.split(' ')[0]}, {b.split(' ')[0]})</td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Math Set representation */}
                  <div className="w-full bg-white border border-slate-200 rounded-xl p-4 text-xs">
                    <div className="flex justify-between border-b border-slate-100 pb-1.5 mb-2">
                      <span className="font-bold text-slate-500">Tập A = {`{`} Tanaka, Sato, Suzuki {`}`}</span>
                      <span className="font-bold text-slate-500">Tập B = {`{`} Sato, Suzuki, Takahashi {`}`}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800">Kết quả phép toán:</span>
                      <span className="font-mono font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        {setSelectedOp === 'union' && 'A ∪ B = { Tanaka, Sato, Suzuki, Takahashi }'}
                        {setSelectedOp === 'intersection' && 'A ∩ B = { Sato, Suzuki }'}
                        {setSelectedOp === 'difference' && 'A － B = { Tanaka }'}
                        {setSelectedOp === 'product' && 'A × B = Ghép cặp tất cả phần tử (9 cặp)'}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* DB specific operations: Project, Select, Join */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-indigo-50/10 via-white to-purple-50/10">
              <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2.5">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5">
                    <Database size={16} className="text-indigo-600" /> Phép toán CSDL đặc trưng (3 phép)
                  </h4>
                  <p className="text-xs text-slate-500">Thử nghiệm các thao tác dữ liệu: <strong>射影 (Chiếu)</strong>, <strong>選択 (Chọn)</strong>, và <strong>結合 (Kết hợp)</strong>.</p>
                </div>
              </div>

              {/* Toolbar */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setDbSelectedOp('original')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                    dbSelectedOp === 'original'
                      ? 'bg-slate-700 border-slate-700 text-white'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Bảng ban đầu (学籍簿)
                </button>
                <button
                  onClick={() => setDbSelectedOp('project')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all flex items-center gap-1 ${
                    dbSelectedOp === 'project'
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Table size={12} />
                  Phép 射影 (Projection - Chiếu cột)
                </button>
                <button
                  onClick={() => setDbSelectedOp('select')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all flex items-center gap-1 ${
                    dbSelectedOp === 'select'
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <List size={12} />
                  Phép 選択 (Selection - Chọn hàng)
                </button>
                <button
                  onClick={() => setDbSelectedOp('join')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all flex items-center gap-1 ${
                    dbSelectedOp === 'join'
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Layers size={12} />
                  Phép 結合 (Natural Join - Nối tự nhiên)
                </button>
              </div>

              {/* Live Render Area */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Tables Grid */}
                <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-center min-h-[220px]">
                  
                  {dbSelectedOp === 'original' && (
                    <div className="animate-fadeIn">
                      <span className="text-[10px] font-bold text-slate-400 block mb-2">BẢNG GỐC: Học sinh (学籍簿)</span>
                      <table className="w-full text-xs text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-100 text-slate-500 font-bold border-b">
                            <th className="p-2 border-r border-slate-200">Mã SV (学生証番号)</th>
                            <th className="p-2 border-r border-slate-200">Họ tên (氏名)</th>
                            <th className="p-2 border-r border-slate-200">Nơi sinh (出身地)</th>
                            <th className="p-2">Tuổi (年齢)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {originalStudentTable.map(s => (
                            <tr key={s.id} className="border-b hover:bg-slate-50">
                              <td className="p-2 border-r border-slate-100 font-mono font-bold">{s.id}</td>
                              <td className="p-2 border-r border-slate-100">{s.name}</td>
                              <td className="p-2 border-r border-slate-100">{s.birthplace}</td>
                              <td className="p-2">{s.age}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {dbSelectedOp === 'project' && (
                    <div className="animate-fadeIn">
                      <span className="text-[10px] font-bold text-indigo-600 block mb-2">PHÉP CHIẾU (射影): Lấy cột "Nơi sinh (出身地)" và tự động loại bỏ trùng lặp</span>
                      <table className="w-2/3 mx-auto text-xs text-center border-collapse">
                        <thead>
                          <tr className="bg-indigo-100 text-indigo-800 font-bold border-b border-indigo-200">
                            <th className="p-2">Nơi sinh (出身地)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b bg-indigo-50/30">
                            <td className="p-2 font-bold">Tokyo (東京都)</td>
                          </tr>
                          <tr className="border-b bg-indigo-50/30">
                            <td className="p-2 font-bold">Osaka (大阪府)</td>
                          </tr>
                          <tr className="bg-indigo-50/30">
                            <td className="p-2 font-bold">Fukuoka (福岡県)</td>
                          </tr>
                        </tbody>
                      </table>
                      <span className="text-[10px] text-slate-400 text-right block mt-2 italic">* Đã lọc bỏ bản ghi trùng lặp Tokyo (Suzuki) để trả về danh sách các nơi sinh duy nhất.</span>
                    </div>
                  )}

                  {dbSelectedOp === 'select' && (
                    <div className="animate-fadeIn">
                      <span className="text-[10px] font-bold text-indigo-600 block mb-2">PHÉP CHỌN (選択): Điều kiện "Nơi sinh (出身地) = Tokyo"</span>
                      <table className="w-full text-xs text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-100 text-slate-500 font-bold border-b">
                            <th className="p-2 border-r border-slate-200">Mã SV</th>
                            <th className="p-2 border-r border-slate-200">Họ tên</th>
                            <th className="p-2 border-r border-slate-200">Nơi sinh</th>
                            <th className="p-2">Tuổi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {originalStudentTable.map(s => {
                            const isMatch = s.birthplace === 'Tokyo';
                            return (
                              <tr key={s.id} className={`border-b transition-all ${isMatch ? 'bg-indigo-50 font-bold text-indigo-800 border-indigo-200' : 'opacity-40'}`}>
                                <td className="p-2 border-r border-slate-100 font-mono">{s.id}</td>
                                <td className="p-2 border-r border-slate-100">{s.name}</td>
                                <td className="p-2 border-r border-slate-100">{s.birthplace}</td>
                                <td className="p-2">{s.age}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {dbSelectedOp === 'join' && (
                    <div className="animate-fadeIn flex flex-col gap-4">
                      <div>
                        <span className="text-[10px] font-bold text-indigo-600 block mb-2">PHÉP KẾT HỢP (自然な結合 - Nối tự nhiên): Nối Bảng Học sinh với Bảng Vùng miền (thông qua cột "出身地" chung, loại bỏ cột trùng lặp)</span>
                        <table className="w-full text-[11px] text-left border-collapse">
                          <thead>
                            <tr className="bg-indigo-100 text-indigo-800 font-bold border-b border-indigo-200">
                              <th className="p-1.5 border-r border-indigo-200">Mã SV</th>
                              <th className="p-1.5 border-r border-indigo-200">Họ tên</th>
                              <th className="p-1.5 border-r border-indigo-200">Nơi sinh (Cột chung)</th>
                              <th className="p-1.5 border-r border-indigo-200">Tuổi</th>
                              <th className="p-1.5">Khu vực (Vùng)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {originalStudentTable.map(s => {
                              const regionObj = birthplaceCodeTable.find(b => b.birthplace === s.birthplace);
                              return (
                                <tr key={s.id} className="border-b bg-indigo-50/20 hover:bg-indigo-50">
                                  <td className="p-1.5 border-r border-indigo-100 font-mono">{s.id}</td>
                                  <td className="p-1.5 border-r border-indigo-100">{s.name}</td>
                                  <td className="p-1.5 border-r border-indigo-100 font-bold text-indigo-700 bg-indigo-50">{s.birthplace}</td>
                                  <td className="p-1.5 border-r border-indigo-100">{s.age}</td>
                                  <td className="p-1.5 text-indigo-900 font-bold">{regionObj?.region}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                </div>

                {/* Explanation Card */}
                <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-4 text-xs flex flex-col justify-between shadow-sm">
                  <div>
                    <h5 className="font-bold text-slate-800 text-xs border-b border-slate-100 pb-1.5 mb-2 uppercase flex items-center gap-1 text-indigo-700">
                      <Info size={14} /> Chi tiết học thuật
                    </h5>
                    
                    {dbSelectedOp === 'original' && (
                      <p className="text-slate-600 leading-relaxed">
                        Đây là bảng danh sách học sinh chuẩn, gồm các hàng đại diện cho <strong>Record (レコード)</strong> và các cột đại diện cho <strong>Field (フィールド)</strong>. Hãy bấm vào các nút phép toán phía trên để xem sự biến đổi!
                      </p>
                    )}

                    {dbSelectedOp === 'project' && (
                      <div className="flex flex-col gap-2">
                        <p className="text-slate-600 leading-relaxed">
                          <strong>射影 (Projection - Chiếu):</strong> Là thao tác trích xuất (抜き出す) các <strong>Cột (Field / 項目)</strong> mong muốn từ bảng nguồn.
                        </p>
                        <div className="bg-slate-50 p-2 rounded-lg text-slate-500 font-mono text-[10px] border">
                          SELECT DISTINCT birthplace FROM students;
                        </div>
                      </div>
                    )}

                    {dbSelectedOp === 'select' && (
                      <div className="flex flex-col gap-2">
                        <p className="text-slate-600 leading-relaxed">
                          <strong>選択 (Selection - Chọn):</strong> Là thao tác lọc và trích xuất các <strong>Hàng (Record)</strong> thỏa mãn điều kiện chỉ định.
                        </p>
                        <div className="bg-slate-50 p-2 rounded-lg text-slate-500 font-mono text-[10px] border">
                          SELECT * FROM students WHERE birthplace = 'Tokyo';
                        </div>
                      </div>
                    )}

                    {dbSelectedOp === 'join' && (
                      <div className="flex flex-col gap-2">
                        <p className="text-slate-600 leading-relaxed">
                          <strong>結合 (Join - Kết hợp):</strong> Liên kết nhiều bảng với nhau qua cột chung.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          <strong>自然な結合 (Natural Join):</strong> Tự động hợp nhất cột dùng chung (ở đây là <code>出身地</code>) và xóa đi cột trùng lặp, chỉ giữ lại một cột duy nhất để bảng kết quả gọn gàng.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-indigo-50 text-[10px] font-bold text-indigo-700">
                      Ghi nhớ ôn thi:
                    </span>
                    <p className="text-[10px] text-slate-500 mt-1">
                      - Chiếu (射影) = Cột<br />
                      - Chọn (選択) = Hàng (Thỏa mãn điều kiện)<br />
                      - Nối tự nhiên (自然な結合) = Ghép bảng & Xóa cột trùng
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}



        {/* ==================== TAB MINITEST ==================== */}
        {activeTab === 'minitest' && (
          <div className="flex flex-col gap-8 animate-fadeIn">
            
            {/* Vocabulary Mini-quiz */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base font-extrabold text-slate-800 flex items-center gap-1.5">
                  <BookOpen size={18} className="text-indigo-600" />
                  Mục I: Cách đọc và Ý nghĩa từ vựng (Kiểm tra lại từ vựng bài học)
                </h3>
                <button
                  onClick={() => setShowMinitestVocabAnswers(prev => !prev)}
                  className="px-3.5 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Eye size={13} /> {showMinitestVocabAnswers ? 'Ẩn đáp án' : 'Xem đáp án'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vocabList.map((item, idx) => {
                  return (
                    <div key={idx} className="border border-slate-200 rounded-xl p-3.5 bg-white shadow-sm flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-black text-slate-800">{idx + 1}. {item.term}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleRevealVocab(idx)}
                            className="p-1 rounded-md text-slate-400 hover:text-indigo-650 hover:bg-slate-50 transition-colors cursor-pointer"
                            title="Xem đáp án riêng"
                          >
                            {revealedVocabIndices.includes(idx) || showMinitestVocabAnswers ? (
                              <EyeOff size={14} className="text-indigo-500" />
                            ) : (
                              <Eye size={14} />
                            )}
                          </button>
                          <span className="text-[10px] text-slate-400 font-bold hidden sm:inline">Từ vựng CSDL</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <div>
                          <label className="text-[10px] font-bold text-slate-400 block mb-0.5">Cách đọc / Phiên âm</label>
                          <input
                            type="text"
                            placeholder="Nhập cách đọc..."
                            value={minitestAnswers[idx]?.reading || ''}
                            onChange={(e) => {
                              const text = e.target.value;
                              setMinitestAnswers(prev => ({
                                ...prev,
                                [idx]: { ...(prev[idx] || { meaning: '' }), reading: text }
                              }));
                            }}
                            disabled={showMinitestVocabAnswers || revealedVocabIndices.includes(idx)}
                            className="w-full text-xs p-1.5 border border-slate-200 rounded-md focus:border-indigo-400 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-slate-400 block mb-0.5">Nghĩa tiếng Việt</label>
                          <input
                            type="text"
                            placeholder="Nhập nghĩa..."
                            value={minitestAnswers[idx]?.meaning || ''}
                            onChange={(e) => {
                              const text = e.target.value;
                              setMinitestAnswers(prev => ({
                                ...prev,
                                [idx]: { ...(prev[idx] || { reading: '' }), meaning: text }
                              }));
                            }}
                            disabled={showMinitestVocabAnswers || revealedVocabIndices.includes(idx)}
                            className="w-full text-xs p-1.5 border border-slate-200 rounded-md focus:border-indigo-400 focus:outline-none"
                          />
                        </div>
                      </div>

                      {(showMinitestVocabAnswers || revealedVocabIndices.includes(idx)) && (
                        <div className="mt-2 p-2 bg-indigo-50 rounded-lg text-[10px] border border-indigo-100 text-indigo-900 animate-fadeIn flex flex-col gap-0.5">
                          <div><strong>Cách đọc:</strong> {item.reading}</div>
                          <div><strong>Nghĩa đúng:</strong> {item.meaning}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Translation Japanese to Vietnamese */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-base font-extrabold text-slate-800 mb-3 flex items-center gap-1.5">
                <Languages size={18} className="text-indigo-600" />
                Mục II: Dịch câu Nhật → Việt (二重登録 - Tránh đăng ký trùng lặp)
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-3 font-serif italic text-sm text-slate-700 select-text leading-relaxed">
                「コンサートチケットや電車の指定券の予約は，オンラインで接続されたコンピュータによって処理されています．全国にいる多くの人が同時に予約を入れても二重登録されないようにするために，コンピュータ上ではデータベースシステムがデータを管理しています．」
              </div>

              <textarea
                placeholder="Nhập bản dịch tiếng Việt của bạn..."
                rows={3}
                value={minitestTranslation1}
                onChange={(e) => setMinitestTranslation1(e.target.value)}
                className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
              />

              <div className="mt-2.5 flex justify-end">
                <button
                  onClick={() => setShowTranslation1Answer(prev => !prev)}
                  className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 active:scale-95 transition-all cursor-pointer shadow-sm"
                >
                  {showTranslation1Answer ? 'Ẩn đáp án' : 'So sánh đáp án'}
                </button>
              </div>

              {showTranslation1Answer && (
                <div className="mt-4 p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-xs text-indigo-900 animate-fadeIn">
                  <span className="font-extrabold text-xs block mb-1">Bản dịch gợi ý:</span>
                  Việc đặt chỗ trước vé xem hòa nhạc hoặc vé ghế chỉ định trên tàu điện được xử lý bởi máy tính kết nối trực tuyến. Để đảm bảo rằng không xảy ra đăng ký trùng lặp (二重登録) ngay cả khi có nhiều người trên toàn quốc thực hiện đặt vé cùng một lúc, hệ thống cơ sở dữ liệu trên máy tính sẽ quản lý dữ liệu này.
                </div>
              )}
            </div>

            {/* Translation Vietnamese to Japanese */}
            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-base font-extrabold text-slate-800 mb-3 flex items-center gap-1.5">
                <Languages size={18} className="text-indigo-600" />
                Mục III: Dịch câu Việt → Nhật (3 Mô hình CSDL)
              </h3>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-3 font-serif italic text-sm text-slate-700 select-text leading-relaxed">
                "Người ta gọi đơn vị biểu hiện dữ liệu của cơ sở dữ liệu là bản ghi, có 3 cách tiêu biểu để thể hiện quan hệ giữa các bản ghi đó là loại phân cấp, loại dạng lưới, loại quan hệ."
              </div>

              <textarea
                placeholder="Nhập bản dịch tiếng Nhật của bạn..."
                rows={3}
                value={minitestTranslation2}
                onChange={(e) => setMinitestTranslation2(e.target.value)}
                className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
              />

              <div className="mt-2.5 flex justify-end">
                <button
                  onClick={() => setShowTranslation2Answer(prev => !prev)}
                  className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 active:scale-95 transition-all cursor-pointer shadow-sm"
                >
                  {showTranslation2Answer ? 'Ẩn đáp án' : 'So sánh đáp án'}
                </button>
              </div>

              {showTranslation2Answer && (
                <div className="mt-4 p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-xs text-indigo-900 animate-fadeIn">
                  <span className="font-extrabold text-xs block mb-1">Đáp án SGK gốc:</span>
                  <p className="font-serif italic font-bold text-slate-800 mb-1 select-text">
                    「データベースのデータを表す単位のことをレコードと言い，レコード間の関係を表す代表的な表現法は階層的表現，網的表現，関係的表現の3つです．」
                  </p>
                  <div className="border-t border-indigo-100 pt-1.5 mt-1.5">
                    <strong>Phân tích từ khoá cần nhớ:</strong><br />
                    - Đơn vị biểu hiện dữ liệu = <code>データを表す単位</code> (レコード - Bản ghi)<br />
                    - 3 mô hình tiêu biểu biểu diễn mối quan hệ = <code>関係を表す代表的な表現法は...の3つです</code><br />
                    - Loại phân cấp = <code>階層的表現</code><br />
                    - Loại dạng lưới = <code>網的表現</code><br />
                    - Loại quan hệ = <code>関係的表現</code>
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
