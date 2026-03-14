import { icon } from "../components/icons.js";

const serviceStyles = {
    "service-card--buy": [
        "background-color:#2c5d99",
        "background-image:radial-gradient(circle at 16% 16%, rgba(255,255,255,0.16), transparent 20%), radial-gradient(circle at 84% 18%, rgba(123,176,234,0.4), transparent 28%), radial-gradient(circle at 76% 84%, rgba(88,142,210,0.24), transparent 32%), linear-gradient(145deg, #18365f 0%, #2c5d99 44%, #5c90cf 100%)",
        "color:#ffffff"
    ].join(";"),
    "service-card--sell": [
        "background-color:#bc8933",
        "background-image:radial-gradient(circle at 16% 16%, rgba(255,255,255,0.16), transparent 20%), radial-gradient(circle at 84% 18%, rgba(244,169,61,0.4), transparent 28%), radial-gradient(circle at 76% 84%, rgba(233,185,98,0.22), transparent 32%), linear-gradient(145deg, #7e5c23 0%, #bc8933 44%, #ddb15b 100%)",
        "color:#ffffff"
    ].join(";"),
    "service-card--manage": [
        "background-color:#317e88",
        "background-image:radial-gradient(circle at 16% 16%, rgba(255,255,255,0.16), transparent 20%), radial-gradient(circle at 84% 18%, rgba(104,196,214,0.34), transparent 28%), radial-gradient(circle at 76% 84%, rgba(71,145,166,0.22), transparent 32%), linear-gradient(145deg, #204f57 0%, #317e88 44%, #60aebc 100%)",
        "color:#ffffff"
    ].join(";")
};

export function services() {
    const cards = [
        {
            title: "Buy Pallets",
            copy: "Source new, recycled, and remanufactured pallet formats matched to your handling requirements.",
            className: "service-card--buy",
            iconName: "package"
        },
        {
            title: "Sell Pallets",
            copy: "Convert used pallet volume into a structured recovery program with pickup, grading, and reuse potential.",
            className: "service-card--sell",
            iconName: "handCoins"
        },
        {
            title: "Comprehensive Services",
            copy: "Bring supply, repair, collection, and lifecycle reporting under one operating partner.",
            className: "service-card--manage",
            iconName: "clipboardList"
        }
    ];

    return `
        <section id="services" class="section-shell bg-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div class="section-intro" data-reveal>
                        <p class="section-label">Innovative Pallet Services</p>
                        <h2 class="section-title">Practical lifecycle solutions built for <span class="heading-accent">daily operational use</span>.</h2>
                    </div>
                    <p class="section-body max-w-2xl" data-reveal>
                        From single orders to structured pallet management programs, United Pallets supports the flow of
                        supply, recovery, repair, and reuse with services designed to reduce disruption across the chain.
                    </p>
                </div>
                <div class="mt-14 grid gap-6 md:grid-cols-3">
                    ${cards
                        .map(
                            ({ title, copy, className, iconName }) => `
                            <article class="service-card ${className}" data-reveal style="${serviceStyles[className] || serviceStyles["service-card--buy"]}">
                                <div class="service-icon" aria-hidden="true">${icon(iconName, { width: 24, height: 24 })}</div>
                                <h3 class="mt-6 text-2xl font-semibold">${title}</h3>
                                <p class="mt-4 font-body text-base leading-7">${copy}</p>
                                <div class="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/90">
                                    Learn more
                                    <span class="service-arrow" aria-hidden="true">${icon("arrowRight", { width: 18, height: 18 })}</span>
                                </div>
                            </article>
                        `
                        )
                        .join("")}
                </div>
            </div>
        </section>
    `;
}
