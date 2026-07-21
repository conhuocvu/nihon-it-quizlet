import { useState, useEffect } from 'react';
import { lessons } from './data/lessons';
import { LessonSelector } from './components/LessonSelector';
import { StudySession } from './components/StudySession';
import { TheoryViewer } from './components/TheoryViewer';
import { GraduationCap, Github, ChevronRight } from 'lucide-react';

function App() {
  // Default to selecting all sections of Lesson 11
  const [selectedSectionIds, setSelectedSectionIds] = useState<string[]>([
    'lesson-11-vocabulary',
    'lesson-11-multiple-choice',
  ]);
  const [isSessionActive, setIsSessionActive] = useState<boolean>(false);
  const [activeTheoryLessonId, setActiveTheoryLessonId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTheoryLessonId, isSessionActive]);

  const handleStartSession = () => {
    setIsSessionActive(true);
  };

  const handleBackToSelector = () => {
    setIsSessionActive(false);
    setActiveTheoryLessonId(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Premium Navbar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleBackToSelector}>
            <span className="p-2 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-md shadow-indigo-100">
              <GraduationCap size={20} />
            </span>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              NihonIT
            </span>

            {/* Breadcrumb Navigation Indicator */}
            {activeTheoryLessonId !== null ? (
              <div className="flex items-center gap-1.5 ml-2 text-xs font-bold text-slate-500">
                <ChevronRight size={14} className="text-slate-400" />
                <span className="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-lg border border-indigo-100">
                  Lý thuyết Bài {activeTheoryLessonId}
                </span>
              </div>
            ) : isSessionActive ? (
              <div className="flex items-center gap-1.5 ml-2 text-xs font-bold text-slate-500">
                <ChevronRight size={14} className="text-slate-400" />
                <span className="bg-purple-50 text-purple-700 px-2.5 py-1 rounded-lg border border-purple-100">
                  Luyện tập
                </span>
              </div>
            ) : null}
          </div>

          <div className="flex items-center gap-4 text-sm font-semibold text-slate-500">
            <span className="hidden sm:inline bg-indigo-50 text-indigo-700 py-1 px-3 rounded-full text-xs font-bold">
              Phiên bản Local
            </span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-slate-100 rounded-xl transition-all"
              title="GitHub Repository"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow py-6 flex items-start justify-center">
        {activeTheoryLessonId !== null ? (
          <TheoryViewer
            lessonId={activeTheoryLessonId}
            onClose={() => setActiveTheoryLessonId(null)}
          />
        ) : isSessionActive ? (
          <StudySession
            selectedSectionIds={selectedSectionIds}
            lessons={lessons}
            onBackToSelector={handleBackToSelector}
          />
        ) : (
          <LessonSelector
            lessons={lessons}
            selectedSectionIds={selectedSectionIds}
            setSelectedSectionIds={setSelectedSectionIds}
            onStartSession={handleStartSession}
            onViewTheory={(lessonId) => setActiveTheoryLessonId(lessonId)}
          />
        )}
      </main>

      {/* Modern Footer */}
      <footer className="bg-white border-t border-slate-200/60 py-6 text-center text-xs text-slate-400 font-medium">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} NihonIT. Nền tảng ôn tập Tiếng Nhật & CNTT.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-600 cursor-help">Điều khoản</span>
            <span className="hover:text-slate-600 cursor-help">Bảo mật</span>
            <span className="hover:text-slate-600 cursor-help">Hỗ trợ</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
