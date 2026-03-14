import { icon } from "../components/icons.js";

export function network() {
    const locations = [
        {
            name: "Penang",
            x: 146,
            y: 133,
            mobileX: 130,
            mobileY: 126,
            labelX: 58,
            labelY: 108,
            lineX: 124,
            lineY: 133,
            detail: "Northern service point supporting Penang and nearby industrial corridors."
        },
        {
            name: "Rawang",
            x: 248,
            y: 228,
            mobileX: 214,
            mobileY: 218,
            labelX: 308,
            labelY: 208,
            lineX: 294,
            lineY: 228,
            detail: "Primary operational hub for manufacturing, recovery, and Selangor distribution."
        },
        {
            name: "Nilai",
            x: 258,
            y: 282,
            mobileX: 228,
            mobileY: 268,
            labelX: 320,
            labelY: 272,
            lineX: 304,
            lineY: 282,
            detail: "Central support location for Negeri Sembilan routes and fast replenishment."
        },
        {
            name: "Johor Bahru",
            x: 302,
            y: 404,
            mobileX: 278,
            mobileY: 386,
            labelX: 344,
            labelY: 392,
            lineX: 336,
            lineY: 404,
            detail: "Southern branch covering Johor throughput and cross-border logistics demand."
        }
    ];

    return `
        <section id="about" class="section-shell network-section text-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                    <div data-reveal>
                        <p class="section-label text-brand-gold">Local Service on a National Scale</p>
                        <h2 class="section-title text-white">Regional strength with the discipline of a national service platform.</h2>
                        <p class="section-body mt-6 text-slate-300">
                            With a broad operating footprint and multiple service points, United Pallets supports
                            customers across Peninsular Malaysia while maintaining the responsiveness expected from a local partner.
                        </p>
                        <div class="network-legend mt-8">
                            ${locations
                                .map(
                                    ({ name, detail }) => `
                                    <div class="network-legend-item">
                                        <span class="network-legend-icon">${icon(name === "Penang" ? "mapPinned" : name === "Rawang" ? "factory" : name === "Nilai" ? "clipboardList" : "truck", { width: 18, height: 18 })}</span>
                                        <div>
                                            <p class="network-legend-title">${name}</p>
                                            <p class="network-legend-copy">${detail}</p>
                                        </div>
                                    </div>
                                `
                                )
                                .join("")}
                        </div>
                    </div>
                    <div class="relative overflow-hidden border border-white/10 bg-slate-900 p-6" data-reveal>
                        <div class="network-map">
                            <svg class="network-svg" viewBox="0 0 520 520" role="img" aria-label="Peninsular Malaysia service footprint map">
                                <defs>
                                    <linearGradient id="peninsulaFill" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#355f97" stop-opacity="0.92" />
                                        <stop offset="100%" stop-color="#1b3155" stop-opacity="0.98" />
                                    </linearGradient>
                                    <linearGradient id="coastGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stop-color="#7bb0ea" stop-opacity="0.45" />
                                        <stop offset="100%" stop-color="#f4a93d" stop-opacity="0.18" />
                                    </linearGradient>
                                </defs>

                                <path
                                    class="peninsula-outline"
                                    d="M246 42 L297 85 L293 135 L319 189 L311 250 L339 304 L329 370 L285 447 L246 420 L218 366 L206 286 L181 219 L192 133 L218 76 Z"
                                />
                                <path
                                    class="peninsula-highlight"
                                    d="M246 42 L297 85 L293 135 L319 189 L311 250 L339 304 L329 370 L285 447 L246 420 L218 366 L206 286 L181 219 L192 133 L218 76 Z"
                                />

                            ${locations
                                .map(
                                    ({ name, x, y, labelX, labelY, lineX, lineY, detail, mobileX, mobileY }) => `
                                    <g class="network-hotspot" data-pin tabindex="0" role="button" aria-label="${name} location">
                                        <line x1="${x}" y1="${y}" x2="${lineX}" y2="${lineY}" class="network-line desktop-only" />
                                        <line x1="${lineX}" y1="${lineY}" x2="${labelX}" y2="${labelY + 18}" class="network-line desktop-only" />
                                        <circle cx="${x}" cy="${y}" r="18" class="hotspot-ring" />
                                        <circle cx="${x}" cy="${y}" r="7" class="hotspot-core" />
                                        <g class="desktop-only">
                                            <rect x="${labelX}" y="${labelY}" width="${name === "Johor Bahru" ? 126 : 106}" height="36" class="hotspot-label-box" rx="3" />
                                            <circle cx="${labelX + 18}" cy="${labelY + 18}" r="6" class="hotspot-label-dot" />
                                            <text x="${labelX + 34}" y="${labelY + 23}" class="hotspot-label-text">${name}</text>
                                        </g>
                                        <g class="mobile-only">
                                            <circle cx="${mobileX}" cy="${mobileY}" r="16" class="hotspot-mobile-ring" />
                                            <circle cx="${mobileX}" cy="${mobileY}" r="6" class="hotspot-core" />
                                        </g>
                                    </g>
                                `
                                )
                                .join("")}
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
