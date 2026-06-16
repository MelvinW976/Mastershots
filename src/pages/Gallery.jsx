import { useState, useMemo } from 'react';
import { photographers } from '../data/photographers';
import Lightbox from '../components/Lightbox';

export default function Gallery() {
  const [lightboxWork, setLightboxWork] = useState(null);
  const [layout, setLayout] = useState('masonry');

  // Collect all works from all photographers
  const allWorks = useMemo(() => {
    const works = [];
    photographers.forEach((p) => {
      p.works.forEach((w) => {
        works.push({
          ...w,
          photographer: p,
        });
      });
    });
    // Shuffle works
    return works.sort(() => Math.random() - 0.5);
  }, []);

  const currentWorkIndex = allWorks.findIndex((w) => w.id === lightboxWork?.id);

  const randomWork = () => {
    const randomIndex = Math.floor(Math.random() * allWorks.length);
    setLightboxWork(allWorks[randomIndex]);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-8 px-6 border-b border-[#222]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl text-[#f0f0f0]">画廊</h1>
            <p className="text-[#888] text-sm">{allWorks.length} 张作品</p>
          </div>
          <div className="flex items-center gap-4">
            {/* Random button */}
            <button
              onClick={randomWork}
              className="px-4 py-2 border border-gold text-gold hover:bg-gold/10 transition-colors text-sm"
            >
              随机漫游
            </button>

            {/* Layout toggle */}
            <div className="flex border border-[#333]">
              <button
                onClick={() => setLayout('masonry')}
                className={`p-2 ${layout === 'masonry' ? 'bg-[#222] text-gold' : 'text-[#888]'}`}
                aria-label="瀑布流"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="10" rx="1" />
                  <rect x="14" y="3" width="7" height="6" rx="1" />
                  <rect x="3" y="15" width="7" height="6" rx="1" />
                  <rect x="14" y="11" width="7" height="10" rx="1" />
                </svg>
              </button>
              <button
                onClick={() => setLayout('grid')}
                className={`p-2 ${layout === 'grid' ? 'bg-[#222] text-gold' : 'text-[#888]'}`}
                aria-label="网格"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {layout === 'masonry' ? (
            <div className="masonry-grid">
              {allWorks.map((work) => (
                <button
                  key={work.id}
                  onClick={() => setLightboxWork(work)}
                  className="masonry-item group block w-full text-left"
                >
                  <div className="relative overflow-hidden bg-card border border-[#222] group-hover:border-gold/50 transition-colors">
                    <img
                      src={work.image}
                      alt={work.title.zh}
                      className="w-full img-desaturate group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-[#f0f0f0] text-sm mb-1">{work.title.zh}</p>
                        <p className="text-[#888] text-xs">
                          {work.photographer.name.zh} · {work.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allWorks.map((work) => (
                <button
                  key={work.id}
                  onClick={() => setLightboxWork(work)}
                  className="group block text-left"
                >
                  <div className="relative aspect-square overflow-hidden bg-card border border-[#222] group-hover:border-gold/50 transition-colors">
                    <img
                      src={work.image}
                      alt={work.title.zh}
                      className="w-full h-full object-cover img-desaturate group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-[#f0f0f0] text-sm truncate">{work.title.zh}</p>
                        <p className="text-[#888] text-xs">
                          {work.photographer.name.zh}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxWork && (
        <Lightbox
          work={lightboxWork}
          onClose={() => setLightboxWork(null)}
          onPrev={
            currentWorkIndex > 0
              ? () => setLightboxWork(allWorks[currentWorkIndex - 1])
              : null
          }
          onNext={
            currentWorkIndex < allWorks.length - 1
              ? () => setLightboxWork(allWorks[currentWorkIndex + 1])
              : null
          }
        />
      )}
    </div>
  );
}
