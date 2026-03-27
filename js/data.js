// =========================================================
// DATA.js — All learning content for the Japanese study site
// =========================================================

const DATA = {};

// =========================================================
// HIRAGANA
// =========================================================
DATA.hiragana = {
  main: [
    // Vowels
    { row: '母音', chars: [
      { char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' },
      { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' }
    ]},
    // K row
    { row: 'か行', chars: [
      { char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' },
      { char: 'け', romaji: 'ke' }, { char: 'こ', romaji: 'ko' }
    ]},
    // S row
    { row: 'さ行', chars: [
      { char: 'さ', romaji: 'sa' }, { char: 'し', romaji: 'shi' }, { char: 'す', romaji: 'su' },
      { char: 'せ', romaji: 'se' }, { char: 'そ', romaji: 'so' }
    ]},
    // T row
    { row: 'た行', chars: [
      { char: 'た', romaji: 'ta' }, { char: 'ち', romaji: 'chi' }, { char: 'つ', romaji: 'tsu' },
      { char: 'て', romaji: 'te' }, { char: 'と', romaji: 'to' }
    ]},
    // N row
    { row: 'な行', chars: [
      { char: 'な', romaji: 'na' }, { char: 'に', romaji: 'ni' }, { char: 'ぬ', romaji: 'nu' },
      { char: 'ね', romaji: 'ne' }, { char: 'の', romaji: 'no' }
    ]},
    // H row
    { row: 'は行', chars: [
      { char: 'は', romaji: 'ha' }, { char: 'ひ', romaji: 'hi' }, { char: 'ふ', romaji: 'fu' },
      { char: 'へ', romaji: 'he' }, { char: 'ほ', romaji: 'ho' }
    ]},
    // M row
    { row: 'ま行', chars: [
      { char: 'ま', romaji: 'ma' }, { char: 'み', romaji: 'mi' }, { char: 'む', romaji: 'mu' },
      { char: 'め', romaji: 'me' }, { char: 'も', romaji: 'mo' }
    ]},
    // Y row
    { row: 'や行', chars: [
      { char: 'や', romaji: 'ya' }, { char: '', romaji: '' }, { char: 'ゆ', romaji: 'yu' },
      { char: '', romaji: '' }, { char: 'よ', romaji: 'yo' }
    ]},
    // R row
    { row: 'ら行', chars: [
      { char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' },
      { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' }
    ]},
    // W row + n
    { row: 'わ行・ん', chars: [
      { char: 'わ', romaji: 'wa' }, { char: '', romaji: '' }, { char: '', romaji: '' },
      { char: '', romaji: '' }, { char: 'を', romaji: 'wo' }
    ]},
    { row: 'ん', chars: [
      { char: 'ん', romaji: 'n' }
    ]}
  ],
  dakuten: [
    { row: 'が行', chars: [
      { char: 'が', romaji: 'ga' }, { char: 'ぎ', romaji: 'gi' }, { char: 'ぐ', romaji: 'gu' },
      { char: 'げ', romaji: 'ge' }, { char: 'ご', romaji: 'go' }
    ]},
    { row: 'ざ行', chars: [
      { char: 'ざ', romaji: 'za' }, { char: 'じ', romaji: 'ji' }, { char: 'ず', romaji: 'zu' },
      { char: 'ぜ', romaji: 'ze' }, { char: 'ぞ', romaji: 'zo' }
    ]},
    { row: 'だ行', chars: [
      { char: 'だ', romaji: 'da' }, { char: 'ぢ', romaji: 'ji' }, { char: 'づ', romaji: 'zu' },
      { char: 'で', romaji: 'de' }, { char: 'ど', romaji: 'do' }
    ]},
    { row: 'ば行', chars: [
      { char: 'ば', romaji: 'ba' }, { char: 'び', romaji: 'bi' }, { char: 'ぶ', romaji: 'bu' },
      { char: 'べ', romaji: 'be' }, { char: 'ぼ', romaji: 'bo' }
    ]},
    { row: 'ぱ行', chars: [
      { char: 'ぱ', romaji: 'pa' }, { char: 'ぴ', romaji: 'pi' }, { char: 'ぷ', romaji: 'pu' },
      { char: 'ぺ', romaji: 'pe' }, { char: 'ぽ', romaji: 'po' }
    ]}
  ],
  combo: [
    { row: 'きゃ行', chars: [{ char: 'きゃ', romaji: 'kya' }, { char: 'きゅ', romaji: 'kyu' }, { char: 'きょ', romaji: 'kyo' }] },
    { row: 'しゃ行', chars: [{ char: 'しゃ', romaji: 'sha' }, { char: 'しゅ', romaji: 'shu' }, { char: 'しょ', romaji: 'sho' }] },
    { row: 'ちゃ行', chars: [{ char: 'ちゃ', romaji: 'cha' }, { char: 'ちゅ', romaji: 'chu' }, { char: 'ちょ', romaji: 'cho' }] },
    { row: 'にゃ行', chars: [{ char: 'にゃ', romaji: 'nya' }, { char: 'にゅ', romaji: 'nyu' }, { char: 'にょ', romaji: 'nyo' }] },
    { row: 'ひゃ行', chars: [{ char: 'ひゃ', romaji: 'hya' }, { char: 'ひゅ', romaji: 'hyu' }, { char: 'ひょ', romaji: 'hyo' }] },
    { row: 'みゃ行', chars: [{ char: 'みゃ', romaji: 'mya' }, { char: 'みゅ', romaji: 'myu' }, { char: 'みょ', romaji: 'myo' }] },
    { row: 'りゃ行', chars: [{ char: 'りゃ', romaji: 'rya' }, { char: 'りゅ', romaji: 'ryu' }, { char: 'りょ', romaji: 'ryo' }] },
    { row: 'ぎゃ行', chars: [{ char: 'ぎゃ', romaji: 'gya' }, { char: 'ぎゅ', romaji: 'gyu' }, { char: 'ぎょ', romaji: 'gyo' }] },
    { row: 'じゃ行', chars: [{ char: 'じゃ', romaji: 'ja' }, { char: 'じゅ', romaji: 'ju' }, { char: 'じょ', romaji: 'jo' }] },
    { row: 'びゃ行', chars: [{ char: 'びゃ', romaji: 'bya' }, { char: 'びゅ', romaji: 'byu' }, { char: 'びょ', romaji: 'byo' }] },
    { row: 'ぴゃ行', chars: [{ char: 'ぴゃ', romaji: 'pya' }, { char: 'ぴゅ', romaji: 'pyu' }, { char: 'ぴょ', romaji: 'pyo' }] }
  ]
};

// =========================================================
// KATAKANA
// =========================================================
DATA.katakana = {
  main: [
    { row: '母音', chars: [
      { char: 'ア', romaji: 'a' }, { char: 'イ', romaji: 'i' }, { char: 'ウ', romaji: 'u' },
      { char: 'エ', romaji: 'e' }, { char: 'オ', romaji: 'o' }
    ]},
    { row: 'カ行', chars: [
      { char: 'カ', romaji: 'ka' }, { char: 'キ', romaji: 'ki' }, { char: 'ク', romaji: 'ku' },
      { char: 'ケ', romaji: 'ke' }, { char: 'コ', romaji: 'ko' }
    ]},
    { row: 'サ行', chars: [
      { char: 'サ', romaji: 'sa' }, { char: 'シ', romaji: 'shi' }, { char: 'ス', romaji: 'su' },
      { char: 'セ', romaji: 'se' }, { char: 'ソ', romaji: 'so' }
    ]},
    { row: 'タ行', chars: [
      { char: 'タ', romaji: 'ta' }, { char: 'チ', romaji: 'chi' }, { char: 'ツ', romaji: 'tsu' },
      { char: 'テ', romaji: 'te' }, { char: 'ト', romaji: 'to' }
    ]},
    { row: 'ナ行', chars: [
      { char: 'ナ', romaji: 'na' }, { char: 'ニ', romaji: 'ni' }, { char: 'ヌ', romaji: 'nu' },
      { char: 'ネ', romaji: 'ne' }, { char: 'ノ', romaji: 'no' }
    ]},
    { row: 'ハ行', chars: [
      { char: 'ハ', romaji: 'ha' }, { char: 'ヒ', romaji: 'hi' }, { char: 'フ', romaji: 'fu' },
      { char: 'ヘ', romaji: 'he' }, { char: 'ホ', romaji: 'ho' }
    ]},
    { row: 'マ行', chars: [
      { char: 'マ', romaji: 'ma' }, { char: 'ミ', romaji: 'mi' }, { char: 'ム', romaji: 'mu' },
      { char: 'メ', romaji: 'me' }, { char: 'モ', romaji: 'mo' }
    ]},
    { row: 'ヤ行', chars: [
      { char: 'ヤ', romaji: 'ya' }, { char: '', romaji: '' }, { char: 'ユ', romaji: 'yu' },
      { char: '', romaji: '' }, { char: 'ヨ', romaji: 'yo' }
    ]},
    { row: 'ラ行', chars: [
      { char: 'ラ', romaji: 'ra' }, { char: 'リ', romaji: 'ri' }, { char: 'ル', romaji: 'ru' },
      { char: 'レ', romaji: 're' }, { char: 'ロ', romaji: 'ro' }
    ]},
    { row: 'ワ行・ン', chars: [
      { char: 'ワ', romaji: 'wa' }, { char: '', romaji: '' }, { char: '', romaji: '' },
      { char: '', romaji: '' }, { char: 'ヲ', romaji: 'wo' }
    ]},
    { row: 'ン', chars: [{ char: 'ン', romaji: 'n' }] }
  ],
  dakuten: [
    { row: 'ガ行', chars: [
      { char: 'ガ', romaji: 'ga' }, { char: 'ギ', romaji: 'gi' }, { char: 'グ', romaji: 'gu' },
      { char: 'ゲ', romaji: 'ge' }, { char: 'ゴ', romaji: 'go' }
    ]},
    { row: 'ザ行', chars: [
      { char: 'ザ', romaji: 'za' }, { char: 'ジ', romaji: 'ji' }, { char: 'ズ', romaji: 'zu' },
      { char: 'ゼ', romaji: 'ze' }, { char: 'ゾ', romaji: 'zo' }
    ]},
    { row: 'ダ行', chars: [
      { char: 'ダ', romaji: 'da' }, { char: 'ヂ', romaji: 'ji' }, { char: 'ヅ', romaji: 'zu' },
      { char: 'デ', romaji: 'de' }, { char: 'ド', romaji: 'do' }
    ]},
    { row: 'バ行', chars: [
      { char: 'バ', romaji: 'ba' }, { char: 'ビ', romaji: 'bi' }, { char: 'ブ', romaji: 'bu' },
      { char: 'ベ', romaji: 'be' }, { char: 'ボ', romaji: 'bo' }
    ]},
    { row: 'パ行', chars: [
      { char: 'パ', romaji: 'pa' }, { char: 'ピ', romaji: 'pi' }, { char: 'プ', romaji: 'pu' },
      { char: 'ペ', romaji: 'pe' }, { char: 'ポ', romaji: 'po' }
    ]}
  ],
  combo: [
    { row: 'キャ行', chars: [{ char: 'キャ', romaji: 'kya' }, { char: 'キュ', romaji: 'kyu' }, { char: 'キョ', romaji: 'kyo' }] },
    { row: 'シャ行', chars: [{ char: 'シャ', romaji: 'sha' }, { char: 'シュ', romaji: 'shu' }, { char: 'ショ', romaji: 'sho' }] },
    { row: 'チャ行', chars: [{ char: 'チャ', romaji: 'cha' }, { char: 'チュ', romaji: 'chu' }, { char: 'チョ', romaji: 'cho' }] },
    { row: 'ニャ行', chars: [{ char: 'ニャ', romaji: 'nya' }, { char: 'ニュ', romaji: 'nyu' }, { char: 'ニョ', romaji: 'nyo' }] },
    { row: 'ヒャ行', chars: [{ char: 'ヒャ', romaji: 'hya' }, { char: 'ヒュ', romaji: 'hyu' }, { char: 'ヒョ', romaji: 'hyo' }] },
    { row: 'ミャ行', chars: [{ char: 'ミャ', romaji: 'mya' }, { char: 'ミュ', romaji: 'myu' }, { char: 'ミョ', romaji: 'myo' }] },
    { row: 'リャ行', chars: [{ char: 'リャ', romaji: 'rya' }, { char: 'リュ', romaji: 'ryu' }, { char: 'リョ', romaji: 'ryo' }] },
    { row: 'ギャ行', chars: [{ char: 'ギャ', romaji: 'gya' }, { char: 'ギュ', romaji: 'gyu' }, { char: 'ギョ', romaji: 'gyo' }] },
    { row: 'ジャ行', chars: [{ char: 'ジャ', romaji: 'ja' }, { char: 'ジュ', romaji: 'ju' }, { char: 'ジョ', romaji: 'jo' }] },
    { row: 'ビャ行', chars: [{ char: 'ビャ', romaji: 'bya' }, { char: 'ビュ', romaji: 'byu' }, { char: 'ビョ', romaji: 'byo' }] },
    { row: 'ピャ行', chars: [{ char: 'ピャ', romaji: 'pya' }, { char: 'ピュ', romaji: 'pyu' }, { char: 'ピョ', romaji: 'pyo' }] }
  ]
};

// =========================================================
// VOCABULARY (N5 → N1)
// =========================================================
DATA.vocabulary = {
  N5: [
    { word: '食べる', reading: 'たべる', meaning: '吃', romaji: 'taberu', type: '動詞' },
    { word: '飲む', reading: 'のむ', meaning: '喝', romaji: 'nomu', type: '動詞' },
    { word: '見る', reading: 'みる', meaning: '看', romaji: 'miru', type: '動詞' },
    { word: '聞く', reading: 'きく', meaning: '聽／問', romaji: 'kiku', type: '動詞' },
    { word: '話す', reading: 'はなす', meaning: '說話', romaji: 'hanasu', type: '動詞' },
    { word: '読む', reading: 'よむ', meaning: '閱讀', romaji: 'yomu', type: '動詞' },
    { word: '書く', reading: 'かく', meaning: '寫', romaji: 'kaku', type: '動詞' },
    { word: '行く', reading: 'いく', meaning: '去', romaji: 'iku', type: '動詞' },
    { word: '来る', reading: 'くる', meaning: '來', romaji: 'kuru', type: '動詞' },
    { word: 'する', reading: 'する', meaning: '做', romaji: 'suru', type: '動詞' },
    { word: 'ある', reading: 'ある', meaning: '有（無生命）', romaji: 'aru', type: '動詞' },
    { word: 'いる', reading: 'いる', meaning: '有（有生命）', romaji: 'iru', type: '動詞' },
    { word: '分かる', reading: 'わかる', meaning: '了解、知道', romaji: 'wakaru', type: '動詞' },
    { word: '買う', reading: 'かう', meaning: '買', romaji: 'kau', type: '動詞' },
    { word: '使う', reading: 'つかう', meaning: '使用', romaji: 'tsukau', type: '動詞' },
    { word: '大きい', reading: 'おおきい', meaning: '大', romaji: 'ookii', type: '形容詞' },
    { word: '小さい', reading: 'ちいさい', meaning: '小', romaji: 'chiisai', type: '形容詞' },
    { word: '新しい', reading: 'あたらしい', meaning: '新的', romaji: 'atarashii', type: '形容詞' },
    { word: '古い', reading: 'ふるい', meaning: '舊的', romaji: 'furui', type: '形容詞' },
    { word: '高い', reading: 'たかい', meaning: '貴／高', romaji: 'takai', type: '形容詞' },
    { word: '安い', reading: 'やすい', meaning: '便宜', romaji: 'yasui', type: '形容詞' },
    { word: 'いい', reading: 'いい', meaning: '好', romaji: 'ii', type: '形容詞' },
    { word: '悪い', reading: 'わるい', meaning: '壞', romaji: 'warui', type: '形容詞' },
    { word: '暑い', reading: 'あつい', meaning: '熱（天氣）', romaji: 'atsui', type: '形容詞' },
    { word: '寒い', reading: 'さむい', meaning: '冷（天氣）', romaji: 'samui', type: '形容詞' },
    { word: '水', reading: 'みず', meaning: '水', romaji: 'mizu', type: '名詞' },
    { word: 'ご飯', reading: 'ごはん', meaning: '飯／餐', romaji: 'gohan', type: '名詞' },
    { word: '魚', reading: 'さかな', meaning: '魚', romaji: 'sakana', type: '名詞' },
    { word: '肉', reading: 'にく', meaning: '肉', romaji: 'niku', type: '名詞' },
    { word: '野菜', reading: 'やさい', meaning: '蔬菜', romaji: 'yasai', type: '名詞' },
    { word: '果物', reading: 'くだもの', meaning: '水果', romaji: 'kudamono', type: '名詞' },
    { word: 'お茶', reading: 'おちゃ', meaning: '茶', romaji: 'ocha', type: '名詞' },
    { word: '学校', reading: 'がっこう', meaning: '學校', romaji: 'gakkou', type: '名詞' },
    { word: '会社', reading: 'かいしゃ', meaning: '公司', romaji: 'kaisha', type: '名詞' },
    { word: '家', reading: 'いえ', meaning: '家', romaji: 'ie', type: '名詞' },
    { word: '駅', reading: 'えき', meaning: '車站', romaji: 'eki', type: '名詞' },
    { word: '電車', reading: 'でんしゃ', meaning: '電車', romaji: 'densha', type: '名詞' },
    { word: '車', reading: 'くるま', meaning: '車', romaji: 'kuruma', type: '名詞' },
    { word: '本', reading: 'ほん', meaning: '書', romaji: 'hon', type: '名詞' },
    { word: '電話', reading: 'でんわ', meaning: '電話', romaji: 'denwa', type: '名詞' },
    { word: '今日', reading: 'きょう', meaning: '今天', romaji: 'kyou', type: '名詞' },
    { word: '明日', reading: 'あした', meaning: '明天', romaji: 'ashita', type: '名詞' },
    { word: '昨日', reading: 'きのう', meaning: '昨天', romaji: 'kinou', type: '名詞' },
    { word: '朝', reading: 'あさ', meaning: '早上', romaji: 'asa', type: '名詞' },
    { word: '昼', reading: 'ひる', meaning: '中午', romaji: 'hiru', type: '名詞' },
    { word: '夜', reading: 'よる', meaning: '晚上', romaji: 'yoru', type: '名詞' },
    { word: '時間', reading: 'じかん', meaning: '時間', romaji: 'jikan', type: '名詞' },
    { word: '今', reading: 'いま', meaning: '現在', romaji: 'ima', type: '副詞' },
    { word: '私', reading: 'わたし', meaning: '我', romaji: 'watashi', type: '代名詞' },
    { word: 'あなた', reading: 'あなた', meaning: '你', romaji: 'anata', type: '代名詞' },
    { word: '友達', reading: 'ともだち', meaning: '朋友', romaji: 'tomodachi', type: '名詞' },
    { word: '先生', reading: 'せんせい', meaning: '老師', romaji: 'sensei', type: '名詞' },
    { word: '学生', reading: 'がくせい', meaning: '學生', romaji: 'gakusei', type: '名詞' },
    { word: '日本語', reading: 'にほんご', meaning: '日語', romaji: 'nihongo', type: '名詞' },
    { word: '英語', reading: 'えいご', meaning: '英語', romaji: 'eigo', type: '名詞' },
    { word: '何', reading: 'なに', meaning: '什麼', romaji: 'nani', type: '代名詞' },
    { word: 'どこ', reading: 'どこ', meaning: '哪裡', romaji: 'doko', type: '代名詞' },
    { word: 'いつ', reading: 'いつ', meaning: '什麼時候', romaji: 'itsu', type: '副詞' },
    { word: 'どうして', reading: 'どうして', meaning: '為什麼', romaji: 'doushite', type: '副詞' },
    { word: 'とても', reading: 'とても', meaning: '非常', romaji: 'totemo', type: '副詞' },
    { word: 'もう', reading: 'もう', meaning: '已經', romaji: 'mou', type: '副詞' }
  ],
  N4: [
    { word: '最近', reading: 'さいきん', meaning: '最近', romaji: 'saikin', type: '名詞' },
    { word: '気持ち', reading: 'きもち', meaning: '心情、感覺', romaji: 'kimochi', type: '名詞' },
    { word: '心', reading: 'こころ', meaning: '心', romaji: 'kokoro', type: '名詞' },
    { word: '体', reading: 'からだ', meaning: '身體', romaji: 'karada', type: '名詞' },
    { word: '声', reading: 'こえ', meaning: '聲音', romaji: 'koe', type: '名詞' },
    { word: '言葉', reading: 'ことば', meaning: '詞彙、語言', romaji: 'kotoba', type: '名詞' },
    { word: '意味', reading: 'いみ', meaning: '意思', romaji: 'imi', type: '名詞' },
    { word: '問題', reading: 'もんだい', meaning: '問題', romaji: 'mondai', type: '名詞' },
    { word: '答え', reading: 'こたえ', meaning: '答案', romaji: 'kotae', type: '名詞' },
    { word: '試験', reading: 'しけん', meaning: '考試', romaji: 'shiken', type: '名詞' },
    { word: '練習', reading: 'れんしゅう', meaning: '練習', romaji: 'renshuu', type: '名詞' },
    { word: '説明', reading: 'せつめい', meaning: '說明', romaji: 'setsumei', type: '名詞' },
    { word: '予定', reading: 'よてい', meaning: '預定、計劃', romaji: 'yotei', type: '名詞' },
    { word: '準備', reading: 'じゅんび', meaning: '準備', romaji: 'junbi', type: '名詞' },
    { word: '理由', reading: 'りゆう', meaning: '理由', romaji: 'riyuu', type: '名詞' },
    { word: '経験', reading: 'けいけん', meaning: '經驗', romaji: 'keiken', type: '名詞' },
    { word: '生活', reading: 'せいかつ', meaning: '生活', romaji: 'seikatsu', type: '名詞' },
    { word: '社会', reading: 'しゃかい', meaning: '社會', romaji: 'shakai', type: '名詞' },
    { word: '違う', reading: 'ちがう', meaning: '不同', romaji: 'chigau', type: '動詞' },
    { word: '続ける', reading: 'つづける', meaning: '繼續', romaji: 'tsuzukeru', type: '動詞' },
    { word: '始める', reading: 'はじめる', meaning: '開始', romaji: 'hajimeru', type: '動詞' },
    { word: '終わる', reading: 'おわる', meaning: '結束', romaji: 'owaru', type: '動詞' },
    { word: '決める', reading: 'きめる', meaning: '決定', romaji: 'kimeru', type: '動詞' },
    { word: '覚える', reading: 'おぼえる', meaning: '記住', romaji: 'oboeru', type: '動詞' },
    { word: '忘れる', reading: 'わすれる', meaning: '忘記', romaji: 'wasureru', type: '動詞' },
    { word: '教える', reading: 'おしえる', meaning: '教', romaji: 'oshieru', type: '動詞' },
    { word: '習う', reading: 'ならう', meaning: '學習', romaji: 'narau', type: '動詞' },
    { word: '伝える', reading: 'つたえる', meaning: '傳達', romaji: 'tsutaeru', type: '動詞' },
    { word: '集まる', reading: 'あつまる', meaning: '集合', romaji: 'atsumaru', type: '動詞' },
    { word: '特に', reading: 'とくに', meaning: '特別是', romaji: 'toku ni', type: '副詞' },
    { word: '普通', reading: 'ふつう', meaning: '普通', romaji: 'futsuu', type: '名詞' },
    { word: 'もちろん', reading: 'もちろん', meaning: '當然', romaji: 'mochiron', type: '副詞' },
    { word: 'なぜ', reading: 'なぜ', meaning: '為什麼', romaji: 'naze', type: '副詞' },
    { word: 'だから', reading: 'だから', meaning: '所以', romaji: 'dakara', type: '接続詞' },
    { word: 'でも', reading: 'でも', meaning: '但是', romaji: 'demo', type: '接続詞' },
    { word: 'それに', reading: 'それに', meaning: '而且', romaji: 'soreni', type: '接続詞' },
    { word: '便利', reading: 'べんり', meaning: '方便', romaji: 'benri', type: '形容動詞' },
    { word: '丁寧', reading: 'ていねい', meaning: '禮貌、仔細', romaji: 'teinei', type: '形容動詞' },
    { word: '大切', reading: 'たいせつ', meaning: '重要、珍貴', romaji: 'taisetsu', type: '形容動詞' },
    { word: '必要', reading: 'ひつよう', meaning: '必要', romaji: 'hitsuyou', type: '形容動詞' }
  ],
  N3: [
    { word: '複雑', reading: 'ふくざつ', meaning: '複雜', romaji: 'fukuzatsu', type: '形容動詞' },
    { word: '積極的', reading: 'せっきょくてき', meaning: '積極的', romaji: 'sekkyokuteki', type: '形容動詞' },
    { word: '具体的', reading: 'ぐたいてき', meaning: '具體的', romaji: 'gutaiteki', type: '形容動詞' },
    { word: '急ぐ', reading: 'いそぐ', meaning: '趕快、趕時間', romaji: 'isogu', type: '動詞' },
    { word: '驚く', reading: 'おどろく', meaning: '驚訝', romaji: 'odoroku', type: '動詞' },
    { word: '困る', reading: 'こまる', meaning: '困擾', romaji: 'komaru', type: '動詞' },
    { word: '喜ぶ', reading: 'よろこぶ', meaning: '高興', romaji: 'yorokobu', type: '動詞' },
    { word: '怒る', reading: 'おこる', meaning: '生氣', romaji: 'okoru', type: '動詞' },
    { word: '想像', reading: 'そうぞう', meaning: '想像', romaji: 'souzou', type: '名詞' },
    { word: '現実', reading: 'げんじつ', meaning: '現實', romaji: 'genjitsu', type: '名詞' },
    { word: '可能性', reading: 'かのうせい', meaning: '可能性', romaji: 'kanousei', type: '名詞' },
    { word: '責任', reading: 'せきにん', meaning: '責任', romaji: 'sekinin', type: '名詞' },
    { word: '自由', reading: 'じゆう', meaning: '自由', romaji: 'jiyuu', type: '名詞' },
    { word: '平和', reading: 'へいわ', meaning: '和平', romaji: 'heiwa', type: '名詞' },
    { word: '努力', reading: 'どりょく', meaning: '努力', romaji: 'doryoku', type: '名詞' },
    { word: '成功', reading: 'せいこう', meaning: '成功', romaji: 'seikou', type: '名詞' },
    { word: '失敗', reading: 'しっぱい', meaning: '失敗', romaji: 'shippai', type: '名詞' },
    { word: '危険', reading: 'きけん', meaning: '危險', romaji: 'kiken', type: '名詞' },
    { word: '影響', reading: 'えいきょう', meaning: '影響', romaji: 'eikyou', type: '名詞' },
    { word: '関係', reading: 'かんけい', meaning: '關係', romaji: 'kankei', type: '名詞' },
    { word: '解決', reading: 'かいけつ', meaning: '解決', romaji: 'kaiketsu', type: '名詞' },
    { word: '計画', reading: 'けいかく', meaning: '計劃', romaji: 'keikaku', type: '名詞' },
    { word: '目標', reading: 'もくひょう', meaning: '目標', romaji: 'mokuhyou', type: '名詞' },
    { word: '理解', reading: 'りかい', meaning: '理解', romaji: 'rikai', type: '名詞' },
    { word: '表現', reading: 'ひょうげん', meaning: '表達', romaji: 'hyougen', type: '名詞' },
    { word: '文化', reading: 'ぶんか', meaning: '文化', romaji: 'bunka', type: '名詞' },
    { word: '伝統', reading: 'でんとう', meaning: '傳統', romaji: 'dentou', type: '名詞' },
    { word: '場合', reading: 'ばあい', meaning: '情況、場合', romaji: 'baai', type: '名詞' },
    { word: '原因', reading: 'げんいん', meaning: '原因', romaji: 'genin', type: '名詞' },
    { word: '結果', reading: 'けっか', meaning: '結果', romaji: 'kekka', type: '名詞' }
  ],
  N2: [
    { word: '概念', reading: 'がいねん', meaning: '概念', romaji: 'gainen', type: '名詞' },
    { word: '抽象的', reading: 'ちゅうしょうてき', meaning: '抽象的', romaji: 'chuushouteki', type: '形容動詞' },
    { word: '矛盾', reading: 'むじゅん', meaning: '矛盾', romaji: 'mujun', type: '名詞' },
    { word: '批判', reading: 'ひはん', meaning: '批判', romaji: 'hihan', type: '名詞' },
    { word: '評価', reading: 'ひょうか', meaning: '評價', romaji: 'hyouka', type: '名詞' },
    { word: '認識', reading: 'にんしき', meaning: '認識、意識', romaji: 'ninshiki', type: '名詞' },
    { word: '判断', reading: 'はんだん', meaning: '判斷', romaji: 'handan', type: '名詞' },
    { word: '分析', reading: 'ぶんせき', meaning: '分析', romaji: 'bunseki', type: '名詞' },
    { word: '推測', reading: 'すいそく', meaning: '推測', romaji: 'suisoku', type: '名詞' },
    { word: '実施', reading: 'じっし', meaning: '實施', romaji: 'jisshi', type: '名詞' },
    { word: '導入', reading: 'どうにゅう', meaning: '導入、採用', romaji: 'dounyuu', type: '名詞' },
    { word: '維持', reading: 'いじ', meaning: '維持', romaji: 'iji', type: '名詞' },
    { word: '消費', reading: 'しょうひ', meaning: '消費', romaji: 'shouhi', type: '名詞' },
    { word: '競争', reading: 'きょうそう', meaning: '競爭', romaji: 'kyousou', type: '名詞' },
    { word: '協力', reading: 'きょうりょく', meaning: '合作', romaji: 'kyouryoku', type: '名詞' },
    { word: '展開', reading: 'てんかい', meaning: '展開、發展', romaji: 'tenkai', type: '名詞' },
    { word: '促進', reading: 'そくしん', meaning: '促進', romaji: 'sokushin', type: '名詞' },
    { word: '負担', reading: 'ふたん', meaning: '負擔', romaji: 'futan', type: '名詞' },
    { word: '緊張', reading: 'きんちょう', meaning: '緊張', romaji: 'kinchou', type: '名詞' },
    { word: '前提', reading: 'ぜんてい', meaning: '前提', romaji: 'zentei', type: '名詞' }
  ],
  N1: [
    { word: '貢献', reading: 'こうけん', meaning: '貢獻', romaji: 'kouken', type: '名詞' },
    { word: '懸念', reading: 'けねん', meaning: '顧慮、擔心', romaji: 'kenen', type: '名詞' },
    { word: '払拭', reading: 'ふっしょく', meaning: '消除、拭去', romaji: 'fusshoku', type: '名詞' },
    { word: '顕著', reading: 'けんちょ', meaning: '顯著', romaji: 'kenchou', type: '形容動詞' },
    { word: '喫緊', reading: 'きっきん', meaning: '緊迫、迫切', romaji: 'kikkin', type: '形容動詞' },
    { word: '俯瞰', reading: 'ふかん', meaning: '俯瞰、從高處看', romaji: 'fukan', type: '名詞' },
    { word: '乖離', reading: 'かいり', meaning: '乖離、偏差', romaji: 'kairi', type: '名詞' },
    { word: '示唆', reading: 'しさ', meaning: '暗示', romaji: 'shisa', type: '名詞' },
    { word: '汎用', reading: 'はんよう', meaning: '通用、多功能', romaji: 'hanyou', type: '形容動詞' },
    { word: '恣意的', reading: 'しいてき', meaning: '隨意的、任意的', romaji: 'shiiteki', type: '形容動詞' },
    { word: '蓋然性', reading: 'がいぜんせい', meaning: '蓋然性、可能性', romaji: 'gaizensee', type: '名詞' },
    { word: '醸成', reading: 'じょうせい', meaning: '培育、釀造', romaji: 'jousei', type: '名詞' },
    { word: '逡巡', reading: 'しゅんじゅん', meaning: '猶豫、徘徊', romaji: 'shunjun', type: '名詞' },
    { word: '齟齬', reading: 'そご', meaning: '不合、出入', romaji: 'sogo', type: '名詞' },
    { word: '斬新', reading: 'ざんしん', meaning: '嶄新、新穎', romaji: 'zanshin', type: '形容動詞' },
    { word: '忖度', reading: 'そんたく', meaning: '揣摩、察言觀色', romaji: 'sontaku', type: '名詞' },
    { word: '精緻', reading: 'せいち', meaning: '精緻', romaji: 'seichi', type: '形容動詞' },
    { word: '暫定', reading: 'ざんてい', meaning: '暫定', romaji: 'zantei', type: '名詞' },
    { word: '冗長', reading: 'じょうちょう', meaning: '冗長', romaji: 'jouchou', type: '形容動詞' },
    { word: '錯綜', reading: 'さくそう', meaning: '錯綜複雜', romaji: 'sakusou', type: '名詞' }
  ]
};

// =========================================================
// GRAMMAR (N5 → N1)
// =========================================================
DATA.grammar = {
  N5: [
    {
      pattern: '〜は〜です',
      meaning: '...是...',
      formation: 'Noun は Noun/Adj + です',
      explanation: '表示主題和述語的關係，用於說明某事物「是什麼」。は是主題助詞，です是禮貌語尾。',
      examples: [
        { jp: 'わたしは学生です。', romaji: 'Watashi wa gakusei desu.', zh: '我是學生。' },
        { jp: 'これは本です。', romaji: 'Kore wa hon desu.', zh: '這是書。' }
      ]
    },
    {
      pattern: '〜は〜ではありません',
      meaning: '...不是...',
      formation: 'Noun は Noun/Adj + ではありません',
      explanation: 'です的否定形式，表示「不是」。口語中也常用じゃありません或じゃないです。',
      examples: [
        { jp: 'わたしは先生ではありません。', romaji: 'Watashi wa sensei dewa arimasen.', zh: '我不是老師。' },
        { jp: 'これはペンじゃないです。', romaji: 'Kore wa pen ja nai desu.', zh: '這不是筆。' }
      ]
    },
    {
      pattern: 'Noun が好きです',
      meaning: '喜歡〜',
      formation: 'Noun が 好き/嫌い/得意/苦手 です',
      explanation: '表示喜好。表達「喜歡」用好き，「討厭」用嫌い，「擅長」用得意，「不擅長」用苦手。',
      examples: [
        { jp: '音楽が好きです。', romaji: 'Ongaku ga suki desu.', zh: '我喜歡音樂。' },
        { jp: 'スポーツが得意です。', romaji: 'Supootsu ga tokui desu.', zh: '我擅長運動。' }
      ]
    },
    {
      pattern: '〜があります／います',
      meaning: '有〜、存在〜',
      formation: 'Noun が あります（無生命） / います（有生命）',
      explanation: '表示事物的存在。無生命事物（物品、建築物等）用あります，有生命事物（人、動物）用います。',
      examples: [
        { jp: 'テーブルの上に本があります。', romaji: 'Teeburu no ue ni hon ga arimasu.', zh: '桌上有書。' },
        { jp: '公園に子供がいます。', romaji: 'Kouen ni kodomo ga imasu.', zh: '公園裡有小孩。' }
      ]
    },
    {
      pattern: '〜を〜します',
      meaning: '做〜（動作）',
      formation: 'Object を Verb',
      explanation: 'を是目的語助詞，表示動作的對象。',
      examples: [
        { jp: 'ご飯を食べます。', romaji: 'Gohan o tabemasu.', zh: '我吃飯。' },
        { jp: '日本語を勉強します。', romaji: 'Nihongo o benkyou shimasu.', zh: '我學日語。' }
      ]
    },
    {
      pattern: '〜に行きます／来ます',
      meaning: '去〜、來〜',
      formation: 'Place に 行く / 来る / 帰る',
      explanation: 'に表示移動的目的地，後面接移動動詞。',
      examples: [
        { jp: '学校に行きます。', romaji: 'Gakkou ni ikimasu.', zh: '去學校。' },
        { jp: '日本に来ました。', romaji: 'Nihon ni kimashita.', zh: '來了日本。' }
      ]
    },
    {
      pattern: '〜で〜します',
      meaning: '在〜做〜 / 用〜做〜',
      formation: 'Place で Verb / Means で Verb',
      explanation: 'で表示動作進行的場所，或進行動作的手段、方法。',
      examples: [
        { jp: '図書館で本を読みます。', romaji: 'Toshokan de hon o yomimasu.', zh: '在圖書館看書。' },
        { jp: '箸でご飯を食べます。', romaji: 'Hashi de gohan o tabemasu.', zh: '用筷子吃飯。' }
      ]
    },
    {
      pattern: '〜の〜',
      meaning: '〜的〜（所有／修飾）',
      formation: 'Noun の Noun',
      explanation: 'の表示所有關係或修飾關係，類似中文的「的」。',
      examples: [
        { jp: '田中さんの本です。', romaji: 'Tanaka-san no hon desu.', zh: '是田中先生的書。' },
        { jp: '日本語の先生', romaji: 'Nihongo no sensei', zh: '日語老師' }
      ]
    },
    {
      pattern: '〜も',
      meaning: '也〜',
      formation: 'Noun も ＋ 述語',
      explanation: '表示追加，「也」的意思。可以取代が或を使用。',
      examples: [
        { jp: '私も学生です。', romaji: 'Watashi mo gakusei desu.', zh: '我也是學生。' },
        { jp: 'コーヒーも好きです。', romaji: 'Koohii mo suki desu.', zh: '我也喜歡咖啡。' }
      ]
    },
    {
      pattern: '〜から〜まで',
      meaning: '從〜到〜',
      formation: 'Start から End まで',
      explanation: 'から表示起點（時間或地點），まで表示終點。',
      examples: [
        { jp: '東京から大阪まで行きます。', romaji: 'Tokyo kara Osaka made ikimasu.', zh: '從東京去大阪。' },
        { jp: '9時から5時まで働きます。', romaji: 'Ku-ji kara go-ji made hatarakimasu.', zh: '從9點工作到5點。' }
      ]
    },
    {
      pattern: '〜たいです',
      meaning: '想要做〜',
      formation: 'Verb-stem + たいです',
      explanation: '表示第一人稱的願望。動詞去ます，加たいです。問他人時用たいですか。',
      examples: [
        { jp: '日本に行きたいです。', romaji: 'Nihon ni ikitai desu.', zh: '我想去日本。' },
        { jp: '何が食べたいですか。', romaji: 'Nani ga tabetai desu ka.', zh: '你想吃什麼？' }
      ]
    },
    {
      pattern: '〜てください',
      meaning: '請做〜',
      formation: 'Verb-te form + ください',
      explanation: '禮貌的請求或指示。否定形式是〜ないでください（請不要〜）。',
      examples: [
        { jp: 'ここに名前を書いてください。', romaji: 'Koko ni namae o kaite kudasai.', zh: '請在這裡寫名字。' },
        { jp: '静かにしてください。', romaji: 'Shizuka ni shite kudasai.', zh: '請保持安靜。' }
      ]
    },
    {
      pattern: '〜と〜',
      meaning: '〜和〜（並列）',
      formation: 'Noun と Noun',
      explanation: 'と連接兩個名詞，表示「和」的關係。也可以表示「和某人一起」。',
      examples: [
        { jp: 'パンと牛乳を買いました。', romaji: 'Pan to gyuunyuu o kaimashita.', zh: '買了麵包和牛奶。' },
        { jp: '友達と映画を見ました。', romaji: 'Tomodachi to eiga o mimashita.', zh: '和朋友看了電影。' }
      ]
    },
    {
      pattern: '〜ませんか',
      meaning: '要不要〜？（邀請）',
      formation: 'Verb-stem + ませんか',
      explanation: '用於邀請他人一起做某事的表達方式，比ましょう更有禮貌。',
      examples: [
        { jp: '一緒に昼ご飯を食べませんか。', romaji: 'Issho ni hirugohan o tabemasen ka.', zh: '要不要一起吃午飯？' },
        { jp: '映画を見に行きませんか。', romaji: 'Eiga o mi ni ikimasen ka.', zh: '要不要去看電影？' }
      ]
    },
    {
      pattern: '〜ましょう',
      meaning: '讓我們〜吧',
      formation: 'Verb-stem + ましょう',
      explanation: '表示提議或邀請一起行動。比ませんか更加主動。',
      examples: [
        { jp: '始めましょう。', romaji: 'Hajimemashou.', zh: '我們開始吧。' },
        { jp: '一緒に勉強しましょう。', romaji: 'Issho ni benkyou shimashou.', zh: '我們一起學習吧。' }
      ]
    }
  ],
  N4: [
    {
      pattern: '〜てもいいです',
      meaning: '可以做〜（許可）',
      formation: 'Verb-te form + もいいです',
      explanation: '表示許可，允許某行為。詢問時用〜てもいいですか。',
      examples: [
        { jp: 'ここで写真を撮ってもいいです。', romaji: 'Koko de shashin o totte mo ii desu.', zh: '可以在這裡拍照。' },
        { jp: 'トイレに行ってもいいですか。', romaji: 'Toire ni itte mo ii desu ka.', zh: '可以去廁所嗎？' }
      ]
    },
    {
      pattern: '〜てはいけません',
      meaning: '不可以做〜（禁止）',
      formation: 'Verb-te form + はいけません',
      explanation: '表示禁止，不允許某行為。口語中也用〜ちゃいけない。',
      examples: [
        { jp: 'ここで写真を撮ってはいけません。', romaji: 'Koko de shashin o totte wa ikemasen.', zh: '這裡不可以拍照。' },
        { jp: '授業中に寝てはいけません。', romaji: 'Jugyou-chuu ni nete wa ikemasen.', zh: '上課中不可以睡覺。' }
      ]
    },
    {
      pattern: '〜なければなりません',
      meaning: '必須做〜（義務）',
      formation: 'Verb-nai form（去い）+ なければなりません',
      explanation: '表示必要義務，「必須〜」。口語中常用〜なきゃいけない或〜なくちゃ。',
      examples: [
        { jp: '明日早く起きなければなりません。', romaji: 'Ashita hayaku okinakereba narimasen.', zh: '明天必須早起。' },
        { jp: '宿題をしなければなりません。', romaji: 'Shukudai o shinakereba narimasen.', zh: '必須做作業。' }
      ]
    },
    {
      pattern: '〜ことができます',
      meaning: '能夠做〜（能力）',
      formation: 'Verb-dictionary form + ことができます',
      explanation: '表示能力或可能性。比可能形式更正式。',
      examples: [
        { jp: '日本語を話すことができます。', romaji: 'Nihongo o hanasu koto ga dekimasu.', zh: '我能說日語。' },
        { jp: '泳ぐことができません。', romaji: 'Oyogu koto ga dekimasen.', zh: '我不會游泳。' }
      ]
    },
    {
      pattern: '〜そうです',
      meaning: '看起來〜（樣態）',
      formation: 'Adj-stem / Verb-stem + そうです',
      explanation: '根據視覺外觀作出判斷的表達。注意：いい→よさそう，ない→なさそう。',
      examples: [
        { jp: 'この料理はおいしそうです。', romaji: 'Kono ryouri wa oishisou desu.', zh: '這道料理看起來很好吃。' },
        { jp: '雨が降りそうです。', romaji: 'Ame ga furisou desu.', zh: '快要下雨了。' }
      ]
    },
    {
      pattern: '〜と思います',
      meaning: '我認為〜',
      formation: 'Plain form + と思います',
      explanation: '表達個人想法或意見的句型。',
      examples: [
        { jp: '明日は晴れると思います。', romaji: 'Ashita wa hareru to omoimasu.', zh: '我認為明天會放晴。' },
        { jp: '彼は来ないと思います。', romaji: 'Kare wa konai to omoimasu.', zh: '我認為他不會來。' }
      ]
    },
    {
      pattern: '〜ために',
      meaning: '為了〜（目的）',
      formation: 'Verb-dict form / Noun の + ために',
      explanation: '表示目的，「為了做〜」。主語明確且主動時使用。',
      examples: [
        { jp: '日本語を勉強するために、毎日練習します。', romaji: 'Nihongo o benkyou suru tame ni, mainichi renshuu shimasu.', zh: '為了學日語，每天練習。' },
        { jp: '健康のために、運動します。', romaji: 'Kenkou no tame ni, undou shimasu.', zh: '為了健康而運動。' }
      ]
    },
    {
      pattern: '〜ながら',
      meaning: '一邊〜一邊〜',
      formation: 'Verb-stem + ながら ＋ Main Verb',
      explanation: '表示同時進行兩個動作。主要動作在ながら後面。',
      examples: [
        { jp: '音楽を聴きながら勉強します。', romaji: 'Ongaku o kikinagara benkyou shimasu.', zh: '一邊聽音樂一邊學習。' },
        { jp: '歩きながら話しましょう。', romaji: 'Aruki nagara hanashimashou.', zh: '我們一邊走一邊說吧。' }
      ]
    },
    {
      pattern: '〜てしまいます',
      meaning: '（不小心）做了〜／做完了〜',
      formation: 'Verb-te form + しまいます',
      explanation: '表示動作的完了，或帶有遺憾、意外的語氣。口語縮略形：〜ちゃいます。',
      examples: [
        { jp: '財布を忘れてしまいました。', romaji: 'Saifu o wasurete shimaimashita.', zh: '不小心忘了錢包。' },
        { jp: '全部食べてしまいました。', romaji: 'Zenbu tabete shimaimashita.', zh: '全部吃完了。' }
      ]
    },
    {
      pattern: '〜ておきます',
      meaning: '事先做〜／做好〜備用',
      formation: 'Verb-te form + おきます',
      explanation: '表示事先準備好，為了今後某個目的而做。',
      examples: [
        { jp: '旅行の前に地図を調べておきます。', romaji: 'Ryokou no mae ni chizu o shirabete okimasu.', zh: '旅遊前先查好地圖。' },
        { jp: '宿題をやっておいてください。', romaji: 'Shukudai o yatte oite kudasai.', zh: '請先把作業做好。' }
      ]
    },
    {
      pattern: '〜てもらいます',
      meaning: '請（某人）幫我做〜',
      formation: 'Person に Verb-te form + もらいます',
      explanation: '表示請求他人做某事，說話者是受惠者。',
      examples: [
        { jp: '友達に手伝ってもらいました。', romaji: 'Tomodachi ni tetsudatte moraimashita.', zh: '請朋友幫了我。' },
        { jp: '先生に説明してもらいました。', romaji: 'Sensei ni setsumei shite moraimashita.', zh: '請老師給我說明了。' }
      ]
    },
    {
      pattern: '〜でしょう',
      meaning: '應該是〜吧（推測）',
      formation: 'Plain form + でしょう',
      explanation: '表示推測或確認，語氣比と思います更加肯定。',
      examples: [
        { jp: '彼女は来るでしょう。', romaji: 'Kanojo wa kuru deshou.', zh: '她應該會來吧。' },
        { jp: '明日は寒いでしょう。', romaji: 'Ashita wa samui deshou.', zh: '明天應該會冷吧。' }
      ]
    }
  ],
  N3: [
    {
      pattern: '〜ようです',
      meaning: '好像〜（客觀推測）',
      formation: 'Plain form / Noun の + ようです',
      explanation: '根據客觀情況或資訊進行推測。比みたいです更加書面。',
      examples: [
        { jp: '彼は忙しいようです。', romaji: 'Kare wa isogashii you desu.', zh: '他好像很忙。' },
        { jp: '雨が降ったようです。', romaji: 'Ame ga futta you desu.', zh: '好像下過雨了。' }
      ]
    },
    {
      pattern: '〜らしいです',
      meaning: '聽說〜、好像〜（傳聞）',
      formation: 'Plain form + らしいです',
      explanation: '表示從外部資訊（傳聞、新聞等）推測，帶有傳聞語氣。',
      examples: [
        { jp: '彼女は結婚するらしいです。', romaji: 'Kanojo wa kekkon suru rashii desu.', zh: '聽說她要結婚了。' },
        { jp: '明日は台風らしいです。', romaji: 'Ashita wa taifuu rashii desu.', zh: '聽說明天有颱風。' }
      ]
    },
    {
      pattern: '〜はずです',
      meaning: '應該〜（理所當然的期待）',
      formation: 'Plain form + はずです',
      explanation: '表示基於邏輯或常理，理應如此的推測。',
      examples: [
        { jp: '彼はもう来るはずです。', romaji: 'Kare wa mou kuru hazu desu.', zh: '他應該快來了。' },
        { jp: '彼女はこのことを知っているはずです。', romaji: 'Kanojo wa kono koto o shitte iru hazu desu.', zh: '她應該知道這件事。' }
      ]
    },
    {
      pattern: '〜かもしれません',
      meaning: '也許〜（不確定的可能）',
      formation: 'Plain form + かもしれません',
      explanation: '表示不確定的可能性，比でしょう確定性低。',
      examples: [
        { jp: '明日は雨かもしれません。', romaji: 'Ashita wa ame kamo shiremasen.', zh: '明天也許會下雨。' },
        { jp: '彼は忘れたかもしれません。', romaji: 'Kare wa wasureta kamo shiremasen.', zh: '他也許忘了。' }
      ]
    },
    {
      pattern: '〜ばかりです',
      meaning: '剛做完〜',
      formation: 'Verb-ta form + ばかりです',
      explanation: '表示剛剛完成某動作，強調時間的剛完成性。',
      examples: [
        { jp: '日本に来たばかりです。', romaji: 'Nihon ni kita bakari desu.', zh: '我剛來日本。' },
        { jp: '昼ご飯を食べたばかりです。', romaji: 'Hirugohan o tabeta bakari desu.', zh: '我剛吃完午飯。' }
      ]
    },
    {
      pattern: '〜だけでなく〜も',
      meaning: '不只〜，連〜也',
      formation: 'Noun / Plain form + だけでなく + も',
      explanation: '表示不僅如此，還有其他情況，類似「不只...還...」。',
      examples: [
        { jp: '英語だけでなく、日本語も話せます。', romaji: 'Eigo dake de naku, nihongo mo hanasemasu.', zh: '不只英語，我也會說日語。' },
        { jp: '体だけでなく、心も大切です。', romaji: 'Karada dake de naku, kokoro mo taisetsu desu.', zh: '不只身體，心靈也很重要。' }
      ]
    },
    {
      pattern: '〜によって',
      meaning: '依〜而定、因〜不同',
      formation: 'Noun + によって',
      explanation: '表示根據某個條件或依據，結果或方式會有所不同。也表示手段或原因。',
      examples: [
        { jp: '人によって意見が違います。', romaji: 'Hito ni yotte iken ga chigaimasu.', zh: '不同的人意見不同。' },
        { jp: '地震によって建物が壊れました。', romaji: 'Jishin ni yotte tatemono ga kowaremashita.', zh: '建築物因地震而損壞。' }
      ]
    },
    {
      pattern: '〜に対して',
      meaning: '對〜、針對〜',
      formation: 'Noun + に対して',
      explanation: '表示對象或對比，「對於〜」、「相對於〜」。',
      examples: [
        { jp: '先生の質問に対して答えます。', romaji: 'Sensei no shitsumon ni taishite kotaemasu.', zh: '回答老師的問題。' },
        { jp: '日本語は難しいのに対して、英語は比較的簡単です。', romaji: 'Nihongo wa muzukashii no ni taishite, eigo wa hikakuteki kantan desu.', zh: '相對於日語的難，英語比較簡單。' }
      ]
    },
    {
      pattern: '〜を通じて',
      meaning: '透過〜',
      formation: 'Noun + を通じて / を通して',
      explanation: '表示媒介或手段，「透過〜、經由〜」。',
      examples: [
        { jp: 'インターネットを通じて友達ができました。', romaji: 'Intaanetto o tsujite tomodachi ga dekimashita.', zh: '透過網路交到了朋友。' },
        { jp: '経験を通して学びます。', romaji: 'Keiken o tooshite manabimasu.', zh: '透過經驗學習。' }
      ]
    },
    {
      pattern: '〜ても',
      meaning: '即使〜也〜',
      formation: 'Verb-te form / Adj-te form + も',
      explanation: '表示讓步，「即使...也...」，前後兩件事不受影響。',
      examples: [
        { jp: '忙しくても、運動します。', romaji: 'Isogashikute mo, undou shimasu.', zh: '即使很忙，也要運動。' },
        { jp: '雨が降っても、行きます。', romaji: 'Ame ga futte mo, ikimasu.', zh: '即使下雨，也要去。' }
      ]
    }
  ],
  N2: [
    {
      pattern: '〜ざるを得ない',
      meaning: '不得不〜',
      formation: 'Verb-nai form（去ない）+ ざるを得ない ※する→せざるを得ない',
      explanation: '表示雖然不願意但不得不做某事，帶有無奈感。',
      examples: [
        { jp: '仕事なので、残業せざるを得ない。', romaji: 'Shigoto nanode, zangyou sezaru wo enai.', zh: '因為是工作，不得不加班。' },
        { jp: '証拠があるから、認めざるを得ない。', romaji: 'Shouko ga aru kara, mitomezaru wo enai.', zh: '因為有證據，不得不承認。' }
      ]
    },
    {
      pattern: '〜につれて',
      meaning: '隨著〜，越來越〜',
      formation: 'Verb-dict form / Noun + につれて',
      explanation: '表示隨著某事的變化，另一事也連動變化。',
      examples: [
        { jp: '年をとるにつれて、体が弱くなる。', romaji: 'Toshi o toru ni tsurete, karada ga yowaku naru.', zh: '隨著年齡增長，身體越來越弱。' },
        { jp: '春になるにつれて、暖かくなります。', romaji: 'Haru ni naru ni tsurete, atatakaku narimasu.', zh: '隨著春天到來，越來越暖。' }
      ]
    },
    {
      pattern: '〜にもかかわらず',
      meaning: '儘管〜，卻〜',
      formation: 'Plain form / Noun + にもかかわらず',
      explanation: '表示不管前述條件如何，結果仍然如此，帶有對比或反預期。',
      examples: [
        { jp: '反対にもかかわらず、実行しました。', romaji: 'Hantai ni mo kakawarazu, jikkou shimashita.', zh: '儘管有反對，仍然實行了。' },
        { jp: '雨にもかかわらず、出かけた。', romaji: 'Ame ni mo kakawarazu, dekaketa.', zh: '儘管下雨，還是出門了。' }
      ]
    },
    {
      pattern: '〜をはじめ（として）',
      meaning: '以〜為首、包括〜在內',
      formation: 'Noun + をはじめ（として）',
      explanation: '列舉代表性例子，表示「以〜為代表，還有其他」的用法。',
      examples: [
        { jp: '東京をはじめ、日本の都市を旅行した。', romaji: 'Tokyo o hajime, nihon no toshi o ryokou shita.', zh: '以東京為首，遊覽了日本各城市。' },
        { jp: '英語をはじめとした言語を学んでいます。', romaji: 'Eigo o hajime to shita gengo o manande imasu.', zh: '學習以英語為首的各種語言。' }
      ]
    },
    {
      pattern: '〜に反して',
      meaning: '與〜相反、違反〜',
      formation: 'Noun + に反して',
      explanation: '表示結果或狀況與預期或規則相反。',
      examples: [
        { jp: '予想に反して、試験は簡単だった。', romaji: 'Yosou ni hanshite, shiken wa kantan datta.', zh: '與預期相反，考試很簡單。' },
        { jp: '規則に反する行動はいけない。', romaji: 'Kisoku ni hansuru koudou wa ikenai.', zh: '違反規則的行為是不行的。' }
      ]
    },
    {
      pattern: '〜に伴って',
      meaning: '伴隨〜、隨著〜',
      formation: 'Verb-dict form / Noun + に伴って',
      explanation: '表示兩件事同時發生，一件事伴隨另一件事。比につれて更強調伴隨性。',
      examples: [
        { jp: '経済成長に伴って、生活水準が上がった。', romaji: 'Keizai seichou ni tomonatte, seikatsu suijun ga agatta.', zh: '隨著經濟成長，生活水準提高了。' },
        { jp: '技術の進歩に伴い、社会が変わった。', romaji: 'Gijutsu no shinpo ni tomonai, shakai ga kawatta.', zh: '隨著技術進步，社會也改變了。' }
      ]
    },
    {
      pattern: '〜からこそ',
      meaning: '正因為〜（強調原因）',
      formation: 'Plain form / Noun だ + からこそ',
      explanation: '強調特定原因，「正是因為〜才〜」，強調因果關係的特殊性。',
      examples: [
        { jp: '難しいからこそ、やりがいがある。', romaji: 'Muzukashii kara koso, yarigai ga aru.', zh: '正因為困難，才有成就感。' },
        { jp: '信頼しているからこそ、頼みます。', romaji: 'Shinrai shite iru kara koso, tanomimasu.', zh: '正因為信任，才拜託你。' }
      ]
    },
    {
      pattern: '〜さえ〜ば',
      meaning: '只要〜就〜',
      formation: 'Noun さえ / Verb-stem さえ + 條件形（〜ば）',
      explanation: '表示充分條件，「只要〜這個條件滿足，就〜」。',
      examples: [
        { jp: '健康でさえあれば、何でもできる。', romaji: 'Kenkou de sae areba, nandemo dekiru.', zh: '只要健康，什麼都能做。' },
        { jp: 'お金さえあれば、旅行できる。', romaji: 'Okane sae areba, ryokou dekiru.', zh: '只要有錢就能旅行。' }
      ]
    }
  ],
  N1: [
    {
      pattern: '〜いかんによらず',
      meaning: '不管〜如何、無論〜',
      formation: 'Noun の + いかんによらず / いかんにかかわらず',
      explanation: '非常正式的表達，表示無論何種情況都不影響結果。常見於書面語。',
      examples: [
        { jp: '理由のいかんによらず、遅刻は認めません。', romaji: 'Riyuu no ikan ni yorazu, chikoku wa mitomemasen.', zh: '不管理由如何，都不允許遲到。' },
        { jp: '結果のいかんにかかわらず、努力を続けます。', romaji: 'Kekka no ikan ni kakawarazu, doryoku o tsuzukemasu.', zh: '無論結果如何，都繼續努力。' }
      ]
    },
    {
      pattern: '〜ならでは',
      meaning: '只有〜才有的、〜獨有的',
      formation: 'Noun + ならでは（の + Noun）',
      explanation: '強調某事物的獨特性，是其他地方或事物所沒有的。',
      examples: [
        { jp: '京都ならではの風景です。', romaji: 'Kyoto naradewa no fuukei desu.', zh: '這是只有京都才有的風景。' },
        { jp: '子供ならではの発想ですね。', romaji: 'Kodomo naradewa no hassou desu ne.', zh: '這是孩子獨有的想法呢。' }
      ]
    },
    {
      pattern: '〜べく',
      meaning: '為了〜（目的・意圖）',
      formation: 'Verb-dict form（する→すべく）+ べく',
      explanation: '非常正式的文語表達，表示為了某目的而採取行動，相當於ために的書面語。',
      examples: [
        { jp: '目標を達成すべく、努力を重ねた。', romaji: 'Mokuhyou o tassei subeku, doryoku o kasaneta.', zh: '為了達成目標，累積了努力。' },
        { jp: '問題を解決すべく、議論した。', romaji: 'Mondai o kaiketsu subeku, giron shita.', zh: '為了解決問題，進行了討論。' }
      ]
    },
    {
      pattern: '〜をもって',
      meaning: '以〜、憑藉〜',
      formation: 'Noun + をもって',
      explanation: '表示手段、時間界限或資格，非常正式的書面語。「以〜為手段」或「到〜為止」。',
      examples: [
        { jp: '本日をもって、退職いたします。', romaji: 'Honjitsu o motte, taishoku itashimasu.', zh: '以今天為限，我辭職了。' },
        { jp: '実力をもって証明する。', romaji: 'Jitsuryoku o motte shoumei suru.', zh: '以實力來證明。' }
      ]
    },
    {
      pattern: '〜にたえない',
      meaning: '不堪〜、難以〜',
      formation: 'Verb-dict form / Noun + にたえない',
      explanation: '表示難以承受某狀態，有兩種意思：①無法忍受；②非常感動（感謝にたえない）。',
      examples: [
        { jp: 'この映画は見るにたえない。', romaji: 'Kono eiga wa miru ni taenai.', zh: '這部電影難以入目。' },
        { jp: 'ご支援、感謝にたえません。', romaji: 'Goshien, kansha ni taemasen.', zh: '對您的支持感激不盡。' }
      ]
    },
    {
      pattern: '〜に即して',
      meaning: '根據〜、按照〜',
      formation: 'Noun + に即して / に即した',
      explanation: '表示緊密根據某原則、規範或現實情況，「切實依照〜」。正式書面語。',
      examples: [
        { jp: '現実に即した対応が必要です。', romaji: 'Genjitsu ni sokushita taiou ga hitsuyou desu.', zh: '需要切實面對現實的應對。' },
        { jp: '法律に即して判断する。', romaji: 'Houritsu ni sokushite handan suru.', zh: '根據法律來判斷。' }
      ]
    },
    {
      pattern: '〜まじき',
      meaning: '不應有的〜（強烈否定）',
      formation: 'Verb-dict form + まじき + Noun',
      explanation: '非常正式的否定義務表達，表示「不應有的〜、作為〜不該做的」，多用於批評。',
      examples: [
        { jp: '教師にあるまじき行為だ。', romaji: 'Kyoushi ni aru majiki koui da.', zh: '這是身為教師不應有的行為。' },
        { jp: '許すまじき犯罪だ。', romaji: 'Yurusu majiki hanzai da.', zh: '這是不可饒恕的罪行。' }
      ]
    },
    {
      pattern: '〜ていかんせん',
      meaning: '無法否認〜（感嘆）',
      formation: 'Verb-te form + いかんせん（感じる等）',
      explanation: '書面語，表示對某事無奈，雖然如此仍無法改變，帶有遺憾的語氣。',
      examples: [
        { jp: '努力したが、力不足のそしりはいかんせん免れない。', romaji: 'Doryoku shita ga, chikara busoku no soshiri wa ikanzen manukarenai.', zh: '雖然努力了，但力量不足的批評還是難以避免。' },
        { jp: '残念ではあるが、いかんせん時間がない。', romaji: 'Zannen dewa aru ga, ikanzen jikan ga nai.', zh: '雖然遺憾，但無奈時間不夠。' }
      ]
    }
  ]
};
