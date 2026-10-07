"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { SectionBadge } from "../ui/section-badge";
import { SectionTitle } from "../ui/section-title";

export default function Stories() {
    const sectionRef = useRef(null);
    const blobRef = useRef(null);
    const blobTwoRef = useRef(null);
    const quoteRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Quote entrance
            gsap.fromTo(
                quoteRef.current,
                {
                    opacity: 0,
                    y: 40,
                    filter: "blur(12px)",
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.2,
                    ease: "power3.out",
                    delay: 0.2,
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="stories"
            className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-[1500px]">
                {/* Header */}
                <div className="relative z-20 mb-20">
                    <SectionBadge text="Fondasi Hidup gua" />

                    <SectionTitle blackTitle="Tetap" redTitle="Hidup" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40">
                        04 - Stories
                    </span>
                </div>

                {/* Quote Stage */}
                <div className="relative mx-auto flex min-h-[75vh] max-w-[1200px] items-center justify-center overflow-hidden">
                  {/* Glow container */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-0">
                      <div
                          className="
                              absolute
                              left-0
                              top-0
                              h-[280px]
                              w-[600px]
                              -translate-x-1/2
                              -translate-y-1/2
                              rounded-full
                              bg-radial from-pink-500/40 to-transparent
                              blur-[120px]
                          "
                      />
                  </div>

                    {/* Quote */}
                    <div className="relative z-10 w-full text-center">
                        <div className="mb-10 flex items-center justify-center gap-4">
                            <span className="h-px w-10 bg-black/20" />

                            <span className="font-mono text-[9px] uppercase tracking-widest text-black/40">
                                Newton · III
                            </span>

                            <span className="h-px w-10 bg-black/20" />
                        </div>

                        <blockquote
                            ref={quoteRef}
                            className="mx-auto max-w-[1000px]"
                        >
                            <p className="font-serif text-[clamp(3rem,5vw,5rem)] leading-[0.9] tracking-[-0.055em] text-black">
                                For every action,
                            </p>

                            <p className="mt-3 font-serif text-[clamp(3rem,5vw,5rem)] leading-[0.9] tracking-[-0.055em] text-maroon italic">
                                there is an equal
                            </p>

                            <p className="mt-3 font-serif text-[clamp(3rem,5vw,5rem)] leading-[0.9] tracking-[-0.055em] text-black">
                                and opposite reaction.
                            </p>
                        </blockquote>

                        {/* Author */}
                        <div className="mt-14">
                            <div className="mx-auto mb-5 h-px w-8 bg-black/20" />

                            <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-black/40">
                                Isaac Newton
                            </span>

                            <p className="mt-2 font-serif text-sm italic text-black/40">
                                Philosophiæ Naturalis Principia Mathematica
                            </p>
                        </div>
                    </div>

                    {/* Bottom indicator */}
                    <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3">
                        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-black/30">
                            Keep going
                        </span>

                        <span className="h-8 w-px bg-black/20" />
                    </div>
                </div>

                {/* Interpretation */}
                <div className="relative z-10 mx-auto mt-24 grid max-w-[1000px] grid-cols-1 gap-12 border-t border-black/10 pt-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
                    <div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-black/40">
                            Fragment 04
                        </span>

                        <p className="mt-4 font-serif text-2xl leading-tight text-black">
                            Setiap tindakan
                            <br />
                            punya akibat.
                        </p>
                    </div>

                    <div>
                        <p className="font-serif text-xl leading-[1.5] text-black/70 sm:text-2xl">
                            Tidak ada tindakan yang benar-benar hilang.
                            <br />
                            Apa yang kita lakukan akan selalu
                            <span className="text-maroon">
                                {" "}
                                menemukan jalannya untuk kembali.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
