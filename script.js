// ===== i18n Translations =====
const translations = {
    en: {
        'nav.logo': 'Chenxu Liu',
        'nav.about': 'About',
        'nav.research': 'Research Interests',
        'nav.publications': 'Publications',
        'nav.awards': 'Awards',
        'nav.experience': 'Experience',
        'hero.name': 'Chenxu Liu <span class="name-cn">刘宸绪</span>',
        'hero.subtitle': 'Ph.D. (Computer Software and Theory)',
        'hero.workplace': '<a href="https://hunyuan.tencent.com/" target="_blank">Tencent Hunyuan</a>, Researcher',
        'hero.affiliation': 'Graduated from: <a href="https://www.pku.edu.cn" target="_blank">Peking University</a>, <a href="https://cs.pku.edu.cn/" target="_blank">School of Computer Science</a>',
        // 'hero.graduation': "Expected graduation: June 2026 (I'm on the Job Market!)",
        'hero.advisor': 'Advisor: <a href="https://taoxiease.github.io" target="_blank">Prof. Tao Xie</a> <span class="advisor-note">(Member of Academia Europaea, ACM/IEEE/AAAS/CCF/CIE Fellow)</span>',
        'hero.collaborators': 'Co-advisors: <a href="https://profiles.utdallas.edu/wei.yang" target="_blank">Prof. Wei Yang</a>, <a href="https://faculty.pku.edu.cn/zhangying" target="_blank">Prof. Ying Zhang</a>',
        'research.title': 'Research Interests',
        'research.intro': 'My Ph.D. research topics focus on <strong>quality assurance and testing of graphical user interfaces (GUI)</strong>, especially web GUI testing. I integrate traditional algorithms with deep learning models, large language models, and GUI agents to improve testing effectiveness.',
        'research.second': 'My recent and future work focuses on <strong>Code agent and GUI agent</strong>. My work includes, but is not limited to: 1. Evaluation of front-end capabilities (static & interactive); 2. Evaluation of user agents under realistic usage scenarios; 3. Agents that are highly reliable, secure, and interpretable; 4. Agents that integrate GUI and CLI, as well as agents that combine cloud and edge environments.',
        'research.card1.title': 'State Abstraction',
        'research.card1.desc': 'Designed structural merging algorithms and contrastive learning models to precisely cluster pages with duplicate functionalities, significantly reducing redundant exploration and improving test coverage.',
        'research.card2.title': 'Exploration Strategy',
        'research.card2.desc': 'Combined reinforcement learning for fast exploration with LLM-powered analysis to identify uncovered functionalities, then leveraged GUI agents for targeted coverage of residual code.',
        'research.card3.title': 'Test Reduction',
        'research.card3.desc': 'Developed multi-level state abstraction combined with Delta Debugging to effectively reduce lengthy action sequences to minimal fault-reproducing traces, greatly reducing developer effort.',
        'research.card4.title': 'GUI/CLI Agents & Agentic AI',
        'research.card4.desc': 'Evaluating GUI agents in real-world scenarios (fuzzy requirements, cross-app tasks, system API calls). Investigating agent explainability, safety, trustworthiness, personalization, and cloud-edge fusion.',
        'research.card4.tag': 'Ongoing',
        'pub.title': 'Publications',
        'pub.subtitle': 'Total citations: 510+ &nbsp;|&nbsp; * indicates corresponding author',
        'awards.title': 'Selected Awards & Honors',
        'awards.honors': 'Honors',
        'awards.h1': 'May Fourth Medal, Northeastern University',
        'awards.h2': "President's Medal, Northeastern University",
        'awards.h3': 'Merit Student, Peking University',
        'awards.h4': 'Outstanding League Cadre, Peking University',
        'awards.h5': 'Social Work Award, Peking University',
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
        'edu.title': 'Education',
        'edu.pku.name': 'Peking University',
        'edu.pku.degree': 'Ph.D. in Computer Software and Theory',
        'edu.pku.date': '2021.09 - 2026.06 (Expected)',
        'edu.neu.name': 'Northeastern University',
        'edu.neu.degree': 'B.E. in Software Engineering',
        'footer': '&copy; 2026 Chenxu Liu. Last updated: April 2026.'
    },
    zh: {
        'nav.logo': '刘宸绪',
        'nav.about': '关于',
        'nav.research': '研究方向',
        'nav.publications': '学术论文',
        'nav.awards': '荣誉奖项',
        'nav.experience': '工作经历',
        'hero.name': '刘宸绪 <span class="name-cn">Chenxu Liu</span>',
        'hero.subtitle': '计算机软件与理论 博士',
        'hero.workplace': '<a href="https://hunyuan.tencent.com/" target="_blank">腾讯混元团队</a>, 研究员',
        'hero.affiliation': '毕业于：<a href="https://www.pku.edu.cn" target="_blank">北京大学</a>, <a href="https://cs.pku.edu.cn/" target="_blank">计算机学院</a>',
        // 'hero.graduation': '预计毕业时间：2026年6月（求职中）',
        'hero.advisor': '导师：<a href="https://taoxiease.github.io" target="_blank">谢涛 教授</a> <span class="advisor-note">（欧洲科学院院士，ACM/IEEE/AAAS/CCF/CIE Fellow）</span>',
        'hero.collaborators': '合作导师：<a href="https://profiles.utdallas.edu/wei.yang" target="_blank">杨威 教授</a>、<a href="https://faculty.pku.edu.cn/zhangying" target="_blank">张颖 教授</a>',
        'research.title': '研究方向',
        'research.intro': '我博士期间研究聚焦于<strong>图形用户界面（GUI）的质量保障与测试</strong>，尤其是 Web GUI 测试。我将传统算法与深度学习模型、大语言模型和 GUI agent相结合，以提升测试效果。',
        'research.second': '我近期及未来工作围绕对<strong>Code agent与GUI agent</strong>的评测展开，包括且不限于：1. 模型前端能力开放式评测（静态&交互式）；2. 贴合真实场景使用情况的user agent评测；3. 高可信、高安全性、可解释的agent；4. GUI-CLI结合的agent及云-端融合的agent。',
        'research.card1.title': '状态抽象',
        'research.card1.desc': '设计结构合并算法与对比学习模型，精确聚类具有重复功能的页面，显著减少冗余探索并提高测试覆盖率。',
        'research.card2.title': '探索策略',
        'research.card2.desc': '结合强化学习实现快速探索，利用大语言模型分析识别未覆盖功能，再借助 GUI 智能体对残余代码进行定向覆盖。',
        'research.card3.title': '测试约简',
        'research.card3.desc': '开发多层状态抽象结合 Delta Debugging 的方法，有效将冗长操作序列约简为最小故障复现轨迹，大幅降低开发者调试成本。',
        'research.card4.title': 'GUI/CLI 智能体与 Agentic AI',
        'research.card4.desc': '在真实场景中评估 GUI 智能体（模糊需求、跨应用任务、系统 API 调用），研究智能体的可解释性、安全性、可信赖性、个性化以及云边融合。',
        'research.card4.tag': '进行中',
        'pub.title': '学术论文',
        'pub.subtitle': '总引用量：510+ &nbsp;|&nbsp; * 标明作为通讯作者的工作',
        'awards.title': '部分荣誉奖项',
        'awards.honors': '荣誉称号',
        'awards.h1': '五四奖章，东北大学',
        'awards.h2': '校长奖章，东北大学',
        'awards.h3': '三好学生，北京大学',
        'awards.h4': '优秀团干部，北京大学',
        'awards.h5': '社会工作奖，北京大学',
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
        'edu.title': '教育背景',
        'edu.pku.name': '北京大学',
        'edu.pku.degree': '计算机软件与理论 理学博士',
        'edu.pku.date': '2021.09 - 2026.06',
        'edu.neu.name': '东北大学',
        'edu.neu.degree': '软件工程 工学学士',
        'footer': '&copy; 2026 刘宸绪 最后更新：2026年5月'
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Toggle button label
    document.querySelectorAll('.lang-label').forEach(label => {
        label.style.display = label.getAttribute('data-lang') === lang ? 'inline' : 'none';
    });
}

// Init language on load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});

// Language toggle
document.getElementById('lang-toggle').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'zh' : 'en');
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on link click
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

const observerOptions = {
    rootMargin: '-80px 0px -60% 0px',
    threshold: 0
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));
