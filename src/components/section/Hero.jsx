import { useEffect, useRef, useState } from "react";

const track = {
    title: "Terlalu Pahit",
    artist: "Slank",
    album: "Palalopeyank",
    cover: "/palalopeyank.jpeg",
    audio: "/TerlaluPahit.mp3",
};

const socials = [
    { label: "Instagram", href: "#" },
    { label: "Tiktok", href: "#" },
    { label: "Spotify", href: "#" },
];

function formatTime(seconds) {
    if (!seconds || Number.isNaN(seconds)) return "00:00";

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
        2,
        "0"
    )}`;
}

export default function App() {
    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = async () => {
        const audio = audioRef.current;

        if (!audio) return;

        try {
            if (audio.paused) {
                await audio.play();
                setIsPlaying(true);
            } else {
                audio.pause();
                setIsPlaying(false);
            }
        } catch (error) {
            console.error("Audio playback failed:", error);
        }
    };

    const handleTimeUpdate = () => {
        if (!audioRef.current) return;

        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        if (!audioRef.current) return;

        setDuration(audioRef.current.duration);
    };

    const handleSeek = (e) => {
        const value = Number(e.target.value);

        if (!audioRef.current) return;

        audioRef.current.currentTime = value;
        setCurrentTime(value);
    };

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        const handleEnded = () => {
            setIsPlaying(false);
            setCurrentTime(0);
        };

        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("ended", handleEnded);
        };
    }, []);

    const progress =
        duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0;

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#f1f1ec] text-[#0a0a0a]">
            <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
                <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:4px_4px]" />
            </div>

            <div className="relative mx-auto flex min-h-screen max-w-[1500px] flex-col px-6 py-6 sm:px-10 lg:px-16">
                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="grid flex-1 items-center gap-16 py-16 lg:grid-cols-[1fr_0.85fr] lg:gap-24 lg:py-20">
                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div className="max-w-2xl">
                        {/* Badge */}

                        <div className="mb-7 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-black/50">
                            <span className="h-2 w-2 rounded-full bg-[#c8102e] shadow-[0_0_0_4px_rgba(200,16,46,0.08)]" />

                            <span>01 - SELENGEAN</span>
                        </div>

                        {/* Title */}

                        <h1 className="text-[clamp(2.5rem,14vw,8rem)] font-black leading-[0.92] tracking-[-0.045em]">
                            <span className="block">HALO</span>

                            <span className="relative block text-[#c8102e]">
                                TEMANKU
                            </span>
                        </h1>

                        {/* Description */}

                        <p className="mt-6 lg:mt-10 max-w-lg text-sm leading-7 text-black/55 sm:text-[15px]">
                            Gua Rifqi, lu pada bisa panggil gw Katir,
                            Di kesempatan kali ini Gua kaga mau Showcase
                            Project, Skill dan Apapun itu yang bersifat formal,
                            Disini Gua cuma ekspresiin isi curahan hati dan
                            ide Gua yang bikin kaga bisa tidur semaleman.
                        </p>

                        {/* Social */}

                        <div className="mb-4 mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                            {socials.map((social) => (
                                <a key={social.label} href={social.href}
                                    className="group relative font-mono text-[9px] uppercase tracking-[0.12em]"
                                >
                                    {social.label}

                                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c8102e] transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* =================================================
                        RIGHT / MUSIC
                    ================================================= */}

                    <div className="relative mx-auto w-full max-w-[360px] lg:mx-0 lg:ml-auto">
                        {/* =================================================
                            MUSIC
                        ================================================= */}

                        <div className="relative">
                            {/* =================================================
                                ALBUM COVER
                            ================================================= */}

                            <div className="group relative aspect-square overflow-hidden bg-neutral-900">
                                <img src={track.cover} alt={`${track.album} cover`}
                                    className={`h-full w-full object-cover transition duration-700 ${isPlaying
                                        ? "scale-[1.035]" : "scale-100 group-hover:scale-[1.04]"
                                        }`}
                                />

                                {/* Image overlay */}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                                {/* Album label */}

                                <div className="absolute bottom-0 left-0 bg-[#c8102e] p-2 font-mono text-[8px] uppercase tracking-[0.16em]">
                                    {track.album}
                                </div>

                                {/* Track number */}

                                <span className="absolute right-5 top-5 font-mono text-[9px] text-white">
                                    01
                                </span>
                            </div>

                            {/* =================================================
                                TRACK INFORMATION
                            ================================================= */}

                            <div className="px-1 pt-6">
                                <div className="flex items-center justify-between gap-5">
                                    <div className="min-w-0">
                                        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#c8102e]">
                                            Favorite Music
                                        </p>

                                        <h2 className="truncate text-xl font-bold tracking-[-0.04em] sm:text-2xl">
                                            {track.title}
                                        </h2>

                                        {/* Artist / Album */}

                                        <p className="mt-1 flex items-center text-xs text-black/40">
                                            <span>{track.artist}</span>

                                            <span className="mx-1 h-1 w-1 shrink-0 rounded-full bg-[#c8102e]" />

                                            <span>{track.album}</span>
                                        </p>
                                    </div>

                                    {/* =================================================
                                        PLAY BUTTON
                                    ================================================= */}

                                    <button onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}
                                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-all duration-300 ${isPlaying
                                            ? "bg-[#c8102e] text-white" : "bg-black text-white hover:bg-[#c8102e]"
                                            }`}
                                    >
                                        {isPlaying ? (
                                            <span className="flex gap-1">
                                                <span className="h-4 w-[3px] bg-current" />
                                                <span className="h-4 w-[3px] bg-current" />
                                            </span>
                                        ) : (<span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-current" />)}
                                    </button>
                                </div>
                            </div>

                            {/* =================================================
                                CUSTOM TIMELINE
                            ================================================= */}

                            <div className="px-1 pt-6">
                                <div className="relative h-4 w-full">

                                    {/* Base timeline */}
                                    <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-black/15" />

                                    {/* Played timeline */}
                                    <div className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#c8102e]"
                                        style={{
                                            width: `${progress}%`,
                                        }}
                                    />

                                    {/* Range input */}
                                    <input type="range" min="0" max={duration || 0} value={currentTime} onChange={handleSeek}
                                        aria-label="Seek audio" className="absolute inset-0 z-10 h-full w-full cursor-pointer appearance-none bg-transparent opacity-0" />

                                    {/* Progress dot */}
                                    <div className="pointer-events-none absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8102e]"
                                        style={{
                                            left: `${progress}%`,
                                        }}
                                    />
                                </div>

                                {/* Time */}

                                <div className="mt-1 flex justify-between font-mono text-xs text-black/35">
                                    <span>{formatTime(currentTime)}</span>

                                    <span>{formatTime(duration)}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* =========================================================
                    AUDIO
                ========================================================= */}
                <audio ref={audioRef} src={track.audio} preload="metadata" onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} />
            </div>
        </main>
    );
}
