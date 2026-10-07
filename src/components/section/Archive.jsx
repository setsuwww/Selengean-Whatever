export default function Archive() {
    return (
        <main className="min-h-screen bg-[#f5f3ef] text-black">
            {/* Archive */}
            <section className="mx-auto flex min-h-screen max-w-[1500px] flex-col justify-between px-6 py-8 sm:px-10 lg:px-16">
                {/* Header */}
                <header className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-black/50">
                        Archive
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-black/30">
                        2026
                    </span>
                </header>

                {/* Main Content */}
                <div className="grid items-center gap-16 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
                    {/* Image */}
                    <div className="relative mx-auto w-full max-w-[300px]">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                                src="/katirxml.jpeg"
                                alt="Katir"
                                className="h-full w-full object-cover rounded-2xl"
                            />

                            {/* Image label */}
                            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4">
                                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white">
                                    Katir XML
                                </span>

                                <span className="font-mono text-[8px] text-white/60">
                                    001
                                </span>
                            </div>
                        </div>

                        <span className="mt-3 block font-mono text-[8px] uppercase tracking-[0.25em] text-black/30">
                            Personal Archive / Self Portrait
                        </span>
                    </div>

                    {/* Quote */}
                    <div className="relative">
                        <span className="mb-8 block font-mono text-[9px] uppercase tracking-[0.3em] text-maroon">
                            05 - Archive
                        </span>

                        <blockquote className="max-w-[850px]">
                            <p className="text-[clamp(1rem,4vw,5rem)] font-semibold leading-[0.86] tracking-[-0.055em]">
                                Selalu <span className="text-maroon">Sama.</span>
                            </p>
                        </blockquote>

                        <div className="mt-12 max-w-[500px] border-t border-black/10 pt-6">
                            <p className="font-serif text-lg leading-[1.5] text-black/60">
                                <span className="text-blue-600">Metamorfosis</span> manusia
                                <br />
                                dimulai ketika ia belajar dari kesalahannya dan berhenti hidup untuk memenuhi ego orang lain.
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-4">
                            <span className="h-px w-10 bg-black/20" />

                            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-black/40">
                                Katir
                            </span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="border-t border-black/10 pt-5">
                    <div className="flex flex-col gap-4 font-mono text-[8px] uppercase tracking-[0.25em] text-black/35 sm:flex-row sm:items-center sm:justify-between">
                        <span>© 2026 Katir</span>

                        <span>Built with curiosity &amp; chaos</span>

                        <span>End of archive</span>
                    </div>
                </footer>
            </section>
        </main>
    );
}
