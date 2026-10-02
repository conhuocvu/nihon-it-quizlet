import React, { useState, useMemo } from 'react';
import type { Lesson, StudyItem } from '../data/lessons';
import { kanjiMasterN3Chars } from '../data/kanjiMasterN3Data';
import type { KanjiChar } from '../data/kanjiMasterN3Data';
import {
  ArrowLeft,
  BookOpen,
  Sparkles,
  CheckSquare,
  Square,
  X,
  Eye,
  Check,
  Filter,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Search,
  Play,
} from 'lucide-react';

interface KanjiMasterN3SelectorProps {
  lessons: Lesson[];
  onStartBySections: (sectionIds: string[]) => void;
  onBackToHome: () => void;
}

export const KanjiMasterN3Selector: React.FC<KanjiMasterN3SelectorProps> = ({
  lessons,
  onStartBySections,
  onBackToHome,
}) => {
  // State for multi-lesson practice selection
  const [selectedSectionIds, setSelectedSectionIds] = useState<string[]>(
    lessons.map((l) => l.sections[0].id)
  );

  // State for summary modal popup
  const [modalLessonId, setModalLessonId] = useState<number | null>(null);
  const [selectedKanjiInModal, setSelectedKanjiInModal] = useState<KanjiChar | null>(null);

  // Chapter filter state: 'all' or chapter number 3, 4, 5, 6, 7, 8
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');

  // Preview List controls (similar to MimiKara Oboeru)
  const [showWordList, setShowWordList] = useState<boolean>(true);
  const [previewSearch, setPreviewSearch] = useState<string>('');

  const CHAPTERS = [
    { num: 1, name: 'Chương 1: Đời sống (生活)', badge: 'C1: Đời sống (Bài 1-5)', color: 'from-teal-500 to-emerald-500' },
    { num: 2, name: 'Chương 2: Nhà cửa (家)', badge: 'C2: Nhà cửa (Bài 1-5)', color: 'from-amber-600 to-yellow-500' },
    { num: 3, name: 'Chương 3: Ẩm thực (料理)', badge: 'C3: Ẩm thực (Bài 1-5)', color: 'from-amber-500 to-orange-500' },
    { num: 4, name: 'Chương 4: Bệnh viện (病院)', badge: 'C4: Bệnh viện (Bài 6-10)', color: 'from-rose-500 to-pink-500' },
    { num: 5, name: 'Chương 5: Thể thao (スポーツ)', badge: 'C5: Thể thao (Bài 11-15)', color: 'from-emerald-500 to-teal-500' },
    { num: 6, name: 'Chương 6: Cảm xúc (感情)', badge: 'C6: Cảm xúc (Bài 16-20)', color: 'from-purple-500 to-indigo-500' },
    { num: 7, name: 'Chương 7: Kết hôn (結婚)', badge: 'C7: Kết hôn (Bài 21-25)', color: 'from-pink-500 to-rose-500' },
    { num: 8, name: 'Chương 8: Quan hệ (関係)', badge: 'C8: Quan hệ (Bài 26-30)', color: 'from-sky-500 to-blue-500' },
    { num: 9, name: 'Chương 9: Đơn vị (単位)', badge: 'C9: Đơn vị (Bài 31-32)', color: 'from-indigo-500 to-cyan-500' },
    { num: 10, name: 'Chương 10: Trường học (学校)', badge: 'C10: Trường học (Bài 33-37)', color: 'from-blue-500 to-indigo-500' },
    { num: 11, name: 'Chương 11: Phỏng vấn (面接)', badge: 'C11: Phỏng vấn (Bài 38-42)', color: 'from-violet-500 to-purple-600' },
  ];

  const getChapterInfo = (lessonId: number) => {
    if (lessonId >= 101 && lessonId <= 105) return { num: 1, name: 'Đời sống (生活)', color: 'from-teal-500 to-emerald-500' };
    if (lessonId >= 201 && lessonId <= 205) return { num: 2, name: 'Nhà cửa (家)', color: 'from-amber-600 to-yellow-500' };
    if (lessonId <= 5) return { num: 3, name: 'Ẩm thực (料理)', color: 'from-amber-500 to-orange-500' };
    if (lessonId <= 10) return { num: 4, name: 'Bệnh viện (病院)', color: 'from-rose-500 to-pink-500' };
    if (lessonId <= 15) return { num: 5, name: 'Thể thao (スポーツ)', color: 'from-emerald-500 to-teal-500' };
    if (lessonId <= 20) return { num: 6, name: 'Cảm xúc (感情)', color: 'from-purple-500 to-indigo-500' };
    if (lessonId <= 25) return { num: 7, name: 'Kết hôn (結婚)', color: 'from-pink-500 to-rose-500' };
    if (lessonId <= 30) return { num: 8, name: 'Quan hệ (関係)', color: 'from-sky-500 to-blue-500' };
    if (lessonId <= 32) return { num: 9, name: 'Đơn vị (単位)', color: 'from-indigo-500 to-cyan-500' };
    if (lessonId <= 37) return { num: 10, name: 'Trường học (学校)', color: 'from-blue-500 to-indigo-500' };
    return { num: 11, name: 'Phỏng vấn (面接)', color: 'from-violet-500 to-purple-600' };
  };

  const getLessonNumInChapter = (lessonId: number) => {
    if (lessonId >= 101 && lessonId <= 105) return lessonId - 100;
    if (lessonId >= 201 && lessonId <= 205) return lessonId - 200;
    if (lessonId <= 5) return lessonId;
    if (lessonId <= 10) return lessonId - 5;
    if (lessonId <= 15) return lessonId - 10;
    if (lessonId <= 20) return lessonId - 15;
    if (lessonId <= 25) return lessonId - 20;
    if (lessonId <= 30) return lessonId - 25;
    if (lessonId <= 32) return lessonId - 30;
    if (lessonId <= 37) return lessonId - 32;
    return lessonId - 37;
  };

  const handleToggleChapter = (chapterNum: number) => {
    const chapterLessons = lessons.filter((l) => getChapterInfo(l.id).num === chapterNum);
    const chapterSectionIds = chapterLessons.map((l) => l.sections[0].id);
    const allChapterSelected = chapterSectionIds.every((id) => selectedSectionIds.includes(id));

    if (allChapterSelected) {
      setSelectedSectionIds((prev) => prev.filter((id) => !chapterSectionIds.includes(id)));
    } else {
      setSelectedSectionIds((prev) => Array.from(new Set([...prev, ...chapterSectionIds])));
    }
  };

  const handleToggleSelect = (e: React.MouseEvent, sectionId: string) => {
    e.stopPropagation();
    setSelectedSectionIds((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleToggleSelectAll = () => {
    const visibleLessons = filteredLessons;
    const visibleSectionIds = visibleLessons.map((l) => l.sections[0].id);

    const allVisibleSelected = visibleSectionIds.every((id) =>
      selectedSectionIds.includes(id)
    );

    if (allVisibleSelected) {
      setSelectedSectionIds((prev) =>
        prev.filter((id) => !visibleSectionIds.includes(id))
      );
    } else {
      setSelectedSectionIds((prev) => Array.from(new Set([...prev, ...visibleSectionIds])));
    }
  };

  const openLessonSummary = (lessonId: number) => {
    setModalLessonId(lessonId);
    const chars = kanjiMasterN3Chars[lessonId] || [];
    setSelectedKanjiInModal(chars.length > 0 ? chars[0] : null);
  };

  const closeLessonSummary = () => {
    setModalLessonId(null);
    setSelectedKanjiInModal(null);
  };

  const filteredLessons = lessons.filter((lesson) => {
    if (selectedChapter === 'all') return true;
    const chapInfo = getChapterInfo(lesson.id);
    return chapInfo.num === selectedChapter;
  });

  const totalItemsCount = useMemo(() => {
    return lessons.reduce((acc, l) => acc + l.sections.reduce((sAcc, s) => sAcc + s.items.length, 0), 0);
  }, [lessons]);

  // Flatten all items with numbering and lesson/chapter metadata
  const allFlatItemsWithNumber = useMemo(() => {
    let globalCounter = 1;
    const list: {
      globalNum: number;
      item: StudyItem;
      sectionId: string;
      lessonTitle: string;
      lessonId: number;
      chapterNum: number;
      chapterName: string;
    }[] = [];
    lessons.forEach((lesson) => {
      const chap = getChapterInfo(lesson.id);
      lesson.sections.forEach((section) => {
        section.items.forEach((item) => {
          list.push({
            globalNum: globalCounter++,
            item,
            sectionId: section.id,
            lessonTitle: lesson.title,
            lessonId: lesson.id,
            chapterNum: chap.num,
            chapterName: chap.name,
          });
        });
      });
    });
    return list;
  }, [lessons]);

  // Selected words list based on selectedSectionIds
  const selectedWordList = useMemo(() => {
    const validSections = new Set(selectedSectionIds);
    return allFlatItemsWithNumber.filter((entry) => validSections.has(entry.sectionId));
  }, [allFlatItemsWithNumber, selectedSectionIds]);

  // Filter within preview list via search query
  const filteredPreviewList = useMemo(() => {
    const q = previewSearch.toLowerCase().trim();
    if (!q) return selectedWordList;
    return selectedWordList.filter(
      (entry) =>
        entry.globalNum.toString().includes(q) ||
        (entry.item.term && entry.item.term.toLowerCase().includes(q)) ||
        (entry.item.reading && entry.item.reading.toLowerCase().includes(q)) ||
        (entry.item.meaning && entry.item.meaning.toLowerCase().includes(q)) ||
        (entry.item.answer && entry.item.answer.toLowerCase().includes(q)) ||
        (entry.item.example && entry.item.example.toLowerCase().includes(q)) ||
        entry.lessonTitle.toLowerCase().includes(q) ||
        entry.chapterName.toLowerCase().includes(q)
    );
  }, [selectedWordList, previewSearch]);

  const activeModalLesson = modalLessonId
    ? lessons.find((l) => l.id === modalLessonId)
    : null;
  const modalKanjiList = modalLessonId ? kanjiMasterN3Chars[modalLessonId] || [] : [];

  return (
    <div className="max-w-7xl w-full mx-auto px-4 py-6 pb-28">
      {/* Header and Back navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-slate-500 hover:text-rose-600 hover:border-rose-200 hover:bg-rose-50/50 transition-all cursor-pointer"
            title="Quay về trang chủ"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wide uppercase bg-rose-100 text-rose-700 border border-rose-200">
                Giáo Trình Mới N3
              </span>
              <span className="text-xs font-bold text-slate-400">
                {lessons.length} Bài học • {lessons.length * 4} Chữ Hán • {totalItemsCount} Từ vựng
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2">
              Kanji Master N3
            </h1>
          </div>
        </div>

        {/* Global Controls & Actions */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={handleToggleSelectAll}
            className="px-3.5 py-2 text-xs font-black rounded-xl border bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-sm cursor-pointer transition-all flex items-center gap-1.5"
          >
            {filteredLessons.every((l) => selectedSectionIds.includes(l.sections[0].id)) ? (
              <>
                <CheckSquare size={14} className="text-rose-500" />
                <span>Bỏ chọn các bài đang xem</span>
              </>
            ) : (
              <>
                <Square size={14} className="text-slate-400" />
                <span>Chọn tất cả bài đang xem</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              if (selectedSectionIds.length > 0) {
                onStartBySections(selectedSectionIds);
              }
            }}
            disabled={selectedSectionIds.length === 0}
            className={`px-4 py-2 rounded-xl text-xs font-black tracking-wide flex items-center gap-2 transition-all ${selectedSectionIds.length > 0
              ? 'bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-md shadow-rose-100 hover:shadow-lg hover:scale-102 cursor-pointer'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
          >
            <BookOpen size={14} />
            <span>Học các bài đã chọn ({selectedSectionIds.length} bài • {selectedWordList.length} từ)</span>
          </button>
        </div>
      </div>

      {/* Chapter Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
        <span className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
          <Filter size={12} /> Chương:
        </span>
        <button
          onClick={() => setSelectedChapter('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 border ${selectedChapter === 'all'
            ? 'bg-slate-800 text-white border-slate-800 shadow-sm'
            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
        >
          Tất cả ({lessons.length} bài)
        </button>
        {CHAPTERS.map((chap) => (
          <button
            key={chap.num}
            onClick={() => setSelectedChapter(chap.num)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 border ${selectedChapter === chap.num
              ? 'bg-rose-500 text-white border-rose-500 shadow-sm'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-600'
              }`}
          >
            {chap.badge}
          </button>
        ))}
      </div>

      {/* Chapter Sections with Grid of Lesson Cards */}
      <div className="space-y-8">
        {CHAPTERS.filter((chap) => selectedChapter === 'all' || selectedChapter === chap.num).map((chap) => {
          const chapLessons = lessons.filter((l) => getChapterInfo(l.id).num === chap.num);
          if (chapLessons.length === 0) return null;

          const chapSectionIds = chapLessons.map((l) => l.sections[0].id);
          const selectedInChapCount = chapSectionIds.filter((id) => selectedSectionIds.includes(id)).length;
          const isAllChapSelected = chapSectionIds.length > 0 && selectedInChapCount === chapSectionIds.length;

          return (
            <div key={chap.num} className="bg-white/60 backdrop-blur-xs rounded-3xl p-5 border border-slate-200/80 shadow-xs">
              {/* Chapter Header Banner */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-4 border-b border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <span className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${chap.color} shadow-xs shrink-0`} />
                  <h2 className="text-base sm:text-lg font-black text-slate-800 tracking-tight">
                    {chap.name}
                  </h2>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/80">
                    Đã chọn {selectedInChapCount}/{chapLessons.length} bài
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleToggleChapter(chap.num)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer border shadow-xs ${
                    isAllChapSelected
                      ? 'bg-rose-500 text-white border-rose-500 hover:bg-rose-600 shadow-rose-100'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200'
                  }`}
                >
                  {isAllChapSelected ? <CheckSquare size={14} /> : <Square size={14} />}
                  <span>{isAllChapSelected ? 'Bỏ chọn cả chương' : 'Tích chọn cả chương'}</span>
                </button>
              </div>

              {/* Grid of Lesson Cards in Chapter */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {chapLessons.map((lesson) => {
                  const sectionId = lesson.sections[0].id;
                  const isSelected = selectedSectionIds.includes(sectionId);
                  const chapInfo = getChapterInfo(lesson.id);
                  const lessonNum = getLessonNumInChapter(lesson.id);
                  const chars = kanjiMasterN3Chars[lesson.id] || [];
                  const subtitle = lesson.title.split(': ')[1] || lesson.title;

                  return (
                    <div
                      key={lesson.id}
                      onClick={() => openLessonSummary(lesson.id)}
                      className={`group relative bg-white rounded-3xl p-4 border transition-all cursor-pointer flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 ${
                        isSelected
                          ? 'border-rose-300 ring-2 ring-rose-200/60 shadow-md bg-gradient-to-b from-rose-50/20 to-white'
                          : 'border-slate-200/90 hover:border-rose-200 shadow-sm'
                      }`}
                    >
                      {/* Card Top Row: Lesson Title Badge & Separate Checkbox */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-lg bg-slate-100 text-slate-600 uppercase border border-slate-200/60">
                              C{chapInfo.num} • Bài {lessonNum}
                            </span>
                          </div>

                          {/* Independent Selection Checkbox */}
                          <button
                            type="button"
                            onClick={(e) => handleToggleSelect(e, sectionId)}
                            className={`p-1.5 rounded-xl transition-all cursor-pointer flex items-center justify-center ${
                              isSelected
                                ? 'bg-rose-500 text-white shadow-sm shadow-rose-200 scale-105'
                                : 'bg-slate-100 text-slate-300 hover:bg-rose-100 hover:text-rose-500'
                            }`}
                            title={isSelected ? 'Bỏ chọn học bài này' : 'Chọn học bài này'}
                          >
                            {isSelected ? <Check size={14} strokeWidth={3} /> : <Square size={14} />}
                          </button>
                        </div>

                        {/* Subtitle Topic */}
                        <h3 className="text-sm font-extrabold text-slate-800 line-clamp-1 group-hover:text-rose-600 transition-colors mb-3">
                          {subtitle}
                        </h3>

                        {/* 4 Kanji Characters Box */}
                        <div className="bg-slate-50/80 rounded-2xl p-2.5 border border-slate-100 group-hover:bg-rose-50/30 group-hover:border-rose-100 transition-colors">
                          <div className="grid grid-cols-4 gap-1.5 text-center">
                            {chars.map((k) => (
                              <div
                                key={k.char}
                                className="bg-white rounded-xl py-2 px-1 border border-slate-200/60 shadow-xs flex flex-col items-center justify-center group-hover:border-rose-200/80 transition-colors"
                              >
                                <span className="text-xl font-black text-slate-800 leading-tight">
                                  {k.char}
                                </span>
                                <span className="text-[9px] font-black text-rose-600/80 uppercase truncate max-w-full px-0.5 mt-0.5">
                                  {k.hanViet}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer: Summary Click Action Indicator */}
                      <div className="mt-3 pt-2.5 border-t border-slate-100/80 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-rose-600">
                        <span className="flex items-center gap-1 text-[10px]">
                          <Eye size={12} /> Xem chi tiết
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold">
                          {lesson.sections[0].items.length} từ vựng
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* CONFIRMATION PREVIEW LIST OF NUMBERED WORDS (MimiKara Oboeru Style) */}
      <div id="kanji-preview-list" className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden transition-all scroll-mt-6">
        {/* Preview Panel Header Bar */}
        <div
          onClick={() => setShowWordList((prev) => !prev)}
          className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between cursor-pointer hover:bg-slate-800 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-rose-500 text-white font-extrabold text-xs">
              <CheckCircle2 size={16} />
            </span>
            <div>
              <h3 className="font-extrabold text-base flex items-center gap-2">
                <span>Danh sách Confirm các từ sẽ học</span>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-xs border border-rose-500/30">
                  {selectedWordList.length} từ
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                Đã đánh số thứ tự từ #1 đến #{totalItemsCount}. Kiểm tra danh sách từ vựng trước khi vào Flashcard.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-3 py-1.5 rounded-lg bg-white/10 text-slate-200 hover:text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
            >
              <span>{showWordList ? 'Thu gọn' : 'Xem danh sách'}</span>
              {showWordList ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>

        {/* Preview Content Area */}
        {showWordList && (
          <div className="p-4 md:p-6 space-y-4 bg-slate-50/50">
            {/* Search Filter for Preview */}
            <div className="relative max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={previewSearch}
                onChange={(e) => setPreviewSearch(e.target.value)}
                placeholder="Lọc từ trong danh sách sẽ học (ví dụ: 起きる, #12, おきる, thức dậy)..."
                className="w-full pl-10 pr-12 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              {previewSearch && (
                <button
                  type="button"
                  onClick={() => setPreviewSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded cursor-pointer"
                >
                  Xóa
                </button>
              )}
            </div>

            {/* Scrollable Word Table */}
            {filteredPreviewList.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-xs font-bold">
                {selectedWordList.length === 0
                  ? 'Chưa chọn bài học nào. Hãy tích chọn ít nhất 1 bài để xem danh sách từ vựng.'
                  : 'Không có từ vựng nào khớp với bộ lọc tìm kiếm'}
              </div>
            ) : (
              <div className="overflow-x-auto max-h-[420px] overflow-y-auto border border-slate-200 rounded-2xl bg-white shadow-inner scrollbar-thin">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-200 text-slate-600 font-extrabold uppercase text-[10px] tracking-wider sticky top-0 z-10">
                    <tr>
                      <th className="py-3 px-4 w-16 text-center">STT (#)</th>
                      <th className="py-3 px-4 w-36">Chữ Hán / Từ vựng</th>
                      <th className="py-3 px-4 w-32">Cách đọc (Reading)</th>
                      <th className="py-3 px-4">Ý nghĩa (Meaning)</th>
                      <th className="py-3 px-4 w-32 text-right">Bài học</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {filteredPreviewList.map((entry) => (
                      <tr key={entry.item.id} className="hover:bg-rose-50/40 transition-colors">
                        <td className="py-2.5 px-4 text-center">
                          <span className="inline-block px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 font-black text-[11px]">
                            #{entry.globalNum}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 font-black text-slate-900 text-sm">
                          {entry.item.term}
                        </td>
                        <td className="py-2.5 px-4 font-bold text-rose-600">
                          {entry.item.reading || '-'}
                        </td>
                        <td className="py-2.5 px-4 text-slate-700 leading-snug">
                          <div className="font-semibold">{entry.item.meaning || entry.item.answer}</div>
                          {entry.item.example && (
                            <div className="text-[11px] text-slate-400 mt-0.5 font-normal">
                              {entry.item.example.split('\n')[0]}
                            </div>
                          )}
                        </td>
                        <td className="py-2.5 px-4 text-right text-slate-500 font-bold text-[11px] whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => openLessonSummary(entry.lessonId)}
                            className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-rose-100 hover:text-rose-700 text-slate-600 border border-slate-200/60 inline-flex items-center gap-1 transition-colors cursor-pointer"
                            title="Xem tổng hợp 4 chữ Hán bài này"
                          >
                            <span>C{entry.chapterNum} • B{getLessonNumInChapter(entry.lessonId)}</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold px-1">
              <span>Hiển thị {filteredPreviewList.length} / {selectedWordList.length} từ chọn</span>
              <span>Đã sẵn sàng confirm để vào học Flashcard</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Start Action CTA Button */}
      <div className="flex justify-center pt-2">
        <button
          type="button"
          onClick={() => {
            if (selectedSectionIds.length > 0) {
              onStartBySections(selectedSectionIds);
            }
          }}
          disabled={selectedSectionIds.length === 0}
          className={`px-10 py-4 rounded-2xl font-black text-lg text-white shadow-xl flex items-center gap-3 transition-all duration-300 ${
            selectedSectionIds.length > 0
              ? 'bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 hover:from-rose-600 hover:to-red-700 shadow-rose-200 active:scale-98 cursor-pointer'
              : 'bg-slate-300 shadow-none cursor-not-allowed opacity-60'
          }`}
        >
          <Play size={22} fill="currentColor" />
          <span>
            Bắt đầu học Flashcard ({selectedWordList.length} từ)
          </span>
        </button>
      </div>

      {/* Floating Action Bar at bottom when lessons are selected */}
      {selectedSectionIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white backdrop-blur-md px-5 py-3.5 rounded-3xl shadow-2xl flex items-center justify-between gap-4 z-40 border border-slate-700/60 w-[94%] max-w-2xl animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-rose-500 text-white flex items-center justify-center font-black shadow-md shadow-rose-900/40 text-sm">
              {selectedSectionIds.length}
            </div>
            <div>
              <p className="text-xs font-black text-white">
                Đã chọn {selectedSectionIds.length} bài học
              </p>
              <p className="text-[11px] font-semibold text-slate-400">
                Tổng cộng {selectedWordList.length} từ vựng
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setShowWordList(true);
                const el = document.getElementById('kanji-preview-list');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[11px] font-bold text-slate-300 hover:text-white px-3 py-1.5 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Eye size={13} />
              <span>Xem danh sách từ</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedSectionIds([])}
              className="text-[11px] font-bold text-slate-400 hover:text-white px-2.5 py-1.5 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Bỏ chọn
            </button>

            <button
              type="button"
              onClick={() => onStartBySections(selectedSectionIds)}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white font-black text-xs shadow-lg shadow-rose-900/30 flex items-center gap-1.5 cursor-pointer hover:scale-102 transition-all"
            >
              <Play size={14} fill="currentColor" />
              <span>Học ngay</span>
            </button>
          </div>
        </div>
      )}

      {/* SUMMARY POPUP MODAL */}
      {activeModalLesson && modalLessonId && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
          onClick={closeLessonSummary}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-rose-100 text-rose-700 border border-rose-200">
                    Chương {getChapterInfo(modalLessonId).num} • Bài {getLessonNumInChapter(modalLessonId)}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {getChapterInfo(modalLessonId).name}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800">
                  {activeModalLesson.title}
                </h2>
              </div>
              <button
                onClick={closeLessonSummary}
                className="p-2 rounded-2xl bg-slate-100 text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto py-5 space-y-6 flex-1 pr-1">
              {/* 4 Kanji Cards Grid */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-rose-500" />
                    Tổng Hợp 4 Chữ Hán Trong Bài
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Click vào chữ để xem chi tiết
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {modalKanjiList.map((kanji) => {
                    const isSelectedKanji = selectedKanjiInModal?.char === kanji.char;
                    return (
                      <div
                        key={kanji.char}
                        onClick={() => setSelectedKanjiInModal(kanji)}
                        className={`p-4 rounded-2xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:scale-102 ${isSelectedKanji
                          ? 'bg-rose-50/50 border-rose-400 ring-2 ring-rose-100 shadow-sm'
                          : 'bg-slate-50/50 hover:bg-white border-slate-200'
                          }`}
                      >
                        <span className="text-4xl font-black text-slate-800 mb-1 select-all">
                          {kanji.char}
                        </span>
                        <span className="text-[10px] font-black tracking-wider bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full uppercase border border-rose-200/40 mb-1">
                          {kanji.hanViet}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">
                          {kanji.strokes} nét
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Selected Kanji Hero Inspector Layout */}
              {selectedKanjiInModal && (
                <div className="p-5 sm:p-6 bg-gradient-to-br from-rose-50/40 via-slate-50 to-orange-50/30 border border-rose-100 rounded-3xl animate-fade-in shadow-xs">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">

                    {/* Left Column: Huge Hero Character Display Box */}
                    <div className="md:col-span-5 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group">
                      {/* Subtle background glow circle */}
                      <div className="absolute -right-10 -top-10 w-36 h-36 bg-rose-100/50 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
                      <div className="absolute -left-10 -bottom-10 w-36 h-36 bg-orange-100/40 rounded-full blur-2xl group-hover:scale-125 transition-transform" />

                      {/* Stroke count tag top corner */}
                      <span className="absolute top-3 right-3 text-[10px] font-black text-slate-400 bg-slate-100/80 px-2.5 py-1 rounded-xl border border-slate-200/60">
                        {selectedKanjiInModal.strokes} nét
                      </span>

                      {/* HUGE Kanji Character */}
                      <span className="text-8xl sm:text-9xl font-black text-slate-800 my-2 tracking-tight select-all drop-shadow-xs group-hover:scale-105 transition-transform">
                        {selectedKanjiInModal.char}
                      </span>

                      {/* Han-Viet Pill Badge */}
                      <span className="text-sm font-black tracking-widest bg-gradient-to-r from-rose-500 to-red-500 text-white px-4 py-1 rounded-full uppercase shadow-md shadow-rose-200 mb-2">
                        {selectedKanjiInModal.hanViet}
                      </span>

                      {/* Main Meaning */}
                      <p className="text-xs font-bold text-slate-600 line-clamp-2 mt-1">
                        {selectedKanjiInModal.meaning}
                      </p>
                    </div>

                    {/* Right Column: Readings & Textbook Vocabulary */}
                    <div className="md:col-span-7 flex flex-col gap-3 justify-between">
                      {/* Readings (Kun & On) */}
                      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col gap-3">
                        <div>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1.5">
                            Kunyomi • Cách đọc Nhật
                          </span>
                          <div className="flex flex-wrap gap-1.5 min-h-[24px]">
                            {selectedKanjiInModal.kunyomi.map((k, i) => (
                              <span
                                key={i}
                                className="text-xs font-bold bg-rose-50 text-rose-700 px-2.5 py-1 rounded-lg border border-rose-200/50"
                              >
                                {k}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-100">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1.5">
                            Onyomi • Cách đọc Hán
                          </span>
                          <div className="flex flex-wrap gap-1.5 min-h-[24px]">
                            {selectedKanjiInModal.onyomi.map((o, i) => (
                              <span
                                key={i}
                                className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/60"
                              >
                                {o}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Textbook Example Words */}
                      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col flex-1">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-2">
                          Từ vựng minh họa trong giáo trình
                        </span>
                        <div className="flex flex-col gap-2 max-h-40 overflow-y-auto pr-1">
                          {selectedKanjiInModal.examples.map((ex, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between gap-3 text-xs bg-slate-50/70 p-2 rounded-xl border border-slate-100 hover:bg-rose-50/30 transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-black text-sm text-rose-600">
                                  {ex.word}
                                </span>
                                <span className="text-[11px] text-slate-500 font-semibold bg-white px-2 py-0.5 rounded-md border border-slate-200/60">
                                  {ex.reading}
                                </span>
                              </div>
                              <span className="text-slate-700 font-bold text-right text-xs">
                                {ex.meaning}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              )}


            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Toggle practice selection for this lesson */}
              <button
                onClick={(e) => handleToggleSelect(e, activeModalLesson.sections[0].id)}
                className="w-full sm:w-auto text-xs font-black flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 cursor-pointer"
              >
                {selectedSectionIds.includes(activeModalLesson.sections[0].id) ? (
                  <>
                    <CheckSquare size={16} className="text-rose-500" />
                    <span>Đã chọn bài này trong danh sách ôn</span>
                  </>
                ) : (
                  <>
                    <Square size={16} className="text-slate-400" />
                    <span>Thêm bài này vào danh sách ôn tập</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={closeLessonSummary}
                  className="px-4 py-2.5 rounded-xl text-xs font-black text-slate-500 hover:bg-slate-100 cursor-pointer border border-slate-200/60 w-full sm:w-auto text-center"
                >
                  Đóng
                </button>

                <button
                  onClick={() => {
                    closeLessonSummary();
                    onStartBySections([activeModalLesson.sections[0].id]);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-red-500 text-white font-black text-xs shadow-md shadow-rose-100 hover:scale-102 transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap w-full sm:w-auto"
                >
                  <BookOpen size={14} />
                  <span>Học riêng bài này ({activeModalLesson.sections[0].items.length} từ)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

