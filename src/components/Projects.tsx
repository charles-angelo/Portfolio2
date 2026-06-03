import Image from "next/image";

export default function Projects() {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="https://manpromanagement.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-3xl bg-slate-200 dark:bg-surface-dark aspect-video border border-slate-200 dark:border-slate-800"
          >
            <video
              src="https://manpro.ph/wp-content/uploads/2025/08/Core-HR-Employee-Management-.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2">ManPro Payroll HRMS</h3>
              <p className="text-slate-300 mb-4 line-clamp-2">Enterprise-grade payroll solution with automated calculations.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-bold px-2 py-1 bg-white/10 text-white rounded backdrop-blur-sm border border-white/10">React</span>
                <span className="text-xs font-bold px-2 py-1 bg-white/10 text-white rounded backdrop-blur-sm border border-white/10">Laravel</span>
              </div>
            </div>
          </a>
          <a
            href="https://tracker.manpromanagement.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-3xl bg-slate-200 dark:bg-surface-dark aspect-video border border-slate-200 dark:border-slate-800"
          >
            <Image src="/img/85a5ace0-1178-11ee-8b26-779befa4ae68.gif" alt="GPS Vehicle Tracking System" width={800} height={450} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2">GPS Vehicle Tracker</h3>
              <p className="text-slate-300 mb-4 line-clamp-2">Real-time geolocation monitoring system with geofencing.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-bold px-2 py-1 bg-white/10 text-white rounded backdrop-blur-sm border border-white/10">React</span>
                <span className="text-xs font-bold px-2 py-1 bg-white/10 text-white rounded backdrop-blur-sm border border-white/10">MQTT (HiveMQ)</span>
                <span className="text-xs font-bold px-2 py-1 bg-white/10 text-white rounded backdrop-blur-sm border border-white/10">Leaflet.js</span>
                <span className="text-xs font-bold px-2 py-1 bg-white/10 text-white rounded backdrop-blur-sm border border-white/10">PHP</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
