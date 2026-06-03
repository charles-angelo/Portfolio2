import React from "react";

// Inline custom/generic SVGs for conceptual items
const ApiIcon = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
    <path d="M20 10v4"></path>
    <path d="M4 10v4"></path>
  </svg>
);

const MultiTenantIcon = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 transition-transform duration-500 group-hover/item:rotate-90" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
    <rect x="14" y="3" width="7" height="7" rx="1"></rect>
    <rect x="14" y="14" width="7" height="7" rx="1"></rect>
    <rect x="3" y="14" width="7" height="7" rx="1"></rect>
  </svg>
);

const ServerMgmtIcon = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 transition-all duration-300" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

const BpmnIcon = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover/item:translate-x-1" fill="none" stroke="#E28743" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="6" height="6" rx="1"></rect>
    <rect x="15" y="15" width="6" height="6" rx="1"></rect>
    <path d="M9 6h6v9"></path>
    <path d="M15 15l-3-3m3 3l-3 3"></path>
  </svg>
);

const GithubDesktopIcon = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover/item:translate-y-[-2px]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#9C27B0" />
    <path d="M12 4c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.5.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1.1.1-2.2 0 0 .7-.2 2.2.8.6-.2 1.4-.3 2.1-.3s1.5.1 2.1.3c1.5-1 2.2-.8 2.2-.8.5 1.1.2 2 .1 2.2.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.7v2.5c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6 0-4.4-3.6-8-8-8z" fill="white" />
  </svg>
);

const VersionControlIcon = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 15V9a4 4 0 0 0-4-4H9" />
    <line x1="6" y1="9" x2="6" y2="15" />
  </svg>
);

const CodeReviewIcon = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-105" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const BladeIcon = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" fill="none" stroke="#FF2D20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5a2 2 0 0 0-2 2v3a2 2 0 0 1-1 1 2 2 0 0 1 1 1v3a2 2 0 0 0 2 2" />
    <path d="M16 5a2 2 0 0 1 2 2v3a2 2 0 0 0 1 1 2 2 0 0 0-1 1v3a2 2 0 0 1-2 2" />
  </svg>
);

interface SkillItem {
  name: string;
  color: string;
  icon: React.ReactNode | string;
  invertDark?: boolean;
}

interface SkillCategory {
  tag: string;
  title: string;
  desc: string;
  cls: string;
  items: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    tag: "javascript",
    title: "Frontend",
    desc: "Building highly interactive, responsive user interfaces",
    cls: "text-primary",
    items: [
      { name: "ReactJS", color: "#61DAFB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "JavaScript", color: "#F7DF1E", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TailwindCSS", color: "#38B2AC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML", color: "#E34F26", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", color: "#1572B6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" }
    ]
  },
  {
    tag: "dns",
    title: "Backend",
    desc: "Structuring performant APIs and server logical flow",
    cls: "text-secondary",
    items: [
      { name: "PHP", color: "#777BB4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "Laravel", color: "#FF2D20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      { name: "Blade", color: "#FF2D20", icon: BladeIcon },
      { name: "MQTT", color: "#660066", icon: "https://cdn.simpleicons.org/mqtt/660066/D8B4FE" },
      { name: "HiveMQ", color: "#FFD400", icon: "https://cdn.simpleicons.org/hivemq/F6A220/FFD400" },
      { name: "REST APIs", color: "#10B981", icon: ApiIcon }
    ]
  },
  {
    tag: "database",
    title: "Database",
    desc: "Designing secure, structured, scalable architectures",
    cls: "text-accent-slate",
    items: [
      { name: "MySQL", color: "#00758F", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "DBeaver", color: "#382923", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg" },
      { name: "Multi-Tenant", color: "#6366F1", icon: MultiTenantIcon }
    ]
  },
  {
    tag: "terminal",
    title: "DevOps & Deployment",
    desc: "Provisioning and monitoring cloud environments",
    cls: "text-secondary",
    items: [
      { name: "Cloudways", color: "#005CFF", icon: "https://cdn.simpleicons.org/cloudways/005CFF/38BDF8" },
      { name: "cPanel", color: "#FF6C2C", icon: "https://cdn.simpleicons.org/cpanel/FF6C2C" },
      { name: "Server Mgmt", color: "#64748B", icon: ServerMgmtIcon }
    ]
  },
  {
    tag: "architecture",
    title: "Architecture & Design",
    desc: "Mapping clear workflows and user interfaces",
    cls: "text-primary",
    items: [
      { name: "BPMN", color: "#E28743", icon: BpmnIcon },
      { name: "Figma", color: "#F24E1E", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" }
    ]
  },
  {
    tag: "build",
    title: "Tools & Collaboration",
    desc: "Managing version controls, testing APIs, and IDE platforms",
    cls: "text-accent-leaf",
    items: [
      { name: "Git", color: "#F05032", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", color: "#181717", icon: "https://cdn.simpleicons.org/github/181717/ffffff" },
      { name: "GitHub Desktop", color: "#7F3FBF", icon: GithubDesktopIcon },
      { name: "SourceTree", color: "#0052CC", icon: "https://devicons.io/devicons/icons/sourcetree.svg" },
      { name: "Postman", color: "#FF6C37", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "VS Code", color: "#007ACC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Antigravity", color: "#10B981", icon: "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/antigravity-color.svg" },
      { name: "Claude", color: "#D97706", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg", invertDark: false },
      { name: "ChatGPT", color: "#10A37F", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/960px-ChatGPT_logo.svg.png" },
      { name: "Version Control", color: "#3B82F6", icon: VersionControlIcon },
      { name: "Code Reviewing", color: "#F59E0B", icon: CodeReviewIcon }
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-slate-50/30 dark:bg-[#12181b]/20" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-4 text-slate-900 dark:text-white">Technical Expertise</h2>
          <div className="h-1.5 w-20 bg-secondary rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl leading-relaxed">
            A curated list of technologies, frameworks, databases, and design standards I specialize in to build premium digital solutions.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-6 md:gap-12 p-8 rounded-3xl bg-white dark:bg-surface-dark border border-slate-200/80 dark:border-slate-800/80 shadow-xs transition-all duration-300 hover:shadow-sm hover-lift"
            >
              {/* Left Side: Category Info */}
              <div className="md:w-1/4 flex-shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`material-symbols-outlined text-3xl ${cat.cls}`}>{cat.tag}</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-none">{cat.title}</h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              {/* Right Side: Skill Tags Row */}
              <div className="flex-1 flex items-center">
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((item, j) => (
                    <div
                      key={j}
                      className="group/item relative flex items-center gap-3 p-3 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100/50 dark:border-slate-800/60 hover:border-slate-200 dark:hover:border-slate-700/80 transition-all duration-300 hover:shadow-xs cursor-default hover:-translate-y-0.5"
                      style={{
                        "--item-brand-color": item.color
                      } as React.CSSProperties}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs transition-transform duration-300 group-hover/item:scale-110 flex-shrink-0 overflow-hidden">
                        {typeof item.icon === "string" ? (
                          <img
                            src={item.icon}
                            alt={item.name}
                            className={`w-5 h-5 object-contain transition-transform duration-300 group-hover/item:scale-110 flex-shrink-0 ${item.invertDark ? "dark:invert dark:brightness-200" : ""}`}
                          />
                        ) : (
                          item.icon
                        )}
                      </div>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">{item.name}</span>
                      {/* Underline color highlight on hover */}
                      <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-[var(--item-brand-color)] rounded-full w-0 group-hover/item:w-[calc(100%-2rem)] transition-all duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
