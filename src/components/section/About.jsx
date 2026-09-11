import { SectionBadge } from "../ui/section-badge";
import { SectionTitle } from "../ui/section-title";

export default function About() {
    return (
        <section className="px-6 py-24 sm:px-10 lg:px-16">
            <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">

                {/* Image */}
                <div className="relative flex justify-center lg:block lg:justify-self-center">
                    <div className="w-[65%] max-w-[280px] overflow-hidden sm:w-[55%] sm:max-w-[320px] lg:w-full lg:max-w-[400px]">
                        <img
                            src="/katir.png"
                            alt="Flyaway"
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>

                {/* Text */}
                <div className="max-w-xl">
                    <SectionBadge text="Siapa itu Katir?" />

                    <SectionTitle blackTitle="Sekilas Tentang" redTitle="Gua" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40">
                        02 — About Myself
                    </span>

                    <div className="mt-6 space-y-6 text-sm leading-7 text-black/60 sm:text-base">
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
                            Lagu kaya Lirik, Makna, Aransemen, dan Design album.
                        </p>
                    </div>

                    <div className="mt-12 hidden border-t border-black/10 pt-5 md:block">
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
