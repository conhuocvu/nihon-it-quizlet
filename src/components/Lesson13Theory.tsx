import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Cpu, HelpCircle, Languages, Zap, Layers
} from 'lucide-react';

interface Lesson13TheoryProps {
  onClose: () => void;
}

export const Lesson13Theory: React.FC<Lesson13TheoryProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'13.1' | '13.3' | '13.5' | 'minitest'>('13.1');

  // Simulator 1: Bit Depth & Choice Calculator (Section 13.1)
  const [numChoices, setNumChoices] = useState<number>(4);
  const calculatedBitsNeeded = useMemo(() => {
    if (numChoices <= 1) return 1;
    return Math.ceil(Math.log2(numChoices));
  }, [numChoices]);

  // Simulator 2: 1024 vs 1000 Capacity discrepancy (Section 13.2)
  const [inputCapacityGB, setInputCapacityGB] = useState<number>(500);
  const capacityInStandardBinaryGB = useMemo(() => {
    // Manufacturer states 500 GB = 500 * 10^9 bytes
    // OS reads in GiB (binary base 1024^3)
    const totalBytes = inputCapacityGB * 1_000_000_000;
    return totalBytes / (1024 * 1024 * 1024);
  }, [inputCapacityGB]);

  // Simulator 3: Bilingual Text Size Calculator & DVD-R Storage (Section 13.3 & 13.4 & Exam)
  const [englishText, setEnglishText] = useState<string>('Hello World! Antigravity AI coding assistant.');
  const [japaneseText, setJapaneseText] = useState<string>('こんにちは！日本語の学習。');
  const [dvdCapacityGB, setDvdCapacityGB] = useState<number>(4.7);
  const [charsPerPage, setCharsPerPage] = useState<number>(700);

  const textStats = useMemo(() => {
    // English chars = 1 byte each, Japanese = 2 bytes each
    const engLen = englishText.length;
    const jpnLen = japaneseText.length;
    const totalBytes = engLen * 1 + jpnLen * 2;
    
    // DVD capacity in bytes
    const totalDvdBytes = dvdCapacityGB * 1_000_000_000;
    const bytesPerPage = charsPerPage * 2; // Assuming Japanese text only
    const maxPages = totalDvdBytes / bytesPerPage;

    return {
      engLen,
      jpnLen,
      totalBytes,
      maxPages
    };
  }, [englishText, japaneseText, dvdCapacityGB, charsPerPage]);

  // Simulator 4: Mojibake Encoder/Decoder (Section 13.5)
  const [sampleText, setSampleText] = useState<string>('テスト');
  const [selectedEncoding, setSelectedEncoding] = useState<'utf8' | 'sjis' | 'ascii'>('sjis');

  const mojibakeOutput = useMemo(() => {
    if (sampleText === 'テスト') {
      if (selectedEncoding === 'utf8') return 'ãƒ†ã‚¹ãƒˆ (Giải mã sai UTF-8 dưới dạng ISO-8859-1)';
      if (selectedEncoding === 'sjis') return 'eXg (Giải mã sai Shift-JIS dưới dạng UTF-8)';
      return 'ÀÁÂÃ (Giải mã sai dạng ASCII)';
    } else if (sampleText === '日本語') {
      if (selectedEncoding === 'utf8') return 'æ—¥æœ¬èªž (Giải mã sai UTF-8 dưới dạng ISO-8859-1)';
      if (selectedEncoding === 'sjis') return '{ (Lỗi Shift-JIS)';
      return 'ÈÉÊË (Lỗi ASCII)';
    }
    return 'was (Lỗi giải mã ký tự đặc biệt)';
  }, [sampleText, selectedEncoding]);

  // Vocabulary lists for minitests
  const mini1Vocab = useMemo(() => [
    { term: '情報量', reading: 'じょうほうりょう', meaning: 'lượng thông tin' },
    { term: '主観的', reading: 'しゅかんてき', meaning: 'mang tính chủ quan' },
    { term: '区別する', reading: 'くべつする', meaning: 'phân biệt' },
    { term: '限定', reading: 'げんてい', meaning: 'giới hạn, hạn định' },
    { term: '規定する', reading: 'きていする', meaning: 'quy định' },
    { term: '改行', reading: 'かいぎょう', meaning: 'xuống dòng' },
    { term: '文字化け', reading: 'もじばけ', meaning: 'lỗi hiển thị phông chữ, chữ hóa ma' },
    { term: '選択', reading: 'せんたく', meaning: 'chọn lựa' },
    { term: '避ける', reading: 'よける/さける', meaning: 'tránh, né tránh' },
    { term: '標準化する', reading: 'ひょうじゅんかする', meaning: 'tiêu chuẩn hóa' }
  ], []);

  const mini2Vocab = useMemo(() => [
    { term: '定義する', reading: 'ていぎする', meaning: 'định nghĩa' },
    { term: '文字コード', reading: 'もじコード', meaning: 'mã ký tự (character code)' },
    { term: '共存する', reading: 'きょうぞんする', meaning: 'cùng tồn tại, song hành' },
    { term: 'コード体系', reading: 'コードたいけい', meaning: 'hệ thống mã' },
    { term: '生じる', reading: 'しょうじる', meaning: 'phát sinh, nảy sinh' },
    { term: '膨大な', reading: 'ぼうだいな', meaning: 'khổng lồ, khổng lượng' },
    { term: '仮定する', reading: 'かていする', meaning: 'giả định, giả thiết' },
    { term: '小文字', reading: 'こもじ', meaning: 'chữ thường (chữ nhỏ)' },
    { term: 'おおよそ', reading: 'about', meaning: 'khoảng chừng, đại khái' },
    { term: 'テラバイト', reading: 'terabyte', meaning: 'tê-ra-bai (TB)' }
  ], []);

  const [mini1Revealed, setMini1Revealed] = useState<number[]>([]);
  const [mini2Revealed, setMini2Revealed] = useState<number[]>([]);

  const [mini1Trans1, setMini1Trans1] = useState('');
  const [mini1ShowAnswer1, setMini1ShowAnswer1] = useState(false);

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
            LÝ THUYẾT BÀI 13
          </span>
          <h2 className="text-lg md:text-xl font-black text-slate-800 mt-1">
            Lượng thông tin & Mã chữ (情報量・文字コード)
          </h2>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('13.1')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '13.1' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Cpu size={16} />
          13.1 & 13.2 Lượng thông tin
        </button>
        <button
          onClick={() => setActiveTab('13.3')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '13.3' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Layers size={16} />
          13.3 & 13.4 Dung lượng chữ
        </button>
        <button
          onClick={() => setActiveTab('13.5')}
          className={`flex-1 min-w-[130px] py-3 text-xs md:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeTab === '13.5' ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-600 hover:text-indigo-600 hover:bg-white/50'
          }`}
        >
          <Zap size={16} />
          13.5 Mã hóa & Lỗi phông
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
        
        {/* Tab 13.1 & 13.2: Information volume & units */}
        {activeTab === '13.1' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                13.1 情報量 & 13.2 単位 (Khái niệm Lượng thông tin & Đơn vị đo)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Trong tin học, thông tin được đo đạc khách quan bằng đơn vị nhỏ nhất là **Bit (ビット)**. 1 bit tương ứng với 1 hàng nhị phân (chỉ gồm 0 hoặc 1).
                  </p>
                  <p>
                    Để phân biệt $N$ trạng thái/lựa chọn khác nhau, số lượng bit tối thiểu $n$ cần dùng tuân theo công thức lũy thừa:
                    <br />
                    <span className="font-mono bg-slate-50 border border-slate-200 px-3 py-1 rounded inline-block text-slate-800 font-bold mt-1">
                      2<sup>n-1</sup> &lt; N ≤ 2<sup>n</sup>
                    </span>
                  </p>
                  <p>
                    <strong>Đơn vị đo lượng lớn</strong>: 1 Byte = 8 bit. Hệ số nhân đơn vị chuẩn trong bộ nhớ máy tính là 1024 (2<sup>10</sup>) chứ không phải 1000.
                  </p>
                  <p className="p-3 bg-amber-50 border border-amber-150 rounded-xl text-amber-950 text-xs">
                    💡 **Tại sao ổ cứng 500GB chỉ hiển thị khoảng 465GB trong Windows?**
                    <br />
                    Nhà sản xuất ổ cứng quy ước 1 KB = 1000 Byte (hệ cơ số 10), trong khi hệ điều hành máy tính đọc 1 KB = 1024 Byte (hệ nhị phân).
                  </p>
                </div>

                {/* Units and Bit Depth Calculator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">1. Bộ tính toán số bit tương ứng số lượng trạng thái</h4>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-slate-500">Số trạng thái (N):</span>
                      <input
                        type="number"
                        min="2"
                        value={numChoices}
                        onChange={(e) => setNumChoices(Math.max(2, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono w-24"
                      />
                    </div>
                    <div className="mt-2.5 p-3 bg-indigo-50 border border-indigo-150 text-indigo-900 rounded font-black text-xs">
                      ➔ Cần tối thiểu: {calculatedBitsNeeded} Bits
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-800 text-sm mb-2">2. Mô phỏng sai lệch dung lượng (Nhà sản xuất vs Hệ điều hành)</h4>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-slate-500">Dung lượng nhãn (GB):</span>
                      <input
                        type="number"
                        value={inputCapacityGB}
                        onChange={(e) => setInputCapacityGB(Math.max(1, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-sm bg-white font-mono w-24"
                      />
                    </div>
                    <div className="mt-2.5 p-3 bg-amber-50 border border-amber-150 text-amber-900 rounded text-xs font-mono flex justify-between font-bold">
                      <span>Windows thực nhận (GiB):</span>
                      <span>{capacityInStandardBinaryGB.toFixed(2)} GiB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 13.3 & 13.4: Character Information size */}
        {activeTab === '13.3' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                13.3 文字の情報量 & 13.4 日本語の情報量 (Lượng thông tin của chữ viết)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Dung lượng bộ nhớ chiếm dụng phụ thuộc trực tiếp vào số ký tự đặc trưng của hệ ngôn ngữ:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1.5">
                    <li><strong>Bảng mã ASCII (tiếng Anh)</strong>: Gồm 256 ký tự (2<sup>8</sup>), tương đương <strong>1 ký tự = 8 bit = 1 byte</strong>.</li>
                    <li><strong>Mã tiếng Nhật (ひらがな, 漢字...)</strong>: Số lượng chữ rất nhiều, quy định 65,536 ký tự (2<sup>16</sup>), tương đương <strong>1 ký tự = 16 bit = 2 byte</strong>.</li>
                  </ul>
                  <p>
                    Điều này nghĩa là cùng một số lượng từ, văn bản bằng tiếng Nhật sẽ tiêu tốn dung lượng gấp đôi so với văn bản tiếng Anh thuần túy.
                  </p>
                </div>

                {/* Bilingual Text Calculator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Bộ tính toán dung lượng tệp tin văn bản trực quan</h4>
                  
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Nhập ký tự tiếng Anh (ASCII - 1 Byte/ký tự):</span>
                    <input
                      type="text"
                      value={englishText}
                      onChange={(e) => setEnglishText(e.target.value)}
                      className="p-2 border border-slate-200 rounded-lg text-xs bg-white w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-2 border-b border-slate-200 pb-3">
                    <span className="font-bold text-slate-500">Nhập ký tự tiếng Nhật/Việt (2 Bytes/ký tự):</span>
                    <input
                      type="text"
                      value={japaneseText}
                      onChange={(e) => setJapaneseText(e.target.value)}
                      className="p-2 border border-slate-200 rounded-lg text-xs bg-white w-full"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 pb-3">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Dung lượng đĩa DVD-R (GB):</span>
                      <input
                        type="number"
                        step="0.1"
                        value={dvdCapacityGB}
                        onChange={(e) => setDvdCapacityGB(Math.max(0.1, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-xs bg-white font-mono"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Ký tự mỗi trang sách:</span>
                      <input
                        type="number"
                        value={charsPerPage}
                        onChange={(e) => setCharsPerPage(Math.max(1, Number(e.target.value)))}
                        className="p-2 border border-slate-200 rounded-lg text-xs bg-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-indigo-50 border border-indigo-100 text-indigo-900 rounded-lg text-[10px] leading-relaxed">
                    📖 **Quy đổi dung lượng đĩa sang số trang sách:**<br />
                    Lưu trữ tối đa được khoảng **{Math.floor(textStats.maxPages).toLocaleString()}** trang sách (với {charsPerPage} ký tự tiếng Nhật/trang).
                  </div>

                  <div className="p-4 bg-white border border-slate-100 rounded-xl flex justify-between items-center shadow-sm">
                    <span className="font-extrabold text-slate-500">TỔNG KÍCH THƯỚC FILE VĂN BẢN:</span>
                    <span className="font-mono text-sm md:text-base font-black text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded">
                      {textStats.totalBytes} Bytes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 13.5: Encoding & Mojibake */}
        {activeTab === '13.5' && (
          <div className="flex flex-col gap-8 font-sans">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4">
                13.5 文字コード & 文字化け (Mã hóa văn bản & Hiện tượng lỗi phông)
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-slate-600 leading-relaxed text-sm md:text-base flex flex-col gap-4">
                  <p>
                    Máy tính chỉ lưu trữ dữ liệu nhị phân 0 và 1. Để hiển thị chữ viết, máy sử dụng bảng đối chiếu mã hóa gọi là **文字コード (Mã ký tự)**.
                  </p>
                  <p>
                    <strong>Các chuẩn mã hóa phổ biến</strong>:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-slate-700 flex flex-col gap-1">
                    <li><strong>ASCII</strong>: Tiêu chuẩn cơ bản cho ký tự Latinh tiếng Anh.</li>
                    <li><strong>Shift_JIS / JIS / EUC</strong>: Các chuẩn nội địa của Nhật Bản.</li>
                    <li><strong>Unicode</strong>: Chuẩn quốc tế mã hóa thống nhất tất cả ngôn ngữ thế giới với độ dài 2 byte.</li>
                  </ul>
                  <p>
                    <strong>Lỗi phông chữ (文字化け - Mojibake)</strong>: Xảy ra khi một tập tin được lưu bằng bộ mã này nhưng lại được trình duyệt hoặc hệ điều hành giải mã bằng một bộ mã khác (như hiển thị sai mã Shift-JIS dưới định dạng UTF-8).
                  </p>
                </div>

                {/* Mojibake Simulator */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm text-xs">
                  <h4 className="font-bold text-slate-800 text-sm">Mô phỏng hiện tượng lỗi phông chữ (Mojibake)</h4>
                  <p className="text-slate-400 text-[10px]">Lựa chọn chuỗi chữ và bộ giải mã sai để kiểm tra kết quả lỗi</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Chuỗi chữ gốc:</span>
                      <select
                        value={sampleText}
                        onChange={(e) => setSampleText(e.target.value)}
                        className="p-2 border border-slate-200 rounded-lg text-xs bg-white font-bold"
                      >
                        <option value="テスト">テスト (Test)</option>
                        <option value="日本語">日本語 (Japanese)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-slate-500">Giải mã bằng định dạng sai:</span>
                      <select
                        value={selectedEncoding}
                        onChange={(e) => setSelectedEncoding(e.target.value as any)}
                        className="p-2 border border-slate-200 rounded-lg text-xs bg-white font-bold text-rose-800"
                      >
                        <option value="utf8">Giải mã sai UTF-8</option>
                        <option value="sjis">Giải mã sai Shift-JIS</option>
                        <option value="ascii">Giải mã sai ASCII</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-100 rounded-xl flex flex-col gap-1.5 shadow-sm font-mono text-center">
                    <span className="font-extrabold text-slate-400 text-[9px] block">Kết quả hiển thị trên màn hình:</span>
                    <span className="font-black text-rose-600 text-sm md:text-base bg-rose-50 border border-rose-100 px-3 py-2 rounded mt-1 block">
                      {mojibakeOutput}
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
                  片面1層記録のDVD-Rは約4.7Gバイトの記憶容量をもつ．1ページ当たり日本語700文字が印刷されている本の場合，約何万ページ分をこの DVD-R に保存できるか．ここで，日本語 1文字を表現するのに 2 バイトが必要であるとし，文字情報だけを記録するものとする．また，1Gバイトは10億バイトとする。
                </p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[
                    { label: '(ア) 42 vạn trang', isCorrect: false },
                    { label: '(イ) 71 vạn trang', isCorrect: false },
                    { label: '(ウ) 336 vạn trang', isCorrect: true },
                    { label: '(エ) 671 vạn trang', isCorrect: false }
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
                  • Dung lượng đĩa DVD-R = 4.7 GB = 4,700,000,000 Byte (vì 1 GB = 1 tỷ byte).<br />
                  • Một trang sách chứa 700 ký tự tiếng Nhật. Mỗi ký tự cần 2 byte ➔ Dung lượng 1 trang sách = 700 × 2 = 1,400 Byte.<br />
                  • Tổng số trang sách lưu trữ được là: <code>4,700,000,000 / 1,400 = 3,357,142 trang</code>.<br />
                  • Quy đổi sang đơn vị vạn trang: 3,357,142 ≈ **336 vạn trang** (Đáp án **ウ**).
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
                      ベトナム政府はソフト産業成功のカギは人材が握っていると見ており，企業も人材育成，生産拡大に力を入れている．政府は 2010 年までにソフト産業に 7,000 万ドルを投じ，年成長率 35～40％，売上 8 億ドル(うち輸出 40％)を目指す．
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
                        <strong>Gợi ý đối chiếu:</strong> Chính phủ Việt Nam nhận định rằng nguồn nhân lực nắm giữ chiếc chìa khóa thành công cho ngành công nghiệp phần mềm, và các doanh nghiệp cũng đang tập trung lực lượng vào đào tạo nguồn nhân lực cũng như mở rộng sản xuất. Chính phủ đặt mục tiêu đầu tư 70 triệu đô la vào ngành phần mềm tính đến năm 2010, nhắm tới tốc độ tăng trưởng hàng năm 35-40%, doanh thu đạt 800 triệu đô la (trong đó xuất khẩu chiếm 40%).
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
                      情報が多い少ないと言うとき，その人にとって役に立つかどうかの主観的な判断が入ることがありますが，情報処理の世界では，質を問わずに客観的な量として情報を測ります．
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
                        <strong>Gợi ý đối chiếu:</strong> Khi nói về lượng thông tin nhiều hay ít, đôi khi sẽ bị lẫn vào sự đánh giá chủ quan của mỗi người xem thông tin đó có hữu ích hay không. Tuy nhiên, trong thế giới xử lý thông tin, người ta đo lường thông tin dưới dạng đại lượng khách quan bất kể chất lượng của nó ra sao.
                      </div>
                    )}
                  </div>

                  {/* VI -> JP */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-bold text-slate-500">Dịch Việt ➔ Nhật:</span>
                    <p className="bg-slate-50 p-2 rounded text-slate-700 italic font-medium">
                      Trong dữ liệu của máy tính chỉ có các số được biểu hiện bằng cách sắp xếp 0 và 1, bản thân các ký tự không được ghi trong máy. Vì vậy, tùy theo việc lý giải dữ liệu như thế nào mà các ký tự biểu hiện ra khác nhau.
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
                        <strong>Gợi ý đối chiếu:</strong> コンピュータのデータは 0 と 1 の並びで表現された数字であり，文字そのものが記録されているわけではありません．したがって，データをどのように解釈するかで表示される文字が異なってきます．
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
