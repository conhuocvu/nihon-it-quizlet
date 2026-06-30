export type StudyItem = {
  id: string;
  question?: string;
  term?: string;
  answer: string;
  choices?: string[];
  meaning?: string;
  reading?: string;
  explanation?: string;
};

export type Section = {
  id: string;
  title: string;
  type: "vocabulary" | "multiple_choice";
  items: StudyItem[];
};

export type Lesson = {
  id: number;
  title: string;
  sections: Section[];
};

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Bài 1",
    sections: []
  },
  {
    id: 2,
    title: "Bài 2",
    sections: []
  },
  {
    id: 3,
    title: "Bài 3",
    sections: []
  },
  {
    id: 4,
    title: "Bài 4",
    sections: []
  },
  {
    id: 5,
    title: "Bài 5",
    sections: []
  },
  {
    id: 6,
    title: "Bài 6",
    sections: []
  },
  {
    id: 7,
    title: "Bài 7",
    sections: []
  },
  {
    id: 8,
    title: "Bài 8",
    sections: []
  },
  {
    id: 9,
    title: "Bài 9",
    sections: []
  },
  {
    id: 10,
    title: "Bài 10",
    sections: []
  },
  {
    id: 11,
    title: "Bài 11 - Máy Turing, mạch logic, IC",
    sections: [
      {
        id: "lesson-11-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          {
            id: "l11-v-1",
            term: "AND回路",
            reading: "ANDかいろ",
            answer: "mạch AND",
            meaning: "mạch AND",
            explanation: "Thực hiện phép toán nhân logic (論理積 - AND)."
          },
          {
            id: "l11-v-2",
            term: "NOT回路",
            reading: "NOTかいろ",
            answer: "mạch NOT",
            meaning: "mạch NOT",
            explanation: "Thực hiện phép toán phủ định logic (否定 - NOT)."
          },
          {
            id: "l11-v-3",
            term: "OR回路",
            reading: "ORかいろ",
            answer: "mạch OR",
            meaning: "mạch OR",
            explanation: "Thực hiện phép toán cộng logic (論理和 - OR)."
          },
          {
            id: "l11-v-4",
            term: "オートマトン",
            reading: "Automaton",
            answer: "máy tự động",
            meaning: "máy tự động (mô hình toán học đại diện cho hệ tính toán tự động)"
          },
          {
            id: "l11-v-5",
            term: "シリコン",
            reading: "Silicon",
            answer: "si li con",
            meaning: "si li con (chất bán dẫn phổ biến nhất dùng làm chip vi mạch)"
          },
          {
            id: "l11-v-6",
            term: "ダイオード",
            reading: "Diode",
            answer: "đi ốt",
            meaning: "đi ốt (linh kiện bán dẫn cho dòng điện đi qua một chiều)"
          },
          {
            id: "l11-v-7",
            term: "チューリングマシン",
            reading: "Turing machine",
            answer: "máy turing",
            meaning: "máy turing (mô hình tính toán lý thuyết nền tảng của tin học)"
          },
          {
            id: "l11-v-8",
            term: "トランジスタ",
            reading: "Transistor",
            answer: "bóng bán dẫn",
            meaning: "bóng bán dẫn (linh kiện bán dẫn thế hệ thứ 2 để khuếch đại/đóng ngắt dòng điện)"
          },
          {
            id: "l11-v-9",
            term: "ヒータ",
            reading: "Heater",
            answer: "sợi đốt",
            meaning: "sợi đốt (phát nhiệt trong bóng chân không)"
          },
          {
            id: "l11-v-10",
            term: "マス目",
            reading: "ますめ",
            answer: "nấc / ô vuông",
            meaning: "nấc, ô vuông (trên băng giấy của máy Turing)"
          },
          {
            id: "l11-v-11",
            term: "ミクロン",
            reading: "Micron",
            answer: "một phần triệu m (10⁻⁶ mét)",
            meaning: "một phần triệu m, 10⁻⁶ mét (đơn vị đo kích cỡ vi mạch)"
          },
          {
            id: "l11-v-12",
            term: "一方通行",
            reading: "いっぽうつうこう",
            answer: "lưu thông một chiều",
            meaning: "lưu thông một chiều (đặc tính dòng điện qua đi-ốt)"
          },
          {
            id: "l11-v-13",
            term: "挟み込む",
            reading: "はさみこむ",
            answer: "kẹp vào giữa",
            meaning: "kẹp vào giữa (thao tác ghép tấm bán dẫn)"
          },
          {
            id: "l11-v-14",
            term: "削る",
            reading: "けずる",
            answer: "khoét, đục",
            meaning: "khoét, đục, khắc (khắc axit trên tấm silicon)"
          },
          {
            id: "l11-v-15",
            term: "仕組み",
            reading: "しくみ",
            answer: "cơ cấu, cấu tạo",
            meaning: "cơ cấu, cấu tạo, cơ chế hoạt động"
          },
          {
            id: "l11-v-16",
            term: "四方",
            reading: "しほう",
            answer: "bốn cạnh, tứ giác",
            meaning: "bốn cạnh, bốn hướng, tứ giác"
          },
          {
            id: "l11-v-17",
            term: "集積回路 (IC)",
            reading: "しゅうせきかいろ / Integrated Circuit",
            answer: "mạch tích hợp",
            meaning: "mạch tích hợp (IC - Integrated Circuit)"
          },
          {
            id: "l11-v-18",
            term: "真空管",
            reading: "しんくうかん",
            answer: "ống chân không",
            meaning: "ống chân không (linh kiện điện tử thế hệ thứ nhất)"
          },
          {
            id: "l11-v-19",
            term: "世代",
            reading: "せだい",
            answer: "thế hệ",
            meaning: "thế hệ (các giai đoạn phát triển phần cứng máy tính)"
          },
          {
            id: "l11-v-20",
            term: "大規模集積回路 (LSI)",
            reading: "だいきぼしゅうせきかいろ / Large Scale Integration",
            answer: "mạch tích hợp cỡ lớn",
            meaning: "mạch tích hợp cỡ lớn (LSI - thế hệ thứ 4)"
          },
          {
            id: "l11-v-21",
            term: "単結晶",
            reading: "たんけっしょう",
            answer: "đơn kết tinh",
            meaning: "đơn kết tinh (mạng tinh thể silicon đồng nhất)"
          },
          {
            id: "l11-v-22",
            term: "単純な",
            reading: "たんじゅんな",
            answer: "đơn thuần, đơn giản",
            meaning: "đơn thuần, đơn giản"
          },
          {
            id: "l11-v-23",
            term: "断面",
            reading: "だんめん",
            answer: "mặt cắt",
            meaning: "mặt cắt, thiết diện"
          },
          {
            id: "l11-v-24",
            term: "電球",
            reading: "でんきゅう",
            answer: "bóng điện",
            meaning: "bóng điện tròn"
          },
          {
            id: "l11-v-25",
            term: "電極",
            reading: "でんきょく",
            answer: "điện cực",
            meaning: "điện cực (anốt & catốt)"
          },
          {
            id: "l11-v-26",
            term: "電源ランプ",
            reading: "でんげんランプ / Power indicator lamp",
            answer: "đèn nguồn điện",
            meaning: "đèn nguồn điện, đèn báo nguồn"
          },
          {
            id: "l11-v-27",
            term: "電流",
            reading: "でんりゅう",
            answer: "điện lưu (dòng điện)",
            meaning: "điện lưu, dòng điện"
          },
          {
            id: "l11-v-28",
            term: "動作原理",
            reading: "どうさげんり",
            answer: "nguyên lý hoạt động",
            meaning: "nguyên lý hoạt động"
          },
          {
            id: "l11-v-29",
            term: "熱する",
            reading: "ねっする",
            answer: "phát nhiệt",
            meaning: "phát nhiệt, làm nóng"
          },
          {
            id: "l11-v-30",
            term: "発光ダイオード (LED)",
            reading: "はっこうダイオード / Light Emitting Diode",
            answer: "đi ốt phát quang",
            meaning: "đi ốt phát quang (LED)"
          },
          {
            id: "l11-v-31",
            term: "半導体",
            reading: "はんどうたい",
            answer: "bán dẫn",
            meaning: "chất bán dẫn"
          },
          {
            id: "l11-v-32",
            term: "反対方向",
            reading: "はんたいほうこう",
            answer: "chiều ngược lại",
            meaning: "chiều ngược lại, hướng đối diện"
          },
          {
            id: "l11-v-33",
            term: "変遷",
            reading: "へんせん",
            answer: "sự thăng trầm, quá trình phát triển",
            meaning: "sự thăng trầm, chuyển biến, quá trình biến đổi lịch sử"
          },
          {
            id: "l11-v-34",
            term: "余る",
            reading: "あまる (amaru)",
            answer: "thừa",
            meaning: "thừa thãi, dư thừa"
          },
          {
            id: "l11-v-35",
            term: "論理積",
            reading: "ろんりせき (ronriseki)",
            answer: "lô gic tích (AND)",
            meaning: "phép nhân logic, lô gic tích (phép toán logic AND)"
          },
          {
            id: "l11-v-36",
            term: "論理素子",
            reading: "ろんりそし (ronrisoshi)",
            answer: "mạch lô gic / phần tử logic",
            meaning: "mạch lô gic, phần tử logic (linh kiện logic cơ bản chế tạo CPU)"
          },
          {
            id: "l11-v-37",
            term: "論理和",
            reading: "ろんりわ (ronriwa)",
            answer: "lô gic hợp (OR)",
            meaning: "phép cộng logic, lô gic hợp (phép toán logic OR)"
          }
        ]
      },
      {
        id: "lesson-11-multiple-choice",
        title: "Trắc nghiệm",
        type: "multiple_choice",
        items: [
          {
            id: "l11-mc-1",
            question: "チューリングマシンは何からなりますか。",
            choices: [
              "テープ、ヘッド、メモリ",
              "テープ、ヘッド",
              "テープ、ヘッド、メモリ、CPU",
              "テープ、ヘッド、マス目"
            ],
            answer: "テープ、ヘッド、メモリ"
          },
          {
            id: "l11-mc-2",
            question: "空気を抜いたガラス管の中にヒータと電極を閉じこめたものは何ですか。",
            choices: [
              "真空管",
              "ダイオード",
              "トランジスタ",
              "大規模集積回路"
            ],
            answer: "真空管"
          },
          {
            id: "l11-mc-3",
            question: "コンピューターの基本回路に何がありますか。",
            choices: [
              "OR回路、AND回路",
              "OR回路、AND回路、NOT回路",
              "OR回路、NOT回路",
              "OR回路、AND回路、NO回路"
            ],
            answer: "OR回路、AND回路、NOT回路"
          },
          {
            id: "l11-mc-4",
            question: "ICについて正しいものをえらんでください。",
            choices: [
              "大規模集積回路である",
              "第2世代の論理素子である",
              "ヒータで熱すると電極から電子が飛び出しやすい",
              "集積回路である"
            ],
            answer: "集積回路である"
          },
          {
            id: "l11-mc-5",
            question: "真空管の機能は何ですか。",
            choices: [
              "電流を二方通行にすること",
              "電流を一方通行にすること",
              "逆向きに電流を流すこと",
              "電極から電子を出すこと"
            ],
            answer: "電流を一方通行にすること"
          },
          {
            id: "l11-mc-6",
            question: "CPUの動作原理は何に基づいていますか。",
            choices: [
              "オートマトン",
              "ダイオード",
              "トランジスタ",
              "チューリングマシン"
            ],
            answer: "チューリングマシン"
          },
          {
            id: "l11-mc-7",
            question: "大規模集積回路は何世代の論理素子でしょう。",
            choices: [
              "第1世代",
              "第2世代",
              "第3世代",
              "第4世代"
            ],
            answer: "第4世代"
          },
          {
            id: "l11-mc-8",
            question: "OR回路とは，スイッチが（　　　）に並んだ回路としてモデル化されます。",
            choices: [
              "直列",
              "平行",
              "並列",
              "直接"
            ],
            answer: "並列"
          },
          {
            id: "l11-tf-1",
            question: "真空管は第２世代の論理素子である。",
            choices: ["Đúng", "Sai"],
            answer: "Sai",
            explanation: "真空管は第1世代の論理素子 (真空管 = Thế hệ 1, Transistor = Thế hệ 2, IC = Thế hệ 3, LSI = Thế hệ 4)."
          },
          {
            id: "l11-tf-2",
            question: "AND回路の演算のことを論理和と言います",
            choices: ["Đúng", "Sai"],
            answer: "Sai",
            explanation: "AND回路は論理積 (Conjunction) です. 論理和 (Disjunction) はOR回路です."
          },
          {
            id: "l11-tf-3",
            question: "OR回路の演算のことを論理和と言います",
            choices: ["Đúng", "Sai"],
            answer: "Đúng",
            explanation: "OR回路は論理和 (Disjunction) です."
          },
          {
            id: "l11-tf-4",
            question: "LSIは大規模集積回路です。",
            choices: ["Đúng", "Sai"],
            answer: "Đúng",
            explanation: "LSI viết tắt của Large Scale Integration, nghĩa là mạch tích hợp quy mô lớn (大規模集積回路)."
          },
          {
            id: "l11-tf-5",
            question: "チューリングマシンはヘッド、メモリから構造されますか。",
            choices: ["Đúng", "Sai"],
            answer: "Sai",
            explanation: "チューリングマシンはテープ (Tape), ヘッド (Head), メモリ (Memory - bảng trạng thái) từ 3 yếu tố này cấu tạo thành."
          }
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Bài 12",
    sections: []
  },
  {
    id: 13,
    title: "Bài 13 - Mã chữ, Hệ điều hành & Đơn vị đo",
    sections: [
      {
        id: "lesson-13-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          {
            id: "l13-v-1",
            term: "ASCII コード",
            reading: "ASCII code",
            answer: "bảng mã ASCII",
            meaning: "bảng mã ASCII"
          },
          {
            id: "l13-v-2",
            term: "アスキー",
            reading: "ASCII",
            answer: "bảng mã ASCII (phiên âm tiếng Nhật)",
            meaning: "bảng mã ASCII"
          },
          {
            id: "l13-v-3",
            term: "EBCDIC コード",
            reading: "EBCDIC code",
            answer: "bảng mã EBCDIC",
            meaning: "bảng mã EBCDIC (dùng cho máy tính lớn IBM)"
          },
          {
            id: "l13-v-4",
            term: "EUCコード",
            reading: "EUC code",
            answer: "bảng mã EUC",
            meaning: "bảng mã EUC (mã chữ tiếng Nhật dùng nhiều trên UNIX)"
          },
          {
            id: "l13-v-5",
            term: "JIS コード",
            reading: "JIS code",
            answer: "bảng mã chuẩn công nghiệp Nhật Bản",
            meaning: "bảng mã chuẩn công nghiệp Nhật Bản (Japan Industrial Standards)"
          },
          {
            id: "l13-v-6",
            term: "感嘆符 (かんたんふ)",
            reading: "かんたんふ",
            answer: "dấu chấm than ！",
            meaning: "dấu chấm than ！"
          },
          {
            id: "l13-v-7",
            term: "エクスクラメーションマーク",
            reading: "Exclamation mark",
            answer: "dấu chấm than ！",
            meaning: "dấu chấm than ！"
          },
          {
            id: "l13-v-8",
            term: "ダラー",
            reading: "Dollar",
            answer: "ký hiệu đô la ＄",
            meaning: "ký hiệu đô la ＄"
          },
          {
            id: "l13-v-9",
            term: "ドル",
            reading: "Dollar",
            answer: "đô la / ký hiệu đô la ＄",
            meaning: "tiền đô la, ký hiệu đô la ＄"
          },
          {
            id: "l13-v-10",
            term: "ドルマーク",
            reading: "Dollar mark",
            answer: "ký hiệu đô la ＄",
            meaning: "ký hiệu đô la ＄"
          },
          {
            id: "l13-v-11",
            term: "シャープ",
            reading: "Sharp",
            answer: "Thăng ＃",
            meaning: "ký tự Thăng ＃"
          },
          {
            id: "l13-v-12",
            term: "井桁 (いげた)",
            reading: "いげた",
            answer: "Thăng ＃",
            meaning: "ký tự Thăng ＃ (hình cái giếng gỗ)"
          },
          {
            id: "l13-v-13",
            term: "オペレーティングシステム",
            reading: "Operating System",
            answer: "hệ điều hành",
            meaning: "hệ điều hành (OS)"
          },
          {
            id: "l13-v-14",
            term: "キロバイト",
            reading: "Kilobyte",
            answer: "kilobyte",
            meaning: "đơn vị đo bộ nhớ kilobyte (KB)"
          },
          {
            id: "l13-v-15",
            term: "コード体系",
            reading: "コードたいけい",
            answer: "hệ thống mã",
            meaning: "hệ thống mã hóa, cấu trúc mã chữ"
          },
          {
            id: "l13-v-16",
            term: "シフトJISコード",
            reading: "Shift-JIS code",
            answer: "mã Shift-JIS chuyển dịch",
            meaning: "mã Shift-JIS chuyển dịch (chuẩn mã hóa tiếng Nhật phổ biến)"
          },
          {
            id: "l13-v-17",
            term: "テラバイト",
            reading: "Terabyte",
            answer: "terabyte",
            meaning: "đơn vị đo bộ nhớ terabyte (TB)"
          },
          {
            id: "l13-v-18",
            term: "バイト",
            reading: "Byte",
            answer: "byte",
            meaning: "đơn vị đo bộ nhớ byte (B = 8 bits)"
          },
          {
            id: "l13-v-19",
            term: "ビット",
            reading: "Bit",
            answer: "bit",
            meaning: "đơn vị đo nhỏ nhất bit (0 hoặc 1)"
          },
          {
            id: "l13-v-20",
            term: "メガバイト",
            reading: "Megabyte",
            answer: "megabyte",
            meaning: "đơn vị đo bộ nhớ megabyte (MB)"
          },
          {
            id: "l13-v-21",
            term: "解釈する",
            reading: "かいしゃくする",
            answer: "lý giải, hiểu",
            meaning: "lý giải, giải nghĩa, thông dịch"
          },
          {
            id: "l13-v-22",
            term: "改行コード",
            reading: "かいぎょうコード",
            answer: "mã xuống dòng",
            meaning: "mã xuống dòng (ký tự CR, LF biểu thị xuống dòng)"
          },
          {
            id: "l13-v-23",
            term: "客観的",
            reading: "きゃっかんてき",
            answer: "mang tính khách quan",
            meaning: "mang tính khách quan"
          },
          {
            id: "l13-v-24",
            term: "区別する",
            reading: "くべつする",
            answer: "phân biệt",
            meaning: "phân biệt, phân chia"
          },
          {
            id: "l13-v-25",
            term: "行を変える",
            reading: "ぎょうをかえる",
            answer: "xuống dòng",
            meaning: "đổi dòng, xuống dòng mới"
          },
          {
            id: "l13-v-26",
            term: "最小単位",
            reading: "さいしょうたんい",
            answer: "đơn vị nhỏ nhất",
            meaning: "đơn vị cơ bản nhỏ nhất"
          },
          {
            id: "l13-v-27",
            term: "指摘する",
            reading: "してきする",
            answer: "chỉ ra, chỉ trích",
            meaning: "chỉ ra, xác định lỗi hoặc điểm trọng yếu"
          },
          {
            id: "l13-v-28",
            term: "主観的",
            reading: "しゅかんてき",
            answer: "mang tính chủ quan",
            meaning: "mang tính cá nhân, chủ quan"
          },
          {
            id: "l13-v-29",
            term: "性能",
            reading: "せいのう",
            answer: "tính năng / hiệu năng",
            meaning: "tính năng, hiệu năng hoạt động của thiết bị"
          },
          {
            id: "l13-v-30",
            term: "測る",
            reading: "はかる",
            answer: "đo",
            meaning: "đo đạc, cân đo đong đếm"
          },
          {
            id: "l13-v-31",
            term: "統一的",
            reading: "とういつてき",
            answer: "tính thống nhất",
            meaning: "mang tính thống nhất, đồng bộ"
          },
          {
            id: "l13-v-32",
            term: "避ける",
            reading: "さける",
            answer: "tránh",
            meaning: "tránh né, ngăn chặn"
          },
          {
            id: "l13-v-33",
            term: "文字化け",
            reading: "もじばけ",
            answer: "lỗi phông chữ",
            meaning: "lỗi hiển thị phông chữ, chữ bị biến dạng mã hóa"
          }
        ]
      },
      {
        id: "lesson-13-multiple-choice",
        title: "Trắc nghiệm",
        type: "multiple_choice",
        items: [
          {
            id: "l13-mc-1",
            question: "2.情報量の最小単位は何ですか。",
            choices: ["ビット", "バイト", "ギガバイト", "テラバイト"],
            answer: "ビット"
          },
          {
            id: "l13-mc-2",
            question: "1.日本語の場合には，英文字よりも情報量がどうなりますか。",
            choices: ["大幅に数が減る", "小幅に数が減る", "小幅に数が増える", "大幅に数が増える"],
            answer: "大幅に数が増える"
          },
          {
            id: "l13-mc-3",
            question: "4．アルファベット1文字の情報量はどうなりますか。",
            choices: ["8 bit = 1 byte", "16 bit = 2 byte", "8 bit = 2 byte", "16 bit = 1 byte"],
            answer: "8 bit = 1 byte"
          },
          {
            id: "l13-mc-4",
            question: "3.情報量の最大単位は何ですか。",
            choices: ["ビット", "バイト", "ギガバイト", "テラバイト"],
            answer: "テラバイト"
          },
          {
            id: "l13-mc-5",
            question: "6.コンピュータのデータは何の並びで表現された数字ですか。",
            choices: ["00と11", "01と10", "0と1", "0と10"],
            answer: "0と1"
          },
          {
            id: "l13-mc-6",
            question: "5.データの数字と文字の対応を決めているのは何ですか。",
            choices: ["文字コード", "数字コード", "漢字コード", "エンコード"],
            answer: "文字コード"
          },
          {
            id: "l13-mc-7",
            question: "8.日本語でのコードではないのは何ですか。",
            choices: ["JISコード", "ASCIIコード", "シフトJISコード", "EUCコード"],
            answer: "ASCIIコード"
          },
          {
            id: "l13-mc-8",
            question: "7.現在、日本語にはひらがな、カタカナ、漢字などを含めていくつの文字にコード番号が割り当てられていますか。",
            choices: ["63,536", "65,535", "63,535", "65,536"],
            answer: "65,536"
          },
          {
            id: "l13-mc-9",
            question: "データを解釈するときには，どの文字コードを使うべきなのかを知れば正しく表示できます。",
            choices: ["Đúng", "Sai"],
            answer: "Đúng"
          },
          {
            id: "l13-mc-10",
            question: "9.日本語1文字を表す情報量はどうなりますか。",
            choices: ["2バイト", "1バイト", "24ビット", "8ビット"],
            answer: "2バイト"
          }
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Bài 14 - Biểu diễn Âm thanh & Hình ảnh",
    sections: [
      {
        id: "lesson-14-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          {
            id: "l14-v-1",
            term: "DPI (Dot Per Inch)",
            reading: "DPI",
            answer: "đơn vị chỉ số lượng điểm trên một inch",
            meaning: "đơn vị mật độ điểm ảnh chỉ số lượng điểm (dot) trên một inch"
          },
          {
            id: "l14-v-2",
            term: "MIDI (Musical Instrument Digital Interface)",
            reading: "MIDI",
            answer: "giao diện kỹ thuật số dành cho nhạc cụ",
            meaning: "giao diện kỹ thuật số dành cho nhạc cụ (chuẩn truyền tin nhạc cụ)"
          },
          {
            id: "l14-v-3",
            term: "VGA (Video Graphics Array)",
            reading: "VGA",
            answer: "chuẩn hiển thị đồ họa máy tính",
            meaning: "chuẩn hiển thị đồ họa máy tính đời cũ"
          },
          {
            id: "l14-v-4",
            term: "きめ細かい",
            reading: "きめこまかい",
            answer: "tỉ mỉ / mịn màng",
            meaning: "tỉ mỉ, mịn màng, chi tiết"
          },
          {
            id: "l14-v-5",
            term: "インクジェットプリンタ",
            reading: "Inkjet printer",
            answer: "máy in phun",
            meaning: "máy in phun mực"
          },
          {
            id: "l14-v-6",
            term: "カーキ色",
            reading: "カーキいろ",
            answer: "màu đất / màu kaki",
            meaning: "màu đất, màu kaki"
          },
          {
            id: "l14-v-7",
            term: "サンプリング周波数",
            reading: "サンプリングしゅうはすう",
            answer: "tần số lấy mẫu",
            meaning: "tần số lấy mẫu (tần số lượng tử hóa âm thanh)"
          },
          {
            id: "l14-v-8",
            term: "パラパラ漫画",
            reading: "パラパラまんが",
            answer: "truyện tranh động",
            meaning: "truyện tranh lật trang tạo chuyển động động"
          },
          {
            id: "l14-v-9",
            term: "ピクセル",
            reading: "Pixel",
            answer: "điểm ảnh",
            meaning: "điểm ảnh (pixel)"
          },
          {
            id: "l14-v-10",
            term: "ヘルツ",
            reading: "Hertz",
            answer: "héc (đơn vị đo tần số)",
            meaning: "héc (đơn vị tần số Hz)"
          },
          {
            id: "l14-v-11",
            term: "モジュレーション",
            reading: "Modulation",
            answer: "biến điệu, chuyển điệu",
            meaning: "biến điệu âm thanh, chuyển điệu nhạc"
          },
          {
            id: "l14-v-12",
            term: "音源",
            reading: "おんげん",
            answer: "nguồn âm thanh",
            meaning: "nguồn phát âm thanh, chip âm thanh"
          },
          {
            id: "l14-v-13",
            term: "音声",
            reading: "おんせい",
            answer: "âm thanh / giọng nói",
            meaning: "âm thanh, giọng nói phát ra"
          },
          {
            id: "l14-v-14",
            term: "音符",
            reading: "おんぷ",
            answer: "nốt nhạc",
            meaning: "nốt nhạc, ký hiệu âm nhạc"
          },
          {
            id: "l14-v-15",
            term: "強弱",
            reading: "きょうじゃく",
            answer: "mạnh yếu",
            meaning: "cường độ mạnh yếu"
          },
          {
            id: "l14-v-16",
            term: "原色",
            reading: "げんしょく",
            answer: "màu chính / màu gốc",
            meaning: "màu chính, màu nguyên bản (gốc)"
          },
          {
            id: "l14-v-17",
            term: "縦横",
            reading: "たてよこ",
            answer: "ngang dọc / dọc ngang",
            meaning: "chiều dọc và chiều ngang"
          },
          {
            id: "l14-v-18",
            term: "静止画像",
            reading: "せいしがぞう",
            answer: "hình ảnh tĩnh",
            meaning: "hình ảnh tĩnh (ảnh không chuyển động)"
          },
          {
            id: "l14-v-19",
            term: "接続端子",
            reading: "せつぞくたんし",
            answer: "đầu dây nối",
            meaning: "đầu kết nối, cổng cắm kết nối"
          },
          {
            id: "l14-v-20",
            term: "走査線",
            reading: "そうさせん",
            answer: "đường quét",
            meaning: "đường quét hình ảnh trên màn hình"
          },
          {
            id: "l14-v-21",
            term: "短冊",
            reading: "たんざく",
            answer: "mảnh giấy nhỏ, dài",
            meaning: "mảnh giấy nhỏ và dài"
          },
          {
            id: "l14-v-22",
            term: "着信メロディ",
            reading: "ちゃくしんメロディ",
            answer: "nhạc chuông",
            meaning: "nhạc chuông cuộc gọi đến"
          },
          {
            id: "l14-v-23",
            term: "動画像",
            reading: "どうがぞう",
            answer: "hình ảnh động",
            meaning: "hình ảnh chuyển động, video"
          },
          {
            id: "l14-v-24",
            term: "特殊なコード",
            reading: "とくしゅなコード",
            answer: "mã đặc trưng / mã đặc biệt",
            meaning: "mã hóa đặc trưng, mã đặc trưng"
          },
          {
            id: "l14-v-25",
            term: "量子化数",
            reading: "りょうしかすう",
            answer: "số lượng tử hóa",
            meaning: "số lượng tử hóa tín hiệu âm thanh"
          }
        ]
      },
      {
        id: "lesson-14-multiple-choice",
        title: "Trắc nghiệm",
        type: "multiple_choice",
        items: [
          {
            id: "l14-mc-1",
            question: "映画では1秒に何回の書き換えを行っていますか。",
            choices: ["12", "24", "48", "36"],
            answer: "24"
          },
          {
            id: "l14-mc-2",
            question: "デジタル画像は横に並んだ点の集まりとして表現されています。",
            choices: ["Đúng", "Sai"],
            answer: "Sai"
          },
          {
            id: "l14-mc-3",
            question: "1画素の情報量は何ビットとなりますか。",
            choices: ["8", "16", "24", "48"],
            answer: "24"
          },
          {
            id: "l14-mc-4",
            question: "（　　　　　）を構成する点をピクセルと言います。",
            choices: ["音符", "音声", "画面", "画像"],
            answer: "画像"
          },
          {
            id: "l14-mc-5",
            question: "画素数が小さいほどきれいな画像が得られます。",
            choices: ["Đúng", "Sai"],
            answer: "Sai"
          },
          {
            id: "l14-mc-6",
            question: "（　　　　　）のことをサンプリング周波数と言います。",
            choices: ["時間計算", "時間計画", "時間間隔", "時間割合"],
            answer: "時間間隔"
          },
          {
            id: "l14-mc-7",
            question: "パソコンや携帯電話の液晶画面では何色の小さな短冊が集まっていますか。",
            choices: ["3", "2", "5", "6"],
            answer: "3"
          },
          {
            id: "l14-mc-8",
            question: "着信メロディは高音質な楽曲再生が可能です。",
            choices: ["Đúng", "Sai"],
            answer: "Đúng"
          },
          {
            id: "l14-mc-9",
            question: "アナログ量である波をデジタル化するために，一定の細かい時間間隔で何を測りますか。",
            choices: ["波の高さ", "波の長さ", "情報の高さ", "音の長さ"],
            answer: "波の高さ"
          },
          {
            id: "l14-mc-10",
            question: "画素数が多いほど、ぎざぎざが多い。",
            choices: ["Đúng", "Sai"],
            answer: "Sai"
          },
          {
            id: "l14-mc-11",
            question: "量子化数が大きいと情報量がどうなりますか。",
            choices: ["少なくなります", "多くなります", "広くなります", "小さくなります"],
            answer: "多くなります"
          },
          {
            id: "l14-mc-12",
            question: "1 kHz=10,000Hz",
            choices: ["Đúng", "Sai"],
            answer: "Sai"
          },
          {
            id: "l14-mc-13",
            question: "ヘルツは1秒あたりの波（音）の高さの測定回数を表します。",
            choices: ["Đúng", "Sai"],
            answer: "Đúng"
          },
          {
            id: "l14-mc-14",
            question: "MIDIはどんなコードですか。",
            choices: [
              "画像のための特殊なコードです",
              "音楽のための簡単なコードです",
              "画像のための簡単なコードです",
              "音楽のための特殊なコードです"
            ],
            answer: "音楽のための特殊なコードです"
          },
          {
            id: "l14-mc-15",
            question: "画素は画像を構成する点です。",
            choices: ["Đúng", "Sai"],
            answer: "Đúng"
          }
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Bài 15 - Nén dữ liệu & Truyền dữ liệu",
    sections: [
      {
        id: "lesson-15-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          {
            id: "l15-v-1",
            term: "BPS (Bit Per Second)",
            reading: "BPS",
            answer: "bit trên giây",
            meaning: "bit trên giây (đơn vị đo tốc độ truyền dữ liệu)"
          },
          {
            id: "l15-v-2",
            term: "CRC (Cyclic Redundancy Check)",
            reading: "CRC",
            answer: "kiểm tra độ dư vòng",
            meaning: "Cyclic Redundancy Check (thuật toán kiểm tra lỗi truyền tin)"
          },
          {
            id: "l15-v-3",
            term: "巡回冗長検査",
            reading: "じゅんかいじょうちょうけんさ",
            answer: "kiểm tra độ dư vòng (CRC)",
            meaning: "kiểm tra độ dư vòng (Cyclic Redundancy Check)"
          },
          {
            id: "l15-v-4",
            term: "GIF形式",
            reading: "GIFけいしき",
            answer: "định dạng GIF",
            meaning: "định dạng GIF (Graphics Interchange Format, hỗ trợ ảnh động nhẹ)"
          },
          {
            id: "l15-v-5",
            term: "JPEG形式",
            reading: "JPEGけいしき",
            answer: "định dạng JPEG",
            meaning: "định dạng JPEG (Joint Photographic Experts Group, nén ảnh tĩnh có hao hao)"
          },
          {
            id: "l15-v-6",
            term: "MPEG形式",
            reading: "MPEGけいしき",
            answer: "định dạng MPEG",
            meaning: "định dạng MPEG (Motion Picture Experts Group, chuẩn nén video)"
          },
          {
            id: "l15-v-7",
            term: "アスキー形式",
            reading: "アスキーけいしき",
            answer: "dạng văn bản ASCII",
            meaning: "chuẩn truyền/lưu dữ liệu văn bản ASCII"
          },
          {
            id: "l15-v-8",
            term: "コネクタ端子",
            reading: "コネクタたんし",
            answer: "đầu cắm kết nối",
            meaning: "đầu cắm kết nối, đầu dây nối"
          },
          {
            id: "l15-v-9",
            term: "スムーズ",
            reading: "Smooth",
            answer: "trôi chảy / mượt mà",
            meaning: "trôi chảy, mượt mà"
          },
          {
            id: "l15-v-10",
            term: "トレードオフ",
            reading: "Trade-off",
            answer: "sự cân bằng đánh đổi",
            meaning: "sự đánh đổi, cân bằng giữa lợi và hại"
          },
          {
            id: "l15-v-11",
            term: "バイナリ形式",
            reading: "バイナリけいしき",
            answer: "định dạng nhị phân",
            meaning: "định dạng nhị phân (binary, không thể đọc trực tiếp bằng text editor)"
          },
          {
            id: "l15-v-12",
            term: "パリティチェック",
            reading: "Parity check",
            answer: "kiểm tra chẵn lẻ",
            meaning: "phương pháp kiểm tra lỗi chẵn lẻ (Parity check)"
          },
          {
            id: "l15-v-13",
            term: "パリティビット",
            reading: "Parity bit",
            answer: "bit chẵn lẻ / bit bậc",
            meaning: "bit chẵn lẻ dùng để phát hiện lỗi"
          },
          {
            id: "l15-v-14",
            term: "フーリエ変換",
            reading: "フーリエへんかん",
            answer: "biến đổi Fourier",
            meaning: "biến đổi Fourier (chuyển đổi tín hiệu sang miền tần số)"
          },
          {
            id: "l15-v-15",
            term: "プロセッサー",
            reading: "Processor",
            answer: "bộ xử lý",
            meaning: "bộ xử lý trung tâm (CPU, vi xử lý)"
          },
          {
            id: "l15-v-16",
            term: "ランレングス圧縮",
            reading: "ランレングスあっしゅく",
            answer: "phương pháp mã hoá độ dài loạt (RLE)",
            meaning: "phương pháp nén mã hoá độ dài loạt (Run-Length Encoding)"
          },
          {
            id: "l15-v-17",
            term: "奇数パリティ",
            reading: "きすうパリティ",
            answer: "bậc kiểm tra lẻ /奇数 parity",
            meaning: "kiểm chẵn lẻ dạng lẻ (số lượng bit 1 là số lẻ)"
          },
          {
            id: "l15-v-18",
            term: "偽色",
            reading: "ぎしょく",
            answer: "màu sai / màu giả",
            meaning: "màu sai lệch, màu giả xuất hiện do nén ảnh"
          },
          {
            id: "l15-v-19",
            term: "狭帯域",
            reading: "きょうたいいき",
            answer: "dải tần hẹp",
            meaning: "băng thông hẹp, dải hẹp"
          },
          {
            id: "l15-v-20",
            term: "ナローバンド",
            reading: "Narrowband",
            answer: "dải hẹp / băng thông hẹp",
            meaning: "băng thông hẹp, dải hẹp (Narrowband)"
          },
          {
            id: "l15-v-21",
            term: "偶数パリティ",
            reading: "ぐうすうパリティ",
            answer: "bậc kiểm tra chẵn / 偶数 parity",
            meaning: "kiểm chẵn lẻ dạng chẵn (số lượng bit 1 là số chẵn)"
          },
          {
            id: "l15-v-22",
            term: "検出",
            reading: "けんしゅつ",
            answer: "tìm ra / phát hiện",
            meaning: "tìm ra, dò tìm, phát hiện ra lỗi"
          },
          {
            id: "l15-v-23",
            term: "広帯域",
            reading: "こうたいいき",
            answer: "băng thông rộng",
            meaning: "băng thông rộng, dải rộng"
          },
          {
            id: "l15-v-24",
            term: "ブロードバンド",
            reading: "Broadband",
            answer: "băng thông rộng / dải rộng",
            meaning: "mạng băng thông rộng (Broadband)"
          },
          {
            id: "l15-v-25",
            term: "差分",
            reading: "さぶん",
            answer: "phần khác nhau / độ chênh lệch",
            meaning: "phần khác biệt, độ chênh lệch dữ liệu giữa 2 phiên bản"
          },
          {
            id: "l15-v-26",
            term: "車線",
            reading: "しゃせん",
            answer: "làn xe / làn đường",
            meaning: "làn xe chạy trên đường"
          },
          {
            id: "l15-v-27",
            term: "瞬間",
            reading: "しゅんかん",
            answer: "khoảnh khắc / chốc lát",
            meaning: "khoảnh khắc, giây lát, tức thời"
          },
          {
            id: "l15-v-28",
            term: "正弦波",
            reading: "せいげんは",
            answer: "sóng hình sin",
            meaning: "sóng hình sin (sóng tuần hoàn cơ bản)"
          },
          {
            id: "l15-v-29",
            term: "損なう",
            reading: "そこなう",
            answer: "làm tổn hại / làm hỏng",
            meaning: "làm tổn hại, làm hư hỏng, đánh mất"
          },
          {
            id: "l15-v-30",
            term: "体感",
            reading: "たいかん",
            answer: "cảm nhận thực tế",
            meaning: "cảm nhận cơ thể, cảm giác thực tế của người dùng"
          },
          {
            id: "l15-v-31",
            term: "判定",
            reading: "はんてい",
            answer: "sự phán đoán / sự phân định",
            meaning: "sự phán đoán, phân định, đánh giá đúng sai"
          },
          {
            id: "l15-v-32",
            term: "汎用性",
            reading: "はんようせい",
            answer: "tính đa dụng / tính phổ quát",
            meaning: "tính vạn năng, tính đa dụng, dễ tương thích rộng rãi"
          },
          {
            id: "l15-v-33",
            term: "微細",
            reading: "びさい",
            answer: "rất nhỏ / vi mô",
            meaning: "vô cùng nhỏ, tinh vi, vi mô"
          },
          {
            id: "l15-v-34",
            term: "不可逆",
            reading: "ふかぎゃく",
            answer: "không thể đảo ngược",
            meaning: "không thể đảo ngược (phương pháp nén có hao tổn dữ liệu)"
          },
          {
            id: "l15-v-35",
            term: "付着",
            reading: "ふちゃく",
            answer: "kèm theo / bám dính",
            meaning: "bám dính, kèm theo"
          }
        ]
      },
      {
        id: "lesson-15-multiple-choice",
        title: "Trắc nghiệm",
        type: "multiple_choice",
        items: [
          {
            id: "l15-mc-1",
            question: "圧縮・解凍ソフトによってファイルを圧縮すると，圧縮方式に応じてファイル名の拡張子は何になりますか。",
            choices: ["RAR", "XLSX", "DOC", "PDF"],
            answer: "RAR"
          },
          {
            id: "l15-mc-2",
            question: "音声を圧縮するには，（　　　　）の波としての性質を使います。",
            choices: ["電気", "色", "音", "動画"],
            answer: "音"
          },
          {
            id: "l15-mc-3",
            question: "ランレングス圧縮は最も単純な画像圧縮方式の1つです。",
            choices: ["Đúng", "Sai"],
            answer: "Đúng"
          },
          {
            id: "l15-mc-4",
            question: "通信速度のような転送レートを測るときには、1秒あたりのbit数で数え、何を使いますか。",
            choices: ["Mbps", "Pbs", "Kbps", "Bps"],
            answer: "Bps"
          },
          {
            id: "l15-mc-5",
            question: "一般に100 Kbps～1 Mbps以上の通信速度をブロードバンドと言います。",
            choices: ["Đúng", "Sai"],
            answer: "Đúng"
          },
          {
            id: "l15-mc-6",
            question: "100メガの光ファイバなどと宣伝されているのは，正確には通信速度が最大100 Mbpsという意味です。",
            choices: ["Đúng", "Sai"],
            answer: "Đúng"
          },
          {
            id: "l15-mc-7",
            question: "帯域が広いほどデータがどう流れますか。",
            choices: ["高速に流れます", "低速に流れます", "スムーズに流れます", "きれいに流れます"],
            answer: "高速に流れます"
          },
          {
            id: "l15-mc-8",
            question: "動画像情報圧縮では，何がよく用いられますか。",
            choices: ["GIF", "MPEG", "JPEG", "MP3"],
            answer: "MPEG"
          },
          {
            id: "l15-mc-9",
            question: "（　　　）を圧縮するには，音の波としての性質を使います。",
            choices: ["波長", "画像情報", "音声", "通信情報"],
            answer: "音声"
          },
          {
            id: "l15-mc-10",
            question: "誤り検出・訂正機構の中で，最も単純で基本的なのがパリティチェックによる誤り検出ですか。",
            choices: ["Đúng", "Sai"],
            answer: "Đúng"
          },
          {
            id: "l15-mc-11",
            question: "圧縮を伴う画像形式にはどのような形式がよく用いられますか。正しくないものを選びなさい。",
            choices: ["JPEG", "GIF", "PNG", "MPEG"],
            answer: "MPEG"
          },
          {
            id: "l15-mc-12",
            question: "低い周波数(波長が長い)の波は何を表しますか。",
            choices: ["元の波の小さな性質", "元の波の大きな性質", "元の波の詳細", "元の波の大まか"],
            answer: "元の波の大きな性質"
          },
          {
            id: "l15-mc-13",
            question: "ランレングス圧縮は色がいくつ並ぶかを記述する圧縮方式です。",
            choices: ["Đúng", "Sai"],
            answer: "Đúng"
          }
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Bài 16 - Lịch sử Hệ điều hành & Phần mềm",
    sections: [
      {
        id: "lesson-16-vocabulary",
        title: "Từ vựng (Flashcard)",
        type: "vocabulary",
        items: [
          {
            id: "l16-v-1",
            term: "グラフィカル ユーザインタフェース",
            reading: "Graphical User Interface",
            answer: "giao diện đồ họa người sử dụng",
            meaning: "giao diện đồ họa người sử dụng (GUI)"
          },
          {
            id: "l16-v-2",
            term: "BIOS",
            reading: "BIOS",
            answer: "hệ thống nhập, xuất cơ bản",
            meaning: "hệ thống nhập xuất cơ bản (Basic Input/Output System)"
          },
          {
            id: "l16-v-3",
            term: "バイオス",
            reading: "BIOS",
            answer: "hệ thống nhập, xuất cơ bản (phiên âm)",
            meaning: "hệ thống nhập xuất cơ bản (BIOS)"
          },
          {
            id: "l16-v-4",
            term: "GUI (Graphical User Interface)",
            reading: "GUI",
            answer: "hệ giao tiếp đồ họa",
            meaning: "giao diện đồ họa người dùng (Graphical User Interface)"
          },
          {
            id: "l16-v-5",
            term: "UNIX",
            reading: "UNIX",
            answer: "hệ điều hành UNIX",
            meaning: "hệ điều hành đa nhiệm đa người dùng phát triển từ thập niên 1970"
          },
          {
            id: "l16-v-6",
            term: "ユニックス",
            reading: "UNIX",
            answer: "hệ điều hành UNIX (phiên âm)",
            meaning: "hệ điều hành UNIX"
          },
          {
            id: "l16-v-7",
            term: "つかさどる",
            reading: "つかさどる",
            answer: "đảm nhiệm / quản lý",
            meaning: "đảm nhiệm, quản lý, điều khiển"
          },
          {
            id: "l16-v-8",
            term: "アプリケーションソフトウェア",
            reading: "Application Software",
            answer: "phần mềm ứng dụng",
            meaning: "phần mềm ứng dụng (phần mềm phục vụ tác vụ cụ thể của người dùng)"
          },
          {
            id: "l16-v-9",
            term: "ガレージ",
            reading: "Garage",
            answer: "ga-ra xe / nhà để xe",
            meaning: "ga-ra ô tô (được dùng để khởi nghiệp như Apple, Google)"
          },
          {
            id: "l16-v-10",
            term: "スケジューリング",
            reading: "Scheduling",
            answer: "lập lịch / lập chương trình",
            meaning: "lập lịch tiến trình của hệ điều hành (Scheduling)"
          },
          {
            id: "l16-v-11",
            term: "スティーブ・ウォズニアック",
            reading: "Steve Wozniak",
            answer: "Steven Gary Wozniak",
            meaning: "nhà đồng sáng lập Apple cùng Steve Jobs"
          },
          {
            id: "l16-v-12",
            term: "スティーブ・ジョブズ",
            reading: "Steve Jobs",
            answer: "Steven Jobs",
            meaning: "nhà đồng sáng lập kiêm cựu CEO huyền thoại của Apple"
          },
          {
            id: "l16-v-13",
            term: "スワッピング",
            reading: "Swapping",
            answer: "hoán đổi bộ nhớ",
            meaning: "kỹ thuật hoán đổi dữ liệu giữa RAM và bộ nhớ ảo trên đĩa cứng (Swapping)"
          },
          {
            id: "l16-v-14",
            term: "LINUX",
            reading: "Linux",
            answer: "hệ điều hành Linux",
            meaning: "hệ điều hành nguồn mở nhân Linux phát triển bởi Linus Torvalds"
          },
          {
            id: "l16-v-15",
            term: "リナックス",
            reading: "Linux",
            answer: "hệ điều hành Linux (phiên âm)",
            meaning: "hệ điều hành Linux"
          },
          {
            id: "l16-v-16",
            term: "フィンランド",
            reading: "Finland",
            answer: "Phần Lan",
            meaning: "nước Phần Lan (quê hương của Linus Torvalds)"
          },
          {
            id: "l16-v-17",
            term: "ブート",
            reading: "Boot",
            answer: "khởi động hệ thống",
            meaning: "khởi động hệ thống máy tính (Booting)"
          },
          {
            id: "l16-v-18",
            term: "プロセス",
            reading: "Process",
            answer: "tiến trình / quy trình",
            meaning: "tiến trình chương trình đang chạy trong bộ nhớ"
          },
          {
            id: "l16-v-19",
            term: "ベンチャー企業",
            reading: "ベンチャーきぎょう",
            answer: "doanh nghiệp tiên phong / khởi nghiệp",
            meaning: "doanh nghiệp khởi nghiệp, công nghiệp mạo hiểm"
          },
          {
            id: "l16-v-20",
            term: "マルチタスク",
            reading: "Multitask",
            answer: "đa nhiệm",
            meaning: "khả năng chạy nhiều tác vụ đồng thời của hệ điều hành"
          },
          {
            id: "l16-v-21",
            term: "マルチユーザ",
            reading: "Multi-user",
            answer: "đa người dùng",
            meaning: "hệ thống cho phép nhiều người sử dụng đồng thời"
          },
          {
            id: "l16-v-22",
            term: "ミドルウェア",
            reading: "Middleware",
            answer: "phần mềm trung gian",
            meaning: "phần mềm trung gian kết nối ứng dụng với hệ điều hành (Middleware)"
          },
          {
            id: "l16-v-23",
            term: "ミニコン",
            reading: "Minicomputer",
            answer: "máy tính mini",
            meaning: "máy tính cỡ trung (Minicomputer, phổ biến những năm 60-70)"
          },
          {
            id: "l16-v-24",
            term: "ユーザインターフェース",
            reading: "User Interface",
            answer: "giao diện người sử dụng",
            meaning: "giao diện người dùng (UI)"
          },
          {
            id: "l16-v-25",
            term: "リーナス・トーバルズ",
            reading: "Linus Torvalds",
            answer: "Linus Torvalds",
            meaning: "nhà khoa học máy tính người Phần Lan, cha đẻ của Linux"
          },
          {
            id: "l16-v-26",
            term: "一長一短",
            reading: "いっちょういったん",
            answer: "ưu điểm và nhược điểm",
            meaning: "có ưu điểm và nhược điểm song hành"
          },
          {
            id: "l16-v-27",
            term: "仮想記憶",
            reading: "かそうきおく",
            answer: "lưu trữ ảo / bộ nhớ ảo",
            meaning: "bộ nhớ ảo dùng đĩa cứng mở rộng cho RAM"
          },
          {
            id: "l16-v-28",
            term: "画期的",
            reading: "かっきてき",
            answer: "bước ngoặt / đột phá",
            meaning: "mang tính bước ngoặt, mở ra kỷ nguyên mới"
          },
          {
            id: "l16-v-29",
            term: "吸収する",
            reading: "きゅうしゅうする",
            answer: "hấp thu / tiếp thu",
            meaning: "hấp thu, tiếp nhận hoàn toàn"
          },
          {
            id: "l16-v-30",
            term: "巨大企業",
            reading: "きょだいきぎょう",
            answer: "doanh nghiệp lớn / tập đoàn khổng lồ",
            meaning: "tập đoàn khổng lồ, doanh nghiệp cực lớn"
          },
          {
            id: "l16-v-31",
            term: "競う",
            reading: "きそう",
            answer: "cạnh tranh / thi đua",
            meaning: "cạnh tranh, tranh đua lẫn nhau"
          },
          {
            id: "l16-v-32",
            term: "興す",
            reading: "おこす",
            answer: "phục hồi / chấn hưng",
            meaning: "phục hồi, chấn hưng, khởi nghiệp dựng cơ đồ"
          },
          {
            id: "l16-v-33",
            term: "参入する",
            reading: "さんにゅうする",
            answer: "gia nhập / hội nhập",
            meaning: "gia nhập thị trường, tham gia lĩnh vực mới"
          },
          {
            id: "l16-v-34",
            term: "実装",
            reading: "じっそう",
            answer: "lập trình / triển khai",
            meaning: "mã hóa, lập trình, triển khai thực tế trên phần cứng/phần mềm"
          },
          {
            id: "l16-v-35",
            term: "若干",
            reading: "じゃっかん",
            answer: "một chút / ít nhiều",
            meaning: "một vài, một ít, ít nhiều"
          },
          {
            id: "l16-v-36",
            term: "相違",
            reading: "そうい",
            answer: "sự khác nhau / độ chênh lệch",
            meaning: "sự khác biệt, sai khác lẫn nhau"
          },
          {
            id: "l16-v-37",
            term: "中身",
            reading: "なかみ",
            answer: "nội dung / thực chất",
            meaning: "nội dung bên trong, thực chất vấn đề"
          },
          {
            id: "l16-v-38",
            term: "仲介",
            reading: "ちゅうかい",
            answer: "trung gian / môi giới",
            meaning: "đóng vai trò trung gian, cầu nối"
          },
          {
            id: "l16-v-39",
            term: "搭載する",
            reading: "とうさいする",
            answer: "trang bị sẵn / lắp đặt kèm theo",
            meaning: "tích hợp sẵn, trang bị kèm theo thiết bị"
          },
          {
            id: "l16-v-40",
            term: "飛躍的に",
            reading: "ひやくてきに",
            answer: "tiến xa / nhảy vọt",
            meaning: "tiến bộ nhảy vọt, tiến xa một cách đột biến"
          },
          {
            id: "l16-v-41",
            term: "本質的な",
            reading: "ほんしつてきな",
            answer: "tính căn bản / bản chất",
            meaning: "thuộc về bản chất, mang tính nền tảng"
          },
          {
            id: "l16-v-42",
            term: "無償奉仕",
            reading: "むしょうほうし",
            answer: "cung cấp miễn phí / phục vụ phi lợi nhuận",
            meaning: "cống hiến miễn phí, làm việc tình nguyện"
          },
          {
            id: "l16-v-43",
            term: "迷う",
            reading: "まよう",
            answer: "băn khoăn / lạc đường",
            meaning: "băn khoăn không biết chọn gì, lạc lối"
          }
        ]
      },
      {
        id: "lesson-16-multiple-choice",
        title: "Trắc nghiệm",
        type: "multiple_choice",
        items: [
          {
            id: "l16-mc-1",
            question: "アプリケーションソフトとOSの中間的な位置付けとして、何と呼びますか。",
            choices: ["システムソフトウェア", "アプリケーションソフトウェア", "ミドルウェア", "ハードウェア"],
            answer: "ミドルウェア"
          },
          {
            id: "l16-mc-2",
            question: "OSの機能に属しないのは何ですか。",
            choices: ["ユーザインタフェース", "アプリケーション", "ソフトとハードの仲介", "記憶管理"],
            answer: "アプリケーション"
          },
          {
            id: "l16-mc-3",
            question: "マウスやキーボードの操作の仕方，ウィンドウの見え方，ファイルの扱い方などを決定するのは何ですか。",
            choices: ["ユーザインタフェース", "ソフトとハードの仲介", "アプリケーション", "記憶管理"],
            answer: "ユーザインタフェース"
          },
          {
            id: "l16-mc-4",
            question: "複数ユーザが利用するときには，ユーザ毎に利用環境を保存し，他人のファイルや情報へのアクセスを制限する（　　　　）機能が必要です。",
            choices: ["ユーザインタフェース", "ソフトとハードの仲介", "アプリケーション", "ユーザ管理"],
            answer: "ユーザ管理"
          },
          {
            id: "l16-mc-5",
            question: "OSの機能は何ですか。",
            choices: ["操作性を決めること", "記録の管理", "ハードウェアの相違を管理すること", "アプリケーシの管理"],
            answer: "操作性を決めること"
          },
          {
            id: "l16-mc-6",
            question: "OSの種類にビジネス用OSがあります。",
            choices: ["Đúng", "Sai"],
            answer: "Sai"
          },
          {
            id: "l16-mc-7",
            question: "OSはパソコンだけでなく，ハードディスクレコーダ，カーナビ，ゲーム機などの（　　　）にも組み込まれています。",
            choices: ["家電製品", "企業の電気製品", "学校の電気製品", "家具製品"],
            answer: "家電製品"
          },
          {
            id: "l16-mc-8",
            question: "複数のプログラムが同時に動くように管理することをマルチユーザと呼んでいます。",
            choices: ["Đúng", "Sai"],
            answer: "Sai"
          },
          {
            id: "l16-mc-9",
            question: "ソフトとハードの仲介という機能について正しいものをえらんでください。",
            choices: [
              "CPUの機能",
              "ハードウェアの相違を吸収します",
              "操作性を決めます",
              "マウスやキーボードの操作の仕方，ウィンドウの見え方，ファイルの扱い方などを決定します"
            ],
            answer: "ハードウェアの相違を吸収します"
          },
          {
            id: "l16-mc-10",
            question: "プロセス管理という機能について正しいものをえらんでください。",
            choices: ["CPUの機能", "ソフトウェアの作成を管理します", "操作性を決めます", "ソフトウェアの処理を管理します"],
            answer: "ソフトウェアの処理を管理します"
          },
          {
            id: "l16-mc-11",
            question: "Linuxについて正しくないものを選びなさい。",
            choices: ["OSの種類", "内部の情報が公開されない", "無償で使える", "企業のサーバ等に使われている"],
            answer: "内部の情報が公開されない"
          },
          {
            id: "l16-mc-12",
            question: "家電製品用のOSは販売台数が少ない。",
            choices: ["Đúng", "Sai"],
            answer: "Sai"
          },
          {
            id: "l16-mc-13",
            question: "システムソフトウェアはアプリケーションソフト以外のソフトウェアのことです。",
            choices: ["Đúng", "Sai"],
            answer: "Đúng"
          }
        ]
      }
    ]
  },
  {
    id: 17,
    title: "Bài 17",
    sections: []
  },
  {
    id: 18,
    title: "Bài 18",
    sections: []
  },
  {
    id: 19,
    title: "Bài 19",
    sections: []
  },
  {
    id: 20,
    title: "Bài 20",
    sections: []
  }
];
