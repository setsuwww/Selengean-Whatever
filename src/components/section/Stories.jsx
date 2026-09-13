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

                <div className="mx-auto mt-16 max-w-[1000px]">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {Array.from({ length: 9 }).map((_, index) => {
                            const story = stories.find(
                                (item) => item.position === index
                            );

                            return (
                                <div
                                    key={index}
                                    className={[
                                        "hidden md:block md:aspect-square",

                                        story
                                            ? "border-2 border-black bg-white"
                                            : [
                                                "border border-black/10",
                                                "bg-neutral-100",
                                                "bg-[linear-gradient(135deg,rgba(0,0,0,0.06)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.06)_50%,rgba(0,0,0,0.06)_75%,transparent_75%)]",
                                                "bg-[length:8px_8px]",
                                            ].join(" "),

                                        index % 3 === 2
                                            ? "md:border-r-2"
                                            : "",

                                        index >= 6
                                            ? "md:border-b-2"
                                            : "",
                                    ].join(" ")}
                                >
                                    {story && (
                                        <article className="flex h-full flex-col justify-between p-5 lg:p-6">
                                            <span className="w-fit bg-yellow-100 p-2 font-mono text-[9px] tracking-[0.2em] text-yellow-600">
                                                {story.number}
                                            </span>

                                            <div className="flex items-start gap-2">
                                                <span
                                                    aria-hidden="true"
                                                    className="font-serif text-2xl leading-none text-[#c8102e] lg:text-3xl"
                                                >
                                                    “
                                                </span>

                                                <p className="font-serif text-xl leading-[1.15] text-black lg:text-2xl">
                                                    {story.text}
                                                </p>
                                            </div>

                                            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-blue-600">
                                                Fragment {story.number}
                                            </span>
                                        </article>
                                    )}
                                </div>
                            );
                        })}

                        {/* Mobile */}
                        <div className="flex flex-col items-center gap-5 md:hidden">
                            {stories.map((story) => (
                                <article
                                    key={story.number}
                                    className="flex aspect-square w-[75%] max-w-[280px] flex-col justify-between border-2 border-black bg-white p-5"
                                >
                                    <span className="w-fit bg-yellow-100 p-2 font-mono text-[9px] tracking-[0.2em] text-yellow-600">
                                        {story.number}
                                    </span>

                                    <div className="flex items-start gap-2">
                                        <span
                                            aria-hidden="true"
                                            className="font-serif text-2xl leading-none text-[#c8102e]"
                                        >
                                            “
                                        </span>

                                        <p className="font-serif text-xl leading-[1.15] text-black">
                                            {story.text}
                                        </p>
                                    </div>

                                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-blue-600">
                                        Fragment {story.number}
                                    </span>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
