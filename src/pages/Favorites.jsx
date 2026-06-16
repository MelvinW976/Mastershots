import { useState, useEffect } from 'react';
import { photographers } from '../data/photographers';
import PhotographerCard from '../components/PhotographerCard';

export default function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavoriteIds(favorites);
  }, []);

  const favoritePhotographers = photographers.filter((p) =>
    favoriteIds.includes(p.id)
  );

  const clearAll = () => {
    localStorage.setItem('favorites', JSON.stringify([]));
    setFavoriteIds([]);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 px-6 border-b border-[#222]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-serif text-4xl text-[#f0f0f0] mb-2">
              我的收藏
            </h1>
            <p className="text-[#888]">
              {favoritePhotographers.length} 位摄影师
            </p>
          </div>
          {favoritePhotographers.length > 0 && (
            <button
              onClick={clearAll}
              className="px-4 py-2 border border-[#333] text-[#888] hover:border-red-500/50 hover:text-red-400 transition-colors text-sm"
            >
              清空全部
            </button>
          )}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {favoritePhotographers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoritePhotographers.map((photographer) => (
                <PhotographerCard key={photographer.id} photographer={photographer} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">💛</div>
              <p className="text-[#666] mb-2">还没有收藏任何摄影师</p>
              <p className="text-[#888] text-sm">
                浏览摄影师页面，点击 ❤ 按钮添加收藏
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
