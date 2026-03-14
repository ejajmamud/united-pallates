import { icon } from "./icons.js";

const serviceCardStyles = {
    blue: [
        "background-color:#356cb0",
        "background-image:radial-gradient(circle at 16% 16%, rgba(255,255,255,0.18), transparent 20%), radial-gradient(circle at 84% 18%, rgba(123,176,234,0.42), transparent 28%), radial-gradient(circle at 76% 84%, rgba(88,142,210,0.26), transparent 32%), linear-gradient(145deg, #21487c 0%, #356cb0 44%, #6fa3dd 100%)",
        "color:#ffffff"
    ].join(";"),
    gold: [
        "background-color:#c99336",
        "background-image:radial-gradient(circle at 16% 16%, rgba(255,255,255,0.18), transparent 20%), radial-gradient(circle at 84% 18%, rgba(244,169,61,0.42), transparent 28%), radial-gradient(circle at 76% 84%, rgba(245,191,94,0.22), transparent 32%), linear-gradient(145deg, #9b7029 0%, #c99336 44%, #e0b35c 100%)",
        "color:#ffffff"
    ].join(";"),
    slate: [
        "background-color:#338b96",
        "background-image:radial-gradient(circle at 16% 16%, rgba(255,255,255,0.18), transparent 20%), radial-gradient(circle at 84% 18%, rgba(104,196,214,0.36), transparent 28%), radial-gradient(circle at 76% 84%, rgba(71,145,166,0.22), transparent 32%), linear-gradient(145deg, #245a64 0%, #338b96 44%, #67b8c5 100%)",
        "color:#ffffff"
    ].join(";")
};

export function serviceCard({ title, description, accent, icon: iconName }) {
    return `
        <article class="feature-card feature-card--${accent}" data-reveal style="${serviceCardStyles[accent] || serviceCardStyles.blue}">
            <div class="feature-card-glow"></div>
            <div class="feature-icon">${icon(iconName, { width: 24, height: 24 })}</div>
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="./services.html" class="inline-link">Learn more ${icon("arrowRight", { width: 16, height: 16 })}</a>
        </article>
    `;
}

export function statCard({ value, suffix, label, icon: iconName, accent }) {
    return `
        <article class="stat-card stat-card--${accent}" data-reveal>
            <div class="stat-card-glow"></div>
            <div class="stat-card-top">
                <div class="stat-card-icon">${icon(iconName, { width: 20, height: 20 })}</div>
            </div>
            <p class="stat-value" data-counter="${value}" data-suffix="${suffix}">0</p>
            <p class="stat-label">${label}</p>
        </article>
    `;
}

export function productCard(product) {
    return `
        <article class="product-card product-card--${product.accent}" x-show="filter === 'all' || filter === '${product.type}'" x-transition>
            <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
            <div class="product-body">
                <span class="card-kicker">${product.type.replace("-", " ")}</span>
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <ul class="spec-list">
                    ${product.specs.map((spec) => `<li>${spec}</li>`).join("")}
                </ul>
            </div>
        </article>
    `;
}

export function articleCard(article) {
    return `
        <article class="article-card article-card--${article.accent || "blue"}" data-reveal>
            <img src="${article.image}" alt="${article.title}" class="article-image" loading="lazy">
            <div class="article-body">
                <span class="tag">${article.category}</span>
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="./article.html" class="inline-link">Read more ${icon("arrowRight", { width: 16, height: 16 })}</a>
            </div>
        </article>
    `;
}

export function ctaBanner() {
    return `
        <section class="section-block bg-white">
            <div class="container cta-banner">
                <div>
                    <p class="eyebrow text-brand-gold">Request a Quote</p>
                    <h2 class="display-md text-white">Need pallet supply, recovery support, or a structured logistics program?</h2>
                </div>
                <a href="./contact.html" class="btn-primary">Talk to United Pallets</a>
            </div>
        </section>
    `;
}
