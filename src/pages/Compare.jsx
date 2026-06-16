import { useState } from 'react';
import { photographers } from '../data/photographers';

export default function Compare() {
  const [photographer1, setPhotographer1] = useState(null);
  const [photographer2, setPhotographer2] = useState(null);

  const p1 = photographers.find((p) => p.id === photographer1);
  const p2 = photographers.find((p) => p.id === photographer2);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 px-6 border-b border-[#222]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl text-[#f0f0f0] mb-4">
            对比大师
          </h1>
          <p className="text-[#888]">
            选择两位摄影师，比较他们的风格与理念
          </p>
        </div>
      </section>

      {/* Selection */}
      <section className="py-8 px-6 bg-card border-b border-[#222]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-center">
          <select
            value={photographer1 || ''}
            onChange={(e) => setPhotographer1(e.target.value || null)}
            className="bg-[#0a0a0a] border border-[#333] text-[#f0f0f0] px-4 py-3 min-w-[250px] focus:outline-none focus:border-gold"
          >
            <option value="">选择第一位摄影师</option>
            {photographers.map((p) => (
              <option key={p.id} value={p.id} disabled={p.id === photographer2}>
                {p.name.zh} ({p.name.en})
              </option>
            ))}
          </select>

          <span className="text-gold text-2xl">VS</span>

          <select
            value={photographer2 || ''}
            onChange={(e) => setPhotographer2(e.target.value || null)}
            className="bg-[#0a0a0a] border border-[#333] text-[#f0f0f0] px-4 py-3 min-w-[250px] focus:outline-none focus:border-gold"
          >
            <option value="">选择第二位摄影师</option>
            {photographers.map((p) => (
              <option key={p.id} value={p.id} disabled={p.id === photographer1}>
                {p.name.zh} ({p.name.en})
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Comparison */}
      {p1 && p2 && (
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Avatars and names */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              {[p1, p2].map((p) => (
                <div key={p.id} className="text-center">
                  <img
                    src={p.avatar}
                    alt={p.name.zh}
                    className="w-24 h-24 object-cover mx-auto mb-4"
                  />
                  <h2 className="font-serif text-2xl text-[#f0f0f0]">{p.name.zh}</h2>
                  <p className="text-[#888]">{p.name.en}</p>
                  <p className="text-[#666] text-sm mt-1">
                    {p.flag} {p.nationality} · {p.birth}–{p.death || ''}
                  </p>
                </div>
              ))}
            </div>

            {/* Comparison table */}
            <div className="space-y-6">
              {/* Genres */}
              <div className="grid grid-cols-3 gap-4 items-start">
                <div className="text-right pr-4">
                  <div className="flex flex-wrap gap-2 justify-end">
                    {p1.genres.map((g) => (
                      <span key={g} className="text-gold text-sm border border-gold/30 px-2 py-1">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-[#666] text-sm">流派</span>
                </div>
                <div className="text-left pl-4">
                  <div className="flex flex-wrap gap-2">
                    {p2.genres.map((g) => (
                      <span key={g} className="text-gold text-sm border border-gold/30 px-2 py-1">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Era */}
              <div className="grid grid-cols-3 gap-4 items-center border-t border-[#222] pt-6">
                <div className="text-right pr-4">
                  <span className="text-[#ccc]">{p1.era}</span>
                </div>
                <div className="text-center">
                  <span className="text-[#666] text-sm">年代</span>
                </div>
                <div className="text-left pl-4">
                  <span className="text-[#ccc]">{p2.era}</span>
                </div>
              </div>

              {/* Philosophy */}
              <div className="grid grid-cols-3 gap-4 items-start border-t border-[#222] pt-6">
                <div className="text-right pr-4">
                  <ul className="space-y-2">
                    {p1.philosophy.slice(0, 3).map((phil, i) => (
                      <li key={i} className="text-[#ccc] text-sm">{phil}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <span className="text-[#666] text-sm">理念</span>
                </div>
                <div className="text-left pl-4">
                  <ul className="space-y-2">
                    {p2.philosophy.slice(0, 3).map((phil, i) => (
                      <li key={i} className="text-[#ccc] text-sm">{phil}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Gear */}
              <div className="grid grid-cols-3 gap-4 items-start border-t border-[#222] pt-6">
                <div className="text-right pr-4">
                  <p className="text-[#ccc] text-sm">{p1.gear.cameras.join(', ')}</p>
                </div>
                <div className="text-center">
                  <span className="text-[#666] text-sm">相机</span>
                </div>
                <div className="text-left pl-4">
                  <p className="text-[#ccc] text-sm">{p2.gear.cameras.join(', ')}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="grid grid-cols-3 gap-4 items-start border-t border-[#222] pt-6">
                <div className="text-right pr-4">
                  <p className="text-gold text-sm italic">"{p1.quote}"</p>
                </div>
                <div className="text-center">
                  <span className="text-[#666] text-sm">名言</span>
                </div>
                <div className="text-left pl-4">
                  <p className="text-gold text-sm italic">"{p2.quote}"</p>
                </div>
              </div>
            </div>

            {/* Works comparison */}
            <div className="mt-12">
              <h3 className="text-[#888] text-center mb-8">代表作品</h3>
              <div className="grid grid-cols-2 gap-8">
                {[p1, p2].map((p) => (
                  <div key={p.id} className="grid grid-cols-3 gap-2">
                    {p.works.slice(0, 3).map((work) => (
                      <div key={work.id} className="aspect-square overflow-hidden">
                        <img
                          src={work.image}
                          alt={work.title.zh}
                          className="w-full h-full object-cover img-desaturate hover:filter-none transition-all"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="mt-12 bg-card border border-[#222] p-8">
              <h3 className="text-gold mb-4">对比总结</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#888] text-sm mb-2">共同点</h4>
                  <ul className="space-y-2">
                    {p1.genres.filter((g) => p2.genres.includes(g)).length > 0 && (
                      <li className="text-[#ccc] text-sm">
                        同属{p1.genres.filter((g) => p2.genres.includes(g)).join('、')}流派
                      </li>
                    )}
                    {p1.era === p2.era && (
                      <li className="text-[#ccc] text-sm">活跃于同一年代（{p1.era}）</li>
                    )}
                    <li className="text-[#ccc] text-sm">都是各自领域的大师</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#888] text-sm mb-2">关键差异</h4>
                  <ul className="space-y-2">
                    {p1.nationality !== p2.nationality && (
                      <li className="text-[#ccc] text-sm">
                        国籍不同：{p1.nationality} vs {p2.nationality}
                      </li>
                    )}
                    <li className="text-[#ccc] text-sm">
                      器材偏好不同：{p1.gear.cameras[0]} vs {p2.gear.cameras[0]}
                    </li>
                    <li className="text-[#ccc] text-sm">
                      摄影理念各有特色
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {(!p1 || !p2) && (
        <div className="py-20 text-center">
          <p className="text-[#666]">请选择两位摄影师进行对比</p>
        </div>
      )}
    </div>
  );
}
