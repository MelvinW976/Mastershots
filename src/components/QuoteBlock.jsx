export default function QuoteBlock({ quote, author }) {
  return (
    <blockquote className="quote-block my-6 py-4">
      <p className="text-xl md:text-2xl leading-relaxed mb-3">
        "{quote}"
      </p>
      {author && (
        <footer className="text-sm text-[#888] font-sans not-italic">
          — {author}
        </footer>
      )}
    </blockquote>
  );
}
