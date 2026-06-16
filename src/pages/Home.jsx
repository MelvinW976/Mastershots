import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { photographers } from '../data/photographers';
import { genres, eras } from '../data/genres';
import PhotographerCard from '../components/PhotographerCard';
import FilterBar from '../components/FilterBar';

const heroQuotes = [
  { quote: "你拍摄的前一万张照片都是最差的。", author: "亨利·卡蒂埃-布列松" },
  { quote: "如果你的照片不够好，那是因为你靠得不够近。", author: "罗伯特·卡帕" },
  { quote: "摄影是光与时间的化石。", author: "森山大道" },
  { quote: "我不急于被发现。", author: "索尔·莱特" },
  { quote: "光影是我的画笔。", author: "何藩" },
];

export default function Home() {
  const [filters, setFilters] = useState({
    genre: 'all',
    era: 'all',
    country: 'all',
  });

  const randomQuote = useMemo(() => {
    return heroQuotes[Math.floor(Math.random() * heroQuotes.length)];
  }, []);

  const filteredPhotographers = useMemo(() => {
    return photographers.filter((p) => {
      // Genre filter
      if (filters.genre !== 'all' && !p.genres.some(g => {
        const genreData = genres.find(gd => gd.id === filters.genre);
        return genreData && g === genreData.name.zh;
      })) {
        return false;
      }

      // Era filter
      if (filters.era !== 'all') {
        const eraData = eras.find(e => e.id === filters.era);
        if (eraData && (p.birth < eraData.range[0] || p.birth > eraData.range[1])) {
          return false;
        }
      }

      // Country filter
      if (filters.country !== 'all') {
        if (filters.country === '其他') {
          const mainCountries = ['美国', '法国', '德国', '日本', '中国', '中国香港'];
          if (mainCountries.some(c => p.nationality.includes(c))) {
            return false;
          }
        } else if (!p.nationality.includes(filters.country)) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl text-[#f0f0f0] mb-6 tracking-wide">
            大师之眼
          </h1>
          <p className="text-[#888] text-lg md:text-xl mb-8">
            探索摄影大师的视觉语言，理解光影的艺术
          </p>

          {/* Quote */}
          <blockquote className="max-w-2xl mx-auto">
            <p className="font-serif text-xl md:text-2xl text-gold italic mb-4">
              "{randomQuote.quote}"
            </p>
            <footer className="text-[#888]">
              — {randomQuote.author}
            </footer>
          </blockquote>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured photographer */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl text-[#f0f0f0] mb-8">
            本周推荐
          </h2>

          <Link
            to={`/photographer/${photographers[0].id}`}
            className="block group"
          >
            <div className="relative aspect-[21/9] overflow-hidden bg-card border border-[#222]">
              <img
                src={photographers[0].works[0]?.image || photographers[0].avatar}
                alt={photographers[0].name.zh}
                className="w-full h-full object-cover img-desaturate group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{photographers[0].flag}</span>
                  <span className="text-gold text-sm">{photographers[0].genres.join(' / ')}</span>
                </div>
                <h3 className="font-serif text-3xl text-[#f0f0f0] mb-1">
                  {photographers[0].name.zh}
                </h3>
                <p className="text-[#888]">{photographers[0].name.en}</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Filter bar */}
      <FilterBar filters={filters} onFilterChange={setFilters} />

      {/* Photographer grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl text-[#f0f0f0]">
              摄影大师
            </h2>
            <span className="text-[#666] text-sm">
              {filteredPhotographers.length} 位摄影师
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotographers.map((photographer) => (
              <PhotographerCard key={photographer.id} photographer={photographer} />
            ))}
          </div>

          {filteredPhotographers.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#666]">没有找到匹配的摄影师</p>
            </div>
          )}
        </div>
      </section>

      {/* Genre quick links */}
      <section className="py-16 px-6 bg-card border-t border-b border-[#222]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl text-[#f0f0f0] mb-8">
            按流派探索
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {genres.slice(0, 10).map((genre) => (
              <Link
                key={genre.id}
                to={`/genre/${genre.slug}`}
                className="group p-6 border border-[#222] hover:border-gold/50 transition-colors"
              >
                <div
                  className="w-3 h-3 rounded-full mb-4"
                  style={{ backgroundColor: genre.color }}
                ></div>
                <h3 className="text-[#f0f0f0] mb-1">{genre.name.zh}</h3>
                <p className="text-[#666] text-sm">{genre.name.en}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-serif text-gold text-xl mb-2">大师之眼</p>
          <p className="text-[#666] text-sm">
            探索摄影大师的世界
          </p>
        </div>
      </footer>
    </div>
  );
}
