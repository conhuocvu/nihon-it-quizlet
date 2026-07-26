import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, CheckCircle2, Languages, Smartphone, HelpCircle, Radio, Layers
} from 'lucide-react';

interface Lesson3TheoryProps {
  onClose: () => void;
}

export const Lesson3Theory: React.FC<Lesson3TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'3.1' | '3.3' | '3.4' | 'minitest'>('3.1');

  // Simulator 1: Mobile Generations
  const [selectedGen, setSelectedGen] = useState<string>('3.5G');
  const generations = [
    { 
      key: '1G', 
      title: '第1世代携帯電話 (1G)', 
      tech: 'Analog communication (アナログ通信)',
      desc: 'Sử dụng sóng âm trực tiếp biến điệu thành sóng vô tuyến. Hiệu suất sử dụng sóng vô tuyến kém (電波の利用効率が良くない), chất lượng cuộc gọi thấp, dễ bị cản trở bởi nhà cao tầng làm nhiễu sóng (電波干渉). Thêm vào đó, có nguy cơ rất cao bị nghe lén (盗聴). Thiết bị đại diện đầu tiên là máy điện thoại đeo vai (ショルダーフォン) ra mắt bởi NTT năm 1985.',
      features: ['アナログ通信 (Sóng Analog)', '電波の利用効率 (Hiệu suất thấp)', '電波干渉 (Nhiễu sóng do vật cản)', '盗聴 (Nguy cơ nghe lén cao)'],
      strength: '5%'
    },
    { 
      key: '2G', 
      title: '第2世代携帯電話 (2G - 1992~)', 
      tech: 'Digital communication (デジタル通信)',
      desc: 'Chuyển sang truyền thông kỹ thuật số giúp nâng cao chất lượng cuộc gọi và bổ sung tính năng giữ bí mật cuộc gọi (秘話性能). Ra mắt tin nhắn văn bản, cổng thông tin i-mode và trình duyệt trên dòng máy Docomo mova. Tuy nhiên, tốc độ truyền dữ liệu rất chậm khi nhu cầu nội dung số tăng lên.',
      features: ['デジタル通信 (Sóng Digital)', '秘話性能 (Tính năng bảo mật cuộc gọi)', 'コンテンツ (Nội dung số như i-mode)', 'mova (Dòng máy mova tiêu biểu)'],
      strength: '25%'
    },
    { 
      key: '3G', 
      title: '第3世代携帯電話 (3G - 2001~)', 
      tech: 'High-speed Digital (FOMA...)',
      desc: 'Tốc độ truyền dữ liệu (データ通信) được nâng cấp đáng kể, tiêu biểu là dòng máy FOMA của NTT Docomo. Dù vậy, tốc độ này vẫn chưa đủ để trải nghiệm mượt mà các nội dung trực tuyến trong môi trường băng thông rộng (ブロードバンド環境) thông thường.',
      features: ['データ通信の高速化 (Tốc độ cao hơn)', 'FOMA (Dòng máy FOMA tiêu biểu)', 'ブロードバンド環境 (Băng thông rộng sơ khai)', 'Tải ảnh & Web cơ bản'],
      strength: '50%'
    },
    { 
      key: '3.5G', 
      title: '第3.5世代携帯電話 (3.5G - 2006~)', 
      tech: 'High-speed Apps Era',
      desc: 'Phiên bản cải tiến mạng di động trước khi chính thức lên 4G. Tốc độ vượt trội hơn 3G giúp người dùng chạy các ứng dụng đa dạng mà không lo trễ mạng (ストレスなく利用), góp phần to lớn vào sự phát triển của ngành công nghiệp nội dung số (コンテンツの発達に寄与). Các công nghệ như LTE, Mobile WiMAX ra đời sau đó (2010~) được xếp vào nhóm 第3.9世代移動通信システム.',
      features: ['ストレスなく利用 (Sử dụng không trễ)', 'コンテンツの発達に寄与 (Phát triển nội dung)', '第3.9世代移動通信システム (Hệ 3.9G như LTE, WiMAX)', 'Hỗ trợ đa ứng dụng di động'],
      strength: '80%'
    },
    { 
      key: '4G', 
      title: '第4世代携帯情報端末 (4G)', 
      tech: 'Broadband Mobile Terminal',
      desc: 'Thế hệ thiết bị thông tin di động băng thông rộng (ブロードバンド環境での利用). Định hình không chỉ là điện thoại thông thường, mà là trạm thông tin di động tích hợp truyền dữ liệu tốc độ cao, có khả năng linh hoạt chuyển đổi phương thức kết nối tùy thuộc vào môi trường truyền dẫn (臨機応変に通信手段を変更).',
      features: ['ブロードバンド環境 (Băng thông rộng)', '各種アプリケーション (Đa ứng dụng tích hợp)', '臨機応変に通信手段を変更 (Linh hoạt đổi kết nối)', 'Tương lai kết nối di động'],
      strength: '100%'
    }
  ];

  const currentGenData = useMemo(() => {
    return generations.find(g => g.key === selectedGen) || generations[3];
  }, [selectedGen]);

  // Simulator 2: Display Tech (LCD vs OLED Light Transmission)
  const [displayTech, setDisplayTech] = useState<'lcd' | 'oled'>('lcd');
  const [liquidCrystalAngle, setLiquidCrystalAngle] = useState<number>(90); // angle of LC rotation

  // Simulator 3: Touch Panel Sandbox
  const [touchTypeMode, setTouchTypeMode] = useState<'resistive' | 'capacitive'>('capacitive');
  const [touchLogs, setTouchLogs] = useState<string[]>([]);
  const handleTouchZone = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    
    if (touchTypeMode === 'resistive') {
      setTouchLogs(prev => [`[抵抗膜方式 - Điện trở] Đo điện trở ngang/dọc khi 2 lớp màng chạm nhau vật lý tại (${x}px, ${y}px) ➔ Đã nhận dạng!`, ...prev.slice(0, 4)]);
    } else {
      setTouchLogs(prev => [`[静電容量方式 - Điện dung] Đo biến đổi điện tích (電荷) giữa ngón tay và lưới cảm biến tại (${x}px, ${y}px) ➔ Hỗ trợ đa chạm (マルチタッチ)!`, ...prev.slice(0, 4)]);
    }
  };

  // Keyboard symbols / Vocab Match State
  const itExamAnswer = 'l3-ans-d';
  const [selectedItOption, setSelectedItOption] = useState<string | null>(null);
  const [showItExplanation, setShowItExplanation] = useState<boolean>(false);

  // Mini-test 1 Vocab
  const mini1Vocab = useMemo(() => [
    { term: '盗聴', reading: 'とうちょう', meaning: 'nghe trộm, nghe lén điện thoại' },
    { term: 'ブロードバンド', reading: 'broadband', meaning: 'băng thông rộng' },
    { term: '情報端末', reading: 'じょうほうたんまつ', meaning: 'thiết bị cuối thông tin' },
    { term: 'ノイズ', reading: 'noise', meaning: 'nhiễu sóng, tiếng ồn kỹ thuật số' }
  ], []);
  const [mini1Revealed, setMini1Revealed] = useState<number[]>([]);
  const [mini1Trans1, setMini1Trans1] = useState('');
  const [mini1ShowAnswer1, setMini1ShowAnswer1] = useState(false);
  const [mini1Trans2, setMini1Trans2] = useState('');
  const [mini1ShowAnswer2, setMini1ShowAnswer2] = useState(false);

  // Mini-test 2 Vocab
  const mini2Vocab = useMemo(() => [
    { term: '遮断', reading: 'しゃだん', meaning: 'ngăn chặn, cản ánh sáng/dòng điện' },
    { term: '画素', reading: 'がそ', meaning: 'điểm ảnh (pixel)' },
    { term: '階調', reading: 'かいちょう', meaning: 'thang màu sắc, độ tương phản' },
    { term: '偏光フィルタ', reading: '偏光板 - へんこうばん', meaning: 'kính lọc phân cực, tấm lọc phân cực' },
    { term: '増幅器', reading: 'ぞうふくき', meaning: 'bộ khuếch đại (amplifier)' },
    { term: 'ハイビジョン', reading: 'Hi-Vision', meaning: 'phát sóng truyền hình độ phân giải cao' }
  ], []);
  const [mini2Revealed, setMini2Revealed] = useState<number[]>([]);

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
            LÝ THUYẾT BÀI 3
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Hiện trạng Thiết bị IT (IT機器の現状)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('3.1')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '3.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Smartphone size={16} />
          3.1 - 3.2 Thế hệ di động, SIM & Kết nối
        </button>
        <button
          onClick={() => setActiveTab('3.3')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '3.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Radio size={16} />
          3.3ワンセグ truyền hình số
        </button>
        <button
          onClick={() => setActiveTab('3.4')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '3.4' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          3.4 Tấm nền & Cảm ứng
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
        {/* Tab 1: Thế hệ di động & SIM */}
        {activeTab === '3.1' && (
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">3.1</span> 携帯電話の分類 (Phân loại thế hệ mạng di động)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Timeline controls */}
                <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                  {generations.map(g => (
                    <button
                      key={g.key}
                      onClick={() => setSelectedGen(g.key)}
                      className={`flex-1 lg:flex-none text-left py-3.5 px-4 rounded-xl border-2 transition-all cursor-pointer whitespace-nowrap lg:whitespace-normal font-bold ${
                        selectedGen === g.key
                          ? 'border-indigo-600 bg-indigo-50/50 text-indigo-800 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      <div className="text-xs text-slate-400 font-extrabold">{g.key}</div>
                      <div className="text-sm">{g.title.split(' ')[0]}</div>
                    </button>
                  ))}
                </div>

                {/* Generator Simulator View */}
                <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                    <div>
                      <h4 className="font-extrabold text-slate-800 text-base">{currentGenData.title}</h4>
                      <span className="text-xs text-indigo-600 font-mono font-semibold">{currentGenData.tech}</span>
                    </div>
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-black">
                      Độ ổn định & Băng thông: {currentGenData.strength}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans">
                    {currentGenData.desc}
                  </p>

                  <div className="mt-2">
                    <h5 className="text-xs font-black text-slate-700 mb-2 uppercase tracking-wider">Từ khóa Nhật liên quan:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {currentGenData.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-600 font-medium">
                          <CheckCircle2 size={14} className="text-indigo-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">3.2</span> 通信キャリア & SIMカード (Hợp đồng thuê bao & Kết nối phụ)
              </h3>
              <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                <p>
                  Khi sử dụng điện thoại, người dùng ký hợp đồng (<strong>契約 - Keiyaku</strong>) với nhà mạng (<strong>通信キャリア - Carrier</strong>) như NTT Docomo, au, SoftBank. Điện thoại được quản lý qua thẻ **IC** gọi là <strong>SIMカード</strong> lưu trữ mã số thuê bao <strong>契約者番号 (Subscriber Number)</strong>.
                </p>
                <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl text-xs md:text-sm text-indigo-900 leading-relaxed">
                  <strong>通信方式 (Phương thức truyền thông):</strong> Docomo và SoftBank dùng chung chuẩn phương thức truyền tải nên có thể chuyển đổi SIM. Ngược lại, **au** sử dụng một <strong>独自の通信方式 (phương thức truyền dẫn độc lập tự xây dựng)</strong> nên không tương thích hay có sự liên thông (互換性がない).
                </div>
                <p className="mt-2">
                  Các phương thức trao đổi dữ liệu khác tích hợp trên thiết bị di động:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                    <strong className="text-slate-800 text-xs">赤外線通信 (Truyền hồng ngoại)</strong>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Sử dụng để thực hiện chức năng danh thiếp điện tử (<strong>名刺機能 - Meishi kinou</strong>) giúp điện thoại trao đổi thông tin liên lạc nhanh chóng cự ly gần.</p>
                  </div>
                  <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                    <strong className="text-slate-800 text-xs">Bluetooth (Truyền sóng ngắn)</strong>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Kết nối nhanh với tai nghe kèm mic (<strong>ヘッドセット - Headset</strong>) hoặc phục vụ đàm thoại rảnh tay khi lái xe.</p>
                  </div>
                  <div className="p-4 border border-slate-200 rounded-xl bg-slate-50">
                    <strong className="text-slate-800 text-xs">Wi-Fi通信 (Vô tuyến LAN)</strong>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Truy cập Internet băng rộng tại các điểm truy cập công cộng (<strong>ホットスポット - Hotspots</strong>) hỗ trợ các ứng dụng gọi thoại miễn phí.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Phát sóng truyền hình kĩ thuật số */}
        {activeTab === '3.3' && (
          <div className="flex flex-col gap-6">
            <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-indigo-600">3.3</span> 地上デジタル放送 & ワンセグ (Truyền hình số mặt đất)
            </h3>
            <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
              <p>
                Dịch vụ truyền hình được xem nhiều nhất trên điện thoại Nhật là <strong>ワンセグ放送 (One-seg Broadcast)</strong>. Nó sử dụng cơ chế phát sóng song hành cùng nội dung <strong>(サイマル放送 - Simulcast)</strong> của truyền hình số mặt đất <strong>(地上デジタル放送)</strong> để chiếu trên màn hình nhỏ di động.
              </p>
              <p>
                Băng tần vô tuyến hay điện sóng <strong>(電波 - Dempa)</strong> là một dạng tài nguyên có hạn cực kỳ quý giá <strong>(限られた資源 - Tài nguyên giới hạn)</strong>, được nhà nước phân bổ và quản lý nghiêm ngặt nhằm tránh can nhiễu với radar hàng không, hàng hải, vô tuyến cứu hộ (防災無線), phòng cháy chữa cháy (消防無線), cảnh sát (警察無線).
              </p>
              
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 flex flex-col gap-4 my-2">
                <h4 className="font-bold text-slate-800 text-sm">Cơ chế quản lý phân đoạn (セグメント - Segment):</h4>
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs text-slate-500 font-sans">
                    <span>Mỗi kênh truyền hình kỹ thuật số mặt đất được phân chia làm: <strong>13 セグメント (13 Phân đoạn)</strong></span>
                  </div>
                  {/* Visual segment block bar */}
                  <div className="w-full h-12 bg-slate-200 rounded-lg overflow-hidden flex p-1 gap-1">
                    {Array.from({ length: 13 }).map((_, idx) => {
                      const isOneSeg = idx === 12;
                      return (
                        <div 
                          key={idx}
                          className={`flex-1 rounded h-full flex items-center justify-center text-[10px] font-black ${
                            isOneSeg 
                              ? 'bg-rose-500 text-white animate-pulse' 
                              : 'bg-indigo-600 text-white'
                          }`}
                          title={isOneSeg ? 'Phân đoạn di động (ワンセグ)' : `Phân đoạn ${idx+1} của HDTV`}
                        >
                          {isOneSeg ? '1' : idx + 1}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs mt-2 font-sans font-bold">
                    <span className="flex items-center gap-1.5 text-indigo-700">
                      <span className="w-3.5 h-3.5 bg-indigo-600 rounded"></span>
                      12 セグメント: Dành cho truyền hình phân giải cao <strong>ハイビジョン放送 (HDTV)</strong>
                    </span>
                    <span className="flex items-center gap-1.5 text-rose-700">
                      <span className="w-3.5 h-3.5 bg-rose-500 rounded"></span>
                      1 セグメント: Dự phòng riêng cho thiết bị di động <strong>移動体端末 (Mobile Terminal)</strong>
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-200 pt-3">
                  Trong khi truyền hình độ nét cao <strong>ハイビジョン放送</strong> cần lượng thông tin khổng lồ chiếm tới 12 phân đoạn (thay vì 4 phân đoạn như truyền hình analog cũ <strong>アナログ放送</strong>), One-seg chỉ tiêu tốn đúng 1 phân đoạn để phát hình ảnh mượt mà kể cả khi thiết bị đang di chuyển với vận tốc lớn trên phương tiện giao thông công cộng.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Phần cứng: Màn hình & Cảm biến */}
        {activeTab === '3.4' && (
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">3.4</span> 出力・入力用ハードウェア (Cơ cấu linh kiện Hiển thị & Cảm biến)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                  <p>
                    <strong>Màn hình tinh thể lỏng (液晶ディスプレイ - LCD)</strong>: Điều khiển độ sáng bằng cách cho ánh sáng nền (<strong>バックライト - Backlight</strong>) đi xuyên qua (<strong>透過 - Touka</strong>) hoặc chặn đứng (<strong>遮断 - Shadan</strong>). 
                  </p>
                  <p>
                    Quá trình này sử dụng 2 tấm kính lọc phân cực (<strong>偏光板 - Henkouban</strong>) chéo góc 90 độ. Khi có điện áp, các phân tử tinh thể lỏng (<strong>液晶分子 - Liquid crystal molecules</strong>) tự xoay hướng để điều tiết lượng ánh sáng đi qua từng điểm ảnh (<strong>画素 - Gaso</strong>). Màn LCD tiêu hao rất ít điện năng và tuổi thọ cao.
                  </p>
                  
                  <div className="bg-indigo-50/20 border border-indigo-100 rounded-xl p-4 text-xs flex flex-col gap-1.5">
                    <strong>Tấm nền thay thế tân tiến:</strong>
                    <ul className="list-disc pl-5 text-slate-500 flex flex-col gap-1">
                      <li><strong>有機ELディスプレイ (OLED)</strong>: Tấm nền tự phát quang (<strong>自発光型 - Ji-hakkou gata</strong>) nhờ các phần tử hữu cơ phát sáng (<strong>発光体 - Hakkoutai</strong>) khi có điện chạy qua. Cực sáng, mỏng nhẹ, tiết kiệm điện nhưng tuổi thọ (寿命) còn hạn chế.</li>
                      <li><strong>SED (Surface-conduction Electron-emitter Display)</strong>: Gom các ống phóng tia điện tử siêu nhỏ tương tự như tivi đèn hình cũ (<strong>ブラウン管</strong>) cho từng pixel. Tiết kiệm pin tối đa, bền bỉ và biểu thị vùng tối rất tốt.</li>
                    </ul>
                  </div>
                </div>

                {/* Display Light Transmission Simulator */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm flex justify-between items-center">
                    <span>Cơ cấu lọc sáng: {displayTech === 'lcd' ? '液晶 (LCD)' : '有機EL (OLED)'}</span>
                  </h4>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setDisplayTech('lcd')}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                        displayTech === 'lcd' 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      Màn LCD (透過・遮断)
                    </button>
                    <button
                      onClick={() => setDisplayTech('oled')}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                        displayTech === 'oled' 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      Màn OLED (自発光型)
                    </button>
                  </div>

                  {/* Visual Light transmission path */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-4 items-center">
                    {displayTech === 'lcd' ? (
                      <div className="w-full flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="font-bold">Hướng xoay 液晶分子: {liquidCrystalAngle}°</span>
                          <input 
                            type="range" min="0" max="90" step="15" value={liquidCrystalAngle} 
                            onChange={(e) => setLiquidCrystalAngle(Number(e.target.value))}
                            className="w-1/2 accent-indigo-600"
                          />
                        </div>
                        {/* Simulation representation */}
                        <div className="flex justify-between items-center border border-slate-100 p-3 rounded-lg bg-slate-50/50">
                          <div className="flex flex-col items-center">
                            <span className="bg-amber-400 w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-white">💡</span>
                            <span className="text-[9px] text-slate-400 mt-1">バックライト</span>
                          </div>
                          <span className="text-slate-300">➔</span>
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 border-2 border-slate-400 flex items-center justify-center font-bold text-xs bg-white text-slate-700">|</div>
                            <span className="text-[9px] text-slate-400 mt-1">偏光板 1</span>
                          </div>
                          <span className="text-slate-300">➔</span>
                          <div className="flex flex-col items-center">
                            <div style={{ transform: `rotate(${liquidCrystalAngle}deg)` }} className="w-8 h-8 rounded border-2 border-indigo-500 bg-indigo-50 flex items-center justify-center font-bold text-indigo-700 transition-all duration-300">
                              ⇄
                            </div>
                            <span className="text-[9px] text-slate-400 mt-1">液晶分子</span>
                          </div>
                          <span className="text-slate-300">➔</span>
                          <div className="flex flex-col items-center">
                            <div className="w-8 h-8 border-2 border-slate-400 flex items-center justify-center font-bold text-xs bg-white text-slate-700">-</div>
                            <span className="text-[9px] text-slate-400 mt-1">偏光板 2</span>
                          </div>
                          <span className="text-slate-300">➔</span>
                          <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                              liquidCrystalAngle === 90 ? 'bg-amber-100 text-amber-700' : 'bg-slate-800 text-slate-500'
                            }`}>
                              {liquidCrystalAngle === 90 ? '透過' : '遮断'}
                            </div>
                            <span className="text-[9px] text-slate-400 mt-1">Gaso (画素)</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex justify-between items-center border border-slate-100 p-3 rounded-lg bg-slate-50/50">
                          <div className="flex-1 flex flex-col items-center gap-1">
                            <span className="bg-rose-500 w-5 h-5 rounded-full text-white flex items-center justify-center text-[10px] font-bold">R</span>
                            <span className="text-[9px] text-slate-400">有機発光体 (R)</span>
                          </div>
                          <div className="flex-1 flex flex-col items-center gap-1">
                            <span className="bg-emerald-500 w-5 h-5 rounded-full text-white flex items-center justify-center text-[10px] font-bold">G</span>
                            <span className="text-[9px] text-slate-400">有機発光体 (G)</span>
                          </div>
                          <div className="flex-1 flex flex-col items-center gap-1">
                            <span className="bg-indigo-600 w-5 h-5 rounded-full text-white flex items-center justify-center text-[10px] font-bold">B</span>
                            <span className="text-[9px] text-slate-400">有機発光体 (B)</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Input hardware: Touch panel & CMOS sensor */}
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                Cảm biến cảm ứng (タッチパネルのセンサ) & CMOS
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start border-t border-slate-100 pt-6">
                <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                  <p>
                    Hai phương thức của cảm biến cảm ứng <strong>タッチパネルのセンサ</strong> tiêu biểu:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm flex flex-col gap-2.5">
                    <li><strong>抵抗膜方式 (Phương thức màng điện trở)</strong>: Đo đạc sự biến thiên giá trị điện trở khi người dùng dùng lực ấn nhẹ làm 2 màng điện dẫn tiếp xúc vật lý. Hỗ trợ bất kỳ vật cứng nào (bút thường, móng tay) nhưng độ nhạy kém và không thể đa chạm tốt.</li>
                    <li><strong>静電容量方式 (Phương thức điện dung)</strong>: Đo đạc sự thay đổi điện tích (<strong>電荷 - Denka</strong>) tích tụ giữa ngón tay (có mang tĩnh điện nhẹ) và lưới cảm biến tĩnh điện. Cực kỳ nhạy, hỗ trợ đa điểm tốt (<strong>マルチタッチ</strong>) nhưng không nhận diện khi dùng bút nhựa thông thường.</li>
                  </ul>
                  <p className="mt-2 text-xs md:text-sm">
                    <strong>CMOSセンサ (Cảm biến CMOS)</strong>: Bộ cảm biến thu nhận cường độ ánh sáng tích hợp sẵn bộ khuếch đại (<strong>増幅器 - Zoufukuki</strong>) bên cạnh từng điểm ảnh. Tỏa nhiệt thấp, ít hao pin nên được dùng nhiều trên điện thoại thay thế cho dòng CCD đắt đỏ, tuy nhiên nhiều hạt nhiễu (<strong>ノイズ - Noise</strong>) hơn nên bắt buộc phải có mạch xử lý ảnh phụ (<strong>画像処理回路 - Mạch xử lý hình ảnh</strong>) để lọc sạch nhiễu.
                  </p>
                </div>

                {/* Touch Panel Sandbox */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm flex items-center justify-between">
                    <span>Giả lập Cảm ứng: {touchTypeMode === 'resistive' ? '抵抗膜方式' : '静電容量方式'}</span>
                  </h4>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setTouchTypeMode('resistive');
                        setTouchLogs([]);
                      }}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                        touchTypeMode === 'resistive' 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      Màng điện trở (抵抗膜)
                    </button>
                    <button
                      onClick={() => {
                        setTouchTypeMode('capacitive');
                        setTouchLogs([]);
                      }}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                        touchTypeMode === 'capacitive' 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white text-slate-600 border-slate-200'
                      }`}
                    >
                      Điện dung (静電容量)
                    </button>
                  </div>

                  {/* Sandbox interactive board */}
                  <div 
                    onClick={handleTouchZone}
                    className="h-28 bg-white border border-slate-200 rounded-xl cursor-crosshair flex items-center justify-center text-slate-400 font-bold active:bg-indigo-50/50 transition-colors"
                  >
                    Bấm chuột để thử cơ chế chạm cảm biến!
                  </div>

                  {/* Real-time event log */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-semibold text-slate-700">Dữ liệu từ lưới cảm biến:</span>
                    <div className="bg-slate-900 text-indigo-400 font-mono p-3 rounded-lg text-[10px] min-h-[90px] flex flex-col gap-1 overflow-y-auto">
                      {touchLogs.length > 0 ? (
                        touchLogs.map((log, idx) => <div key={idx}>{log}</div>)
                      ) : (
                        <div className="text-slate-600 italic">Đang chờ sự kiện chạm từ người dùng...</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Software OS segment */}
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                Hệ điều hành di động (オペレーティングシステム - OS)
              </h3>
              <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                <p>
                  Sự thành công của dòng điện thoại quốc tế đã kéo Nhật Bản ra khỏi kỷ nguyên điện thoại cục bộ độc lập (<strong>ガラパゴス携帯 - Điện thoại Galapagos</strong> - dòng máy chỉ tập trung cạnh tranh các chức năng trong nước như phát nhạc <strong>音楽配信</strong>, ví điện tử <strong>電子マネー</strong> hay ứng dụng <strong>iアプリ</strong> độc quyền).
                </p>
                <p>
                  Hệ điều hành <strong>オペレーティングシステム（OS）</strong> là phần mềm cốt lõi chạy nền để quyết định việc phân phối và khả năng tương thích của ứng dụng di động. Các đại diện lớn gồm iOS, Android, Windows Phone và Symbian. Để thành công, nhà sản xuất OS phải thu hút được nhiều nhà phát triển phần mềm tạo ra kho ứng dụng phong phú để mở rộng thị phần (<strong>シェア - Market Share</strong>).
                </p>
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
                Câu hỏi luyện tập Cơ bản (基本情報技術者試験)
              </h4>
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 font-sans">
                <p className="font-bold text-slate-800 mb-3 text-sm md:text-base leading-relaxed">
                  自発光型で，発光ダイオードの一種に分類される表示装置はどれか。 (Thiết bị hiển thị nào sau đây tự phát quang và được phân loại là một dạng đi-ốt phát quang?)
                </p>
                <div className="flex flex-col gap-2 mt-4 text-xs md:text-sm">
                  {[
                    { key: 'l3-ans-a', text: '(ア) CRTディスプレイ (Màn hình CRT)' },
                    { key: 'l3-ans-b', text: '(イ) 液晶ディスプレイ (Màn hình tinh thể lỏng - LCD)' },
                    { key: 'l3-ans-c', text: '(ウ) プラズマディスプレイ (Màn hình Plasma)' },
                    { key: 'l3-ans-d', text: '(エ) 有機ELディスプレイ (Màn hình phát quang hữu cơ - OLED)' }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setSelectedItOption(opt.key);
                        setShowItExplanation(true);
                      }}
                      className={`w-full text-left py-3 px-4 rounded-lg border-2 transition-all ${
                        selectedItOption === opt.key 
                          ? opt.key === itExamAnswer 
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
                    <strong>Giải thích chi tiết:</strong> Đáp án đúng là <strong>(エ)</strong>. Màn hình OLED (有機EL) được chế tạo từ các diode phát quang sinh học (vật liệu hữu cơ tự phát sáng khi có dòng điện chạy qua), hoàn toàn loại bỏ tấm nền chiếu sáng phía sau (backlight) như trên màn hình tinh thể lỏng.
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
                  <span>Kiểm tra Từ vựng 3.1 - 3.2</span>
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
                  <span>Kiểm tra Từ vựng 3.3 - 3.4</span>
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
            <div className="flex flex-col gap-6 font-sans">
              <h4 className="font-bold text-slate-800 text-base md:text-lg">Dịch câu Nhật - Việt</h4>
              
              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex flex-col gap-3 text-xs md:text-sm">
                <p className="font-bold text-slate-700">Câu 1 (Dịch Việt):</p>
                <p className="italic text-slate-600 text-[13px] leading-relaxed">
                  「今後，インターネットによる通信と電話機能との境界が薄れる方向に向かっているため，通話料金や契約方法などのビジネスモデルが大きく変化することが予想されます。」
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
                      <strong>Đáp án mẫu:</strong> Trong tương lai, do xu hướng ranh giới giữa chức năng gọi điện và truyền thông bằng mạng Internet ngày càng mờ nhạt đi, người ta dự báo rằng mô hình kinh doanh bao gồm phương thức hợp đồng hay cước phí cuộc gọi sẽ có sự biến đổi cực kỳ to lớn.
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex flex-col gap-3 text-xs md:text-sm">
                <p className="font-bold text-slate-700">Câu 2 (Dịch Việt):</p>
                <p className="italic text-slate-600 text-[13px] leading-relaxed">
                  「国際標準の携帯電話で利用できるアプリケーションを決定するのがオペレーティングシステム（OS）と呼ばれるソフトウェアで，iOS，Android，Windows Phone，Symbianなどが代表的です．異なる会社の異なる機種であっても，OS が同じであれば，多くのアプリケーションが共通に利用できます．」
                </p>
                <textarea 
                  value={mini1Trans2} 
                  onChange={(e) => setMini1Trans2(e.target.value)}
                  placeholder="Nhập bản dịch tiếng Việt của bạn..."
                  className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none"
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
                      <strong>Đáp án mẫu:</strong> Hệ điều hành (OS) là phần mềm quyết định việc các ứng dụng có thể chạy được trên điện thoại thông minh chuẩn quốc tế hay không, tiêu biểu gồm có iOS, Android, Windows Phone và Symbian. Ngay cả khi các dòng máy đến từ các nhà sản xuất khác nhau, chỉ cần chạy chung một hệ điều hành thì vẫn dùng chung được rất nhiều ứng dụng.
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
