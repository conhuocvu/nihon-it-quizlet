import React, { useMemo } from 'react';
import type { Lesson } from '../data/lessons';
import { BookOpen, CheckSquare, Square, Shuffle, Play, CheckCircle2, AlertCircle, HelpCircle, Layers } from 'lucide-react';

interface LessonSelectorProps {
  lessons: Lesson[];
  selectedSectionIds: string[];
  setSelectedSectionIds: React.Dispatch<React.SetStateAction<string[]>>;
  shuffleQuestions: boolean;
  setShuffleQuestions: (shuffle: boolean) => void;
  onStartSession: () => void;
}

export const LessonSelector: React.FC<LessonSelectorProps> = ({
  lessons,
  selectedSectionIds,
  setSelectedSectionIds,
  shuffleQuestions,
  setShuffleQuestions,
  onStartSession,
}) => {
  // Aggregate all available sections that have content
  const allContentSections = useMemo(() => {
    const list: string[] = [];
    lessons.forEach(lesson => {
      lesson.sections.forEach(section => {
        if (section.items.length > 0) {
          list.push(section.id);
        }
      });
    });
    return list;
  }, [lessons]);

  // Compute total items to study based on selected sections
  const totalItemsToStudy = useMemo(() => {
    let count = 0;
    lessons.forEach(lesson => {
      lesson.sections.forEach(section => {
        if (selectedSectionIds.includes(section.id)) {
          count += section.items.length;
        }
      });
    });
    return count;
  }, [selectedSectionIds, lessons]);

  // Toggle selection for a single section
  const toggleSection = (sectionId: string) => {
    setSelectedSectionIds(prev =>
      prev.includes(sectionId) ? prev.filter(id => id !== sectionId) : [...prev, sectionId]
    );
  };

  // Toggle selection for all sections in a lesson
  const toggleAllLessonSections = (lesson: Lesson) => {
    const sectionIds = lesson.sections.map(s => s.id);
    if (sectionIds.length === 0) return;

    const allSelected = sectionIds.every(id => selectedSectionIds.includes(id));
    if (allSelected) {
      // Deselect all sections of this lesson
      setSelectedSectionIds(prev => prev.filter(id => !sectionIds.includes(id)));
    } else {
      // Select all sections of this lesson
      setSelectedSectionIds(prev => {
        const filtered = prev.filter(id => !sectionIds.includes(id));
        return [...filtered, ...sectionIds];
      });
    }
  };

  // Get selection state of a lesson: 'all', 'partial', 'none', 'empty'
  const getLessonSelectionState = (lesson: Lesson) => {
    if (lesson.sections.length === 0) return 'empty';
    const sectionIds = lesson.sections.map(s => s.id);
    const selectedCount = sectionIds.filter(id => selectedSectionIds.includes(id)).length;
    
    if (selectedCount === 0) return 'none';
    if (selectedCount === lesson.sections.length) return 'all';
    return 'partial';
  };

  const selectAll = () => {
    setSelectedSectionIds(allContentSections);
  };

  const deselectAll = () => {
    setSelectedSectionIds([]);
  };

  const selectOnlyVocabulary = () => {
    const vocabIds: string[] = [];
    lessons.forEach(lesson => {
      lesson.sections.forEach(section => {
        if (section.type === 'vocabulary' && section.items.length > 0) {
          vocabIds.push(section.id);
        }
      });
    });
    setSelectedSectionIds(vocabIds);
  };

  const selectOnlyQuizzes = () => {
    const quizIds: string[] = [];
    lessons.forEach(lesson => {
      lesson.sections.forEach(section => {
        if (section.type === 'multiple_choice' && section.items.length > 0) {
          quizIds.push(section.id);
        }
      });
    });
    setSelectedSectionIds(quizIds);
  };

  const hasSelectedAnyQuestion = totalItemsToStudy > 0;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header section with styling */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
          NihonIT Quizlet
        </h1>
        <p className="mt-3 text-lg text-slate-600 max-w-xl mx-auto">
          Học tiếng Nhật & ôn luyện kiến thức Công nghệ thông tin theo từng phần riêng biệt.
        </p>
      </div>

      {/* Control panel & summary */}
      <div className="glass-panel rounded-2xl p-6 mb-8 flex flex-col xl:flex-row gap-6 items-center justify-between">
        <div className="flex flex-wrap gap-2.5 justify-center xl:justify-start w-full xl:w-auto">
          <button
            onClick={selectAll}
            className="px-3.5 py-2 text-xs md:text-sm font-semibold rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <CheckSquare size={15} />
            Chọn tất cả
          </button>
          <button
            onClick={deselectAll}
            className="px-3.5 py-2 text-xs md:text-sm font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Square size={15} />
            Bỏ chọn
          </button>
          <button
            onClick={selectOnlyVocabulary}
            className="px-3.5 py-2 text-xs md:text-sm font-semibold rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <BookOpen size={15} />
            Chỉ học Từ vựng
          </button>
          <button
            onClick={selectOnlyQuizzes}
            className="px-3.5 py-2 text-xs md:text-sm font-semibold rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <HelpCircle size={15} />
            Chỉ làm Trắc nghiệm
          </button>
        </div>

        {/* Shuffle and start action */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full xl:w-auto">
          {/* Shuffle Toggle */}
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <div className="relative">
              <input
                type="checkbox"
                checked={shuffleQuestions}
                onChange={(e) => setShuffleQuestions(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </div>
            <span className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
              <Shuffle size={16} className={shuffleQuestions ? 'text-indigo-600 animate-pulse' : 'text-slate-400'} />
              Trộn câu hỏi
            </span>
          </label>

          {/* Question Summary & Start Button */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
            <div className="text-right sm:text-left">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Tổng số câu chọn</p>
              <p className="text-lg font-bold text-slate-800">
                {totalItemsToStudy} <span className="text-sm font-normal text-slate-500">câu</span>
              </p>
            </div>
            <button
              onClick={onStartSession}
              disabled={!hasSelectedAnyQuestion}
              className={`px-6 py-3.5 rounded-xl font-bold text-white shadow-lg flex items-center gap-2 transition-all duration-300 ${
                hasSelectedAnyQuestion
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-indigo-200 active:scale-98 cursor-pointer'
                  : 'bg-slate-300 shadow-none cursor-not-allowed opacity-60'
              }`}
            >
              <Play size={18} fill="currentColor" />
              Bắt đầu học
            </button>
          </div>
        </div>
      </div>

      {!hasSelectedAnyQuestion && (
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-sm flex items-start gap-3">
          <AlertCircle className="shrink-0 text-amber-500 mt-0.5" size={18} />
          <div>
            <span className="font-bold">Lưu ý:</span> Bạn cần tick chọn ít nhất một phần học cụ thể (ví dụ: phần <span className="font-bold text-indigo-700">Trắc nghiệm</span> hoặc <span className="font-bold text-indigo-700">Từ vựng</span> trong <span className="font-bold text-indigo-700">Bài 11</span>) để bắt đầu.
          </div>
        </div>
      )}

      {/* Grid containing 20 lessons with expandable sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => {
          const selectionState = getLessonSelectionState(lesson);
          const hasSections = lesson.sections.length > 0;
          
          return (
            <div
              key={lesson.id}
              className={`rounded-2xl border p-5 transition-all duration-300 bg-white ${
                selectionState === 'all'
                  ? 'border-indigo-500 shadow-md shadow-indigo-50/50'
                  : selectionState === 'partial'
                  ? 'border-purple-400 shadow-md shadow-purple-50/30'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-md hover:shadow-slate-100/50'
              }`}
            >
              {/* Card Header representing the Lesson */}
              <div 
                onClick={() => hasSections && toggleAllLessonSections(lesson)}
                className={`flex justify-between items-center pb-3 border-b border-slate-100 ${
                  hasSections ? 'cursor-pointer hover:opacity-85' : 'cursor-default'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`inline-flex items-center justify-center p-2 rounded-lg transition-colors ${
                      selectionState === 'all' || selectionState === 'partial'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <Layers size={18} />
                  </span>
                  <h3 className="text-base font-extrabold text-slate-800 leading-tight">
                    {lesson.title}
                  </h3>
                </div>

                {hasSections && (
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 font-bold uppercase mr-1">
                      {selectionState === 'all' ? 'Đã chọn hết' : selectionState === 'partial' ? 'Chọn một phần' : 'Chọn hết'}
                    </span>
                    <input
                      type="checkbox"
                      checked={selectionState === 'all'}
                      ref={el => {
                        if (el) el.indeterminate = selectionState === 'partial';
                      }}
                      onChange={() => {}} // Controlled by click on header div
                      className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 h-4.5 w-4.5 cursor-pointer accent-indigo-600"
                    />
                  </div>
                )}
              </div>

              {/* Sections list inside the card */}
              {hasSections ? (
                <div className="mt-4 flex flex-col gap-2.5">
                  {lesson.sections.map((section) => {
                    const isSelected = selectedSectionIds.includes(section.id);
                    const sectionIcon = section.type === 'vocabulary' ? (
                      <BookOpen size={14} className="text-blue-500" />
                    ) : (
                      <HelpCircle size={14} className="text-purple-500" />
                    );
                    const typeLabel = section.type === 'vocabulary' ? 'Từ vựng' : 'Trắc nghiệm';

                    return (
                      <div
                        key={section.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSection(section.id);
                        }}
                        className={`group/item flex items-center justify-between p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50/50 border-indigo-200 text-indigo-900 shadow-sm'
                            : 'bg-slate-50/50 border-slate-100 text-slate-700 hover:bg-slate-50 hover:border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`p-1.5 rounded-lg border transition-colors ${
                            isSelected ? 'bg-white border-indigo-200' : 'bg-white border-slate-200'
                          }`}>
                            {sectionIcon}
                          </span>
                          <div>
                            <span className="text-xs font-bold block">{section.title}</span>
                            <span className="text-[10px] text-slate-400 font-semibold">{typeLabel}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isSelected ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-500'
                          }`}>
                            {section.items.length} câu
                          </span>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {}} // Controlled by click on row
                            className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4 cursor-pointer accent-indigo-600"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-6 py-4 text-center border border-dashed border-slate-200 rounded-xl">
                  <span className="text-xs font-semibold text-slate-400 italic">
                    Chưa có phần học nào
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
