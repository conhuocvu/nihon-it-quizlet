import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, BookOpen, Cpu, HardDrive, Monitor, 
  CheckCircle2, Languages, RefreshCw, Smartphone, Laptop,
  Folder, FileText, Activity, HelpCircle, Shield, Radio, Layers, Zap, Play, ToggleLeft, ToggleRight, Wifi
} from 'lucide-react';

interface Lesson4TheoryProps {
  onClose: () => void;
}

export const Lesson4Theory: React.FC<Lesson4TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'4.1' | '4.2' | 'minitest'>('4.1');

  // Simulator 1: ADSL vs FTTH Pipeline
  const [pipelineType, setPipelineType] = useState<'adsl' | 'ftth'>('adsl');
  const [distance, setDistance] = useState<number>(2); // km
  const [noiseLevel, setNoiseLevel] = useState<number>(3); // 1-10

  const pipelineStats = useMemo(() => {
    if (pipelineType === 'ftth') {
      return {
        downSpeed: '1 Gbps',
        upSpeed: '1 Gbps',
        stability: 'Ổn định tối đa (Không bị nhiễu)',
        isAsymmetric: false,
        desc: 'FTTH sử dụng sợi cáp quang chuyên dụng (専用の光ファイバ). Tốc độ đối xứng (対称) và không bị ảnh hưởng bởi khoảng cách hay nhiễu điện từ.'
      };
    } else {
      // ADSL drops speed as distance & noise increases
      const baseDown = 47; // Mbps
      const baseUp = 5; // Mbps
      
      const down = Math.max(1, Math.round(baseDown / (1 + (distance * 0.4) + (noiseLevel * 0.2))));
      const up = Math.max(0.5, Math.round(baseUp / (1 + (distance * 0.2) + (noiseLevel * 0.1))));

      return {
        downSpeed: `${down} Mbps`,
        upSpeed: `${up} Mbps`,
        stability: noiseLevel > 6 || distance > 4 ? 'Kém (Nhiễu nặng, rớt gói)' : 'Trung bình',
        isAsymmetric: true,
        desc: 'ADSL tận dụng đường dây điện thoại đồng thông thường (一般の電話線). Tốc độ không đối xứng (非対称 - Tải xuống nhanh hơn Tải lên). Rất nhạy cảm với nhiễu (ノイズ) và suy hao theo cự ly trạm điện thoại (電話局).'
      };
    }
  }, [pipelineType, distance, noiseLevel]);

  // Simulator 2: VoIP Packetizer
  const [priorityControl, setPriorityControl] = useState<boolean>(true);
  const [isSendingVoIP, setIsSendingVoIP] = useState<boolean>(false);
  const [voipPackets, setVoipPackets] = useState<{ id: number; data: string; delay: boolean }[]>([]);

  const handleSendVoIP = () => {
    setIsSendingVoIP(true);
    const packets = [
      { id: 1, data: 'Mẫu_Âm_Thanh_A', delay: false },
      { id: 2, data: 'Mẫu_Âm_Thanh_B', delay: !priorityControl },
      { id: 3, data: 'Mẫu_Âm_Thanh_C', delay: false },
      { id: 4, data: 'Mẫu_Âm_Thanh_D', delay: !priorityControl },
    ];
    setVoipPackets(packets);
    setTimeout(() => {
      setIsSendingVoIP(false);
    }, 2500);
  };

  // Simulator 3: Wireless Standards Range Sandbox
  const [selectedWireless, setSelectedWireless] = useState<'irda' | 'nfc' | 'bluetooth' | 'wifi'>('bluetooth');
  const [hasObstacle, setHasObstacle] = useState<boolean>(false);

  const wirelessData = useMemo(() => {
    const specs = {
      irda: {
        name: 'IrDA (赤外線通信)',
        range: 'Dưới 1m',
        speed: 'Tối đa tương đương ADSL',
        barrierImpact: 'Bị chặn hoàn toàn (Không thể truyền dẫn nếu có vật cản)',
        useCase: 'Điều khiển tivi (リモコン), trao đổi dữ liệu cá nhân (個人データ交換) trên điện thoại cũ.',
        isBlocked: hasObstacle
      },
      nfc: {
        name: 'RFID / NFC (非接触型ICカード)',
        range: 'Dưới 10cm',
        speed: 'Khá nhanh',
        barrierImpact: 'Bị ảnh hưởng nhiều nếu khoảng cách tăng',
        useCase: 'Thẻ thanh toán tàu xe Suica (JRのSuica), thẻ RFID quản lý chuỗi cung ứng sản phẩm (流通経路/POS).',
        isBlocked: false
      },
      bluetooth: {
        name: 'Bluetooth',
        range: 'Khoảng 10m',
        speed: 'Trung bình',
        barrierImpact: 'Xuyên qua được vật cản mỏng',
        useCase: 'Chuột, bàn phím, tai nghe không dây, hỗ trợ thoại rảnh tay (ハンズフリー) trên ô tô.',
        isBlocked: false
      },
      wifi: {
        name: 'Wi-Fi (無線LAN)',
        range: 'Lên tới 100m',
        speed: 'Rất nhanh (IEEE802.11a/b/g/n)',
        barrierImpact: 'Suy hao tín hiệu nhẹ',
        useCase: 'Mạng gia đình, các điểm truy cập Internet công cộng (ホットスポット). Cần đặt mã bảo mật tránh nghe lén (盗聴).',
        isBlocked: false
      }
    };
    return specs[selectedWireless];
  }, [selectedWireless, hasObstacle]);

  // Exam Question Answer
  const itExamAnswer = 'l4-ans-d';
  const [selectedItOption, setSelectedItOption] = useState<string | null>(null);
  const [showItExplanation, setShowItExplanation] = useState<boolean>(false);

  // Mini-test 1 Vocab
  const mini1Vocab = useMemo(() => [
    { term: '余裕', reading: 'よゆう', meaning: 'dư dả, phần dung lượng thừa thoải mái' },
    { term: '非対称', reading: 'ひたいしょう', meaning: 'không đối xứng (khác nhau giữa chiều lên/xuống)' },
    { term: '端末装置', reading: 'たんまつそうち', meaning: 'thiết bị cuối (terminal device)' },
    { term: '制御', reading: 'せいぎょ', meaning: 'điều khiển, kiểm soát hệ thống' },
    { term: '参入', reading: 'さんにゅう', meaning: 'tham gia vào thị trường, gia nhập' },
    { term: '漏洩電波', reading: 'ろうえいでんぱ', meaning: 'sóng vô tuyến bị rò rỉ' },
    { term: '盗聴', reading: 'とうちょう', meaning: 'nghe trộm, đánh cắp thông tin truyền tải' },
    { term: 'ユビキタス', reading: 'ubiquitous', meaning: 'mạng kết nối vạn vật, có mặt mọi nơi' },
    { term: 'コンテンツ', reading: 'contents', meaning: 'nội dung số' },
    { term: 'ノイズ', reading: 'noise', meaning: 'tạp âm, nhiễu tín hiệu' }
  ], []);
  const [mini1Revealed, setMini1Revealed] = useState<number[]>([]);
  const [mini1Trans1, setMini1Trans1] = useState('');
  const [mini1ShowAnswer1, setMini1ShowAnswer1] = useState(false);
  const [mini1Trans2, setMini1Trans2] = useState('');
  const [mini1ShowAnswer2, setMini1ShowAnswer2] = useState(false);

  // Mini-test 2 Vocab
  const mini2Vocab = useMemo(() => [
    { term: '有線接続', reading: 'ゆうせんせつぞく', meaning: 'kết nối có dây cáp vật lý' },
    { term: '分割する', reading: 'ぶんかつする', meaning: 'phân chia nhỏ ra (như gói tin packet)' },
    { term: 'ワイヤレスキーボード', reading: 'wireless keyboard', meaning: 'bàn phím không dây' },
    { term: '周波数帯', reading: 'しゅうはすうたい', meaning: 'dải băng tần tần số' },
    { term: '実用化する', reading: 'じつようかする', meaning: 'đưa vào ứng dụng thực tế' },
    { term: '電波干渉', reading: 'でんぱかんしょう', meaning: 'nhiễu sóng vô tuyến vô hại' },
    { term: '高速通信', reading: 'こうそくつうしん', meaning: 'truyền thông tin tốc độ cao' },
    { term: 'ラストワンマイル問題', reading: 'last one mile', meaning: 'vấn đề dặm cuối cùng kết nối về hộ gia đình' },
    { term: 'ゲートウェイ', reading: 'gateway', meaning: 'cổng kết nối chuyển đổi giao thức' },
    { term: 'ケーブルテレビ', reading: 'cable TV', meaning: 'truyền hình cáp truyền thống' }
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
            LÝ THUYẾT BÀI 4
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Công nghệ Truyền thông Dữ liệu (データ通信技術)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('4.1')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '4.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Laptop size={16} />
          4.1 Kết nối có dây & Cáp quang
        </button>
        <button
          onClick={() => setActiveTab('4.2')}
          className={`flex-1 min-w-[120px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '4.2' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Wifi size={16} />
          4.2 Kết nối không dây (IrDA, Wi-Fi...)
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
        {/* Tab 1: Kết nối có dây */}
        {activeTab === '4.1' && (
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">4.1</span> 有線接続 (Kết nối có dây cáp mạng)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                  <p>
                    Các phương thức kết nối có dây phổ biến gồm:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm flex flex-col gap-2">
                    <li><strong>CATV (Cable TV)</strong>: Tận dụng phần dung lượng trống của đường truyền hình cáp để truyền thông tin. Nhờ lượng băng thông rộng rãi có sẵn (<strong>通信量に余裕がある</strong>), nó đem lại tốc độ truyền dữ liệu rất cao.</li>
                    <li><strong>ADSL (Asymmetric Digital Subscriber Line - 非対称デジタル加入者線)</strong>: Tận dụng đường dây điện thoại thông thường (<strong>一般の電話線</strong>). Tốc độ bất đối xứng (<strong>非対称 - Hitashou</strong>): Chiều tải xuống <strong>下り (Download - từ Internet xuống máy)</strong> được phân bổ băng thông rộng hơn chiều tải lên <strong>上り (Upload - cập nhật web/gửi email)</strong>. Tuy nhiên, nó dễ bị ảnh hưởng bởi tạp nhiễu (<strong>ノイズ - Noise</strong>) và suy giảm tốc độ theo khoảng cách tới trạm điện thoại (<strong>電話局 - Denwakyouku</strong>).</li>
                    <li><strong>FTTH (Fiber To The Home)</strong>: Dẫn đường cáp quang chuyên dụng (<strong>専用の光ファイバ</strong>) trực tiếp vào hộ gia đình. Ít chịu ảnh hưởng bởi nhiễu sóng và khoảng cách, là phương án giải quyết tối ưu cho vấn đề nghẽn dặm cuối cùng (<strong>ラストワンマイル問題 - Last One Mile Problem</strong>).</li>
                    <li><strong>電灯線通信 (PLC - Power Line Communication)</strong>: Tận dụng đường truyền tải điện 100V của gia đình để làm mạng internet thông qua ổ cắm (<strong>コンセント</strong>) và bộ chuyển đổi <strong>PLCアダプタ</strong>. Tiết kiệm công sức thi công đường cáp (<strong>ネットワークケーブル敷設工事が不要</strong>).</li>
                  </ul>
                </div>

                {/* Pipeline Speed Simulator */}
                <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs font-sans">
                  <h4 className="font-bold text-slate-800 text-sm flex justify-between items-center">
                    <span>Trình giả lập đường truyền ADSL vs. FTTH</span>
                  </h4>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPipelineType('adsl')}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                        pipelineType === 'adsl' 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      Cáp đồng ADSL (非対称)
                    </button>
                    <button
                      onClick={() => setPipelineType('ftth')}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                        pipelineType === 'ftth' 
                          ? 'bg-indigo-600 text-white border-indigo-600' 
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      Cáp quang FTTH (対称)
                    </button>
                  </div>

                  {pipelineType === 'adsl' && (
                    <div className="flex flex-col gap-3 p-3 bg-white border rounded-xl">
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-slate-700">Khoảng cách tới trạm điện thoại (電話局): {distance} km</span>
                        <input 
                          type="range" min="0.5" max="6" step="0.5" value={distance} 
                          onChange={(e) => setDistance(Number(e.target.value))}
                          className="w-full accent-indigo-600"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-slate-700">Mức độ tạp nhiễu đường truyền (ノイズ): {noiseLevel} / 10</span>
                        <input 
                          type="range" min="1" max="10" step="1" value={noiseLevel} 
                          onChange={(e) => setNoiseLevel(Number(e.target.value))}
                          className="w-full accent-indigo-600"
                        />
                      </div>
                    </div>
                  )}

                  <div className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col gap-2">
                    <div className="flex justify-between items-center border-b pb-1.5">
                      <span className="font-bold text-slate-500">Băng thông Tải xuống (下り):</span>
                      <span className="font-black text-indigo-600">{pipelineStats.downSpeed}</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-1.5">
                      <span className="font-bold text-slate-500">Băng thông Tải lên (上り):</span>
                      <span className="font-black text-pink-600">{pipelineStats.upSpeed}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-500">Độ ổn định tín hiệu:</span>
                      <span className="font-bold text-slate-700">{pipelineStats.stability}</span>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-400 leading-relaxed italic">
                    {pipelineStats.desc}
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* IP Phone & VoIP Gateway Section */}
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                IP電話 (Điện thoại IP) & VoIPゲートウェイ (Cổng đổi gói thoại)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4 font-sans">
                  <p>
                    <strong>IP電話 (Điện thoại IP)</strong>: Giải pháp truyền giọng nói dưới dạng gói tin số qua mạng Internet tốc độ cao. Dịch vụ này giúp doanh nghiệp tiết kiệm chi phí viễn thông rất lớn (<strong>コスト削減 - Cost Sakugen</strong>), đặc biệt là các cuộc gọi đường dài (<strong>長距離電話 - Chyoukyori Denwa</strong>).
                  </p>
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs md:text-sm text-amber-900 leading-relaxed font-sans">
                    <strong>Phân biệt với Skype:</strong> IP điện thoại là một dịch vụ có phí bảo đảm tính ổn định, trong khi <strong>Skype</strong> là phần mềm kết nối thoại miễn phí vận hành dựa trên cơ chế tự chịu rủi ro của người sử dụng (<strong>自己責任 - Jiko sekinin</strong>).
                  </div>
                  <p>
                    Cơ chế chuyển đổi âm thanh thoại:
                  </p>
                  <ul className="list-decimal pl-5 text-xs md:text-sm flex flex-col gap-2">
                    <li>Giọng nói được chuyển đổi thành các gói tin thoại <strong>音声パケット (Voice Packets)</strong> thông qua thiết bị <strong>VoIPゲートウェイ (VoIP Gateway)</strong>.</li>
                    <li>Các gói tin di chuyển qua thiết bị định tuyến <strong>ルータ (Router)</strong> để tìm đường đi ngắn nhất trên mạng Internet.</li>
                    <li>Sử dụng cơ chế kiểm soát mức độ ưu tiên truyền dữ liệu nhằm đảm bảo truyền giọng nói theo thời gian thực (<strong>実時間の音声通話 - Jitujikan no onsei tuuwa</strong>) tránh hiện tượng đứt quãng.</li>
                  </ul>
                </div>

                {/* VoIP Packetizer Simulator */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 shadow-sm text-xs font-sans">
                  <h4 className="font-bold text-slate-800 text-sm flex justify-between items-center">
                    <span>Mô phỏng Gói tin Thoại truyền qua Router</span>
                  </h4>
                  
                  <div className="flex justify-between items-center bg-white border border-slate-200 p-3 rounded-lg">
                    <span className="font-semibold text-slate-700">Kiểm soát Độ ưu tiên gói tin (優先制御):</span>
                    <button
                      onClick={() => setPriorityControl(!priorityControl)}
                      className="text-indigo-600 focus:outline-none cursor-pointer"
                    >
                      {priorityControl ? (
                        <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                          <CheckCircle2 size={16} />
                          <span>Đang BẬT</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-rose-500 font-bold">
                          <AlertTriangle size={16} />
                          <span>Đang TẮT</span>
                        </div>
                      )}
                    </button>
                  </div>

                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={handleSendVoIP}
                      disabled={isSendingVoIP}
                      className="bg-indigo-600 text-white font-bold py-2.5 px-6 rounded-lg hover:bg-indigo-700 active:scale-95 transition-all disabled:opacity-50 flex items-center gap-2 cursor-pointer text-xs"
                    >
                      <Play size={14} />
                      {isSendingVoIP ? 'Đang truyền thoại...' : 'Gửi mẫu tiếng nói (VoIP)'}
                    </button>
                  </div>

                  {/* Packet visual line */}
                  <div className="bg-white border rounded-xl p-4 flex flex-col gap-2 h-24 justify-center items-center overflow-hidden">
                    {isSendingVoIP ? (
                      <div className="flex gap-2 items-center">
                        {voipPackets.map((pkt) => (
                          <div 
                            key={pkt.id} 
                            className={`p-2 rounded text-[9px] font-mono border font-bold transition-all animate-bounce ${
                              pkt.delay ? 'bg-amber-100 border-amber-300 text-amber-700' : 'bg-indigo-100 border-indigo-300 text-indigo-700'
                            }`}
                          >
                            <div>PKT #{pkt.id}</div>
                            <div>{pkt.data.substring(0, 7)}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-slate-400 italic">Nhấn nút để bắt đầu băm nhỏ gói tin thoại và gửi đi</span>
                    )}
                  </div>

                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    {priorityControl ? (
                      <span><strong>Độ ưu tiên BẬT</strong>: Các gói tin âm thanh được dán nhãn ưu tiên cao, di chuyển mượt mà qua các thiết bị chuyển đổi để tái tạo cuộc thoại không bị vấp.</span>
                    ) : (
                      <span><strong>Độ ưu tiên TẮT</strong>: Gói tin thoại truyền đi chậm, dễ bị xáo trộn vị trí hoặc trễ do tải mạng làm cuộc gọi thoại bị méo tiếng, giật cục.</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Kết nối không dây */}
        {activeTab === '4.2' && (
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">4.2</span> 無線通信手段 (Các chuẩn truyền thông không dây di động)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Selector */}
                <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 text-xs md:text-sm font-sans font-bold">
                  {[
                    { key: 'irda', label: 'IrDA (赤外線通信)' },
                    { key: 'nfc', label: 'NFC/RFID (非接触型IC)' },
                    { key: 'bluetooth', label: 'Bluetooth' },
                    { key: 'wifi', label: 'Wi-Fi (無線LAN)' }
                  ].map(w => (
                    <button
                      key={w.key}
                      onClick={() => setSelectedWireless(w.key as any)}
                      className={`flex-1 lg:flex-none text-left p-3.5 rounded-xl border-2 transition-all cursor-pointer whitespace-nowrap lg:whitespace-normal font-bold ${
                        selectedWireless === w.key
                          ? 'border-indigo-600 bg-indigo-50/50 text-indigo-800 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      {w.label}
                    </button>
                  ))}
                </div>

                {/* Display specification box */}
                <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 font-sans text-xs md:text-sm">
                  <div className="flex justify-between items-center border-b pb-3">
                    <h4 className="font-extrabold text-slate-800 text-sm md:text-base">{wirelessData.name}</h4>
                    {selectedWireless === 'irda' && (
                      <label className="flex items-center gap-2 cursor-pointer font-bold text-xs">
                        <input 
                          type="checkbox" checked={hasObstacle} 
                          onChange={() => setHasObstacle(!hasObstacle)}
                          className="accent-indigo-600" 
                        />
                        <span>Có vật chắn (遮蔽物)</span>
                      </label>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between border-b py-1">
                      <span className="font-bold text-slate-400">Cự ly phủ sóng:</span>
                      <span className="font-bold text-slate-700">{wirelessData.range}</span>
                    </div>
                    <div className="flex justify-between border-b py-1">
                      <span className="font-bold text-slate-400">Tốc độ tối đa:</span>
                      <span className="font-bold text-slate-700">{wirelessData.speed}</span>
                    </div>
                    <div className="flex justify-between border-b py-1">
                      <span className="font-bold text-slate-400">Ảnh hưởng bởi vật cản (遮蔽物):</span>
                      <span className="font-bold text-slate-700">{wirelessData.barrierImpact}</span>
                    </div>
                    <div className="flex flex-col gap-1 pt-2">
                      <span className="font-bold text-slate-400">Ứng dụng thực tế tiêu biểu:</span>
                      <span className="text-slate-600 leading-relaxed text-xs">{wirelessData.useCase}</span>
                    </div>
                  </div>

                  {wirelessData.isBlocked && (
                    <div className="bg-rose-50 border border-rose-100 p-3 rounded-lg text-rose-800 text-xs font-bold flex gap-1.5 items-center">
                      <AlertTriangle size={16} />
                      <span>Kết nối bị ngắt do có vật cản (遮蔽物) cắt đứt tia hồng ngoại!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Minitests */}
        {activeTab === 'minitest' && (
          <div className="flex flex-col gap-10">
            {/* IT Passport Question */}
            <div>
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-base md:text-lg">
                <HelpCircle className="text-indigo-600" />
                Câu hỏi luyện tập IT Passport (ITパスポート試験)
              </h4>
              <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 font-sans">
                <p className="font-bold text-slate-800 mb-3 text-sm md:text-base leading-relaxed">
                  ADSL回線に関する記述として，適切なものはどれか． (Giải thích nào dưới đây mô tả chính xác nhất về đường truyền cáp đồng ADSL?)
                </p>
                <div className="flex flex-col gap-2 mt-4 text-xs md:text-sm">
                  {[
                    { key: 'l4-ans-a', text: '(ア) Cho phép chèn một đoạn cáp quang giữa modem ADSL và trạm trung chuyển.' },
                    { key: 'l4-ans-b', text: '(イ) Luôn giữ nguyên tốc độ truyền thông định mức không đổi bất chấp khoảng cách cự ly.' },
                    { key: 'l4-ans-c', text: '(ウ) Sử dụng đồng thời điện thoại thoại analog và máy tính sẽ kéo giảm tốc độ internet.' },
                    { key: 'l4-ans-d', text: '(エ) Tốc độ truyền tải khi tải xuống (Download) nhanh hơn rõ rệt so với chiều tải lên (Upload).' }
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
                    <strong>Giải thích chi tiết:</strong> Đáp án đúng là <strong>(エ)</strong>. ADSL là đường truyền bất đối xứng (非対称), thiết kế tối ưu hóa cho hành vi đọc báo, duyệt web hay tải dữ liệu của người dùng, do đó có tốc độ tải xuống (下り) lớn hơn nhiều so với tốc độ truyền tải chiều lên (上り).
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
                  <span>Kiểm tra Từ vựng 4.1</span>
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
                  <span>Kiểm tra Từ vựng 4.2</span>
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
                  「金属線や光ファイバなどのケーブルで接続できる通信手段としては，CATV，ADSL，FTTH，電灯線通信などが代表的です．」
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
                      <strong>Đáp án mẫu:</strong> Tiêu biểu cho các phương thức kết nối có dây bằng dây cáp đồng kim loại hoặc sợi cáp quang bao gồm mạng truyền hình cáp (CATV), cáp đồng điện thoại (ADSL), cáp quang kéo tận nhà (FTTH) và công nghệ truyền dữ liệu qua đường tải điện (PLC).
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 flex flex-col gap-3 text-xs md:text-sm">
                <p className="font-bold text-slate-700">Câu 2 (Dịch Việt):</p>
                <p className="italic text-slate-600 text-[13px] leading-relaxed">
                  「ネットワーク接続手段として無線通信の重要性が増しています．代表的な無線通信手段としては，IrDA，非接触型ICカード，Bluetooth，無線LANなどがあります．」
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
                      <strong>Đáp án mẫu:</strong> Vai trò của truyền thông không dây đang ngày càng trở nên quan trọng như một phương thức kết nối mạng chủ đạo. Tiêu biểu cho các phương tiện truyền thông không dây có thể kể đến như chuẩn hồng ngoại IrDA, thẻ vi mạch IC không tiếp xúc, công nghệ Bluetooth và mạng vô tuyến cục bộ LAN (Wi-Fi).
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
