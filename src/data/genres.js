export const genres = [
  {
    id: "street",
    name: { zh: "街头", en: "Street" },
    slug: "street",
    color: "#e74c3c",
    description: "街头摄影捕捉城市生活中真实、自然的瞬间。摄影师在公共场所观察并记录人们的日常活动，追求'决定性瞬间'。",
    keyTechniques: [
      "预判构图——提前找好位置等待时机",
      "区域对焦——预设焦距快速抓拍",
      "隐形拍摄——融入环境不引起注意",
      "层次构图——利用前景中景背景"
    ],
    masters: ["henri-cartier-bresson", "vivian-maier", "saul-leiter", "daido-moriyama", "fan-ho"]
  },
  {
    id: "portrait",
    name: { zh: "人像", en: "Portrait" },
    slug: "portrait",
    color: "#9b59b6",
    description: "人像摄影专注于捕捉人物的外貌、性格和情感。从正式的肖像到环境人像，这一流派探索人类面孔的无限可能。",
    keyTechniques: [
      "眼神交流——引导被摄者的视线",
      "布光技术——伦勃朗光、蝴蝶光等",
      "背景控制——简洁或有意义的环境",
      "表情捕捉——等待真实的情感流露"
    ],
    masters: ["yousuf-karsh", "richard-avedon", "irving-penn", "steve-mccurry"]
  },
  {
    id: "landscape",
    name: { zh: "风光", en: "Landscape" },
    slug: "landscape",
    color: "#27ae60",
    description: "风光摄影记录自然界的壮丽景观，从雄伟的山脉到宁静的湖泊。这一流派强调光线、构图和对自然的敬畏。",
    keyTechniques: [
      "黄金时刻——日出日落的柔和光线",
      "区域曝光——精确控制影调范围",
      "前景运用——增加画面深度",
      "耐心等待——等待完美的光线和天气"
    ],
    masters: ["ansel-adams", "edward-weston"]
  },
  {
    id: "documentary",
    name: { zh: "纪实", en: "Documentary" },
    slug: "documentary",
    color: "#3498db",
    description: "纪实摄影记录真实的人物、事件和社会现象，旨在引发思考和社会变革。这是一种有责任感的摄影形式。",
    keyTechniques: [
      "长期跟踪——深入了解你的主题",
      "建立信任——与被摄者建立关系",
      "背景交代——环境是故事的一部分",
      "叙事序列——用一组照片讲故事"
    ],
    masters: ["dorothea-lange", "sebastiao-salgado", "steve-mccurry"]
  },
  {
    id: "fashion",
    name: { zh: "时尚", en: "Fashion" },
    slug: "fashion",
    color: "#e91e63",
    description: "时尚摄影展示服装、配饰和美妆，同时创造引人入胜的视觉叙事。它融合了商业需求与艺术表达。",
    keyTechniques: [
      "戏剧性布光——创造氛围",
      "姿态指导——让模特动起来",
      "场景选择——意想不到的环境",
      "后期处理——精致的色彩和肤质"
    ],
    masters: ["richard-avedon", "irving-penn", "helmut-newton"]
  },
  {
    id: "war",
    name: { zh: "战地", en: "War" },
    slug: "war",
    color: "#7f8c8d",
    description: "战地摄影记录战争和冲突，向世界展示战争的真实面貌。这是最危险也最有影响力的摄影形式之一。",
    keyTechniques: [
      "近距离拍摄——靠近才能捕捉真实",
      "人性视角——关注战争中的人",
      "快速反应——在混乱中保持冷静",
      "安全意识——保护自己和被摄者"
    ],
    masters: ["robert-capa"]
  },
  {
    id: "fine-art",
    name: { zh: "纯艺术", en: "Fine Art" },
    slug: "fine-art",
    color: "#f39c12",
    description: "纯艺术摄影将摄影作为艺术表达的媒介，探索概念、情感和视觉实验。它超越记录功能，追求艺术价值。",
    keyTechniques: [
      "概念先行——想法比技术重要",
      "系列创作——通过一组作品表达主题",
      "后期艺术——数字处理是创作的一部分",
      "跨界融合——与其他艺术形式结合"
    ],
    masters: ["cindy-sherman", "andreas-gursky", "gregory-crewdson", "edward-weston", "lang-jingshan"]
  },
  {
    id: "abstract",
    name: { zh: "抽象", en: "Abstract" },
    slug: "abstract",
    color: "#1abc9c",
    description: "抽象摄影打破具象的束缚，通过色彩、形状、线条和纹理创造纯粹的视觉体验。",
    keyTechniques: [
      "局部视角——关注细节而非整体",
      "模糊与失焦——有意识地打破清晰",
      "色彩抽离——单独运用色彩元素",
      "图案发现——在日常中找到抽象"
    ],
    masters: ["saul-leiter"]
  },
  {
    id: "architecture",
    name: { zh: "建筑", en: "Architecture" },
    slug: "architecture",
    color: "#34495e",
    description: "建筑摄影记录人造环境的形式、空间和结构。从历史建筑到现代摩天大楼，展示人类建造的艺术。",
    keyTechniques: [
      "透视控制——避免建筑变形",
      "光影等待——最佳光线时机",
      "几何构图——强调线条和形状",
      "人的尺度——用人物表现建筑规模"
    ],
    masters: ["andreas-gursky"]
  },
  {
    id: "humanistic",
    name: { zh: "人文", en: "Humanistic" },
    slug: "humanistic",
    color: "#e67e22",
    description: "人文摄影关注人类的生存状态，记录不同文化和社会中人们的生活方式、情感和尊严。",
    keyTechniques: [
      "同理心——理解和尊重被摄者",
      "长期投入——深入了解社区和文化",
      "自然状态——不干预、不摆拍",
      "故事讲述——用影像传达人类经验"
    ],
    masters: ["vivian-maier", "fan-ho", "dorothea-lange"]
  }
];

export const eras = [
  { id: "pre-1950", name: "1950年前", range: [1850, 1949] },
  { id: "1950-1980", name: "1950-1980", range: [1950, 1979] },
  { id: "1980-2000", name: "1980-2000", range: [1980, 1999] },
  { id: "2000-now", name: "2000至今", range: [2000, 2030] }
];

export default genres;
