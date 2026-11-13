import React, { useState, useMemo } from 'react';
import type { Lesson } from '../data/lessons';
import {
  n3ReviewKanjiItems,
  n3ReviewVocabItems,
  n3ReviewGrammarItems,
  type N3ReviewItem,
} from '../data/n3ReviewData';
import {
  ArrowLeft,
  Sparkles,
  Play,
  Search,
  Eye,
  EyeOff,
  RotateCcw,
  CheckCircle2,
  Award,
  Languages,
  FileText,
  LayoutGrid,
  Table as TableIcon,
} from 'lucide-react';

interface N3ReviewSelectorProps {
  lessons: Lesson[];
  onStartBySections: (sectionIds: string[]) => void;
  onBackToHome: () => void;
}

type MainReviewTab = 'kanji' | 'vocab' | 'grammar';
type ViewMode = 'cards' | 'table';

export const N3ReviewSelector: React.FC<N3ReviewSelectorProps> = ({
  onStartBySections,
  onBackToHome,
}) => {
  const [activeTab, setActiveTab] = useState<MainReviewTab>(() => {
    try {
      const saved = localStorage.getItem('n3_review_active_tab');
      if (saved === 'kanji' || saved === 'vocab' || saved === 'grammar') {
        return saved;
      }
    } catch {}
    return 'kanji';
  });
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [flippedIds, setFlippedIds] = useState<Record<string, boolean>>({});
  const [hideReadingInTable, setHideReadingInTable] = useState<boolean>(false);
  const [hideMeaningInTable, setHideMeaningInTable] = useState<boolean>(false);
  const [revealedRows, setRevealedRows] = useState<Record<string, boolean>>({});

  const handleSelectTab = (tab: MainReviewTab) => {
    setActiveTab(tab);
    setSearchQuery('');
    try {
      localStorage.setItem('n3_review_active_tab', tab);
    } catch {}
  };

  const currentItems: N3ReviewItem[] = useMemo(() => {
    if (activeTab === 'kanji') return n3ReviewKanjiItems;
    if (activeTab === 'vocab') return n3ReviewVocabItems;
    return [];
  }, [activeTab]);

  const currentSectionId =
    activeTab === 'kanji'
      ? 'n3-review-kanji-list-1'
      : activeTab === 'vocab'
      ? 'n3-review-vocab-list-1'
      : 'n3-review-grammar-list-1';

  const toggleCardFlip = (id: string) => {
    setFlippedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const flipAllCurrentCards = (flipState: boolean) => {
    setFlippedIds((prev) => {
      const next = { ...prev };
      currentItems.forEach((item) => {
        next[item.id] = flipState;
      });
      return next;
    });
  };

  const toggleRowReveal = (id: string) => {
    setRevealedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return currentItems;
    return currentItems.filter(
      (item, idx) =>
        (idx + 1).toString() === q ||
        `#${idx + 1}` === q ||
        (item.term && item.term.toLowerCase().includes(q)) ||
        (item.reading && item.reading.toLowerCase().includes(q)) ||
        item.hanViet.toLowerCase().includes(q) ||
        (item.meaning && item.meaning.toLowerCase().includes(q)) ||
        (item.note && item.note.toLowerCase().includes(q)) ||
        (item.example && item.example.toLowerCase().includes(q))
    );
  }, [currentItems, searchQuery]);

  const currentFlippedCount = useMemo(() => {
    return currentItems.filter((item) => !!flippedIds[item.id]).length;
  }, [currentItems, flippedIds]);

  const isKanjiTab = activeTab === 'kanji';
  const accentColor = isKanjiTab ? 'rose' : 'emerald';

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 pb-24 space-y-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-900 via-indigo-900 to-fuchsia-900 text-white p-6 md:p-8 shadow-xl border border-violet-500/20">
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-fuchsia-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 left-1/4 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 flex-wrap">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-all cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Trang chủ</span>
              </button>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-500/25 border border-fuchsia-400/30 text-fuchsia-200 text-xs font-extrabold">
                <Sparkles size={13} className="text-amber-300" />
                <span>Chuyên mục Ôn tập JLPT N3</span>
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-black tracking-tight">
              Ôn Tập Tổng Hợp N3: Kanji • Từ Vựng • Ngữ Pháp
            </h1>
            <p className="text-indigo-200 text-xs md:text-sm max-w-2xl leading-relaxed">
              Không gian ôn tập riêng biệt gồm 3 trụ cột chính của kỳ thi JLPT N3: Chữ Hán (漢字), Từ vựng (語彙) và Ngữ pháp (文法). Lật thẻ nhanh trực tiếp hoặc vào phòng luyện Flashcard 3D có chế độ Tập viết Chữ Hán.
            </p>
          </div>

          {/* Summary Stat Pills */}
          <div className="grid grid-cols-3 gap-2.5 shrink-0">
            <div
              onClick={() => handleSelectTab('kanji')}
              className={`p-3.5 rounded-2xl border text-center cursor-pointer transition-all ${
                activeTab === 'kanji'
                  ? 'bg-white text-indigo-950 border-white shadow-lg scale-105'
                  : 'bg-white/10 text-white border-white/15 hover:bg-white/15'
              }`}
            >
              <span className="text-xl font-black block">{n3ReviewKanjiItems.length}</span>
              <span className="text-[11px] font-bold opacity-80">Kanji</span>
            </div>
            <div
              onClick={() => handleSelectTab('vocab')}
              className={`p-3.5 rounded-2xl border text-center cursor-pointer transition-all ${
                activeTab === 'vocab'
                  ? 'bg-white text-indigo-950 border-white shadow-lg scale-105'
                  : 'bg-white/10 text-white border-white/15 hover:bg-white/15'
              }`}
            >
              <span className="text-xl font-black block">{n3ReviewVocabItems.length}</span>
              <span className="text-[11px] font-bold opacity-80">Từ vựng</span>
            </div>
            <div
              onClick={() => handleSelectTab('grammar')}
              className={`p-3.5 rounded-2xl border text-center cursor-pointer transition-all ${
                activeTab === 'grammar'
                  ? 'bg-white text-indigo-950 border-white shadow-lg scale-105'
                  : 'bg-white/10 text-white border-white/15 hover:bg-white/15'
              }`}
            >
              <span className="text-xl font-black block">{n3ReviewGrammarItems.length}</span>
              <span className="text-[11px] font-bold opacity-80">Ngữ pháp</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Main Category Tabs: Kanji | Từ vựng | Ngữ pháp */}
      <div className="grid grid-cols-3 gap-3 bg-slate-200/70 p-1.5 rounded-2xl border border-slate-200">
        <button
          type="button"
          onClick={() => handleSelectTab('kanji')}
          className={`py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'kanji'
              ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-rose-200'
              : 'bg-white/60 text-slate-600 hover:bg-white hover:text-slate-900'
          }`}
        >
          <Award size={17} />
          <span>1. Kanji (漢字)</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
              activeTab === 'kanji' ? 'bg-white/20 text-white' : 'bg-rose-100 text-rose-700'
            }`}
          >
            {n3ReviewKanjiItems.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleSelectTab('vocab')}
          className={`py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'vocab'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-200'
              : 'bg-white/60 text-slate-600 hover:bg-white hover:text-slate-900'
          }`}
        >
          <Languages size={17} />
          <span>2. Từ Vựng (語彙)</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
              activeTab === 'vocab' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'
            }`}
          >
            {n3ReviewVocabItems.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleSelectTab('grammar')}
          className={`py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            activeTab === 'grammar'
              ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-200'
              : 'bg-white/60 text-slate-600 hover:bg-white hover:text-slate-900'
          }`}
        >
          <FileText size={17} />
          <span>3. Ngữ Pháp (文法)</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
              activeTab === 'grammar' ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-700'
            }`}
          >
            {n3ReviewGrammarItems.length}
          </span>
        </button>
      </div>

      {/* =====================================================================
          TAB 1 & TAB 2: KANJI (漢字) OR TỪ VỰNG (語彙)
         ===================================================================== */}
      {(activeTab === 'kanji' || activeTab === 'vocab') && (
        <div className="space-y-6">
          {/* Action Control Bar */}
          <div className="bg-white rounded-2xl p-4 md:p-5 border border-slate-200/80 shadow-xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Launch Full 3D StudySession Button for Current Tab */}
              <button
                type="button"
                onClick={() => onStartBySections([currentSectionId])}
                className={`px-4 py-2.5 rounded-xl text-white font-black text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all active:scale-95 cursor-pointer ${
                  isKanjiTab
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-rose-200'
                    : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-200'
                }`}
              >
                <Play size={15} fill="currentColor" />
                <span>
                  Luyện Flashcard 3D {isKanjiTab ? 'Kanji' : 'Từ vựng'} ({currentItems.length} từ)
                </span>
              </button>

              {/* Combined Practice Button (Kanji + Vocab = 32 words) */}
              <button
                type="button"
                onClick={() =>
                  onStartBySections(['n3-review-kanji-list-1', 'n3-review-vocab-list-1'])
                }
                className="px-3.5 py-2.5 rounded-xl bg-violet-50 hover:bg-violet-100 text-violet-700 border border-violet-200 font-extrabold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                title="Gộp cả Kanji và Từ vựng để luyện chung"
              >
                <Play size={13} />
                <span>
                  Gộp Kanji + Từ vựng ({n3ReviewKanjiItems.length + n3ReviewVocabItems.length} từ)
                </span>
              </button>

              {/* View Mode Switcher: Flashcard Grid vs Table */}
              <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setViewMode('cards')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewMode === 'cards'
                      ? isKanjiTab
                        ? 'bg-white text-rose-600 shadow-xs'
                        : 'bg-white text-emerald-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <LayoutGrid size={14} />
                  <span>Thẻ Flashcard ({currentItems.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer ${
                    viewMode === 'table'
                      ? isKanjiTab
                        ? 'bg-white text-rose-600 shadow-xs'
                        : 'bg-white text-emerald-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <TableIcon size={14} />
                  <span>Bảng chi tiết</span>
                </button>
              </div>
            </div>

            {/* Search & Quick Flip All Controls */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="relative flex-1 sm:w-60">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm từ, cách đọc, nghĩa..."
                  className="w-full pl-9 pr-8 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 hover:text-slate-600"
                  >
                    Xóa
                  </button>
                )}
              </div>

              {viewMode === 'cards' && (
                <button
                  type="button"
                  onClick={() => flipAllCurrentCards(currentFlippedCount < currentItems.length)}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <RotateCcw
                    size={14}
                    className={isKanjiTab ? 'text-rose-500' : 'text-emerald-500'}
                  />
                  <span>
                    {currentFlippedCount < currentItems.length
                      ? 'Lật mở tất cả thẻ'
                      : 'Úp tất cả thẻ lại'}
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Word Chips Quick Overview Bar */}
          <div
            className={`rounded-2xl p-4 border ${
              isKanjiTab
                ? 'bg-rose-50/60 border-rose-200/70'
                : 'bg-emerald-50/60 border-emerald-200/70'
            }`}
          >
            <div className="flex items-center justify-between mb-2.5 flex-wrap gap-2">
              <span
                className={`text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 ${
                  isKanjiTab ? 'text-rose-800' : 'text-emerald-800'
                }`}
              >
                <CheckCircle2
                  size={14}
                  className={isKanjiTab ? 'text-rose-600' : 'text-emerald-600'}
                />
                {isKanjiTab
                  ? `Danh sách ${currentItems.length} từ Kanji trong bộ Flashcard:`
                  : `Danh sách ${currentItems.length} Từ vựng trong bộ Flashcard:`}
              </span>
              <span
                className={`text-[11px] font-bold ${
                  isKanjiTab ? 'text-rose-600' : 'text-emerald-600'
                }`}
              >
                Bấm vào từng từ hoặc từng thẻ bên dưới để lật xem cách đọc & ý nghĩa
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {currentItems.map((item, index) => {
                const isFlipped = !!flippedIds[item.id];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleCardFlip(item.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${
                      isFlipped
                        ? isKanjiTab
                          ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                          : 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : isKanjiTab
                        ? 'bg-white text-slate-800 border-rose-200 hover:border-rose-400'
                        : 'bg-white text-slate-800 border-emerald-200 hover:border-emerald-400'
                    }`}
                  >
                    <span className="text-[10px] opacity-70">#{index + 1}</span>
                    <span>{item.term}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* VIEW MODE 1: INTERACTIVE FLASHCARD GRID */}
          {viewMode === 'cards' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredItems.map((item) => {
                const originalIndex =
                  currentItems.findIndex((x) => x.id === item.id) + 1;
                const isFlipped = !!flippedIds[item.id];

                return (
                  <div
                    key={item.id}
                    onClick={() => toggleCardFlip(item.id)}
                    className={`group relative rounded-3xl p-6 border-2 transition-all duration-300 cursor-pointer select-none min-h-[250px] flex flex-col justify-between ${
                      isFlipped
                        ? isKanjiTab
                          ? 'bg-gradient-to-br from-rose-50/90 via-white to-amber-50/50 border-rose-300 shadow-lg shadow-rose-100/50'
                          : 'bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/50 border-emerald-300 shadow-lg shadow-emerald-100/50'
                        : isKanjiTab
                        ? 'bg-white border-slate-200/90 hover:border-rose-300 hover:shadow-xl hover:-translate-y-1'
                        : 'bg-white border-slate-200/90 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1'
                    }`}
                  >
                    {/* Card Top Metadata */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-black text-xs border border-slate-200/70">
                        #{originalIndex}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <span
                          className={`px-2.5 py-0.5 rounded-full border text-[10px] font-black uppercase tracking-wider ${
                            isKanjiTab
                              ? 'bg-rose-100 text-rose-700 border-rose-200'
                              : 'bg-emerald-100 text-emerald-700 border-emerald-200'
                          }`}
                        >
                          {item.hanViet}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            isFlipped
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {isFlipped ? 'Mặt sau' : 'Mặt trước'}
                        </span>
                      </div>
                    </div>

                    {/* Card Center Content */}
                    {!isFlipped ? (
                      /* FRONT: Term Focus */
                      <div className="my-auto py-6 text-center space-y-2">
                        <div
                          className={`text-3xl sm:text-4xl font-black text-slate-900 tracking-tight transition-colors ${
                            isKanjiTab
                              ? 'group-hover:text-rose-600'
                              : 'group-hover:text-emerald-600'
                          }`}
                        >
                          {item.term}
                        </div>
                        <p className="text-xs font-bold text-slate-400 pt-2">
                          Bấm để lật xem Cách đọc & Ý nghĩa
                        </p>
                      </div>
                    ) : (
                      /* BACK: Reading, Meaning, Explanation, Example */
                      <div className="my-auto py-3 space-y-2.5">
                        <div
                          className={`flex items-baseline justify-between border-b pb-2 ${
                            isKanjiTab ? 'border-rose-200/60' : 'border-emerald-200/60'
                          }`}
                        >
                          <span className="text-2xl font-black text-slate-900">
                            {item.term}
                          </span>
                          <span
                            className={`text-sm font-black px-2.5 py-0.5 rounded-lg ${
                              isKanjiTab
                                ? 'text-rose-600 bg-rose-100/80'
                                : 'text-emerald-700 bg-emerald-100/80'
                            }`}
                          >
                            {item.reading}
                          </span>
                        </div>

                        <div>
                          <p className="text-sm font-extrabold text-slate-800 leading-snug">
                            {item.meaning}
                          </p>
                          {item.note && (
                            <p className="text-[11px] font-medium text-slate-500 mt-1 leading-relaxed">
                              {item.note}
                            </p>
                          )}
                        </div>

                        {item.example && (
                          <div
                            className={`p-2.5 rounded-xl bg-white/90 border text-[11px] text-slate-700 space-y-0.5 ${
                              isKanjiTab ? 'border-rose-100' : 'border-emerald-100'
                            }`}
                          >
                            <p className="font-bold text-slate-900">
                              {item.example.split('\n')[0]}
                            </p>
                            {item.example.split('\n')[1] && (
                              <p className="text-slate-500">
                                {item.example.split('\n')[1]}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Card Footer */}
                    <div
                      className={`pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 ${
                        isKanjiTab
                          ? 'group-hover:text-rose-600'
                          : 'group-hover:text-emerald-600'
                      }`}
                    >
                      <span>{isFlipped ? 'Bấm để úp thẻ lại' : 'Bấm để lật thẻ'}</span>
                      <RotateCcw size={13} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* VIEW MODE 2: DETAILED TABLE VIEW */}
          {viewMode === 'table' && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base">
                    {isKanjiTab
                      ? `Bảng tổng hợp ${currentItems.length} từ vựng Kanji N3`
                      : `Bảng tổng hợp ${currentItems.length} Từ vựng N3 (語彙)`}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Có thể ẩn Cách đọc hoặc Ý nghĩa để tự dò bài nhanh trên bảng
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setHideReadingInTable((prev) => !prev)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer border transition-all ${
                      hideReadingInTable
                        ? 'bg-rose-500 text-white border-rose-400'
                        : 'bg-white/10 text-slate-200 border-white/15 hover:bg-white/20'
                    }`}
                  >
                    {hideReadingInTable ? <EyeOff size={14} /> : <Eye size={14} />}
                    <span>{hideReadingInTable ? 'Đang ẩn Cách đọc' : 'Ẩn Cách đọc'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHideMeaningInTable((prev) => !prev)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer border transition-all ${
                      hideMeaningInTable
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-white/10 text-slate-200 border-white/15 hover:bg-white/20'
                    }`}
                  >
                    {hideMeaningInTable ? <EyeOff size={14} /> : <Eye size={14} />}
                    <span>{hideMeaningInTable ? 'Đang ẩn Nghĩa' : 'Ẩn Nghĩa'}</span>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead className="bg-slate-100 border-b border-slate-200 text-slate-600 font-extrabold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4 w-14 text-center">STT</th>
                      <th className="py-3.5 px-4 w-36">Từ vựng</th>
                      <th className="py-3.5 px-4 w-32">Hán Việt / Loại</th>
                      <th className="py-3.5 px-4 w-36">Cách đọc</th>
                      <th className="py-3.5 px-4">Ý nghĩa & Ghi chú</th>
                      <th className="py-3.5 px-4">Ví dụ (例文)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredItems.map((item) => {
                      const originalIndex =
                        currentItems.findIndex((x) => x.id === item.id) + 1;
                      const isRowRevealed = !!revealedRows[item.id];
                      const shouldMaskReading = hideReadingInTable && !isRowRevealed;
                      const shouldMaskMeaning = hideMeaningInTable && !isRowRevealed;

                      return (
                        <tr
                          key={item.id}
                          onClick={() =>
                            (hideReadingInTable || hideMeaningInTable) &&
                            toggleRowReveal(item.id)
                          }
                          className={`transition-colors cursor-pointer ${
                            isKanjiTab
                              ? 'hover:bg-rose-50/40'
                              : 'hover:bg-emerald-50/40'
                          }`}
                        >
                          <td className="py-3 px-4 text-center">
                            <span
                              className={`inline-block px-2 py-0.5 rounded-md font-black text-[11px] ${
                                isKanjiTab
                                  ? 'bg-rose-100 text-rose-800'
                                  : 'bg-emerald-100 text-emerald-800'
                              }`}
                            >
                              #{originalIndex}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-black text-slate-900 text-base">
                            {item.term}
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-extrabold text-[11px] border border-slate-200">
                              {item.hanViet}
                            </span>
                          </td>
                          <td
                            className={`py-3 px-4 font-bold text-sm ${
                              isKanjiTab ? 'text-rose-600' : 'text-emerald-600'
                            }`}
                          >
                            {shouldMaskReading ? (
                              <span className="px-2.5 py-1 rounded bg-slate-200 text-slate-400 text-[11px] select-none">
                                Bấm để hiện
                              </span>
                            ) : (
                              item.reading
                            )}
                          </td>
                          <td className="py-3 px-4">
                            {shouldMaskMeaning ? (
                              <span className="px-2.5 py-1 rounded bg-slate-200 text-slate-400 text-[11px] select-none">
                                Bấm để hiện nghĩa
                              </span>
                            ) : (
                              <div>
                                <div className="font-bold text-slate-800 text-xs">
                                  {item.meaning}
                                </div>
                                {item.note && (
                                  <div className="text-[11px] text-slate-500 mt-0.5">
                                    {item.note}
                                  </div>
                                )}
                              </div>
                            )}
                          </td>
                          <td className="py-3 px-4 text-slate-600">
                            {item.example && (
                              <div className="space-y-0.5">
                                <div className="font-semibold text-slate-800">
                                  {item.example.split('\n')[0]}
                                </div>
                                {!shouldMaskMeaning && item.example.split('\n')[1] && (
                                  <div className="text-[11px] text-slate-400">
                                    {item.example.split('\n')[1]}
                                  </div>
                                )}
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          TAB 3: NGỮ PHÁP (文法)
         ===================================================================== */}
      {activeTab === 'grammar' && (
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 text-center space-y-4 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 mx-auto flex items-center justify-center">
            <FileText size={32} />
          </div>
          <h2 className="text-xl md:text-2xl font-black text-slate-800">
            Phần Ôn Tập Ngữ Pháp N3 (文法)
          </h2>
          <p className="text-slate-500 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Khu vực này đã được chuẩn bị sẵn sàng cho các mẫu Ngữ pháp N3 trọng tâm. Khi bạn gửi danh sách các mẫu ngữ pháp cần ôn, hệ thống sẽ tạo thẻ Flashcard và ví dụ chi tiết tại đây!
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('kanji')}
              className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-all cursor-pointer"
            >
              Xem 15 Flashcard Kanji
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vocab')}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all cursor-pointer"
            >
              Xem 17 Flashcard Từ vựng
            </button>
          </div>
        </div>
      )}

      {/* Floating Bottom Bar for Kanji & Vocab Tabs */}
      {(activeTab === 'kanji' || activeTab === 'vocab') && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white backdrop-blur-md px-5 py-3.5 rounded-3xl shadow-2xl flex items-center justify-between gap-4 z-40 border border-slate-700/70 w-[94%] max-w-xl">
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-2xl text-white flex items-center justify-center font-black text-sm shadow-md ${
                accentColor === 'rose' ? 'bg-rose-500' : 'bg-emerald-500'
              }`}
            >
              {currentItems.length}
            </div>
            <div>
              <p className="text-xs font-black text-white">
                {isKanjiTab
                  ? 'Bộ Flashcard Kanji N3 (15 từ)'
                  : 'Bộ Flashcard Từ vựng N3 (17 từ)'}
              </p>
              <p className="text-[11px] font-semibold text-slate-400">
                Hỗ trợ lật thẻ 3D, phím tắt & Tập viết Chữ Hán
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onStartBySections([currentSectionId])}
            className={`px-5 py-2.5 rounded-2xl text-white font-black text-xs flex items-center gap-1.5 shadow-lg cursor-pointer transition-all active:scale-95 ${
              isKanjiTab
                ? 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-rose-500/25'
                : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-500/25'
            }`}
          >
            <Play size={14} fill="currentColor" />
            <span>Bắt đầu Luyện Flashcard</span>
          </button>
        </div>
      )}
    </div>
  );
};
