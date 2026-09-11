import { SectionBadge } from "../ui/section-badge";

export default function Favorite() {
    const foods = [
        {
            image: "/favorite-food-1.jpg",
            name: "Coffee",
        },
        {
            image: "/favorite-food-2.jpg",
            name: "Noodles",
        },
        {
            image: "/favorite-food-3.jpg",
            name: "Fried Rice",
        },
    ];

    const music = [
        {
            image: "/favorite-band-1.jpg",
            band: "Slipknot",
            song: "Psychosocial",
        },
        {
            image: "/favorite-band-2.jpg",
            band: "Sevendust",
            song: "Black",
        },
        {
            image: "/favorite-band-3.jpg",
            band: "Linkin Park",
            song: "Figure.09",
        },
    ];

    return (
        <section className="px-6 py-24 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-[1500px]">

                {/* Section Header */}
                <div className="mb-20 border-b border-black/15 pb-5">
                    <SectionBadge text="Personal Favorite" />

                    <div className="mt-2 flex items-end justify-between">
                        <h2 className="text-5xl font-medium leading-none tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                            Things I
                            <span className="text-[#c8102e]"> love.</span>
                        </h2>

                        <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-black/35 sm:block">
                            A few things that keep me going
                        </span>
                    </div>
                </div>

                {/* Favorites */}
                <div className="grid lg:grid-cols-2">

                    {/* ===================== */}
                    {/* DRINK & FOOD */}
                    {/* ===================== */}
                    <div className="border-b border-black/15 pb-20 lg:border-r lg:border-b-0 lg:pr-16">

                        <div className="mb-8">
                            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/35">
                                01
                            </p>

                            <h3 className="mt-2 text-2xl font-medium tracking-tight">
                                Favorite Drink & Food
                            </h3>
                        </div>

                        {/* Images */}
                        <div className="grid grid-cols-3 gap-3">
                            {foods.map((food) => (
                                <div
                                    key={food.name}
                                    className="group relative aspect-square overflow-hidden bg-black/5"
                                >
                                    <img
                                        src={food.image}
                                        alt={food.name}
                                        className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-3 opacity-0 transition duration-300 group-hover:opacity-100">
                                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white">
                                            {food.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Description */}
                        <p className="mt-8 max-w-lg text-sm leading-7 text-black/55 sm:text-base">
                            I don't really need complicated food to have a good
                            time. A cup of coffee, a warm bowl of noodles, or a
                            plate of fried rice can already make a long day
                            feel better. These are the kind of little things I
                            keep coming back to, especially when I'm working,
                            writing, making music, or just spending time
                            thinking about random things.
                        </p>
                    </div>


                    {/* ===================== */}
                    {/* BAND & MUSIC */}
                    {/* ===================== */}
                    <div className="pt-20 lg:pl-16 lg:pt-0">

                        <div className="mb-8">
                            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/35">
                                02
                            </p>

                            <h3 className="mt-2 text-2xl font-medium tracking-tight">
                                Favorite Band & Music
                            </h3>
                        </div>

                        {/* Images */}
                        <div className="grid grid-cols-3 gap-3">
                            {music.map((item) => (
                                <div
                                    key={item.band}
                                    className="group aspect-square overflow-hidden bg-black/5"
                                >
                                    <img
                                        src={item.image}
                                        alt={`${item.band} — ${item.song} `}
                                        className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Music List */}
                        <div className="mt-8 border-t border-black/10">
                            {music.map((item, index) => (
                                <div
                                    key={item.band}
                                    className="flex items-center justify-between border-b border-black/10 py-4"
                                >
                                    <div className="flex items-center gap-5">
                                        <span className="font-mono text-[9px] text-black/30">
                                            0{index + 1}
                                        </span>

                                        <div>
                                            <p className="text-sm font-medium">
                                                {item.band}
                                            </p>

                                            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-black/40">
                                                {item.song}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="font-mono text-[9px] text-black/25">
                                        ↗
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* ===================== */}
                {/* FAVORITE PERSON */}
                {/* ===================== */}
                <div className="mt-24 border-t border-black/15 pt-5">

                    <div className="mb-10 flex items-end justify-between">
                        <div>
                            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#c8102e]">
                                03
                            </p>

                            <h3 className="mt-2 text-2xl font-medium tracking-tight">
                                Favorite Person
                            </h3>
                        </div>

                        <span className="hidden font-mono text-[9px] uppercase tracking-[0.15em] text-black/30 sm:block">
                            One Person / One Story
                        </span>
                    </div>

                    {/* Ayu */}
                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

                        {/* Description */}
                        <div className="max-w-md">

                            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/35">
                                About Ayu
                            </p>

                            <h4 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl">
                                Someone who makes
                                <span className="text-[#c8102e]">
                                    {" "}ordinary days memorable.
                                </span>
                            </h4>

                            <p className="mt-8 text-sm leading-7 text-black/55 sm:text-base">
                                Ayu is someone who became a meaningful part of
                                my everyday life. From random conversations and
                                stupid jokes to quiet moments that don't really
                                need an explanation, somehow the little things
                                become the memories I remember the most.
                            </p>

                            <p className="mt-5 text-sm leading-7 text-black/55 sm:text-base">
                                She has a way of reminding me to spend my time
                                on things that actually matter, to think before
                                wasting what I have, and to appreciate the
                                people around me. Maybe that's what makes a
                                person special — not always the big moments,
                                but the small ones that stay.
                            </p>

                            <div className="mt-10 border-t border-black/10 pt-5">
                                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/35">
                                    Ayu — Favorite Person
                                </span>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="group relative mx-auto w-full max-w-[520px] overflow-hidden bg-black/5 lg:mx-0 lg:ml-auto">
                            <img
                                src="/ayu.jpg"
                                alt="Ayu"
                                className="max-h-[520px] w-full object-cover grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                            />

                            <div className="absolute bottom-5 left-5">
                                <span className="bg-[#c8102e] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-black">
                                    Ayu
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
