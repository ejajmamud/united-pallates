import { heroSlides } from "../content/siteContent.js";

export function hero() {
    const slides = heroSlides
        .map(
            (slide, index) => `
            <img
                src="${slide}"
                alt="United Pallets operations"
                class="hero-slide absolute inset-0 h-full w-full object-cover ${index === 0 ? "is-active" : ""}"
                ${index > 0 ? 'loading="lazy"' : 'fetchpriority="high"'}
            />
        `
        )
        .join("");

    return `
        <section id="top" class="relative min-h-screen overflow-hidden border-b border-slate-800 bg-slate-950 text-white">
            <div class="absolute inset-0">
                ${slides}
                <div class="absolute inset-0 bg-slate-950/68"></div>
                <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,24,28,0.75)_0%,rgba(16,24,28,0.45)_48%,rgba(16,24,28,0.7)_100%)]"></div>
            </div>
            <div class="hero-parallax relative mx-auto grid min-h-screen max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 md:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24">
                <div class="max-w-3xl">
                    <p class="hero-kicker text-sm font-semibold uppercase tracking-label text-brand-gold">Industrial supply chain support</p>
                    <h1 class="hero-title mt-6 text-5xl font-extrabold leading-[1.05] text-white md:text-[56px]">
                        From Used to Renewed <span class="text-brand-gold">&mdash;</span> One Pallet at a Time
                    </h1>
                    <p class="hero-copy mt-6 max-w-2xl font-body text-lg leading-8 text-slate-200">
                        United Pallets manages the full pallet lifecycle, from supply and recovery to repair,
                        remanufacturing, and end-of-life reuse, helping businesses move product with more control and less waste.
                    </p>
                    <div class="hero-actions mt-10 flex flex-col gap-4 sm:flex-row">
                        <a href="#contact" class="cta-primary">Get a Quote Now</a>
                        <a href="#services" class="cta-secondary">Explore Services</a>
                    </div>
                </div>
                <div class="mt-12 grid gap-4 lg:mt-0">
                    <div class="border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                        <p class="text-sm font-semibold uppercase tracking-label text-brand-gold">Operational focus</p>
                        <p class="mt-4 font-body text-base leading-7 text-slate-200">
                            Built for manufacturers, logistics operators, and pallet-intensive businesses that need dependable throughput and disciplined service execution.
                        </p>
                    </div>
                    <div class="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                        <div class="border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                            <p class="text-xs font-semibold uppercase tracking-label text-brand-gold">Supply</p>
                            <p class="mt-3 font-body text-sm leading-6 text-slate-200">New and recycled pallet availability with operational consistency.</p>
                        </div>
                        <div class="border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                            <p class="text-xs font-semibold uppercase tracking-label text-brand-gold">Recovery</p>
                            <p class="mt-3 font-body text-sm leading-6 text-slate-200">Collection routes and facility support that keep used pallets moving.</p>
                        </div>
                        <div class="border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                            <p class="text-xs font-semibold uppercase tracking-label text-brand-gold">Lifecycle</p>
                            <p class="mt-3 font-body text-sm leading-6 text-slate-200">Repair, remanufacturing, and reuse programs designed around cost control.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
