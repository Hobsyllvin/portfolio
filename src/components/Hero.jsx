export default function Hero() {
    return (
        <div className="relative mb-20 overflow-hidden rounded-2xl border border-border-dark bg-surface-dark shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-0 min-h-[550px]">
                <div className="lg:col-span-6 flex flex-col justify-center p-10 lg:p-16 relative z-10">
                    <div className="mb-6 flex items-center gap-3">
                        <span className="bg-secondary/10 text-secondary px-3 py-1 text-xs font-semibold tracking-wide border border-secondary/20 rounded-full">R&amp;D SPECIALIST</span>
                    </div>
                    <h1 className="font-display text-5xl font-bold tracking-tight text-white lg:text-7xl mb-6 leading-[1.1]">
                        Rapid <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Engineering.</span>
                    </h1>
                    <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-400">
                        Translating ideas and user needs into tangible prototypes, working on products that have a positive impact on society.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex items-center gap-2 bg-secondary text-black px-8 py-4 text-sm font-bold hover:bg-amber-400 transition-colors rounded-lg shadow-lg shadow-amber-500/10"
                        >
                            View Projects
                            <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
                        </button>
                        <a
                            href="/CV_ChristianReinprecht.pdf"
                            download
                            className="flex items-center gap-2 border border-border-dark bg-transparent px-8 py-4 text-sm font-bold text-white hover:border-slate-500 hover:bg-slate-800 transition-colors rounded-lg"
                        >
                            Download Resume
                            <span className="material-symbols-outlined text-[20px]">download</span>
                        </a>
                    </div>
                </div>
                <div className="lg:col-span-6 relative bg-background-dark overflow-hidden flex items-center justify-center border-l border-border-dark">
                    <div className="relative w-full h-full min-h-[400px]">
                        <img alt="Abstract mechanical robotic arm in dark workshop environment" className="h-full w-full object-cover opacity-80 mix-blend-normal" src="/projects/levr/ma_levr_in.webp" />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-white text-sm font-medium">Prototype for Rendering Weight in VR</p>
                                    <p className="text-slate-400 text-xs mt-0.5">1-DoF Haptic Device</p>
                                </div>
                                <div className="flex items-center gap-2 text-secondary">
                                    <span className="material-symbols-outlined text-[20px]">science</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
