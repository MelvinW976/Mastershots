import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { photographers } from '../data/photographers';

export default function StudyMode() {
  const { id } = useParams();
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [quizMode, setQuizMode] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const photographer = photographers.find((p) => p.id === id);

  // Load progress
  useEffect(() => {
    if (id) {
      const progress = JSON.parse(localStorage.getItem(`study-${id}`) || '{}');
      if (progress.currentCard) {
        setCurrentCard(progress.currentCard);
      }
    }
  }, [id]);

  // Save progress
  useEffect(() => {
    if (id) {
      localStorage.setItem(`study-${id}`, JSON.stringify({ currentCard }));
    }
  }, [id, currentCard]);

  if (!photographer) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <p className="text-[#666]">
          {id ? '摄影师未找到' : '请选择一位摄影师开始学习'}
        </p>
      </div>
    );
  }

  // Build flashcards
  const flashcards = [
    ...photographer.philosophy.map((p, i) => ({
      type: 'philosophy',
      front: `理念 #${i + 1}`,
      back: p,
    })),
    ...photographer.quotes.map((q, i) => ({
      type: 'quote',
      front: `名言 #${i + 1}`,
      back: q,
    })),
    ...photographer.works.map((w) => ({
      type: 'work',
      front: w.title.zh,
      back: `${w.year} · ${w.location.zh}\n${w.technique}\n\n${w.significance}`,
      image: w.image,
    })),
    ...photographer.gear.cameras.map((c, i) => ({
      type: 'gear',
      front: `相机 #${i + 1}`,
      back: c,
    })),
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: `${photographer.name.zh}的国籍是？`,
      options: ['美国', '法国', '日本', photographer.nationality],
      correct: photographer.nationality,
    },
    {
      question: `${photographer.name.zh}出生于哪一年？`,
      options: [
        `${photographer.birth - 10}`,
        `${photographer.birth}`,
        `${photographer.birth + 5}`,
        `${photographer.birth + 15}`,
      ],
      correct: `${photographer.birth}`,
    },
    {
      question: `以下哪个是${photographer.name.zh}的主要相机？`,
      options: [
        photographer.gear.cameras[0],
        'Canon AE-1',
        'Nikon F3',
        'Pentax K1000',
      ],
      correct: photographer.gear.cameras[0],
    },
    {
      question: `${photographer.name.zh}属于哪个流派？`,
      options: [
        photographer.genres[0],
        '建筑',
        '微距',
        '水下摄影',
      ],
      correct: photographer.genres[0],
    },
    {
      question: `"${photographer.quote}" 这句话是谁说的？`,
      options: [
        photographer.name.zh,
        '安塞尔·亚当斯',
        '亨利·卡蒂埃-布列松',
        '森山大道',
      ],
      correct: photographer.name.zh,
    },
  ];

  const handleNext = () => {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    }
  };

  const handleQuizAnswer = (questionIndex, answer) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answer;
    setQuizAnswers(newAnswers);
  };

  const submitQuiz = () => {
    setShowResults(true);
  };

  const correctCount = quizAnswers.filter(
    (answer, i) => answer === quizQuestions[i].correct
  ).length;

  if (!id) {
    return (
      <div className="min-h-screen pt-16">
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-serif text-4xl text-[#f0f0f0] mb-8">学习模式</h1>
            <p className="text-[#888] mb-8">选择一位摄影师开始学习</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {photographers.map((p) => (
                <Link
                  key={p.id}
                  to={`/study/${p.id}`}
                  className="bg-card border border-[#222] p-4 hover:border-gold/50 transition-colors"
                >
                  <img
                    src={p.avatar}
                    alt={p.name.zh}
                    className="w-16 h-16 object-cover mx-auto mb-3"
                  />
                  <p className="text-[#f0f0f0] text-center text-sm">{p.name.zh}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-8 px-6 border-b border-[#222]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <Link to={`/photographer/${id}`} className="text-[#666] hover:text-gold text-sm mb-2 inline-block">
              ← 返回摄影师页面
            </Link>
            <h1 className="font-serif text-2xl text-[#f0f0f0]">
              学习：{photographer.name.zh}
            </h1>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setQuizMode(false)}
              className={`px-4 py-2 text-sm border transition-colors ${
                !quizMode
                  ? 'border-gold text-gold'
                  : 'border-[#333] text-[#888] hover:border-[#555]'
              }`}
            >
              闪卡
            </button>
            <button
              onClick={() => {
                setQuizMode(true);
                setQuizAnswers([]);
                setShowResults(false);
              }}
              className={`px-4 py-2 text-sm border transition-colors ${
                quizMode
                  ? 'border-gold text-gold'
                  : 'border-[#333] text-[#888] hover:border-[#555]'
              }`}
            >
              测验
            </button>
          </div>
        </div>
      </section>

      {/* Flashcards */}
      {!quizMode && (
        <section className="py-12 px-6">
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-[#666] text-sm">
                {currentCard + 1} / {flashcards.length}
              </span>
              <div className="flex-1 mx-4 h-1 bg-[#222] rounded">
                <div
                  className="h-full bg-gold rounded transition-all"
                  style={{ width: `${((currentCard + 1) / flashcards.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Card */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="cursor-pointer"
            >
              <div
                className={`relative h-[400px] transition-transform duration-500 preserve-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 bg-card border border-[#222] flex flex-col items-center justify-center p-8 backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {flashcards[currentCard].image && (
                    <img
                      src={flashcards[currentCard].image}
                      alt=""
                      className="max-h-48 object-contain mb-4"
                    />
                  )}
                  <span className="text-gold text-sm mb-4">
                    {flashcards[currentCard].type === 'philosophy' && '理念'}
                    {flashcards[currentCard].type === 'quote' && '名言'}
                    {flashcards[currentCard].type === 'work' && '作品'}
                    {flashcards[currentCard].type === 'gear' && '器材'}
                  </span>
                  <h2 className="font-serif text-2xl text-[#f0f0f0] text-center">
                    {flashcards[currentCard].front}
                  </h2>
                  <p className="text-[#666] text-sm mt-4">点击翻转</p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 bg-card border border-gold/50 flex items-center justify-center p-8 rotate-y-180 backface-hidden"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <p className="text-[#ccc] text-center whitespace-pre-line leading-relaxed">
                    {flashcards[currentCard].back}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrev}
                disabled={currentCard === 0}
                className="px-6 py-2 border border-[#333] text-[#888] disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#555] transition-colors"
              >
                上一张
              </button>
              <button
                onClick={handleNext}
                disabled={currentCard === flashcards.length - 1}
                className="px-6 py-2 border border-gold text-gold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold/10 transition-colors"
              >
                下一张
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Quiz */}
      {quizMode && !showResults && (
        <section className="py-12 px-6">
          <div className="max-w-2xl mx-auto space-y-8">
            {quizQuestions.map((q, i) => (
              <div key={i} className="bg-card border border-[#222] p-6">
                <p className="text-[#f0f0f0] mb-4">
                  {i + 1}. {q.question}
                </p>
                <div className="space-y-2">
                  {[...new Set(q.options)].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleQuizAnswer(i, option)}
                      className={`w-full text-left px-4 py-3 border transition-colors ${
                        quizAnswers[i] === option
                          ? 'border-gold text-gold'
                          : 'border-[#333] text-[#888] hover:border-[#555]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={submitQuiz}
              disabled={quizAnswers.length < quizQuestions.length}
              className="w-full py-3 bg-gold text-[#0a0a0a] font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold/90 transition-colors"
            >
              提交答案
            </button>
          </div>
        </section>
      )}

      {/* Results */}
      {quizMode && showResults && (
        <section className="py-12 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-[#f0f0f0] mb-4">
              测验结果
            </h2>
            <p className="text-6xl text-gold font-mono mb-4">
              {correctCount} / {quizQuestions.length}
            </p>
            <p className="text-[#888] mb-8">
              {correctCount === quizQuestions.length
                ? '太棒了！你已经完全掌握了！'
                : correctCount >= 3
                ? '做得不错！继续加油！'
                : '需要多复习一下哦！'}
            </p>

            <div className="space-y-4 text-left mb-8">
              {quizQuestions.map((q, i) => (
                <div
                  key={i}
                  className={`p-4 border ${
                    quizAnswers[i] === q.correct
                      ? 'border-green-500/50 bg-green-500/10'
                      : 'border-red-500/50 bg-red-500/10'
                  }`}
                >
                  <p className="text-[#ccc] text-sm mb-2">{q.question}</p>
                  <p className="text-sm">
                    你的答案：
                    <span className={quizAnswers[i] === q.correct ? 'text-green-400' : 'text-red-400'}>
                      {quizAnswers[i]}
                    </span>
                    {quizAnswers[i] !== q.correct && (
                      <span className="text-[#888]"> (正确答案：{q.correct})</span>
                    )}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setQuizAnswers([]);
                setShowResults(false);
              }}
              className="px-6 py-3 border border-gold text-gold hover:bg-gold/10 transition-colors"
            >
              重新测验
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
