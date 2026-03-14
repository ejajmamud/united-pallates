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
                            <div class="network-live-map" data-network-map aria-label="Peninsular Malaysia service footprint map"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
