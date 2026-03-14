import { articleCards } from "../content/siteContent.js";
import { icon } from "../components/icons.js";

export function articles() {
    return `
        <section id="resources" class="section-shell bg-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                    <div data-reveal>
                        <p class="section-label">News and Articles</p>
                        <h2 class="section-title">Useful reading for teams working with <span class="heading-accent">timber packaging</span> every day.</h2>
                    </div>
                    <p class="section-body max-w-2xl" data-reveal>
                        These resource topics translate technical pallet decisions into practical guidance for operations,
                        procurement, and compliance teams.
                    </p>
                </div>
                <div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    ${articleCards
                        .map(
                            (article) => `
                            <article class="article-card" data-reveal>
                                <div class="overflow-hidden">
                                    <img src="${article.image}" alt="${article.title}" class="article-image" loading="lazy" />
                                </div>
                                <div class="p-6">
                                    <h3 class="text-2xl font-semibold text-slate-925">${article.title}</h3>
                                    <p class="mt-4 font-body text-base leading-7 text-slate-600">${article.description}</p>
                                    <a href="#contact" class="article-link mt-6 inline-flex items-center gap-2">Read more <span aria-hidden="true">${icon("arrowRight", { width: 18, height: 18 })}</span></a>
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
