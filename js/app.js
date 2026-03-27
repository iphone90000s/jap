// =========================================================
// APP.js — Main application logic
// =========================================================

const DATA = {};

async function loadData() {
  const files = [
    ['hiragana',      'data/hiragana.json'],
    ['katakana',      'data/katakana.json'],
    ['vocab_N5',      'data/vocabulary_N5.json'],
    ['vocab_N4',      'data/vocabulary_N4.json'],
    ['vocab_N3',      'data/vocabulary_N3.json'],
    ['vocab_N2',      'data/vocabulary_N2.json'],
    ['vocab_N1',      'data/vocabulary_N1.json'],
    ['grammar_N5',    'data/grammar_N5.json'],
    ['grammar_N4',    'data/grammar_N4.json'],
    ['grammar_N3',    'data/grammar_N3.json'],
    ['grammar_N2',    'data/grammar_N2.json'],
    ['grammar_N1',    'data/grammar_N1.json'],
  ];
  const results = await Promise.all(files.map(([, path]) => fetch(path).then(r => r.json())));
  const map = Object.fromEntries(files.map(([key], i) => [key, results[i]]));
  DATA.hiragana = map.hiragana;
  DATA.katakana = map.katakana;
  DATA.vocabulary = { N5: map.vocab_N5, N4: map.vocab_N4, N3: map.vocab_N3, N2: map.vocab_N2, N1: map.vocab_N1 };
  DATA.grammar    = { N5: map.grammar_N5, N4: map.grammar_N4, N3: map.grammar_N3, N2: map.grammar_N2, N1: map.grammar_N1 };
}

// =========================================================
// Storage helper
// =========================================================
const Store = {
  get(key, def = null) {
    try { const v = localStorage.getItem('jplearn_' + key); return v !== null ? JSON.parse(v) : def; }
    catch { return def; }
  },
  set(key, val) { localStorage.setItem('jplearn_' + key, JSON.stringify(val)); },
  update(key, fn, def = {}) { this.set(key, fn(this.get(key, def))); }
};

// =========================================================
// Utility
// =========================================================
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }
function el(tag, cls, html = '') {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}
function badge(level) {
  return `<span class="badge badge-${level.toLowerCase()}">${level}</span>`;
}
function today() { return new Date().toISOString().slice(0, 10); }
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'ja-JP';
  utt.rate = 0.85;
  window.speechSynthesis.speak(utt);
}

// =========================================================
// Modal
// =========================================================
const Modal = {
  show(html) {
    $('#modal-content').innerHTML = html;
    $('#modal-overlay').classList.remove('hidden');
  },
  hide() { $('#modal-overlay').classList.add('hidden'); }
};

// =========================================================
// Router
// =========================================================
const Router = {
  pages: {},
  current: null,
  register(name, fn) { this.pages[name] = fn; },
  go(page) {
    const fn = this.pages[page];
    if (!fn) return;
    this.current = page;
    $$('.nav-link').forEach(a => a.classList.toggle('active', a.dataset.page === page));
    $('#main').innerHTML = '';
    fn($('#main'));
    // close mobile menu
    $('#nav-links').classList.remove('open');
  },
  init() {
    const hash = location.hash.replace('#', '') || 'home';
    this.go(hash);
    window.addEventListener('hashchange', () => {
      this.go(location.hash.replace('#', '') || 'home');
    });
  }
};

// =========================================================
// Page: HOME
// =========================================================
Router.register('home', function(main) {
  const learned = Store.get('learned', {});
  const totalVocab = Object.values(DATA.vocabulary).flat().length;
  const learnedCount = Object.keys(learned).filter(k => learned[k]).length;
  const kanaLearned = Store.get('kana_learned', {});
  const totalKana = 46 + 46; // hiragana + katakana main chars (approx)
  const kanaCount = Object.keys(kanaLearned).filter(k => kanaLearned[k]).length;
  const history = Store.get('quiz_history', []);
  const streak = Store.get('streak', { count: 0, last: '' });
  const todayDone = history.some(h => h.date === today());

  main.innerHTML = `
    <div class="home-hero">
      <h1>🎌 日本語学習</h1>
      <p>從N5到N1，全方位日語學習平台。每天進步一點點！</p>
      <div class="hero-btns">
        <a href="#kana" class="btn btn-primary">あ 開始學習50音</a>
        <a href="#quiz" class="btn" style="background:rgba(255,255,255,0.15);color:white;">🎯 今日測驗</a>
      </div>
    </div>

    ${streak.count > 0 ? `
    <div class="streak-banner">
      🔥 連續學習 ${streak.count} 天！繼續保持！
    </div>` : ''}

    <div class="container section">
      ${!todayDone ? `
      <div class="today-quiz-card">
        <div class="tq-icon">🎯</div>
        <div>
          <h3>今日測驗等你挑戰！</h3>
          <p>完成每日10題，累積連勝天數</p>
          <a href="#quiz" class="btn" style="background:rgba(255,255,255,0.25);color:white;">開始測驗</a>
        </div>
      </div>` : `
      <div class="today-quiz-card">
        <div class="tq-icon">✅</div>
        <div>
          <h3>今日測驗已完成！</h3>
          <p>明天再來挑戰新題目</p>
        </div>
      </div>
      `}

      <div class="stat-grid" style="margin-bottom:32px;">
        <div class="stat-card">
          <div class="stat-icon">📖</div>
          <div class="stat-num">${learnedCount}</div>
          <div class="stat-label">已學單字 / ${totalVocab}</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">あ</div>
          <div class="stat-num">${kanaCount}</div>
          <div class="stat-label">已學假名 / ${totalKana}</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">🔥</div>
          <div class="stat-num">${streak.count}</div>
          <div class="stat-label">連勝天數</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">🏆</div>
          <div class="stat-num">${history.length > 0 ? Math.round(history.reduce((s,h)=>s+h.score,0)/history.length) : 0}%</div>
          <div class="stat-label">平均正確率</div>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;" class="home-grid">
        <div class="card">
          <h3 style="margin-bottom:16px;">📊 各級單字進度</h3>
          ${['N5','N4','N3','N2','N1'].map(lv => {
            const words = DATA.vocabulary[lv];
            const cnt = words.filter(w => learned[lv+'_'+w.word]).length;
            const pct = Math.round(cnt/words.length*100);
            const colors = {N5:'#38a169',N4:'#3182ce',N3:'#805ad5',N2:'#dd6b20',N1:'#c0392b'};
            return `
            <div class="progress-item">
              <div class="progress-label">
                <span>${badge(lv)} ${lv}</span>
                <span style="color:var(--text-light)">${cnt}/${words.length}</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width:${pct}%;background:${colors[lv]}"></div>
              </div>
            </div>`;
          }).join('')}
        </div>

        <div class="card">
          <h3 style="margin-bottom:16px;">📅 最近測驗紀錄</h3>
          ${history.length === 0 ? '<div class="empty-state"><div class="empty-icon">📝</div><p>還沒有測驗紀錄</p></div>' :
            history.slice(-5).reverse().map(h => {
              const cls = h.score >= 80 ? 'high' : h.score >= 50 ? 'mid' : 'low';
              return `<div class="history-item">
                <div class="history-date">${h.date}</div>
                <div class="history-score ${cls}">${h.score}% (${h.correct}/${h.total})</div>
              </div>`;
            }).join('')
          }
          ${history.length > 0 ? `<a href="#quiz" class="btn btn-outline btn-sm" style="margin-top:12px;">查看更多</a>` : ''}
        </div>
      </div>

      <div class="card" style="margin-top:24px;">
        <h3 style="margin-bottom:16px;">🗺️ 學習地圖</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;">
          ${[
            { icon:'あ', title:'50音表', sub:'平假名・片假名', href:'#kana', color:'#c0392b' },
            { icon:'📖', title:'單字學習', sub:'N5-N1 分級詞彙', href:'#vocabulary', color:'#3182ce' },
            { icon:'📝', title:'文法教學', sub:'詳細說明+例句', href:'#grammar', color:'#805ad5' },
            { icon:'🎯', title:'每日測驗', sub:'混合題型練習', href:'#quiz', color:'#38a169' }
          ].map(m => `
          <a href="${m.href}" style="display:flex;align-items:center;gap:12px;padding:16px;background:var(--bg);border-radius:10px;border:2px solid var(--border);transition:all 0.2s;text-decoration:none;color:inherit;" onmouseover="this.style.borderColor='${m.color}';this.style.background='#fff'" onmouseout="this.style.borderColor='var(--border)';this.style.background='var(--bg)'">
            <span style="font-size:28px;">${m.icon}</span>
            <div><div style="font-weight:700;">${m.title}</div><div style="font-size:12px;color:var(--text-light);">${m.sub}</div></div>
          </a>`).join('')}
        </div>
      </div>
    </div>
  `;

  // Responsive two-column fix
  const homeGrid = main.querySelector('.home-grid');
  if (window.innerWidth < 768) homeGrid.style.gridTemplateColumns = '1fr';
});

// =========================================================
// Page: KANA (50音)
// =========================================================
Router.register('kana', function(main) {
  const kanaLearned = Store.get('kana_learned', {});
  let activeTab = 'hiragana';
  let practiceMode = false;

  function renderKana() {
    const data = DATA[activeTab];
    const sections = [
      { title: '清音 (基本)', rows: data.main },
      { title: '濁音・半濁音', rows: data.dakuten },
      { title: '拗音 (組合音)', rows: data.combo }
    ];

    main.innerHTML = `
      <div class="page-hero">
        <h1>あ 五十音表</h1>
        <p>點擊假名可查看詳情，標記已學過的字</p>
      </div>
      <div class="container section">
        <div class="kana-tabs">
          <button class="kana-tab ${activeTab==='hiragana'?'active':''}" data-tab="hiragana">平假名 ひらがな</button>
          <button class="kana-tab ${activeTab==='katakana'?'active':''}" data-tab="katakana">片假名 カタカナ</button>
        </div>

        <div style="display:flex;gap:8px;align-items:center;margin-bottom:20px;flex-wrap:wrap;">
          <button class="btn btn-sm ${practiceMode?'btn-primary':'btn-outline'}" id="practice-toggle">
            ${practiceMode ? '✅ 練習模式（點擊顯示羅馬字）' : '🎮 開啟練習模式'}
          </button>
          <span style="font-size:13px;color:var(--text-light);">已學：${Object.values(kanaLearned).filter(Boolean).length} 個</span>
        </div>

        ${sections.map(sec => `
          <div class="kana-section-title">${sec.title}</div>
          ${sec.rows.map(row => `
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
              <span style="font-size:12px;color:var(--text-light);width:60px;flex-shrink:0;">${row.row}</span>
              <div class="kana-row">
                ${row.chars.map(c => c.char ? `
                  <div class="kana-cell ${kanaLearned[activeTab+'_'+c.char]?'learned':''}"
                       data-char="${c.char}" data-romaji="${c.romaji}" data-type="${activeTab}">
                    <span class="kana-char">${c.char}</span>
                    <span class="kana-romaji" style="${practiceMode?'opacity:0':''}">${c.romaji}</span>
                  </div>` : `<div class="kana-cell-empty"></div>`
                ).join('')}
              </div>
            </div>
          `).join('')}
        `).join('')}

        <div class="card" style="margin-top:32px;text-align:center;">
          <h3 style="margin-bottom:8px;">💡 學習小提示</h3>
          <p style="color:var(--text-light);font-size:14px;">
            點擊任意假名可查看詳細資訊，並與對應的平假名/片假名對照。<br>
            點擊 ⭐ 按鈕可標記為已學。開啟練習模式後，羅馬字會隱藏，測試自己是否記住。
          </p>
        </div>
      </div>
    `;

    // Tab switch
    $$('.kana-tab').forEach(btn => btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab;
      renderKana();
    }));

    // Practice toggle
    $('#practice-toggle').addEventListener('click', () => {
      practiceMode = !practiceMode;
      renderKana();
    });

    // Kana cell click
    $$('.kana-cell').forEach(cell => {
      cell.addEventListener('click', () => {
        const char = cell.dataset.char;
        const romaji = cell.dataset.romaji;
        const type = cell.dataset.type;
        openKanaModal(char, romaji, type);
      });
    });
  }

  function openKanaModal(char, romaji, type) {
    const kanaLearned = Store.get('kana_learned', {});
    const key = type + '_' + char;
    const isLearned = kanaLearned[key];

    // Find paired character
    const otherType = type === 'hiragana' ? 'katakana' : 'hiragana';
    const otherData = DATA[otherType];
    let otherChar = '';
    const allRows = [...otherData.main, ...otherData.dakuten, ...otherData.combo];
    for (const row of allRows) {
      const found = row.chars.find(c => c.romaji === romaji);
      if (found && found.char) { otherChar = found.char; break; }
    }

    Modal.show(`
      <div class="kana-detail">
        <div class="big-char">${char}</div>
        <div class="big-romaji">${romaji}</div>
        <button class="speak-btn" id="kana-speak" title="播放發音" style="font-size:22px;margin-bottom:8px;">🔊 聽發音</button>
        <div class="kana-pair">
          <div class="kana-pair-item">
            <div class="char">${type === 'hiragana' ? char : otherChar}</div>
            <div class="label">平假名</div>
          </div>
          <div class="kana-pair-item">
            <div class="char">${type === 'katakana' ? char : otherChar}</div>
            <div class="label">片假名</div>
          </div>
        </div>
        <button id="kana-mark-btn" class="btn ${isLearned?'btn-outline':'btn-success'}" style="margin-top:12px;">
          ${isLearned ? '✅ 已標記（點擊取消）' : '⭐ 標記為已學'}
        </button>
      </div>
    `);

    $('#kana-speak').addEventListener('click', () => speak(char));
    $('#kana-mark-btn').addEventListener('click', () => {
      Store.update('kana_learned', (obj) => ({ ...obj, [key]: !obj[key] }), {});
      Modal.hide();
      renderKana();
    });
  }

  renderKana();
});

// =========================================================
// Page: VOCABULARY
// =========================================================
Router.register('vocabulary', function(main) {
  let filterLevel = 'all';
  let searchTerm = '';
  let mode = 'cards'; // 'cards' | 'flashcard'
  let fcIndex = 0;
  let fcFlipped = false;
  let fcList = [];

  function allWords() {
    let words = [];
    const levels = filterLevel === 'all' ? ['N5','N4','N3','N2','N1'] : [filterLevel];
    levels.forEach(lv => DATA.vocabulary[lv].forEach(w => words.push({...w, level: lv})));
    if (searchTerm) {
      const t = searchTerm.toLowerCase();
      words = words.filter(w =>
        w.word.includes(t) || w.reading.includes(t) ||
        w.meaning.includes(t) || w.romaji.toLowerCase().includes(t)
      );
    }
    return words;
  }

  function render() {
    const learned = Store.get('learned', {});
    const words = allWords();

    main.innerHTML = `
      <div class="page-hero">
        <h1>📖 單字學習</h1>
        <p>N5-N1 分級詞彙，點擊卡片翻轉查看詳情</p>
      </div>
      <div class="container section">
        <div class="mode-toggle">
          <button class="mode-btn ${mode==='cards'?'active':''}" data-mode="cards">🃏 卡片模式</button>
          <button class="mode-btn ${mode==='flashcard'?'active':''}" data-mode="flashcard">🔄 抽卡模式</button>
        </div>

        <div class="level-filter">
          ${['all','N5','N4','N3','N2','N1'].map(lv =>
            `<button class="filter-btn ${filterLevel===lv?'active':''}" data-level="${lv}">
              ${lv === 'all' ? '全部' : lv}
              ${lv !== 'all' ? `<span style="font-size:11px;opacity:0.7">(${DATA.vocabulary[lv].length})</span>` : ''}
            </button>`
          ).join('')}
        </div>

        <div class="search-bar">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="搜尋單字、假名、中文意思..." value="${searchTerm}" id="vocab-search">
        </div>

        <div style="font-size:13px;color:var(--text-light);margin-bottom:16px;">
          共 ${words.length} 個單字 | 已學 ${words.filter(w=>learned[w.level+'_'+w.word]).length} 個
        </div>

        <div id="vocab-content"></div>
      </div>
    `;

    // Events
    $$('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
      filterLevel = btn.dataset.level;
      render();
    }));
    $$('.mode-btn').forEach(btn => btn.addEventListener('click', () => {
      mode = btn.dataset.mode;
      fcIndex = 0; fcFlipped = false;
      fcList = shuffle(allWords());
      render();
    }));
    $('#vocab-search').addEventListener('input', (e) => {
      searchTerm = e.target.value;
      renderContent();
    });

    renderContent();
  }

  function renderContent() {
    const learned = Store.get('learned', {});
    const words = allWords();
    const content = $('#vocab-content');
    if (!content) return;

    if (mode === 'flashcard') {
      if (fcList.length === 0) fcList = shuffle(words);
      renderFlashcard(content, fcList, learned);
    } else {
      renderCards(content, words, learned);
    }
  }

  function renderCards(container, words, learned) {
    if (words.length === 0) {
      container.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>找不到符合的單字</p></div>`;
      return;
    }
    container.innerHTML = `<div class="card-grid" id="vocab-grid"></div>`;
    const grid = $('#vocab-grid');
    words.forEach(w => {
      const key = w.level + '_' + w.word;
      const isLearned = learned[key];
      const card = el('div', `vocab-card ${isLearned?'is-learned':''}`, `
        <div class="card-footer" style="margin-bottom:0;margin-top:0;justify-content:space-between;align-items:flex-start;">
          ${badge(w.level)}
          <button class="learned-btn" data-key="${key}" title="${isLearned?'取消標記':'標記已學'}">${isLearned?'⭐':'☆'}</button>
        </div>
        <div class="word">${w.word}</div>
        <div class="reading">${w.reading}</div>
        <div class="meaning">${w.meaning}</div>
        <div class="romaji">${w.romaji}</div>
        <div style="font-size:12px;color:#a0aec0;">${w.type || ''}</div>
      `);
      grid.appendChild(card);

      card.querySelector('.learned-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        Store.update('learned', obj => ({ ...obj, [key]: !obj[key] }), {});
        renderContent();
      });
    });
  }

  function renderFlashcard(container, words, learned) {
    if (words.length === 0) {
      container.innerHTML = `<div class="empty-state"><div class="empty-icon">🃏</div><p>沒有單字</p></div>`;
      return;
    }
    const w = words[fcIndex % words.length];
    const key = w.level + '_' + w.word;
    const isLearned = learned[key];

    container.innerHTML = `
      <div class="flashcard-container">
        <div class="flashcard ${fcFlipped?'flipped':''}" id="flashcard">
          <div class="flashcard-front">
            <div class="fc-word">${w.word}</div>
            <div class="fc-reading">${w.reading}</div>
            <button class="speak-btn fc-speak" data-text="${w.word}" title="播放發音">🔊</button>
            <div class="fc-hint" style="margin-top:8px;">${badge(w.level)} ${w.type||''}</div>
            <div class="fc-hint">點擊翻轉查看意思 👆</div>
          </div>
          <div class="flashcard-back">
            <div class="fc-meaning">${w.meaning}</div>
            <div class="fc-romaji">${w.romaji}</div>
          </div>
        </div>
      </div>
      <div class="flashcard-nav">
        <button class="btn btn-outline" id="fc-prev">← 上一張</button>
        <span class="flashcard-counter">${(fcIndex%words.length)+1} / ${words.length}</span>
        <button class="btn btn-outline" id="fc-next">下一張 →</button>
      </div>
      <div style="text-align:center;margin-top:12px;">
        <button class="btn btn-sm ${isLearned?'btn-outline':'btn-success'}" id="fc-mark">
          ${isLearned?'✅ 已學（取消）':'⭐ 標記已學'}
        </button>
        <button class="btn btn-sm btn-outline" id="fc-shuffle" style="margin-left:8px;">🔀 重新洗牌</button>
      </div>
    `;

    $('#flashcard').addEventListener('click', (e) => {
      if (e.target.closest('.fc-speak')) return;
      fcFlipped = !fcFlipped; renderContent();
    });
    $$('.fc-speak').forEach(btn => btn.addEventListener('click', (e) => { e.stopPropagation(); speak(btn.dataset.text); }));
    $('#fc-prev').addEventListener('click', () => { fcIndex = (fcIndex - 1 + words.length) % words.length; fcFlipped = false; renderContent(); });
    $('#fc-next').addEventListener('click', () => { fcIndex = (fcIndex + 1) % words.length; fcFlipped = false; renderContent(); });
    $('#fc-mark').addEventListener('click', () => {
      Store.update('learned', obj => ({ ...obj, [key]: !obj[key] }), {});
      renderContent();
    });
    $('#fc-shuffle').addEventListener('click', () => { fcList = shuffle(words); fcIndex = 0; fcFlipped = false; renderContent(); });
  }

  render();
});

// =========================================================
// Page: GRAMMAR
// =========================================================
Router.register('grammar', function(main) {
  let filterLevel = 'all';
  let searchTerm = '';

  function allGrammar() {
    let items = [];
    const levels = filterLevel === 'all' ? ['N5','N4','N3','N2','N1'] : [filterLevel];
    levels.forEach(lv => DATA.grammar[lv].forEach(g => items.push({...g, level: lv})));
    if (searchTerm) {
      const t = searchTerm.toLowerCase();
      items = items.filter(g =>
        g.pattern.includes(t) || g.meaning.includes(t) ||
        g.explanation.toLowerCase().includes(t)
      );
    }
    return items;
  }

  function render() {
    const items = allGrammar();
    main.innerHTML = `
      <div class="page-hero">
        <h1>📝 文法教學</h1>
        <p>N5-N1 文法要點，附說明、構成與例句</p>
      </div>
      <div class="container section">
        <div class="level-filter">
          ${['all','N5','N4','N3','N2','N1'].map(lv =>
            `<button class="filter-btn ${filterLevel===lv?'active':''}" data-level="${lv}">
              ${lv==='all'?'全部':lv}
              ${lv!=='all'?`<span style="font-size:11px;opacity:0.7">(${DATA.grammar[lv].length})</span>`:''}
            </button>`
          ).join('')}
        </div>

        <div class="search-bar">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="搜尋文法、意思..." value="${searchTerm}" id="grammar-search">
        </div>

        <div style="font-size:13px;color:var(--text-light);margin-bottom:16px;">共 ${items.length} 個文法項目</div>

        <div id="grammar-list">
          ${items.map((g, i) => renderGrammarCard(g, i)).join('')}
          ${items.length === 0 ? `<div class="empty-state"><div class="empty-icon">🔍</div><p>找不到符合的文法</p></div>` : ''}
        </div>
      </div>
    `;

    $$('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
      filterLevel = btn.dataset.level;
      render();
    }));
    $('#grammar-search').addEventListener('input', e => {
      searchTerm = e.target.value;
      render();
    });

    $$('.grammar-header').forEach(header => {
      header.addEventListener('click', () => {
        const card = header.closest('.grammar-card');
        card.classList.toggle('open');
      });
    });
  }

  function renderGrammarCard(g, i) {
    return `
      <div class="grammar-card" id="gc-${i}">
        <div class="grammar-header">
          <div>
            <div class="grammar-pattern">${g.pattern}</div>
          </div>
          <div class="grammar-meaning">${g.meaning}</div>
          ${badge(g.level)}
          <span class="grammar-toggle">▼</span>
        </div>
        <div class="grammar-body">
          <div class="grammar-formation">📐 構成：${g.formation}</div>
          <div class="grammar-explanation">${g.explanation}</div>
          <div class="examples-title">💬 例句</div>
          ${g.examples.map(ex => `
            <div class="example-item">
              <div class="example-jp">${ex.jp}</div>
              <div class="example-romaji">${ex.romaji}</div>
              <div class="example-zh">${ex.zh}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  render();
});

// =========================================================
// =========================================================
// SRS (間隔重複) helpers — simplified SM-2
// =========================================================
function srsUpdate(card, quality) {
  let { interval = 1, easeFactor = 2.5, reps = 0 } = card || {};
  if (quality === 0) {
    interval = 1; reps = 0;
  } else {
    if (reps === 0) interval = 1;
    else if (reps === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    easeFactor = Math.max(1.3, easeFactor + 0.1 - (2 - quality) * (0.08 + (2 - quality) * 0.02));
    reps++;
  }
  const due = new Date(Date.now() + interval * 86400000).toISOString().slice(0, 10);
  return { interval, easeFactor, reps, dueDate: due };
}
const SRS = {
  update(wordKey, quality) {
    Store.update('srs', obj => ({ ...obj, [wordKey]: srsUpdate(obj[wordKey], quality) }), {});
  },
  dueKeys() {
    const all = Store.get('srs', {});
    const t = today();
    return Object.entries(all).filter(([, v]) => v.dueDate <= t).map(([k]) => k);
  },
  dueCount() { return this.dueKeys().length; }
};

// =========================================================
// Wrong Words (錯題本) helpers
// =========================================================
const WrongWords = {
  add(w) {
    const key = (w.level || '') + '_' + w.word;
    Store.update('wrong_words', obj => ({
      ...obj,
      [key]: { word: w.word, reading: w.reading, meaning: w.meaning, level: w.level || '',
                count: ((obj[key] || {}).count || 0) + 1 }
    }), {});
  },
  all() { return Object.values(Store.get('wrong_words', {})); },
  count() { return Object.keys(Store.get('wrong_words', {})).length; }
};

// =========================================================
// Page: QUIZ
// =========================================================
Router.register('quiz', function(main) {
  let questions = [];
  let current = 0;
  let correct = 0;
  let answered = false;
  let selectedLevel = null;
  let selectedMode = 'level'; // 'level' | 'srs' | 'wrong'

  const LEVEL_INFO = {
    N5: { desc: '入門級', detail: '基礎50音、日常用語', color: '#38a169', emoji: '🌱' },
    N4: { desc: '初級',   detail: '日常對話、基本文型', color: '#3182ce', emoji: '📗' },
    N3: { desc: '中級',   detail: '日常情境、複雜句型', color: '#805ad5', emoji: '📘' },
    N2: { desc: '中高級', detail: '新聞閱讀、抽象詞彙', color: '#dd6b20', emoji: '📙' },
    N1: { desc: '高級',   detail: '專業文章、慣用語',   color: '#e53e3e', emoji: '🏆' },
  };

  function makeVocabQ(w, level, allVocab, tag) {
    const wObj = { ...w, level };
    const wordKey = level + '_' + w.word;
    const dis = shuffle(allVocab.filter(x => x.meaning !== w.meaning)).slice(0, 3).map(x => x.meaning);
    return { type: 'vocab', wordKey, wordObj: wObj, speakText: w.word,
      qText: w.word, qHint: w.reading + '（' + (w.level || level) + (tag ? ' · ' + tag : '') + '）',
      answer: w.meaning, options: shuffle([w.meaning, ...dis]) };
  }
  function makeVocabRevQ(w, level, allVocab) {
    const wObj = { ...w, level };
    const wordKey = level + '_' + w.word;
    const dis = shuffle(allVocab.filter(x => x.word !== w.word)).slice(0, 3).map(x => x.word);
    return { type: 'vocab_rev', wordKey, wordObj: wObj, speakText: w.word,
      qText: w.meaning, qHint: '選出對應的日文單字（' + (w.level || level) + '）',
      answer: w.word, options: shuffle([w.word, ...dis]) };
  }

  function generateQuestions(level) {
    const pool = [];
    const allVocab = Object.values(DATA.vocabulary).flat();
    const vocabPool = (DATA.vocabulary[level] || []).length >= 5 ? DATA.vocabulary[level] : allVocab;

    if (level === 'N5') {
      const allH = DATA.hiragana.main.flatMap(r => r.chars.filter(c => c.char && c.romaji));
      shuffle(allH).slice(0, 3).forEach(h => {
        const dis = shuffle(allH.filter(x => x.romaji !== h.romaji)).slice(0, 3).map(x => x.romaji);
        pool.push({ type: 'kana', speakText: h.char, qText: h.char, qHint: '這個平假名的讀音是？', answer: h.romaji, options: shuffle([h.romaji, ...dis]) });
      });
      const allK = DATA.katakana.main.flatMap(r => r.chars.filter(c => c.char && c.romaji));
      shuffle(allK).slice(0, 2).forEach(h => {
        const dis = shuffle(allK.filter(x => x.romaji !== h.romaji)).slice(0, 3).map(x => x.romaji);
        pool.push({ type: 'kana', speakText: h.char, qText: h.char, qHint: '這個片假名的讀音是？', answer: h.romaji, options: shuffle([h.romaji, ...dis]) });
      });
    }
    shuffle(vocabPool).slice(0, 7).forEach(w => pool.push(makeVocabQ(w, level, allVocab)));
    shuffle(vocabPool).slice(0, 5).forEach(w => pool.push(makeVocabRevQ(w, level, allVocab)));
    return shuffle(pool).slice(0, 10);
  }

  function generateSRSQuestions() {
    const dueKeys = SRS.dueKeys();
    if (dueKeys.length === 0) return [];
    const allVocab = Object.values(DATA.vocabulary).flat();
    const pool = [];
    shuffle(dueKeys).slice(0, 15).forEach(key => {
      const [level, ...rest] = key.split('_');
      const wordStr = rest.join('_');
      const w = (DATA.vocabulary[level] || []).find(v => v.word === wordStr);
      if (w) pool.push(makeVocabQ(w, level, allVocab, '🧠SRS'));
    });
    return shuffle(pool).slice(0, 10);
  }

  function generateWrongQuestions() {
    const wrong = WrongWords.all();
    if (wrong.length === 0) return [];
    const allVocab = Object.values(DATA.vocabulary).flat();
    const pool = [];
    shuffle(wrong).slice(0, 15).forEach(w => {
      pool.push(makeVocabQ(w, w.level, allVocab, '❌×' + w.count));
    });
    return shuffle(pool).slice(0, 10);
  }

  function renderLevelSelect() {
    const history = Store.get('quiz_history', []);
    const streak  = Store.get('streak', { count: 0, last: '' });
    const srsCount   = SRS.dueCount();
    const wrongCount = WrongWords.count();

    main.innerHTML = `
      <div class="page-hero">
        <h1>🎯 測驗</h1>
        <p>請選擇測驗模式</p>
      </div>
      <div class="container section">
        <div class="quiz-container">

          ${(srsCount > 0 || wrongCount > 0) ? `
          <div class="card" style="padding:24px;margin-bottom:20px;">
            <h3 style="margin-bottom:16px;">⚡ 優先複習</h3>
            <div style="display:grid;gap:12px;">
              ${srsCount > 0 ? `
              <button class="level-select-btn" id="srs-mode-btn" style="--level-color:#e53e3e;">
                <div class="level-select-left">
                  <span class="level-select-emoji">🧠</span>
                  <div>
                    <div class="level-select-title">SRS 間隔複習</div>
                    <div class="level-select-detail">根據遺忘曲線，${srsCount} 個單字到期待複習</div>
                  </div>
                </div>
                <span class="srs-due-badge">${srsCount}</span>
              </button>` : ''}
              ${wrongCount > 0 ? `
              <button class="level-select-btn" id="wrong-mode-btn" style="--level-color:#dd6b20;">
                <div class="level-select-left">
                  <span class="level-select-emoji">📝</span>
                  <div>
                    <div class="level-select-title">錯題練習</div>
                    <div class="level-select-detail">曾答錯的 ${wrongCount} 個單字，針對加強</div>
                  </div>
                </div>
                <span class="srs-due-badge" style="background:#dd6b20;">${wrongCount}</span>
              </button>` : ''}
            </div>
          </div>` : ''}

          <div class="card" style="padding:32px 24px;">
            <h2 style="text-align:center;margin-bottom:8px;">選擇 JLPT 程度</h2>
            <p style="text-align:center;color:var(--text-light);margin-bottom:24px;">選擇後將進行 10 題該程度的單字測驗</p>
            <div style="display:grid;gap:12px;">
              ${Object.entries(LEVEL_INFO).reverse().map(([lvl, info]) => `
                <button class="level-select-btn" data-level="${lvl}" style="--level-color:${info.color};">
                  <div class="level-select-left">
                    <span class="level-select-emoji">${info.emoji}</span>
                    <div>
                      <div class="level-select-title">${badge(lvl)} ${info.desc}</div>
                      <div class="level-select-detail">${info.detail}</div>
                    </div>
                  </div>
                  <span style="font-size:20px;color:${info.color};">→</span>
                </button>
              `).join('')}
            </div>
          </div>

          <div class="card" style="margin-top:24px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
              <h3>📅 測驗歷史</h3>
              <div style="display:flex;gap:8px;">
                ${wrongCount > 0 ? `<button class="btn btn-outline btn-sm" id="clear-wrong">清除錯題</button>` : ''}
                ${history.length > 0 ? `<button class="btn btn-outline btn-sm" id="clear-history">清除紀錄</button>` : ''}
              </div>
            </div>
            ${history.length === 0
              ? `<div class="empty-state"><div class="empty-icon">📝</div><p>還沒有測驗紀錄<br>快來挑戰第一次！</p></div>`
              : history.slice().reverse().slice(0, 8).map(h => {
                  const cls = h.score >= 80 ? 'high' : h.score >= 50 ? 'mid' : 'low';
                  const msg = h.score >= 80 ? '優秀！' : h.score >= 50 ? '不錯！' : '加油！';
                  const tag = h.mode === 'srs' ? '🧠SRS' : h.mode === 'wrong' ? '📝錯題' : (h.level || '');
                  return `<div class="history-item">
                    <div>
                      <div class="history-date">${h.date}${tag ? ' · ' + tag : ''}</div>
                      <div style="font-size:12px;color:var(--text-light);">${msg}</div>
                    </div>
                    <div class="history-score ${cls}">${h.score}% (${h.correct}/${h.total})</div>
                  </div>`;
                }).join('')
            }
            ${history.length > 0 ? `<p style="text-align:center;color:var(--text-light);font-size:13px;margin-top:8px;">🔥 連勝 ${streak.count} 天</p>` : ''}
          </div>
        </div>
      </div>
    `;

    $$('.level-select-btn[data-level]').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedLevel = btn.dataset.level;
        selectedMode = 'level';
        renderStart();
      });
    });
    const srsBtn = $('#srs-mode-btn');
    if (srsBtn) srsBtn.addEventListener('click', () => { selectedMode = 'srs'; selectedLevel = null; renderStart(); });
    const wrongBtn = $('#wrong-mode-btn');
    if (wrongBtn) wrongBtn.addEventListener('click', () => { selectedMode = 'wrong'; selectedLevel = null; renderStart(); });
    const clrWrong = $('#clear-wrong');
    if (clrWrong) clrWrong.addEventListener('click', () => {
      if (confirm('確定要清除所有錯題紀錄嗎？')) { Store.set('wrong_words', {}); renderLevelSelect(); }
    });
    const clrBtn = $('#clear-history');
    if (clrBtn) clrBtn.addEventListener('click', () => {
      if (confirm('確定要清除所有測驗紀錄嗎？')) {
        Store.set('quiz_history', []); Store.set('streak', { count: 0, last: '' }); renderLevelSelect();
      }
    });
  }

  function renderStart() {
    let titleHtml, desc, detail, emoji;
    if (selectedMode === 'srs') {
      titleHtml = '🧠 SRS 間隔複習'; emoji = '🧠';
      desc = '根據遺忘曲線，複習最需要加強的單字';
      detail = `共 ${SRS.dueCount()} 個單字待複習`;
    } else if (selectedMode === 'wrong') {
      titleHtml = '📝 錯題練習'; emoji = '📝';
      desc = '針對曾經答錯的單字加強練習';
      detail = `共 ${WrongWords.count()} 個錯題`;
    } else {
      const info = LEVEL_INFO[selectedLevel];
      titleHtml = `${info.emoji} ${selectedLevel} 測驗`; emoji = info.emoji;
      desc = `${info.desc}・${info.detail}`;
      detail = `${badge(selectedLevel)} ${info.desc}・10 道題目`;
    }
    const streak = Store.get('streak', { count: 0, last: '' });

    main.innerHTML = `
      <div class="page-hero"><h1>🎯 ${titleHtml}</h1><p>${desc}</p></div>
      <div class="container section">
        <div class="quiz-container">
          <div class="card" style="text-align:center;padding:48px 32px;">
            <div style="font-size:80px;margin-bottom:16px;">${emoji}</div>
            <h2 style="margin-bottom:8px;">準備好了嗎？</h2>
            <p style="color:var(--text-light);margin-bottom:8px;">${detail}</p>
            <p style="font-size:20px;margin-bottom:24px;">🔥 連勝 ${streak.count} 天</p>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
              <button class="btn btn-outline" id="back-level">← 重新選擇</button>
              <button class="btn btn-primary" id="start-quiz" style="font-size:16px;padding:14px 32px;">開始測驗 →</button>
            </div>
          </div>
        </div>
      </div>
    `;

    $('#back-level').addEventListener('click', renderLevelSelect);
    $('#start-quiz').addEventListener('click', () => {
      if (selectedMode === 'srs') questions = generateSRSQuestions();
      else if (selectedMode === 'wrong') questions = generateWrongQuestions();
      else questions = generateQuestions(selectedLevel);
      if (questions.length === 0) { alert('沒有可用的題目！'); return; }
      current = 0; correct = 0; answered = false;
      renderQuiz();
    });
  }

  function renderQuiz() {
    const q = questions[current];
    const pct = Math.round(current / questions.length * 100);
    const modeLabel = selectedMode === 'srs' ? '🧠 SRS複習' : selectedMode === 'wrong' ? '📝 錯題練習' : `🎯 ${selectedLevel || ''}`;

    main.innerHTML = `
      <div class="page-hero" style="padding:24px;"><h1>${modeLabel}</h1></div>
      <div class="container section">
        <div class="quiz-container">
          <div class="quiz-header">
            <span style="font-weight:700;">題目 ${current+1} / ${questions.length}</span>
            <span style="color:var(--success);font-weight:700;">✅ ${correct} 正確</span>
          </div>
          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width:${pct}%"></div>
          </div>
          <div class="quiz-question">
            <div class="quiz-type-label">
              ${q.type === 'kana' ? '假名讀音' : q.type === 'vocab_rev' ? '中文→日文' : '日文→中文'}
              ${q.speakText ? `<button class="speak-btn" id="quiz-speak">🔊</button>` : ''}
            </div>
            <div class="quiz-q-text">${q.qText}</div>
            <div class="quiz-q-hint">${q.qHint}</div>
          </div>
          <div class="quiz-options" id="quiz-opts">
            ${q.options.map(opt => `<button class="quiz-option" data-opt="${opt}">${opt}</button>`).join('')}
          </div>
          <div class="quiz-feedback" id="quiz-fb"></div>
          <div style="text-align:center;margin-top:16px;">
            <button class="btn btn-outline" id="quiz-next" style="display:none;">
              ${current + 1 < questions.length ? '下一題 →' : '查看結果 🏆'}
            </button>
          </div>
        </div>
      </div>
    `;

    const speakBtn = $('#quiz-speak');
    if (speakBtn) speakBtn.addEventListener('click', (e) => { e.stopPropagation(); speak(q.speakText); });

    $$('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const chosen = btn.dataset.opt;
        const isCorrect = chosen === q.answer;
        if (isCorrect) correct++;

        // SRS + 錯題本 更新
        if (q.wordKey && q.wordObj) {
          SRS.update(q.wordKey, isCorrect ? 2 : 0);
          if (!isCorrect) WrongWords.add(q.wordObj);
        }

        $$('.quiz-option').forEach(b => {
          b.disabled = true;
          if (b.dataset.opt === q.answer) b.classList.add('correct');
          else if (b === btn && !isCorrect) b.classList.add('wrong');
        });

        const fb = $('#quiz-fb');
        if (isCorrect) {
          fb.innerHTML = `✅ 正確！${q.wordKey ? '<span class="srs-updated-hint">SRS 已更新</span>' : ''}`;
          fb.className = 'quiz-feedback ok';
        } else {
          fb.innerHTML = `❌ 答案是：<strong>${q.answer}</strong>${q.speakText ? `<button class="speak-btn speak-ans" data-text="${q.speakText}">🔊</button>` : ''}`;
          fb.className = 'quiz-feedback ng';
          const speakAns = fb.querySelector('.speak-ans');
          if (speakAns) speakAns.addEventListener('click', () => speak(speakAns.dataset.text));
        }
        $('#quiz-next').style.display = 'inline-flex';
      });
    });

    $('#quiz-next').addEventListener('click', () => {
      current++; answered = false;
      if (current >= questions.length) { saveResult(); renderResult(); }
      else renderQuiz();
    });
  }

  function saveResult() {
    const score = Math.round(correct / questions.length * 100);
    const history = Store.get('quiz_history', []);
    history.push({ date: today(), correct, total: questions.length, score,
      level: selectedLevel, mode: selectedMode !== 'level' ? selectedMode : null });
    Store.set('quiz_history', history);
    const streak = Store.get('streak', { count: 0, last: '' });
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (streak.last === yesterday) Store.set('streak', { count: streak.count + 1, last: today() });
    else if (streak.last !== today()) Store.set('streak', { count: 1, last: today() });
  }

  function renderResult() {
    const score = Math.round(correct / questions.length * 100);
    const streak = Store.get('streak', { count: 0, last: '' });
    const wrongAdded = questions.length - correct;
    let msg, emoji;
    if (score >= 90) { msg = '太棒了！你是日語達人！'; emoji = '🏆'; }
    else if (score >= 70) { msg = '很不錯！繼續努力！'; emoji = '🌟'; }
    else if (score >= 50) { msg = '還不錯，多加練習！'; emoji = '💪'; }
    else { msg = '沒關係，再多複習一下！'; emoji = '📚'; }

    main.innerHTML = `
      <div class="page-hero"><h1>🎯 測驗結果</h1></div>
      <div class="container section">
        <div class="quiz-container">
          <div class="card quiz-result">
            <div style="font-size:64px;margin-bottom:16px;">${emoji}</div>
            <div class="result-score">${score}%</div>
            <div class="result-label">${correct} / ${questions.length} 題正確</div>
            <div class="result-msg">${msg}</div>
            ${wrongAdded > 0 ? `
            <div class="result-stats-row">
              <div class="result-stat-item">
                <span>📝 錯題本新增</span><strong>${wrongAdded} 題</strong>
              </div>
              <div class="result-stat-item">
                <span>🧠 SRS 排程</span><strong>${SRS.dueCount()} 個待複習</strong>
              </div>
            </div>` : `
            <div class="result-stats-row" style="background:var(--success);color:white;">
              <div class="result-stat-item"><span>🎉 全部答對！</span><strong>完美通過</strong></div>
            </div>`}
            <p style="color:var(--gold);font-weight:700;margin:16px 0 24px;">🔥 連勝 ${streak.count} 天</p>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
              <button class="btn btn-primary" id="retry-btn">🔄 再挑戰一次</button>
              <button class="btn btn-outline" id="change-level-btn">切換模式</button>
              <a href="#vocabulary" class="btn btn-outline">📖 複習單字</a>
            </div>
          </div>
        </div>
      </div>
    `;

    $('#retry-btn').addEventListener('click', () => {
      if (selectedMode === 'srs') questions = generateSRSQuestions();
      else if (selectedMode === 'wrong') questions = generateWrongQuestions();
      else questions = generateQuestions(selectedLevel);
      if (questions.length === 0) { renderLevelSelect(); return; }
      current = 0; correct = 0; answered = false;
      renderQuiz();
    });
    $('#change-level-btn').addEventListener('click', renderLevelSelect);
  }

  renderLevelSelect();
});

// =========================================================
// Init
// =========================================================
document.addEventListener('DOMContentLoaded', async () => {
  // Show loading
  $('#main').innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;gap:16px;">
      <div class="loading-spinner"></div>
      <p style="color:var(--text-light);">載入資料中...</p>
    </div>`;

  await loadData();

  // Navbar links
  $$('.nav-link').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const page = a.dataset.page;
      location.hash = page;
    });
  });

  // Hamburger menu
  $('#hamburger').addEventListener('click', () => {
    $('#nav-links').classList.toggle('open');
  });

  // Modal close
  $('#modal-close').addEventListener('click', Modal.hide);
  $('#modal-overlay').addEventListener('click', (e) => {
    if (e.target === $('#modal-overlay')) Modal.hide();
  });

  // Init router
  Router.init();
});
