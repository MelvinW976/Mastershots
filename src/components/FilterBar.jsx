import { genres, eras } from '../data/genres';

export default function FilterBar({ filters, onFilterChange }) {
  const { genre, era, country } = filters;

  const countries = [
    { id: 'all', name: '全部' },
    { id: '美国', name: '美国' },
    { id: '法国', name: '法国' },
    { id: '德国', name: '德国' },
    { id: '日本', name: '日本' },
    { id: '中国', name: '中国' },
    { id: '其他', name: '其他' },
  ];

  return (
    <div className="sticky top-16 z-40 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#222] py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-6">
          {/* Genre filter */}
          <div className="flex items-center gap-3">
            <span className="text-[#666] text-sm">流派</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onFilterChange({ ...filters, genre: 'all' })}
                className={`px-3 py-1 text-sm border transition-colors ${
                  genre === 'all'
                    ? 'border-gold text-gold'
                    : 'border-[#333] text-[#888] hover:border-[#555]'
                }`}
              >
                全部
              </button>
              {genres.slice(0, 6).map((g) => (
                <button
                  key={g.id}
                  onClick={() => onFilterChange({ ...filters, genre: g.id })}
                  className={`px-3 py-1 text-sm border transition-colors ${
                    genre === g.id
                      ? 'border-gold text-gold'
                      : 'border-[#333] text-[#888] hover:border-[#555]'
                  }`}
                >
                  {g.name.zh}
                </button>
              ))}
            </div>
          </div>

          {/* Era filter */}
          <div className="flex items-center gap-3">
            <span className="text-[#666] text-sm">年代</span>
            <div className="flex gap-2">
              <button
                onClick={() => onFilterChange({ ...filters, era: 'all' })}
                className={`px-3 py-1 text-sm border transition-colors ${
                  era === 'all'
                    ? 'border-gold text-gold'
                    : 'border-[#333] text-[#888] hover:border-[#555]'
                }`}
              >
                全部
              </button>
              {eras.map((e) => (
                <button
                  key={e.id}
                  onClick={() => onFilterChange({ ...filters, era: e.id })}
                  className={`px-3 py-1 text-sm border transition-colors ${
                    era === e.id
                      ? 'border-gold text-gold'
                      : 'border-[#333] text-[#888] hover:border-[#555]'
                  }`}
                >
                  {e.name}
                </button>
              ))}
            </div>
          </div>

          {/* Country filter */}
          <div className="flex items-center gap-3">
            <span className="text-[#666] text-sm">国家</span>
            <select
              value={country}
              onChange={(e) => onFilterChange({ ...filters, country: e.target.value })}
              className="bg-[#111] border border-[#333] text-[#888] text-sm px-3 py-1 focus:outline-none focus:border-gold"
            >
              {countries.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
