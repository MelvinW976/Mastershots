import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { photographers } from '../data/photographers';
import QuoteBlock from '../components/QuoteBlock';
import GearCard from '../components/GearCard';
import Lightbox from '../components/Lightbox';

export default function PhotographerProfile() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('works');
  const [lightboxWork, setLightboxWork] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const photographer = photographers.find((p) => p.id === id);

  useEffect(() => {
    // Check if favorited
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      const newFavorites = favorites.filter((f) => f !== id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
      favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  if (!photographer) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <p className="text-[#666]">摄影师未找到</p>
      </div>
    );
  }

  const { name, nationality, flag, birth, death, genres, avatar, bio, philosophy, quotes, works, gear, practice, resources, influencedBy, influenced } = photographer;

  const lifespan = death ? `${birth}–${death}` : `${birth}–`;

  const tabs = [
    { id: 'works', label: '作品' },
    { id: 'about', label: '关于' },
    { id: 'philosophy', label: '理念' },
    { id: 'gear', label: '器材' },
    { id: 'learn', label: '学习' },
    { id: 'influence', label: '影响' },
  ];

  const currentWorkIndex = works.findIndex((w) => w.id === lightboxWork?.id);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${works[0]?.image || avatar})`,
          }}
        >
          <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 h-full flex items-end pb-12 px-6">
          <div className="max-w-7xl mx-auto w-full flex items-end gap-8">
            {/* Avatar */}
            <img
              src={avatar}
              alt={name.zh}
              className="w-32 h-32 object-cover border-2 border-gold/50 hidden md:block"
            />

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{flag}</span>
                {genres.map((g) => (
                  <span key={g} className="text-gold text-sm border border-gold/30 px-2 py-0.5">
                    {g}
                  </span>
                ))}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-[#f0f0f0] mb-2">
                {name.zh}
              </h1>
              <p className="text-[#888] text-lg mb-4">{name.en}</p>
              <p className="text-[#666]">
                {nationality} · <span className="font-mono">{lifespan}</span>
              </p>
            </div>

            {/* Favorite button */}
            <button
              onClick={toggleFavorite}
              className={`p-3 border transition-colors ${
                isFavorite
                  ? 'border-gold text-gold'
                  : 'border-[#333] text-[#666] hover:border-gold hover:text-gold'
              }`}
              aria-label={isFavorite ? '取消收藏' : '添加收藏'}
            >
              <svg
                className="w-6 h-6"
                fill={isFavorite ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Tab navigation */}
      <nav className="sticky top-16 z-40 bg-[#0a0a0a] border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'border-gold text-gold'
                    : 'border-transparent text-[#888] hover:text-[#f0f0f0]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Tab content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Works */}
        {activeTab === 'works' && (
          <div>
            <h2 className="font-serif text-2xl text-[#f0f0f0] mb-8">代表作品</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {works.map((work) => (
                <button
                  key={work.id}
                  onClick={() => setLightboxWork(work)}
                  className="group text-left bg-card border border-[#222] overflow-hidden card-hover"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title.zh}
                      className="w-full h-full object-cover img-desaturate group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#f0f0f0] mb-1">{work.title.zh}</h3>
                    <p className="text-[#666] text-sm">
                      {work.year} · {work.location.zh}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* About */}
        {activeTab === 'about' && (
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl text-[#f0f0f0] mb-8">人物简介</h2>
            <div className="space-y-6">
              {bio.map((paragraph, i) => (
                <p key={i} className="text-[#ccc] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Philosophy */}
        {activeTab === 'philosophy' && (
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl text-[#f0f0f0] mb-8">摄影理念</h2>

            {/* Core principles */}
            <div className="space-y-4 mb-12">
              {philosophy.map((principle, i) => (
                <div
                  key={i}
                  className="bg-card border border-[#222] p-5 card-hover"
                >
                  <p className="text-[#ccc]">{principle}</p>
                </div>
              ))}
            </div>

            {/* Quotes */}
            <h3 className="text-gold text-lg mb-6">代表语录</h3>
            {quotes.map((quote, i) => (
              <QuoteBlock key={i} quote={quote} author={name.zh} />
            ))}
          </div>
        )}

        {/* Gear */}
        {activeTab === 'gear' && (
          <div>
            <h2 className="font-serif text-2xl text-[#f0f0f0] mb-8">器材与技法</h2>
            <GearCard gear={gear} />
          </div>
        )}

        {/* Learn */}
        {activeTab === 'learn' && (
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl text-[#f0f0f0] mb-8">如何模仿他拍摄</h2>

            {/* Practice tasks */}
            <div className="space-y-4 mb-12">
              {practice.map((task, i) => (
                <div
                  key={i}
                  className="bg-card border border-[#222] p-5 flex gap-4"
                >
                  <span className="text-gold font-mono text-sm">0{i + 1}</span>
                  <p className="text-[#ccc]">{task}</p>
                </div>
              ))}
            </div>

            {/* Resources */}
            <h3 className="text-gold text-lg mb-6">延伸学习</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.books.length > 0 && (
                <div className="bg-card border border-[#222] p-5">
                  <h4 className="text-[#888] text-sm mb-3">推荐书籍</h4>
                  <ul className="space-y-2">
                    {resources.books.map((book, i) => (
                      <li key={i} className="text-[#ccc] text-sm">
                        📖 {book}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {resources.films.length > 0 && (
                <div className="bg-card border border-[#222] p-5">
                  <h4 className="text-[#888] text-sm mb-3">纪录片</h4>
                  <ul className="space-y-2">
                    {resources.films.map((film, i) => (
                      <li key={i} className="text-[#ccc] text-sm">
                        🎬 {film}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Study mode link */}
            <div className="mt-12">
              <Link
                to={`/study/${id}`}
                className="inline-flex items-center gap-2 bg-gold text-[#0a0a0a] px-6 py-3 font-medium hover:bg-gold/90 transition-colors"
              >
                进入学习模式
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        )}

        {/* Influence */}
        {activeTab === 'influence' && (
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl text-[#f0f0f0] mb-8">影响</h2>

            {influencedBy.length > 0 && (
              <div className="mb-12">
                <h3 className="text-[#888] text-sm mb-4">影响了他的人</h3>
                <div className="flex flex-wrap gap-3">
                  {influencedBy.map((personId) => {
                    const person = photographers.find((p) => p.id === personId);
                    return person ? (
                      <Link
                        key={personId}
                        to={`/photographer/${personId}`}
                        className="bg-card border border-[#222] px-4 py-2 text-[#ccc] hover:border-gold/50 transition-colors"
                      >
                        {person.name.zh}
                      </Link>
                    ) : (
                      <span key={personId} className="bg-card border border-[#222] px-4 py-2 text-[#666]">
                        {personId}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {influenced.length > 0 && (
              <div>
                <h3 className="text-[#888] text-sm mb-4">他影响了谁</h3>
                <div className="flex flex-wrap gap-3">
                  {influenced.map((personId) => {
                    const person = photographers.find((p) => p.id === personId);
                    return person ? (
                      <Link
                        key={personId}
                        to={`/photographer/${personId}`}
                        className="bg-card border border-[#222] px-4 py-2 text-[#ccc] hover:border-gold/50 transition-colors"
                      >
                        {person.name.zh}
                      </Link>
                    ) : (
                      <span key={personId} className="bg-card border border-[#222] px-4 py-2 text-[#666]">
                        {personId}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {influencedBy.length === 0 && influenced.length === 0 && (
              <p className="text-[#666]">暂无影响关系数据</p>
            )}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxWork && (
        <Lightbox
          work={lightboxWork}
          onClose={() => setLightboxWork(null)}
          onPrev={currentWorkIndex > 0 ? () => setLightboxWork(works[currentWorkIndex - 1]) : null}
          onNext={currentWorkIndex < works.length - 1 ? () => setLightboxWork(works[currentWorkIndex + 1]) : null}
        />
      )}
    </div>
  );
}
