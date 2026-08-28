export interface SplitFormula {
  toBe: {
    positive: string;
    negative: string;
    question: string;
  };
  ordinaryVerb: {
    positive: string;
    negative: string;
    question: string;
  };
}

export interface TenseItem {
  id: string;
  nameEn: string;
  nameVi: string;
  formula: string;
  negativeFormula: string;
  questionFormula: string;
  splitFormulas?: SplitFormula;
  usage: string;
  signalWords: string[];
  examples: Array<{ en: string; vi: string }>;
  tips: string;
}

export const engTensesData: TenseItem[] = [
  {
    id: 'present-simple',
    nameEn: 'Present Simple',
    nameVi: 'Thì Hiện Tại Đơn',
    formula: 'S + am/is/are... (To Be) / S + V(s/es) (Động từ thường)',
    negativeFormula: 'S + am/is/are + not... / S + do/does + not + V_0',
    questionFormula: 'Am/Is/Are + S...? / Do/Does + S + V_0?',
    splitFormulas: {
      toBe: {
        positive: 'S + am / is / are + N/Adj',
        negative: 'S + am / is / are + not + N/Adj',
        question: 'Am / Is / Are + S + N/Adj?'
      },
      ordinaryVerb: {
        positive: 'S + V(s/es)',
        negative: 'S + do / does + not + V_0',
        question: 'Do / Does + S + V_0?'
      }
    },
    usage: 'Diễn tả thói quen lặp đi lặp lại, sự thật hiển nhiên, chân lý, hoặc lịch trình cố định.',
    signalWords: ['always', 'usually', 'often', 'sometimes', 'never', 'every day/week/month', 'on Mondays'],
    examples: [
      { en: 'I am a student at Grade 9.', vi: 'Tôi là học sinh lớp 9. (To Be)' },
      { en: 'She is very hard-working.', vi: 'Cô ấy rất chăm chỉ. (To Be)' },
      { en: 'I study English every morning.', vi: 'Tôi học tiếng Anh mỗi buổi sáng. (Động từ thường)' },
      { en: 'The sun rises in the East.', vi: 'Mặt trời mọc ở hướng Đông. (Động từ thường)' },
      { en: 'She doesn’t eat meat.', vi: 'Cô ấy không ăn thịt. (Động từ thường)' }
    ],
    tips: '• Với TO BE: I + am | He/She/It/Danh từ số ít + is | We/You/They/Danh từ số nhiều + are.\n• Với ĐỘNG TỪ THƯỜNG: He/She/It/Danh từ số ít + V(s/es) | I/We/You/They + V_0.'
  },
  {
    id: 'present-continuous',
    nameEn: 'Present Continuous',
    nameVi: 'Thì Hiện Tại Tiếp Diễn',
    formula: 'S + am/is/are + V-ing',
    negativeFormula: 'S + am/is/are + not + V-ing',
    questionFormula: 'Am/Is/Are + S + V-ing?',
    usage: 'Diễn tả hành động đang xảy ra tại thời điểm nói hoặc kế hoạch đã thu xếp trong tương lai gần.',
    signalWords: ['now', 'right now', 'at the moment', 'at present', 'Look!', 'Listen!', 'Be quiet!'],
    examples: [
      { en: 'They are playing football in the yard right now.', vi: 'Bọn họ đang chơi bóng đá ngoài sân ngay lúc này.' },
      { en: 'Listen! Someone is ringing the doorbell.', vi: 'Nghe kìa! Ai đó đang bấm chuông cửa.' }
    ],
    tips: 'Các động từ chỉ cảm giác/sở hữu như know, like, want, understand thường KHÔNG dùng ở thì tiếp diễn.'
  },
  {
    id: 'present-perfect',
    nameEn: 'Present Perfect',
    nameVi: 'Thì Hiện Tại Hoàn Thành',
    formula: 'S + have/has + V_3/ed',
    negativeFormula: 'S + have/has + not + V_3/ed',
    questionFormula: 'Have/Has + S + V_3/ed?',
    usage: 'Diễn tả hành động đã xảy ra trong quá khứ nhưng kết quả vẫn liên quan đến hiện tại, hoặc diễn tả trải nghiệm.',
    signalWords: ['already', 'just', 'yet', 'ever', 'never', 'since + mốc thời gian', 'for + khoảng thời gian', 'so far', 'recently'],
    examples: [
      { en: 'I have lived in Hanoi since 2018.', vi: 'Tôi đã sống ở Hà Nội từ năm 2018.' },
      { en: 'She has already finished her English homework.', vi: 'Cô ấy đã hoàn thành bài tập tiếng Anh rồi.' },
      { en: 'Have you ever traveled to Japan?', vi: 'Bạn đã từng du lịch Nhật Bản chưa?' }
    ],
    tips: 'Dùng "since" với mốc thời gian (since 2020, since yesterday) và "for" với khoảng thời gian (for 5 years, for 2 days).'
  },
  {
    id: 'past-simple',
    nameEn: 'Past Simple',
    nameVi: 'Thì Quá Khứ Đơn',
    formula: 'S + was/were... (To Be) / S + V_2/ed (Động từ thường)',
    negativeFormula: 'S + was/were + not... / S + did + not + V_0',
    questionFormula: 'Was/Were + S...? / Did + S + V_0?',
    splitFormulas: {
      toBe: {
        positive: 'S + was / were + N/Adj',
        negative: 'S + was / were + not + N/Adj',
        question: 'Was / Were + S + N/Adj?'
      },
      ordinaryVerb: {
        positive: 'S + V_2 / V-ed',
        negative: 'S + did + not + V_0',
        question: 'Did + S + V_0?'
      }
    },
    usage: 'Diễn tả hành động đã xảy ra và kết thúc hoàn toàn tại một thời điểm xác định trong quá khứ.',
    signalWords: ['yesterday', 'last week/month/year', 'ago (2 days ago)', 'in 1999', 'when I was young'],
    examples: [
      { en: 'I was very tired yesterday.', vi: 'Hôm qua tôi đã rất mệt. (To Be)' },
      { en: 'They were in Paris last summer.', vi: 'Mùa hè năm ngoái họ ở Paris. (To Be)' },
      { en: 'We visited Ha Long Bay last summer.', vi: 'Chúng tôi đã thăm Vịnh Hạ Long mùa hè năm ngoái. (Động từ thường)' },
      { en: 'He bought a new car yesterday.', vi: 'Anh ấy đã mua một chiếc ô ô mới hôm qua. (Động từ thường)' }
    ],
    tips: '• Với TO BE: I / He / She / It / Danh từ số ít + was | We / You / They / Danh từ số nhiều + were.\n• Với ĐỘNG TỪ THƯỜNG: Dùng Did làm trợ động từ cho câu phủ định (-) và câu hỏi (?). Khi đã dùng Did/Didn’t thì động từ chính lùi về nguyên thể V_0.'
  },
  {
    id: 'past-continuous',
    nameEn: 'Past Continuous',
    nameVi: 'Thì Quá Khứ Tiếp Diễn',
    formula: 'S + was/were + V-ing',
    negativeFormula: 'S + was/were + not + V-ing',
    questionFormula: 'Was/Were + S + V-ing?',
    usage: 'Diễn tả hành động đang xảy ra tại một thời điểm cụ thể trong quá khứ, hoặc hành động đang xảy ra thì hành động khác cắt ngang.',
    signalWords: ['at 8 PM yesterday', 'at this time last year', 'when (+ Quá khứ đơn)', 'while (+ Quá khứ tiếp diễn)'],
    examples: [
      { en: 'I was reading a book at 9 PM yesterday.', vi: 'Tôi đang đọc sách lúc 9 giờ tối hôm qua.' },
      { en: 'While she was cooking, the phone rang.', vi: 'Trong khi cô ấy đang nấu ăn thì điện thoại reo.' }
    ],
    tips: 'Cấu trúc kinh điển: When + Quá khứ đơn, Quá khứ tiếp diễn | While + Quá khứ tiếp diễn, Quá khứ đơn.'
  },
  {
    id: 'past-perfect',
    nameEn: 'Past Perfect',
    nameVi: 'Thì Quá Khứ Hoàn Thành',
    formula: 'S + had + V_3/ed',
    negativeFormula: 'S + had + not (hadn’t) + V_3/ed',
    questionFormula: 'Had + S + V_3/ed?',
    usage: 'Diễn tả một hành động đã xảy ra và hoàn thành TRƯỚC một hành động khác hoặc một mốc thời gian trong quá khứ.',
    signalWords: ['by the time', 'before', 'after', 'by 8 PM yesterday', 'as soon as'],
    examples: [
      { en: 'By the time I arrived at the station, the train had left.', vi: 'Vào lúc tôi đến ga thì xe lửa đã rời đi mất rồi.' },
      { en: 'After he had finished his homework, he went to bed.', vi: 'Sau khi anh ấy đã hoàn thành bài tập về nhà, anh ấy đi ngủ.' }
    ],
    tips: 'Cấu trúc cần thuộc lòng: Before + Quá khứ đơn, Quá khứ hoàn thành | After + Quá khứ hoàn thành, Quá khứ đơn.'
  },
  {
    id: 'future-simple',
    nameEn: 'Future Simple',
    nameVi: 'Thì Tương Lai Đơn',
    formula: 'S + will + V_0',
    negativeFormula: 'S + will + not (won’t) + V_0',
    questionFormula: 'Will + S + V_0?',
    usage: 'Diễn tả dự đoán không có căn cứ, quyết định nảy ra ngay lúc nói, hoặc lời hứa/yêu cầu.',
    signalWords: ['tomorrow', 'next week/month', 'in the future', 'think', 'believe', 'hope', 'promise'],
    examples: [
      { en: 'I think it will rain tomorrow.', vi: 'Tôi nghĩ ngày mai trời sẽ mưa.' },
      { en: 'I will help you with your homework.', vi: 'Tôi sẽ giúp bạn làm bài tập về nhà.' }
    ],
    tips: 'Will ngắn gọn là \'ll (I\'ll, You\'ll, She\'ll).'
  },
  {
    id: 'near-future',
    nameEn: 'Near Future (Be going to)',
    nameVi: 'Thì Tương Lai Gần',
    formula: 'S + am/is/are + going to + V_0',
    negativeFormula: 'S + am/is/are + not + going to + V_0',
    questionFormula: 'Am/Is/Are + S + going to + V_0?',
    usage: 'Diễn tả dự định, kế hoạch đã lên lịch từ trước, hoặc dự đoán dựa trên hiện tượng/bằng chứng ở hiện tại.',
    signalWords: ['Look at those black clouds!', 'intended to', 'planned to'],
    examples: [
      { en: 'Look at those black clouds! It is going to rain.', vi: 'Nhìn những đám mây đen kìa! Trời sắp mưa đấy.' },
      { en: 'We are going to buy a new house next month.', vi: 'Chúng tôi dự định sẽ mua một ngôi nhà mới vào tháng sau.' }
    ],
    tips: 'Khác với Will (bộc phát), Be going to dùng cho kế hoạch đã dự tính từ trước.'
  }
];

export interface ModalVerbItem {
  id: string;
  modal: string;
  meaningVi: string;
  usage: string;
  formula: string;
  exampleEn: string;
  exampleVi: string;
}

export const engModalVerbsData: ModalVerbItem[] = [
  {
    id: 'can-could',
    modal: 'Can / Could',
    meaningVi: 'Có thể (Khả năng & Lời xin phép)',
    usage: 'Diễn tả khả năng trong hiện tại (Can) hoặc quá khứ (Could), hoặc dùng để xin phép/yêu cầu lịch sự.',
    formula: 'S + Can/Could + V_0',
    exampleEn: 'She can speak three languages fluently.',
    exampleVi: 'Cô ấy có thể nói trôi chảy ba ngôn ngữ.'
  },
  {
    id: 'must-have-to',
    modal: 'Must / Have to',
    meaningVi: 'Phải (Bắt buộc & Nghĩa vụ)',
    usage: 'Diễn tả sự bắt buộc. "Must" là sự bắt buộc từ bản thân người nói, "Have to" là bắt buộc do luật lệ/hoàn cảnh bên ngoài.',
    formula: 'S + Must/Have to + V_0',
    exampleEn: 'Every student must wear school uniform.',
    exampleVi: 'Mỗi học sinh đều phải mặc đồng phục trường.'
  },
  {
    id: 'mustnt',
    modal: 'Mustn’t',
    meaningVi: 'Cấm không được (Cấm đoán)',
    usage: 'Diễn tả hành động tuyệt đối cấm đoán không được làm.',
    formula: 'S + Mustn’t + V_0',
    exampleEn: 'You mustn’t park your car here.',
    exampleVi: 'Bạn không được phép đỗ xe ô tô ở đây.'
  },
  {
    id: 'should-ought-to',
    modal: 'Should / Ought to',
    meaningVi: 'Nên (Lời khuyên)',
    usage: 'Diễn tả lời khuyên nên làm điều gì đó tốt nhất.',
    formula: 'S + Should/Ought to + V_0',
    exampleEn: 'You should study hard so that you can pass the exam.',
    exampleVi: 'Bạn nên học hành chăm chỉ để có thể thi đỗ.'
  },
  {
    id: 'may-might',
    modal: 'May / Might',
    meaningVi: 'Có thể, Có lẽ (Khả năng không chắc chắn)',
    usage: 'Diễn tả khả năng xảy ra điều gì đó nhưng không chắc chắn 100% (Might ít chắc chắn hơn May).',
    formula: 'S + May/Might + V_0',
    exampleEn: 'It might rain later, so take an umbrella.',
    exampleVi: 'Trời có lẽ sẽ mưa lát nữa đấy, vì thế hãy mang theo ô.'
  }
];
