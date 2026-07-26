import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Cpu, HelpCircle, Languages, Layers, Grid
} from 'lucide-react';

interface Lesson17TheoryProps {
  onClose: () => void;
}

export const Lesson17Theory: React.FC<Lesson17TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'17.1' | '17.3' | 'minitest'>('17.1');

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
      // Indexed Search
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

  // Simulator 2: Relational Operations Playground (Section 17.3)
  const [opMode, setOpMode] = useState<'projection' | 'selection' | 'join'>('projection');
  
  // Projection settings
  const [projFields, setProjFields] = useState<{ id: string; name: string; checked: boolean }[]>([
    { id: 'id', name: 'Mã SV', checked: true },
    { id: 'name', name: 'Tên', checked: true },
    { id: 'hometown', name: 'Quê quán', checked: false }
  ]);

  // Selection settings
  const [selHometown, setSelHometown] = useState<string>('Tokyo');

  const rawStudents = useMemo(() => [
    { id: 'S001', name: 'Tanaka', hometown: 'Tokyo', age: 20 },
    { id: 'S002', name: 'Sato', hometown: 'Osaka', age: 22 },
    { id: 'S003', name: 'Suzuki', hometown: 'Tokyo', age: 19 },
    { id: 'S004', name: 'Takahashi', hometown: 'Kyoto', age: 21 }
  ], []);

  const rawGrades = useMemo(() => [
    { id: 'S001', subject: 'Database', score: 'A' },
    { id: 'S002', subject: 'Network', score: 'B' },
    { id: 'S003', subject: 'Security', score: 'A' },
    { id: 'S004', subject: 'OS Theory', score: 'C' }
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
          17.1 & 17.2 Cấu trúc DB
        </button>
        <button
          onClick={() => setActiveTab('17.3')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '17.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          17.3 Thao tác quan hệ
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
        
        {/* Tab 17.1 & 17.2: Database structures */}
        {activeTab === '17.1' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                17.1 Khái niệm & 17.2 データベースの表現法 (Cấu trúc và mô hình dữ liệu)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Cơ sở dữ liệu (データベース)</strong> là nơi lưu trữ (<code>保存</code>) và quản lý lượng lớn dữ liệu tập trung, giúp tìm kiếm và sửa đổi một cách nhanh chóng.
                  </p>
                  <p>
                    3 tiêu chí quan trọng của hệ thống CSDL:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1">
                    <li><strong>検索速度 (Tốc độ tìm kiếm)</strong>: Tốc độ truy xuất nhanh.</li>
                    <li><strong>データ量 (Lượng dữ liệu)</strong>: Quản lý tối thiểu hàng vạn bản ghi.</li>
                    <li><strong>完備性 (Tính hoàn bị/Nhất quán)</strong>: Đảm bảo tính nhất quán (<code>整合性</code>) của dữ liệu khi sửa đổi/xóa.</li>
                  </ul>
                  <p>
                    3 mô hình biểu diễn quan hệ bản ghi (<code>レコード</code>):
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1.5">
                    <li><strong>階層的表現 (Mô hình phân cấp - Cây)</strong>: Sắp xếp theo thứ tự cha-con-cháu (<code>親，子，孫</code>). Gồm gốc (根 - Root), nút (節 - Node) và lá. Tìm kiếm chậm, dễ trùng lặp.</li>
                    <li><strong>網的表現 (Mô hình mạng)</strong>: Cấu trúc cha-con hai cấp mở rộng thành dạng lưới.</li>
                    <li><strong>関係的表現 (Mô hình quan hệ)</strong>: Quản lý dạng bảng (表). Trực quan, dễ xử lý toán học, độ hoàn bị cao. Chủ đạo ngày nay.</li>
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

                  <div className="bg-slate-955 text-emerald-400 p-3 rounded-xl font-mono text-[10px] max-h-[110px] overflow-y-auto flex flex-col gap-1.5 bg-slate-900 shadow-inner">
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

        {/* Tab 17.3: Relational Operations */}
        {activeTab === '17.3' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                17.3 関係的表現のデータ操作 (Các thao tác trên Cơ sở dữ liệu quan hệ)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Edgar F. Codd thiết lập hệ thống toán học đảm bảo tính hoàn bị dữ liệu quan hệ gồm hai cụm thao tác chính:
                  </p>
                  <p>
                    <strong>Cụm phép toán tập hợp (集合演算)</strong>:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1">
                    <li><strong>合併 (Union - Phép hợp)</strong>: Phép HOÀN TẤT OR (∪).</li>
                    <li><strong>共通部分 (Intersection - Phép giao)</strong>: Phép AND (∩).</li>
                    <li><strong>差 (Difference - Phép hiệu)</strong>: Phép trừ (－).</li>
                    <li><strong>直積 (Cartesian Product - Phép tích)</strong>: Nhân liên kết (×).</li>
                  </ul>
                  <p>
                    <strong>Cụm phép toán quan hệ riêng biệt</strong>:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1">
                    <li><strong>射影 (Projection - Phép chiếu)</strong>: Lọc theo cột dọc (field name/項目).</li>
                    <li><strong>選択 (Selection - Phép chọn)</strong>: Lọc theo hàng ngang thỏa mãn điều kiện.</li>
                    <li><strong>結合 (Join - Phép liên kết)</strong>: Kết hợp bảng. <strong>自然な結合 (Natural Join)</strong> lược bỏ bớt các cột trùng lặp.</li>
                  </ul>
                </div>

                {/* Operations Playground */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-850 text-sm flex items-center gap-1.5">
                      <Grid size={16} className="text-indigo-600" />
                      Trình thao tác CSDL quan hệ thực tế
                    </span>
                    <div className="flex gap-1.5">
                      {['projection', 'selection', 'join'].map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setOpMode(mode as any)}
                          className={`px-2.5 py-1 rounded text-[10px] font-bold border transition-all cursor-pointer ${
                            opMode === mode ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-500 border-slate-200'
                          }`}
                        >
                          {mode === 'projection' ? 'Chiếu (射影)' : mode === 'selection' ? 'Chọn (選択)' : 'Liên kết (結合)'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mode-specific settings */}
                  {opMode === 'projection' && (
                    <div className="bg-white border border-slate-200 p-3 rounded-xl flex gap-4 items-center">
                      <span className="font-bold text-slate-500">Chọn cột hiển thị:</span>
                      {projFields.map((field, i) => (
                        <label key={field.id} className="flex items-center gap-1.5 font-bold text-slate-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={field.checked}
                            onChange={(e) => {
                              const updated = [...projFields];
                              updated[i].checked = e.target.checked;
                              setProjFields(updated);
                            }}
                            className="rounded text-indigo-600 focus:ring-indigo-500"
                          />
                          {field.name}
                        </label>
                      ))}
                    </div>
                  )}

                  {opMode === 'selection' && (
                    <div className="bg-white border border-slate-200 p-3 rounded-xl flex gap-3 items-center">
                      <span className="font-bold text-slate-500">Lọc dòng có Quê quán:</span>
                      <select
                        value={selHometown}
                        onChange={(e) => setSelHometown(e.target.value)}
                        className="p-1 border border-slate-200 rounded font-bold"
                      >
                        <option value="Tokyo">Tokyo</option>
                        <option value="Osaka">Osaka</option>
                        <option value="Kyoto">Kyoto</option>
                      </select>
                    </div>
                  )}

                  {opMode === 'join' && (
                    <p className="text-[10px] text-slate-400 bg-white p-3 border border-slate-200 rounded-xl leading-relaxed">
                      *Mô tả:* Tự động thực hiện **自然な結合 (Natural Join)** giữa bảng Học sinh và bảng Điểm số, tự động loại bỏ cột trùng lặp <code>id (Mã SV)</code> chung để tạo bảng thống nhất.
                    </p>
                  )}

                  {/* Output Table */}
                  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-inner">
                    <table className="w-full border-collapse text-left font-mono">
                      <thead className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                        {opMode === 'projection' && (
                          <tr>
                            {projFields[0].checked && <th className="p-2 border-r border-slate-200">Mã SV</th>}
                            {projFields[1].checked && <th className="p-2 border-r border-slate-200">Tên</th>}
                            {projFields[2].checked && <th className="p-2">Quê quán</th>}
                          </tr>
                        )}
                        {opMode === 'selection' && (
                          <tr>
                            <th className="p-2 border-r border-slate-200">Mã SV</th>
                            <th className="p-2 border-r border-slate-200">Tên</th>
                            <th className="p-2 border-r border-slate-200">Quê quán</th>
                            <th className="p-2">Tuổi</th>
                          </tr>
                        )}
                        {opMode === 'join' && (
                          <tr>
                            <th className="p-2 border-r border-slate-200">Mã SV</th>
                            <th className="p-2 border-r border-slate-200">Tên</th>
                            <th className="p-2 border-r border-slate-200">Quê quán</th>
                            <th className="p-2 border-r border-slate-200">Môn học</th>
                            <th className="p-2">Điểm số</th>
                          </tr>
                        )}
                      </thead>
                      <tbody>
                        {opMode === 'projection' && rawStudents.map((s, idx) => (
                          <tr key={idx} className="border-b border-slate-100 text-slate-700">
                            {projFields[0].checked && <td className="p-2 border-r border-slate-100">{s.id}</td>}
                            {projFields[1].checked && <td className="p-2 border-r border-slate-100">{s.name}</td>}
                            {projFields[2].checked && <td className="p-2">{s.hometown}</td>}
                          </tr>
                        ))}

                        {opMode === 'selection' && rawStudents.filter(s => s.hometown === selHometown).map((s, idx) => (
                          <tr key={idx} className="border-b border-slate-100 text-slate-700">
                            <td className="p-2 border-r border-slate-100">{s.id}</td>
                            <td className="p-2 border-r border-slate-100">{s.name}</td>
                            <td className="p-2 border-r border-slate-100">{s.hometown}</td>
                            <td className="p-2">{s.age}</td>
                          </tr>
                        ))}

                        {opMode === 'join' && rawStudents.map((s, idx) => {
                          const grade = rawGrades.find(g => g.id === s.id);
                          return (
                            <tr key={idx} className="border-b border-slate-100 text-slate-700">
                              <td className="p-2 border-r border-slate-100">{s.id}</td>
                              <td className="p-2 border-r border-slate-100">{s.name}</td>
                              <td className="p-2 border-r border-slate-100">{s.hometown}</td>
                              <td className="p-2 border-r border-slate-100">{grade?.subject}</td>
                              <td className="p-2">{grade?.score}</td>
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
                  「部署コード」「部署名」のフィールドを持つ'部署'表と，「都道府県コード」「都道府県名」のフィールドを持つ'都道府県'表，および'社員'表の 3 つの表を結合して，次のフィールドを持つ表を作成した：「社員番号」「社員名」「部署名」「都道府県名」「年齢」。
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
                        <strong>Gợi ý đối chiếu:</strong> データベースのデータを表す単位のことをレコードと言い，レコード間の関係を表す代表的な表現法は階層的表現，網的表現，関係的表現の3つです。
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
