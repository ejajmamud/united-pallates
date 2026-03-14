import { icon } from "../components/icons.js";

export function sustainability() {
    return `
        <section class="sustainability-scorecard">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="scorecard-shell">
                    <div class="scorecard-rank" data-reveal>
                        <span class="scorecard-year-top">20</span>
                        <span class="scorecard-year-bottom">25</span>
                        <p class="scorecard-label">Green Score Card</p>
                    </div>
                    <div class="scorecard-content">
                        <div class="scorecard-copy" data-reveal>
                            <p class="scorecard-kicker">Sustainability Impact</p>
                            <h2 class="scorecard-title">From used timber to <span>renewed operational value</span>.</h2>
                        </div>
                        <div class="scorecard-metrics">
                            <article class="scorecard-metric scorecard-metric--emerald" data-reveal>
                                <div class="scorecard-ring">
                                    <div class="scorecard-ring-core" aria-hidden="true">${icon("recycle", { width: 28, height: 28 })}</div>
                                </div>
                                <p class="scorecard-value">18,947</p>
                                <p class="scorecard-metric-label">Trees Preserved</p>
                            </article>
                            <article class="scorecard-metric scorecard-metric--gold" data-reveal>
                                <div class="scorecard-ring">
                                    <div class="scorecard-ring-core" aria-hidden="true">${icon("boxes", { width: 28, height: 28 })}</div>
                                </div>
                                <p class="scorecard-value">7,200</p>
                                <p class="scorecard-metric-label">Tons of Landfill Waste Avoided</p>
                            </article>
                            <article class="scorecard-metric scorecard-metric--blue" data-reveal>
                                <div class="scorecard-ring">
                                    <div class="scorecard-ring-core" aria-hidden="true">${icon("globe2", { width: 28, height: 28 })}</div>
                                </div>
                                <p class="scorecard-value">9,720</p>
                                <p class="scorecard-metric-label">Tons of CO2 Emissions Reduced</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
