import { ArrowUpRight } from "lucide-react";
import { SectionBadge } from "../ui/section-badge";
import { SectionTitle } from "../ui/section-title";

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
            image: "/album/surfacing.avif",
            band: "Slipknot",
            song: "Surfacing",
        },
        {
            image: "/album/poa.avif",
            band: "Linkin Park",
            song: "Point of Authority",
        },
        {
            image: "/album/sof.avif",
            band: "Avenged Sevenfold",
            song: "Shepherd of Fire",
        },
    ];

    return (
        <section className="px-6 py-24 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-[1500px]">

                {/* Section Header */}
                <div className="mb-20 border-b border-black/15 pb-5">
                    <SectionBadge text="Apa si Favorit gua?" />

                    <SectionTitle blackTitle="Favorit" redTitle="Gua" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/40">
                        03 — Favorite Things
                    </span>
                </div>

                {/* Favorites */}
                <div className="grid lg:grid-cols-2">
                    {/* DRINK & FOOD */}
                    <div className="border-b border-black/15 pb-20 lg:border-r lg:border-b-0 lg:pr-16">

                        <div className="mb-8">
                            <h3 className="mt-2 text-2xl font-medium tracking-tight">
                                Favorite Drink & Food
                            </h3>
                        </div>

                        {/* Images */}
                        <div className="grid max-w-[80%] grid-cols-3 gap-3">
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

                    {/* BAND & MUSIC */}
                    <div className="pt-20 lg:pl-16 lg:pt-0">
                        <div className="mb-8">
                            <h3 className="mt-2 text-2xl font-medium tracking-tight">
                                Favorite Band & Music
                            </h3>
                        </div>

                        {/* Images */}
                        <div className="grid max-w-[80%] grid-cols-3 gap-3">
                            {music.map((item) => (
                                <div
                                    key={item.band}
                                    className="group aspect-square overflow-hidden bg-black/5"
                                >
                                    <img
                                        src={item.image}
                                        alt={`${item.band} — ${item.song}`}
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
                                    className="flex items-center justify-between border-b border-black/10 py-4 "
                                >
                                    <div className="flex items-center gap-5">
                                        <span className="font-mono text-[9px] text-white p-2 bg-blue-500">
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

                                    <ArrowUpRight className="text-gray-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* FAVORITE PERSON */}
                <div className="mt-24 border-t border-black/15 pt-5">
                    {/* Ayu */}
                    <div className="mt-6 lg:mt-10 grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

                        {/* Description */}
                        <div className="max-w-lg">
                            <h3 className="mt-8 text-xl font-medium tracking-tight px-2 bg-yellow-100 text-yellow-600 w-fit">
                                Favorite Person
                            </h3>

                            <SectionTitle blackTitle="Orang dibalik " redTitle="Selengean gua" className="mt-6" />

                            <p className="mt-6 text-sm leading-7 text-black/55 sm:text-base">
                                Ayu orang yang bikin hari-hari biasa terasa lebih spesial.
                                Bareng dia, hal-hal random, receh,
                                bahkan hal kecil yang sebenarnya nggak penting bisa jadi sesuatu yang bakal gw inget.
                            </p>

                            <p className="mt-4 text-sm leading-7 text-black/55 sm:text-base">
                                Dia juga salah satu orang yang paling nyaman buat gw ajak jadi diri gw sendiri.
                                Gw bisa ngoceh soal hal random, ngomongin sains berjam-jam, bercanda nggak jelas,
                                atau sekadar diem bareng dia. Dan entah gimana, dia tetap sabar ngadepin semua sisi selengean gw
                            </p>

                            <p className="mt-4 text-sm leading-7 text-black/55 sm:text-base">
                                Dia sering nanya, “Aku cantik nggak?”

                                Masalahnya, gw juga bingung harus jawab apa. Karena kapan dia nggak cantik?

                                Ayu, I love you.
                            </p>

                            <div className="mt-10 border-t border-black/10 pt-5">
                                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/35">
                                    Ayu — Favorite Person
                                </span>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="group relative mx-auto w-full max-w-[620px] overflow-hidden bg-black/5 lg:mx-0 lg:ml-auto">
                            {/* Image */}
                            <img
                                src="/ayu.jpg"
                                alt="Ayu"
                                className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                            {/* Default Label */}
                            <div className="absolute bottom-5 left-5 transition duration-500 group-hover:translate-y-3 group-hover:opacity-0">
                                <span className="bg-maroon px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white">
                                    Ayu — Girlfriend
                                </span>
                            </div>

                            {/* Hover Content */}
                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 translate-y-8 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                                {/* Name */}
                                <h3 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
                                    Ayu Salimah
                                </h3>

                                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
                                    My Favorite Person
                                </p>

                                {/* Description */}
                                <p className="mt-6 max-w-xl text-sm leading-6 text-white/75">
                                    The person behind my selengean side.
                                    Someone who makes ordinary days feel a little
                                    more special, even when we're doing absolutely
                                    nothing important.
                                </p>

                                {/* Info */}
                                <div className="mt-7 grid grid-cols-3 border-t border-white/15">
                                    {/* Food */}
                                    <div className="border-r border-white/15 py-4 pr-4">
                                        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                                            Favorite Food
                                        </p>

                                        <p className="mt-2 text-sm text-white">
                                            Ramen
                                        </p>
                                    </div>

                                    {/* Drink */}
                                    <div className="border-r border-white/15 px-4 py-4">
                                        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                                            Favorite Drink
                                        </p>

                                        <p className="mt-2 text-sm text-white">
                                            Matcha
                                        </p>
                                    </div>

                                    {/* Song */}
                                    <div className="py-4 pl-4">
                                        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                                            Favorite Song
                                        </p>

                                        <p className="mt-2 text-sm text-white">
                                            Taylor Swift - Enchanted
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Line */}
                                <div className="flex items-center justify-between border-t border-white/15 pt-4">
                                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
                                        Ayu — Girlfriend
                                    </span>

                                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
                                        Katir's Archive
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
