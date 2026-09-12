export function SectionTitle({ blackTitle, redTitle, className }) {
    return (
        <h2 className={`mb-4 text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl ${className}`}>
            {blackTitle}
            <span className="text-[#c8102e]"> {redTitle}.</span>
        </h2>
    )
}
