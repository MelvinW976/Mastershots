import { useEffect } from 'react';

export default function Lightbox({ work, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev?.();
      if (e.key === 'ArrowRight') onNext?.();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  if (!work) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-[#888] hover:text-white p-2 z-10"
        aria-label="关闭"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation arrows */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888] hover:text-white p-2"
          aria-label="上一张"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888] hover:text-white p-2"
          aria-label="下一张"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Content */}
      <div className="flex flex-col lg:flex-row max-w-7xl w-full h-full lg:h-auto p-4 lg:p-8 gap-8">
        {/* Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={work.image}
            alt={work.title.zh}
            className="max-h-[70vh] lg:max-h-[80vh] object-contain"
          />
        </div>

        {/* Info panel */}
        <div className="lg:w-80 space-y-6 overflow-y-auto">
          {/* Title */}
          <div>
            <h2 className="font-serif text-2xl text-[#f0f0f0] mb-1">
              {work.title.zh}
            </h2>
            <p className="text-[#888]">{work.title.en}</p>
          </div>

          {/* Meta */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#666]">年份</span>
              <span className="text-[#f0f0f0] font-mono">{work.year}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#666]">地点</span>
              <span className="text-[#f0f0f0]">{work.location.zh}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#666]">相机</span>
              <span className="text-[#f0f0f0]">{work.camera}</span>
            </div>
          </div>

          {/* Technique */}
          <div>
            <h3 className="text-gold text-sm mb-2">技法</h3>
            <p className="text-[#ccc] text-sm leading-relaxed">
              {work.technique}
            </p>
          </div>

          {/* Significance */}
          <div>
            <h3 className="text-gold text-sm mb-2">为何重要</h3>
            <p className="text-[#ccc] text-sm leading-relaxed">
              {work.significance}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
