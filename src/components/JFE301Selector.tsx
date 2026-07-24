import React, { useState, useMemo } from "react";
import type { Lesson } from "../data/lessons";
import { BookOpen, FileText, Play, Layers, ArrowLeft, ClipboardList } from "lucide-react";

interface JFE301SelectorProps {
  lessons: Lesson[];
  onStartByChapter: (sectionIds: string[]) => void;
  onStartByExam: (examTag: string) => void;
  onBackToHome: () => void;
}

export const JFE301Selector: React.FC<JFE301SelectorProps> = ({
  lessons,
  onStartByChapter,
  onStartByExam,
  onBackToHome,
}) => {
  const [tab, setTab] = useState<"chapter" | "exam">("chapter");
  const [selectedSections, setSelectedSections] = useState<string[]>([]);

  // Collect all exam tags
  const examList = useMemo(() => {
    const tags = new Set<string>();
    lessons.forEach((l) =>
      l.sections.forEach((s) =>
        s.items.forEach((item) => {
          if (item.exam) tags.add(item.exam);
        })
      )
    );
    return Array.from(tags).sort();
  }, [lessons]);

  // Count items per exam tag
  const examCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    lessons.forEach((l) =>
      l.sections.forEach((s) =>
        s.items.forEach((item) => {
          if (item.exam) counts[item.exam] = (counts[item.exam] || 0) + 1;
        })
      )
    );
    return counts;
  }, [lessons]);


  const toggleSection = (id: string) => {
    setSelectedSections((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const selectedCount = useMemo(() => {
    let n = 0;
    lessons.forEach((l) =>
      l.sections.forEach((s) => {
        if (selectedSections.includes(s.id)) n += s.items.length;
      })
    );
    return n;
  }, [selectedSections, lessons]);

  const formatExamLabel = (tag: string) => {
    // "de1" => "Đề 1", "de12" => "Đề 12"
    const match = tag.match(/^de(\d+)$/);
    if (match) return `Đề ${match[1]}`;
    return tag.toUpperCase();
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="relative text-center mb-10">
        <button
          onClick={onBackToHome}
          className="sm:absolute left-0 top-1/2 sm:-translate-y-1/2 mb-4 sm:mb-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-200 text-xs font-extrabold shadow-sm transition-all cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Tất cả môn học</span>
        </button>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-sky-600 via-blue-600 to-sky-800 bg-clip-text text-transparent">
          JFE301 - English for IT
        </h1>
        <p className="mt-2 text-sm font-semibold text-slate-500">
          English IT Terminology
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-2 p-1.5 bg-slate-100 rounded-2xl mb-8 max-w-sm mx-auto">
        <button
          onClick={() => setTab("chapter")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer ${
            tab === "chapter"
              ? "bg-white text-sky-700 shadow-md shadow-sky-100/50"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <Layers size={16} />
          Theo Chương
        </button>
        <button
          onClick={() => setTab("exam")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer ${
            tab === "exam"
              ? "bg-white text-blue-700 shadow-md shadow-blue-100/50"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <ClipboardList size={16} />
          Theo Đề
        </button>
      </div>

      {/* ── TAB: THEO CHƯƠNG ── */}
      {tab === "chapter" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {lessons.map((lesson) => {
              const contentSections = lesson.sections.filter((s) => s.items.length > 0);
              const isEmpty = contentSections.length === 0;
              return (
                <div
                  key={lesson.id}
                  className={`rounded-2xl border p-5 bg-white transition-all duration-200 ${
                    isEmpty
                      ? "border-dashed border-slate-200 opacity-60"
                      : "border-slate-200 hover:border-sky-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100">
                    <span className="p-2 rounded-lg bg-sky-50 text-sky-600">
                      <BookOpen size={18} />
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-800 leading-tight">
                      {lesson.title}
                    </h3>
                  </div>

                  {isEmpty ? (
                    <p className="text-xs text-slate-400 italic text-center py-3">
                      Chưa có câu hỏi
                    </p>
                  ) : (
                    <div className="flex flex-col gap-2">
                      {contentSections.map((section) => {
                        const isSelected = selectedSections.includes(section.id);
                        return (
                          <div
                            key={section.id}
                            onClick={() => toggleSection(section.id)}
                            className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                              isSelected
                                ? "border-sky-400 bg-sky-50/60 text-sky-900"
                                : "border-slate-100 bg-slate-50 text-slate-700 hover:border-slate-200"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className={`p-1.5 rounded-lg border ${isSelected ? "bg-white border-sky-200" : "bg-white border-slate-200"}`}>
                                <FileText size={13} className={isSelected ? "text-sky-500" : "text-slate-400"} />
                              </span>
                              <span className="text-xs font-bold">{section.title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isSelected ? "bg-sky-100 text-sky-700" : "bg-slate-200 text-slate-500"}`}>
                                {section.items.length} câu
                              </span>
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => {}}
                                className="h-4 w-4 rounded accent-sky-600 cursor-pointer"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Start bar */}
          <div className="sticky bottom-4 flex items-center justify-between gap-4 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl px-6 py-4 shadow-xl shadow-slate-200/50">
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Đã chọn</p>
              <p className="text-lg font-extrabold text-slate-800">
                {selectedCount} <span className="text-sm font-normal text-slate-400">câu</span>
              </p>
            </div>
            <button
              disabled={selectedCount === 0}
              onClick={() => onStartByChapter(selectedSections)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-lg transition-all ${
                selectedCount > 0
                  ? "bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 cursor-pointer active:scale-95"
                  : "bg-slate-300 cursor-not-allowed opacity-60"
              }`}
            >
              <Play size={17} fill="currentColor" />
              Bắt đầu học
            </button>
          </div>
        </>
      )}

      {/* ── TAB: THEO ĐỀ ── */}
      {tab === "exam" && (
        <div className="max-w-xl mx-auto">
          {examList.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <ClipboardList size={48} className="mx-auto mb-4 opacity-30" />
              <p className="font-semibold">Chưa có đề thi nào được thêm vào</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {examList.map((tag) => {
                const count = examCounts[tag] || 0;
                return (
                  <div
                    key={tag}
                    className="flex items-center justify-between p-5 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                        <ClipboardList size={22} />
                      </span>
                      <div>
                        <p className="font-extrabold text-slate-800 text-lg">{formatExamLabel(tag)}</p>
                        <p className="text-xs text-slate-400 font-semibold">{count} câu hỏi</p>
                      </div>
                    </div>
                    <button
                      onClick={() => onStartByExam(tag)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 text-white text-sm font-bold shadow-md shadow-blue-200 hover:from-blue-700 hover:to-sky-700 active:scale-95 transition-all cursor-pointer"
                    >
                      <Play size={15} fill="currentColor" />
                      Làm đề
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};