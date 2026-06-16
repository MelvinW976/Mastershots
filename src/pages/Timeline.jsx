import { useState } from 'react';
import { Link } from 'react-router-dom';
import { photographers } from '../data/photographers';
import { genres } from '../data/genres';

export default function Timeline() {
  const [hoveredPhotographer, setHoveredPhotographer] = useState(null);
  const [filterGenre, setFilterGenre] = useState('all');

  const sortedPhotographers = [...photographers].sort((a, b) => a.birth - b.birth);

  const filteredPhotographers = filterGenre === 'all'
    ? sortedPhotographers
    : sortedPhotographers.filter((p) => p.genres.some((g) => {
        const genreData = genres.find((gd) => gd.id === filterGenre);
        return genreData && g === genreData.name.zh;
      }));

  const minYear = 1850;
  const maxYear = 2030;
  const yearRange = maxYear - minYear;

  const getPosition = (year) => {
    return ((year - minYear) / yearRange) * 100;
  };

  const getGenreColor = (photographerGenres) => {
    const genre = genres.find((g) => photographerGenres.includes(g.name.zh));
    return genre?.color || '#888';
  };

  const decades = [];
  for (let year = 1850; year <= 2020; year += 10) {
    decades.push(year);
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 px-6 border-b border-[#222]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl text-[#f0f0f0] mb-4">
            历史时间轴
          </h1>
          <p className="text-[#888]">
            探索摄影大师的年代脉络
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="sticky top-16 z-40 bg-[#0a0a0a] border-b border-[#222] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <span className="text-[#666] text-sm">按流派筛选</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterGenre('all')}
              className={`px-3 py-1 text-sm border transition-colors ${
                filterGenre === 'all'
                  ? 'border-gold text-gold'
                  : 'border-[#333] text-[#888] hover:border-[#555]'
              }`}
            >
              全部
            </button>
            {genres.slice(0, 6).map((g) => (
              <button
                key={g.id}
                onClick={() => setFilterGenre(g.id)}
                className={`px-3 py-1 text-sm border transition-colors ${
                  filterGenre === g.id
                    ? 'border-gold text-gold'
                    : 'border-[#333] text-[#888] hover:border-[#555]'
                }`}
              >
                {g.name.zh}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <section className="py-12 px-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          <div className="min-w-[1200px]">
            {/* Decade markers */}
            <div className="relative h-8 border-b border-[#333]">
              {decades.map((decade) => (
                <div
                  key={decade}
                  className="absolute top-0 transform -translate-x-1/2"
                  style={{ left: `${getPosition(decade)}%` }}
                >
                  <div className="w-px h-4 bg-[#333]"></div>
                  <span className="text-[#666] text-xs font-mono">
                    {decade}
                  </span>
                </div>
              ))}
            </div>

            {/* Timeline line */}
            <div className="relative h-2 bg-[#222] my-8">
              <div className="absolute inset-0 bg-gradient-to-r from-[#333] via-gold/30 to-[#333]"></div>
            </div>

            {/* Photographer nodes */}
            <div className="relative h-[400px]">
              {filteredPhotographers.map((p, index) => {
                const position = getPosition(p.birth);
                const row = index % 4;
                const topOffset = row * 90 + 20;

                return (
                  <Link
                    key={p.id}
                    to={`/photographer/${p.id}`}
                    className="absolute transform -translate-x-1/2 group"
                    style={{
                      left: `${position}%`,
                      top: `${topOffset}px`,
                    }}
                    onMouseEnter={() => setHoveredPhotographer(p)}
                    onMouseLeave={() => setHoveredPhotographer(null)}
                  >
                    {/* Avatar */}
                    <div
                      className="w-12 h-12 rounded-full overflow-hidden border-2 transition-all group-hover:scale-110 group-hover:border-gold"
                      style={{ borderColor: getGenreColor(p.genres) }}
                    >
                      <img
                        src={p.avatar}
                        alt={p.name.zh}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Name label */}
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="text-xs text-[#888] group-hover:text-[#f0f0f0] transition-colors">
                        {p.name.zh}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Hover info panel */}
      {hoveredPhotographer && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-card border border-[#222] p-6 shadow-xl z-50 max-w-md">
          <div className="flex gap-4">
            <img
              src={hoveredPhotographer.avatar}
              alt={hoveredPhotographer.name.zh}
              className="w-20 h-20 object-cover"
            />
            <div>
              <h3 className="font-serif text-xl text-[#f0f0f0] mb-1">
                {hoveredPhotographer.name.zh}
              </h3>
              <p className="text-[#888] text-sm mb-2">
                {hoveredPhotographer.name.en}
              </p>
              <p className="text-[#666] text-sm">
                {hoveredPhotographer.flag} {hoveredPhotographer.nationality} ·{' '}
                <span className="font-mono">
                  {hoveredPhotographer.birth}–{hoveredPhotographer.death || ''}
                </span>
              </p>
              <div className="flex gap-2 mt-2">
                {hoveredPhotographer.genres.map((g) => (
                  <span
                    key={g}
                    className="text-xs text-gold border border-gold/30 px-2 py-0.5"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <section className="py-8 px-6 border-t border-[#222]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-[#888] text-sm mb-4">流派图例</h3>
          <div className="flex flex-wrap gap-4">
            {genres.slice(0, 8).map((g) => (
              <div key={g.id} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: g.color }}
                ></div>
                <span className="text-[#888] text-sm">{g.name.zh}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
