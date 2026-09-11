export function Navbar() {
    return (
        <header className="flex items-center justify-between border-b border-black/15 pb-5">
            <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 -rotate-6 place-items-center bg-[#c8102e] text-sm font-black text-black">
                    F
                </div>

                <span className="text-sm font-black tracking-tight">
                    FLYAWAY
                </span>
            </div>

            <div className="hidden items-center gap-4 font-mono text-[9px] uppercase tracking-[0.15em] text-black/45 sm:flex">
                <span>Indonesian Nu-Metal</span>

                <span className="h-1 w-1 rounded-full bg-[#c8102e]" />

                <span>Est. 2024</span>
            </div>
        </header>
    )
}
