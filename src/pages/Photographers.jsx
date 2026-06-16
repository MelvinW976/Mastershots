import { useState } from 'react';
import { photographers } from '../data/photographers';
import { genres } from '../data/genres';
import PhotographerCard from '../components/PhotographerCard';

export default function Photographers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredPhotographers = photographers
    .filter((p) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        p.name.zh.toLowerCase().includes(query) ||
        p.name.en.toLowerCase().includes(query) ||
        p.nationality.toLowerCase().includes(query) ||
        p.genres.some((g) => g.toLowerCase().includes(query))
      );
    })
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.zh.localeCompare(b.name.zh, 'zh');
      }
      if (sortBy === 'birth') {
        return a.birth - b.birth;
      }
      if (sortBy === 'nationality') {
        return a.nationality.localeCompare(b.nationality, 'zh');
      }
      return 0;
    });

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 px-6 border-b border-[#222]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl text-[#f0f0f0] mb-4">
            摄影大师
          </h1>
          <p className="text-[#888]">
            收录 {photographers.length} 位影响世界的摄影师
          </p>
        </div>
      </section>

      {/* Search and sort */}
      <section className="sticky top-16 z-40 bg-[#0a0a0a] border-b border-[#222] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索姓名、国籍、流派..."
              className="bg-[#111] border border-[#333] text-[#f0f0f0] placeholder-[#666] px-4 py-2 pl-10 w-full md:w-80 focus:outline-none focus:border-gold"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-[#666] text-sm">排序</span>
            <div className="flex border border-[#333]">
              {[
                { id: 'name', label: '姓名' },
                { id: 'birth', label: '出生年份' },
                { id: 'nationality', label: '国籍' },
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSortBy(option.id)}
                  className={`px-4 py-2 text-sm transition-colors ${
                    sortBy === option.id
                      ? 'bg-[#222] text-gold'
                      : 'text-[#888] hover:text-[#f0f0f0]'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-[#666] text-sm">
            找到 {filteredPhotographers.length} 位摄影师
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
    </div>
  );
}
