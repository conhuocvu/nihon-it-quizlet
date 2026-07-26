import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Cpu, HelpCircle, Languages, Layers, GitFork, Network, Database, Table
} from 'lucide-react';

interface Lesson17TheoryProps {
  onClose: () => void;
}

export const Lesson17Theory: React.FC<Lesson17TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'17.1' | '17.2' | '17.3' | 'minitest'>('17.1');

  // Simulator 1: Address Book Index Search (Section 17.1)
  const [searchMethod, setSearchMethod] = useState<'linear' | 'indexed'>('linear');
  const [searchTarget, setSearchTarget] = useState<string>('Sato');
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(-1);
  const [searchLogs, setSearchLogs] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

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

  const runSearch = () => {
    setIsSearching(true);
    setCurrentStepIdx(-1);
    setSearchLogs([]);
    let currentLogs: string[] = [];

    if (searchMethod === 'linear') {
      let index = 0;
      const interval = setInterval(() => {
        if (index < addressBook.length) {
          const item = addressBook[index];
          setCurrentStepIdx(index);
          const matched = item.name === searchTarget;
          currentLogs.push(`👉 Kiểm tra phần tử ${index + 1}: "${item.name}"... ${matched ? '✓ TRÙNG KHỚP!' : '✗ Không khớp.'}`);
          setSearchLogs([...currentLogs]);

          if (matched) {
            clearInterval(interval);
            setIsSearching(false);
          } else {
            index++;
          }
        } else {
          clearInterval(interval);
          setIsSearching(false);
          currentLogs.push(`❌ Không tìm thấy "${searchTarget}" trong danh bạ.`);
          setSearchLogs([...currentLogs]);
        }
      }, 350);
    } else {
      const group = searchTarget.charAt(0).toUpperCase();
      currentLogs.push(`🔍 [Chỉ mục] Bước 1: Tra cứu bảng Index ➔ Nhảy thẳng tới nhóm chữ cái "${group}"`);
      setSearchLogs([...currentLogs]);

      setTimeout(() => {
        let firstIndex = addressBook.findIndex(item => item.group === group);
        if (firstIndex === -1) {
          currentLogs.push(`❌ Không tìm thấy nhóm chữ cái "${group}" trong danh mục index.`);
          setSearchLogs([...currentLogs]);
          setIsSearching(false);
          return;
        }

        let index = firstIndex;
        const interval = setInterval(() => {
          if (index < addressBook.length && addressBook[index].group === group) {
            const item = addressBook[index];
            setCurrentStepIdx(index);
            const matched = item.name === searchTarget;
            currentLogs.push(`👉 [Nhóm ${group}] Kiểm tra: "${item.name}"... ${matched ? '✓ TRÙNG KHỚP!' : '✗ Không khớp.'}`);
            setSearchLogs([...currentLogs]);

            if (matched) {
              clearInterval(interval);
              setIsSearching(false);
            } else {
              index++;
            }
          } else {
            clearInterval(interval);
            setIsSearching(false);
            currentLogs.push(`❌ Không tìm thấy "${searchTarget}" trong nhóm "${group}".`);
            setSearchLogs([...currentLogs]);
          }
        }, 350);
      }, 600);
    }
  };

  // 17.2 State for tree selected nodes & relational model flows
  const [treeSelectedNode, setTreeSelectedNode] = useState<string | null>(null);
  const [relationalLecture, setRelationalLecture] = useState<'English' | 'Math' | null>(null);

  // 17.3 State for Set Operations
  const [setSelectedOp, setSetSelectedOp] = useState<'union' | 'intersection' | 'difference' | 'product'>('union');
  const setA = ['A (Tanaka)', 'B (Sato)', 'C (Suzuki)'];
  const setB = ['B (Sato)', 'C (Suzuki)', 'D (Takahashi)'];

  // 17.3 State for DB Operations
  const [dbSelectedOp, setDbSelectedOp] = useState<'original' | 'project' | 'select' | 'join'>('original');

  const originalStudentTable = useMemo(() => [
    { id: '101', name: 'Tanaka', birthplace: 'Tokyo', age: 20 },
    { id: '102', name: 'Sato', birthplace: 'Osaka', age: 21 },
    { id: '103', name: 'Suzuki', birthplace: 'Tokyo', age: 22 },
    { id: '104', name: 'Takahashi', birthplace: 'Fukuoka', age: 19 }
  ], []);

  const birthplaceCodeTable = useMemo(() => [
    { birthplace: 'Tokyo', region: 'Kanto' },
    { birthplace: 'Osaka', region: 'Kansai' },
    { birthplace: 'Fukuoka', region: 'Kyushu' }
  ], []);

  // Vocabulary lists for minitests
  const mini1Vocab = useMemo(() => [
    { term: '完備性', reading: 'かんびせい', meaning: 'tính hoàn bị, tính nhất quán nguyên vẹn của dữ liệu' },
    { term: '実用性', reading: 'じつようせい', meaning: 'tính thực dụng, tính thực tiễn' },
    { term: '索引', reading: 'さくいん', meaning: 'chỉ mục (index)' },
    { term: '急激', reading: 'きゅうげき', meaning: 'đột ngột, cấp bách, nhanh chóng' },
    { term: '整合性', reading: 'せいごうせい', meaning: 'tính thống nhất, tính nhất quán/hài hòa' },
    { term: '保つ', reading: 'たもつ', meaning: 'giữ vững, duy trì' },
    { term: '一貫性', reading: 'いっかんせい', meaning: 'tính nhất quán' },
    { term: 'レコード', reading: 'record', meaning: 'bản ghi (đơn vị chứa dữ liệu)' },
    { term: '節/ノード', reading: 'fushi/node', meaning: 'nút mạng, khớp liên kết' },
    { term: 'たどる', reading: 'tadoru', meaning: 'theo dấu, lần mò theo' }
  ], []);

  const mini2Vocab = useMemo(() => [
    { term: '集合演算', reading: 'しゅうごうえんざん', meaning: 'phép toán tập hợp (Union, Intersect...)' },
    { term: '合併', reading: 'がっぺい', meaning: 'phép hợp (Union - OR - ∪)' },
    { term: '直積', reading: 'ちょくせき', meaning: 'phép tích Descartes (Cartesian product - ×)' },
    { term: '共通部分', reading: 'きょうつうぶぶん', meaning: 'phép giao (Intersection - AND - ∩)' },
    { term: '射影', reading: 'しゃえい', meaning: 'phép chiếu (lọc cột - Projection)' },
    { term: '結合', reading: 'けつごう', meaning: 'phép liên kết bảng (Join)' },
    { term: 'フィールド名', reading: 'field name', meaning: 'tên trường dữ liệu, tiêu đề cột' },
    { term: '抜き出す', reading: 'ぬきだす', meaning: 'trích xuất ra, lọc ra' },
    { term: '当てはまる', reading: 'あてはまる', meaning: 'thỏa mãn, áp dụng đúng điều kiện' },
    { term: '自然な結合', reading: 'しぜんなけつごう', meaning: 'phép liên kết tự nhiên (Natural Join - lược bỏ cột trùng)' }
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
            LÝ THUYẾT BÀI 17
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            データベース理論 (Lý thuyết Cơ sở dữ liệu)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('17.1')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '17.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Cpu size={16} />
          17.1 Khái niệm & Yêu cầu
        </button>
        <button
          onClick={() => setActiveTab('17.2')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '17.2' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <GitFork size={16} />
          17.2 Các mô hình biểu diễn
        </button>
        <button
          onClick={() => setActiveTab('17.3')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '17.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          17.3 Thao tác dữ liệu
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
        
        {/* Tab 17.1: DB Concept */}
        {activeTab === '17.1' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                17.1 データベースとは (Khái niệm về CSDL & Tốc độ tìm kiếm)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Cơ sở dữ liệu (データベース)</strong> là hệ thống lưu trữ (<code>保存</code>) và quản lý tập trung lượng dữ liệu lớn, giúp tìm kiếm và ghi đè dữ liệu một cách dễ dàng.
                  </p>
                  <p>
                    3 tiêu chí quan trọng của hệ thống CSDL:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1.5">
                    <li><strong>1. 検索速度 (Tốc độ tìm kiếm)</strong>: Tốc độ truy xuất nhanh khi lượng dữ liệu lớn.</li>
                    <li><strong>2. データ量 (Lượng dữ liệu)</strong>: Phải hỗ trợ quản lý quy mô tối thiểu hàng vạn bản ghi.</li>
                    <li><strong>3. 完備性 (Tính hoàn bị/Nhất quán)</strong>: Đảm bảo tính thống nhất dữ liệu (<code>整合性</code>) khi chỉnh sửa hoặc xóa các bản ghi liên quan.</li>
                  </ul>
                </div>

                {/* Index Search Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Bộ giả lập tìm kiếm Tuần tự (Linear) vs Chỉ mục (Indexed)</h4>
                  <p className="text-[10.5px] text-slate-500">
                    *Tìm kiếm tuần tự duyệt tất cả bản ghi. Tìm kiếm chỉ mục (索引) nhảy thẳng đến phân nhóm chữ cái đầu giúp tìm cực nhanh.*
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSearchMethod('linear')}
                        className={`px-3 py-1.5 rounded-lg font-bold border transition-all cursor-pointer ${
                          searchMethod === 'linear' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'
                        }`}
                      >
                        Tuần tự (Linear)
                      </button>
                      <button
                        onClick={() => setSearchMethod('indexed')}
                        className={`px-3 py-1.5 rounded-lg font-bold border transition-all cursor-pointer ${
                          searchMethod === 'indexed' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'
                        }`}
                      >
                        Chỉ mục (Indexed)
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-500">Tìm kiếm tên:</span>
                      <select
                        value={searchTarget}
                        onChange={(e) => setSearchTarget(e.target.value)}
                        className="p-1.5 border border-slate-200 rounded bg-white font-bold"
                      >
                        <option value="Aoki">Aoki (Nhóm A)</option>
                        <option value="Sato">Sato (Nhóm S)</option>
                        <option value="Tanaka">Tanaka (Nhóm T)</option>
                      </select>
                    </div>

                    <button
                      onClick={runSearch}
                      disabled={isSearching}
                      className="px-4 py-1.5 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 disabled:opacity-50 cursor-pointer active:scale-95"
                    >
                      Bắt đầu tìm ➔
                    </button>
                  </div>

                  {/* List visual representation */}
                  <div className="grid grid-cols-5 gap-2 bg-white border border-slate-200 p-3 rounded-xl shadow-inner font-mono text-center text-[10px]">
                    {addressBook.map((item, idx) => {
                      const isActive = currentStepIdx === idx;
                      return (
                        <div
                          key={idx}
                          className={`p-1.5 rounded border ${
                            isActive
                              ? 'bg-rose-500 text-white border-rose-600 font-bold scale-105'
                              : 'bg-slate-50 border-slate-200 text-slate-600'
                          }`}
                        >
                          <span className="text-[8px] opacity-70 block font-bold">[{item.group}]</span>
                          {item.name}
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-slate-900 text-emerald-400 p-3 rounded-xl font-mono text-[10px] max-h-[110px] overflow-y-auto flex flex-col gap-1.5 shadow-inner">
                    {searchLogs.map((log, i) => (
                      <div key={i}>{log}</div>
                    ))}
                    {searchLogs.length === 0 && <span className="text-slate-500 italic">Nhấn nút để xem quá trình tìm kiếm...</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 17.2: 3 models of database */}
        {activeTab === '17.2' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                17.2 データベースの表現法 (3 Mô hình biểu diễn dữ liệu)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Đơn vị cơ bản đại diện cho dữ liệu của CSDL gọi là <strong>Record (レコード - Bản ghi)</strong>. Có 3 mô hình liên kết các bản ghi tiêu biểu:
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 flex flex-col gap-3 text-xs">
                  {/* Model 1 description */}
                  <div
                    onClick={() => setTreeSelectedNode(null)}
                    className={`p-3.5 border-2 rounded-xl transition-all cursor-pointer ${
                      treeSelectedNode === null ? 'border-indigo-600 bg-indigo-50/20' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <h4 className="font-bold text-slate-850 flex items-center gap-1">
                      <GitFork size={14} className="text-indigo-600 rotate-90" />
                      (1) 階層的表現 (木構造 / Cấu trúc hình Cây)
                    </h4>
                    <p className="text-slate-500 mt-1">Sắp xếp dữ liệu theo dạng cha-con-cháu (<code>親, 子, 孫</code>). Tầng cao nhất là gốc (根 - Root), nhánh là nút (節 - Node), cuối cùng là lá. Tìm kiếm chậm vì phải duyệt từ Root.</p>
                  </div>

                  {/* Model 2 description */}
                  <div className="p-3.5 border border-slate-200 rounded-xl bg-slate-50/50">
                    <h4 className="font-bold text-slate-800 flex items-center gap-1">
                      <Network size={14} className="text-slate-600" />
                      (2) 網的表現 (Cấu trúc mạng lưới / Lưới)
                    </h4>
                    <p className="text-slate-500 mt-1">Mối quan hệ mẹ-con hai cấp kết hợp thành hình lưới. Tránh trùng lặp nhưng khó xử lý bằng toán học do thiếu quy tắc hệ thống.</p>
                  </div>

                  {/* Model 3 description */}
                  <div className="p-3.5 border border-slate-200 rounded-xl bg-slate-50/50">
                    <h4 className="font-bold text-slate-800 flex items-center gap-1">
                      <Table size={14} className="text-slate-600" />
                      (3) 関係的表現 (Mô hình quan hệ / Dạng Bảng)
                    </h4>
                    <p className="text-slate-500 mt-1">Biểu diễn dữ liệu bằng các <strong>Bảng độc lập (表)</strong> liên kết với nhau. Đảm bảo tính toán học và tính hoàn bị cao, là nền tảng của CSDL SQL ngày nay.</p>
                  </div>
                </div>

                {/* SVG Tree Graph & Relational Flow Visualizer */}
                <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-6 shadow-sm">
                  {/* SVG Tree Hierarchical Graph */}
                  <div>
                    <h4 className="font-bold text-slate-800 text-xs mb-2">Minh họa Mô hình phân cấp dạng Cây (Tokyo ➔ Shinjuku/Shibuya)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                      <div className="flex justify-center p-2 bg-white rounded-xl border border-slate-200 shadow-sm">
                        <svg width="260" height="200" viewBox="0 0 280 240" className="overflow-visible">
                          <line x1="140" y1="30" x2="70" y2="100" stroke={treeSelectedNode?.startsWith('Shinjuku') || treeSelectedNode === 'Root' ? '#6366f1' : '#cbd5e1'} strokeWidth="2.5" />
                          <line x1="140" y1="30" x2="210" y2="100" stroke={treeSelectedNode?.startsWith('Shibuya') || treeSelectedNode === 'Root' ? '#6366f1' : '#cbd5e1'} strokeWidth="2.5" />
                          
                          <line x1="70" y1="100" x2="35" y2="170" stroke={treeSelectedNode === 'Nishi-Shinjuku' ? '#6366f1' : '#cbd5e1'} strokeWidth="2" />
                          <line x1="70" y1="100" x2="105" y2="170" stroke={treeSelectedNode === 'Kabukicho' ? '#6366f1' : '#cbd5e1'} strokeWidth="2" />
                          
                          <line x1="210" y1="100" x2="175" y2="170" stroke={treeSelectedNode === 'Udagawacho' ? '#6366f1' : '#cbd5e1'} strokeWidth="2" />
                          <line x1="210" y1="100" x2="245" y2="170" stroke={treeSelectedNode === 'Dogenzaka' ? '#6366f1' : '#cbd5e1'} strokeWidth="2" />

                          {/* Root */}
                          <g className="cursor-pointer" onClick={() => setTreeSelectedNode('Root')}>
                            <circle cx="140" cy="30" r="18" fill={treeSelectedNode === 'Root' ? '#6366f1' : '#818cf8'} />
                            <text x="140" y="34" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">東京都</text>
                          </g>
                          <text x="140" y="10" fill="#64748b" fontSize="8" textAnchor="middle">根 (Root)</text>

                          {/* Nodes */}
                          <g className="cursor-pointer" onClick={() => setTreeSelectedNode('Shinjuku')}>
                            <circle cx="70" cy="100" r="18" fill={treeSelectedNode === 'Shinjuku' || treeSelectedNode === 'Nishi-Shinjuku' || treeSelectedNode === 'Kabukicho' ? '#6366f1' : '#94a3b8'} />
                            <text x="70" y="104" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">新宿区</text>
                          </g>
                          <g className="cursor-pointer" onClick={() => setTreeSelectedNode('Shibuya')}>
                            <circle cx="210" cy="100" r="18" fill={treeSelectedNode === 'Shibuya' || treeSelectedNode === 'Udagawacho' || treeSelectedNode === 'Dogenzaka' ? '#6366f1' : '#94a3b8'} />
                            <text x="210" y="104" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">渋谷区</text>
                          </g>

                          {/* Leaves */}
                          <g className="cursor-pointer" onClick={() => setTreeSelectedNode('Nishi-Shinjuku')}>
                            <circle cx="35" cy="170" r="18" fill={treeSelectedNode === 'Nishi-Shinjuku' ? '#4f46e5' : '#cbd5e1'} />
                            <text x="35" y="174" fill="black" fontSize="7" fontWeight="bold" textAnchor="middle">西新宿</text>
                          </g>
                          <g className="cursor-pointer" onClick={() => setTreeSelectedNode('Kabukicho')}>
                            <circle cx="105" cy="170" r="18" fill={treeSelectedNode === 'Kabukicho' ? '#4f46e5' : '#cbd5e1'} />
                            <text x="105" y="174" fill="black" fontSize="7" fontWeight="bold" textAnchor="middle">歌舞伎町</text>
                          </g>
                          <g className="cursor-pointer" onClick={() => setTreeSelectedNode('Udagawacho')}>
                            <circle cx="175" cy="170" r="18" fill={treeSelectedNode === 'Udagawacho' ? '#4f46e5' : '#cbd5e1'} />
                            <text x="175" y="174" fill="black" fontSize="7" fontWeight="bold" textAnchor="middle">宇田川町</text>
                          </g>
                          <g className="cursor-pointer" onClick={() => setTreeSelectedNode('Dogenzaka')}>
                            <circle cx="245" cy="170" r="18" fill={treeSelectedNode === 'Dogenzaka' ? '#4f46e5' : '#cbd5e1'} />
                            <text x="245" y="174" fill="black" fontSize="7" fontWeight="bold" textAnchor="middle">道玄坂</text>
                          </g>
                        </svg>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-xs min-h-[120px] flex flex-col justify-center">
                        {treeSelectedNode === null ? (
                          <span className="text-slate-400 italic text-center">Bấm vào bất kỳ nút nào trên cây để mô phỏng lần theo (たどる)...</span>
                        ) : (
                          <div>
                            <span className="font-bold text-indigo-700 block mb-1 uppercase">
                              Nút được chọn: {treeSelectedNode}
                            </span>
                            <p className="text-slate-600 leading-relaxed text-[11px]">
                              {treeSelectedNode === 'Root' && 'Nút gốc của cấu trúc phân cấp (Prefecture).'}
                              {treeSelectedNode === 'Shinjuku' && 'Nút trung gian (Node). Từ đây rẽ tiếp sang Tây Shinjuku hoặc Kabukicho.'}
                              {treeSelectedNode === 'Shibuya' && 'Nút trung gian (Node). Từ đây dẫn xuống các nút lá Udagawacho hoặc Dogenzaka.'}
                              {treeSelectedNode === 'Nishi-Shinjuku' && 'Lá (Leaf). Đường dẫn truy tìm: Tokyo (Root) -> Shinjuku (Node) -> Nishi-Shinjuku (Leaf).'}
                              {treeSelectedNode === 'Kabukicho' && 'Lá (Leaf). Đường dẫn truy tìm: Tokyo (Root) -> Shinjuku (Node) -> Kabukicho (Leaf).'}
                              {treeSelectedNode === 'Udagawacho' && 'Lá (Leaf). Đường dẫn truy tìm: Tokyo (Root) -> Shibuya (Node) -> Udagawacho (Leaf).'}
                              {treeSelectedNode === 'Dogenzaka' && 'Lá (Leaf). Đường dẫn truy tìm: Tokyo (Root) -> Shibuya (Node) -> Dogenzaka (Leaf).'}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Relational model flow tracer */}
                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="font-bold text-slate-800 text-xs">Mô hình quan hệ (Các bảng độc lập liên kết qua ID)</span>
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => setRelationalLecture('English')}
                          className={`px-2.5 py-1 text-[10px] font-bold rounded border transition-all cursor-pointer ${
                            relationalLecture === 'English' ? 'bg-indigo-650 text-white' : 'bg-white text-slate-600'
                          }`}
                        >
                          Tiếng Anh
                        </button>
                        <button
                          onClick={() => setRelationalLecture('Math')}
                          className={`px-2.5 py-1 text-[10px] font-bold rounded border transition-all cursor-pointer ${
                            relationalLecture === 'Math' ? 'bg-indigo-650 text-white' : 'bg-white text-slate-600'
                          }`}
                        >
                          Toán học
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
                      <div className="bg-white border p-2 rounded shadow-sm">
                        <span className="text-[8px] text-slate-400 block font-bold">1. Bảng Bài học (講義)</span>
                        <div className={`p-1 mt-1 rounded ${relationalLecture === 'English' ? 'bg-indigo-50 font-bold' : ''}`}>L01: Tiếng Anh</div>
                        <div className={`p-1 rounded ${relationalLecture === 'Math' ? 'bg-indigo-50 font-bold' : ''}`}>L02: Toán học</div>
                      </div>
                      <div className="bg-white border p-2 rounded shadow-sm">
                        <span className="text-[8px] text-slate-400 block font-bold">2. Đăng ký học (履修)</span>
                        <div className={`p-1 mt-1 rounded ${relationalLecture === 'English' ? 'bg-indigo-50 font-bold' : ''}`}>L01 ➔ S101 (Tanaka)</div>
                        <div className={`p-1 rounded ${relationalLecture === 'English' ? 'bg-indigo-50 font-bold' : ''}`}>L01 ➔ S102 (Sato)</div>
                        <div className={`p-1 rounded ${relationalLecture === 'Math' ? 'bg-indigo-50 font-bold' : ''}`}>L02 ➔ S101 (Tanaka)</div>
                      </div>
                      <div className="bg-white border p-2 rounded shadow-sm">
                        <span className="text-[8px] text-slate-400 block font-bold">3. Học sinh (学生名簿)</span>
                        <div className={`p-1 mt-1 rounded ${relationalLecture ? 'bg-indigo-50 font-bold' : ''}`}>S101: Tanaka</div>
                        <div className={`p-1 rounded ${relationalLecture === 'English' ? 'bg-indigo-50 font-bold' : ''}`}>S102: Sato</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 17.3: Relational Operations */}
        {activeTab === '17.3' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                17.3 関係的表現のデータ操作 (Các phép toán dữ liệu CSDL quan hệ)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Edgar F. Codd thiết lập hệ thống toán học đảm bảo tính hoàn bị dữ liệu quan hệ gồm hai cụm thao tác chính:
                  </p>
                  <p>
                    <strong>Cụm phép toán tập hợp (集合演算)</strong>:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1">
                    <li><strong>合併 (Union - Phép hợp)</strong>: Phép OR (∪).</li>
                    <li><strong>共通部分 (Intersection - Phép giao)</strong>: Phép AND (∩).</li>
                    <li><strong>差 (Difference - Phép hiệu)</strong>: Phép trừ (－).</li>
                    <li><strong>直積 (Cartesian Product - Phép tích)</strong>: Nhân liên kết (×).</li>
                  </ul>
                  <p>
                    <strong>Cụm phép toán quan hệ riêng biệt</strong>:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1.5">
                    <li><strong>射影 (Projection - Phép chiếu)</strong>: Lọc theo cột dọc (field name/項目).</li>
                    <li><strong>選択 (Selection - Phép chọn)</strong>: Lọc theo hàng ngang thỏa mãn điều kiện.</li>
                    <li><strong>結合 (Join - Phép liên kết)</strong>: Kết hợp bảng. <strong>自然な結合 (Natural Join)</strong> lược bỏ bớt các cột trùng lặp.</li>
                  </ul>
                </div>

                {/* Operations Playground */}
                <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  {/* Set Operations Selector & Venn visualizer */}
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-2.5">1. Trực quan hóa Phép toán Tập hợp (集合演算)</h4>
                    <div className="flex gap-2 mb-3">
                      {['union', 'intersection', 'difference', 'product'].map((op) => (
                        <button
                          key={op}
                          onClick={() => setSetSelectedOp(op as any)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                            setSelectedOp === op ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600'
                          }`}
                        >
                          {op === 'union' ? 'Hợp (合併)' : op === 'intersection' ? 'Giao (共通部分)' : op === 'difference' ? 'Hiệu (差)' : 'Tích (直積)'}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                      {setSelectedOp !== 'product' ? (
                        <div className="relative w-full max-w-[280px] h-[140px] mx-auto bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center overflow-hidden">
                          {/* Venn diagram representation */}
                          <div className={`absolute left-10 w-20 h-20 rounded-full border-2 border-indigo-600/70 transition-all ${
                            setSelectedOp === 'union' || setSelectedOp === 'difference' ? 'bg-indigo-100/50' : 'bg-transparent'
                          }`} />
                          <div className={`absolute right-10 w-20 h-20 rounded-full border-2 border-purple-650/70 transition-all ${
                            setSelectedOp === 'union' ? 'bg-purple-100/50' : 'bg-transparent'
                          }`} />
                          {/* Intersection Overlay */}
                          {setSelectedOp === 'intersection' && (
                            <div className="absolute w-8 h-12 bg-indigo-200/55 rounded-full pointer-events-none" />
                          )}
                          {setSelectedOp === 'union' && (
                            <div className="absolute w-8 h-12 bg-indigo-200/40 rounded-full pointer-events-none" />
                          )}
                          <div className="absolute left-12 font-black text-[10px] text-indigo-700">A</div>
                          <div className="absolute right-12 font-black text-[10px] text-purple-700">B</div>
                          <div className="absolute text-[9px] font-bold text-slate-800 bg-white/90 px-1.5 py-0.5 rounded shadow-sm border border-slate-200">
                            {setSelectedOp === 'union' ? 'A ∪ B' : setSelectedOp === 'intersection' ? 'A ∩ B' : 'A － B'}
                          </div>
                        </div>
                      ) : (
                        <div className="w-full bg-white border border-slate-200 rounded-xl p-2.5 max-h-[140px] overflow-y-auto">
                          <table className="w-full text-[9px] text-center border-collapse">
                            <thead className="bg-slate-50 text-slate-500 font-bold border-b">
                              <tr>
                                <th className="p-1">Tập A</th>
                                <th className="p-1">Tập B</th>
                                <th className="p-1 text-indigo-700 font-bold">Cặp ghép (A x B)</th>
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

                      <div className="bg-white border border-slate-200 p-3.5 rounded-xl flex flex-col gap-2 shadow-sm font-mono text-[10px]">
                        <div className="flex justify-between border-b pb-1.5 text-slate-400">
                          <span>Tập A = {`{`} Tanaka, Sato, Suzuki {`}`}</span>
                          <span>Tập B = {`{`} Sato, Suzuki, Takahashi {`}`}</span>
                        </div>
                        <div className="flex justify-between font-bold text-indigo-700 bg-indigo-50 p-2 rounded">
                          <span>Kết quả:</span>
                          <span className="text-right">
                            {setSelectedOp === 'union' && 'A ∪ B = { Tanaka, Sato, Suzuki, Takahashi }'}
                            {setSelectedOp === 'intersection' && 'A ∩ B = { Sato, Suzuki }'}
                            {setSelectedOp === 'difference' && 'A － B = { Tanaka }'}
                            {setSelectedOp === 'product' && 'A × B = 9 Cặp ghép'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DB specific operations */}
                  <div className="border-t border-slate-200 pt-4 mt-2">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1">
                        <Database size={14} className="text-indigo-650" />
                        2. Thao tác CSDL (Chiếu / Chọn / Liên kết tự nhiên)
                      </h4>
                      <div className="flex gap-1.5">
                        {['original', 'project', 'select', 'join'].map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setDbSelectedOp(mode as any)}
                            className={`px-2.5 py-1 rounded text-[10px] font-bold border transition-all cursor-pointer ${
                              dbSelectedOp === mode ? 'bg-indigo-650 text-white' : 'bg-white text-slate-500'
                            }`}
                          >
                            {mode === 'original' ? 'Gốc' : mode === 'project' ? 'Chiếu (射影)' : mode === 'select' ? 'Chọn (選択)' : 'Nối (結合)'}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-inner">
                      <table className="w-full border-collapse text-left font-mono">
                        <thead className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                          {dbSelectedOp === 'original' && (
                            <tr>
                              <th className="p-2 border-r border-slate-200">Mã SV</th>
                              <th className="p-2 border-r border-slate-200">Họ tên</th>
                              <th className="p-2 border-r border-slate-200">Nơi sinh</th>
                              <th className="p-2">Tuổi</th>
                            </tr>
                          )}
                          {dbSelectedOp === 'project' && (
                            <tr>
                              <th className="p-2">Nơi sinh (Lọc cột)</th>
                            </tr>
                          )}
                          {dbSelectedOp === 'select' && (
                            <tr>
                              <th className="p-2 border-r border-slate-200">Mã SV</th>
                              <th className="p-2 border-r border-slate-200">Họ tên</th>
                              <th className="p-2 border-r border-slate-200">Nơi sinh (Tokyo)</th>
                              <th className="p-2">Tuổi</th>
                            </tr>
                          )}
                          {dbSelectedOp === 'join' && (
                            <tr>
                              <th className="p-2 border-r border-slate-200">Mã SV</th>
                              <th className="p-2 border-r border-slate-200">Họ tên</th>
                              <th className="p-2 border-r border-slate-200">Nơi sinh</th>
                              <th className="p-2 border-r border-slate-200">Tuổi</th>
                              <th className="p-2">Vùng</th>
                            </tr>
                          )}
                        </thead>
                        <tbody>
                          {dbSelectedOp === 'original' && originalStudentTable.map((s, idx) => (
                            <tr key={idx} className="border-b border-slate-100 text-slate-700">
                              <td className="p-2 border-r border-slate-100 font-bold">{s.id}</td>
                              <td className="p-2 border-r border-slate-100">{s.name}</td>
                              <td className="p-2 border-r border-slate-100">{s.birthplace}</td>
                              <td className="p-2">{s.age}</td>
                            </tr>
                          ))}
                          {dbSelectedOp === 'project' && (
                            <>
                              <tr className="border-b border-slate-100 font-bold text-slate-700"><td className="p-2">Tokyo</td></tr>
                              <tr className="border-b border-slate-100 font-bold text-slate-700"><td className="p-2">Osaka</td></tr>
                              <tr className="font-bold text-slate-700"><td className="p-2">Fukuoka</td></tr>
                            </>
                          )}
                          {dbSelectedOp === 'select' && originalStudentTable.filter(s => s.birthplace === 'Tokyo').map((s, idx) => (
                            <tr key={idx} className="border-b border-slate-100 text-slate-700 bg-indigo-50 font-bold">
                              <td className="p-2 border-r border-slate-100">{s.id}</td>
                              <td className="p-2 border-r border-slate-100">{s.name}</td>
                              <td className="p-2 border-r border-slate-100">{s.birthplace}</td>
                              <td className="p-2">{s.age}</td>
                            </tr>
                          ))}
                          {dbSelectedOp === 'join' && originalStudentTable.map((s, idx) => {
                            const regionObj = birthplaceCodeTable.find(b => b.birthplace === s.birthplace);
                            return (
                              <tr key={idx} className="border-b border-slate-100 text-slate-700">
                                <td className="p-2 border-r border-slate-100">{s.id}</td>
                                <td className="p-2 border-r border-slate-100">{s.name}</td>
                                <td className="p-2 border-r border-slate-100 font-bold text-indigo-700">{s.birthplace}</td>
                                <td className="p-2 border-r border-slate-100">{s.age}</td>
                                <td className="p-2 text-indigo-900 font-bold">{regionObj?.region}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
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
                  「部署コード」「部署名」のフィールドを持つ'部署'表と，「都道府県コード」「都道府県名」のフィールドを持つ'都道府県'表，および'社員'表 of 3 つの表を結合して，次のフィールドを持つ表を作成した：「社員番号」「社員名」「部署名」「都道府県名」「年齢」。
                  <br />
                  結合した'社員'表はどれか。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                  {[
                    { label: '(ア) 「社員番号」「社員名」「年齢」', isCorrect: false },
                    { label: '(イ) 「社員番号」「社員名」「年齢」「都道府県コード」', isCorrect: false },
                    { label: '(ウ) 「社員番号」「社員名」「年齢」「部署コード」', isCorrect: false },
                    { label: '(エ) 「社員番号」「社員名」「年齢」「部署コード」「都道府県コード」', isCorrect: true }
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
                  Để có được '部署名' (Tên bộ phận) từ bảng '部署', bảng '社員' cần có khóa ngoại là '部署コード' (Mã bộ phận). Để có được '都道府県名' (Tên tỉnh thành) từ bảng '都道府県', bảng '社員' cần có khóa ngoại là '都道府県コード' (Mã tỉnh thành). Do đó, bảng '社員' ban đầu bắt buộc phải chứa cả hai cột khóa ngoại này để thực hiện liên kết (Tương ứng đáp án **エ**).
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
                      コンサートチケットや電車の指定券の予約は，オンラインで接続されたコンピュータによって処理されています．全国にいる多くの人が同時に予約を入れても二重登録されないようにするために，コンピュータ上ではデータベースシステムがデータを管理しています．
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
                        <strong>Gợi ý đối chiếu:</strong> Việc đặt trước vé hòa nhạc hoặc vé ghế chỉ định trên tàu hỏa được xử lý bởi hệ thống máy tính kết nối trực tuyến. Để đảm bảo rằng ngay cả khi có rất nhiều người trên toàn quốc thực hiện đặt chỗ đồng thời thì thông tin cũng không bị đăng ký trùng lặp (二重登録), một hệ thống cơ sở dữ liệu trên máy tính chịu trách nhiệm quản lý dữ liệu này.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Người ta gọi đơn vị biểu hiện dữ liệu của cơ sở dữ liệu là bản ghi, có 3 cách tiêu biểu để thể hiện quan hệ giữa các bản ghi đó là loại phân cấp, loại dạng lưới, loại quan hệ.
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
                        <strong>Gợi ý đối chiếu:</strong> データベースのデータを表す単位のことをレコードと言い，レコード間の関係を表す representative な表現法は階層的表現，網的表現，関係的表現の3つです。
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
                      網的表現とは，データを親子構造に並べ，この構造を順次たどることによって検索する表現法です．これは 2 段階のみの階層的表現と見ることができます．
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
                        <strong>Gợi ý đối chiếu:</strong> Biểu diễn mạng lưới (網的表現) là phương thức tìm kiếm bằng cách sắp xếp dữ liệu theo cấu trúc cha-con rồi lần lượt dò theo cấu trúc đó. Có thể coi đây là dạng cấu trúc phân cấp gồm đúng hai cấp độ.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Các phép toán tập hợp thao tác dữ liệu gồm phép hợp, phép giao, hiệu và tích Đề-các. Những phép toán này được sử dụng phổ biến trong tập hợp toán học.
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
                        <strong>Gợi ý đối chiếu:</strong> 集合演算と呼ばれるデータ操作には，合併，共通部分，差，直積といった操作があります。これらは数学の集合論で一般的に使われる操作の集まりです。
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
