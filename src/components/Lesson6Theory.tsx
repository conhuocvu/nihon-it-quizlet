import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Languages, HelpCircle, Layers, Wifi, Monitor
} from 'lucide-react';

interface Lesson6TheoryProps {
  onClose: () => void;
}

export const Lesson6Theory: React.FC<Lesson6TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'6.1' | '6.2' | '6.4' | 'minitest'>('6.1');

  // Simulator 1: OSI 7 Layers
  const [selectedLayer, setSelectedLayer] = useState<number | null>(7);
  const osiLayers = [
    { num: 7, name: 'Application Layer (アプリケーション層)', desc: 'Giao dịch trực tiếp với ứng dụng. Tiêu biểu là HTTP dùng để truyền tải siêu văn bản (Hypertext).', protocol: 'HTTP, SMTP, FTP' },
    { num: 6, name: 'Presentation Layer (プレゼンテーション層)', desc: 'Chuyển đổi dữ liệu sang định dạng chung, mã hóa và nén dữ liệu.', protocol: 'SSL/TLS, JPEG, ASCII' },
    { num: 5, name: 'Session Layer (セッション層)', desc: 'Thiết lập, duy trì và đồng bộ hóa phiên giao tiếp giữa hai ứng dụng.', protocol: 'NetBIOS, RPC' },
    { num: 4, name: 'Transport Layer (トランスポート層)', desc: 'Đảm bảo truyền tải dữ liệu đáng tin cậy. TCP là giao thức cốt lõi kiểm soát luồng và sửa lỗi.', protocol: 'TCP, UDP' },
    { num: 3, name: 'Network Layer (ネットワーク層)', desc: 'Định tuyến đường đi của gói tin. Giao thức IP quy định địa chỉ IP cho máy tính.', protocol: 'IP, ICMP, Router' },
    { num: 2, name: 'Data Link Layer (データリンク層)', desc: 'Đóng gói dữ liệu thành khung (Frame), kiểm soát lỗi đường truyền vật lý cục bộ.', protocol: 'Ethernet, MAC Address, Switch' },
    { num: 1, name: 'Physical Layer (物理層)', desc: 'Truyền dòng bit nhị phân qua cáp vật lý. Quy định điện thế (V), đầu nối (コネクタ).', protocol: 'Cáp đồng, Cáp quang, Đầu nối RJ45' },
  ];

  // Simulator 2: DNS & Address Calculator
  const [domainInput, setDomainInput] = useState<string>('daigaku.ac.jp');
  const [ipResolved, setIpResolved] = useState<string>('133.43.251.1');
  const [isResolving, setIsResolving] = useState<boolean>(false);
  const [ipVersion, setIpVersion] = useState<'v4' | 'v6'>('v4');

  const domainExplanation = useMemo(() => {
    if (domainInput.endsWith('.co.jp')) {
      return 'Tên miền đăng ký tại Nhật Bản (.jp) thuộc phân loại Công ty thương mại (.co).';
    } else if (domainInput.endsWith('.ac.jp')) {
      return 'Tên miền đăng ký tại Nhật Bản (.jp) thuộc phân loại Trường học/Học viện (.ac).';
    } else if (domainInput.endsWith('.com')) {
      return 'Tên miền quốc tế cấp cao (.com), đại diện cho các tổ chức thương mại toàn cầu, đăng ký quản lý chủ yếu tại Mỹ (không có hậu tố quốc gia).';
    }
    return 'Tên miền được cấu thành từ tập hợp các ký tự chữ cái (アルファベット) dễ nhớ thay thế cho dãy số IP phức tạp.';
  }, [domainInput]);

  const handleResolveDNS = () => {
    setIsResolving(true);
    setTimeout(() => {
      setIsResolving(false);
      // generate dummy IP
      const randomIp = Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
      setIpResolved(randomIp);
    }, 1200);
  };

  // Simulator 3: HTML / XML Live Render
  const [htmlCode, setHtmlCode] = useState<string>(
    `普通の文字\\n<font size="6">大きい文字</font>\\n<center>中心に配置</center>\\n<b>太文字</b> <i>斜体字</i>`
  );
  

  // IT Passport Question
  const [selectedItOption, setSelectedItOption] = useState<string | null>(null);
  const [showItExplanation, setShowItExplanation] = useState<boolean>(false);

  // Vocabulary lists
  const mini1Vocab = useMemo(() => [
    { term: '転送', reading: 'てんそう', meaning: 'chuyển tiếp dữ liệu' },
    { term: '区切る', reading: 'くぎる', meaning: 'phân chia, ngăn cách bằng ký tự' },
    { term: '隣接装置', reading: 'りんせつそうち', meaning: 'thiết bị lân cận kết nối trực tiếp' },
    { term: '種別', reading: 'しゅべつ', meaning: 'chủng loại, phân loại' },
    { term: 'プロトコル', reading: 'protocol', meaning: 'giao thức truyền tải dữ liệu' },
    { term: '取得', reading: 'しゅとく', meaning: 'giành được quyền sở hữu, đăng ký' },
    { term: 'プロバイダ', reading: 'provider', meaning: 'nhà cung cấp dịch vụ mạng (ISP)' },
    { term: '損なう', reading: 'そこなう', meaning: 'làm hư hại, làm tổn hại' },
    { term: 'プロキシサーバ', reading: 'proxy server', meaning: 'máy chủ ủy quyền/trung gian' }
  ], []);

  const mini2Vocab = useMemo(() => [
    { term: '記述する', reading: 'きじゅつする', meaning: 'mô tả, lập trình ghi lại thông tin' },
    { term: '囲む', reading: 'かこむ', meaning: 'bao quanh, kẹp giữa các thẻ' },
    { term: '標識', reading: 'ひょうしき', meaning: 'dấu hiệu, cột mốc (như thẻ tag)' },
    { term: '太字', reading: 'ふとじ', meaning: 'kiểu chữ in đậm (bold)' },
    { term: '斜体', reading: 'しゃたい', meaning: 'kiểu chữ in nghiêng (italic)' },
    { term: '拡張', reading: 'かくちょう', meaning: 'mở rộng thêm tính năng' },
    { term: '抽出する', reading: 'ちゅうしゅつする', meaning: 'truy xuất, trích xuất dữ liệu cụ thể' },
    { term: 'あらかじめ', reading: 'あらかじめ', meaning: 'chuẩn bị sẵn từ trước' },
    { term: '見出し', reading: 'みだし', meaning: 'tiêu đề đề mục lớn' }
  ], []);

  const [mini1Revealed, setMini1Revealed] = useState<number[]>([]);
  const [mini2Revealed, setMini2Revealed] = useState<number[]>([]);

  const [mini1Trans1, setMini1Trans1] = useState('');
  const [mini1ShowAnswer1, setMini1ShowAnswer1] = useState(false);
  const [mini1Trans2, setMini1Trans2] = useState('');
  const [mini1ShowAnswer2, setMini1ShowAnswer2] = useState(false);

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
            LÝ THUYẾT BÀI 6
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Công nghệ Internet (インターネット技術)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('6.1')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '6.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          6.1 Giao thức & Mô hình OSI
        </button>
        <button
          onClick={() => setActiveTab('6.2')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '6.2' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Wifi size={16} />
          6.2 Địa chỉ IP & DNS
        </button>
        <button
          onClick={() => setActiveTab('6.4')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '6.4' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Monitor size={16} />
          6.4 & 6.5 HTML & XML Editor
        </button>
        <button
          onClick={() => setActiveTab('minitest')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'minitest' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Languages size={16} />
          Bài tập & Minitests
        </button>
      </div>

      {/* Tab Contents */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm animate-fadeIn">
        
        {/* Tab 1: Giao thức & OSI */}
        {activeTab === '6.1' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">6.1</span> プロトコル (Giao thức mạng) & Mô hình OSI
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Khi kết nối máy tính và các thiết bị ngoại vi (<strong>周辺機器 - Syuuhenkiki</strong>) do nhiều nhà sản xuất trên toàn cầu thiết kế, dữ liệu cần có tiêu chuẩn chung để truyền nhận chính xác.
                  </p>
                  <p>
                    <strong>プロトコル (Protocol - Giao thức)</strong> là tập hợp các quy tắc định dạng và truyền dẫn dữ liệu mà máy tính bắt buộc phải tuân theo.
                  </p>
                  <p>
                    Tổ chức tiêu chuẩn quốc tế <strong>OSI (Open System Interconnection)</strong> đã chuẩn hóa cấu trúc truyền thông thành mô hình 7 lớp (<strong>OSIの7層モデル</strong>). Mỗi lớp đảm nhận nhiệm vụ chuyên biệt từ phần cứng vật lý đến phần mềm ứng dụng.
                  </p>
                </div>

                {/* OSI Layer visual list */}
                <div className="lg:col-span-6 flex flex-col gap-1.5">
                  <h4 className="font-bold text-slate-800 text-xs md:text-sm mb-2">Tháp mô hình 7 lớp OSI (Nhấp vào các tầng để xem chi tiết)</h4>
                  {osiLayers.map((l) => (
                    <div 
                      key={l.num}
                      onClick={() => setSelectedLayer(l.num)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        selectedLayer === l.num 
                          ? 'border-indigo-600 bg-indigo-50/50 shadow-sm scale-[1.01]' 
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className={selectedLayer === l.num ? 'text-indigo-700' : 'text-slate-700'}>
                          Layer {l.num}: {l.name}
                        </span>
                        <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-mono">
                          {l.protocol}
                        </span>
                      </div>
                      {selectedLayer === l.num && (
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed pt-1.5 border-t border-indigo-100/50">
                          {l.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Địa chỉ IP & DNS */}
        {activeTab === '6.2' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                6.2 IPアドレスとドメイン名 (Địa chỉ IP & Tên miền)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Để gửi mail hoặc truy cập web chính xác, hệ thống cần biết chính xác địa chỉ đích đến của máy tính.
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm flex flex-col gap-2">
                    <li><strong>IPアドレス (IP Address)</strong>: Đóng vai trò là số nhà/địa chỉ của máy tính. Định dạng IPv4 gồm 4 nhóm số phân cách bởi dấu chấm (<strong>ピリオド</strong>), ví dụ: <code>133.43.251.1</code>. Mạng LAN sử dụng <strong>サブネットマスク (Subnet mask)</strong> để chia nhỏ lớp mạng nhằm mở rộng cục bộ lượng địa chỉ hữu dụng.</li>
                    <li><strong>Thiếu hụt địa chỉ</strong>: Do số lượng thiết bị thông minh tăng vọt, địa chỉ IPv4 đang cạn kiệt. Giải pháp là nâng cấp lên <strong>IPv6</strong> mở rộng độ dài địa chỉ từ 32 bit nhị phân (<strong>2進数で32桁</strong>) lên thành 128 bit nhị phân (<strong>128桁</strong>).</li>
                    <li><strong>ドメイン名 (Domain Name)</strong>: Do địa chỉ IP rất khó nhớ và dễ gõ sai (<strong>覚えにくく，入力間違いも多い</strong>), người ta thay bằng chuỗi ký tự bảng chữ cái dễ hiểu như <code>daigaku.ac.jp</code>.</li>
                    <li><strong>DNSサーバ (Domain Name System Server)</strong>: Đảm nhận chuyển đổi qua lại giữa Tên miền và Địa chỉ IP tương ứng.</li>
                  </ul>
                </div>

                {/* DNS resolving simulator */}
                <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Trình mô phỏng phân giải tên miền DNS</h4>
                  
                  <div className="flex gap-2 bg-white border border-slate-200 p-2 rounded-xl">
                    <input 
                      type="text" 
                      value={domainInput} 
                      onChange={(e) => setDomainInput(e.target.value)}
                      className="flex-1 px-3 py-1.5 focus:outline-none bg-slate-50 rounded border border-slate-100 text-xs font-mono font-bold"
                    />
                    <button
                      onClick={handleResolveDNS}
                      disabled={isResolving}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 rounded transition-all cursor-pointer text-xs"
                    >
                      {isResolving ? 'Đang truy vấn...' : 'Phân giải'}
                    </button>
                  </div>

                  <div className="bg-white border rounded-xl p-4 flex flex-col gap-2.5">
                    <div className="flex justify-between border-b pb-1.5 text-slate-500">
                      <span>Loại IP hiển thị:</span>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setIpVersion('v4')}
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${ipVersion === 'v4' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                        >
                          IPv4 (32-bit)
                        </button>
                        <button 
                          onClick={() => setIpVersion('v6')}
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${ipVersion === 'v6' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                        >
                          IPv6 (128-bit)
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-400">Kết quả phân giải IP:</span>
                      <span className="font-mono font-black text-indigo-700">
                        {ipVersion === 'v4' 
                          ? ipResolved 
                          : '2001:0db8:85a3:0000:0000:8a2e:0370:7334'}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-indigo-50/50 border border-indigo-100 rounded-lg text-indigo-800 leading-relaxed text-[11px]">
                    💡 <strong>{domainInput}</strong>: {domainExplanation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: HTML / XML Editor */}
        {activeTab === '6.4' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                6.4 HTML & 6.5 XML (Ngôn ngữ mô tả dữ liệu bằng Tag)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>HTML (Hyper Text Markup Language)</strong>: Ngôn ngữ nhân tạo (<strong>人工言語</strong>) mô tả định dạng trang web thông qua các thẻ nhãn <strong>タグ (Tags)</strong> đặt trong ký hiệu <code>&lt;</code> và <code>&gt;</code>.
                  </p>
                  <p>
                    <strong>XML (eXtensible Markup Language)</strong>: Cấu trúc mở rộng cho phép nhà phát triển tự thiết lập định nghĩa thẻ tag tùy ý để làm cơ sở dữ liệu có cấu trúc.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 leading-relaxed">
                    <strong>Tầm quan trọng của CSS (スタイルシート)</strong>: Tách biệt nội dung tài liệu và bố cục thiết kế. Từ một mã nguồn duy nhất, CSS hỗ trợ xuất dữ liệu ra nhiều kết quả mẫu đa dạng (<strong>多様な出力結果</strong>) như danh sách, bảng dữ liệu, nhãn dán gửi thư...
                  </div>
                </div>

                {/* HTML Interactive Editor */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Trình biên tập thử nghiệm HTML tag trực quan</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <span className="font-bold text-slate-500">Mã HTML đầu vào:</span>
                      <textarea
                        value={htmlCode}
                        onChange={(e) => setHtmlCode(e.target.value)}
                        className="w-full h-32 p-3 font-mono text-[11px] bg-slate-900 text-emerald-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 border-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-bold text-slate-500">Xem trước kết xuất:</span>
                      <div className="w-full h-32 p-3 bg-white border border-slate-200 rounded-xl overflow-y-auto">
                        {/* Dummy render simulation for standard requested tags */}
                        {htmlCode.includes('大きい文字') && <div className="text-xl">大きい文字</div>}
                        {htmlCode.includes('中心に配置') && <div className="text-center">中心に配置</div>}
                        <div className="mt-1">
                          {htmlCode.includes('太文字') && <strong>太文字 </strong>}
                          {htmlCode.includes('斜体字') && <em>斜体字</em>}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-400 italic">
                    💡 Hãy thử chỉnh sửa các chữ trong khung code phía trái để thay đổi giao diện kết quả hiển thị!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Minitest */}
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
                  インターネットでは，通信プロトコルとして使用されてきたIPv4以外にもIPv6が使用され始めている．IPv6の説明のうち，適切なものはどれか． (Trong mạng Internet, giao thức IPv6 đang bắt đầu được sử dụng song hành cùng IPv4 truyền thống. Đâu là giải thích chuẩn xác nhất về IPv6?)
                </p>
                <div className="flex flex-col gap-2 mt-4 text-xs md:text-sm">
                  {[
                    { key: 'l6-ans-a', text: '(ア) Không thể hoạt động chung trên cùng hệ thống với IPv4 nên bắt buộc phải thiết lập một mạng độc lập riêng biệt.' },
                    { key: 'l6-ans-b', text: '(イ) Độ dài bit địa chỉ gấp 4 lần so với IPv4, giúp giải quyết triệt để mối lo ngại cạn kiệt dải địa chỉ IP.' },
                    { key: 'l6-ans-c', text: '(ウ) Địa chỉ IP của IPv6 không biểu thị bằng số, mà được xây dựng từ tập hợp chữ cái của Tên máy chủ (Host) và Tên miền (Domain).' },
                    { key: 'l6-ans-d', text: '(エ) Không tích hợp sẵn tính năng mã hóa dữ liệu đầu cuối, việc mã hóa buộc phải được xử lý ở lớp cao hơn.' }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setSelectedItOption(opt.key);
                        setShowItExplanation(true);
                      }}
                      className={`w-full text-left py-3 px-4 rounded-lg border-2 transition-all cursor-pointer ${
                        selectedItOption === opt.key 
                          ? opt.key === 'l6-ans-b' 
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
                    <strong>Giải thích chi tiết:</strong> Đáp án đúng là <strong>(イ)</strong>. Địa chỉ IPv6 có chiều dài là <strong>128 bit</strong>, gấp 4 lần so với IPv4 (<strong>32 bit</strong>), qua đó cung cấp dải địa chỉ khổng lồ xóa bỏ tình trạng thiếu hụt IP trên thế giới.
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
                  <span>Kiểm tra Từ vựng 6.1 & 6.2</span>
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
                  <span>Kiểm tra Từ vựng 6.4 & 6.5</span>
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
                <p className="italic text-slate-600 text-[13px] leading-relaxed">
                  「インターネットには世界中のコンピュータが接続されるので，メールを送ったりホームページにアクセスしたりする先のコンピュータを正しく指定しなければなりません．」
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
                      <strong>Đáp án mẫu:</strong> Do mạng Internet kết nối các máy tính trên khắp thế giới với nhau, nên chúng ta cần chỉ định một cách chính xác máy tính nhận khi gửi email hay truy cập trang chủ.
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex flex-col gap-3 text-xs md:text-sm">
                <p className="font-bold text-slate-700">Câu 2 (Dịch Việt):</p>
                <p className="italic text-slate-600 text-[13px] leading-relaxed">
                  「HTML のようにタグを使って文書を記述する方法を拡張したものが XML です．XML とは，eXtensible Markup Language の略で，HTML と違ってユーザが自由にタグを定義して利用することのできる記述言語です．」
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
                      <strong>Đáp án mẫu:</strong> XML là chuẩn công nghệ mở rộng từ phương thức mô tả tài liệu sử dụng thẻ tag như HTML. XML viết tắt của eXtensible Markup Language, điểm khác biệt lớn với HTML là nó cho phép lập trình viên tự do định nghĩa các thẻ tag để sử dụng theo nhu cầu.
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
