import { faqItems } from "../content/siteContent.js";

export function faq() {
    return `
        <section id="faq" class="section-shell bg-brand-mist">
            <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" data-reveal>
                <div class="text-center">
                    <p class="section-label justify-center">FAQ</p>
                    <h2 class="section-title mx-auto max-w-3xl">Clear answers for <span class="heading-accent-soft">procurement teams</span>, operations leads, and recovery partners.</h2>
                </div>
                <div class="mt-12 space-y-3" x-data="{ active: 0 }">
                    ${faqItems
                        .map(
                            (item, index) => `
                            <article class="faq-panel">
                                <h3>
                                    <button
                                        type="button"
                                        class="faq-trigger"
                                        @click="active = active === ${index} ? null : ${index}"
                                        :aria-expanded="(active === ${index}).toString()"
                                    >
                                        <span>${item.question}</span>
                                        <span class="faq-symbol" :class="active === ${index} ? 'rotate-45' : ''">+</span>
                                    </button>
                                </h3>
                                <div x-show="active === ${index}" x-collapse.duration.300ms class="faq-answer">
                                    <p>${item.answer}</p>
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
