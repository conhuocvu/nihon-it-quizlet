import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, BookOpen, Cpu, HardDrive, Monitor, 
  CheckCircle2, Languages, RefreshCw, Smartphone, Laptop,
  HelpCircle, Shield, Radio, Layers, Zap, Play, ToggleLeft, ToggleRight, Wifi, AlertTriangle
} from 'lucide-react';

interface Lesson5TheoryProps {
  onClose: () => void;
}

export const Lesson5Theory: React.FC<Lesson5TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'5.1' | '5.3' | '5.4' | 'minitest'>('5.1');

  // Simulator 1: Topology Sandbox
  const [selectedTopology, setSelectedTopology] = useState<'bus' | 'star' | 'ring'>('star');
  const [nodeState, setNodeState] = useState<boolean[]>([true, true, true, true]); // node status (true = active, false = broken)
  const [collisionActive, setCollisionActive] = useState<boolean>(false);
  const [activePackets, setActivePackets] = useState<number[]>([]);

  const handleSimulateTopology = () => {
    if (selectedTopology === 'bus') {
      setCollisionActive(true);
      setTimeout(() => setCollisionActive(false), 2000);
    } else if (selectedTopology === 'ring') {
      // Simulate ring packet transfer
      setActivePackets([0]);
      let current = 0;
      const interval = setInterval(() => {
        current = (current + 1) % 4;
        if (!nodeState[current]) {
          clearInterval(interval);
          setActivePackets([]);
          alert('Truyền tin thất bại! Node #' + (current + 1) + ' bị hỏng khiến vòng lặp Ring bị đứt.');
        } else {
          setActivePackets([current]);
        }
      }, 500);
      setTimeout(() => {
        clearInterval(interval);
        setActivePackets([]);
      }, 3500);
    } else {
      // Star topology transfer
      setActivePackets([0, 1, 2, 3]);
      setTimeout(() => setActivePackets([]), 1500);
    }
  };

  const toggleNode = (index: number) => {
    const updated = [...nodeState];
    updated[index] = !updated[index];
    setNodeState(updated);
  };

  // Simulator 2: Centralized vs Distributed
  const [systemType, setSystemType] = useState<'central' | 'dist'>('central');
  const [hostActive, setHostActive] = useState<boolean>(true);
  const [distNodes, setDistNodes] = useState<boolean[]>([true, true, true, true]);

  // Simulator 3: Firewall & DMZ Guard
  const [fwRules, setFwRules] = useState<{ publicAllowed: boolean; internalAllowed: boolean }>({
    publicAllowed: true,
    internalAllowed: false
  });
  const [incomingPacket, setIncomingPacket] = useState<{ source: string; dest: 'dmz' | 'lan'; type: 'normal' | 'attack' } | null>(null);
  const [filterResult, setFilterResult] = useState<string | null>(null);

  const sendPacket = (dest: 'dmz' | 'lan', type: 'normal' | 'attack') => {
    setIncomingPacket({ source: 'Internet (Phía ngoài)', dest, type });
    
    setTimeout(() => {
      if (dest === 'dmz') {
        if (type === 'attack') {
          setFilterResult('Gói tin độc hại đi vào DMZ! (Webserver có nguy cơ bị chiếm quyền nhưng LAN nội bộ vẫn an toàn)');
        } else {
          setFilterResult('Truy cập thành công Web Server ở vùng DMZ.');
        }
      } else {
        // Destination is internal LAN
        if (fwRules.internalAllowed) {
          if (type === 'attack') {
            setFilterResult('Báo động! Mã độc đã lọt qua Firewall do cấu hình mở và tấn công mạng nội bộ LAN!');
          } else {
            setFilterResult('Gói tin thường đi vào LAN thành công.');
          }
        } else {
          setFilterResult('Firewall đã Chặn thành công kết nối lạ từ Internet vào LAN nội bộ.');
        }
      }
    }, 1000);
  };

  // Minitest Answers
  const [selectedItOption, setSelectedItOption] = useState<string | null>(null);
  const [showItExplanation, setShowItExplanation] = useState<boolean>(false);

  // Vocab lists
  const mini1Vocab = useMemo(() => [
    { term: '電子機器同士', reading: 'でんしききどうし', meaning: 'giữa các thiết bị điện tử với nhau' },
    { term: '家電製品', reading: 'かでんせいひん', meaning: 'thiết bị điện gia dụng' },
    { term: '大域的', reading: 'たいいきてき', meaning: 'tính toàn cục, diện rộng (WAN)' },
    { term: '局所的', reading: 'きょくしょてき', meaning: 'tính cục bộ, phạm vi hẹp (LAN)' },
    { term: '機器の状態', reading: 'ききのじょうたい', meaning: 'trạng thái thiết bị' },
    { term: '地域', reading: 'ちいき', meaning: 'khu vực, địa phương' },
    { term: '接続形態', reading: 'せつぞくけいたい', meaning: 'dạng cấu hình kết nối mạng (topology)' },
    { term: '通信制御', reading: 'つうしんせいぎょ', meaning: 'kiểm soát truyền thông dữ liệu' },
    { term: '複数台', reading: 'ふくすうだい', meaning: 'nhiều máy, nhiều thiết bị' },
    { term: 'スター型', reading: 'star がた', meaning: 'mạng hình sao (dùng Hub trung tâm)' }
  ], []);

  const mini2Vocab = useMemo(() => [
    { term: '制御する', reading: 'せいぎょする', meaning: 'kiểm soát, điều khiển quyền truy cập' },
    { term: '攻撃', reading: 'こうげき', meaning: 'tấn công mạng' },
    { term: 'ホストコンピュータ', reading: 'host computer', meaning: 'máy tính chủ điều phối trung tâm' },
    { term: '提供する', reading: 'ていきょうする', meaning: 'cung cấp dịch vụ (Server)' },
    { term: '兼ねる', reading: 'かねる', meaning: 'kiêm nhiệm nhiều dịch vụ cùng lúc' },
    { term: '明確', reading: 'めいかく', meaning: 'rõ ràng, xác thực' },
    { term: 'クライアント', reading: 'client', meaning: 'máy khách yêu cầu dịch vụ' },
    { term: '遠隔操作', reading: 'えんかくそうさ', meaning: 'điều khiển từ xa' },
    { term: '情報伝達', reading: 'じょうほうでんたつ', meaning: 'truyền đạt thông tin' },
    { term: '小規模', reading: 'しょうきぼ', meaning: 'quy mô nhỏ' }
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
            LÝ THUYẾT BÀI 5
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Mạng máy tính (ネットワーク)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('5.1')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '5.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Laptop size={16} />
          5.1 & 5.2 LAN, WAN & Internet
        </button>
        <button
          onClick={() => setActiveTab('5.3')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '5.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          5.3 Topologies (Bus, Star, Ring)
        </button>
        <button
          onClick={() => setActiveTab('5.4')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '5.4' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Shield size={16} />
          5.4 & 5.5 Kiến trúc & Bảo mật
        </button>
        <button
          onClick={() => setActiveTab('minitest')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === 'minitest' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Languages size={16} />
          Minitests & Dịch câu
        </button>
      </div>

      {/* Tab Contents */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
        {/* Tab 1: LAN, WAN & Internet */}
        {activeTab === '5.1' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                LAN (Local Area Network) vs WAN (Wide Area Network)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 leading-relaxed text-slate-600 text-sm md:text-base">
                <div className="flex flex-col gap-4">
                  <p>
                    <strong>Mạng máy tính (コンピュータネットワーク)</strong> cho phép các thiết bị trao đổi dữ liệu số thông qua tín hiệu điện hoặc sóng vô tuyến.
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-2">
                    <li><strong>LAN (局所的 - Cục bộ)</strong>: Kết nối trong nội bộ phạm vi nhỏ như cơ quan, lớp học. Ranh giới thực tế thường được định nghĩa là <strong>phạm vi mà quản trị viên mạng có thể đi bộ để kiểm tra trực tiếp trạng thái thiết bị (歩いて機器の状態をチェックできる範囲)</strong>.</li>
                    <li><strong>WAN (大域的 - Toàn cục / Diện rộng)</strong>: Kết nối phạm vi địa lý lớn giữa các chi nhánh xa nhau, giữa các đô thị.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs md:text-sm text-slate-700 flex flex-col gap-3">
                  <h4 className="font-bold text-slate-800">Internet (インターネット) là gì?</h4>
                  <p>
                    Tên gọi xuất phát từ ghép nối giữa <strong>"Network" (Mạng lưới)</strong> và <strong>"Inter" (Kết nối chéo)</strong>. Ý nghĩa cốt lõi của Internet là <strong>"Mạng nối mạng" (ネットワークを結んだネットワーク)</strong>. Nó liên kết các mạng diện rộng WAN khu vực với nhau theo dạng lưới mạng nhện khổng lồ (<strong>網目状 - Amimejou</strong>) để chia sẻ dữ liệu toàn cầu.
                  </p>
                  <p>
                    Bản chất của dịch vụ <strong>WWW (World Wide Web)</strong> là cấu trúc giống mạng nhện không có máy chủ chỉ huy độc quyền, nơi mọi máy tính quy mô nhỏ đều tự do phát hoặc nhận dữ liệu bình đẳng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Topologies Sandbox */}
        {activeTab === '5.3' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">5.3</span> 接続形態 (Cấu trúc đấu nối mạng - Topology)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Cách thức bố trí đấu nối cáp mạng giữa các nút máy tính gồm 3 dạng chính:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm flex flex-col gap-3">
                    <li><strong>バス型 (Bus Topology)</strong>: Đấu nối tất cả thiết bị trên một trục cáp truyền thống. Mỗi máy tính tự thực hiện kiểm soát truyền dẫn. Dễ xảy ra xung đột dữ liệu (<strong>データの衝突 - Collision</strong>) khi nhiều máy cùng phát tín hiệu nên hiện nay rất ít dùng.</li>
                    <li><strong>スター型 (Star Topology)</strong>: Toàn bộ máy nối tập trung về một thiết bị gom đường truyền gọi là <strong>Hub / Thiết bị tập trung (ハブ / 集線装置)</strong>. Rất dễ bổ sung máy mới, đây là cấu trúc thịnh hành nhất hiện nay. Có thể đấu nối nhiều Hub kế tiếp nhau dạng xếp chồng xếp tầng (<strong>カスケード状 - Cascade</strong>).</li>
                    <li><strong>リング型 (Ring Topology)</strong>: Đấu nối nối tiếp khép kín vòng tròn (<strong>閉じたケーブル</strong>). Dữ liệu được chuyển tiếp qua các máy lân cận. Nếu xảy ra lỗi đứt cáp hoặc 1 máy hỏng, toàn bộ kết nối của vòng sẽ bị tê liệt lập tức nếu không có giải pháp dự phòng đặc biệt.</li>
                  </ul>
                </div>

                {/* Topology Simulator Sandbox */}
                <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Trình mô phỏng Sandbox cấu hình kết nối mạng</h4>
                  
                  <div className="flex gap-2">
                    {['bus', 'star', 'ring'].map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          setSelectedTopology(t as any);
                          setCollisionActive(false);
                        }}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          selectedTopology === t 
                            ? 'bg-indigo-600 text-white border-indigo-600' 
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        Cấu hình {t.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {/* Sandbox Visual Canvas */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 h-48 flex justify-center items-center relative overflow-hidden">
                    {/* BUS TOPOLOGY */}
                    {selectedTopology === 'bus' && (
                      <div className="w-full flex flex-col items-center gap-6">
                        <div className="h-2 w-4/5 bg-slate-400 rounded relative">
                          {collisionActive && (
                            <div className="absolute inset-0 bg-red-500 animate-ping flex justify-center items-center rounded">
                              <span className="text-white font-bold text-[10px]">XUNG ĐỘT (衝突)!</span>
                            </div>
                          )}
                        </div>
                        <div className="flex justify-between w-4/5">
                          {[1, 2, 3, 4].map(n => (
                            <div key={n} className="flex flex-col items-center">
                              <div className="h-4 w-0.5 bg-slate-300"></div>
                              <div className="p-2 bg-slate-100 border border-slate-300 rounded text-[9px] font-bold">Node {n}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STAR TOPOLOGY */}
                    {selectedTopology === 'star' && (
                      <div className="relative w-48 h-40 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-[9px] z-10 shadow-md">
                          HUB
                        </div>
                        {[
                          { top: '10%', left: '10%' },
                          { top: '10%', right: '10%' },
                          { bottom: '10%', left: '10%' },
                          { bottom: '10%', right: '10%' }
                        ].map((pos, idx) => (
                          <div 
                            key={idx} 
                            style={pos} 
                            className={`absolute p-2 bg-slate-100 border border-slate-300 rounded text-[9px] font-bold ${
                              activePackets.includes(idx) ? 'ring-2 ring-emerald-500 scale-105' : ''
                            }`}
                          >
                            Node {idx + 1}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* RING TOPOLOGY */}
                    {selectedTopology === 'ring' && (
                      <div className="relative w-40 h-40 flex items-center justify-center">
                        <div className="absolute w-28 h-28 border-4 border-dashed border-slate-300 rounded-full"></div>
                        {[
                          { top: '0', left: '33%' },
                          { top: '33%', right: '0' },
                          { bottom: '0', left: '33%' },
                          { top: '33%', left: '0' }
                        ].map((pos, idx) => (
                          <div 
                            key={idx} 
                            style={pos} 
                            onClick={() => toggleNode(idx)}
                            className={`absolute p-1.5 rounded text-[9px] font-bold cursor-pointer transition-all border ${
                              !nodeState[idx] 
                                ? 'bg-red-100 border-red-300 text-red-500 line-through' 
                                : activePackets.includes(idx)
                                  ? 'bg-emerald-100 border-emerald-400 text-emerald-700 scale-110 shadow-sm'
                                  : 'bg-slate-100 border-slate-300 text-slate-700'
                            }`}
                            title="Nhấp để hỏng/sửa node"
                          >
                            Node {idx + 1} {!nodeState[idx] && '(Hỏng)'}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center bg-white border p-3 rounded-lg">
                    <span className="text-slate-500">Mô phỏng gửi dữ liệu mạng:</span>
                    <button
                      onClick={handleSimulateTopology}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1.5 px-4 rounded transition-all cursor-pointer"
                    >
                      Bắt đầu truyền gói tin
                    </button>
                  </div>

                  {selectedTopology === 'ring' && (
                    <p className="text-[10px] text-slate-400 leading-relaxed italic">
                      💡 Mẹo: Nhấp trực tiếp vào bất kỳ Node nào trong mạng RING để đánh giá rủi ro ngắt quãng hệ thống khi có 1 trạm gặp sự cố.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Kiến trúc & Bảo mật */}
        {activeTab === '5.4' && (
          <div className="flex flex-col gap-8 font-sans">
            {/* System Architecture */}
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                Hệ thống xử lý Tập trung vs. Phân tán
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 leading-relaxed text-slate-600 text-sm md:text-base">
                <div className="flex flex-col gap-3">
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">1. 集中処理システム (Xử lý tập trung)</h4>
                  <p>
                    Một máy tính chủ mạnh mẽ đóng vai trò hạt nhân điều khiển chính (<strong>ホストコンピュータ - Host Computer</strong>) đảm nhận toàn bộ tính toán xử lý. Các thiết bị đầu cuối của người dùng (<strong>ユーザ端末</strong>) chỉ đảm nhiệm việc nhập và hiển thị kết quả.
                  </p>
                  <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-lg text-emerald-800 text-xs font-semibold">
                    👍 Quản lý tập trung chương trình, cơ sở dữ liệu một cách nhất quán (一元管理), cải tiến hiệu quả nâng cấp bảo trì (保守性が向上) và ngăn chặn dữ liệu tuyệt mật bị rò rỉ ra ngoài.
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="font-bold text-slate-800 text-sm md:text-base">2. 分散処理システム (Xử lý phân tán)</h4>
                  <p>
                    Chia sẻ công việc tính toán cho nhiều máy tính chạy song song. Phụ tải xử lý được chia đều (<strong>負荷が分散される - Fuka ga bunsansareru</strong>), giúp xây dựng hệ thống bằng nhiều máy tính nhỏ rẻ tiền.
                  </p>
                  <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-lg text-emerald-800 text-xs font-semibold">
                    👍 Nếu một cụm máy chủ bị sập, toàn mạng vẫn vận hành trơn tru nhờ các cụm còn lại gánh tải hộ, giúp gia tăng tối đa độ tin cậy hệ thống.
                  </div>
                </div>
              </div>

              <div className="mt-5 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-700">
                <strong>Hai cấu hình phụ thuộc mạng phân tán:</strong>
                <ul className="list-disc pl-5 mt-2 flex flex-col gap-1.5">
                  <li><strong>クライアントサーバシステム (Hệ Client-Server)</strong>: Phân định rạch ròi máy khách <strong>Client (クライアント)</strong> gửi yêu cầu và các máy cung cấp dịch vụ chuyên dụng <strong>Server (サーバ)</strong> như máy chủ web, mail, file, DNS.</li>
                  <li><strong>ピアツーピア (Peer-to-Peer / P2P)</strong>: Các máy tính trong mạng bình đẳng tuyệt đối (<strong>対等 - Taitou</strong>), vừa chia sẻ vừa sử dụng tài nguyên của nhau.</li>
                </ul>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Firewall & DMZ Guard Simulator */}
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                Bảo mật mạng: Firewall (ファイアウォール) & DMZ
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Các máy chủ lưu giữ dữ liệu cốt lõi (<strong>重要な情報</strong>) luôn là mục tiêu của các cuộc tấn công mạng.
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm flex flex-col gap-2">
                    <li><strong>ファイアウォール (Firewall - 防火壁)</strong>: Thiết bị kiểm soát lưu lượng ra vào mạng nội bộ và mạng internet công cộng. Nó có nhiệm vụ cấu hình điều phối (<strong>制御 - Seigyo</strong>) cho phép ai được sử dụng dịch vụ gì. Chỉ cài đặt thôi chưa đủ, cấu hình sai quy tắc vẫn có thể gây rò rỉ mạng nghiêm trọng.</li>
                    <li><strong>DMZ (DeMilitarized Zone - 緩衝地帯 / 非武装地帯)</strong>: Vùng trung gian nằm ngoài Firewall để đặt các máy chủ công cộng (như Web Server). Vùng này không chứa dữ liệu tối mật của cơ quan tổ chức, hoạt động dựa trên thỏa thuận không tấn công nhưng có độ phòng vệ thấp hơn mạng LAN nội bộ.</li>
                  </ul>
                </div>

                {/* Firewall simulation dashboard */}
                <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs font-sans">
                  <h4 className="font-bold text-slate-800 text-sm">Trình kiểm thử cấu hình quy tắc Firewall</h4>

                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl flex flex-col gap-2">
                    <span className="font-semibold text-slate-700">Quy tắc định tuyến tường lửa:</span>
                    <label className="flex items-center justify-between cursor-pointer border-b pb-1.5 mt-1 text-slate-600">
                      <span>Mở kết nối tới vùng đệm DMZ:</span>
                      <input 
                        type="checkbox" checked={fwRules.publicAllowed} 
                        onChange={(e) => setFwRules({ ...fwRules, publicAllowed: e.target.checked })}
                        className="accent-indigo-600"
                      />
                    </label>
                    <label className="flex items-center justify-between cursor-pointer text-slate-600">
                      <span>Cho phép truy cập tự do từ Internet thẳng vào LAN nội bộ:</span>
                      <input 
                        type="checkbox" checked={fwRules.internalAllowed} 
                        onChange={(e) => setFwRules({ ...fwRules, internalAllowed: e.target.checked })}
                        className="accent-indigo-600"
                      />
                    </label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-slate-700">Gửi các gói dữ liệu từ bên ngoài Internet:</span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => sendPacket('dmz', 'normal')}
                        className="bg-indigo-50 border border-indigo-200 text-indigo-700 py-2 rounded hover:bg-indigo-100 transition-all font-bold cursor-pointer"
                      >
                        Gửi gói Web tới DMZ
                      </button>
                      <button
                        onClick={() => sendPacket('lan', 'normal')}
                        className="bg-indigo-50 border border-indigo-200 text-indigo-700 py-2 rounded hover:bg-indigo-100 transition-all font-bold cursor-pointer"
                      >
                        Gửi gói thường tới LAN
                      </button>
                      <button
                        onClick={() => sendPacket('dmz', 'attack')}
                        className="bg-rose-50 border border-rose-200 text-rose-700 py-2 rounded hover:bg-rose-100 transition-all font-bold cursor-pointer"
                      >
                        Tấn công Web DMZ
                      </button>
                      <button
                        onClick={() => sendPacket('lan', 'attack')}
                        className="bg-rose-50 border border-rose-200 text-rose-700 py-2 rounded hover:bg-rose-100 transition-all font-bold cursor-pointer"
                      >
                        Tấn công LAN nội bộ
                      </button>
                    </div>
                  </div>

                  {incomingPacket && (
                    <div className="p-3 bg-white border border-slate-200 rounded-xl flex flex-col gap-1">
                      <div className="flex justify-between items-center border-b pb-1 font-mono text-[10px]">
                        <span className="text-slate-400">Nguồn: {incomingPacket.source}</span>
                        <span className={`font-bold ${incomingPacket.type === 'attack' ? 'text-rose-500' : 'text-indigo-500'}`}>
                          Loại: {incomingPacket.type.toUpperCase()}
                        </span>
                      </div>
                      {filterResult && (
                        <div className="text-slate-700 font-bold mt-1 text-[11px]">
                          🛡️ {filterResult}
                        </div>
                      )}
                    </div>
                  )}
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
                  ネットワークにおいて，外部からの不正アクセスを防ぐために内部ネットワークと外部ネットワークの間に置かれるものはどれか． (Trong hệ thống mạng máy tính, thiết bị nào được lắp đặt giữa mạng nội bộ và mạng internet công cộng ngoài nhằm ngăn ngừa truy cập độc hại?)
                </p>
                <div className="flex flex-col gap-2 mt-4 text-xs md:text-sm">
                  {[
                    { key: 'l5-ans-a', text: '(ア) DNSサーバ (DNS Server)' },
                    { key: 'l5-ans-b', text: '(イ) サーチエンジン (Search Engine)' },
                    { key: 'l5-ans-c', text: '(ウ) スイッチングハブ (Switching Hub)' },
                    { key: 'l5-ans-d', text: '(エ) ファイアウォール (Firewall)' }
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setSelectedItOption(opt.key);
                        setShowItExplanation(true);
                      }}
                      className={`w-full text-left py-3 px-4 rounded-lg border-2 transition-all cursor-pointer ${
                        selectedItOption === opt.key 
                          ? opt.key === 'l5-ans-d' 
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
                    <strong>Giải thích chi tiết:</strong> Đáp án đúng là <strong>(エ) ファイアウォール (Bức tường lửa)</strong>. Nó hoạt động như một chốt canh gác ngăn chặn các xâm nhập bất hợp pháp từ môi trường Internet không tin cậy đi vào cấu trúc cơ sở dữ liệu nội bộ.
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
                  <span>Kiểm tra Từ vựng 5.1 & 5.2</span>
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
                  <span>Kiểm tra Từ vựng 5.3 & 5.4</span>
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
                  「会社や学校の中などの範囲で局所的につながるネットワークのことを LAN と呼び，より広い範囲で大域的につながるネットワークのことを WAN と呼んでいます。」
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
                      <strong>Đáp án mẫu:</strong> Hệ thống mạng kết nối cục bộ trong phạm vi hẹp như trường học hay cơ quan được gọi là LAN, còn mạng kết nối diện rộng ở phạm vi địa lý to lớn hơn được gọi là WAN.
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex flex-col gap-3 text-xs md:text-sm">
                <p className="font-bold text-slate-700">Câu 2 (Dịch Việt):</p>
                <p className="italic text-slate-600 text-[13px] leading-relaxed">
                  「通常，サーバとなっているコンピュータには，重要な情報が記録されています．したがって，不特定多数の人が利用するインターネットに接続するときには，サーバに対するセキュリティを保つ構成 exponential が必要になります。」
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
                      <strong>Đáp án mẫu:</strong> Thông thường, các máy tính đóng vai trò là Server sẽ ghi nhận nhiều thông tin quan trọng. Do đó, khi thực hiện kết nối vào mạng Internet công cộng phục vụ đông đảo người dùng ngoài, chúng ta cần trang bị cấu hình bảo đảm an ninh an toàn tuyệt đối cho Server.
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
