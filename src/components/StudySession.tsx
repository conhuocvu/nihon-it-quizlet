import React, { useState, useEffect } from 'react';
import type { Lesson, StudyItem } from '../data/lessons';
import { QuestionCard } from './QuestionCard';
import { VocabularyCard } from './VocabularyCard';
import { ResultScreen } from './ResultScreen';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';

interface SessionQuestion {
  item: StudyItem;
  lessonTitle: string;
  sectionTitle: string;
  sectionType: 'vocabulary' | 'multiple_choice';
}

interface StudySessionProps {
  selectedSectionIds: string[];
  lessons: Lesson[];
  shuffleQuestions: boolean;
  onBackToSelector: () => void;
}

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const StudySession: React.FC<StudySessionProps> = ({
  selectedSectionIds,
  lessons,
  shuffleQuestions,
  onBackToSelector,
}) => {
  const [questions, setQuestions] = useState<SessionQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<SessionQuestion[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  // Initialize session questions based on selected sections
  const initializeSession = () => {
    const aggregated: SessionQuestion[] = [];

    lessons.forEach(lesson => {
      lesson.sections.forEach(section => {
        if (selectedSectionIds.includes(section.id)) {
          section.items.forEach(item => {
            aggregated.push({
              item,
              lessonTitle: lesson.title,
              sectionTitle: section.title,
              sectionType: section.type,
            });
          });
        }
      });
    });

    const finalQuestions = shuffleQuestions ? shuffleArray(aggregated) : aggregated;
    
    setQuestions(finalQuestions);
    setCurrentIndex(0);
    setIsAnswered(false);
    setCorrectCount(0);
    setIncorrectCount(0);
    setWrongAnswers([]);
    setIsFinished(false);
  };

  // Run initialization on mount or when selected sections/shuffle settings change
  useEffect(() => {
    initializeSession();
  }, [selectedSectionIds, lessons, shuffleQuestions]);

  const handleAnswerGraded = (isCorrect: boolean) => {
    setIsAnswered(true);
    
    const currentQ = questions[currentIndex];
    
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    } else {
      setIncorrectCount(prev => prev + 1);
      setWrongAnswers(prev => [...prev, currentQ]);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  // Re-run the same session with all current questions
  const handleRetryAll = () => {
    const resetQuestions = shuffleQuestions ? shuffleArray(questions) : [...questions];
    setQuestions(resetQuestions);
    setCurrentIndex(0);
    setIsAnswered(false);
    setCorrectCount(0);
    setIncorrectCount(0);
    setWrongAnswers([]);
    setIsFinished(false);
  };

  // Run a review session containing ONLY the incorrect answers
  const handleRetryWrongOnly = () => {
    const resetQuestions = shuffleQuestions ? shuffleArray(wrongAnswers) : [...wrongAnswers];
    setQuestions(resetQuestions);
    setCurrentIndex(0);
    setIsAnswered(false);
    setCorrectCount(0);
    setIncorrectCount(0);
    setWrongAnswers([]);
    setIsFinished(false);
  };

  if (questions.length === 0) {
    return (
      <div className="w-full max-w-md mx-auto text-center py-16 px-4">
        <h3 className="text-xl font-bold text-slate-800 mb-2">Không tìm thấy câu hỏi</h3>
        <p className="text-slate-500 mb-6">Các phần học được chọn hiện tại không chứa dữ liệu câu hỏi.</p>
        <button
          onClick={onBackToSelector}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-md cursor-pointer"
        >
          Quay lại chọn bài
        </button>
      </div>
    );
  }

  // Render Result Screen if finished
  if (isFinished) {
    return (
      <ResultScreen
        totalQuestions={questions.length}
        correctAnswersCount={correctCount}
        incorrectAnswersCount={incorrectCount}
        wrongAnswers={wrongAnswers}
        onRetryAll={handleRetryAll}
        onRetryWrongOnly={handleRetryWrongOnly}
        onBackToSelector={onBackToSelector}
      />
    );
  }

  const currentQuestion = questions[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      {/* Session Navigation & Stats Header */}
      <div className="glass-panel sticky top-4 z-40 rounded-2xl p-4 mb-8 flex items-center justify-between shadow-md">
        <button
          onClick={onBackToSelector}
          className="flex items-center gap-2 py-2 px-3 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg active:scale-95 transition-all cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Quay lại</span>
        </button>

        {/* Progress Display */}
        <div className="flex-1 max-w-md mx-4">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-1">
            <span>Tiến độ</span>
            <span className="font-mono">
              Câu {currentIndex + 1} / {questions.length} ({progressPercent}%)
            </span>
          </div>
          {/* Progress Bar Container */}
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Counter Stats Badge */}
        <div className="flex items-center gap-2 text-xs font-bold shrink-0">
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 py-1 px-2.5 rounded-lg border border-emerald-100">
            <Check size={14} className="stroke-[3px]" />
            {correctCount}
          </span>
          <span className="flex items-center gap-1 bg-rose-50 text-rose-700 py-1 px-2.5 rounded-lg border border-rose-100">
            <X size={14} className="stroke-[3px]" />
            {incorrectCount}
          </span>
        </div>
      </div>

      {/* Question Card / Vocabulary Card area */}
      <div className="min-h-[400px] flex items-center justify-center py-4">
        {currentQuestion.sectionType === 'vocabulary' ? (
          <VocabularyCard
            item={currentQuestion.item}
            lessonTitle={currentQuestion.lessonTitle}
            sectionTitle={currentQuestion.sectionTitle}
            onAnswerGraded={handleAnswerGraded}
          />
        ) : (
          <QuestionCard
            item={currentQuestion.item}
            lessonTitle={currentQuestion.lessonTitle}
            sectionTitle={currentQuestion.sectionTitle}
            onAnswerGraded={handleAnswerGraded}
          />
        )}
      </div>

      {/* Lower Navigation Footer */}
      {isAnswered && (
        <div className="mt-8 flex justify-center animate-bounce">
          <button
            onClick={handleNext}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-2xl font-extrabold shadow-lg shadow-indigo-100 flex items-center gap-2 active:scale-95 transition-all text-base cursor-pointer"
          >
            {currentIndex === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};
