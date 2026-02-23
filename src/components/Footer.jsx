export default function Footer() {
    return (
        <footer className="mt-12 border-t border-border-dark py-12">
            <div className="grid md:grid-cols-4 gap-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-white">precision_manufacturing</span>
                        <h3 className="font-display text-lg font-bold text-white">C.REINPRECHT</h3>
                    </div>
                    <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                        Designing the future, one prototype at a time.
                    </p>
                </div>
                <div>
                    <h4 className="font-display text-sm font-bold text-white mb-4">Connect</h4>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li><a className="hover:text-secondary transition-colors" href="https://linkedin.com/in/christian-reinprecht" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-display text-sm font-bold text-white mb-4">Contact</h4>
                    <p className="text-sm text-slate-400 mb-2">
                        chreito@gmail.com
                    </p>
                    <p className="text-xs text-slate-600 mt-8">
                        © 2026 C.Reinprecht. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
