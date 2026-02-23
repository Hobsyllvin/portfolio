export default function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-border-dark bg-surface-dark/95 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-surface-dark text-white border border-border-dark shadow-sm">
                        <span className="material-symbols-outlined text-[24px]">precision_manufacturing</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-display text-xl font-bold tracking-tight text-white leading-none">C.REINPRECHT</h1>
                        <span className="font-display text-xs text-text-muted font-medium tracking-wide mt-1">ROBOTICS ENGINEER</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
