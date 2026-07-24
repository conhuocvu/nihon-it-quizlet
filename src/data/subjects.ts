import { lessons as nihonItLessons } from './lessons';
import { mimiN3Lessons } from './mimiN3FullData';
import { jfe301Lessons } from './jfe301Data';
import type { Lesson } from './lessons';

export interface Subject {
  id: string;
  title: string;
  japaneseTitle?: string;
  description: string;
  category: string;
  icon: 'code' | 'languages' | 'globe' | 'database' | 'award';
  gradient: string;
  badge?: string;
  lessons: Lesson[];
  totalLessons: number;
  totalItems: number;
  isAvailable: boolean;
  isFlashcardOnly?: boolean;
}

export const subjects: Subject[] = [
  {
    id: 'nihon-it',
    title: 'Tiếng Nhật Chuyên Ngành CNTT',
    japaneseTitle: 'IT日本語 & 専門用語',
    description: 'Tổng hợp 20 bài học từ vựng, ngữ pháp, trắc nghiệm và bài giảng lý thuyết chuyên sâu về Công nghệ thông tin tiếng Nhật.',
    category: 'Tiếng Nhật & IT',
    icon: 'code',
    gradient: 'from-indigo-600 to-purple-600',
    badge: 'Phổ biến',
    lessons: nihonItLessons,
    totalLessons: nihonItLessons.length,
    totalItems: nihonItLessons.reduce((acc, l) => acc + l.sections.reduce((sAcc, s) => sAcc + s.items.length, 0), 0),
    isAvailable: true,
  },
  {
    id: 'mimi-n3-goi',
    title: 'Mimi Kara Oboeru N3 Goi',
    japaneseTitle: '耳から覚える N3 語彙 (Chủ đề 1 - 12)',
    description: 'Từ vựng N3 chuẩn giáo trình Mimi Kara Oboeru trọn bộ 12 chủ đề (Bài 1: 人間, Bài 2: 暮らし, Bài 3: 交通, Bài 4: 仕事,...). Vào học Flashcard trực tiếp!',
    category: 'Tiếng Nhật N3',
    icon: 'languages',
    gradient: 'from-emerald-600 to-teal-600',
    badge: 'Trọn bộ 12 Bài',
    lessons: mimiN3Lessons,
    totalLessons: mimiN3Lessons.length,
    totalItems: mimiN3Lessons.reduce((acc, l) => acc + l.sections.reduce((sAcc, s) => sAcc + s.items.length, 0), 0),
    isAvailable: true,
    isFlashcardOnly: true,
  },
  {
    id: 'jfe301',
    title: 'JFE301 - English for IT',
    japaneseTitle: 'English IT Terminology',
    description: 'Ôn tập tiếng Anh chuyên ngành IT gồm 6 chương: Introduction, Computer Systems, System Development, Management, Network Technology, Database Technology.',
    category: 'Tiếng Anh IT',
    icon: 'globe',
    gradient: 'from-sky-600 to-blue-600',
    badge: '6 Chương',
    lessons: jfe301Lessons,
    totalLessons: jfe301Lessons.length,
    totalItems: jfe301Lessons.reduce((acc, l) => acc + l.sections.reduce((sAcc, s) => sAcc + s.items.length, 0), 0),
    isAvailable: true,
  }
];
