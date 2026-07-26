import React, { useEffect } from 'react';
import { Lesson1Theory } from './Lesson1Theory';
import { Lesson2Theory } from './Lesson2Theory';
import { Lesson3Theory } from './Lesson3Theory';
import { Lesson4Theory } from './Lesson4Theory';
import { Lesson5Theory } from './Lesson5Theory';
import { Lesson6Theory } from './Lesson6Theory';
import { Lesson7Theory } from './Lesson7Theory';
import { Lesson8Theory } from './Lesson8Theory';
import { Lesson9Theory } from './Lesson9Theory';
import { Lesson10Theory } from './Lesson10Theory';
import { Lesson11Theory } from './Lesson11Theory';
import { Lesson12Theory } from './Lesson12Theory';
import { Lesson13Theory } from './Lesson13Theory';
import { Lesson14Theory } from './Lesson14Theory';
import { Lesson16Theory } from './Lesson16Theory';
import { Lesson17Theory } from './Lesson17Theory';
import { Lesson18Theory } from './Lesson18Theory';
import { Lesson19Theory } from './Lesson19Theory';
import { Lesson20Theory } from './Lesson20Theory';

interface TheoryViewerProps {
  lessonId: number;
  onClose: () => void;
}

export const TheoryViewer: React.FC<TheoryViewerProps> = ({ lessonId, onClose }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lessonId]);

  if (lessonId === 1) {
    return <Lesson1Theory onClose={onClose} />;
  }

  if (lessonId === 2) {
    return <Lesson2Theory onClose={onClose} />;
  }

  if (lessonId === 3) {
    return <Lesson3Theory onClose={onClose} />;
  }

  if (lessonId === 4) {
    return <Lesson4Theory onClose={onClose} />;
  }

  if (lessonId === 5) {
    return <Lesson5Theory onClose={onClose} />;
  }

  if (lessonId === 6) {
    return <Lesson6Theory onClose={onClose} />;
  }

  if (lessonId === 7) {
    return <Lesson7Theory onClose={onClose} />;
  }

  if (lessonId === 8) {
    return <Lesson8Theory onClose={onClose} />;
  }

  if (lessonId === 9) {
    return <Lesson9Theory onClose={onClose} />;
  }

  if (lessonId === 10) {
    return <Lesson10Theory onClose={onClose} />;
  }

  if (lessonId === 11) {
    return <Lesson11Theory onClose={onClose} />;
  }

  if (lessonId === 12) {
    return <Lesson12Theory onClose={onClose} />;
  }

  if (lessonId === 13) {
    return <Lesson13Theory onClose={onClose} />;
  }

  if (lessonId === 14) {
    return <Lesson14Theory onClose={onClose} />;
  }

  if (lessonId === 16) {
    return <Lesson16Theory onClose={onClose} />;
  }

  if (lessonId === 17) {
    return <Lesson17Theory onClose={onClose} />;
  }

  if (lessonId === 18) {
    return <Lesson18Theory onClose={onClose} />;
  }

  if (lessonId === 19) {
    return <Lesson19Theory onClose={onClose} />;
  }

  if (lessonId === 20) {
    return <Lesson20Theory onClose={onClose} />;
  }

  return (
    <div className="w-full max-w-md mx-auto text-center py-16 px-4 bg-white border border-slate-200 rounded-2xl shadow-sm my-8">
      <div className="w-16 h-16 mx-auto mb-4 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-bold text-2xl">
        📖
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">Chưa có lý thuyết</h3>
      <p className="text-slate-500 mb-6 text-sm">
        Mục lý thuyết chi tiết cho Bài {lessonId} hiện đang được cập nhật và sẽ hoàn thiện sớm.
      </p>
      <button
        onClick={onClose}
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-md cursor-pointer text-sm"
      >
        Quay lại chọn bài
      </button>
    </div>
  );
};
