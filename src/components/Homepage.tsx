import React, { useState, useMemo } from 'react';
import { subjects } from '../data/subjects';
import type { Subject } from '../data/subjects';
import {
  Code,
  Languages,
  Globe,
  Database,
  Award,
  Search,
  BookOpen,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Zap,
  Flame,
  Clock
} from 'lucide-react';

interface HomepageProps {
  onSelectSubject: (subjectId: string, directFlashcard?: boolean) => void;
}

const CATEGORIES = ['Tất cả', ...Array.from(new Set(subjects.map(s => s.category)))];

export const Homepage: React.FC<HomepageProps> = ({ onSelectSubject }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');

  // Filter subjects based on search query and selected category
  const filteredSubjects = useMemo(() => {
    return subjects.filter(subject => {
      const matchesCategory =
        selectedCategory === 'Tất cả' || subject.category === selectedCategory;
      
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        subject.title.toLowerCase().includes(q) ||
        (subject.japaneseTitle && subject.japaneseTitle.toLowerCase().includes(q)) ||
        subject.description.toLowerCase().includes(q) ||
        subject.category.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const renderIcon = (iconType: Subject['icon']) => {
    switch (iconType) {
      case 'code':
        return <Code className="w-6 h-6" />;
      case 'languages':
        return <Languages className="w-6 h-6" />;
      case 'globe':
        return <Globe className="w-6 h-6" />;
      case 'database':
        return <Database className="w-6 h-6" />;
      case 'award':
        return <Award className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 space-y-10">
      {/* Hero Banner Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-950 text-white p-8 md:p-12 shadow-2xl border border-indigo-500/20">
        {/* Decorative Background Glowing Orbs */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold tracking-wide backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Nền tảng Ôn tập & Hỗ trợ Luyện thi Đa Môn</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white via-indigo-100 to-purple-200 bg-clip-text text-transparent">
            Chọn Môn Học & Bắt Đầu Ôn Tập Tri Thức Ngay
          </h1>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Kho tài liệu từ vựng chuyên ngành, ngữ pháp, bài giảng lý thuyết và trắc nghiệm thực hành dành riêng cho IT Developers & Ngoại ngữ chuyên sâu.
          </p>

          {/* Search Box */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm môn học, từ khóa (ví dụ: Nihon IT, Mimi N3, Flashcard)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/15 transition-all text-sm font-medium shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white bg-slate-800/60 px-2 py-1 rounded-lg"
              >
                Xóa
              </button>
            )}
          </div>
        </div>

        {/* Quick Stats Banner */}
        <div className="relative z-10 mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white">{subjects.length}</span>
            <span className="text-xs text-slate-400 font-medium">Môn học chuyên sâu</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-indigo-300">
              {subjects.reduce((acc, s) => acc + s.totalLessons, 0)}+
            </span>
            <span className="text-xs text-slate-400 font-medium">Bài học & Lý thuyết</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-purple-300">
              {subjects.reduce((acc, s) => acc + s.totalItems, 0)}+
            </span>
            <span className="text-xs text-slate-400 font-medium">Từ vựng & Câu hỏi</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-emerald-300">100%</span>
            <span className="text-xs text-slate-400 font-medium">Hỗ trợ Nút Back trình duyệt</span>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-indigo-600" />
            <span>Danh Sách Môn Học</span>
          </h2>
          <span className="text-xs font-semibold text-slate-500">
            Hiển thị {filteredSubjects.length} môn học
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Subjects Grid */}
      {filteredSubjects.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
          <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-500 mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <p className="text-slate-700 font-bold">Không tìm thấy môn học phù hợp</p>
          <p className="text-slate-400 text-xs">Thử tìm kiếm từ khóa khác hoặc chuyển danh mục filtering.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Tất cả');
            }}
            className="mt-2 text-xs font-bold text-indigo-600 hover:underline"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubjects.map((subject) => (
            <div
              key={subject.id}
              onClick={() =>
                subject.isAvailable &&
                onSelectSubject(subject.id, subject.isFlashcardOnly)
              }
              className={`group relative bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                subject.isAvailable
                  ? 'border-slate-200/80 hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer'
                  : 'border-slate-200 bg-slate-50/70 opacity-80 cursor-not-allowed'
              }`}
            >
              <div className="space-y-4">
                {/* Header Icon & Badges */}
                <div className="flex items-start justify-between gap-2">
                  <div
                    className={`p-3 rounded-2xl bg-gradient-to-br ${subject.gradient} text-white shadow-md transition-transform group-hover:scale-105`}
                  >
                    {renderIcon(subject.icon)}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {subject.badge && (
                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                          subject.badge === 'Phổ biến'
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : subject.badge === 'Hot'
                            ? 'bg-rose-100 text-rose-800 border border-rose-200'
                            : subject.badge === 'Mới'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {subject.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Title & Japanese Title */}
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {subject.title}
                  </h3>
                  {subject.japaneseTitle && (
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">
                      {subject.japaneseTitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                  {subject.description}
                </p>
              </div>

              {/* Card Footer: Metadata & Action CTA */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                    {subject.totalLessons} bài
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    {subject.totalItems} mục
                  </span>
                </div>

                {subject.isAvailable ? (
                  <button className="inline-flex items-center gap-1 text-xs font-extrabold text-indigo-600 group-hover:text-indigo-700 group-hover:translate-x-1 transition-all">
                    <span>Vào học</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Sắp ra mắt
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modern Value Proposition Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-lg">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-lg font-extrabold text-white flex items-center justify-center md:justify-start gap-2">
            <Flame className="w-5 h-5 text-orange-400" />
            <span>Hệ Thống Đã Được Nâng Cấp Nút Back Trình Duyệt</span>
          </h3>
          <p className="text-slate-300 text-xs leading-relaxed max-w-2xl">
            Bạn có thể thoải mái click qua lại giữa Trang chủ, Danh sách bài học, Đọc lý thuyết và Luyện tập trắc nghiệm. Nút Back/Forward trên trình duyệt và chuột gaming sẽ hoạt động mượt mà 100%!
          </p>
        </div>
        <div className="flex gap-2">
          <span className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-indigo-200">
            Hash Routing
          </span>
          <span className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-emerald-200">
            Multi-Course
          </span>
        </div>
      </div>
    </div>
  );
};
