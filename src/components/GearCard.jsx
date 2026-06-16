export default function GearCard({ gear }) {
  const { cameras, lenses, films, techniques } = gear;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Cameras */}
      <div className="bg-card border border-[#222] p-5">
        <h4 className="text-gold text-sm mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          相机
        </h4>
        <ul className="space-y-2">
          {cameras.map((camera, i) => (
            <li key={i} className="text-[#ccc] text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold/50 rounded-full"></span>
              {camera}
            </li>
          ))}
        </ul>
      </div>

      {/* Lenses */}
      <div className="bg-card border border-[#222] p-5">
        <h4 className="text-gold text-sm mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth={2} />
            <circle cx="12" cy="12" r="6" strokeWidth={2} />
            <circle cx="12" cy="12" r="2" strokeWidth={2} />
          </svg>
          镜头
        </h4>
        <ul className="space-y-2">
          {lenses.map((lens, i) => (
            <li key={i} className="text-[#ccc] text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold/50 rounded-full"></span>
              {lens}
            </li>
          ))}
        </ul>
      </div>

      {/* Films */}
      <div className="bg-card border border-[#222] p-5">
        <h4 className="text-gold text-sm mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
          </svg>
          胶片/感光
        </h4>
        <ul className="space-y-2">
          {films.map((film, i) => (
            <li key={i} className="text-[#ccc] text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold/50 rounded-full"></span>
              {film}
            </li>
          ))}
        </ul>
      </div>

      {/* Techniques */}
      <div className="bg-card border border-[#222] p-5">
        <h4 className="text-gold text-sm mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          技法
        </h4>
        <ul className="space-y-2">
          {techniques.map((tech, i) => (
            <li key={i} className="text-[#ccc] text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold/50 rounded-full"></span>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
