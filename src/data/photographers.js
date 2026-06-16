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
      },
      {
        id: "hcb-003",
        title: { zh: "男孩与酒瓶", en: "Rue Mouffetard, Paris" },
        year: 1954,
        location: { zh: "法国巴黎", en: "Paris, France" },
        image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800",
        camera: "Leica M3",
        technique: "街头抓拍，捕捉童真与自豪的瞬间表情",
        significance: "展示了布列松捕捉人物神态的非凡能力，成为街头摄影的经典之作。"
      },
      {
        id: "hcb-004",
        title: { zh: "西班牙塞维利亚", en: "Seville, Spain" },
        year: 1933,
        location: { zh: "西班牙塞维利亚", en: "Seville, Spain" },
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800",
        camera: "Leica III",
        technique: "利用墙上的破洞形成天然画框",
        significance: "框中框构图的经典示范，展示了如何利用环境元素创造视觉层次。"
      },
      {
        id: "hcb-005",
        title: { zh: "马丁内斯·阿隆索", en: "Martine's Legs" },
        year: 1967,
        location: { zh: "法国", en: "France" },
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800",
        camera: "Leica M4",
        technique: "极简构图，利用光影与身体线条",
        significance: "展示了布列松晚期作品中对形式美的追求。"
      },
      {
        id: "hcb-006",
        title: { zh: "北京紫禁城", en: "Forbidden City, Beijing" },
        year: 1948,
        location: { zh: "中国北京", en: "Beijing, China" },
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
        camera: "Leica III",
        technique: "大场景纪实，人群与建筑的对比",
        significance: "记录了中国历史转折时期的珍贵影像。"
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
  },
  {
    id: "josef-koudelka",
    name: { zh: "约瑟夫·寇德卡", en: "Josef Koudelka" },
    nationality: "捷克",
    flag: "🇨🇿",
    birth: 1938,
    death: null,
    era: "1980-2000",
    genres: ["纪实", "街头"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    quote: "我不寻找，我发现。",
    bio: [
      "约瑟夫·寇德卡是当代最重要的纪实摄影师之一，以记录吉普赛人和1968年布拉格之春而闻名。",
      "他出生于捷克斯洛伐克，1968年拍摄苏联入侵布拉格的照片震惊世界，随后流亡西方。",
      "他的全景摄影项目记录了欧洲的工业废墟和边境地带，展现了独特的史诗视野。"
    ],
    philosophy: [
      "极端宽幅：全景相机展现壮阔场景",
      "边缘人群：关注社会边缘的生存状态",
      "流浪精神：以流浪者视角观察世界",
      "黑白坚持：始终坚持黑白摄影的纯粹"
    ],
    quotes: ["我没有家，但我并不迷失。", "照片不会改变世界，但可以展示世界，尤其是世界在变化的时候。"],
    influencedBy: ["henri-cartier-bresson"],
    influenced: [],
    works: [
      { id: "jk-001", title: { zh: "布拉格之春", en: "Prague 1968" }, year: 1968, location: { zh: "捷克布拉格", en: "Prague, Czechoslovakia" }, image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800", camera: "Rolleiflex", technique: "街头抓拍，历史瞬间", significance: "记录苏联入侵布拉格的历史性时刻。" },
      { id: "jk-002", title: { zh: "吉普赛人", en: "Gypsies" }, year: 1975, location: { zh: "欧洲各地", en: "Europe" }, image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800", camera: "Leica M4", technique: "长期跟踪，深度纪实", significance: "对吉普赛文化的深刻记录。" },
      { id: "jk-003", title: { zh: "流亡者", en: "Exiles" }, year: 1988, location: { zh: "欧洲", en: "Europe" }, image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800", camera: "Leica M6", technique: "边缘视角，孤独感", significance: "表达流亡者的精神状态。" },
      { id: "jk-004", title: { zh: "混沌", en: "Chaos" }, year: 1999, location: { zh: "欧洲工业区", en: "Industrial Europe" }, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800", camera: "Fuji GX617", technique: "全景摄影，工业废墟", significance: "对工业文明衰落的反思。" },
      { id: "jk-005", title: { zh: "手表", en: "The Watch" }, year: 1968, location: { zh: "捷克布拉格", en: "Prague" }, image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800", camera: "Rolleiflex", technique: "象征性构图", significance: "成为布拉格之春的标志性影像。" },
      { id: "jk-006", title: { zh: "罗马尼亚吉普赛人", en: "Romanian Gypsies" }, year: 1968, location: { zh: "罗马尼亚", en: "Romania" }, image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800", camera: "Leica M3", technique: "环境肖像", significance: "展示吉普赛人的家庭生活。" },
      { id: "jk-007", title: { zh: "斯洛伐克节日", en: "Slovak Festival" }, year: 1966, location: { zh: "斯洛伐克", en: "Slovakia" }, image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800", camera: "Rolleiflex", technique: "节日纪实", significance: "记录东欧民间传统。" },
      { id: "jk-008", title: { zh: "西班牙边境", en: "Spanish Border" }, year: 1995, location: { zh: "西班牙", en: "Spain" }, image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800", camera: "Fuji GX617", technique: "全景风光", significance: "边境地带的荒凉美学。" },
      { id: "jk-009", title: { zh: "法国矿区", en: "French Mining Region" }, year: 1990, location: { zh: "法国", en: "France" }, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800", camera: "Fuji GX617", technique: "全景工业摄影", significance: "记录后工业时代的景观。" },
      { id: "jk-010", title: { zh: "葡萄牙海岸", en: "Portuguese Coast" }, year: 2000, location: { zh: "葡萄牙", en: "Portugal" }, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", camera: "Fuji GX617", technique: "极简海景", significance: "全景摄影的诗意表达。" }
    ],
    gear: { cameras: ["Leica M4", "Leica M6", "Fuji GX617全景相机", "Rolleiflex"], lenses: ["25mm", "35mm", "全景镜头"], films: ["Kodak Tri-X"], techniques: ["全景摄影", "黑白冲洗", "长期项目"] },
    practice: ["尝试全景构图思维", "花数月甚至数年跟踪一个主题", "关注社会边缘群体"],
    resources: { books: ["Gypsies", "Exiles", "Chaos", "Invasion 68: Prague"], films: ["Koudelka Shooting Holy Land"] }
  },
  {
    id: "william-klein",
    name: { zh: "威廉·克莱因", en: "William Klein" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1926,
    death: 2022,
    era: "1950-1980",
    genres: ["街头", "时尚"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    quote: "我想要展示摄影能做的一切。",
    bio: [
      "威廉·克莱因是美国摄影师和电影制作人，以激进的街头摄影风格闻名。",
      "他打破了传统摄影的规则，使用广角镜头、模糊、高对比度和粗颗粒创造独特视觉语言。",
      "他的纽约摄影集改变了人们对城市摄影的理解，同时他在时尚摄影领域也极具影响力。"
    ],
    philosophy: [
      "打破规则：模糊、失焦、粗颗粒都是表达工具",
      "街头侵略：近距离、直接、不回避冲突",
      "广角变形：用超广角创造戏剧性透视",
      "反精致：拒绝传统的'美丽'照片"
    ],
    quotes: ["我对完美不感兴趣。", "摄影就像拳击，你必须主动出击。"],
    influencedBy: [],
    influenced: ["daido-moriyama"],
    works: [
      { id: "wk-001", title: { zh: "纽约枪", en: "Gun, New York" }, year: 1955, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800", camera: "Leica M3", technique: "直接面对，戏剧性瞬间", significance: "街头摄影的标志性作品。" },
      { id: "wk-002", title: { zh: "百老汇与103街", en: "Broadway and 103rd Street" }, year: 1954, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800", camera: "Leica M3", technique: "广角街头", significance: "展示纽约街头的混乱能量。" },
      { id: "wk-003", title: { zh: "舞者", en: "Dancers" }, year: 1955, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800", camera: "Leica M3", technique: "动态模糊", significance: "捕捉运动的能量。" },
      { id: "wk-004", title: { zh: "时装模特", en: "Fashion Model" }, year: 1960, location: { zh: "法国巴黎", en: "Paris, France" }, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800", camera: "Hasselblad", technique: "动态时尚", significance: "革新了时尚摄影的表现方式。" },
      { id: "wk-005", title: { zh: "罗马", en: "Rome" }, year: 1956, location: { zh: "意大利罗马", en: "Rome, Italy" }, image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800", camera: "Leica M3", technique: "城市纪实", significance: "罗马城市摄影项目。" },
      { id: "wk-006", title: { zh: "东京", en: "Tokyo" }, year: 1961, location: { zh: "日本东京", en: "Tokyo, Japan" }, image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800", camera: "Leica M3", technique: "高对比度街头", significance: "对东京的独特视角。" },
      { id: "wk-007", title: { zh: "模糊的面孔", en: "Blurred Faces" }, year: 1955, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800", camera: "Leica M3", technique: "故意失焦", significance: "用模糊创造情绪。" },
      { id: "wk-008", title: { zh: "圣诞购物者", en: "Christmas Shoppers" }, year: 1954, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1482330454287-3f883d121e28?w=800", camera: "Leica M3", technique: "人群纪实", significance: "消费文化的视觉批评。" }
    ],
    gear: { cameras: ["Leica M3", "Hasselblad", "广角相机"], lenses: ["21mm", "28mm"], films: ["Kodak Tri-X"], techniques: ["推高感光度", "广角变形", "故意失焦"] },
    practice: ["使用21mm或28mm超广角拍摄", "靠近被摄者，不要害怕冲突", "尝试故意的'技术错误'"],
    resources: { books: ["New York", "Rome", "Moscow", "Tokyo"], films: ["Who Are You, Polly Maggoo?"] }
  },
  {
    id: "garry-winogrand",
    name: { zh: "盖瑞·温诺格兰德", en: "Garry Winogrand" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1928,
    death: 1984,
    era: "1950-1980",
    genres: ["街头"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    quote: "我拍照是为了看看事物被拍下来是什么样子。",
    bio: [
      "盖瑞·温诺格兰德是美国街头摄影的代表人物，以大量、快速的拍摄方式著称。",
      "他拍摄了超过100万张照片，去世时留下2500卷未冲洗的胶卷。",
      "他的作品记录了美国社会的方方面面，被认为是美国摄影的重要文献。"
    ],
    philosophy: [
      "大量拍摄：数量带来质量的可能",
      "倾斜地平线：打破传统构图规则",
      "不加判断：记录而非评论",
      "生活本身：摄影是对生活的好奇"
    ],
    quotes: ["我对'决定性瞬间'不感兴趣，我对生活感兴趣。", "摄影不是关于你拍摄的东西，而是关于如何看待它们。"],
    influencedBy: ["robert-frank"],
    influenced: [],
    works: [
      { id: "gw-001", title: { zh: "世界博览会", en: "World's Fair" }, year: 1964, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800", camera: "Leica M4", technique: "人群中的瞬间", significance: "捕捉美国乐观主义的顶峰。" },
      { id: "gw-002", title: { zh: "动物园", en: "Zoo" }, year: 1967, location: { zh: "美国", en: "USA" }, image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800", camera: "Leica M4", technique: "人与动物的互动", significance: "探索人与自然的关系。" },
      { id: "gw-003", title: { zh: "机场", en: "Airport" }, year: 1968, location: { zh: "美国洛杉矶", en: "Los Angeles, USA" }, image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800", camera: "Leica M4", technique: "公共空间纪实", significance: "记录美国机场文化。" },
      { id: "gw-004", title: { zh: "洛杉矶", en: "Los Angeles" }, year: 1969, location: { zh: "美国洛杉矶", en: "Los Angeles, USA" }, image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800", camera: "Leica M4", technique: "汽车文化", significance: "洛杉矶汽车文化的视觉记录。" },
      { id: "gw-005", title: { zh: "达拉斯", en: "Dallas" }, year: 1964, location: { zh: "美国达拉斯", en: "Dallas, USA" }, image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=800", camera: "Leica M4", technique: "街头随拍", significance: "美国南方城市的面貌。" },
      { id: "gw-006", title: { zh: "女人是美丽的", en: "Women Are Beautiful" }, year: 1975, location: { zh: "美国各地", en: "USA" }, image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800", camera: "Leica M4", technique: "街头女性肖像", significance: "对女性美的直接赞颂。" },
      { id: "gw-007", title: { zh: "中央公园", en: "Central Park" }, year: 1971, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800", camera: "Leica M4", technique: "公园休闲场景", significance: "纽约人的日常生活。" },
      { id: "gw-008", title: { zh: "硬帽子集会", en: "Hard Hat Rally" }, year: 1970, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800", camera: "Leica M4", technique: "政治集会纪实", significance: "记录美国政治分裂。" }
    ],
    gear: { cameras: ["Leica M4", "Leica M2"], lenses: ["28mm f/2.8"], films: ["Kodak Tri-X"], techniques: ["区域对焦", "倾斜构图", "快速拍摄"] },
    practice: ["每天拍摄至少2卷胶片", "不要等待'完美'时刻", "尝试倾斜地平线构图"],
    resources: { books: ["The Animals", "Women Are Beautiful", "Public Relations"], films: [] }
  },
  {
    id: "lee-friedlander",
    name: { zh: "李·弗里德兰德", en: "Lee Friedlander" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1934,
    death: null,
    era: "1950-1980",
    genres: ["街头", "纪实"],
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    quote: "我只是在观察——我不控制任何东西。",
    bio: [
      "李·弗里德兰德是美国社会景观摄影的先驱，以复杂的视觉结构著称。",
      "他的作品常常包含反射、阴影和多层视觉元素，创造了独特的'社会景观'美学。",
      "他是新纪实摄影运动的代表人物之一，对当代摄影有深远影响。"
    ],
    philosophy: [
      "社会景观：将城市环境作为复杂系统记录",
      "自我在场：将自己的影子和倒影纳入画面",
      "复杂构图：层叠、反射、遮挡的视觉结构",
      "持续观察：对同一主题的长期关注"
    ],
    quotes: ["照片中最重要的元素可能是你没有注意到的。"],
    influencedBy: ["walker-evans"],
    influenced: [],
    works: [
      { id: "lf-001", title: { zh: "自拍", en: "Self Portrait" }, year: 1966, location: { zh: "美国", en: "USA" }, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", camera: "Leica M3", technique: "倒影自拍", significance: "将自己纳入社会景观。" },
      { id: "lf-002", title: { zh: "纽约市", en: "New York City" }, year: 1965, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800", camera: "Leica M3", technique: "橱窗反射", significance: "城市作为视觉迷宫。" },
      { id: "lf-003", title: { zh: "美国纪念碑", en: "American Monuments" }, year: 1976, location: { zh: "美国各地", en: "USA" }, image: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800", camera: "Hasselblad", technique: "公共雕塑与环境", significance: "对美国公共空间的反思。" },
      { id: "lf-004", title: { zh: "工厂谷", en: "Factory Valleys" }, year: 1982, location: { zh: "美国宾夕法尼亚", en: "Pennsylvania, USA" }, image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800", camera: "Hasselblad", technique: "工业景观", significance: "美国制造业的视觉记录。" },
      { id: "lf-005", title: { zh: "电视屏幕", en: "TV Screen" }, year: 1963, location: { zh: "美国", en: "USA" }, image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800", camera: "Leica M3", technique: "媒体与现实的叠加", significance: "探索电视时代的视觉文化。" },
      { id: "lf-006", title: { zh: "树", en: "Trees" }, year: 2000, location: { zh: "美国各地", en: "USA" }, image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800", camera: "Hasselblad", technique: "自然细节", significance: "对自然形态的长期研究。" },
      { id: "lf-007", title: { zh: "汽车与城市", en: "Cars and Cities" }, year: 1970, location: { zh: "美国", en: "USA" }, image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800", camera: "Leica M3", technique: "汽车作为构图元素", significance: "美国汽车文化的视觉研究。" },
      { id: "lf-008", title: { zh: "人群", en: "Crowd" }, year: 1971, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800", camera: "Leica M3", technique: "人群中的个体", significance: "城市生活的社会学观察。" }
    ],
    gear: { cameras: ["Leica M3", "Hasselblad Superwide", "大画幅相机"], lenses: ["35mm", "50mm"], films: ["Kodak Plus-X", "Tri-X"], techniques: ["区域对焦", "复杂构图"] },
    practice: ["在反射和阴影中寻找自己", "关注城市中的视觉层次", "长期拍摄同一主题"],
    resources: { books: ["The American Monument", "Self Portrait", "Sticks and Stones"], films: [] }
  },
  {
    id: "elliott-erwitt",
    name: { zh: "艾略特·厄威特", en: "Elliott Erwitt" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1928,
    death: 2023,
    era: "1950-1980",
    genres: ["街头", "人文"],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    quote: "寻找你能笑的照片。",
    bio: [
      "艾略特·厄威特是美国最具幽默感的摄影师之一，玛格南图片社成员。",
      "他以捕捉生活中的荒诞和温情时刻著称，同时也是出色的商业摄影师。",
      "他的狗系列照片尤其受欢迎，展现了他对日常生活中人性和动物性的敏锐观察。"
    ],
    philosophy: [
      "幽默感：在日常中发现滑稽和荒诞",
      "人性温暖：即使批评也带着温情",
      "狗的视角：通过动物观察人类",
      "简洁表达：一张照片讲一个笑话"
    ],
    quotes: ["摄影的要点是保持观看和保持感觉。", "好照片就像一个好笑话。"],
    influencedBy: ["henri-cartier-bresson"],
    influenced: [],
    works: [
      { id: "ee-001", title: { zh: "加州之吻", en: "California Kiss" }, year: 1955, location: { zh: "美国加州", en: "California, USA" }, image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800", camera: "Leica M3", technique: "后视镜浪漫", significance: "美国浪漫主义的标志性影像。" },
      { id: "ee-002", title: { zh: "斗牛犬", en: "Bulldog" }, year: 1962, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800", camera: "Leica M3", technique: "低角度狗视角", significance: "狗系列中最著名的作品。" },
      { id: "ee-003", title: { zh: "尼克松与赫鲁晓夫", en: "Nixon and Khrushchev" }, year: 1959, location: { zh: "苏联莫斯科", en: "Moscow, USSR" }, image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800", camera: "Leica M3", technique: "政治人物互动", significance: "著名的'厨房辩论'历史记录。" },
      { id: "ee-004", title: { zh: "玛丽莲·梦露", en: "Marilyn Monroe" }, year: 1956, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800", camera: "Rolleiflex", technique: "片场肖像", significance: "展现明星的私下一面。" },
      { id: "ee-005", title: { zh: "巴黎情侣", en: "Paris Couple" }, year: 1989, location: { zh: "法国巴黎", en: "Paris, France" }, image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", camera: "Leica M6", technique: "街头抓拍", significance: "巴黎浪漫的视觉象征。" },
      { id: "ee-006", title: { zh: "跳舞的腿", en: "Dancing Legs" }, year: 1963, location: { zh: "美国", en: "USA" }, image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800", camera: "Leica M3", technique: "局部截取", significance: "用简单元素表达欢乐。" },
      { id: "ee-007", title: { zh: "奇瓦瓦与大丹", en: "Chihuahua and Great Dane" }, year: 1962, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800", camera: "Leica M3", technique: "视觉对比", significance: "用大小对比创造幽默。" },
      { id: "ee-008", title: { zh: "海滩上的狗", en: "Dog on Beach" }, year: 1968, location: { zh: "法国", en: "France" }, image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800", camera: "Leica M4", technique: "海滩剪影", significance: "诗意的动物摄影。" }
    ],
    gear: { cameras: ["Leica M3", "Leica M4", "Leica M6", "Rolleiflex"], lenses: ["35mm", "50mm"], films: ["Kodak Tri-X"], techniques: ["快速反应", "低角度", "幽默视角"] },
    practice: ["观察人与宠物的互动", "寻找生活中的荒诞时刻", "学会等待笑点出现"],
    resources: { books: ["Snaps", "Son of Bitch", "Dogs", "Personal Exposures"], films: [] }
  },
  {
    id: "bruce-davidson",
    name: { zh: "布鲁斯·戴维森", en: "Bruce Davidson" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1933,
    death: null,
    era: "1950-1980",
    genres: ["纪实", "街头"],
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop",
    quote: "我想靠近人们，理解他们的生活。",
    bio: [
      "布鲁斯·戴维森是美国纪实摄影的重要人物，玛格南图片社成员。",
      "他以深入社会边缘群体的长期项目著称，如纽约地铁和布鲁克林帮派。",
      "他的作品展现了对被边缘化群体的深刻同情和理解。"
    ],
    philosophy: [
      "深度介入：与拍摄对象建立长期关系",
      "社会关怀：关注被忽视的社区",
      "彩色转型：从黑白到彩色的大胆尝试",
      "尊严呈现：展现边缘人群的人性尊严"
    ],
    quotes: ["我必须与我拍摄的人建立关系。"],
    influencedBy: [],
    influenced: [],
    works: [
      { id: "bd-001", title: { zh: "纽约地铁", en: "Subway" }, year: 1980, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800", camera: "Leica M4", technique: "彩色纪实，人造光", significance: "彩色纪实摄影的里程碑。" },
      { id: "bd-002", title: { zh: "布鲁克林帮派", en: "Brooklyn Gang" }, year: 1959, location: { zh: "美国纽约布鲁克林", en: "Brooklyn, New York" }, image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800", camera: "Leica M3", technique: "青少年亚文化纪实", significance: "对边缘青年的深刻记录。" },
      { id: "bd-003", title: { zh: "东100街", en: "East 100th Street" }, year: 1970, location: { zh: "美国纽约哈莱姆", en: "Harlem, New York" }, image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800", camera: "大画幅相机", technique: "社区深度纪实", significance: "对贫困社区的人道主义记录。" },
      { id: "bd-004", title: { zh: "民权运动", en: "Civil Rights Movement" }, year: 1965, location: { zh: "美国南方", en: "American South" }, image: "https://images.unsplash.com/photo-1591848478625-de43268e6fb8?w=800", camera: "Leica M3", technique: "历史事件纪实", significance: "民权运动的重要视觉记录。" },
      { id: "bd-005", title: { zh: "威尔士矿工", en: "Welsh Miners" }, year: 1965, location: { zh: "英国威尔士", en: "Wales, UK" }, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800", camera: "Leica M3", technique: "工人阶级纪实", significance: "记录即将消失的矿工文化。" },
      { id: "bd-006", title: { zh: "中央公园", en: "Central Park" }, year: 1995, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800", camera: "Leica M6", technique: "彩色风景人文", significance: "城市绿洲的四季记录。" },
      { id: "bd-007", title: { zh: "马戏团", en: "Circus" }, year: 1958, location: { zh: "美国", en: "USA" }, image: "https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?w=800", camera: "Leica M3", technique: "后台纪实", significance: "马戏团生活的私密视角。" },
      { id: "bd-008", title: { zh: "自由乘车运动", en: "Freedom Riders" }, year: 1961, location: { zh: "美国南方", en: "American South" }, image: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=800", camera: "Leica M3", technique: "社会运动纪实", significance: "记录争取平等的勇气。" }
    ],
    gear: { cameras: ["Leica M3", "Leica M4", "Leica M6", "大画幅相机"], lenses: ["35mm", "50mm"], films: ["Kodak Tri-X", "Kodak Portra"], techniques: ["长期项目", "环境肖像", "自然光与闪光灯结合"] },
    practice: ["选择一个社区或群体深入拍摄", "与被摄者建立信任关系", "用相机作为理解他人的工具"],
    resources: { books: ["Subway", "Brooklyn Gang", "East 100th Street", "Central Park"], films: [] }
  },
  {
    id: "joel-meyerowitz",
    name: { zh: "乔尔·迈耶罗维茨", en: "Joel Meyerowitz" },
    nationality: "美国",
    flag: "🇺🇸",
    birth: 1938,
    death: null,
    era: "1980-2000",
    genres: ["街头", "风光"],
    avatar: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=200&h=200&fit=crop",
    quote: "色彩是我观看世界的方式。",
    bio: [
      "乔尔·迈耶罗维茨是彩色摄影的先驱之一，为彩色摄影作为艺术形式的确立做出重要贡献。",
      "他从黑白街头摄影转向彩色，并在鳕鱼角创作了大量彩色风光作品。",
      "911事件后，他是唯一被允许进入世贸中心废墟拍摄的摄影师。"
    ],
    philosophy: [
      "色彩觉醒：色彩本身就是内容",
      "光的变化：追逐黄金时刻的光线",
      "大画幅美学：精确与细节的追求",
      "双重实践：街头速写与沉思风光并行"
    ],
    quotes: ["彩色摄影让我看到了生活的丰富性。", "摄影是关于光的冥想。"],
    influencedBy: ["robert-frank"],
    influenced: [],
    works: [
      { id: "jm-001", title: { zh: "鳕鱼角", en: "Cape Cod" }, year: 1976, location: { zh: "美国马萨诸塞州", en: "Massachusetts, USA" }, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", camera: "Deardorff 8x10", technique: "黄金时刻，大画幅", significance: "彩色风光摄影的标杆。" },
      { id: "jm-002", title: { zh: "帝国大厦", en: "Empire State Building" }, year: 1978, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?w=800", camera: "Deardorff 8x10", technique: "建筑与光线", significance: "大画幅城市摄影的典范。" },
      { id: "jm-003", title: { zh: "世贸中心档案", en: "Aftermath" }, year: 2001, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800", camera: "Deardorff 8x10", technique: "灾难纪实", significance: "911废墟的官方视觉记录。" },
      { id: "jm-004", title: { zh: "普罗旺斯", en: "Provence" }, year: 1988, location: { zh: "法国普罗旺斯", en: "Provence, France" }, image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800", camera: "Deardorff 8x10", technique: "田园风光", significance: "法国乡村的光与色。" },
      { id: "jm-005", title: { zh: "纽约街头", en: "New York Street" }, year: 1963, location: { zh: "美国纽约", en: "New York, USA" }, image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800", camera: "Leica M3", technique: "彩色街头", significance: "早期彩色街头摄影。" },
      { id: "jm-006", title: { zh: "意大利海岸", en: "Italian Coast" }, year: 1990, location: { zh: "意大利", en: "Italy" }, image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800", camera: "Deardorff 8x10", technique: "地中海光线", significance: "欧洲风光的色彩研究。" },
      { id: "jm-007", title: { zh: "红色内饰", en: "Red Interior" }, year: 1977, location: { zh: "美国", en: "USA" }, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", camera: "Deardorff 8x10", technique: "室内彩色", significance: "室内空间的色彩表达。" },
      { id: "jm-008", title: { zh: "游泳池", en: "Pool" }, year: 1978, location: { zh: "美国", en: "USA" }, image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800", camera: "Deardorff 8x10", technique: "水与光的研究", significance: "色彩与光线的完美结合。" }
    ],
    gear: { cameras: ["Leica M3", "Deardorff 8x10大画幅"], lenses: ["35mm", "多焦段大画幅镜头"], films: ["Kodachrome", "Ektacolor"], techniques: ["大画幅", "黄金时刻", "彩色摄影"] },
    practice: ["在日出日落时拍摄，观察光线变化", "尝试大画幅相机的精确构图", "关注色彩之间的关系"],
    resources: { books: ["Cape Light", "Aftermath", "Taking My Time"], films: [] }
  },
  {
    id: "martin-parr",
    name: { zh: "马丁·帕尔", en: "Martin Parr" },
    nationality: "英国",
    flag: "🇬🇧",
    birth: 1952,
    death: null,
    era: "1980-2000",
    genres: ["纪实", "街头"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    quote: "我用摄影来探索我们如何生活。",
    bio: [
      "马丁·帕尔是英国最具影响力的当代摄影师之一，玛格南图片社成员。",
      "他以讽刺性的彩色摄影著称，用闪光灯和饱和色彩记录现代消费文化。",
      "他的作品既是对英国中产阶级生活的记录，也是对全球化和大众旅游的批评。"
    ],
    philosophy: [
      "彩色讽刺：用鲜艳色彩揭示庸俗",
      "闪光灯美学：直接闪光创造超现实感",
      "消费批评：记录物质文化的荒诞",
      "收集癖：摄影书和明信片的狂热收藏者"
    ],
    quotes: ["我拍摄我不理解的事物。", "摄影让你有借口好奇。"],
    influencedBy: ["tony-ray-jones"],
    influenced: [],
    works: [
      { id: "mp-001", title: { zh: "最后的度假村", en: "The Last Resort" }, year: 1986, location: { zh: "英国新布莱顿", en: "New Brighton, UK" }, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", camera: "Plaubel Makina", technique: "闪光灯彩色", significance: "英国工人阶级休闲的讽刺记录。" },
      { id: "mp-002", title: { zh: "小世界", en: "Small World" }, year: 1995, location: { zh: "世界各地", en: "Worldwide" }, image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800", camera: "Plaubel Makina", technique: "旅游文化纪实", significance: "对全球大众旅游的批评。" },
      { id: "mp-003", title: { zh: "常识", en: "Common Sense" }, year: 1999, location: { zh: "世界各地", en: "Worldwide" }, image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800", camera: "微距镜头", technique: "食物特写", significance: "用微距揭示食物的荒诞。" },
      { id: "mp-004", title: { zh: "无聊的情侣", en: "Bored Couples" }, year: 1993, location: { zh: "英国", en: "UK" }, image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800", camera: "Plaubel Makina", technique: "餐厅偷拍", significance: "对现代关系的幽默观察。" },
      { id: "mp-005", title: { zh: "英国海滩", en: "British Beach" }, year: 1985, location: { zh: "英国", en: "UK" }, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", camera: "Plaubel Makina", technique: "海滩文化", significance: "英国海滨度假的视觉研究。" },
      { id: "mp-006", title: { zh: "奢侈品", en: "Luxury" }, year: 2009, location: { zh: "世界各地", en: "Worldwide" }, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800", camera: "数码相机", technique: "高端消费纪实", significance: "对奢侈品文化的讽刺。" },
      { id: "mp-007", title: { zh: "自拍", en: "Autoportrait" }, year: 2000, location: { zh: "世界各地", en: "Worldwide" }, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", camera: "各种相机", technique: "与当地人合影", significance: "以幽默方式探索自拍文化。" },
      { id: "mp-008", title: { zh: "无聊明信片", en: "Boring Postcards" }, year: 1999, location: { zh: "世界各地", en: "Worldwide" }, image: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=800", camera: "收集品", technique: "明信片收藏", significance: "对庸俗美学的研究。" }
    ],
    gear: { cameras: ["Plaubel Makina 67", "Fuji GF670", "Leica Q"], lenses: ["80mm", "微距镜头"], films: ["Kodak Portra", "Fuji Velvia"], techniques: ["环形闪光灯", "高饱和度", "微距"] },
    practice: ["在旅游景点观察游客行为", "使用闪光灯创造超现实感", "关注消费文化的视觉符号"],
    resources: { books: ["The Last Resort", "Small World", "Common Sense", "Life's a Beach"], films: [] }
  },
  {
    id: "trent-parke",
    name: { zh: "特伦特·帕克", en: "Trent Parke" },
    nationality: "澳大利亚",
    flag: "🇦🇺",
    birth: 1971,
    death: null,
    era: "2000至今",
    genres: ["街头", "纯艺术"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    quote: "我追逐光。",
    bio: [
      "特伦特·帕克是澳大利亚最重要的当代摄影师，玛格南图片社首位澳大利亚成员。",
      "他以戏剧性的光影和超现实的街头摄影著称，将新闻摄影提升到艺术高度。",
      "他对澳大利亚内陆和城市生活的记录展现了独特的视觉诗意。"
    ],
    philosophy: [
      "追光者：光是最重要的主题",
      "戏剧性瞬间：等待完美的光线和时刻",
      "澳大利亚视角：用独特眼光看待祖国",
      "黑白与彩色：两种语言讲述不同故事"
    ],
    quotes: ["光是摄影的灵魂。", "我想捕捉那些让我窒息的时刻。"],
    influencedBy: ["daido-moriyama", "william-klein"],
    influenced: [],
    works: [
      { id: "tp-001", title: { zh: "梦/生活", en: "Dream/Life" }, year: 1999, location: { zh: "澳大利亚悉尼", en: "Sydney, Australia" }, image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800", camera: "Leica M6", technique: "强烈光影对比", significance: "澳大利亚街头的戏剧性诠释。" },
      { id: "tp-002", title: { zh: "黑玫瑰", en: "The Black Rose" }, year: 2015, location: { zh: "澳大利亚", en: "Australia" }, image: "https://images.unsplash.com/photo-1495467033336-2effd8753d51?w=800", camera: "数码相机", technique: "超现实叙事", significance: "对澳大利亚历史的个人诠释。" },
      { id: "tp-003", title: { zh: "分钟到午夜", en: "Minutes to Midnight" }, year: 2013, location: { zh: "澳大利亚内陆", en: "Australian Outback" }, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800", camera: "数码相机", technique: "彩色风光", significance: "对澳大利亚内陆的诗意记录。" },
      { id: "tp-004", title: { zh: "悉尼阳光", en: "Sydney Sunlight" }, year: 2001, location: { zh: "澳大利亚悉尼", en: "Sydney, Australia" }, image: "https://images.unsplash.com/photo-1524293581917-878a6d017c71?w=800", camera: "Leica M6", technique: "高对比度街头", significance: "城市光影的完美捕捉。" },
      { id: "tp-005", title: { zh: "圣诞岛", en: "Christmas Island" }, year: 2008, location: { zh: "澳大利亚圣诞岛", en: "Christmas Island" }, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800", camera: "Leica M8", technique: "岛屿纪实", significance: "偏远岛屿的生活记录。" },
      { id: "tp-006", title: { zh: "无题剪影", en: "Untitled Silhouette" }, year: 2003, location: { zh: "澳大利亚", en: "Australia" }, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800", camera: "Leica M6", technique: "剪影逆光", significance: "光影艺术的极致表达。" },
      { id: "tp-007", title: { zh: "城市幽灵", en: "City Ghost" }, year: 2000, location: { zh: "澳大利亚悉尼", en: "Sydney, Australia" }, image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800", camera: "Leica M6", technique: "动态模糊剪影", significance: "将城市人物转化为幽灵般的存在。" },
      { id: "tp-008", title: { zh: "澳大利亚内陆", en: "Outback Australia" }, year: 2007, location: { zh: "澳大利亚内陆", en: "Australian Outback" }, image: "https://images.unsplash.com/photo-1494233892892-84542a694e72?w=800", camera: "数码相机", technique: "广阔风光", significance: "对澳大利亚荒野的独特视角。" }
    ],
    gear: { cameras: ["Leica M6", "Leica M8", "Leica SL"], lenses: ["35mm", "50mm"], films: ["Kodak Tri-X"], techniques: ["等待光线", "高对比度", "剪影"] },
    practice: ["研究光线在一天中的变化", "在强烈阳光下寻找戏剧性瞬间", "用慢速快门创造动态效果"],
    resources: { books: ["Dream/Life", "Minutes to Midnight", "The Black Rose"], films: [] }
  }
];

export default photographers;
