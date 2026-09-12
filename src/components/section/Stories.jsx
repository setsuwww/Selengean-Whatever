import { SectionBadge } from "../ui/section-badge";
import { SectionTitle } from "../ui/section-title";

export default function Stories() {
    const stories = [
        {
            number: "01",
            text: "Coba cari kerjaan, daripada kerjaan lu ngejelekin gua mulu.",
            size: "text-2xl sm:text-3xl",
            position: 0,
        },
        {
            number: "02",
            text: "Terserah, Lu ngebacot gua Tuli, Lu julid gua Buta, Percuma.",
            size: "text-2xl sm:text-3xl",
            position: 4,
        },
        {
            number: "03",
            text: "Bacotan lu ga ada damagenya pisan, coba beli Berserker Fury.",
            size: "text-2xl sm:text-3xl",
            position: 8,
        },
    ];

    return (
        <section
            id="stories"
            className="px-6 py-24 sm:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-[1500px]">
                <div className="mb-20">
                    <SectionBadge text="Fondasi Hidup gua" />

                    <SectionTitle blackTitle="Kata-kata bertahan" redTitle="Hidup" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40">
                        04 - My Principal
                    </span>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3">
                    {Array.from({ length: 9 }).map((_, index) => {
                        const story = stories.find((item) => item.position === index);

                        return (
                            <div key={index}
                                className={["aspect-square border-black/10",
                                    "border-l border-t", index % 3 === 2 ? "md:border-r" : "", index >= 6
                                        ? "md:border-b" : "",
                                ].join(" ")}
                            >
                                {story && (
                                    <article className="flex h-full flex-col justify-between p-5 sm:p-7 lg:p-8">
                                        <span className="w-fit p-2 font-mono text-[10px] tracking-[0.2em] text-yellow-600 bg-yellow-100">
                                            {story.number}
                                        </span>

                                        <div className="flex items-start gap-2">
                                            <span
                                                aria-hidden="true"
                                                className="font-serif text-3xl leading-none text-[#c8102e] sm:text-4xl"
                                            >
                                                “
                                            </span>

                                            <p className={`font-serif font-base leading-14 text-black ${story.size}`}>
                                                {story.text}
                                            </p>


                                        </div>

                                        <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-blue-600">
                                            Fragment {story.number}
                                        </span>
                                    </article>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="border-x border-b border-black/10 px-5 py-6 sm:px-7 lg:px-8">
                    <p className="max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                        Not everything that happened to me was good.
                        But almost everything left something behind —
                        a lesson, a habit, a song, or a story worth remembering.
                    </p>
                </div>
            </div>
        </section>
    );
}
