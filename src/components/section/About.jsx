export default function About() {
    return (
        <section className="px-6 py-24 sm:px-10 lg:px-16">
            <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">

                {/* Image */}
                <div className="relative lg:justify-self-center">
                    <div className="w-full max-w-[400px] overflow-hidden">
                        <img
                            src="/katir.png"
                            alt="Flyaway"
                            className="h-auto w-full object-cover"
                        />
                    </div>

                    <span className="absolute -bottom-6 -left-1 font-mono text-[9px] uppercase tracking-[0.2em] text-black/40">
                        02 — About Myself
                    </span>
                </div>

                {/* Text */}
                <div className="max-w-xl">
                    <div className="mb-7 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-black/50">
                        <span className="h-2 w-2 rounded-full bg-[#c8102e] shadow-[0_0_0_4px_rgba(200,16,46,0.08)]" />

                        <span>Siapa itu Katir?</span>
                    </div>

                    <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                        Sekilas tentang
                        <span className="text-[#c8102e]"> Gua.</span>
                    </h2>

                    <div className="mt-10 space-y-6 text-sm leading-7 text-black/60 sm:text-base">
                        <p>
                            Gua orang yang suka banget sama hal yang berbau Seni dan Estetika,
                            Seni rupa Lukisan, Seni sastra Puisi, Seni musik paling Favorit, ada
                            Gitar, Piano, Drum dan Vocal.
                        </p>

                        <p>
                            Musik itu bagian besar dalam keseharian gua,
                            Gw suka banget bahas bahas hal yang berbau musik, Chord, Scale, Melody, Aransemen,
                            Gw juga bisa Piano, Bass, Drum juga bisa,
                            yang paling berat itu jadi Vocalis.
                        </p>

                        <p>
                            Diluar musik gua juga suka belajar tentang Sains, Sains Biologi, Fisika, dan paling seru itu Astronomi,
                            Belajar hal hal itu menurut gua pribadi itu seru, apalagi buat bahan Debat dan sekedar Pengetahuan.
                        </p>

                        <p>
                            Gua juga suka banget Ngeband, Gua gabungin semua seni estetika dalam Musik,
                            Lirik, Makna, Variasi Chord, Aransemen, dan Visual album.
                        </p>
                    </div>

                    <div className="mt-12 border-t border-black/10 pt-5">
                        <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-black/35">
                            <span>Drawing / Writing / Music</span>
                            <span>Science / Physics / Biology / Astronomy / Philosophy</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
