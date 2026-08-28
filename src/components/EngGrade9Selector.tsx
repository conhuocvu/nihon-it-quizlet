import React, { useState, useMemo } from 'react';
import type { Lesson } from '../data/lessons';
import { engTopicLessons, engPosLessons, engGrade9Words, type EngWordItem } from '../data/engGrade9Data';
import { EngGrade9TestRunner, type TestMode } from './EngGrade9TestRunner';
import { EngGrade9GrammarDetailViewer } from './EngGrade9GrammarDetailViewer';
import {
  BookOpen,
  Search,
  CheckCircle2,
  Play,
  ArrowLeft,
  Volume2,
  CheckSquare,
  Square,
  GraduationCap,
  PenTool,
  BrainCircuit,
  Filter,
  Sparkles,
  X,
  Target,
  BookMarked,
  Clock,
  Zap
} from 'lucide-react';

interface EngGrade9SelectorProps {
  onStartBySections: (sectionIds: string[]) => void;
  onBackToHome: () => void;
}

type GrammarDetailType = 'tenses' | 'modal-verbs' | 'nouns' | 'verbs' | 'adjectives' | 'connectors';

export const EngGrade9Selector: React.FC<EngGrade9SelectorProps> = ({
  onStartBySections,
  onBackToHome
}) => {
  // Main Category Tab: 'vocab' (1. Từ vựng) | 'grammar' (2. Ngữ pháp) | 'homework' (3. Bài tập về nhà)
  const [mainTab, setMainTab] = useState<'vocab' | 'grammar' | 'homework'>('vocab');

  // Filter inside Homework Tab: 'topics' vs 'pos'
  const [homeworkFilter, setHomeworkFilter] = useState<'topics' | 'pos'>('topics');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSectionIds, setSelectedSectionIds] = useState<string[]>([]);

  // Inner Detail View for Grammar Lessons (Opens when clicking into a lesson card)
  const [activeGrammarDetail, setActiveGrammarDetail] = useState<GrammarDetailType | null>(null);

  // Modal State for Custom Test Setup
  const [showTestModal, setShowTestModal] = useState(false);
  const [customQuestionCount, setCustomQuestionCount] = useState<number>(10);
  const [customTestMode, setCustomTestMode] = useState<TestMode>('mcq-en-vi');

  // Active Runner State (When custom test is active)
  const [activeTestConfig, setActiveTestConfig] = useState<{
    wordsPool: EngWordItem[];
    questionCount: number;
    testMode: TestMode;
  } | null>(null);

  // Active Lessons depending on mainTab & homeworkFilter
  const currentLessons: Lesson[] = useMemo(() => {
    if (mainTab === 'vocab') return engTopicLessons;
    if (mainTab === 'grammar') return engPosLessons;
    return homeworkFilter === 'topics' ? engTopicLessons : engPosLessons;
  }, [mainTab, homeworkFilter]);

  // Speech Synthesis for English Pronunciation
  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Filtered words for search
  const filteredWords = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return engGrade9Words;
    return engGrade9Words.filter(
      (w) =>
        w.term.toLowerCase().includes(q) ||
        w.answer.toLowerCase().includes(q) ||
        w.ipa.toLowerCase().includes(q) ||
        w.topic.toLowerCase().includes(q) ||
        w.partOfSpeech.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const toggleSection = (id: string) => {
    setSelectedSectionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Sections corresponding to active mainTab
  const activeTabSections = useMemo(() => {
    const targetType = mainTab === 'homework' ? 'multiple_choice' : 'vocabulary';
    return currentLessons
      .flatMap((l) => l.sections)
      .filter((s) => s.type === targetType);
  }, [currentLessons, mainTab]);

  // Pool of selected EngWords for Custom Test
  const selectedWordsPool = useMemo(() => {
    if (selectedSectionIds.length === 0) return engGrade9Words;

    const wordIdsInSelectedSections = new Set<string>();
    currentLessons.forEach((lesson) => {
      lesson.sections.forEach((section) => {
        if (selectedSectionIds.includes(section.id)) {
          section.items.forEach((item) => wordIdsInSelectedSections.add(item.id.replace('-mcq', '').replace('-pos', '')));
        }
      });
    });

    const pool = engGrade9Words.filter((w) => wordIdsInSelectedSections.has(w.id));
    return pool.length > 0 ? pool : engGrade9Words;
  }, [selectedSectionIds, currentLessons]);

  // Total items count selected
  const totalItemsSelected = useMemo(() => {
    let count = 0;
    activeTabSections.forEach((s) => {
      if (selectedSectionIds.includes(s.id)) {
        count += s.items.length;
      }
    });
    return count;
  }, [selectedSectionIds, activeTabSections]);

  const isAllActiveSelected = useMemo(() => {
    return (
      activeTabSections.length > 0 &&
      activeTabSections.every((s) => selectedSectionIds.includes(s.id))
    );
  }, [activeTabSections, selectedSectionIds]);

  const selectAllActiveTabSections = () => {
    const activeSectionIds = activeTabSections.map((s) => s.id);
    if (isAllActiveSelected) {
      setSelectedSectionIds((prev) => prev.filter((id) => !activeSectionIds.includes(id)));
    } else {
      setSelectedSectionIds((prev) => Array.from(new Set([...prev, ...activeSectionIds])));
    }
  };

  const handleStartSelected = () => {
    if (selectedSectionIds.length > 0) {
      onStartBySections(selectedSectionIds);
    }
  };

  const handleLaunchCustomTest = () => {
    setActiveTestConfig({
      wordsPool: selectedWordsPool,
      questionCount: Math.min(customQuestionCount, selectedWordsPool.length),
      testMode: customTestMode
    });
    setShowTestModal(false);
  };

  // If Custom Test Runner is active, render runner view!
  if (activeTestConfig) {
    return (
      <EngGrade9TestRunner
        wordsPool={activeTestConfig.wordsPool}
        questionCount={activeTestConfig.questionCount}
        testMode={activeTestConfig.testMode}
        onClose={() => setActiveTestConfig(null)}
      />
    );
  }

  // If Grammar Detail Viewer is active, render detailed theory view!
  if (activeGrammarDetail) {
    return (
      <EngGrade9GrammarDetailViewer
        lessonType={activeGrammarDetail}
        onClose={() => setActiveGrammarDetail(null)}
        onStartQuiz={() => {
          const posSectionIds = engPosLessons.flatMap((l) => l.sections.map((s) => s.id));
          onStartBySections(posSectionIds);
        }}
      />
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 space-y-8">
      {/* Soothing Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 text-white p-6 sm:p-10 shadow-xl border border-sky-500/20">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-sky-100 text-xs font-bold transition-all border border-white/15 backdrop-blur-md cursor-pointer mb-2"
          >
            <ArrowLeft size={14} />
            <span>Trang chủ</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs font-bold tracking-wide backdrop-blur-md flex items-center gap-1.5">
              <GraduationCap size={14} className="text-sky-300" />
              TIẾNG ANH LỚP 9
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-medium">
              139 Từ vựng SGK
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-sky-100 to-indigo-200 bg-clip-text text-transparent">
            Hệ Thống Từ Vựng & Bài Tập Tiếng Anh 9
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
            Chọn mục **1. Từ Vựng**, **2. Ngữ Pháp** hoặc **3. Bài Tập Về Nhà** để xem nội dung bài học và làm bài trắc nghiệm.
          </p>

          {/* Quick Info Badges */}
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
            <div className="bg-white/5 px-3.5 py-2 rounded-xl backdrop-blur-md border border-white/10 flex items-center gap-2">
              <BookOpen size={15} className="text-sky-400" />
              <span>139 Từ vựng theo Chủ đề</span>
            </div>
            <div className="bg-white/5 px-3.5 py-2 rounded-xl backdrop-blur-md border border-white/10 flex items-center gap-2">
              <BookMarked size={15} className="text-teal-400" />
              <span>Các thì & Từ loại Ngữ pháp</span>
            </div>
            <div className="bg-white/5 px-3.5 py-2 rounded-xl backdrop-blur-md border border-white/10 flex items-center gap-2">
              <PenTool size={15} className="text-indigo-400" />
              <span>Bài tập về nhà & Test ngẫu nhiên</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main 3 Separate Tabs: 1. Từ Vựng | 2. Ngữ Pháp | 3. Bài Tập Về Nhà */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/60 max-w-3xl mx-auto">
          {/* TAB 1: TỪ VỰNG */}
          <button
            onClick={() => {
              setMainTab('vocab');
              setSelectedSectionIds([]);
            }}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              mainTab === 'vocab'
                ? 'bg-white text-sky-700 shadow-md border border-sky-100 ring-2 ring-sky-500/10'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
            }`}
          >
            <BookOpen size={18} className={mainTab === 'vocab' ? 'text-sky-600' : 'text-slate-400'} />
            <span>1. Từ Vựng</span>
          </button>

          {/* TAB 2: NGỮ PHÁP */}
          <button
            onClick={() => {
              setMainTab('grammar');
              setSelectedSectionIds([]);
            }}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              mainTab === 'grammar'
                ? 'bg-white text-teal-700 shadow-md border border-teal-100 ring-2 ring-teal-500/10'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
            }`}
          >
            <BookMarked size={18} className={mainTab === 'grammar' ? 'text-teal-600' : 'text-slate-400'} />
            <span>2. Ngữ Pháp</span>
          </button>

          {/* TAB 3: BÀI TẬP VỀ NHÀ */}
          <button
            onClick={() => {
              setMainTab('homework');
              setSelectedSectionIds([]);
            }}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              mainTab === 'homework'
                ? 'bg-white text-indigo-700 shadow-md border border-indigo-100 ring-2 ring-indigo-500/10'
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
            }`}
          >
            <PenTool size={18} className={mainTab === 'homework' ? 'text-indigo-600' : 'text-slate-400'} />
            <span>3. Bài Tập Về Nhà</span>
          </button>
        </div>

        {/* Top Control Bar & Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
          {/* Homework Filter toggle (only visible in Tab 3: Bài Tập Về Nhà) */}
          {mainTab === 'homework' ? (
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 shrink-0">
                <Filter size={14} className="text-slate-400" />
                Lọc đề bài theo:
              </span>
              <div className="flex p-1 rounded-xl bg-slate-100 border border-slate-200/70 text-xs font-semibold">
                <button
                  onClick={() => {
                    setHomeworkFilter('topics');
                    setSelectedSectionIds([]);
                  }}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    homeworkFilter === 'topics'
                      ? 'bg-white text-indigo-700 shadow-sm font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Theo Chủ đề
                </button>
                <button
                  onClick={() => {
                    setHomeworkFilter('pos');
                    setSelectedSectionIds([]);
                  }}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    homeworkFilter === 'pos'
                      ? 'bg-white text-indigo-700 shadow-sm font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Theo Từ loại
                </button>
              </div>
            </div>
          ) : (
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
              <Sparkles size={14} className={mainTab === 'vocab' ? 'text-sky-500' : 'text-teal-500'} />
              <span>
                {mainTab === 'vocab'
                  ? 'Học từ vựng Flashcard phân loại theo 8 Chủ đề gần gũi'
                  : 'Chọn bài học bên dưới để mở giao diện xem chi tiết công thức & cách dùng'}
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
            <div className="relative w-full sm:w-44">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tra từ..."
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/30 bg-slate-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={selectAllActiveTabSections}
              className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <CheckSquare size={14} className={isAllActiveSelected ? 'text-sky-600' : 'text-slate-400'} />
              <span>{isAllActiveSelected ? 'Bỏ chọn' : 'Chọn tất cả'}</span>
            </button>

            {/* CUSTOM TEST GENERATOR BUTTON */}
            {mainTab === 'homework' && (
              <button
                onClick={() => setShowTestModal(true)}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md shadow-amber-200 transition-all cursor-pointer shrink-0"
              >
                <Target size={15} />
                <span>Tạo Bài Test Tùy Chỉnh</span>
              </button>
            )}

            <button
              onClick={handleStartSelected}
              disabled={selectedSectionIds.length === 0}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
                selectedSectionIds.length > 0
                  ? mainTab === 'vocab'
                    ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-200'
                    : mainTab === 'grammar'
                    ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-200'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Play size={13} fill="currentColor" />
              <span>
                Vào Học{' '}
                {selectedSectionIds.length > 0
                  ? `(${totalItemsSelected} từ / ${selectedSectionIds.length} bài)`
                  : ''}
              </span>
            </button>
          </div>
        </div>

        {/* Selected Word Counter Banner */}
        {selectedSectionIds.length > 0 && (
          <div className="bg-sky-50/80 border border-sky-200/80 rounded-2xl p-3 px-4 flex items-center justify-between text-xs text-sky-900 font-semibold animate-fadeIn">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-sky-600 animate-pulse" />
              <span>
                Đã chọn <strong className="font-extrabold text-sky-700">{selectedSectionIds.length} bài</strong> với tổng số{' '}
                <strong className="font-extrabold text-sky-700 text-sm">{totalItemsSelected} từ vựng</strong> sẵn sàng luyện tập!
              </span>
            </div>
            <div className="flex items-center gap-3">
              {mainTab === 'homework' && (
                <button
                  onClick={() => setShowTestModal(true)}
                  className="text-[11px] font-bold text-amber-700 hover:underline cursor-pointer flex items-center gap-1"
                >
                  <Target size={12} />
                  <span>Test ngẫu nhiên ({totalItemsSelected} từ này)</span>
                </button>
              )}
              <button
                onClick={() => setSelectedSectionIds([])}
                className="text-[11px] font-bold text-sky-700 hover:underline cursor-pointer"
              >
                Xóa lựa chọn
              </button>
            </div>
          </div>
        )}

        {/* Quick Search Drawer */}
        {searchQuery && (
          <div className="bg-slate-50/70 rounded-2xl p-4 border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Search size={14} className="text-sky-600" />
              Kết quả tra cứu từ vựng ({filteredWords.length} từ)
            </h4>
            {filteredWords.length === 0 ? (
              <p className="text-xs text-slate-400 py-2">Không tìm thấy từ khớp.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 max-h-60 overflow-y-auto pr-1">
                {filteredWords.map((w) => (
                  <div
                    key={w.id}
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-sky-300 transition-all flex flex-col justify-between space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-xs text-slate-900">{w.term}</span>
                        <button
                          onClick={() => speakWord(w.term)}
                          className="p-0.5 rounded text-sky-600 hover:bg-sky-50 transition-all cursor-pointer"
                        >
                          <Volume2 size={12} />
                        </button>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">{w.ipa}</span>
                    </div>
                    <p className="text-xs font-medium text-slate-600">{w.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 1 CONTENT: 1. Từ Vựng (Chủ đề) - COMPACT CLEAN GRID (4 COLUMNS) */}
        {mainTab === 'vocab' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <BookOpen size={16} className="text-sky-600" />
                <span>Danh sách Bài Học Từ Vựng (Theo Chủ Đề)</span>
              </h3>
              <span className="text-xs text-slate-400 font-normal">Tích chọn card để học</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {engTopicLessons.map((lesson) => {
                const vocabSection = lesson.sections.find((s) => s.type === 'vocabulary');
                if (!vocabSection) return null;

                const isSelected = selectedSectionIds.includes(vocabSection.id);
                const wordCount = vocabSection.items.length;

                return (
                  <div
                    key={lesson.id}
                    onClick={() => toggleSection(vocabSection.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 hover:shadow-md ${
                      isSelected
                        ? 'border-sky-500 bg-sky-50/40 ring-2 ring-sky-500/15 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="p-2 rounded-xl bg-sky-100 text-sky-700 font-bold text-xs shrink-0">
                        <BookOpen size={16} />
                      </div>

                      {isSelected ? (
                        <div className="p-0.5 rounded-full bg-sky-600 text-white shrink-0">
                          <CheckCircle2 size={18} fill="currentColor" className="text-sky-600 stroke-white" />
                        </div>
                      ) : (
                        <Square size={18} className="text-slate-300 hover:text-sky-400 transition-colors shrink-0" />
                      )}
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm line-clamp-2 leading-tight">
                        {lesson.title}
                      </h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-bold">
                        {wordCount} từ vựng
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2 CONTENT: 2. Ngữ Pháp (CHỌN BÀI Ở NGOÀI -> ẤN VÀO TRONG MỚI XEM CONTENT) */}
        {mainTab === 'grammar' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <BookMarked size={16} className="text-teal-600" />
                <span>Danh sách Các Bài Học Ngữ Pháp</span>
              </h3>
              <span className="text-xs text-slate-400 font-normal">Click vào bài để xem lý thuyết & công thức</span>
            </div>

            {/* Grid of Grammar Lessons Outside */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {/* BÀI 1: CÁC THÌ TRONG TIẾNG ANH (8 THÌ) */}
              <div
                onClick={() => setActiveGrammarDetail('tenses')}
                className="p-5 rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50/60 to-sky-50/60 hover:border-teal-400 transition-all cursor-pointer space-y-3 shadow-sm hover:shadow-md group"
              >
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-2xl bg-teal-600 text-white shadow-md shadow-teal-200 group-hover:scale-105 transition-transform">
                    <Clock size={20} />
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-extrabold">
                    8 Thì Trọng Tâm
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                    Bài 1: Các Thì Trong Tiếng Anh
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Trọn bộ 8 thì trọng tâm: Hiện tại đơn, Tiếp diễn, Hoàn thành, Quá khứ đơn, Tiếp diễn, Quá khứ hoàn thành, Tương lai...
                  </p>
                </div>

                <div className="pt-2 border-t border-teal-100 flex items-center justify-between text-xs font-bold text-teal-700">
                  <span>Mở xem lý thuyết ➔</span>
                  <Sparkles size={14} className="text-teal-500" />
                </div>
              </div>

              {/* BÀI 2: ĐỘNG TỪ KHUYẾT THIẾU (MODAL VERBS) */}
              <div
                onClick={() => setActiveGrammarDetail('modal-verbs')}
                className="p-5 rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50/60 to-indigo-50/60 hover:border-sky-400 transition-all cursor-pointer space-y-3 shadow-sm hover:shadow-md group"
              >
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-2xl bg-sky-600 text-white shadow-md shadow-sky-200 group-hover:scale-105 transition-transform">
                    <Zap size={20} />
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold">
                    Modal Verbs
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-900 text-base group-hover:text-sky-700 transition-colors">
                    Bài 2: Động Từ Khuyết Thiếu
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Chuyên đề Can/Could, Must/Mustn’t, Have to, Should/Ought to, May/Might với công thức $S + Modal + V_0$.
                  </p>
                </div>

                <div className="pt-2 border-t border-sky-100 flex items-center justify-between text-xs font-bold text-sky-700">
                  <span>Mở xem lý thuyết ➔</span>
                  <Sparkles size={14} className="text-sky-500" />
                </div>
              </div>

              {/* BÀI 3: DANH TỪ */}
              <div
                onClick={() => setActiveGrammarDetail('nouns')}
                className="p-5 rounded-3xl border border-slate-200 bg-white hover:border-teal-300 transition-all cursor-pointer space-y-3 shadow-sm hover:shadow-md group"
              >
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-2xl bg-slate-100 text-slate-700 group-hover:scale-105 transition-transform">
                    <BookMarked size={20} />
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                    Nouns
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                    Bài 3: Danh Từ Ngữ Pháp
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Danh từ đếm được, không đếm được, số ít, số nhiều và các mẫu câu hay gặp.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                  <span>Mở xem bài học ➔</span>
                </div>
              </div>

              {/* BÀI 4: ĐỘNG TỪ & CỤM ĐỘNG TỪ */}
              <div
                onClick={() => setActiveGrammarDetail('verbs')}
                className="p-5 rounded-3xl border border-slate-200 bg-white hover:border-teal-300 transition-all cursor-pointer space-y-3 shadow-sm hover:shadow-md group"
              >
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-2xl bg-slate-100 text-slate-700 group-hover:scale-105 transition-transform">
                    <PenTool size={20} />
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                    Verbs & Phrasal Verbs
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                    Bài 4: Động Từ & Cụm Động Từ
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Tổng hợp các động từ hành động và phrasal verbs phổ biến (get into, go out, come on...).
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                  <span>Mở xem bài học ➔</span>
                </div>
              </div>

              {/* BÀI 5: TÍNH TỪ & TRẠNG TỪ */}
              <div
                onClick={() => setActiveGrammarDetail('adjectives')}
                className="p-5 rounded-3xl border border-slate-200 bg-white hover:border-teal-300 transition-all cursor-pointer space-y-3 shadow-sm hover:shadow-md group"
              >
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-2xl bg-slate-100 text-slate-700 group-hover:scale-105 transition-transform">
                    <Sparkles size={20} />
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                    Adj & Adv
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                    Bài 5: Tính Từ & Trạng Từ
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Vị trí và chức năng của tính từ, trạng từ chỉ thói quen/tần suất trong câu.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                  <span>Mở xem bài học ➔</span>
                </div>
              </div>

              {/* BÀI 6: TỪ NỐI & GIỚI TỪ */}
              <div
                onClick={() => setActiveGrammarDetail('connectors')}
                className="p-5 rounded-3xl border border-slate-200 bg-white hover:border-teal-300 transition-all cursor-pointer space-y-3 shadow-sm hover:shadow-md group"
              >
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-2xl bg-slate-100 text-slate-700 group-hover:scale-105 transition-transform">
                    <BrainCircuit size={20} />
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                    Connectors & Prepositions
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                    Bài 6: Từ Nối & Giới Từ
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Từ nối chỉ mục đích (so that), điều kiện (if), đối lập (but, while) và giới từ chỉ vị trí.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                  <span>Mở xem bài học ➔</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3 CONTENT: 3. Bài Tập Về Nhà (Trắc Nghiệm & Test) - COMPACT CLEAN GRID (4 COLUMNS) */}
        {mainTab === 'homework' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <PenTool size={16} className="text-indigo-600" />
                <span>Danh sách Bài Tập Về Nhà</span>
              </h3>
              <span className="text-xs text-slate-400 font-normal">Tích chọn bài để làm trắc nghiệm</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {currentLessons.map((lesson) => {
                const mcqSection = lesson.sections.find((s) => s.type === 'multiple_choice');
                if (!mcqSection) return null;

                const isSelected = selectedSectionIds.includes(mcqSection.id);
                const questionCount = mcqSection.items.length;

                return (
                  <div
                    key={lesson.id}
                    onClick={() => toggleSection(mcqSection.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 hover:shadow-md ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-50/40 ring-2 ring-indigo-500/15 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="p-2 rounded-xl bg-indigo-100 text-indigo-700 font-bold text-xs shrink-0">
                        <BrainCircuit size={16} />
                      </div>

                      {isSelected ? (
                        <div className="p-0.5 rounded-full bg-indigo-600 text-white shrink-0">
                          <CheckCircle2 size={18} fill="currentColor" className="text-indigo-600 stroke-white" />
                        </div>
                      ) : (
                        <Square size={18} className="text-slate-300 hover:text-indigo-400 transition-colors shrink-0" />
                      )}
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm line-clamp-2 leading-tight">
                        {lesson.title}
                      </h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-indigo-100 text-indigo-700 text-[11px] font-bold">
                        {questionCount} câu hỏi
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* CUSTOM TEST SETUP MODAL */}
      {showTestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-6 relative">
            <button
              onClick={() => setShowTestModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all"
            >
              <X size={18} />
            </button>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold">
                <Target size={14} />
                <span>Cấu hình Bài Test Ngẫu Nhiên</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Tạo Bài Kiểm Tra Tùy Chỉnh
              </h3>
              <p className="text-xs text-slate-500">
                Lấy từ vựng ngẫu nhiên từ kho {selectedWordsPool.length} từ đã chọn để kiểm tra phản xạ.
              </p>
            </div>

            {/* Step 1: Select Question Count */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span>1. Số lượng câu hỏi test:</span>
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[5, 10, 15, 20, 30, selectedWordsPool.length].map((count, idx) => {
                  const isSelected = customQuestionCount === count;
                  const label = idx === 5 ? `Tất cả (${count})` : `${count} câu`;

                  return (
                    <button
                      key={idx}
                      onClick={() => setCustomQuestionCount(count)}
                      className={`py-2 px-1 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Test Mode */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">
                2. Chọn hình thức kiểm tra (Cách test):
              </label>

              <div className="space-y-2">
                {[
                  {
                    id: 'mcq-en-vi' as TestMode,
                    title: '🎯 Trắc nghiệm 4 đáp án (Anh ➔ Việt)',
                    desc: 'Hiển thị từ tiếng Anh, chọn nghĩa tiếng Việt đúng'
                  },
                  {
                    id: 'mcq-vi-en' as TestMode,
                    title: '🔄 Trắc nghiệm ngược (Việt ➔ Anh)',
                    desc: 'Hiển thị nghĩa tiếng Việt, chọn từ tiếng Anh tương ứng'
                  },
                  {
                    id: 'spelling' as TestMode,
                    title: '✍️ Gõ từ Tiếng Anh (Chính tả)',
                    desc: 'Hiển thị nghĩa tiếng Việt, gõ phím từ tiếng Anh chuẩn'
                  },
                  {
                    id: 'matching' as TestMode,
                    title: '🧩 Trò chơi Nối từ cặp đôi',
                    desc: 'Ghép cặp từ tiếng Anh với nghĩa tiếng Việt tương ứng'
                  }
                ].map((mode) => {
                  const isSelected = customTestMode === mode.id;

                  return (
                    <div
                      key={mode.id}
                      onClick={() => setCustomTestMode(mode.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-amber-500 bg-amber-50/50 ring-2 ring-amber-500/20'
                          : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-extrabold text-slate-900">{mode.title}</div>
                        <div className="text-[11px] text-slate-500 font-medium">{mode.desc}</div>
                      </div>

                      {isSelected ? (
                        <CheckCircle2 size={18} className="text-amber-600 shrink-0" />
                      ) : (
                        <Square size={18} className="text-slate-300 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Launch */}
            <div className="pt-2 flex gap-3">
              <button
                onClick={() => setShowTestModal(false)}
                className="flex-1 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button
                onClick={handleLaunchCustomTest}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-black shadow-lg shadow-amber-200 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles size={16} />
                <span>Bắt Đầu Làm Test Ngay</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
