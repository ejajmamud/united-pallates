import { stats } from "../content/siteContent.js";
import { icon } from "../components/icons.js";

export function coverage() {
    const statIcons = ["boxes", "truck", "shieldCheck"];
    const statClasses = ["stat-panel--blue", "stat-panel--gold", "stat-panel--blue-soft"];
    return `
        <section id="products" class="section-shell bg-brand-mist">
            <div class="coverage-shell mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
                <div class="coverage-media-grid grid gap-4 sm:grid-cols-2" data-reveal>
                    <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80" alt="Fleet and pallet logistics" class="coverage-image sm:col-span-2" loading="lazy" />
                    <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80" alt="Warehouse aisle" class="coverage-image" loading="lazy" />
                    <img src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=900&q=80" alt="Pallet handling" class="coverage-image" loading="lazy" />
                </div>
                <div class="coverage-content">
                    <div class="coverage-copy" data-reveal>
                        <p class="section-label">Nationwide Pallet Services Provider</p>
                        <h2 class="section-title">Coverage built for <span class="heading-accent-soft">supply chain continuity</span>, not just one-off delivery.</h2>
                        <p class="section-body mt-6">
                            United Pallets manufactures and supplies both new and recycled pallets nationwide. The
                            operating model combines manufacturing, recycling, service locations, and recovery support to
                            keep customer programs responsive and scalable.
                        </p>
                    </div>
                    <div class="coverage-stats mt-10 grid gap-4 sm:grid-cols-3" data-reveal>
                        ${stats
                            .map(
                                (stat, index) => `
                                <article class="stat-panel ${statClasses[index]}">
                                    <div class="stat-panel-top">
                                        <div class="stat-icon" aria-hidden="true">${icon(statIcons[index], { width: 18, height: 18 })}</div>
                                    </div>
                                    <p class="stat-number" data-counter="${stat.value}" data-suffix="${stat.suffix}">0</p>
                                    <p class="stat-copy">${stat.label}</p>
                                </article>
                            `
                            )
                            .join("")}
                    </div>
                </div>
            </div>
        </section>
    `;
}
