import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Favorites", href: "#favorites" },
        { label: "Stories", href: "#stories" },
        { label: "Archives", href: "#archives" },
    ];

    return (
        <header className="relative z-50 border-b border-black/15">
            <div className="flex items-center justify-between px-4 py-4">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3">
                    <span className="text-sm font-black tracking-wide">
                        KATIR
                    </span>
                </a>

                {/* Hamburger */}
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className="group flex items-center gap-3"
                >
                    <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-black/45 sm:block">
                        {isOpen ? "Close" : "Menu"}
                    </span>

                    <span className="grid h-10 w-10 place-items-center border border-black/15 transition-colors duration-200 group-hover:bg-black group-hover:text-white">
                        {isOpen ? (
                            <X size={16} strokeWidth={1.5} />
                        ) : (
                            <Menu size={16} strokeWidth={1.5} />
                        )}
                    </span>
                </button>
            </div>

            {/* Navigation */}
            <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <nav className="overflow-hidden">
                    <div className="grid border-t border-black/10 sm:grid-cols-[1fr_1fr] lg:grid-cols-[0.7fr_1.3fr]">

                        {/* Label */}
                        <div className="hidden sm:block">
                            <p className="ml-4 mt-4 max-w-[180px] text-xs leading-5 text-black/45">
                                Explore the sound, story and world behind
                                Flyaway.
                            </p>
                        </div>

                        {/* Links */}
                        <div className="divide-y divide-black/10 border-y border-black/10">
                            {navItems.map((item, index) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex items-center justify-between py-4 transition-all duration-200 hover:px-2"
                                >
                                    <div className="flex items-center gap-5">
                                        <span className="font-mono text-[9px] text-black/30">
                                            0{index + 1}
                                        </span>

                                        <span className="text-2xl font-medium tracking-tight">
                                            {item.label}
                                        </span>
                                    </div>

                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={1.5}
                                        className="text-black/30 transition-transform duration-200 group-hover:-translate-x-4 group-hover:text-[#c8102e]"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
