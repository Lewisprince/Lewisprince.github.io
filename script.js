// ===== i18n Translations =====
const translations = {
    en: {
        'nav.skip': 'Skip to content',
        'hero.scholarNote': 'For my full publication list and citations, visit Google Scholar.',
        'hero.focus': 'Research focus',
        'exp.current': 'Current',
        'exp.currentDate': '2026.05 — Present',
        'services.note': 'Including assisting with reviews',
        'footer.top': 'Back to top',
        'nav.about': 'About',
        'nav.research': 'Research',
        'nav.awards': 'Awards',
        'nav.experience': 'Experience',
        'nav.services': 'Services',
        'hero.name': 'Chenxu Liu <span class="name-cn">刘宸绪</span>',
        'hero.subtitle': 'Ph.D. (Computer Software and Theory)',
        'hero.workplace': '<a href="https://hunyuan.tencent.com/" target="_blank" rel="noopener noreferrer">Tencent Hunyuan</a>, Researcher',
        'hero.affiliation': 'Graduated from: <a href="https://www.pku.edu.cn" target="_blank" rel="noopener noreferrer">Peking University</a>, <a href="https://cs.pku.edu.cn/" target="_blank" rel="noopener noreferrer">School of Computer Science</a>',
        'hero.advisor': 'Advisor: <a href="https://taoxiease.github.io" target="_blank" rel="noopener noreferrer">Prof. Tao Xie</a> <span class="advisor-note">(Member of Academia Europaea, ACM/IEEE/AAAS/CCF/CIE Fellow)</span>',
        'hero.collaborators': 'Co-advisors: <a href="https://profiles.utdallas.edu/wei.yang" target="_blank" rel="noopener noreferrer">Prof. Wei Yang</a>, <a href="https://faculty.pku.edu.cn/zhangying" target="_blank" rel="noopener noreferrer">Prof. Ying Zhang</a>',
        'research.title': 'Research Interests',
        'research.second': 'My current and future work focuses on <strong>Code Agent and GUI Agent</strong>, with the goal of evaluating and building practical, reliable agents for real-world use. My work includes open-ended evaluation of static and interactive front-end capabilities; evaluation of user agents in realistic usage scenarios; reliable, secure, and interpretable agents; and agents that connect GUI and CLI and bridge cloud and edge environments.',
        'research.intro': 'My Ph.D. research focuses on <strong>quality assurance and testing of graphical user interfaces (GUI)</strong>, especially web GUI testing. I integrate traditional algorithms with deep learning models, large language models, and GUI agents to improve testing effectiveness.',
        'awards.title': 'Selected Awards & Honors',
        'awards.honors': 'Honors',
        'awards.h1': 'May Fourth Medal, Northeastern University',
        'awards.h2': "President's Medal, Northeastern University",
        'awards.h3': 'Merit Student, Peking University',
        'awards.h4': 'Outstanding League Cadre, Peking University',
        'awards.scholarships': 'Scholarships',
        'awards.s1': 'National Scholarship (three times)',
        'awards.s2': 'Baosteel Outstanding Student Scholarship',
        'awards.s3': 'First-Class Scholarship, Peking University',
        'awards.competitions': 'Competitions',
        'awards.c1': 'National English Competition for College Students, <strong>Grand Prize</strong>',
        'awards.c2': 'Mathematical Contest in Modeling (MCM/ICM), <strong>Meritorious Winner</strong>',
        'awards.c3': '"Challenge Cup" May Fourth Youth Science Award, <strong>Grand Prize</strong> (sole recipient in the School of Computer Science)',
        'exp.title': 'Experience',
        'exp.e1.name': 'ByteDance',
        'exp.e1.role': 'Product & R&D Engineering Architecture - AI Product Manager',
        'exp.e2.name': 'Beijing Shuleader',
        'exp.e2.role': 'Student Researcher',
        'exp.e3.name': 'Alibaba (Taobao)',
        'exp.e3.role': 'Research Intern - Test Development Engineer',
        'exp.e4.name': 'Peking University, School of Computer Science - Party Building Center',
        'exp.e4.role': 'Student President',
        'exp.e5.name': 'Northeastern University - Student Science & Technology Association',
        'exp.e5.role': 'Vice President & Director of Publicity Center',
        'exp.e6.name': 'Tencent Hunyuan',
        'exp.e6.role': 'Researcher',
        'services.title': 'Professional Services',
        'services.reviewer': 'Conference Reviewer',
        'services.journal': 'Journal Reviewer',
        'edu.title': 'Education',
        'edu.pku.name': 'Peking University',
        'edu.pku.degree': 'Ph.D. in Computer Software and Theory',
        'edu.pku.date': '2021.09 - 2026.06 (Expected)',
        'edu.neu.name': 'Northeastern University',
        'edu.neu.degree': 'B.E. in Software Engineering',
        'footer': '&copy; 2026 Chenxu Liu. Last updated: September 2026.'
    },
    zh: {
        'nav.skip': '跳转到正文',
        'hero.scholarNote': '完整论文列表与引用信息，请前往 Google Scholar 查看。',
        'hero.focus': '研究领域',
        'exp.current': '目前',
        'exp.currentDate': '2026.05 — 至今',
        'services.note': '含协助审稿',
        'footer.top': '返回顶部',
        'nav.about': '关于',
        'nav.research': '研究方向',
        'nav.awards': '荣誉奖项',
        'nav.experience': '工作经历',
        'nav.services': '学术服务',
        'hero.name': '刘宸绪 <span class="name-cn">Chenxu Liu</span>',
        'hero.subtitle': '计算机软件与理论 博士',
        'hero.workplace': '<a href="https://hunyuan.tencent.com/" target="_blank" rel="noopener noreferrer">腾讯混元团队</a>, 研究员',
        'hero.affiliation': '毕业于：<a href="https://www.pku.edu.cn" target="_blank" rel="noopener noreferrer">北京大学</a>, <a href="https://cs.pku.edu.cn/" target="_blank" rel="noopener noreferrer">计算机学院</a>',
        'hero.advisor': '导师：<a href="https://taoxiease.github.io" target="_blank" rel="noopener noreferrer">谢涛 教授</a> <span class="advisor-note">（欧洲科学院院士，ACM/IEEE/AAAS/CCF/CIE Fellow）</span>',
        'hero.collaborators': '合作导师：<a href="https://profiles.utdallas.edu/wei.yang" target="_blank" rel="noopener noreferrer">杨威 教授</a>、<a href="https://faculty.pku.edu.cn/zhangying" target="_blank" rel="noopener noreferrer">张颖 教授</a>',
        'research.title': '研究方向',
        'research.second': '我近期与未来的工作围绕<strong>Code Agent 和 GUI Agent</strong>展开，面向真实使用场景，评测与构建实用、可靠的智能体。研究内容包括模型前端能力的开放式评测，涵盖静态与交互式场景；贴合真实使用场景的用户智能体评测；高可信、高安全性、可解释的智能体；以及结合 GUI 与 CLI、融合云端与终端的智能体。',
        'research.intro': '我博士期间的研究聚焦于<strong>图形用户界面（GUI）的质量保障与测试</strong>，尤其是 Web GUI 测试。我将传统算法与深度学习模型、大语言模型和 GUI 智能体相结合，以提升测试效果。',
        'awards.title': '部分荣誉奖项',
        'awards.honors': '荣誉称号',
        'awards.h1': '五四奖章，东北大学',
        'awards.h2': '校长奖章，东北大学',
        'awards.h3': '三好学生，北京大学',
        'awards.h4': '优秀团干部，北京大学',
        'awards.scholarships': '奖学金',
        'awards.s1': '国家奖学金 (三次)',
        'awards.s2': '宝钢优秀学生奖学金',
        'awards.s3': '一等奖学金，北京大学',
        'awards.competitions': '竞赛获奖',
        'awards.c1': '全国大学生英语竞赛 <strong>特等奖</strong>',
        'awards.c2': '美国大学生数学建模竞赛（MCM/ICM）<strong>Meritorious Winner</strong>',
        'awards.c3': '“挑战杯”五四青年科学奖<strong>特等奖</strong>（计算机学院唯一）',
        'exp.title': '工作经历',
        'exp.e1.name': '字节跳动',
        'exp.e1.role': '产品与研发工程架构 - AI 产品',
        'exp.e2.name': '北京数立得科技有限公司',
        'exp.e2.role': '学生研究员',
        'exp.e3.name': '阿里巴巴（手淘）',
        'exp.e3.role': '研究实习生 - 测试开发工程师',
        'exp.e4.name': '北京大学 计算机学院党建工作中心',
        'exp.e4.role': '学生主任',
        'exp.e5.name': '东北大学 校学生科学技术协会',
        'exp.e5.role': '副主席兼宣传中心主任',
        'exp.e6.name': '腾讯混元团队',
        'exp.e6.role': '研究员',
        'services.title': '学术服务',
        'services.reviewer': '会议审稿人',
        'services.journal': '期刊审稿人',
        'edu.title': '教育背景',
        'edu.pku.name': '北京大学',
        'edu.pku.degree': '计算机软件与理论 理学博士',
        'edu.pku.date': '2021.09 - 2026.06',
        'edu.neu.name': '东北大学',
        'edu.neu.degree': '软件工程 工学学士',
        'footer': '&copy; 2026 刘宸绪 最后更新：2026年9月'
    }
};

// Keep the static English page usable even when browser storage is unavailable.
let currentLang = 'en';
try {
    const savedLanguage = localStorage.getItem('lang');
    if (Object.hasOwn(translations, savedLanguage)) currentLang = savedLanguage;
} catch { /* Language switching still works without persistence. */ }

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const langToggle = document.getElementById('lang-toggle');

function updateMenuLabel() {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-label', currentLang === 'zh'
        ? (open ? '关闭导航' : '展开导航')
        : (open ? 'Close navigation' : 'Open navigation'));
}

function setLanguage(lang) {
    if (!Object.hasOwn(translations, lang)) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch { /* Storage is optional. */ }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = translations[lang][el.dataset.i18n];
        if (value) el.innerHTML = value;
    });
    document.querySelectorAll('.lang-label').forEach(label => {
        label.style.display = label.dataset.lang === lang ? 'inline' : 'none';
    });
    langToggle.setAttribute('aria-label', lang === 'en' ? '切换到中文' : 'Switch to English');
    langToggle.title = lang === 'en' ? '切换到中文' : 'Switch to English';
    updateMenuLabel();
}

setLanguage(currentLang);
langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'zh' : 'en');
    updateNavigation();
});

function setMenuOpen(open) {
    navMenu.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', String(open));
    updateMenuLabel();
}
navToggle.addEventListener('click', () => setMenuOpen(navToggle.getAttribute('aria-expanded') !== 'true'));
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        navToggle.focus();
    }
});
document.addEventListener('click', event => {
    if (!event.target.closest('.navbar')) setMenuOpen(false);
});
const mobileViewport = window.matchMedia('(max-width: 820px)');
mobileViewport.addEventListener('change', () => setMenuOpen(false));

const navbar = document.getElementById('navbar');
const sections = [...document.querySelectorAll('main section[id], main header[id]')];
const navLinks = [...document.querySelectorAll('.nav-menu a[href^="#"]')];
let scrollPending = false;

function updateNavigation() {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
    const offset = navbar.offsetHeight + 48;
    const currentSection = sections.filter(section => section.getBoundingClientRect().top <= offset).pop();
    navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${currentSection?.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
    });
    scrollPending = false;
}
window.addEventListener('scroll', () => {
    if (!scrollPending) {
        scrollPending = true;
        requestAnimationFrame(updateNavigation);
    }
}, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();
