import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, BookOpen, Cpu, HardDrive, Monitor, 
  CheckCircle2, Languages, RefreshCw, Smartphone, Laptop,
  Folder, FileText, Activity, HelpCircle, Mail, AlertTriangle, Scale
} from 'lucide-react';

interface Lesson2TheoryProps {
  onClose: () => void;
}

export const Lesson2Theory: React.FC<Lesson2TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'2.1' | '2.3' | '2.5' | 'minitest'>('2.1');

  // Simulator 1: Long Tail vs Pareto (80/20 Rule)
  const [storeType, setStoreType] = useState<'pareto' | 'longtail'>('longtail');

  // Simulator 2: Email Netiquette Analyzer
  const [hasName, setHasName] = useState(false);
  const [hasRecipient, setHasRecipient] = useState(false);
  const [attachmentSize, setAttachmentSize] = useState<number>(0.5); // MB
  const [useEmojis, setUseEmojis] = useState(false);
  const [isPolite, setIsPolite] = useState(false);

  const emailScore = useMemo(() => {
    let score = 100;
    const warnings = [];

    if (!hasName) {
      score -= 25;
      warnings.push("Thiếu tên người gửi / thông tin chữ ký ở cuối thư.");
    }
    if (!hasRecipient) {
      score -= 20;
      warnings.push("Thiếu tên và chức vụ người nhận ở đầu thư.");
    }
    if (attachmentSize > 2) {
      score -= 20;
      warnings.push("Dung lượng file đính kèm quá lớn (> 2MB) có thể gây nghẽn hòm thư đối phương.");
    }
    if (useEmojis) {
      score -= 15;
      warnings.push("Sử dụng ký tự đặc biệt/絵文字 có thể bị lỗi hiển thị (文字化け).");
    }
    if (!isPolite) {
      score -= 20;
      warnings.push("Văn phong xuề xòa, thiếu câu chào hỏi trang trọng.");
    }

    return { score, warnings };
  }, [hasName, hasRecipient, attachmentSize, useEmojis, isPolite]);

  // Simulator 3: IP Classification Game
  const ipItems = [
    { id: 1, name: "Thiết kế vỏ ngoài của xe hơi", category: "design", label: "Quyền kiểu dáng công nghiệp (意匠権)" },
    { id: 2, name: "Mã nguồn của một phần mềm", category: "copyright", label: "Quyền tác giả (著作権)" },
    { id: 3, name: "Phương pháp chế tạo chất bán dẫn mới", category: "patent", label: "Quyền sáng chế (特許権)" },
    { id: 4, name: "Tên hãng xe và logo 'Toyota'", category: "trademark", label: "Quyền thương hiệu (商標権)" },
    { id: 5, name: "Cải tiến nhỏ trên lò xo của bút bi", category: "utility", label: "Quyền giải pháp hữu ích (実用新案権)" }
  ];
  const [ipSelections, setIpSelections] = useState<Record<number, string>>({});

  // IT Passport Question State
  const [selectedItOption, setSelectedItOption] = useState<string | null>(null);
  const [showItExplanation, setShowItExplanation] = useState<boolean>(false);

  // Keyboard symbols matching
  const [symbolMatches, setSymbolMatches] = useState<Record<string, string>>({});
  const correctSymbols = {
    '=': 'equal',
    '.': 'period',
    '+': 'plus',
    ',': 'comma',
    '_': 'underscore',
    '-': 'minus',
    ':': 'colon',
    '*': 'asterisk',
    '^': 'caret',
    '~': 'tilde'
  };

  // Mini-test 1 Vocab
  const mini1Vocab = useMemo(() => [
    { term: '手順', reading: 'てじゅん', meaning: 'quy trình, trình tự các bước' },
    { term: '有用', reading: 'ゆうよう', meaning: 'hữu ích, có ích' },
    { term: '改編', reading: 'かいへん', meaning: 'cải biên, sửa đổi' },
    { term: '組織宛', reading: 'そしきあて', meaning: 'gửi tới một tổ chức' },
    { term: '定める', reading: 'さだめる', meaning: 'quy định, ban hành' },
    { term: 'ブラウザ', reading: 'browser', meaning: 'trình duyệt web' },
    { term: 'ポータルサイト', reading: 'portal site', meaning: 'cổng thông tin điện tử' },
    { term: 'エチケット', reading: 'etiquette', meaning: 'phép lịch sự xã giao' },
    { term: 'マナー', reading: 'manner', meaning: 'phép tắc, lối ứng xử' },
    { term: 'ソースコード', reading: 'source code', meaning: 'mã nguồn' }
  ], []);
  const [mini1Revealed, setMini1Revealed] = useState<number[]>([]);
  const [mini1Trans1, setMini1Trans1] = useState('');
  const [mini1ShowAnswer1, setMini1ShowAnswer1] = useState(false);
  const [mini1Trans2, setMini1Trans2] = useState('');
  const [mini1ShowAnswer2, setMini1ShowAnswer2] = useState(false);

  // Mini-test 2 Vocab
  const mini2Vocab = useMemo(() => [
    { term: '著作者人格権', reading: 'ちょさくしゃじんかくけん', meaning: 'quyền nhân thân của tác giả' },
    { term: '著作隣接権', reading: 'ちょさくりんせつけん', meaning: 'quyền liên quan đến bản quyền' },
    { term: '複製', reading: 'ふくせい', meaning: 'sao chép, nhân bản' },
    { term: '挙げる', reading: 'あげる', meaning: 'nêu lên, đưa ra làm ví dụ' },
    { term: '特許権', reading: 'とっきょけん', meaning: 'quyền sáng chế độc quyền' },
    { term: '実用新案権', reading: 'じつようしんあんけん', meaning: 'quyền giải pháp hữu ích' },
    { term: '意匠権', reading: 'いしょうけん', meaning: 'quyền kiểu dáng công nghiệp' },
    { term: '携わる', reading: 'たずさわる', meaning: 'tham gia vào, làm việc trong' },
    { term: '肖像権', reading: 'しょうぞうけん', meaning: 'quyền hình ảnh cá nhân' },
    { term: '不愉快', reading: 'ふゆかい', meaning: 'khó chịu, không thoải mái' }
  ], []);
  const [mini2Revealed, setMini2Revealed] = useState<number[]>([]);
  const [mini2Trans1, setMini2Trans1] = useState('');
  const [mini2ShowAnswer1, setMini2ShowAnswer1] = useState(false);
  const [mini2Trans2, setMini2Trans2] = useState('');
  const [mini2ShowAnswer2, setMini2ShowAnswer2] = useState(false);

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
            LÝ THUYẾT BÀI 2
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Sử dụng Internet & Luật bản quyền
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('2.1')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '2.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <BookOpen size={16} />
          2.1 - 2.2 Trình duyệt & Web 2.0
        </button>
        <button
          onClick={() => setActiveTab('2.3')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '2.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Cpu size={16} />
          2.3 - 2.4 Cloud & Netiquette
        </button>
        <button
          onClick={() => setActiveTab('2.5')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '2.5' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Scale size={16} />
          2.5 Sở hữu Trí tuệ
        </button>
        <button
          onClick={() => setActiveTab('minitest')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'minitest' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Languages size={16} />
          Bài tập & Mini Tests
        </button>
      </div>

      {/* Tab Contents */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
        {/* Tab 1: Web & Web 2.0 / Long Tail */}
        {activeTab === '2.1' && (
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">2.1</span> ホームページ検索 (Duyệt web & Tìm kiếm)
              </h3>
              <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                <p>
                  Để duyệt các trang web, người dùng sử dụng <strong>ブラウザ (Browser - Trình duyệt)</strong>. Địa chỉ của một trang web được gọi là <strong>URL (Uniform Resource Locator)</strong>. 
                </p>
                <p>
                  Thay vì nhập địa chỉ trực tiếp, phần lớn người dùng tìm kiếm thông qua các trang web đầu mối gọi là <strong>ポータルサイト (Portal Site - Cổng thông tin)</strong> như Google hay Yahoo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <strong className="text-indigo-600">フリーウェア (Freeware - Phần mềm miễn phí)</strong>
                    <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                      Phần mềm cho phép tải và sử dụng miễn phí. Tuy nhiên vẫn bị ràng buộc bởi các điều kiện riêng biệt của tác giả về phân phối, mở mã nguồn, thay đổi hoặc thương mại hóa chứ không tự do hoàn toàn. Nhiều phần mềm tuân thủ giấy phép **GPL (GNU General Public License)**.
                    </p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <strong className="text-pink-600">シェアウェア (Shareware - Phần mềm dùng thử)</strong>
                    <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                      Phần mềm cho phép dùng thử miễn phí trong một thời gian giới hạn hoặc bị khóa bớt chức năng. Hết hạn dùng thử người dùng buộc phải trả phí để tiếp tục sử dụng. Đây **không** phải là phần mềm miễn phí.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">2.2</span> Web2.0 (Web song phương)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                  <p>
                    Khác với <strong>Web 1.0</strong> chỉ cung cấp thông tin một chiều, <strong>Web 2.0</strong> (được định nghĩa bởi Tim O'Reilly năm 2004) là nền tảng song phương (双方向型) cho phép mọi người dùng cùng tham gia đóng góp và chia sẻ thông tin nhờ các dịch vụ như Blog, SNS (Twitter/Facebook), Wikipedia, Youtube.
                  </p>
                  <p>
                    Web 2.0 hoạt động hiệu quả nhờ các công nghệ lõi:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm flex flex-col gap-1.5">
                    <li><strong>RSS</strong>: Định dạng giúp tự động cập nhật thông tin mới nhất từ website.</li>
                    <li><strong>Ajax</strong>: Kỹ thuật xử lý yêu cầu trực tiếp trên máy người dùng để không cần tải lại toàn bộ trang (tạo cảm giác mượt mà như Google Maps, Gmail).</li>
                    <li><strong>トラックバック (Trackback)</strong>: Cơ chế thông báo tự động giữa các website khi có trích dẫn hoặc liên kết chéo.</li>
                  </ul>
                </div>

                {/* Long Tail vs Pareto Simulator */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
                  <h4 className="font-bold text-slate-800 flex items-center justify-between text-sm md:text-base">
                    <span>Mô hình Long Tail (Đuôi dài) vs. Pareto</span>
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2.5 py-0.5 rounded-full font-bold">
                      {storeType === 'longtail' ? 'Long Tail (Mô hình Amazon)' : 'Quy luật Pareto (80/20)'}
                    </span>
                  </h4>

                  {/* Visual Chart */}
                  <div className="relative w-full h-36 bg-white border border-slate-200 rounded-xl overflow-hidden p-2 flex items-end justify-between">
                    {/* Y-axis label */}
                    <div className="absolute left-2 top-2 text-[9px] text-slate-400">Doanh thu</div>
                    <div className="absolute right-2 bottom-2 text-[9px] text-slate-400">Độ phổ biến sản phẩm</div>

                    {/* Bar chart representation */}
                    <div className="flex w-full items-end gap-1 h-28">
                      {Array.from({ length: 20 }).map((_, idx) => {
                        const score = Math.max(5, 90 / Math.pow(idx + 1, 1.2));
                        const isMainstream = idx < 4; // Top 20%
                        const isActive = storeType === 'longtail' || isMainstream;

                        return (
                          <div 
                            key={idx} 
                            style={{ height: `${score}%` }} 
                            className={`flex-1 rounded-t transition-all duration-300 ${
                              isActive 
                                ? isMainstream 
                                  ? 'bg-indigo-600' 
                                  : 'bg-pink-500' 
                                : 'bg-slate-200'
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setStoreType('pareto')}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                        storeType === 'pareto' 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      Cửa hàng thực tế (Pareto)
                    </button>
                    <button
                      onClick={() => setStoreType('longtail')}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                        storeType === 'longtail' 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      Cửa hàng online (Long Tail)
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {storeType === 'pareto' ? (
                      <span><strong>Quy luật 8/2 (Pareto)</strong>: 20% sản phẩm bán chạy nhất đóng góp 80% doanh thu. Cửa hàng truyền thống chỉ chứa được các sản phẩm bán chạy (<span className="text-indigo-600 font-bold">màu xanh</span>) do giới hạn kệ kho.</span>
                    ) : (
                      <span><strong>Long Tail (Đuôi dài)</strong>: Nhờ không gian mạng ảo không giới hạn lưu trữ, các sản phẩm ngách bán chậm (<span className="text-pink-500 font-bold">màu hồng</span>) kéo dài vô tận vẫn đem lại nguồn lợi nhuận cộng dồn khổng lồ cho Amazon/iTunes.</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Cloud Computing & Netiquette */}
        {activeTab === '2.3' && (
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">2.3</span> クラウドコンピューティング (Điện toán đám mây)
              </h3>
              <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                <p>
                  <strong>クラウドコンピューティング (Cloud Computing)</strong> là mô hình cung cấp dịch vụ thông qua Internet mà người dùng không cần bận tâm đến vị trí vật lý hay cấu hình máy chủ cung cấp dịch vụ (giống như dịch vụ nằm sau một đám mây mù). Khái niệm này được Eric Schmidt của Google đề xuất năm 2006.
                </p>
                <p>
                  Mô hình Cloud giúp doanh nghiệp thuê dịch vụ theo nhu cầu mà không cần tự mua máy chủ hay trả phí bảo trì, tiêu biểu gồm các hình thức:
                </p>
                <ul className="list-disc pl-5 text-xs md:text-sm flex flex-col gap-1.5">
                  <li><strong>ASP (Application Service Provider)</strong>: Nhà cung cấp dịch vụ ứng dụng qua mạng.</li>
                  <li><strong>SaaS (Software as a Service)</strong>: Cung cấp phần mềm trực tiếp trên môi trường web (như Gmail, Google Docs).</li>
                  <li><strong>グリッドコンピューティング (Grid Computing)</strong>: Mạng điện toán lưới liên kết sức mạnh của nhiều máy tính rải rác lại để xử lý tác vụ khổng lồ.</li>
                </ul>
              </div>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">2.4</span> メール利用の注意 (Nghi thức giao tiếp email - Netiquette)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                  <p>
                    <strong>ネチケット (Netiquette - Lịch sự trên mạng)</strong> là tổ hợp những quy tắc ứng xử lịch thiệp khi giao tiếp qua Internet, đặc biệt là khi soạn thảo Business Email. Một số lưu ý quan trọng:
                  </p>
                  <ul className="list-decimal pl-5 text-xs md:text-sm flex flex-col gap-2">
                    <li>Ghi rõ tên, chức vụ, trường lớp của mình và tạo chữ ký tự động ở cuối thư.</li>
                    <li>Ghi chính xác tên công ty, bộ phận, chức vụ và tên người nhận ở đầu thư.</li>
                    <li>Không đòi hỏi trả lời khẩn cấp. Nên cho đối phương khoảng 1 tuần để phản hồi.</li>
                    <li>Kiểm tra kỹ hòm thư tránh gửi nhầm lộ thông tin cá nhân.</li>
                    <li>Không đính kèm tập tin quá lớn (tránh vượt 1-2MB, file lớn hơn nên xác nhận trước).</li>
                    <li>Tránh ký tự đặc biệt, tranh vẽ emoji có thể gây lỗi font chữ (文字化け).</li>
                  </ul>
                </div>

                {/* Email Netiquette Interactive Analyzer */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <Mail size={16} className="text-indigo-600" />
                    Trình phân tích độ lịch sự của Email (Netiquette Check)
                  </h4>
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-slate-700">Tùy chỉnh nội dung soạn thảo:</span>
                      <div className="grid grid-cols-2 gap-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={hasRecipient} onChange={() => setHasRecipient(!hasRecipient)} className="accent-indigo-600" />
                          <span>Khai báo tên người nhận</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={hasName} onChange={() => setHasName(!hasName)} className="accent-indigo-600" />
                          <span>Khai báo tên/chữ ký cuối thư</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={useEmojis} onChange={() => setUseEmojis(!useEmojis)} className="accent-indigo-600" />
                          <span>Dùng 絵文字 / Ký tự đặc biệt</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={isPolite} onChange={() => setIsPolite(!isPolite)} className="accent-indigo-600" />
                          <span>Văn phong kính ngữ lễ phép</span>
                        </label>
                      </div>
                      <div className="flex flex-col gap-1 mt-2">
                        <span className="font-semibold text-slate-700">Dung lượng đính kèm: {attachmentSize} MB</span>
                        <input 
                          type="range" min="0.1" max="10" step="0.5" value={attachmentSize} 
                          onChange={(e) => setAttachmentSize(Number(e.target.value))}
                          className="w-full accent-indigo-600"
                        />
                      </div>
                    </div>

                    {/* Report Score Card */}
                    <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-600">Điểm số lịch sự:</span>
                        <span className={`text-lg font-black ${
                          emailScore.score >= 80 ? 'text-emerald-600' : emailScore.score >= 50 ? 'text-amber-500' : 'text-rose-500'
                        }`}>
                          {emailScore.score} / 100
                        </span>
                      </div>
                      {emailScore.warnings.length > 0 ? (
                        <div className="flex flex-col gap-1 bg-rose-50 border border-rose-100 p-2.5 rounded-lg text-rose-800 text-[10px]">
                          {emailScore.warnings.map((w, idx) => (
                            <div key={idx} className="flex gap-1 items-start">
                              <AlertTriangle size={12} className="shrink-0 mt-0.5" />
                              <span>{w}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-emerald-50 border border-emerald-100 p-2.5 rounded-lg text-emerald-800 font-bold text-center">
                          🎉 Email của bạn đạt chuẩn giao tiếp chuyên nghiệp!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Intellectual Property Laws */}
        {activeTab === '2.5' && (
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">2.5</span> 知的所有権 (Quyền sở hữu trí tuệ)
              </h3>
              <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                <p>
                  Các sản phẩm trí tuệ sáng tạo ngày nay được bảo hộ chặt chẽ bởi hệ thống pháp luật sở hữu trí tuệ gồm 2 nhóm chính:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                  <div className="border border-slate-200 rounded-xl p-5 bg-indigo-50/30">
                    <strong className="text-indigo-800 text-base">著作権 (Quyền tác giả - Copyright)</strong>
                    <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
                      Bảo hộ các sản phẩm sáng tạo mang tính văn hóa nghệ thuật. Gồm có:
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-xs text-slate-500 flex flex-col gap-1">
                      <li><strong>著作者人格権 (Quyền nhân thân)</strong>: Bảo hộ danh dự, tính toàn vẹn của tác phẩm, việc công khai tác phẩm.</li>
                      <li><strong>著作者財産権 (Quyền tài sản)</strong>: Bảo hộ lợi ích kinh tế (sao chép, trình chiếu, quyền sử dụng thứ hai).</li>
                      <li><strong>著作隣接権 (Quyền liên quan)</strong>: Bảo hộ nhà sản xuất băng đĩa, đài truyền hình, biên tập viên.</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-5 bg-pink-50/30">
                    <strong className="text-pink-800 text-base">工業所有権 (Quyền sở hữu công nghiệp)</strong>
                    <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
                      Bảo hộ các sáng tạo kỹ thuật thúc đẩy công nghiệp. Gồm có:
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-xs text-slate-500 flex flex-col gap-1">
                      <li><strong>特許権 (Quyền sáng chế)</strong>: Bảo hộ các phát minh công nghệ hoàn toàn mới.</li>
                      <li><strong>実用新案権 (Quyền giải pháp hữu ích)</strong>: Bảo hộ cải tiến kỹ thuật nhỏ từ sản phẩm có sẵn.</li>
                      <li><strong>意匠権 (Quyền kiểu dáng công nghiệp)</strong>: Bảo hộ thiết kế kiểu dáng mỹ thuật công nghiệp.</li>
                      <li><strong>商標権 (Quyền thương hiệu)</strong>: Bảo hộ tên gọi, logo của thương hiệu doanh nghiệp.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs md:text-sm mt-2">
                  <strong>Các đối tượng bảo hộ khác trên trang web:</strong>
                  <ul className="list-disc pl-5 mt-1.5 flex flex-col gap-1 text-slate-500">
                    <li>Ảnh trên web ➔ Bản quyền tác giả & Quyền hình ảnh cá nhân (肖像権).</li>
                    <li>Nhạc nền ➔ Quyền sao chép, quyền truyền tải công cộng, quyền phát sóng, quyền cho thuê.</li>
                    <li>Nhân vật đồ họa ➔ Quyền tác giả.</li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* IP Category Classifier Game */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm text-xs">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <Scale size={16} className="text-indigo-600" />
                Trò chơi luyện tập phân loại Quyền sở hữu Trí tuệ
              </h4>
              <div className="flex flex-col gap-3">
                {ipItems.map((item) => (
                  <div key={item.id} className="p-3 bg-white border border-slate-200 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <span className="font-bold text-slate-700">{item.name}</span>
                    <select 
                      value={ipSelections[item.id] || ''}
                      onChange={(e) => setIpSelections(prev => ({ ...prev, [item.id]: e.target.value }))}
                      className="bg-slate-50 border border-slate-300 rounded p-1.5 text-slate-700 font-bold max-w-full"
                    >
                      <option value="">Chọn loại quyền sở hữu</option>
                      <option value="copyright">Quyền tác giả (著作権)</option>
                      <option value="patent">Quyền sáng chế (特許権)</option>
                      <option value="utility">Quyền giải pháp hữu ích (実用新案権)</option>
                      <option value="design">Quyền kiểu dáng (意匠権)</option>
                      <option value="trademark">Quyền thương hiệu (商標権)</option>
                    </select>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <h5 className="font-bold text-slate-800">Kết quả đánh giá:</h5>
                <div className="flex flex-wrap gap-3">
                  {ipItems.map((item) => {
                    const selected = ipSelections[item.id];
                    const isCorrect = selected === item.category;
                    return (
                      <div key={item.id} className="text-[10px] p-2 bg-white border rounded-lg flex items-center gap-1.5 shadow-sm">
                        <span className="font-bold text-slate-500">Mục {item.id}:</span>
                        {selected ? (
                          isCorrect ? (
                            <span className="text-emerald-600 font-bold">✓ Đúng ({item.label})</span>
                          ) : (
                            <span className="text-rose-600 font-bold">✗ Sai</span>
                          )
                        ) : (
                          <span className="text-slate-400">Chưa chọn</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Minitests */}
        {activeTab === 'minitest' && (
          <div className="flex flex-col gap-10">
            {/* IT Passport Question */}
            <div>
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-base md:text-lg">
                <HelpCircle className="text-indigo-600" />
                Câu hỏi luyện tập IT Passport (ITパスポート試験)
              </h4>
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <p className="font-bold text-slate-800 mb-3 text-sm md:text-base leading-relaxed">
                  ロングテールの考え方を活用したインターネットにおけるビジネスの説明として，適切なものはどれか． (Giải thích nào sau đây mô tả đúng nhất về ứng dụng mô hình Long Tail trên Internet?)
                </p>
                <div className="flex flex-col gap-2 mt-4 text-xs md:text-sm">
                  {[
                    { key: 'a', text: '(ア) Người dùng đấu giá và mua đồ vật do cá nhân đăng bán trên trang web.' },
                    { key: 'b', text: '(イ) Xây dựng trang web gồm nhiều cửa hàng ảo trên mạng và thu phí thuê gian hàng.' },
                    { key: 'c', text: '(ウ) Tiếp tục bán và phân phối những sản phẩm có lượng mua rất ít trên website mạng ảo.' },
                    { key: 'd', text: '(エ) Đăng liên kết trên các website khác để hướng khách hàng đến trang mua sắm và trả hoa hồng.' }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setSelectedItOption(opt.key);
                        setShowItExplanation(true);
                      }}
                      className={`w-full text-left py-3 px-4 rounded-lg border-2 transition-all ${
                        selectedItOption === opt.key 
                          ? opt.key === 'c' 
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-800' 
                            : 'border-rose-500 bg-rose-50 text-rose-800'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
                {showItExplanation && (
                  <div className="mt-4 p-4 bg-indigo-50 border border-indigo-100 rounded-lg text-xs md:text-sm text-indigo-900 leading-relaxed">
                    <strong>Giải thích chi tiết:</strong> Đáp án đúng là <strong>(ウ)</strong>. Mô hình Long Tail (Đuôi dài) tận dụng việc kho bãi số hóa trên Internet cực rẻ để tiếp tục bày bán và phân phối những mặt hàng ngách dù lượng bán mỗi sản phẩm vô cùng ít, nhưng cộng dồn doanh số lại sẽ vượt trội hơn việc chỉ bán vài sản phẩm phổ biến.
                  </div>
                )}
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Keyboard Symbols Match Test */}
            <div>
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-base md:text-lg">
                <Languages className="text-indigo-600" />
                Mini Test 1: Nối các ký hiệu bàn phím với cách đọc phù hợp
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start text-xs md:text-sm">
                <div className="flex flex-col gap-2">
                  {[
                    { sym: '=', label: '=' },
                    { sym: '.', label: '.' },
                    { sym: '+', label: '+' },
                    { sym: ',', label: ',' },
                    { sym: '_', label: '_' },
                    { sym: '-', label: '-' },
                    { sym: ':', label: ':' },
                    { sym: '*', label: '*' },
                    { sym: '^', label: '^' },
                    { sym: '~', label: '~' }
                  ].map((item) => (
                    <div key={item.sym} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                      <span className="font-mono font-black text-lg bg-white px-2.5 py-1 rounded shadow-sm border border-slate-100">{item.label}</span>
                      <select 
                        value={symbolMatches[item.sym] || ''}
                        onChange={(e) => setSymbolMatches(prev => ({ ...prev, [item.sym]: e.target.value }))}
                        className="bg-white border border-slate-300 rounded p-1 text-slate-700 font-bold"
                      >
                        <option value="">Chọn cách đọc</option>
                        <option value="caret">Caret, caret, hat (ハット)</option>
                        <option value="period">Period, dot (ドット)</option>
                        <option value="asterisk">Asterisk (アスタリスク)</option>
                        <option value="equal">Equal (イコール)</option>
                        <option value="minus">Minus, hyphen, dash (ハイフン)</option>
                        <option value="tilde">Tilde, tilder (チルダ)</option>
                        <option value="comma">Comma (カンマ)</option>
                        <option value="underscore">Underbar, underscore (アンダーバー)</option>
                        <option value="plus">Plus (プラス)</option>
                        <option value="colon">Colon (コロン)</option>
                      </select>
                    </div>
                  ))}
                </div>
                {/* Result */}
                <div className="p-5 border border-slate-200 rounded-xl bg-slate-50 flex flex-col gap-3">
                  <h5 className="font-bold text-slate-800">Kết quả kiểm tra ký hiệu:</h5>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    {Object.keys(correctSymbols).map((sym) => {
                      const ans = symbolMatches[sym];
                      const isCorrect = ans === correctSymbols[sym as keyof typeof correctSymbols];
                      return (
                        <div key={sym} className="p-2 bg-white rounded border flex items-center justify-between shadow-sm">
                          <span className="font-mono font-bold text-slate-500">{sym}</span>
                          {ans ? (
                            isCorrect ? (
                              <span className="text-emerald-600 font-bold">✓ Đúng</span>
                            ) : (
                              <span className="text-rose-600 font-bold">✗ Sai</span>
                            )
                          ) : (
                            <span className="text-slate-400">Chưa nối</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Vocab Tests */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mini Test 1: Vocab */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <h5 className="font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200 flex justify-between items-center text-sm md:text-base">
                  <span>Kiểm tra Từ vựng 2.1 - 2.2</span>
                  <button 
                    onClick={() => setMini1Revealed(mini1Vocab.map((_, idx) => idx))}
                    className="text-xs text-indigo-600 hover:underline cursor-pointer"
                  >
                    Xem tất cả
                  </button>
                </h5>
                <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                  {mini1Vocab.map((word, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setMini1Revealed(prev => prev.includes(idx) ? prev.filter(x => x !== idx) : [...prev, idx])}
                      className="p-2.5 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-indigo-400 transition-all flex flex-col gap-0.5"
                    >
                      <span className="font-bold text-slate-800">{word.term} ({word.reading})</span>
                      <span className={`text-slate-500 text-[11px] transition-all ${
                        mini1Revealed.includes(idx) ? 'opacity-100 block' : 'opacity-0 hidden'
                      }`}>
                        {word.meaning}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini Test 2: Vocab */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <h5 className="font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200 flex justify-between items-center text-sm md:text-base">
                  <span>Kiểm tra Từ vựng 2.3 - 2.5</span>
                  <button 
                    onClick={() => setMini2Revealed(mini2Vocab.map((_, idx) => idx))}
                    className="text-xs text-indigo-600 hover:underline cursor-pointer"
                  >
                    Xem tất cả
                  </button>
                </h5>
                <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
                  {mini2Vocab.map((word, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setMini2Revealed(prev => prev.includes(idx) ? prev.filter(x => x !== idx) : [...prev, idx])}
                      className="p-2.5 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-indigo-400 transition-all flex flex-col gap-0.5"
                    >
                      <span className="font-bold text-slate-800">{word.term} ({word.reading})</span>
                      <span className={`text-slate-500 text-[11px] transition-all ${
                        mini2Revealed.includes(idx) ? 'opacity-100 block' : 'opacity-0 hidden'
                      }`}>
                        {word.meaning}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Translation Exercises */}
            <div className="flex flex-col gap-6">
              <h4 className="font-bold text-slate-800 text-base md:text-lg">Dịch câu Nhật - Việt</h4>
              
              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex flex-col gap-3 text-xs md:text-sm">
                <p className="font-bold text-slate-700">Câu 1 (Dịch Việt):</p>
                <p className="italic text-slate-600">
                  「インターネットは世界中の人たちと直接ふれあうことができる，すばらしいコミュニケーションの道具です．しかし，実際に顔が見えないと，現実世界では決して言わないような表現をしてしまう場合もあります。」
                </p>
                <textarea 
                  value={mini1Trans1} 
                  onChange={(e) => setMini1Trans1(e.target.value)}
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:border-indigo-500 font-sans focus:outline-none"
                  rows={2}
                />
                <div>
                  <button 
                    onClick={() => setMini1ShowAnswer1(!mini1ShowAnswer1)}
                    className="text-xs text-indigo-600 hover:underline font-bold"
                  >
                    {mini1ShowAnswer1 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                  {mini1ShowAnswer1 && (
                    <div className="mt-2 p-3 bg-white border border-slate-200 rounded-lg text-emerald-700 leading-relaxed">
                      <strong>Đáp án mẫu:</strong> Internet là một công cụ truyền thông tuyệt vời giúp ta có thể tiếp xúc trực tiếp với mọi người trên toàn thế giới. Tuy nhiên, nếu không trực tiếp nhìn thấy khuôn mặt nhau ngoài đời, đôi khi chúng ta lại diễn đạt những lời lẽ vốn dĩ không bao giờ nói ở thế giới thực.
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex flex-col gap-3 text-xs md:text-sm">
                <p className="font-bold text-slate-700">Câu 2 (Dịch Việt):</p>
                <p className="italic text-slate-600">
                  「文書の電子化，CD-R の普及，ホームページ利用の一般化に伴って情報の劣化しないコピーがとても手軽に行えるようになってきました．しかし，技術的にできるからと言って何をしても良いわけではありません．特に知的財産を守る知的所有権に関しては多くの法律で守られていますので注意が必要です。」
                </p>
                <textarea 
                  value={mini1Trans2} 
                  onChange={(e) => setMini1Trans2(e.target.value)}
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:border-indigo-500 font-sans focus:outline-none"
                  rows={3}
                />
                <div>
                  <button 
                    onClick={() => setMini1ShowAnswer2(!mini1ShowAnswer2)}
                    className="text-xs text-indigo-600 hover:underline font-bold"
                  >
                    {mini1ShowAnswer2 ? 'Ẩn đáp án' : 'Xem đáp án mẫu'}
                  </button>
                  {mini1ShowAnswer2 && (
                    <div className="mt-2 p-3 bg-white border border-slate-200 rounded-lg text-emerald-700 leading-relaxed">
                      <strong>Đáp án mẫu:</strong> Cùng với sự điện tử hóa văn bản, phổ biến của đĩa CD-R và sử dụng đại trà trang web, việc sao chép thông tin không suy giảm chất lượng ngày nay đã có thể thực hiện cực kỳ dễ dàng. Tuy nhiên, không phải cứ làm được về mặt kỹ thuật là có quyền làm bất cứ thứ gì. Cần hết sức lưu ý vì các quyền sở hữu trí tuệ để bảo vệ tài sản trí tuệ đang được bảo hộ bởi rất nhiều điều luật pháp lý.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
