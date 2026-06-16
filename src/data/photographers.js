export const photographers = [
  {
    id: "henri-cartier-bresson",
    name: { zh: "亨利·卡蒂埃-布列松", en: "Henri Cartier-Bresson" },
    nationality: "法国",
    flag: "🇫🇷",
    birth: 1908,
    death: 2004,
    era: "1950-1980",
    genres: ["街头", "纪实"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    quote: "摄影不是记录，而是观看。",
    bio: [
      "亨利·卡蒂埃-布列松是20世纪最具影响力的摄影师之一，被誉为'现代新闻摄影之父'。他出生于法国塞纳-马恩省的尚特卢，早年学习绘画，后转向摄影。",
      "1947年，他与罗伯特·卡帕等人共同创立了玛格南图片社，这是世界上最著名的摄影师合作机构。他的足迹遍布世界各地，记录了20世纪众多重大历史事件。",
      "布列松提出的'决定性瞬间'理论深刻影响了整个摄影界。他认为摄影的精髓在于捕捉生活中那些形式与内容完美统一的瞬间。"
    ],
    philosophy: [
      "决定性瞬间：在正确的时刻按下快门，捕捉形式与内容的完美统一",
      "几何构图：利用线条、形状和空间关系创造视觉张力",
      "隐形摄影师：融入环境，不打扰被摄对象",
      "永不裁剪：在取景器中完成构图，拒绝后期裁剪",
      "用心观看：摄影是一种观看和感知世界的方式"
    ],
    quotes: [
      "你拍摄的前一万张照片都是最差的。",
      "摄影是同时在一瞬间里识别一个事实的意义和能精确地组织形式的行为。",
      "世界正在分崩离析，而我却在拍照。"
    ],
    influencedBy: ["andre-kertesz", "eugene-atget"],
    influenced: ["josef-koudelka", "alex-webb"],
    works: [
      {
        id: "hcb-001",
        title: { zh: "圣拉扎尔车站后", en: "Behind the Gare Saint-Lazare" },
        year: 1932,
        location: { zh: "法国巴黎", en: "Paris, France" },
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
        camera: "Leica III",
        technique: "决定性瞬间——人与倒影的几何对称",
        significance: "这张照片定义了'决定性瞬间'这一概念，展示了摄影捕捉转瞬即逝时刻的能力。"
      },
      {
        id: "hcb-002",
        title: { zh: "自行车手", en: "Hyères, France" },
        year: 1932,
        location: { zh: "法国耶尔", en: "Hyères, France" },
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        camera: "Leica III",
        technique: "螺旋构图与动态模糊",
        significance: "展示了运动与静止、曲线与直线的完美对比。"
      }
    ],
    gear: {
      cameras: ["Leica III", "Leica M3", "Leica M4"],
      lenses: ["50mm f/2 Summicron"],
      films: ["Kodak Tri-X", "Ilford HP5"],
      techniques: ["区域对焦", "自然光", "35mm旁轴相机"]
    },
    practice: [
      "带着50mm镜头在街头行走一整天，不使用其他焦段",
      "预设区域对焦为3米，练习预判拍摄",
      "寻找几何图案和线条，等待人物进入画面",
      "尝试一卷36张胶片只拍一个场景"
    ],
    resources: {
      books: ["决定性瞬间", "思想的眼睛", "摄影师"],
      films: ["L'Amour de Court", "Henri Cartier-Bresson: The Impassioned Eye"]
    }
  },
  {
    id: "vivian-maier",
    name: { zh: "薇薇安·迈尔", en: "Vivian Maier" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1926,
    death: 2009,
    era: "1950-1980",
    genres: ["街头", "人文"],
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    quote: "我们必须为一切留下空间。",
    bio: [
      "薇薇安·迈尔是20世纪最神秘的街头摄影师之一。她一生以保姆为职业，却在业余时间拍摄了超过15万张照片，直到去世后才被世人发现。",
      "她出生于纽约，在法国度过部分童年，后来回到美国在芝加哥和纽约担任保姆。她几乎从不向任何人展示自己的作品。",
      "2007年，她的大量底片在一场拍卖会上被发现，随后引发了全世界对这位'隐秘天才'的关注和研究。"
    ],
    philosophy: [
      "匿名创作：为自己而非他人拍摄",
      "日常观察：在平凡中发现非凡",
      "自拍探索：通过自画像理解自我与世界的关系",
      "持续记录：摄影是一种生活方式而非职业"
    ],
    quotes: [
      "没什么好说的，因为没什么好说的。",
      "我的照片就像我的日记。"
    ],
    influencedBy: ["lisette-model", "helen-levitt"],
    influenced: ["contemporary-street-photographers"],
    works: [
      {
        id: "vm-001",
        title: { zh: "芝加哥自拍", en: "Self-Portrait, Chicago" },
        year: 1955,
        location: { zh: "美国芝加哥", en: "Chicago, USA" },
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
        camera: "Rolleiflex 3.5",
        technique: "镜面反射自拍",
        significance: "展示了她对自我身份的持续探索。"
      }
    ],
    gear: {
      cameras: ["Rolleiflex 3.5", "Leica IIIc"],
      lenses: ["Zeiss Tessar 75mm f/3.5"],
      films: ["Kodak Ektachrome", "Kodak Tri-X"],
      techniques: ["腰平取景", "中画幅", "彩色与黑白并行"]
    },
    practice: [
      "使用腰平取景相机拍摄，体验不同视角",
      "在熟悉的社区中寻找新故事",
      "尝试自拍：在镜子和反射中找到自己",
      "每天拍摄，不考虑是否有人会看到"
    ],
    resources: {
      books: ["Vivian Maier: Street Photographer", "Vivian Maier: Self-Portraits"],
      films: ["Finding Vivian Maier (寻找薇薇安·迈尔)"]
    }
  },
  {
    id: "saul-leiter",
    name: { zh: "索尔·莱特", en: "Saul Leiter" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1923,
    death: 2013,
    era: "1950-1980",
    genres: ["街头", "抽象"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    quote: "我不急于被发现。",
    bio: [
      "索尔·莱特是彩色街头摄影的先驱，他的作品以诗意的色彩和抽象的构图著称。他出生于匹兹堡的一个犹太拉比家庭。",
      "莱特在1940年代移居纽约，原本打算成为画家。他与抽象表现主义画家交往密切，这影响了他独特的摄影视角。",
      "尽管在时尚摄影领域取得商业成功，他始终更看重自己的个人街头创作，直到晚年才被艺术界重新发现。"
    ],
    philosophy: [
      "透过模糊看清：利用雨滴、雾气和窗户创造朦胧美感",
      "色彩即情感：用色彩而非叙事表达感受",
      "边缘视觉：关注画面边缘和局部",
      "慢节奏：不追求即时认可，专注创作本身"
    ],
    quotes: [
      "被忽视是一种奇妙的特权。",
      "我不需要去远方——我的窗外就有足够的素材。"
    ],
    influencedBy: ["pierre-bonnard", "edouard-vuillard"],
    influenced: ["todd-hido", "contemporary-color-photographers"],
    works: [
      {
        id: "sl-001",
        title: { zh: "红伞", en: "Red Umbrella" },
        year: 1958,
        location: { zh: "美国纽约", en: "New York, USA" },
        image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800",
        camera: "Leica M3",
        technique: "色彩层次与雨中摄影",
        significance: "展示了他标志性的彩色街头风格。"
      }
    ],
    gear: {
      cameras: ["Leica M3", "Leica M4"],
      lenses: ["50mm Summicron", "35mm Summilux"],
      films: ["Kodachrome", "Ektachrome"],
      techniques: ["彩色反转片", "窗户反射", "选择性对焦"]
    },
    practice: [
      "在雨天外出，寻找色彩的流动",
      "通过窗户、玻璃拍摄，利用反射和折射",
      "关注画面边缘的元素",
      "用色彩讲述情绪而非故事"
    ],
    resources: {
      books: ["Early Color", "Saul Leiter", "All About Saul Leiter"],
      films: ["In No Great Hurry: 13 Lessons in Life with Saul Leiter"]
    }
  },
  {
    id: "daido-moriyama",
    name: { zh: "森山大道", en: "Daido Moriyama" },
    nationality: "日本",
    flag: "🇯🇵",
    birth: 1938,
    death: null,
    era: "1980-2000",
    genres: ["街头", "纪实"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    quote: "我像一条流浪狗一样在城市里游荡。",
    bio: [
      "森山大道是日本最具影响力的街头摄影师，以粗粝、高对比度的黑白影像闻名。他出生于大阪，1961年移居东京。",
      "他是日本前卫摄影运动'Provoke'的核心成员，该运动主张'粗糙、模糊、失焦'的美学，挑战传统摄影观念。",
      "森山大道的作品记录了战后日本的城市面貌，充满了能量与躁动，影响了全球无数街头摄影师。"
    ],
    philosophy: [
      "粗糙美学：模糊、颗粒、高对比度是一种语言",
      "流浪狗视角：以本能和直觉拍摄",
      "城市猎人：街道是永恒的狩猎场",
      "反复拍摄：同一条街可以拍一辈子"
    ],
    quotes: [
      "摄影是光与时间的化石。",
      "我不寻找，我遇见。"
    ],
    influencedBy: ["william-klein", "andy-warhol"],
    influenced: ["jacob-aue-sobol", "trent-parke"],
    works: [
      {
        id: "dm-001",
        title: { zh: "野狗", en: "Stray Dog" },
        year: 1971,
        location: { zh: "日本青森", en: "Aomori, Japan" },
        image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800",
        camera: "Olympus Pen",
        technique: "高对比度、粗颗粒",
        significance: "这张照片成为森山大道的标志性作品。"
      }
    ],
    gear: {
      cameras: ["Ricoh GR", "Olympus Pen", "Contax T3"],
      lenses: ["28mm", "35mm"],
      films: ["Kodak Tri-X (推高至1600)"],
      techniques: ["过度曝光", "高ISO", "暗房过度冲洗"]
    },
    practice: [
      "将ISO推到极限，拥抱颗粒感",
      "在夜晚的霓虹灯下拍摄",
      "近距离拍摄，不要害怕侵入",
      "反复在同一条街道行走"
    ],
    resources: {
      books: ["摄影再见", "犬的记忆", "新宿"],
      films: ["Near Equal Moriyama Daido"]
    }
  },
  {
    id: "fan-ho",
    name: { zh: "何藩", en: "Fan Ho" },
    nationality: "中国香港",
    flag: "🇭🇰",
    birth: 1931,
    death: 2016,
    era: "1950-1980",
    genres: ["街头", "人文"],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    quote: "光影是我的画笔。",
    bio: [
      "何藩是香港最伟大的摄影师之一，也是著名的电影导演。他出生于上海，1949年随家人移居香港。",
      "他用相机记录了1950-60年代香港的街头生活，创造了充满诗意和戏剧性的光影画面，被誉为'东方布列松'。",
      "何藩的作品融合了中国传统美学与西方现代主义，展现了独特的东方摄影语言。"
    ],
    philosophy: [
      "光影造型：利用香港独特的建筑光影",
      "东方诗意：在纪实中融入写意",
      "等待瞬间：耐心等待人物进入理想位置",
      "暗房艺术：精心控制影调"
    ],
    quotes: [
      "摄影是减法的艺术。",
      "我用光影写诗。"
    ],
    influencedBy: ["henri-cartier-bresson"],
    influenced: ["contemporary-hong-kong-photographers"],
    works: [
      {
        id: "fh-001",
        title: { zh: "接近阴影", en: "Approaching Shadow" },
        year: 1954,
        location: { zh: "中国香港", en: "Hong Kong" },
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800",
        camera: "Rolleiflex",
        technique: "几何光影与人物剪影",
        significance: "展示了香港独特的建筑光影美学。"
      }
    ],
    gear: {
      cameras: ["Rolleiflex 3.5F", "Leica M3"],
      lenses: ["Zeiss Planar 75mm", "Summicron 50mm"],
      films: ["Kodak Plus-X", "Ilford FP4"],
      techniques: ["逆光剪影", "暗房遮挡增减"]
    },
    practice: [
      "观察建筑物投射的阴影图案",
      "在清晨或傍晚拍摄，利用低角度光线",
      "寻找楼梯、窗户和走廊的几何线条",
      "等待人物走入光影的交界处"
    ],
    resources: {
      books: ["香港回忆录", "何藩：光影行者"],
      films: ["何藩执导的电影作品"]
    }
  },
  {
    id: "dorothea-lange",
    name: { zh: "多萝西娅·兰格", en: "Dorothea Lange" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1895,
    death: 1965,
    era: "1950年前",
    genres: ["纪实", "人文"],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    quote: "相机是一个教人如何在没有相机的情况下观看的工具。",
    bio: [
      "多萝西娅·兰格是美国纪实摄影的先驱，以记录大萧条时期美国人民的苦难而闻名。",
      "她为美国农业安全管理局拍摄的照片成为那个时代最有力的视觉记录。",
      "她的作品《移民母亲》成为美国历史上最具标志性的照片之一。"
    ],
    philosophy: [
      "用影像发声：摄影是社会变革的工具",
      "尊重被摄者：保持被摄者的尊严",
      "真实记录：不干预、不摆拍"
    ],
    quotes: ["摄影将一个我们以为了解的世界，转变为一个需要我们关注的世界。"],
    influencedBy: [],
    influenced: ["sebastiao-salgado"],
    works: [{
      id: "dl-001",
      title: { zh: "移民母亲", en: "Migrant Mother" },
      year: 1936,
      location: { zh: "美国加州", en: "California, USA" },
      image: "https://images.unsplash.com/photo-1509909756405-be0199881695?w=800",
      camera: "Graflex",
      technique: "近距离人像，环境肖像",
      significance: "大萧条时期最具标志性的影像。"
    }],
    gear: { cameras: ["Graflex Speed Graphic"], lenses: ["127mm"], films: ["Kodak"], techniques: ["大画幅", "自然光"] },
    practice: ["寻找你社区中被忽视的故事", "与被摄者建立信任后再拍摄", "关注人的表情和肢体语言"],
    resources: { books: ["Dorothea Lange: A Life Beyond Limits"], films: [] }
  },
  {
    id: "robert-capa",
    name: { zh: "罗伯特·卡帕", en: "Robert Capa" },
    nationality: "匈牙利",
    flag: "🇭🇺",
    birth: 1913,
    death: 1954,
    era: "1950年前",
    genres: ["战地", "纪实"],
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop",
    quote: "如果你的照片不够好，那是因为你靠得不够近。",
    bio: [
      "罗伯特·卡帕是20世纪最伟大的战地摄影师，玛格南图片社创始人之一。",
      "他记录了五场战争，包括西班牙内战、二战等，是现代战地摄影的奠基人。",
      "1954年在越南采访时触雷身亡，年仅40岁。"
    ],
    philosophy: [
      "靠近：物理和情感上靠近你的主题",
      "勇气：伟大的照片需要冒险",
      "人性：战争中关注人而非武器"
    ],
    quotes: ["战争中的真相是第一个牺牲品。"],
    influencedBy: [],
    influenced: ["james-nachtwey"],
    works: [{
      id: "rc-001",
      title: { zh: "倒下的士兵", en: "The Falling Soldier" },
      year: 1936,
      location: { zh: "西班牙", en: "Spain" },
      image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=800",
      camera: "Leica III",
      technique: "抓拍决定性瞬间",
      significance: "战地摄影史上最著名的照片之一。"
    }],
    gear: { cameras: ["Leica III", "Contax II"], lenses: ["50mm"], films: ["Kodak Tri-X"], techniques: ["高速抓拍", "近距离"] },
    practice: ["在安全的环境下练习快速反应拍摄", "关注冲突中的人性时刻"],
    resources: { books: ["失焦", "这就是战争"], films: [] }
  },
  {
    id: "sebastiao-salgado",
    name: { zh: "塞巴斯蒂昂·萨尔加多", en: "Sebastião Salgado" },
    nationality: "巴西",
    flag: "🇧🇷",
    birth: 1944,
    death: null,
    era: "1980-2000",
    genres: ["纪实", "风光"],
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    quote: "我不是在拍照片，我是在讲述故事。",
    bio: [
      "萨尔加多是当代最重要的纪实摄影师之一，以史诗般的黑白影像记录人类境况。",
      "他的《劳动者》《迁徙》《创世纪》三部曲是摄影史上的里程碑。",
      "他与妻子创立了地球研究所，致力于环境保护。"
    ],
    philosophy: [
      "史诗叙事：用大型项目讲述人类故事",
      "黑白美学：去除色彩，突出形式和情感",
      "长期投入：一个项目可能需要数年"
    ],
    quotes: ["摄影是我的生活方式。"],
    influencedBy: ["dorothea-lange"],
    influenced: [],
    works: [{
      id: "ss-001",
      title: { zh: "金矿工人", en: "Gold Mine Workers" },
      year: 1986,
      location: { zh: "巴西塞拉佩拉达", en: "Serra Pelada, Brazil" },
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
      camera: "Leica R",
      technique: "高角度全景，人群纪实",
      significance: "展示了人类劳动的壮观与悲壮。"
    }],
    gear: { cameras: ["Leica R", "Canon EOS"], lenses: ["35mm", "24mm"], films: ["Kodak Tri-X"], techniques: ["大场景", "高对比度黑白"] },
    practice: ["选择一个长期主题深入拍摄", "思考你想讲述什么故事"],
    resources: { books: ["创世纪", "劳动者", "迁徙"], films: ["地球之盐"] }
  },
  {
    id: "steve-mccurry",
    name: { zh: "史蒂夫·麦柯里", en: "Steve McCurry" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1950,
    death: null,
    era: "1980-2000",
    genres: ["纪实", "人像"],
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop",
    quote: "如果你等待，人们会忘记你的相机。",
    bio: [
      "史蒂夫·麦柯里是当代最知名的彩色纪实摄影师之一。",
      "他的《阿富汗少女》是《国家地理》历史上最著名的封面照片。",
      "他的作品以饱和的色彩和穿透人心的肖像著称。"
    ],
    philosophy: [
      "眼神交流：捕捉灵魂的窗户",
      "色彩叙事：用色彩传达情感和文化",
      "耐心等待：最好的照片需要时间"
    ],
    quotes: ["最好的照片来自于你全身心投入的时刻。"],
    influencedBy: [],
    influenced: [],
    works: [{
      id: "sm-001",
      title: { zh: "阿富汗少女", en: "Afghan Girl" },
      year: 1984,
      location: { zh: "巴基斯坦白沙瓦", en: "Peshawar, Pakistan" },
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800",
      camera: "Nikon FM2",
      technique: "自然光人像，眼神对焦",
      significance: "被称为'阿富汗的蒙娜丽莎'。"
    }],
    gear: { cameras: ["Nikon FM2", "Nikon F5"], lenses: ["105mm f/2.5", "35mm"], films: ["Kodachrome"], techniques: ["自然光", "环境肖像"] },
    practice: ["在旅行中寻找有故事的面孔", "学会用眼神建立连接"],
    resources: { books: ["Portraits", "The Iconic Photographs"], films: [] }
  },
  {
    id: "yousuf-karsh",
    name: { zh: "优素福·卡什", en: "Yousuf Karsh" },
    nationality: "加拿大",
    flag: "🇨🇦",
    birth: 1908,
    death: 2002,
    era: "1950-1980",
    genres: ["人像"],
    avatar: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=200&h=200&fit=crop",
    quote: "人物内心的秘密反映在他们的面容上。",
    bio: [
      "卡什是20世纪最伟大的肖像摄影师，拍摄了无数政治家、艺术家和名人。",
      "他的温斯顿·丘吉尔肖像是摄影史上最著名的人像之一。",
      "他的布光技术和对人物性格的洞察力无人能及。"
    ],
    philosophy: [
      "揭示性格：捕捉人物的内在本质",
      "戏剧性布光：用光影雕塑面容",
      "准备充分：研究被摄者的生平和性格"
    ],
    quotes: ["性格，像照片一样，是在黑暗中显影的。"],
    influencedBy: [],
    influenced: [],
    works: [{
      id: "yk-001",
      title: { zh: "愤怒的丘吉尔", en: "The Roaring Lion" },
      year: 1941,
      location: { zh: "加拿大渥太华", en: "Ottawa, Canada" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      camera: "8x10大画幅",
      technique: "经典伦勃朗布光",
      significance: "定义了丘吉尔的公众形象。"
    }],
    gear: { cameras: ["8x10大画幅相机"], lenses: ["300mm"], films: ["Kodak Plus-X"], techniques: ["伦勃朗布光", "大画幅"] },
    practice: ["研究经典肖像布光技术", "拍摄前了解你的被摄者"],
    resources: { books: ["Karsh: A Fifty-Year Retrospective"], films: [] }
  },
  {
    id: "ansel-adams",
    name: { zh: "安塞尔·亚当斯", en: "Ansel Adams" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1902,
    death: 1984,
    era: "1950-1980",
    genres: ["风光"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    quote: "你不只是拍摄一张照片，你是带着你曾读过的书、看过的电影、听过的音乐和爱过的人去拍摄。",
    bio: [
      "安塞尔·亚当斯是美国最著名的风光摄影师，以拍摄美国西部荒野闻名于世。",
      "他发明了'区域曝光系统'，这一技术理论至今仍是摄影教育的基础。",
      "他也是环境保护的先驱，用照片推动了美国国家公园的保护事业。"
    ],
    philosophy: [
      "区域系统：精确控制曝光和冲洗",
      "预视化：在按下快门前想象最终画面",
      "技术即自由：掌握技术才能表达情感"
    ],
    quotes: ["没有坏天气，只有不同类型的好天气。", "摄影不是拍摄你所看到的，而是拍摄你所感受到的。"],
    influencedBy: ["edward-weston"],
    influenced: [],
    works: [{
      id: "aa-001",
      title: { zh: "月出，埃尔南德斯", en: "Moonrise, Hernandez" },
      year: 1941,
      location: { zh: "美国新墨西哥", en: "New Mexico, USA" },
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      camera: "8x10 大画幅",
      technique: "区域曝光系统",
      significance: "风光摄影的巅峰之作。"
    }],
    gear: { cameras: ["8x10大画幅", "4x5大画幅"], lenses: ["多焦段"], films: ["Kodak Plus-X"], techniques: ["区域系统", "大画幅"] },
    practice: ["学习区域曝光系统的原理", "在日出日落时拍摄", "使用三脚架精确构图"],
    resources: { books: ["相机", "底片", "冲洗"], films: ["Ansel Adams: A Documentary Film"] }
  },
  {
    id: "edward-weston",
    name: { zh: "爱德华·韦斯顿", en: "Edward Weston" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1886,
    death: 1958,
    era: "1950年前",
    genres: ["纯艺术", "风光"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    quote: "摄影师的任务是看清事物的本质。",
    bio: [
      "韦斯顿是现代摄影的先驱，f/64小组的创始成员之一。",
      "他以拍摄青椒、贝壳等静物的抽象形式美而闻名。",
      "他主张'直接摄影'，反对画意摄影的矫揉造作。"
    ],
    philosophy: [
      "直接摄影：清晰、锐利、无修饰",
      "形式之美：在日常物品中发现抽象美",
      "接触印相：追求最高品质的影像"
    ],
    quotes: ["好照片是能让观者感到惊奇的照片。"],
    influencedBy: [],
    influenced: ["ansel-adams"],
    works: [{
      id: "ew-001",
      title: { zh: "青椒30号", en: "Pepper No. 30" },
      year: 1930,
      location: { zh: "美国加州", en: "California, USA" },
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=800",
      camera: "8x10大画幅",
      technique: "近距离静物，小光圈",
      significance: "展示了如何在普通物品中发现雕塑般的美。"
    }],
    gear: { cameras: ["8x10大画幅"], lenses: ["长焦"], films: ["黑白负片"], techniques: ["接触印相", "小光圈"] },
    practice: ["用相机观察日常物品的形式", "练习极端特写拍摄"],
    resources: { books: ["Edward Weston: His Life and Photographs"], films: [] }
  },
  {
    id: "richard-avedon",
    name: { zh: "理查德·阿维顿", en: "Richard Avedon" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1923,
    death: 2004,
    era: "1950-1980",
    genres: ["时尚", "人像"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    quote: "我拍摄的是我脑海中的照片。",
    bio: [
      "阿维顿是20世纪最具影响力的时尚和肖像摄影师之一。",
      "他革新了时尚摄影，让模特从静态姿势走向动态表达。",
      "晚年他转向深刻的肖像摄影，记录美国西部的普通人。"
    ],
    philosophy: [
      "动态时尚：让模特动起来",
      "白色背景：去除干扰，聚焦人物",
      "心理肖像：捕捉人物内心的真实"
    ],
    quotes: ["所有照片都是精确的，但没有一张是真实的。"],
    influencedBy: [],
    influenced: [],
    works: [{
      id: "ra-001",
      title: { zh: "多维玛与大象", en: "Dovima with Elephants" },
      year: 1955,
      location: { zh: "法国巴黎", en: "Paris, France" },
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
      camera: "Rolleiflex",
      technique: "时尚与意外元素结合",
      significance: "重新定义了时尚摄影的可能性。"
    }],
    gear: { cameras: ["Rolleiflex", "Deardorff 8x10"], lenses: ["多焦段"], films: ["Kodak Tri-X"], techniques: ["白色背景", "大画幅肖像"] },
    practice: ["尝试在意想不到的环境拍摄时尚", "让被摄者在镜头前自由移动"],
    resources: { books: ["In the American West", "Avedon at Work"], films: [] }
  },
  {
    id: "irving-penn",
    name: { zh: "欧文·佩恩", en: "Irving Penn" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1917,
    death: 2009,
    era: "1950-1980",
    genres: ["时尚", "人像", "静物"],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    quote: "一张好的照片是知道站在哪里。",
    bio: [
      "欧文·佩恩是《Vogue》杂志最重要的摄影师之一，职业生涯长达60年。",
      "他以简洁、优雅的视觉风格著称，无论是时尚、人像还是静物。",
      "他的铂金印相技术使他的作品具有独特的质感和永恒性。"
    ],
    philosophy: [
      "简洁至上：去除一切不必要的元素",
      "角落肖像：在限制中创造张力",
      "铂金印相：追求极致的影调"
    ],
    quotes: ["在困难的条件下拍出好照片是很自然的事。"],
    influencedBy: [],
    influenced: [],
    works: [{
      id: "ip-001",
      title: { zh: "毕加索", en: "Pablo Picasso" },
      year: 1957,
      location: { zh: "法国戛纳", en: "Cannes, France" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      camera: "Rolleiflex",
      technique: "简洁背景，角落构图",
      significance: "展示了他简洁有力的肖像风格。"
    }],
    gear: { cameras: ["Rolleiflex", "8x10大画幅"], lenses: ["标准镜头"], films: ["黑白负片"], techniques: ["铂金印相", "简洁背景"] },
    practice: ["用最简单的背景拍摄人像", "关注光影的细微变化"],
    resources: { books: ["Passage", "Worlds in a Small Room"], films: [] }
  },
  {
    id: "helmut-newton",
    name: { zh: "赫尔穆特·牛顿", en: "Helmut Newton" },
    nationality: "德国",
    flag: "🇩🇪",
    birth: 1920,
    death: 2004,
    era: "1980-2000",
    genres: ["时尚", "人像"],
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    quote: "我对完美的女性没有兴趣。",
    bio: [
      "赫尔穆特·牛顿是最具争议性的时尚摄影师之一，以大胆、挑衅的影像风格著称。",
      "他的作品探索权力、性别和欲望，在时尚摄影中注入电影感的叙事。",
      "他为《Vogue》《Elle》等杂志工作，影响了整个时尚摄影行业。"
    ],
    philosophy: [
      "挑衅美学：挑战社会规范",
      "电影叙事：每张照片都是一个故事",
      "强势女性：展现女性的力量"
    ],
    quotes: ["有些人的照片是艺术，我的是照片。"],
    influencedBy: [],
    influenced: [],
    works: [{
      id: "hn-001",
      title: { zh: "她们来了", en: "They're Coming" },
      year: 1981,
      location: { zh: "法国巴黎", en: "Paris, France" },
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800",
      camera: "Mamiya RZ67",
      technique: "戏剧性布光，叙事性构图",
      significance: "定义了他大胆的时尚美学。"
    }],
    gear: { cameras: ["Mamiya RZ67", "Hasselblad"], lenses: ["标准至中长焦"], films: ["黑白负片"], techniques: ["硬光", "戏剧性布光"] },
    practice: ["在时尚拍摄中加入叙事元素", "尝试更大胆的构图和光线"],
    resources: { books: ["SUMO", "Helmut Newton: Work"], films: ["Helmut by June"] }
  },
  {
    id: "cindy-sherman",
    name: { zh: "辛迪·舍曼", en: "Cindy Sherman" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1954,
    death: null,
    era: "1980-2000",
    genres: ["纯艺术", "人像"],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    quote: "我试图让人们认识到某些陈词滥调。",
    bio: [
      "辛迪·舍曼是当代最重要的概念艺术摄影师之一。",
      "她以自己为模特，通过化妆和服装扮演各种角色，解构媒体中的女性形象。",
      "她的《无题电影剧照》系列是后现代摄影的里程碑。"
    ],
    philosophy: [
      "身份探索：通过扮演解构自我",
      "媒体批判：揭示影像中的刻板印象",
      "艺术家即作品：自己就是最好的模特"
    ],
    quotes: ["我不是在拍自画像，而是在扮演角色。"],
    influencedBy: [],
    influenced: [],
    works: [{
      id: "cs-001",
      title: { zh: "无题电影剧照#21", en: "Untitled Film Still #21" },
      year: 1978,
      location: { zh: "美国纽约", en: "New York, USA" },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
      camera: "中画幅相机",
      technique: "自拍、角色扮演、电影感布光",
      significance: "重新定义了肖像和自画像的概念。"
    }],
    gear: { cameras: ["中画幅相机", "数码相机"], lenses: ["标准镜头"], films: ["彩色负片"], techniques: ["自拍", "化妆造型", "布景"] },
    practice: ["尝试通过服装和化妆创造不同角色", "研究电影和广告中的女性形象"],
    resources: { books: ["Cindy Sherman: The Complete Untitled Film Stills"], films: [] }
  },
  {
    id: "andreas-gursky",
    name: { zh: "安德烈亚斯·古尔斯基", en: "Andreas Gursky" },
    nationality: "德国",
    flag: "🇩🇪",
    birth: 1955,
    death: null,
    era: "2000至今",
    genres: ["纯艺术", "建筑"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    quote: "我不喜欢美丽的照片，我喜欢有趣的照片。",
    bio: [
      "古尔斯基是当代最成功的艺术摄影师之一，他的作品以大尺寸和高价格著称。",
      "他的《莱茵河II》曾是世界上最昂贵的照片。",
      "他用客观、全景式的视角记录全球化时代的人类景观。"
    ],
    philosophy: [
      "全景视角：展示人类活动的宏大场景",
      "数字处理：后期是创作的一部分",
      "去个体化：人群作为图案"
    ],
    quotes: ["我对单个人物不感兴趣。"],
    influencedBy: [],
    influenced: [],
    works: [{
      id: "ag-001",
      title: { zh: "莱茵河II", en: "Rhein II" },
      year: 1999,
      location: { zh: "德国", en: "Germany" },
      image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800",
      camera: "大画幅数码",
      technique: "后期去除多余元素，极简构图",
      significance: "曾是世界上最昂贵的照片。"
    }],
    gear: { cameras: ["大画幅相机", "高像素数码相机"], lenses: ["多焦段"], films: ["数码"], techniques: ["后期合成", "大尺寸输出"] },
    practice: ["寻找能展示人类活动规模的高点", "尝试将人群作为图案拍摄"],
    resources: { books: ["Andreas Gursky"], films: [] }
  },
  {
    id: "gregory-crewdson",
    name: { zh: "格雷戈里·克鲁森", en: "Gregory Crewdson" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1962,
    death: null,
    era: "2000至今",
    genres: ["纯艺术", "电影感"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    quote: "我的照片是冻结的电影。",
    bio: [
      "克鲁森是当代最具电影感的摄影师，他的作品像是电影中抽出的一帧。",
      "他以好莱坞式的制作方式拍摄静态照片，每张作品都是一个微型电影制作。",
      "他的作品探索美国郊区生活表面下的不安与超现实。"
    ],
    philosophy: [
      "电影制作：以电影的方式拍摄静态照片",
      "心理景观：外部场景反映内心世界",
      "不安的美：在熟悉的环境中创造陌生感"
    ],
    quotes: ["我对完美时刻不感兴趣，我对神秘时刻感兴趣。"],
    influencedBy: [],
    influenced: [],
    works: [{
      id: "gc-001",
      title: { zh: "无题（暮光之下）", en: "Untitled (Beneath the Roses)" },
      year: 2005,
      location: { zh: "美国", en: "USA" },
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800",
      camera: "8x10大画幅",
      technique: "电影级布光，搭建场景",
      significance: "定义了'电影摄影'的视觉语言。"
    }],
    gear: { cameras: ["8x10大画幅"], lenses: ["多焦段"], films: ["彩色负片"], techniques: ["电影级灯光", "场景搭建"] },
    practice: ["研究电影的布光技术", "在普通场景中寻找超现实元素"],
    resources: { books: ["Beneath the Roses", "Twilight"], films: ["Gregory Crewdson: Brief Encounters"] }
  },
  {
    id: "alex-webb",
    name: { zh: "亚历克斯·韦伯", en: "Alex Webb" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1952,
    death: null,
    era: "1980-2000",
    genres: ["街头", "纪实"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    quote: "摄影的本质是模糊的——它是关于发现问题，而非解决问题。",
    bio: [
      "亚历克斯·韦伯是玛格南图片社成员，以复杂的彩色街头摄影著称。",
      "他的作品以多层次构图和饱和色彩闻名，主要关注美墨边境和加勒比地区。",
      "他将彩色摄影提升到艺术的高度。"
    ],
    philosophy: [
      "复杂构图：多层次视觉元素",
      "色彩语言：色彩是叙事的一部分",
      "边缘地带：关注文化交汇处"
    ],
    quotes: ["我寻找的是让我困惑的照片。"],
    influencedBy: ["henri-cartier-bresson"],
    influenced: [],
    works: [{
      id: "aw-001",
      title: { zh: "伊斯坦布尔", en: "Istanbul" },
      year: 2001,
      location: { zh: "土耳其伊斯坦布尔", en: "Istanbul, Turkey" },
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
      camera: "Leica M6",
      technique: "多层构图，色彩对比",
      significance: "展示了他复杂的视觉语言。"
    }],
    gear: { cameras: ["Leica M6", "Leica M"], lenses: ["35mm", "28mm"], films: ["Kodachrome", "Fuji Velvia"], techniques: ["彩色反转片", "多层构图"] },
    practice: ["在强烈的阳光下寻找色彩", "练习在复杂场景中构图"],
    resources: { books: ["The Suffering of Light", "Istanbul"], films: [] }
  },
  {
    id: "lang-jingshan",
    name: { zh: "郎静山", en: "Lang Jingshan" },
    nationality: "中国",
    flag: "🇨🇳",
    birth: 1892,
    death: 1995,
    era: "1950年前",
    genres: ["纯艺术", "风光"],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    quote: "摄影是光与影的艺术，但更是心灵的表达。",
    bio: [
      "郎静山是中国摄影史上最重要的人物之一，被誉为'中国摄影之父'。",
      "他创立了'集锦摄影'技法，将中国传统绘画美学与摄影结合。",
      "他是第一位被世界摄影界广泛认可的中国摄影师，获得无数国际奖项。"
    ],
    philosophy: [
      "集锦摄影：融合多张底片创造意境",
      "画意摄影：将国画构图法则应用于摄影",
      "意境至上：追求超越写实的诗意"
    ],
    quotes: ["摄影虽为舶来品，但可以中国画之理出之。"],
    influencedBy: [],
    influenced: [],
    works: [{
      id: "ljs-001",
      title: { zh: "春树奇峰", en: "Spring Trees and Strange Peaks" },
      year: 1934,
      location: { zh: "中国", en: "China" },
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
      camera: "大画幅相机",
      technique: "集锦摄影，多底合成",
      significance: "展示了独特的中国摄影美学。"
    }],
    gear: { cameras: ["大画幅相机"], lenses: ["多焦段"], films: ["黑白负片"], techniques: ["集锦摄影", "暗房合成"] },
    practice: ["研究中国山水画的构图原则", "尝试在后期创造意境"],
    resources: { books: ["郎静山摄影全集"], films: [] }
  }
];

export default photographers;
