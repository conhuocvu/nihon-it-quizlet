import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Cpu, HelpCircle, Languages, Zap, Layers
} from 'lucide-react';

interface Lesson14TheoryProps {
  onClose: () => void;
}

export const Lesson14Theory: React.FC<Lesson14TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'14.1' | '14.3' | '14.4' | 'minitest'>('14.1');

  // Simulator 1: Audio Digitizer & Size Estimator (Section 14.1 & 14.2)
  const [midiBeatsPerMin, setMidiBeatsPerMin] = useState<number>(120);
  const [midiVoices, setMidiVoices] = useState<number>(32);
  const [midiSdCardMB, setMidiSdCardMB] = useState<number>(512);

  const midiHours = useMemo(() => {
    // 6 bytes per note * concurrent voices * beats per minute
    const bytesPerMin = 6 * midiVoices * midiBeatsPerMin;
    const bytesPerHour = bytesPerMin * 60;
    const sdCardBytes = midiSdCardMB * 1024 * 1024;
    return sdCardBytes / bytesPerHour;
  }, [midiBeatsPerMin, midiVoices, midiSdCardMB]);

  // Audio size parameters
  const [audioSamplingKHz, setAudioSamplingKHz] = useState<number>(44.1);
  const [audioBits, setAudioBits] = useState<number>(16);
  const [audioChannels, setAudioChannels] = useState<number>(2); // 1 = mono, 2 = stereo
  const [audioCdMB, setAudioCdMB] = useState<number>(640);

  const audioMinutes = useMemo(() => {
    const bytesPerSec = (audioSamplingKHz * 1000 * audioBits * audioChannels) / 8;
    const bytesPerMin = bytesPerSec * 60;
    const cdBytes = audioCdMB * 1024 * 1024;
    return cdBytes / bytesPerMin;
  }, [audioSamplingKHz, audioBits, audioChannels, audioCdMB]);

  // Simulator 2: RGB Color Mixer & DPI Print Calculator (Section 14.3)
  const [redVal, setRedVal] = useState<number>(128);
  const [greenVal, setGreenVal] = useState<number>(128);
  const [blueVal, setBlueVal] = useState<number>(128);

  const [printDpi, setPrintDpi] = useState<number>(300);
  const [paperWidthCm, setPaperWidthCm] = useState<number>(21); // A4 width
  const [paperHeightCm, setPaperHeightCm] = useState<number>(29.7); // A4 height

  const printMegapixels = useMemo(() => {
    // 1 inch = 2.54 cm
    const widthDots = (printDpi * paperWidthCm) / 2.54;
    const heightDots = (printDpi * paperHeightCm) / 2.54;
    const totalPixels = widthDots * heightDots;
    return totalPixels / 1_000_000;
  }, [printDpi, paperWidthCm, paperHeightCm]);

  // Simulator 3: Video Bandwidth & Flipbook FPS Simulator (Section 14.4)
  const [videoFps, setVideoFps] = useState<number>(30);
  const [videoWidth, setVideoWidth] = useState<number>(640);
  const [videoHeight, setVideoHeight] = useState<number>(480);
  const [videoSecs, setVideoSecs] = useState<number>(10);

  const videoMBSize = useMemo(() => {
    // 3 bytes per pixel (RGB)
    const bytesPerFrame = videoWidth * videoHeight * 3;
    const totalBytes = bytesPerFrame * videoFps * videoSecs;
    return totalBytes / (1024 * 1024);
  }, [videoFps, videoWidth, videoHeight, videoSecs]);

  // Vocabulary lists for minitests
  const mini1Vocab = useMemo(() => [
    { term: '着信メロディ', reading: 'ちゃくしんメロディ', meaning: 'nhạc chuông cuộc gọi' },
    { term: '接続端子', reading: 'せつぞくたんし', meaning: 'cổng cắm kết nối, đầu nối' },
    { term: '静止画像', reading: 'せいしがぞう', meaning: 'hình ảnh tĩnh' },
    { term: '縦横', reading: 'じゅうおう/たてよこ', meaning: 'dọc ngang, chiều dọc và chiều ngang' },
    { term: '似る', reading: 'にる', meaning: 'giống nhau, tương tự' },
    { term: '呼び名', reading: 'よびな', meaning: 'tên gọi, danh xưng' },
    { term: '間隔', reading: 'かんかく', meaning: 'khoảng cách, thời gian cách quãng' },
    { term: '音符', reading: 'おんぷ', meaning: 'nốt nhạc' },
    { term: '強弱', reading: 'きょうじゃく', meaning: 'độ mạnh nhẹ, cường độ' },
    { term: '音源', reading: 'おんげん', meaning: 'nguồn âm thanh' }
  ], []);

  const mini2Vocab = useMemo(() => [
    { term: '動画像', reading: 'どうがぞう', meaning: 'hình ảnh động, video' },
    { term: 'パラパラ漫画', reading: 'flip book', meaning: 'tranh hoạt hình lật giấy hand-drawn' },
    { term: '走査線', reading: 'そうさせん', meaning: 'đường quét màn hình (scanning line)' },
    { term: '解像度', reading: 'かいぞうど', meaning: 'độ phân giải' },
    { term: 'インクジェットプリンタ', reading: 'inkjet printer', meaning: 'máy in phun mực' },
    { term: '同様', reading: 'どうよう', meaning: 'tương tự, giống như thế' },
    { term: '描く', reading: 'えがく', meaning: 'vẽ nên, khắc họa' },
    { term: '原理的に', reading: 'げんりてきに', meaning: 'về mặt nguyên lý' },
    { term: '正確', reading: 'せいかく', meaning: 'chính xác' },
    { term: '標準画質', reading: 'ひょうじゅんがしつ', meaning: 'độ phân giải tiêu chuẩn (SD)' }
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
            LÝ THUYẾT BÀI 14
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Biểu diễn đa phương tiện (マルチメディア表現)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('14.1')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '14.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Cpu size={16} />
          14.1 & 14.2 Âm thanh
        </button>
        <button
          onClick={() => setActiveTab('14.3')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '14.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          14.3 Hình ảnh tĩnh (RGB/DPI)
        </button>
        <button
          onClick={() => setActiveTab('14.4')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '14.4' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Zap size={16} />
          14.4 Video (Động)
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
        
        {/* Tab 14.1 & 14.2: Audio & MIDI */}
        {activeTab === '14.1' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                14.1 MIDI & 14.2 音声情報 (Nhạc mã lệnh MIDI & Số hóa âm thanh)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>MIDI (Musical Instrument Digital Interface)</strong>: Tiêu chuẩn lưu trữ nhạc dạng "mã lệnh" điều khiển nốt nhạc (độ cao, độ dài, cường độ) chứ không lưu tần số sóng âm thực tế. Do đó dung lượng tệp tin MIDI cực kỳ nhỏ.
                  </p>
                  <p>
                    <strong>Số hóa âm thanh (音声情報のデジタル化)</strong>:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1">
                    <li><strong>サンプリング周波数 (Tần số lấy mẫu)</strong>: Đo độ cao sóng âm theo chu kỳ (đơn vị Hz). Lấy mẫu càng dày âm thanh càng thật.</li>
                    <li><strong>量子化数 (Mức lượng tử hóa)</strong>: Thể hiện độ cao sóng bằng số nguyên. Càng nhiều bit lượng tử hóa, âm thanh càng tinh tế.</li>
                  </ul>
                </div>

                {/* MIDI & Audio Calculator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-5 shadow-sm text-xs">
                  {/* MIDI calculator */}
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">1. Bộ tính toán sức chứa MIDI trên thẻ nhớ (SD Card)</h4>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500">Số nhịp/phút:</span>
                        <input
                          type="number"
                          value={midiBeatsPerMin}
                          onChange={(e) => setMidiBeatsPerMin(Math.max(1, Number(e.target.value)))}
                          className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500">Số nốt đồng âm:</span>
                        <input
                          type="number"
                          value={midiVoices}
                          onChange={(e) => setMidiVoices(Math.max(1, Number(e.target.value)))}
                          className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500">Thẻ nhớ (MB):</span>
                        <input
                          type="number"
                          value={midiSdCardMB}
                          onChange={(e) => setMidiSdCardMB(Math.max(1, Number(e.target.value)))}
                          className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                        />
                      </div>
                    </div>

                    <div className="p-3 bg-indigo-50 border border-indigo-150 rounded text-center text-xs font-black text-indigo-900 font-mono">
                      ➔ Thời lượng lưu trữ: ~{Math.floor(midiHours).toLocaleString()} Giờ nhạc
                    </div>
                  </div>

                  {/* Audio capacity calculator */}
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 text-sm mb-2">2. Tính toán sức chứa âm thanh số (CD Audio)</h4>
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500">Tần số mẫu (kHz):</span>
                        <input
                          type="number"
                          step="0.1"
                          value={audioSamplingKHz}
                          onChange={(e) => setAudioSamplingKHz(Math.max(0.1, Number(e.target.value)))}
                          className="p-2 border border-slate-200 rounded-lg text-xs bg-white font-mono"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500">Lượng tử (Bits):</span>
                        <input
                          type="number"
                          value={audioBits}
                          onChange={(e) => setAudioBits(Math.max(1, Number(e.target.value)))}
                          className="p-2 border border-slate-200 rounded-lg text-xs bg-white font-mono"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500">Số kênh (Channels):</span>
                        <select
                          value={audioChannels}
                          onChange={(e) => setAudioChannels(Number(e.target.value))}
                          className="p-2 border border-slate-200 rounded-lg text-xs bg-white font-bold"
                        >
                          <option value={1}>1 (Mono)</option>
                          <option value={2}>2 (Stereo)</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500">Đĩa CD (MB):</span>
                        <input
                          type="number"
                          value={audioCdMB}
                          onChange={(e) => setAudioCdMB(Math.max(1, Number(e.target.value)))}
                          className="p-2 border border-slate-200 rounded-lg text-xs bg-white font-mono"
                        />
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-50 border border-emerald-150 rounded text-center text-xs font-black text-emerald-900 font-mono">
                      ➔ Thời lượng lưu trữ CD: ~{Math.floor(audioMinutes).toLocaleString()} Phút âm thanh
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 14.3: Still image & RGB / DPI */}
        {activeTab === '14.3' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                14.3 静止画像 (Hình ảnh tĩnh & Hệ màu RGB / Độ phân giải in ấn)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Ký hiệu Điểm ảnh (画素 - Pixel)</strong>: Hình ảnh tĩnh được ghép bởi nhiều điểm ảnh. Mỗi điểm ảnh chứa bộ 3 màu sắc phát sáng <strong>RGB (Red, Green, Blue)</strong>.
                  </p>
                  <p>
                    Biểu diễn 256 mức độ sáng cho mỗi kênh màu cần 8 bit ➔ 1 Điểm ảnh tiêu chuẩn chiếm dụng <strong>24 bit = 3 Byte</strong> bộ nhớ.
                  </p>
                  <p>
                    <strong>Độ phân giải in ấn (dpi - dots per inch)</strong>: Số lượng điểm mực in trên 1 inch chiều dài vật lý (1 inch = 2.54 cm). Giúp tính toán số điểm ảnh tối thiểu của camera cần dùng để bản in sắc nét không bị nhòe vỡ.
                  </p>
                </div>

                {/* RGB mixer & Print Calculator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  {/* RGB mixer */}
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">1. Trình pha trộn màu sắc RGB (3 Byte/Pixel)</h4>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-rose-600 font-bold">Red (0-255):</span>
                        <input
                          type="range"
                          min="0"
                          max="255"
                          value={redVal}
                          onChange={(e) => setRedVal(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-emerald-600 font-bold">Green (0-255):</span>
                        <input
                          type="range"
                          min="0"
                          max="255"
                          value={greenVal}
                          onChange={(e) => setGreenVal(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-indigo-600 font-bold">Blue (0-255):</span>
                        <input
                          type="range"
                          min="0"
                          max="255"
                          value={blueVal}
                          onChange={(e) => setBlueVal(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div
                      style={{ backgroundColor: `rgb(${redVal}, ${greenVal}, ${blueVal})` }}
                      className="h-10 rounded-xl border border-slate-350 shadow-inner flex items-center justify-center font-mono font-bold text-white drop-shadow-md text-xs"
                    >
                      rgb({redVal}, {greenVal}, {blueVal})
                    </div>
                  </div>

                  {/* Print MP calculator */}
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 text-sm mb-2">2. Tính toán độ phân giải máy ảnh cho kích thước in ấn</h4>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500">Độ phân giải máy in (dpi):</span>
                        <input
                          type="number"
                          value={printDpi}
                          onChange={(e) => setPrintDpi(Math.max(1, Number(e.target.value)))}
                          className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500">Rộng khổ giấy (cm):</span>
                        <input
                          type="number"
                          value={paperWidthCm}
                          onChange={(e) => setPaperWidthCm(Math.max(1, Number(e.target.value)))}
                          className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500">Cao khổ giấy (cm):</span>
                        <input
                          type="number"
                          value={paperHeightCm}
                          onChange={(e) => setPaperHeightCm(Math.max(1, Number(e.target.value)))}
                          className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono"
                        />
                      </div>
                    </div>

                    <div className="p-3 bg-indigo-50 border border-indigo-150 rounded text-center text-xs font-black text-indigo-900 font-mono">
                      ➔ Yêu cầu máy ảnh tối thiểu: {printMegapixels.toFixed(1)} Megapixels (Triệu điểm ảnh)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 14.4: Video flipbook & Bandwidth */}
        {activeTab === '14.4' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                14.4 動画像 (Hình ảnh động & Nguyên lý lưu lượng video)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    <strong>Nguyên lý hoạt ảnh động</strong>: Tương tự tập truyện tranh lật tay (**パラパラ漫画 - Parapara Manga**), video là chuỗi ảnh tĩnh được ghi hình và phát liên tục với tốc độ cao.
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1.5">
                    <li>Điện ảnh truyền thống: 24 ảnh/giây (24 fps).</li>
                    <li>Truyền hình tiêu chuẩn Nhật Bản: 30 ảnh/giây (30 fps).</li>
                  </ul>
                  <p>
                    Do vậy, 1 giây của video chưa nén bằng tích của kích thước 1 bức ảnh tĩnh nhân với tốc độ khung hình (fps). Tạo nên dung lượng cực lớn.
                  </p>
                </div>

                {/* Video Bandwidth Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Bộ dự toán lưu lượng Video chưa nén</h4>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-slate-500">Độ rộng (pixels):</span>
                      <input
                        type="number"
                        value={videoWidth}
                        onChange={(e) => setVideoWidth(Math.max(1, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-xs bg-white font-mono"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-slate-500">Độ cao (pixels):</span>
                      <input
                        type="number"
                        value={videoHeight}
                        onChange={(e) => setVideoHeight(Math.max(1, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-xs bg-white font-mono"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-slate-500">Khung hình (fps):</span>
                      <select
                        value={videoFps}
                        onChange={(e) => setVideoFps(Number(e.target.value))}
                        className="p-2 border border-slate-200 rounded-lg text-xs bg-white font-bold"
                      >
                        <option value={24}>24 fps (Điện ảnh)</option>
                        <option value={30}>30 fps (Tivi chuẩn)</option>
                        <option value={60}>60 fps (Mượt mà)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-500">Thời lượng video (giây):</span>
                    <input
                      type="number"
                      value={videoSecs}
                      onChange={(e) => setVideoSecs(Math.max(1, Number(e.target.value)))}
                      className="p-2 border border-slate-200 rounded-lg text-xs bg-white font-mono w-24"
                    />
                  </div>

                  <div className="p-4 bg-white border border-slate-100 rounded-xl flex justify-between items-center shadow-sm">
                    <span className="font-extrabold text-slate-500">DUNG LƯỢNG VIDEO CHƯA NÉN:</span>
                    <span className="font-mono text-sm md:text-base font-black text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded">
                      {videoMBSize.toFixed(1)} MB
                    </span>
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
                  PCの画面表示の設定で，解像度を1,280×960ピクセルの全画面表示から1,024×768ピクセルの全画面表示に変更したとき，ディスプレイの表示状態はどのように変化するか。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                  {[
                    { label: '(ア) MPEG動画の再生速度が速くなる。', isCorrect: false },
                    { label: '(イ) 画面に表示される文字が大きくなる。', isCorrect: true },
                    { label: '(ウ) 縮小しないと表示できなかったJPEG画像が縮mなしで表示できる。', isCorrect: false },
                    { label: '(エ) ディスプレイの表示色数が少なくなる。', isCorrect: false }
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
                  Thay đổi cài đặt hiển thị từ độ phân giải cao (1,280×960) sang thấp hơn (1,024×768) trên chế độ toàn màn hình có nghĩa là cùng một diện tích màn hình vật lý nhưng số lượng hạt pixel phân bổ thưa hơn ➔ mỗi pixel có kích thước lớn hơn. Các ký tự văn bản có kích thước cấu thành cố định (ví dụ: chữ rộng 16 pixel) lúc này sẽ được ánh xạ to hơn về kích thước vật lý hiển thị (Đáp án **イ**).
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
                      MIDI は音楽のための特殊なコードですが，一般の音声の場合には音符のようにコード化することはできません．
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
                        <strong>Gợi ý đối chiếu:</strong> MIDI là một hệ thống mã hóa đặc biệt dành riêng cho âm nhạc, tuy nhiên đối với các âm thanh thông thường (như giọng nói hay tiếng động tự nhiên) thì ta không thể chuyển đổi chúng thành mã giống như nốt nhạc được.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Âm nhạc nghe bằng máy nghe nhạc MP3 hay hình ảnh xem bằng đĩa cứng được số hóa và lưu trữ sẵn vào các thiết bị đó.
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
                        <strong>Gợi ý đối chiếu:</strong> MP3プレーヤで聴く音楽や，ハードディスクで見る画像は，あらかじめデジタル化されてそれらの装置に記録されています。
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
                      パラパラ漫画では，少しずつ違う絵を速い速度で切り替えることで連続した画像に見せています．
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
                        <strong>Gợi ý đối chiếu:</strong> Đối với loại tranh hoạt hình lật giấy (Parapara Manga), bằng cách chuyển đổi nhanh chóng các bức vẽ khác nhau từng chút một, ta tạo ra cảm giác giống như một hình ảnh động liên tục.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Màn hình tinh thể của máy tính cá nhân hay điện thoại di động là tập hợp của các khối nhỏ với 3 màu sắc là đỏ, xanh lá cây, xanh da trời.
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
                        <strong>Gợi ý đối chiếu:</strong> パソコンや携帯電話の液晶画面では，赤，緑，青の3色の小さな短冊が集まっています。
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
