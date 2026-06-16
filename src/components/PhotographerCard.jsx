import { Link } from 'react-router-dom';

export default function PhotographerCard({ photographer }) {
  const { id, name, nationality, flag, birth, death, genres, avatar, quote } = photographer;

  const lifespan = death ? `${birth}–${death}` : `${birth}–`;

  return (
    <Link
      to={`/photographer/${id}`}
      className="group block bg-card border border-[#222] overflow-hidden card-hover"
    >
      <div className="relative">
        {/* Avatar */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={avatar}
            alt={name.zh}
            className="w-full h-full object-cover img-desaturate group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Genre tags */}
        <div className="absolute top-3 right-3 flex gap-1.5">
          {genres.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="px-2 py-0.5 text-xs bg-[#0a0a0a]/80 text-gold border border-gold/30 backdrop-blur-sm"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        {/* Name */}
        <h3 className="font-serif text-lg text-[#f0f0f0] mb-1">
          {name.zh}
        </h3>
        <p className="text-sm text-[#666] mb-2">
          {name.en}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-2 text-xs text-[#888] mb-3">
          <span>{flag}</span>
          <span>{nationality}</span>
          <span className="text-[#444]">|</span>
          <span className="font-mono">{lifespan}</span>
        </div>

        {/* Quote */}
        <p className="text-sm text-[#666] italic line-clamp-2 border-l-2 border-gold/50 pl-3">
          "{quote}"
        </p>
      </div>
    </Link>
  );
}
