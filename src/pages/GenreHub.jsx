import { useParams, Link } from 'react-router-dom';
import { genres } from '../data/genres';
import { photographers } from '../data/photographers';
import PhotographerCard from '../components/PhotographerCard';

export default function GenreHub() {
  const { slug } = useParams();

  const genre = genres.find((g) => g.slug === slug);

  if (!genre) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <p className="text-[#666]">流派未找到</p>
      </div>
    );
  }

  const genrePhotographers = photographers.filter((p) =>
    p.genres.includes(genre.name.zh)
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 px-6 border-b border-[#222]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: genre.color }}
            ></div>
            <span className="text-[#666]">{genre.name.en}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#f0f0f0] mb-6">
            {genre.name.zh}
          </h1>
          <p className="text-[#ccc] max-w-3xl leading-relaxed">
            {genre.description}
          </p>
        </div>
      </section>

      {/* Key techniques */}
      <section className="py-12 px-6 bg-card border-b border-[#222]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-gold text-lg mb-6">核心技法</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {genre.keyTechniques.map((technique, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] border border-[#222] p-5"
              >
                <span className="text-gold font-mono text-sm">0{i + 1}</span>
                <p className="text-[#ccc] mt-2 text-sm">{technique}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masters */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl text-[#f0f0f0] mb-8">
            {genre.name.zh}大师
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {genrePhotographers.map((photographer) => (
              <PhotographerCard key={photographer.id} photographer={photographer} />
            ))}
          </div>
          {genrePhotographers.length === 0 && (
            <p className="text-[#666] text-center py-12">暂无该流派的摄影师</p>
          )}
        </div>
      </section>

      {/* Other genres */}
      <section className="py-12 px-6 bg-card border-t border-[#222]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#888] text-sm mb-6">探索其他流派</h2>
          <div className="flex flex-wrap gap-3">
            {genres
              .filter((g) => g.id !== genre.id)
              .map((g) => (
                <Link
                  key={g.id}
                  to={`/genre/${g.slug}`}
                  className="px-4 py-2 border border-[#333] text-[#888] hover:border-gold hover:text-gold transition-colors"
                >
                  {g.name.zh}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
