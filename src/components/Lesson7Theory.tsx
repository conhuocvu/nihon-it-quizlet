import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, BookOpen, ShoppingBag, CreditCard, Users, 
  HelpCircle, Shuffle, ShieldAlert, BarChart3, Database,
  ArrowRight, Key, Shield, FileText, CheckCircle2, UserCheck, RefreshCw, Moon, Sun, Languages
} from 'lucide-react';

interface Lesson7TheoryProps {
  onClose: () => void;
}

export const Lesson7Theory: React.FC<Lesson7TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'7.1' | '7.2' | '7.3' | '7.4' | 'minitest'>('7.1');

  // Simulator 1: E-commerce flows (BtoB, BtoC, CtoC)
  const [activeFlow, setActiveFlow] = useState<'B2B' | 'B2C' | 'C2C'>('B2C');

  // Simulator 2: POS Simulator
  const [cart, setCart] = useState<{ id: string; name: string; price: number; qty: number }[]>([
    { id: '1', name: 'Trà xanh Ôlong', price: 150, qty: 2 },
    { id: '2', name: 'Cơm nắm cá hồi', price: 220, qty: 1 }
  ]);
  const [weatherCondition, setWeatherCondition] = useState<'Nắng nóng' | 'Mưa lạnh'>('Nắng nóng');
  const [posLogs, setPosLogs] = useState<string[]>([
    'POS Khởi tạo hệ thống...',
    'Đã kết nối với máy chủ quản lý kho.'
  ]);

  const posAnalysis = useMemo(() => {
    if (weatherCondition === 'Nắng nóng') {
      return {
        prediction: 'Nhu cầu nước giải khát tăng 40%, kem tăng 25%.',
        action: 'Đặt hàng bổ sung Trà xanh Ôlong qua EOS. Đề xuất tăng tần suất vận chuyển buổi trưa.'
      };
    } else {
      return {
        prediction: 'Nhu cầu đồ ăn nóng (lẩu mini, súp) tăng 30%.',
        action: 'Giảm lượng nước đá nhập kho, tăng đặt hàng Cơm nắm hâm nóng.'
      };
    }
  }, [weatherCondition]);

  const handleCheckout = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const newLog = `[POS Giao dịch] ${new Date().toLocaleTimeString()} - Đã bán hàng tổng trị giá ${total} Yên. Tự động trừ kho.`;
    setPosLogs(prev => [newLog, ...prev]);
    alert('Thanh toán thành công! POS đã đồng bộ dữ liệu doanh số và gửi lệnh đặt hàng tự động tới hệ thống EOS.');
  };

  // Simulator 3: Electronic Money Flow
  const [moneyType, setMoneyType] = useState<'closed' | 'open'>('closed');

  // Simulator 4: Mock Cookie & CRM
  const [visitorName, setVisitorName] = useState<string>('');
  const [visitorPref, setVisitorPref] = useState<string>('Điện thoại & Gadget');
  const [cookieStored, setCookieStored] = useState<{ id: string; name: string; pref: string } | null>(null);
  const [hasVisited, setHasVisited] = useState<boolean>(false);

  const handleRegisterCookie = () => {
    if (!visitorName) return;
    const mockCookie = {
      id: 'USR-' + Math.floor(Math.random() * 9000 + 1000),
      name: visitorName,
      pref: visitorPref
    };
    setCookieStored(mockCookie);
    setHasVisited(true);
  };

  const handleClearCookie = () => {
    setCookieStored(null);
    setVisitorName('');
    setHasVisited(false);
  };

  // IT Passport Cookie Question
  const [selectedItOption, setSelectedItOption] = useState<string | null>(null);
  const [showItExplanation, setShowItExplanation] = useState<boolean>(false);

  // Vocabulary lists
  const mini1Vocab = useMemo(() => [
    { term: 'データマイニング', reading: 'data mining', meaning: 'khai thác dữ liệu để phân tích thống kê' },
    { term: 'チャージする', reading: 'charge する', meaning: 'nạp tiền vào thẻ hoặc tài khoản' },
    { term: '電子商取引', reading: 'でんししょうとりひき', meaning: 'giao dịch thương mại điện tử' },
    { term: '設備投資', reading: 'せつびとうし', meaning: 'đầu tư trang thiết bị, tài sản cố định' },
    { term: '配送', reading: 'はいそう', meaning: 'giao hàng, vận chuyển phân phối hàng hóa' },
    { term: '抜き出す', reading: 'ぬきだす', meaning: 'truy xuất, trích xuất dữ liệu mục tiêu' },
    { term: '流通', reading: 'りゅうつう', meaning: 'lưu thông hàng hóa hoặc dòng tiền' },
    { term: 'を欠く', reading: 'をかく', meaning: 'thiếu sót, không có đủ (tính chính xác...)' },
    { term: '電子化', reading: 'でんしか', meaning: 'tin học hóa, số hóa quy trình' },
    { term: '顧客', reading: 'こきゃく', meaning: 'khách hàng' }
  ], []);

  const mini2Vocab = useMemo(() => [
    { term: '電子マネー', reading: 'でんし money', meaning: 'tiền điện tử' },
    { term: 'プリペイドカード', reading: 'prepaid card', meaning: 'thẻ trả trước' },
    { term: '口座振替', reading: 'こうざふりかえ', meaning: 'chuyển khoản tự động giữa các tài khoản' },
    { term: '現金化', reading: 'げんきんか', meaning: 'quy đổi ra tiền mặt' },
    { term: '個人情報', reading: 'こじんじょうほう', meaning: 'thông tin cá nhân' },
    { term: '販売実績', reading: 'はんばいじっせき', meaning: 'kết quả doanh số/thành tích bán hàng' },
    { term: '宣伝戦略', reading: 'せんでんせんりゃく', meaning: 'chiến lược tuyên truyền, quảng cáo' },
    { term: '匿名性', reading: 'とくめいせい', meaning: 'tính ẩn danh, bảo mật danh tính' },
    { term: '事業者', reading: 'じぎょうしゃ', meaning: 'doanh nghiệp, đơn vị kinh doanh' },
    { term: '収益', reading: 'しゅうえき', meaning: 'doanh thu, lợi nhuận thu về' }
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
            LÝ THUYẾT BÀI 7
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Ứng dụng Internet trong Kinh doanh (ビジネスにおけるインターネット利用)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('7.1')}
          className={`flex-1 min-w-[125px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '7.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <ShoppingBag size={16} />
          7.1 Thương mại điện tử
        </button>
        <button
          onClick={() => setActiveTab('7.2')}
          className={`flex-1 min-w-[125px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '7.2' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Database size={16} />
          7.2 Chuẩn hóa EDI/POS/CALS
        </button>
        <button
          onClick={() => setActiveTab('7.3')}
          className={`flex-1 min-w-[125px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '7.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <CreditCard size={16} />
          7.3 Tiền điện tử (E-Money)
        </button>
        <button
          onClick={() => setActiveTab('7.4')}
          className={`flex-1 min-w-[125px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '7.4' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Users size={16} />
          7.4 & 7.5 CRM & Cookie
        </button>
        <button
          onClick={() => setActiveTab('minitest')}
          className={`flex-1 min-w-[125px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'minitest' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Languages size={16} />
          Bài tập & Minitests
        </button>
      </div>

      {/* Tab Contents */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm animate-fadeIn">
        
        {/* Tab 1: 電子商取引 */}
        {activeTab === '7.1' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                7.1 電子商取引 (Thương mại điện tử - e-Commerce)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>電子商取引 (e-Commerce)</strong> là quá trình số hóa các khâu giao dịch thông qua mạng máy tính.
                  </p>
                  <p>
                    Quy trình giao dịch (<strong>取引プロセス - Torihiki Process</strong>) bao gồm:
                  </p>
                  <ul className="list-disc pl-5 font-bold text-slate-800 text-xs md:text-sm flex flex-col gap-1">
                    <li>発注 (Hành động Đặt hàng) / 受注 (Nhận đơn hàng)</li>
                    <li>決済 (Quy trình thanh toán, đối soát tiền)</li>
                    <li>配送 (Vận chuyển, phân phối hàng hóa)</li>
                    <li>商品開発 (Nghiên cứu và phát triển sản phẩm mới)</li>
                  </ul>
                  <div className="p-3.5 bg-indigo-50 border border-indigo-100 rounded-xl text-xs md:text-sm text-indigo-900 leading-relaxed">
                    💡 <strong>Cải tiến so với mô hình cũ:</strong> Giao dịch truyền thống dùng giấy tờ giao tận tay hoặc gọi điện thoại rất dễ xảy ra sai sót do thiếu lưu trữ bản ghi (<strong>記録がないため正確さを欠く</strong>). Chuyển sang thương mại điện tử giúp tối ưu hóa, đẩy nhanh tốc độ giao dịch và giảm đáng kể chi phí (<strong>コスト削減</strong>).
                  </div>
                </div>

                {/* Interactive Flow Visualizer */}
                <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Các mô hình kinh doanh phổ biến</h4>
                  <div className="flex gap-2">
                    {['B2B', 'B2C', 'C2C'].map((flow) => (
                      <button
                        key={flow}
                        onClick={() => setActiveFlow(flow as any)}
                        className={`flex-1 py-2 font-bold rounded-lg border transition-all cursor-pointer text-center text-xs ${
                          activeFlow === flow 
                            ? 'bg-indigo-600 text-white border-indigo-600' 
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {flow === 'B2B' ? 'BtoB (Doanh nghiệp - Doanh nghiệp)' : flow === 'B2C' ? 'BtoC (Doanh nghiệp - Khách hàng)' : 'CtoC (Khách hàng - Khách hàng)'}
                      </button>
                    ))}
                  </div>

                  <div className="bg-white border rounded-xl p-5 flex flex-col gap-3">
                    {activeFlow === 'B2B' && (
                      <div>
                        <span className="font-bold text-indigo-700 text-sm">BtoB / 企業間 (Business to Business)</span>
                        <p className="mt-2 text-slate-600 leading-relaxed">
                          Giao dịch bán buôn, cung ứng vật tư giữa các công ty lớn. Ví dụ: Nhà sản xuất linh kiện bán cho nhà máy ô tô. Yêu cầu tính đồng bộ dữ liệu EDI cao và hệ thống bảo mật chặt chẽ.
                        </p>
                      </div>
                    )}
                    {activeFlow === 'B2C' && (
                      <div>
                        <span className="font-bold text-indigo-700 text-sm">BtoC / 企業対消費者 (Business to Consumer)</span>
                        <p className="mt-2 text-slate-600 leading-relaxed">
                          Bán hàng trực tiếp từ doanh nghiệp tới cá nhân người tiêu dùng qua các sàn thương mại điện tử như Amazon, Rakuten. Sử dụng nhiều công nghệ quản trị khách hàng (CRM) và lưu trữ trạng thái người dùng (Cookie).
                        </p>
                      </div>
                    )}
                    {activeFlow === 'C2C' && (
                      <div>
                        <span className="font-bold text-indigo-700 text-sm">CtoC / 消費者間 (Consumer to Consumer)</span>
                        <p className="mt-2 text-slate-600 leading-relaxed">
                          Giao dịch trực tiếp giữa cá nhân với nhau. Điển hình là các trang đấu giá qua mạng (<strong>ネットオークション</strong> - Yahoo Auction, Mercari).
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Chuẩn hóa EDI/POS/CALS */}
        {activeTab === '7.2' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                7.2 電子商取引情報の標準化 (Chuẩn hóa Thông tin Giao dịch)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Để kết nối liên doanh nghiệp, dữ liệu giao dịch cần được đồng bộ hóa thống nhất dưới dạng cấu trúc chung.
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm flex flex-col gap-2.5">
                    <li>
                      <strong>EDI (Electronic Data Interchange)</strong>: Chuẩn hóa việc trao đổi dữ liệu điện tử. Trước đây việc truyền dữ liệu gặp lỗi vì cấu trúc máy tính của mỗi công ty khác nhau. Hiện nay, <strong>Web-EDI</strong> sử dụng ngôn ngữ cấu trúc <strong>XML</strong> giúp doanh nghiệp nhỏ chỉ cần trình duyệt là có thể kết nối giao dịch với chi phí cực thấp.
                    </li>
                    <li>
                      <strong>EOS (Electronic Ordering System)</strong>: Hệ thống đặt hàng điện tử trực tuyến, hỗ trợ giao dịch xuyên biên giới 24/7.
                    </li>
                    <li>
                      <strong>CALS (Commerce At Light Speed)</strong>: Chuẩn hóa việc số hóa và chia sẻ toàn bộ vòng đời sản phẩm: <strong>Phát triển (開発) ➔ Sản xuất (製造) ➔ Giao hàng (納入) ➔ Bảo trì (保守)</strong>. Giúp cải thiện lớn thời hạn giao hàng (納期) giữa các đối tác liên kết sản xuất.
                    </li>
                  </ul>
                </div>

                {/* POS Simulator */}
                <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <div className="flex justify-between items-center border-b pb-2">
                    <h4 className="font-bold text-slate-800 text-sm">Hệ thống POS (Point of Sales) Simulator</h4>
                    <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded">CONVENIENCE MOCK</span>
                  </div>

                  <div className="bg-white border rounded-xl p-4 flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-500">Giỏ hàng thanh toán tại quầy:</span>
                      <div className="flex gap-2 items-center">
                        <span className="text-slate-400">Thời tiết:</span>
                        <select 
                          value={weatherCondition} 
                          onChange={(e) => setWeatherCondition(e.target.value as any)}
                          className="bg-slate-100 border rounded px-2 py-0.5 focus:outline-none font-bold text-slate-700"
                        >
                          <option value="Nắng nóng">Nắng nóng ☀️</option>
                          <option value="Mưa lạnh">Mưa lạnh 🌧️</option>
                        </select>
                      </div>
                    </div>
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-xs font-mono border-b pb-1">
                        <span>{item.name} x {item.qty}</span>
                        <span className="font-bold">{item.price * item.qty} Yên</span>
                      </div>
                    ))}
                    <button 
                      onClick={handleCheckout}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-xl transition-all cursor-pointer text-xs"
                    >
                      Thanh toán tại quầy thu ngân (POS Checkout)
                    </button>
                  </div>

                  <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg text-amber-900 leading-relaxed text-[11px]">
                    <strong>Dự báo POS tự động:</strong> {posAnalysis.prediction}
                    <br />
                    <strong>Hành động đề xuất:</strong> {posAnalysis.action}
                  </div>

                  <div className="bg-slate-900 text-emerald-400 font-mono text-[10px] p-3 rounded-lg max-h-24 overflow-y-auto">
                    {posLogs.map((log, idx) => (
                      <div key={idx}>{log}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Tiền điện tử */}
        {activeTab === '7.3' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                7.3 電子マネー (Tiền điện tử / E-Money)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Tiền điện tử được chia thành 2 phân loại chính dựa trên phạm vi lưu chuyển giá trị (バリュー):
                  </p>
                  
                  <div className="border border-slate-200 rounded-xl overflow-hidden text-xs md:text-sm">
                    <button 
                      onClick={() => setMoneyType('closed')}
                      className={`w-1/2 py-3 font-bold cursor-pointer transition-all ${moneyType === 'closed' ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600' : 'bg-slate-50 text-slate-500'}`}
                    >
                      Kiểu khép kín (クローズドループ型)
                    </button>
                    <button 
                      onClick={() => setMoneyType('open')}
                      className={`w-1/2 py-3 font-bold cursor-pointer transition-all ${moneyType === 'open' ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600' : 'bg-slate-50 text-slate-500'}`}
                    >
                      Kiểu mở (オープンループ型)
                    </button>

                    <div className="p-4 bg-white">
                      {moneyType === 'closed' ? (
                        <div className="flex flex-col gap-2">
                          <p className="font-bold text-slate-800">Đại diện tiêu biểu: VISAキャッシュ (VISA Cash)</p>
                          <p className="text-slate-600">
                            Giá trị tiền chỉ lưu chuyển khép kín giữa ngân hàng ➔ thẻ người dùng ➔ cửa hàng liên kết ➔ ngân hàng. 
                          </p>
                          <ul className="list-disc pl-5 text-[11px] text-slate-500 flex flex-col gap-1.5">
                            <li><strong>Ưu điểm đối với ngân hàng:</strong> Tận dụng được nguồn tiền mặt nạp trước (チャージ), cấu trúc chuyển khoản tự động cũ (口座振替) vẫn dùng được bình thường, không tốn tiền đầu tư lớn thiết bị mới.</li>
                            <li><strong>Nhược điểm:</strong> Người dùng bắt buộc phải mở tài khoản ngân hàng, không có tính ẩn danh (匿名性がない), phù hợp giao dịch giá trị lớn.</li>
                          </ul>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-2">
                          <p className="font-bold text-slate-800">Đại diện tiêu biểu: MasterCard の Mondex</p>
                          <p className="text-slate-600">
                            Giá trị thẻ có thể trực tiếp quy đổi ra tiền mặt tại ngân hàng. Người dùng có thể truyền trực tiếp số dư (Value) từ thẻ này sang thẻ khác mà không cần đi qua bước trung gian ngân hàng ngay lập tức.
                          </p>
                          <ul className="list-disc pl-5 text-[11px] text-slate-500 flex flex-col gap-1.5">
                            <li><strong>Ưu điểm:</strong> Tính ẩn danh (匿名性) bảo đảm giống hệt tiền mặt vật lý, rất thích hợp cho giao dịch quốc tế qua internet.</li>
                            <li><strong>Nhược điểm:</strong> Chi phí đầu tư hạ tầng thiết bị của hệ thống ngân hàng cực lớn, tốc độ nhân rộng phổ biến chậm.</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Money Loop Animator */}
                <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Sơ đồ luồng lưu chuyển giá trị (Value)</h4>
                  
                  {moneyType === 'closed' ? (
                    <div className="bg-white border rounded-xl p-5 flex flex-col gap-4 items-center">
                      <div className="flex justify-between w-full items-center">
                        <div className="bg-slate-100 border rounded-lg p-2.5 font-bold text-center w-24">
                          Ngân hàng A
                        </div>
                        <div className="flex-1 border-t-2 border-dashed border-indigo-300 relative text-center">
                          <span className="text-[10px] text-indigo-700 bg-white px-2 py-0.5 border border-indigo-200 rounded-full font-mono">
                            Khởi tạo / nạp tiền
                          </span>
                        </div>
                        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-2.5 font-bold text-center w-24">
                          Thẻ Khách hàng
                        </div>
                      </div>

                      <div className="w-full flex justify-center">
                        <div className="h-12 border-l-2 border-dashed border-indigo-300"></div>
                      </div>

                      <div className="flex justify-between w-full items-center">
                        <div className="bg-slate-100 border rounded-lg p-2.5 font-bold text-center w-24">
                          Ngân hàng B
                        </div>
                        <div className="flex-1 border-t-2 border-dashed border-indigo-300 relative text-center">
                          <span className="text-[10px] text-indigo-700 bg-white px-2 py-0.5 border border-indigo-200 rounded-full font-mono">
                            Đối soát VISA
                          </span>
                        </div>
                        <div className="bg-slate-100 border rounded-lg p-2.5 font-bold text-center w-24">
                          Cửa hàng bán
                        </div>
                      </div>

                      <div className="p-2 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg text-center w-full">
                        🔒 Chu trình KHÉP KÍN: Tiền bắt buộc phải đi về ngân hàng thu đối soát.
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white border rounded-xl p-5 flex flex-col gap-4 items-center">
                      <div className="flex justify-between w-full items-center">
                        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-2.5 font-bold text-center w-24">
                          Khách hàng A
                        </div>
                        <div className="flex-1 border-t-2 border-dashed border-emerald-500 relative text-center">
                          <span className="text-[10px] text-emerald-700 bg-white px-2 py-0.5 border border-emerald-200 rounded-full font-mono">
                            Chuyển P2P trực tiếp
                          </span>
                        </div>
                        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-2.5 font-bold text-center w-24">
                          Khách hàng B
                        </div>
                      </div>

                      <div className="w-full flex justify-center">
                        <div className="h-12 border-l-2 border-dashed border-emerald-500"></div>
                      </div>

                      <div className="flex justify-between w-full items-center">
                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 font-bold text-center w-24">
                          Ngân hàng (Cashed out)
                        </div>
                        <div className="flex-1 border-t-2 border-dashed border-emerald-500 relative text-center">
                          <span className="text-[10px] text-emerald-700 bg-white px-2 py-0.5 border border-emerald-200 rounded-full font-mono">
                            Đổi ra tiền mặt
                          </span>
                        </div>
                        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-2.5 font-bold text-center w-24">
                          Khách hàng C
                        </div>
                      </div>

                      <div className="p-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-center w-full font-bold">
                        🌐 Chu trình MỞ: Tiền lưu hành tự do giữa các thẻ giống như tiền mặt!
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: CRM & Cookie */}
        {activeTab === '7.4' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                7.4 顧客管理 (Quản trị Khách hàng CRM) & 7.5 Bảo vệ thông tin
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Cookie (クッキー)</strong>: Cơ chế lưu trữ định danh thông tin tạm thời tại trình duyệt. Nhờ Cookie, khi người mua quay lại trang web, máy chủ tự nhận dạng được danh tính mà không bắt buộc gõ lại toàn bộ mật khẩu cá nhân.
                  </p>
                  <p>
                    <strong>CRM (Customer Relationship Management)</strong>: Quản lý mối quan hệ khách hàng. Hệ thống dựa vào thói quen tiêu dùng để gửi quảng cáo đúng sản phẩm ưa thích, chúc mừng sinh nhật, hỗ trợ nhằm tạo doanh thu bền vững.
                  </p>
                  <p>
                    <strong>データマイニング (Data Mining)</strong>: Khai thác dữ liệu lớn thu gom từ thông tin khách hàng, doanh số thực tế để tìm ra quy luật bán hàng tương lai.
                  </p>
                  <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-xs text-red-900 leading-relaxed">
                    ⚠️ <strong>Luật bảo vệ thông tin cá nhân (個人情報の保護に関する法律)</strong>: Được ban hành nhằm kiểm soát chặt chẽ việc quản trị, sao chép rò rỉ dữ liệu thông tin số.
                  </div>
                </div>

                {/* CRM & Cookie Mock Simulator */}
                <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Trình mô phỏng lưu trữ Cookie & CRM cá nhân hóa</h4>
                  
                  <div className="bg-white border rounded-xl p-4 flex flex-col gap-3">
                    <span className="font-bold text-slate-500">Mô phỏng Đăng ký thành viên lần đầu:</span>
                    <div className="flex flex-col gap-2">
                      <input 
                        type="text"
                        placeholder="Nhập tên của bạn..."
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        className="p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 font-bold"
                      />
                      <select 
                        value={visitorPref}
                        onChange={(e) => setVisitorPref(e.target.value)}
                        className="p-2 border rounded-lg focus:outline-none"
                      >
                        <option value="Điện thoại & Gadget">Điện thoại & Gadget 📱</option>
                        <option value="Thời trang & Thể thao">Thời trang & Thể thao 👕</option>
                        <option value="Sách & Tài liệu học tập">Sách & Tài liệu học tập 📚</option>
                      </select>
                      <button 
                        onClick={handleRegisterCookie}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-xl transition-all cursor-pointer"
                      >
                        Đồng ý cấp quyền lưu trữ Cookie
                      </button>
                    </div>
                  </div>

                  {cookieStored ? (
                    <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 flex flex-col gap-2">
                      <div className="flex justify-between items-center font-bold">
                        <span>🍪 Dữ liệu Cookie ghi nhận tại Browser:</span>
                        <button onClick={handleClearCookie} className="text-[10px] text-red-600 hover:underline cursor-pointer">
                          Xóa Cookie
                        </button>
                      </div>
                      <div className="font-mono text-[11px]">
                        ID: {cookieStored.id} <br />
                        Tên: {cookieStored.name} <br />
                        Nhóm ưa thích: {cookieStored.pref}
                      </div>
                      <div className="mt-2 pt-2 border-t border-emerald-200/50">
                        🎁 <strong>CRM chào đón thành viên trở lại:</strong> "Xin chào <strong>{cookieStored.name}</strong>! Gợi ý sản phẩm thuộc nhóm <strong>{cookieStored.pref}</strong> đang giảm giá 15% hôm nay!"
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-amber-50 border border-amber-100 text-amber-800 rounded-xl text-center">
                      Chưa ghi nhận Cookie. Giao diện shop hiển thị tổng quát (Không cá nhân hóa).
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Minitest */}
        {activeTab === 'minitest' && (
          <div className="flex flex-col gap-10 font-sans">
            {/* IT Passport Question */}
            <div>
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-base md:text-lg">
                <HelpCircle className="text-indigo-600" />
                Câu hỏi luyện tập IT Passport (ITパスポート試験)
              </h4>
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <p className="font-bold text-slate-800 mb-3 text-sm md:text-base leading-relaxed">
                  クッキー(cookie)に関する記述 a～c のうち，適切なものだけをすべて挙げたものはどれか。 (Nhận định nào dưới đây về cơ chế Cookie là hoàn toàn chính xác?)
                </p>
                <div className="bg-white border rounded-lg p-3 text-xs md:text-sm flex flex-col gap-2 mb-4 leading-relaxed text-slate-600">
                  <p><strong>a.</strong> ID và mật khẩu đã nhập lần trước có thể tự động kế thừa thông qua cookie ngay cả khi sử dụng một PC hoàn toàn khác để xem trang web.</p>
                  <p><strong>b.</strong> Khi mượn tạm thời PC ở các quán nét để lướt web, bạn nên xóa sạch Cookie sau khi hoàn tất sử dụng.</p>
                  <p><strong>c.</strong> Nếu thông tin cá nhân được ghi trực tiếp lưu vào cookie, nó có khả năng bị tin tặc đánh cắp qua lỗi XSS (Cross-Site Scripting).</p>
                </div>
                
                <div className="flex flex-col gap-2 text-xs md:text-sm">
                  {[
                    { key: 'l7-ans-a', text: '(ア) a, b' },
                    { key: 'l7-ans-b', text: '(イ) a, b, c' },
                    { key: 'l7-ans-c', text: '(ウ) a, c' },
                    { key: 'l7-ans-d', text: '(エ) b, c' }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setSelectedItOption(opt.key);
                        setShowItExplanation(true);
                      }}
                      className={`w-full text-left py-3 px-4 rounded-lg border-2 transition-all cursor-pointer ${
                        selectedItOption === opt.key 
                          ? opt.key === 'l7-ans-d' 
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
                    <strong>Giải thích chi tiết:</strong> Đáp án chính xác là <strong>(エ) b và c</strong>.
                    <br />
                    - Nhận định <strong>a</strong> sai vì Cookie lưu trữ trực tiếp trên thiết bị cục bộ, nên không thể tự động đồng bộ sang một PC khác.
                    <br />
                    - Nhận định <strong>b</strong> đúng vì để tránh lộ lọt tài khoản trên PC công cộng.
                    <br />
                    - Nhận định <strong>c</strong> đúng do lỗ hổng bảo mật XSS cho phép hacker đọc cookie bằng mã script bất hợp pháp.
                  </div>
                )}
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Vocab Tests */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mini Test 1: Vocab */}
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <h5 className="font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200 flex justify-between items-center text-sm md:text-base">
                  <span>Kiểm tra Từ vựng 7.1 & 7.2</span>
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
                      <span className="font-bold text-slate-800">{word.term}</span>
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
                  <span>Kiểm tra Từ vựng 7.3 & 7.4</span>
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
                      <span className="font-bold text-slate-800">{word.term}</span>
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
                <p className="italic text-slate-600 text-[13px] leading-relaxed">
                  「電子マネーには IC カードを使ったもの，インターネットを使ったもの，またその複合の形態があります．IC カードを使ったものにはクローズドループ型とオープンループ型があります．」
                </p>
                <textarea 
                  value={mini1Trans1} 
                  onChange={(e) => setMini1Trans1(e.target.value)}
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none"
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
                      <strong>Đáp án mẫu:</strong> Tiền điện tử có các dạng như sử dụng thẻ IC, sử dụng internet hoặc dạng kết hợp cả hai. Loại sử dụng thẻ IC được phân thành kiểu khép kín (closed-loop) và kiểu mở (open-loop).
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex flex-col gap-3 text-xs md:text-sm">
                <p className="font-bold text-slate-700">Câu 2 (Dịch Việt):</p>
                <p className="italic text-slate-600 text-[13px] leading-relaxed">
                  「通常，ブラウザでは Cookie という仕組みを使って，ウェブサイトに対する ID 情報を記憶させ，再度そのサイトにアクセスしたときには自分が誰かを自動的に伝えています．」
                </p>
                <textarea 
                  value={mini1Trans2} 
                  onChange={(e) => setMini1Trans2(e.target.value)}
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none"
                  rows={2}
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
                      <strong>Đáp án mẫu:</strong> Thông thường, trình duyệt sử dụng một cơ chế gọi là Cookie để lưu trữ thông tin nhận dạng (ID) đối với trang web, và tự động truyền đạt danh tính khi bạn truy cập lại trang web đó.
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
