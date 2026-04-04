// ============================================
// 个人博客 — 交互逻辑
// ============================================

// ---------- 示例数据 ----------
const essays = [
  {
    id: 1,
    title: '春日漫步，拾一缕光',
    date: '2026-03-28',
    tag: '生活',
    excerpt: '三月末的午后，阳光变得温柔起来。走在老街的石板路上，两旁的玉兰不知何时已经开了。那些白色的花瓣，像是被人小心翼翼地搁在枝头，生怕碰碎了这一季的温柔。',
    content: `<p>三月末的午后，阳光变得温柔起来。走在老街的石板路上，两旁的玉兰不知何时已经开了。那些白色的花瓣，像是被人小心翼翼地搁在枝头，生怕碰碎了这一季的温柔。</p>
    <p>转角处有一家旧书店，门口摆着几盆多肉，胖嘟嘟地挤在一起，像极了午睡时孩子们的模样。推门进去，旧书特有的气味扑面而来——那是时间沉淀的味道，带着一点点潮湿和一点点甘甜。</p>
    <blockquote>有些风景，不必匆匆走过。慢下来，才能看见生活藏在缝隙里的诗意。</blockquote>
    <p>我在窗边坐下，翻开一本不知年代的散文集。阳光从窗格子里漏下来，在书页上画出一道道光影。咖啡还冒着热气，时间仿佛就此停住。</p>
    <p>这是春天最好的样子——不张扬，不急切，只是安安静静地，在你不经意时，把万物都唤醒了。</p>`
  },
  {
    id: 2,
    title: '关于独处这件事',
    date: '2026-03-15',
    tag: '随想',
    excerpt: '越来越觉得，独处不是孤独，而是自由。一个人吃饭、看电影、散步，不需要迁就谁的节奏，也不必在意谁的目光。',
    content: `<p>越来越觉得，独处不是孤独，而是自由。一个人吃饭、看电影、散步，不需要迁就谁的节奏，也不必在意谁的目光。</p>
    <p>有人说，人群中的孤独才是真正的孤独。那些热闹散场之后的空虚，远比一个人安静待着要难熬得多。独处的时候，你可以和自己对话，听听内心那些平时被噪音淹没的声音。</p>
    <p>周末的清晨，不设闹钟自然醒来，窗帘缝隙里透进来的光线温温吞吞。泡一壶茶，坐在阳台上发呆，看楼下的老人慢慢走过，看小猫在墙头打盹。</p>
    <blockquote>独处，是与自己和解的最好方式。</blockquote>
    <p>不是所有的时间都要被填满。留白，是生活的一种艺术。就像水墨画里的空白，不是没有内容，而是给了想象力最大的空间。</p>`
  },
  {
    id: 3,
    title: '深夜食堂的烟火气',
    date: '2026-03-02',
    tag: '生活',
    excerpt: '城市的深夜永远不缺光。写字楼里最后熄灯的那个窗口，便利店门口永远亮着的招牌，还有街角那家永远飘着香气的小面馆——那是属于深夜的烟火气。',
    content: `<p>城市的深夜永远不缺光。写字楼里最后熄灯的那个窗口，便利店门口永远亮着的招牌，还有街角那家永远飘着香气的小面馆——那是属于深夜的烟火气。</p>
    <p>老板是个五十多岁的大叔，围裙总是系得歪歪斜斜，但面汤的味道几十年如一。每次加班到很晚，总会拐去他那里，要一碗阳春面，加一个荷包蛋。</p>
    <p>深夜来吃面的人，各怀心事。有刚下夜班的护士，有赶稿的自由撰稿人，有吵完架出来散心的年轻情侣。大家互不相识，却在同一碗热汤面前找到了某种共同的慰藉。</p>
    <p>大叔从不多话，只是在你碗里多加了几片牛肉的时候，朝你笑笑。那种笑，像是说："我懂的，没事，吃完就好了。"</p>
    <blockquote>深夜的食物有一种魔力，它不只填饱胃，还温暖了那些在白天无处安放的情绪。</blockquote>`
  },
  {
    id: 4,
    title: '山间笔记：一次没有计划的旅行',
    date: '2026-02-18',
    tag: '旅行',
    excerpt: '有时候最好的旅行就是没有计划。背上包，随便选一个方向，走到哪里算哪里。这一次我去了一座不知名的山，收获了一段意想不到的风景。',
    content: `<p>有时候最好的旅行就是没有计划。背上包，随便选一个方向，走到哪里算哪里。这一次我去了一座不知名的山，收获了一段意想不到的风景。</p>
    <p>山路不算陡，但足够安静。松针铺满了小径，踩上去软绵绵的，像是大地铺好的地毯。偶尔传来几声鸟鸣，但你分不清它们在哪棵树上——声音从四面八方包裹过来，像是整座山都在说话。</p>
    <p>半山腰有一座小亭子，木头已经被风雨打磨得光滑发亮。我坐下来，打开保温杯，喝了一口带着山间凉意的热茶。山下的村庄炊烟袅袅，像是谁不小心打翻了一幅水墨画。</p>
    <p>下山的时候遇到一个放羊的老人，他问我从哪里来，到哪里去。我说不知道。他笑了，说："不知道才好，走到哪里都是风景。"</p>
    <blockquote>不知道才好，走到哪里都是风景。</blockquote>`
  },
  {
    id: 5,
    title: '写给二十六岁的自己',
    date: '2026-01-28',
    tag: '随想',
    excerpt: '二十六岁了。不再年少，但也远未老去。站在这个不上不下的年纪，回头看看来时的路，再抬头望望前方的方向，心里居然格外平静。',
    content: `<p>二十六岁了。不再年少，但也远未老去。站在这个不上不下的年纪，回头看看来时的路，再抬头望望前方的方向，心里居然格外平静。</p>
    <p>过去的这些年，走了一些弯路，也遇到了一些对的人。曾经以为天大的事，现在回头看不过尔尔；曾经以为微不足道的瞬间，如今却成了最珍贵的记忆。</p>
    <p>学会了一件重要的事：不必讨好所有人。世界那么大，你不可能让每个人都满意，但你至少可以让自己过得舒服一点。</p>
    <p>二十六岁的愿望很简单，吃好睡好，多看书，少生气，对喜欢的事保持热情，对不喜欢的事学会说不。</p>
    <blockquote>不急，慢慢来。人生不是百米冲刺，走走停停也是一种节奏。</blockquote>`
  },
  {
    id: 6,
    title: '冬日的第一杯热巧克力',
    date: '2026-01-10',
    tag: '生活',
    excerpt: '冬天真正开始的标志不是气温骤降，也不是第一场雪，而是你终于忍不住走进咖啡店，点了一杯热巧克力。',
    content: `<p>冬天真正开始的标志不是气温骤降，也不是第一场雪，而是你终于忍不住走进咖啡店，点了一杯热巧克力。</p>
    <p>拿铁和美式是日常的工作燃料，但热巧克力不一样，它是冬天的仪式感。厚厚的奶泡上面撒着可可粉，杯壁上挂着巧克力的纹路，第一口喝下去，甜蜜从舌尖一路暖到心里。</p>
    <p>窗外灰蒙蒙的天色，路上行人缩着脖子匆匆走过。你坐在暖气充足的角落里，双手捧着热乎乎的杯子，觉得这个冬天，好像也没那么难熬。</p>
    <p>有些快乐就是这么简单。不需要昂贵的礼物，不需要盛大的仪式，一杯热巧克力，足以抵御整个冬天的寒意。</p>
    <blockquote>生活的甜，往往就藏在这些微小的瞬间里。</blockquote>`
  }
];

const galleryImages = [
  { id: 1, src: 'images/photo1.jpg', title: '春日樱花', description: '四月的樱花道，花瓣随风飘落' },
  { id: 2, src: 'images/photo2.jpg', title: '山间晨雾', description: '清晨的山谷，雾气缭绕如仙境' },
  { id: 3, src: 'images/photo3.jpg', title: '古巷黄昏', description: '夕阳下的老巷子，时光仿佛凝固' },
  { id: 4, src: 'images/photo4.jpg', title: '静湖倒影', description: '无风时的湖面，天地合为一体' },
  { id: 5, src: 'images/photo5.jpg', title: '雨后书店', description: '雨后的独立书店，空气里都是书香' },
  { id: 6, src: 'images/photo6.jpg', title: '窗台绿植', description: '阳光洒在窗台的绿萝上，生机盎然' },
  { id: 7, src: 'images/photo7.jpg', title: '夜市灯火', description: '小城夜市的灯火通明，烟火气十足' },
  { id: 8, src: 'images/photo8.jpg', title: '田野日落', description: '金色的稻田上，太阳缓缓沉入地平线' },
];

// ---------- Theme Toggle ----------
function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.querySelector('.theme-toggle');
  if (btn) {
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-label', theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式');
  }
}

// ---------- Mobile Nav ----------
function initMobileNav() {
  const btn = document.querySelector('.nav-menu-btn');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    links.classList.toggle('open');
  });

  // Close on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('active');
      links.classList.remove('open');
    });
  });
}

// ---------- Back to Top ----------
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- Fade In Animations ----------
function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Stagger children
  document.querySelectorAll('.stagger-children').forEach(container => {
    const children = container.children;
    const cObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Array.from(children).forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 80);
          });
          cObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cObserver.observe(container);
  });
}

// ---------- Active Nav Link ----------
function setActiveNav() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === filename || (filename === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ---------- Home Page ----------
function renderHomePage() {
  // Recent essays
  const essayContainer = document.getElementById('recent-essays');
  if (essayContainer) {
    const recent = essays.slice(0, 3);
    essayContainer.innerHTML = recent.map(e => `
      <a class="essay-card" href="essay-detail.html?id=${e.id}">
        <div class="essay-card-meta">
          <span class="essay-card-date">${e.date}</span>
          <span class="essay-card-tag">${e.tag}</span>
        </div>
        <h3 class="essay-card-title">${e.title}</h3>
        <p class="essay-card-excerpt">${e.excerpt}</p>
      </a>
    `).join('');
  }

  // Recent gallery
  const galleryContainer = document.getElementById('recent-gallery');
  if (galleryContainer) {
    const recent = galleryImages.slice(0, 3);
    galleryContainer.innerHTML = recent.map(img => `
      <div class="gallery-item" onclick="openLightbox(${img.id - 1})">
        <img src="${img.src}" alt="${img.title}" loading="lazy">
        <div class="gallery-item-overlay">
          <p>${img.title}</p>
        </div>
      </div>
    `).join('');
  }
}

// ---------- Essays Page ----------
function renderEssaysPage() {
  const container = document.getElementById('essays-list');
  const tagsContainer = document.getElementById('tags-filter');
  if (!container) return;

  // Extract unique tags
  const tags = [...new Set(essays.map(e => e.tag))];

  if (tagsContainer) {
    tagsContainer.innerHTML = `
      <button class="tag-btn active" data-tag="all">全部</button>
      ${tags.map(t => `<button class="tag-btn" data-tag="${t}">${t}</button>`).join('')}
    `;

    tagsContainer.addEventListener('click', (e) => {
      if (!e.target.classList.contains('tag-btn')) return;
      tagsContainer.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const tag = e.target.dataset.tag;
      renderEssayList(container, tag === 'all' ? essays : essays.filter(es => es.tag === tag));
    });
  }

  renderEssayList(container, essays);
}

function renderEssayList(container, list) {
  container.innerHTML = list.map(e => `
    <a class="essay-card" href="essay-detail.html?id=${e.id}">
      <div class="essay-card-meta">
        <span class="essay-card-date">${e.date}</span>
        <span class="essay-card-tag">${e.tag}</span>
      </div>
      <h3 class="essay-card-title">${e.title}</h3>
      <p class="essay-card-excerpt">${e.excerpt}</p>
    </a>
  `).join('');
}

// ---------- Essay Detail Page ----------
function renderEssayDetail() {
  const container = document.getElementById('essay-detail');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const essay = essays.find(e => e.id === id);

  if (!essay) {
    container.innerHTML = '<p style="text-align:center; padding: 60px 0;">文章不存在</p>';
    return;
  }

  // Update page title
  document.title = `${essay.title} — 清风小筑`;

  // Find prev/next
  const idx = essays.findIndex(e => e.id === id);
  const prev = idx < essays.length - 1 ? essays[idx + 1] : null;
  const next = idx > 0 ? essays[idx - 1] : null;

  container.innerHTML = `
    <div class="essay-detail-header fade-in">
      <h1>${essay.title}</h1>
      <div class="essay-detail-meta">
        <span>${essay.date}</span>
        <span>·</span>
        <span>${essay.tag}</span>
      </div>
    </div>
    <div class="essay-detail-body fade-in">
      ${essay.content}
    </div>
    <div class="essay-nav fade-in">
      ${prev ? `<a href="essay-detail.html?id=${prev.id}">← ${prev.title}</a>` : '<span></span>'}
      ${next ? `<a href="essay-detail.html?id=${next.id}">${next.title} →</a>` : '<span></span>'}
    </div>
  `;

  // Reading progress bar
  initReadingProgress();
  initFadeIn();
}

// ---------- Reading Progress ----------
function initReadingProgress() {
  const bar = document.querySelector('.reading-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + '%';
  });
}

// ---------- Gallery Page ----------
function renderGalleryPage() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  container.innerHTML = galleryImages.map((img, i) => `
    <div class="gallery-item" onclick="openLightbox(${i})">
      <img src="${img.src}" alt="${img.title}" loading="lazy">
      <div class="gallery-item-overlay">
        <p>${img.title}</p>
      </div>
    </div>
  `).join('');
}

// ---------- Lightbox ----------
let currentLightboxIndex = 0;
const lightboxImages = galleryImages;

function openLightbox(index) {
  currentLightboxIndex = index;
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  updateLightboxContent();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function prevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightboxContent();
}

function nextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const img = lightboxImages[currentLightboxIndex];
  const lightboxImg = document.querySelector('.lightbox-content img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  if (lightboxImg) lightboxImg.src = img.src;
  if (lightboxCaption) lightboxCaption.textContent = `${img.title} — ${img.description}`;
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  // Close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
  });
}

// ---------- Typewriter Effect & Left Side Media ----------
let typewriterTimeout = null;

function initTypewriter() {
  const textEl = document.getElementById('typewriter-text');
  const linkEl = document.getElementById('typewriter-link');
  const imgEl = document.getElementById('typewriter-img');
  if (!textEl || !linkEl || !imgEl || essays.length === 0) return;

  let usedIndices = [];
  let prevImgIdx = -1;

  function getRandomEssay() {
    if (usedIndices.length >= essays.length) usedIndices = [];
    let idx;
    do {
      idx = Math.floor(Math.random() * essays.length);
    } while (usedIndices.includes(idx));
    usedIndices.push(idx);
    return essays[idx];
  }

  function getRandomImage() {
    let idx;
    do {
      idx = Math.floor(Math.random() * galleryImages.length);
    } while (idx === prevImgIdx && galleryImages.length > 1);
    prevImgIdx = idx;
    return galleryImages[idx];
  }

  function typeText(essay, imgData, callback) {
    const text = essay.excerpt;
    textEl.textContent = '';
    linkEl.classList.remove('show');
    linkEl.href = `essay-detail.html?id=${essay.id}`;
    
    // Update image
    imgEl.style.opacity = 0;
    setTimeout(() => {
      imgEl.src = imgData.src;
      imgEl.alt = imgData.title;
      imgEl.style.opacity = 1;
    }, 400);

    let i = 0;

    function typeChar() {
      if (i < text.length) {
        textEl.textContent += text[i];
        i++;
        const baseSpeed = 80;
        const variance = Math.random() * 60 - 30;
        const char = text[i - 1];
        const isPunctuation = '，。！？、；：'.includes(char);
        const delay = isPunctuation ? baseSpeed + 200 : baseSpeed + variance;
        typewriterTimeout = setTimeout(typeChar, delay);
      } else {
        linkEl.classList.add('show');
        typewriterTimeout = setTimeout(() => {
          eraseText(callback);
        }, 6000);
      }
    }

    typeChar();
  }

  function eraseText(callback) {
    const text = textEl.textContent;
    let i = text.length;
    linkEl.classList.remove('show');

    function eraseChar() {
      if (i > 0) {
        i--;
        textEl.textContent = text.substring(0, i);
        typewriterTimeout = setTimeout(eraseChar, 25);
      } else {
        typewriterTimeout = setTimeout(callback, 500);
      }
    }

    eraseChar();
  }

  function cycle() {
    const essay = getRandomEssay();
    const image = getRandomImage();
    typeText(essay, image, cycle);
  }

  setTimeout(cycle, 800);
}

// ---------- Music Data ----------
const musicTracks = [
  {
    id: 1,
    title: '晴天',
    artist: '周杰伦',
    album: '叶惠美',
    genre: '华语',
    duration: '4:29',
    src: '',
    emoji: '☀️',
    comment: '那一段关于夏天的记忆，永远停留在某个蝉鸣的午后。'
  },
  {
    id: 2,
    title: 'Clair de Lune',
    artist: 'Claude Debussy',
    album: 'Suite bergamasque',
    genre: '古典',
    duration: '5:02',
    src: '',
    emoji: '🌙',
    comment: '月光倾泻在琴键上，世界安静得只剩下呼吸。'
  },
  {
    id: 3,
    title: 'The Night We Met',
    artist: 'Lord Huron',
    album: 'Strange Trails',
    genre: '民谣',
    duration: '3:28',
    src: '',
    emoji: '🌃',
    comment: '有些歌只能在深夜听，因为它们懂得黑暗里的柔软。'
  },
  {
    id: 4,
    title: '盛夏的果实',
    artist: '莫文蔚',
    album: '就是莫文蔚',
    genre: '华语',
    duration: '4:15',
    src: '',
    emoji: '🍑',
    comment: '成长是一件漫长的事，有些果实需要整个夏天才能成熟。'
  },
  {
    id: 5,
    title: 'River Flows in You',
    artist: 'Yiruma',
    album: 'First Love',
    genre: '轻音乐',
    duration: '3:35',
    src: '',
    emoji: '🌊',
    comment: '像是一条平静的河，带着你慢慢流向远方。'
  },
  {
    id: 6,
    title: '斑马，斑马',
    artist: '宋冬野',
    album: '安和桥北',
    genre: '民谣',
    duration: '4:58',
    src: '',
    emoji: '🦓',
    comment: '背起行囊上路的那个清晨，这首歌一直在耳边。'
  },
  {
    id: 7,
    title: 'Comptine d\'un autre été',
    artist: 'Yann Tiersen',
    album: 'Amélie OST',
    genre: '轻音乐',
    duration: '2:22',
    src: '',
    emoji: '🎠',
    comment: '艾米丽的世界里，每一个普通的下午都藏着小小的奇迹。'
  },
  {
    id: 8,
    title: '漂洋过海来看你',
    artist: '金智娟',
    album: '爱上一个不回家的人',
    genre: '华语',
    duration: '4:01',
    src: '',
    emoji: '🚢',
    comment: '有时候爱一个人，就是心甘情愿跋山涉水。'
  },
  {
    id: 9,
    title: 'Experience',
    artist: 'Ludovico Einaudi',
    album: 'In a Time Lapse',
    genre: '古典',
    duration: '5:14',
    src: '',
    emoji: '✨',
    comment: '合上眼睛，人生的碎片开始在琴声里重新拼合。'
  },
  {
    id: 10,
    title: '平凡之路',
    artist: '朴树',
    album: '猎户星座',
    genre: '华语',
    duration: '5:47',
    src: '',
    emoji: '🛤️',
    comment: '跌跌撞撞走到现在，才明白平凡本身就是一种答案。'
  }
];

// ---------- Music Player ----------
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isLoop = false;
let audioEl = null;
let currentGenreFilter = 'all';
let filteredTracks = [...musicTracks];

function initMusicPage() {
  audioEl = document.getElementById('audio-player');
  if (!audioEl) return;

  renderGenreTabs();
  renderTrackList();
  loadTrack(0);

  // Audio event listeners
  audioEl.addEventListener('timeupdate', updateProgress);
  audioEl.addEventListener('ended', onTrackEnded);
  audioEl.addEventListener('loadedmetadata', updateDuration);

  // Progress bar click
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.addEventListener('click', (e) => {
      if (!audioEl.duration) return;
      const rect = progressBar.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      audioEl.currentTime = ratio * audioEl.duration;
    });
  }

  // Volume
  const volSlider = document.getElementById('volume-slider');
  if (volSlider) {
    audioEl.volume = volSlider.value / 100;
    updateVolumeSliderStyle(volSlider.value);
  }
}

function renderGenreTabs() {
  const container = document.getElementById('genre-tabs');
  if (!container) return;
  const genres = ['all', ...new Set(musicTracks.map(t => t.genre))];
  container.innerHTML = genres.map(g => `
    <button class="tag-btn${g === currentGenreFilter ? ' active' : ''}" data-genre="${g}" onclick="filterByGenre('${g}')">
      ${g === 'all' ? '全部' : g}
    </button>
  `).join('');
}

function filterByGenre(genre) {
  currentGenreFilter = genre;
  filteredTracks = genre === 'all' ? [...musicTracks] : musicTracks.filter(t => t.genre === genre);
  renderGenreTabs();
  renderTrackList();
}

function renderTrackList() {
  const container = document.getElementById('track-list');
  if (!container) return;

  container.innerHTML = filteredTracks.map((track, i) => {
    const isActive = track.id === musicTracks[currentTrackIndex].id;
    return `
    <div class="music-track-item${isActive ? ' active' : ''}${isActive && isPlaying ? ' playing' : ''}"
         onclick="playTrackById(${track.id})" data-track-id="${track.id}">
      <div class="music-track-num">
        <span class="music-track-num-text">${i + 1}</span>
        <div class="music-bars">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
      <div class="music-track-cover">${track.emoji}</div>
      <div class="music-track-body">
        <div class="music-track-title">${track.title}</div>
        <div class="music-track-sub">${track.artist} · ${track.album}</div>
      </div>
      <span class="music-track-genre">${track.genre}</span>
      <span class="music-track-duration">${track.duration}</span>
    </div>
  `}).join('');
}

function loadTrack(index) {
  currentTrackIndex = index;
  const track = musicTracks[index];

  const titleEl = document.getElementById('player-title');
  const artistEl = document.getElementById('player-artist');
  const commentEl = document.getElementById('player-comment');

  if (titleEl) titleEl.textContent = track.title;
  if (artistEl) artistEl.textContent = `${track.artist} · ${track.album}`;
  if (commentEl) commentEl.textContent = track.comment || '';

  // Update cover emoji hint via vinyl color
  const vinyl = document.getElementById('music-vinyl');
  if (vinyl) vinyl.classList.toggle('playing', isPlaying);

  // Set audio src
  if (audioEl) {
    audioEl.src = track.src || '';
    if (isPlaying && track.src) {
      audioEl.play().catch(() => {});
    } else {
      audioEl.pause();
    }
  }

  // Reset progress
  const fill = document.getElementById('progress-fill');
  const thumb = document.getElementById('progress-thumb');
  const currentEl = document.getElementById('player-current');
  if (fill) fill.style.width = '0%';
  if (thumb) thumb.style.left = '0%';
  if (currentEl) currentEl.textContent = '0:00';

  // Update duration display from data
  const durationEl = document.getElementById('player-duration');
  if (durationEl) durationEl.textContent = track.duration;

  // Update track list highlight
  renderTrackList();
}

function playTrackById(id) {
  const idx = musicTracks.findIndex(t => t.id === id);
  if (idx === -1) return;
  isPlaying = true;
  loadTrack(idx);
  updatePlayBtn();
  const vinyl = document.getElementById('music-vinyl');
  if (vinyl) vinyl.classList.add('playing');
}

function togglePlay() {
  if (!audioEl) return;

  const track = musicTracks[currentTrackIndex];

  if (!track.src) {
    // No audio file — show tip and still animate
    isPlaying = !isPlaying;
    updatePlayBtn();
    const vinyl = document.getElementById('music-vinyl');
    if (vinyl) vinyl.classList.toggle('playing', isPlaying);
    renderTrackList();
    showNoAudioTip();
    return;
  }

  if (isPlaying) {
    audioEl.pause();
    isPlaying = false;
  } else {
    audioEl.play().catch(() => {});
    isPlaying = true;
  }
  updatePlayBtn();
  const vinyl = document.getElementById('music-vinyl');
  if (vinyl) vinyl.classList.toggle('playing', isPlaying);
  renderTrackList();
}

function showNoAudioTip() {
  let tip = document.querySelector('.music-no-audio-tip');
  if (!tip) {
    tip = document.createElement('p');
    tip.className = 'music-no-audio-tip';
    const card = document.getElementById('music-player-card');
    if (card) card.after(tip);
  }
  tip.textContent = '💡 这首歌暂未配置音频文件，可在 main.js 的 musicTracks 数据中填入 src 路径来启用播放功能。';
  tip.style.display = 'block';
  clearTimeout(tip._timer);
  tip._timer = setTimeout(() => { tip.style.display = 'none'; }, 5000);
}

function updatePlayBtn() {
  const playIcon = document.querySelector('.icon-play');
  const pauseIcon = document.querySelector('.icon-pause');
  if (playIcon) playIcon.style.display = isPlaying ? 'none' : 'block';
  if (pauseIcon) pauseIcon.style.display = isPlaying ? 'block' : 'none';
}

function prevTrack() {
  let idx = currentTrackIndex - 1;
  if (idx < 0) idx = musicTracks.length - 1;
  isPlaying = true;
  loadTrack(idx);
  updatePlayBtn();
}

function nextTrack() {
  let idx;
  if (isShuffle) {
    do { idx = Math.floor(Math.random() * musicTracks.length); } while (idx === currentTrackIndex && musicTracks.length > 1);
  } else {
    idx = (currentTrackIndex + 1) % musicTracks.length;
  }
  isPlaying = true;
  loadTrack(idx);
  updatePlayBtn();
}

function onTrackEnded() {
  if (isLoop) {
    audioEl.currentTime = 0;
    audioEl.play().catch(() => {});
  } else {
    nextTrack();
  }
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  const btn = document.getElementById('btn-shuffle');
  if (btn) btn.classList.toggle('active', isShuffle);
}

function toggleLoop() {
  isLoop = !isLoop;
  const btn = document.getElementById('btn-loop');
  if (btn) btn.classList.toggle('active', isLoop);
  if (audioEl) audioEl.loop = isLoop;
}

function setVolume(val) {
  if (audioEl) audioEl.volume = val / 100;
  updateVolumeSliderStyle(val);
}

function updateVolumeSliderStyle(val) {
  const slider = document.getElementById('volume-slider');
  if (slider) {
    slider.style.background = `linear-gradient(to right, var(--accent) ${val}%, var(--border) ${val}%)`;
  }
}

function updateProgress() {
  if (!audioEl || !audioEl.duration) return;
  const ratio = audioEl.currentTime / audioEl.duration;
  const pct = (ratio * 100).toFixed(2) + '%';
  const fill = document.getElementById('progress-fill');
  const thumb = document.getElementById('progress-thumb');
  const currentEl = document.getElementById('player-current');
  if (fill) fill.style.width = pct;
  if (thumb) thumb.style.left = pct;
  if (currentEl) currentEl.textContent = formatTime(audioEl.currentTime);
}

function updateDuration() {
  if (!audioEl) return;
  const durationEl = document.getElementById('player-duration');
  if (durationEl) durationEl.textContent = formatTime(audioEl.duration);
}

function formatTime(sec) {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// ---------- Initialize ----------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initBackToTop();
  setActiveNav();
  initFadeIn();

  // Page-specific init
  const page = document.body.dataset.page;
  switch (page) {
    case 'home':
      renderHomePage();
      initTypewriter();
      break;
    case 'essays':
      renderEssaysPage();
      break;
    case 'essay-detail':
      renderEssayDetail();
      break;
    case 'gallery':
      renderGalleryPage();
      initLightbox();
      break;
    case 'music':
      initMusicPage();
      break;
  }
});

