export default function Footer() {
  return (
    <footer className="bg-slate-50/60 dark:bg-[#12181b]/30 py-50 px-6 border-t border-slate-200/60 dark:border-slate-800/40" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Main Card */}
        <div className="bg-white dark:bg-surface-dark rounded-[32px] border border-slate-200/60 dark:border-slate-800/70 shadow-md shadow-slate-100/50 dark:shadow-none p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Let's Work Together */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Let&apos;s Work Together
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xl leading-relaxed text-sm md:text-base">
                Currently open to freelance opportunities and full-time positions. Whether it&apos;s a new build, an API, a full-stack feature, or a clean interface — I&apos;d love to hear about it. Open to clients, collaborators, and full-time roles.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#"
                  className="flex items-center gap-2 px-6 py-3.5 border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl font-bold text-sm transition-all shadow-xs hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-lg leading-none">description</span>
                  View CV
                </a>
              </div>

              {/* Social Icons */}
            </div>

            {/* Right Column: Contact Details Card */}
            <div className="lg:col-span-5 w-full flex justify-end">
              <div className="w-full lg:max-w-[420px] bg-[#EFF4FB] dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 flex flex-col gap-6">
                {/* Email Detail */}
                <a
                  href="mailto:charlescuizon2003@gmail.com"
                  className="flex items-center gap-4 group/item cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800/60 shadow-xs border border-slate-200/30 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-105">
                    <span className="material-symbols-outlined text-lg leading-none">mail</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase leading-none mb-1.5">
                      EMAIL
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover/item:text-secondary dark:group-hover/item:text-secondary transition-colors">
                      charlescuizon2003@gmail.com
                    </span>
                  </div>
                </a>

                {/* GitHub Detail */}
                <a
                  href="https://github.com/CharlesCuizon19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group/item cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800/60 shadow-xs border border-slate-200/30 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-105">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase leading-none mb-1.5">
                      GITHUB
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover/item:text-primary dark:group-hover/item:text-primary transition-colors">
                      CharlesCuizon19
                    </span>
                  </div>
                </a>

                {/* Facebook Detail */}
                <a
                  href="https://www.facebook.com/charles.cuizon.1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group/item cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800/60 shadow-xs border border-slate-200/30 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-105">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase leading-none mb-1.5">
                      FACEBOOK
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover/item:text-[#1877F2] dark:group-hover/item:text-[#1877F2] transition-colors">
                      Charles Cuizon
                    </span>
                  </div>
                </a>

                {/* Instagram Detail */}
                <a
                  href="https://www.instagram.com/Chrlsanglo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group/item cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800/60 shadow-xs border border-slate-200/30 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-105">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.072 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase leading-none mb-1.5">
                      INSTAGRAM
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover/item:text-[#E1306C] dark:group-hover/item:text-[#E1306C] transition-colors">
                      @Chrlsanglo
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-slate-400 dark:text-slate-500 text-sm">
          &copy; 2026 Charles Angelo B. Cuizon. Built with Professionalism &amp; Intent.
        </div>
      </div>
    </footer>
  );
}
