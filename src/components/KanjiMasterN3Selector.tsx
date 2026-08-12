import React, { useState } from 'react';
import type { Lesson } from '../data/lessons';
import { kanjiMasterN3Chars } from '../data/kanjiMasterN3Data';
import type { KanjiChar } from '../data/kanjiMasterN3Data';
import { ArrowLeft, BookOpen, Sparkles, Award, ChevronRight, Info, CheckCircle, BookOpenCheck, CheckSquare, Square } from 'lucide-react';

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
  const [selectedLessonId, setSelectedLessonId] = useState<number>(1);
  const [selectedKanji, setSelectedKanji] = useState<KanjiChar | null>(null);
  const [selectedSectionIds, setSelectedSectionIds] = useState<string[]>(
    lessons.map((l) => l.sections[0].id)
  );

  const activeLesson = lessons.find((l) => l.id === selectedLessonId) || lessons[0];
  const kanjiList = kanjiMasterN3Chars[selectedLessonId] || [];

  const handleToggleSelect = (e: React.MouseEvent, sectionId: string) => {
    e.stopPropagation();
    setSelectedSectionIds((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleToggleSelectAll = () => {
    if (selectedSectionIds.length === lessons.length) {
      setSelectedSectionIds([]);
    } else {
      setSelectedSectionIds(lessons.map((l) => l.sections[0].id));
    }
  };

  const selectedItemsCount = lessons
    .filter((l) => selectedSectionIds.includes(l.sections[0].id))
    .reduce((acc, l) => acc + l.sections[0].items.length, 0);

  return (
    <div className="max-w-6xl w-full mx-auto px-4 py-4">
      {/* Header and Back navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
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
                Giáo Trình Mới
              </span>
            </div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
              Kanji Master N3
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-100 py-1.5 px-3 rounded-xl border border-slate-200/50">
          <Award size={14} className="text-rose-500" />
          <span>
            {activeLesson.id <= 5
              ? 'Chương 3: 料理 (Ẩm thực)'
              : activeLesson.id <= 10
              ? 'Chương 4: 病院 (Bệnh viện)'
              : activeLesson.id <= 15
              ? 'Chương 5: スポーツ (Thể thao)'
              : 'Chương 6: 感情 (Cảm xúc)'}
          </span>
        </div>
      </div>

      {/* Main Grid: Left sidebar (lessons), Right content (Kanji Summary & Flashcards) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Lesson selector */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-400">
              Mục lục bài học
            </h2>
            <button
              onClick={handleToggleSelectAll}
              className="text-[10px] font-black text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100/50 px-2.5 py-1 rounded-xl border border-rose-200/40 cursor-pointer transition-colors"
            >
              {selectedSectionIds.length === lessons.length ? 'Bỏ chọn hết' : 'Chọn tất cả'}
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {lessons.map((lesson) => {
              const isSelected = selectedSectionIds.includes(lesson.sections[0].id);
              const chapterNum = lesson.id <= 5 ? 3 : lesson.id <= 10 ? 4 : lesson.id <= 15 ? 5 : 6;
              const lessonNumInChapter = lesson.id <= 5 ? lesson.id : lesson.id <= 10 ? lesson.id - 5 : lesson.id <= 15 ? lesson.id - 10 : lesson.id - 15;
              const subtitle = lesson.title.split(': ')[1] || lesson.title;

              return (
                <div
                  key={lesson.id}
                  onClick={() => {
                    setSelectedLessonId(lesson.id);
                    setSelectedKanji(null);
                  }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                    selectedLessonId === lesson.id
                      ? 'bg-gradient-to-r from-rose-50 to-red-50/30 border-rose-200/80 shadow-sm'
                      : 'bg-white hover:bg-slate-50 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Checkbox */}
                    <div
                      onClick={(e) => handleToggleSelect(e, lesson.sections[0].id)}
                      className="p-1 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-rose-500 flex items-center justify-center"
                      title={isSelected ? "Bỏ chọn học bài này" : "Chọn học bài này"}
                    >
                      {isSelected ? (
                        <CheckSquare size={20} className="text-rose-500" />
                      ) : (
                        <Square size={20} className="text-slate-300 hover:border-rose-300" />
                      )}
                    </div>

                    <div className="flex items-start gap-2.5">
                      <span className={`p-2 rounded-xl flex items-center justify-center transition-all ${
                        selectedLessonId === lesson.id
                          ? 'bg-rose-500 text-white shadow-md shadow-rose-200'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                      }`}>
                        <BookOpen size={14} />
                      </span>
                      <div>
                        <h3 className={`text-sm font-black transition-all ${
                          selectedLessonId === lesson.id ? 'text-rose-700' : 'text-slate-700'
                        }`}>
                          C{chapterNum} - Bài {lessonNumInChapter}
                        </h3>
                        <p className="text-xs font-bold text-slate-400 mt-0.5 line-clamp-1">
                          {subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`transition-all ${
                      selectedLessonId === lesson.id
                        ? 'text-rose-500 translate-x-0.5'
                        : 'text-slate-300 group-hover:text-slate-400'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Quick Stats banner */}
          <div className="bg-gradient-to-tr from-rose-500 to-red-500 rounded-3xl p-5 text-white shadow-lg shadow-rose-100 relative overflow-hidden mt-2">
            <div className="absolute -right-4 -bottom-4 opacity-15">
              <BookOpenCheck size={120} />
            </div>
            <span className="bg-white/20 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">
              Tổng quan bài học
            </span>
            <h4 className="text-lg font-black mt-2 mb-1">Kanji Master N3</h4>
            <p className="text-xs text-white/80 font-semibold leading-relaxed mb-4">
              Luyện tập viết chữ Hán, nhớ âm Hán Việt, cách đọc On/Kun và học các cụm từ vựng gạch chân trong giáo trình.
            </p>
            <div className="grid grid-cols-2 gap-3 border-t border-white/20 pt-4 text-center">
              <div>
                <p className="text-[10px] font-black uppercase text-white/60">Chữ Hán</p>
                <p className="text-xl font-black mt-0.5">{kanjiList.length}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-white/60">Từ vựng ôn</p>
                <p className="text-xl font-black mt-0.5">
                  {activeLesson.sections[0]?.items.length || 0}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Kanji list and Flashcard entry */}
        <div className="lg:col-span-8 flex flex-col gap-6">

          {/* Summary section of Kanji characters */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
                  <Sparkles size={18} className="text-rose-500" />
                  Tổng Hợp Chữ Hán
                </h2>
                <p className="text-xs font-semibold text-slate-400 mt-0.5">
                  Click vào chữ để xem thông tin chi tiết và ví dụ đi kèm
                </p>
              </div>
            </div>

            {/* Kanji character cards grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {kanjiList.map((kanji) => (
                <div
                  key={kanji.char}
                  onClick={() => setSelectedKanji(kanji)}
                  className={`p-5 rounded-2xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:scale-102 hover:shadow-md ${
                    selectedKanji?.char === kanji.char
                      ? 'bg-rose-50/30 border-rose-400 ring-2 ring-rose-100'
                      : 'bg-slate-50/50 hover:bg-white border-slate-200'
                  }`}
                >
                  <span className="text-5xl font-black text-slate-800 mb-2 select-all hover:scale-105 transition-transform">
                    {kanji.char}
                  </span>
                  <span className="text-[11px] font-black tracking-widest bg-rose-100/60 text-rose-700 px-2.5 py-0.5 rounded-full uppercase border border-rose-200/40 mb-1">
                    {kanji.hanViet}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">
                    {kanji.strokes} nét
                  </span>
                </div>
              ))}
            </div>

            {/* Detailed view of the selected Kanji */}
            {selectedKanji ? (
              <div className="mt-5 p-5 bg-slate-50 border border-slate-200/60 rounded-2xl animate-fade-in">
                <div className="flex items-start justify-between gap-4 mb-3 pb-3 border-b border-slate-200/50">
                  <div>
                    <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                      Chữ {selectedKanji.char} (Âm Hán: {selectedKanji.hanViet})
                    </h3>
                    <p className="text-xs font-bold text-slate-500 mt-1">
                      Nghĩa chính: {selectedKanji.meaning}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedKanji(null)}
                    className="text-xs font-black text-rose-600 hover:text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-100 hover:bg-rose-100/50 cursor-pointer"
                  >
                    Đóng
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold">
                  {/* Readings */}
                  <div className="flex flex-col gap-2 bg-white p-3.5 rounded-xl border border-slate-200/40">
                    <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-0.5">
                        Kunyomi (Cách đọc Nhật)
                      </span>
                      <p className="text-sm text-slate-700">{selectedKanji.kunyomi.join(', ')}</p>
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-0.5">
                        Onyomi (Cách đọc Hán)
                      </span>
                      <p className="text-sm text-slate-700">{selectedKanji.onyomi.join(', ')}</p>
                    </div>
                  </div>

                  {/* Examples from textbook */}
                  <div className="flex flex-col gap-2 bg-white p-3.5 rounded-xl border border-slate-200/40">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">
                      Từ vựng minh họa trong sách
                    </span>
                    <div className="flex flex-col gap-1.5 max-h-36 overflow-y-auto pr-1">
                      {selectedKanji.examples.map((ex, index) => (
                        <div key={index} className="flex justify-between items-start gap-2 text-xs border-b border-slate-50 pb-1.5 last:border-0 last:pb-0">
                          <div>
                            <span className="font-black text-rose-600">{ex.word}</span>
                            <span className="text-[10px] text-slate-400 ml-1.5 font-semibold">
                              ({ex.reading})
                            </span>
                          </div>
                          <span className="text-slate-500 font-bold text-right text-[11px]">
                            {ex.meaning}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-5 p-5 bg-slate-50/50 border border-dashed border-slate-200 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold text-slate-400">
                <Info size={16} />
                <span>Chọn một chữ Kanji ở trên để hiển thị cách đọc và các từ vựng ví dụ.</span>
              </div>
            )}
          </div>

          {/* Flashcards & Underlined words study option */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
            <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-rose-50 rounded-full -z-10 opacity-50" />
            <div className="flex items-start gap-4">
              <span className="p-3 bg-rose-50 text-rose-500 rounded-2xl border border-rose-100 flex items-center justify-center">
                <Sparkles size={24} />
              </span>
              <div>
                <h3 className="text-lg font-black text-slate-800">
                  Luyện Tập Từ Vựng & Cụm Gạch Chân
                </h3>
                <p className="text-xs font-bold text-slate-400 mt-1 max-w-md leading-relaxed">
                  Lọc tất cả từ vựng xuất hiện ở góc Hán tự cùng với toàn bộ các từ được gạch chân ở cả hai phần Đọc và Viết để ôn tập dưới dạng Flashcard trực quan.
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-black text-slate-500 bg-slate-100 py-0.5 px-2 rounded-lg border border-slate-200">
                    <CheckCircle size={10} className="text-emerald-500" />
                    Từ vựng Hán tự
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-black text-slate-500 bg-slate-100 py-0.5 px-2 rounded-lg border border-slate-200">
                    <CheckCircle size={10} className="text-emerald-500" />
                    Cụm gạch chân
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                if (selectedSectionIds.length > 0) {
                  onStartBySections(selectedSectionIds);
                }
              }}
              disabled={selectedSectionIds.length === 0}
              className={`w-full sm:w-auto px-6 py-4 rounded-2xl font-black text-sm tracking-wide flex items-center justify-center gap-2 whitespace-nowrap transition-all select-none ${
                selectedSectionIds.length > 0
                  ? 'bg-gradient-to-r from-rose-500 to-red-500 text-white shadow-md shadow-rose-100 hover:shadow-xl hover:scale-102 cursor-pointer'
                  : 'bg-slate-200 text-slate-400 border border-slate-300/40 cursor-not-allowed'
              }`}
            >
              <BookOpen size={16} />
              {selectedSectionIds.length === 0 ? (
                <span>Chọn bài để học</span>
              ) : (
                <span>
                  Bắt đầu học ({selectedItemsCount} từ - {selectedSectionIds.length} bài)
                </span>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
