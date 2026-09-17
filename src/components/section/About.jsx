"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { SectionBadge } from "../ui/section-badge";
import { SectionTitle } from "../ui/section-title";

export default function About() {
    const imageWrapperRef = useRef(null);
    const cursorRef = useRef(null);

    const xTo = useRef(null);
    const yTo = useRef(null);

    useEffect(() => {
        const imageWrapper = imageWrapperRef.current;
        const cursor = cursorRef.current;

        if (!imageWrapper || !cursor) return;

        gsap.set(cursor, {
            xPercent: -50,
            yPercent: -50,
            scale: 0,
            opacity: 0,
        });

        xTo.current = gsap.quickTo(cursor, "x", {
            duration: 0.35,
            ease: "power3.out",
        });

        yTo.current = gsap.quickTo(cursor, "y", {
            duration: 0.35,
            ease: "power3.out",
        });

        const handleMouseEnter = () => {
            gsap.to(cursor, {
                scale: 1,
                opacity: 1,
                duration: 0.3,
                ease: "power3.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, {
                scale: 0,
                opacity: 0,
                duration: 0.25,
                ease: "power3.in",
            });
        };

        const handleMouseMove = (event) => {
            const rect = imageWrapper.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            xTo.current?.(x);
            yTo.current?.(y);
        };

        imageWrapper.addEventListener("mouseenter", handleMouseEnter);
        imageWrapper.addEventListener("mouseleave", handleMouseLeave);
        imageWrapper.addEventListener("mousemove", handleMouseMove);

        return () => {
            imageWrapper.removeEventListener("mouseenter", handleMouseEnter);
            imageWrapper.removeEventListener("mouseleave", handleMouseLeave);
            imageWrapper.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section className="px-6 py-24 sm:px-10 lg:px-16">
            <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">

                {/* Image */}
                <div className="relative flex justify-center lg:block lg:justify-self-center">
                    <div
                        ref={imageWrapperRef}
                        className="relative w-[65%] max-w-[280px] overflow-hidden sm:w-[55%] sm:max-w-[320px] lg:w-full lg:max-w-[400px]"
                    >
                        <img
                            src="/katir.png"
                            alt="Katir"
                            className="h-auto w-full object-cover rounded-bl-xl"
                        />

                        {/* Inverse Cursor */}
                        <div
                            ref={cursorRef}
                            className="
                                pointer-events-none
                                absolute
                                left-0
                                top-0
                                z-10
                                h-[120px]
                                w-[120px]
                                rounded-full
                                bg-white
                                mix-blend-difference
                            "
                        />
                    </div>
                </div>

                {/* Text */}
                <div className="max-w-xl">
                    <SectionBadge text="Siapa itu Katir?" />

                    <SectionTitle
                        blackTitle="Sekilas Tentang"
                        redTitle="Gua"
                    />

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40">
                        02 — About
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
                            <span>
                                Science / Physics / Biology / Astronomy / Philosophy
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
