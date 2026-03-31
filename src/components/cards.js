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

const productTilePalettes = {
    blue: {
        details: [
            { bg: "linear-gradient(145deg,#dbeafe 0%,#93c5fd 100%)", border: "#60a5fa", iconBg: "linear-gradient(145deg,#eff6ff 0%,#93c5fd 100%)", iconColor: "#1d4ed8" },
            { bg: "linear-gradient(145deg,#ccfbf1 0%,#67e8f9 100%)", border: "#22d3ee", iconBg: "linear-gradient(145deg,#ecfeff 0%,#67e8f9 100%)", iconColor: "#0f766e" },
            { bg: "linear-gradient(145deg,#f3e8ff 0%,#d8b4fe 100%)", border: "#c084fc", iconBg: "linear-gradient(145deg,#faf5ff 0%,#d8b4fe 100%)", iconColor: "#7e22ce" },
            { bg: "linear-gradient(145deg,#fef3c7 0%,#fcd34d 100%)", border: "#f59e0b", iconBg: "linear-gradient(145deg,#fffbeb 0%,#fcd34d 100%)", iconColor: "#b45309" }
        ],
        features: [
            { bg: "linear-gradient(145deg,#fee2e2 0%,#fca5a5 100%)", border: "#f87171", iconBg: "linear-gradient(145deg,#fff1f2 0%,#fca5a5 100%)", iconColor: "#be123c" },
            { bg: "linear-gradient(145deg,#e0f2fe 0%,#7dd3fc 100%)", border: "#38bdf8", iconBg: "linear-gradient(145deg,#f0f9ff 0%,#7dd3fc 100%)", iconColor: "#0369a1" },
            { bg: "linear-gradient(145deg,#dcfce7 0%,#86efac 100%)", border: "#4ade80", iconBg: "linear-gradient(145deg,#f0fdf4 0%,#86efac 100%)", iconColor: "#15803d" }
        ]
    },
    gold: {
        details: [
            { bg: "linear-gradient(145deg,#fde68a 0%,#fbbf24 100%)", border: "#f59e0b", iconBg: "linear-gradient(145deg,#fffbeb 0%,#fbbf24 100%)", iconColor: "#b45309" },
            { bg: "linear-gradient(145deg,#dbeafe 0%,#93c5fd 100%)", border: "#60a5fa", iconBg: "linear-gradient(145deg,#eff6ff 0%,#93c5fd 100%)", iconColor: "#1d4ed8" },
            { bg: "linear-gradient(145deg,#fce7f3 0%,#f9a8d4 100%)", border: "#f472b6", iconBg: "linear-gradient(145deg,#fff1f2 0%,#f9a8d4 100%)", iconColor: "#be185d" },
            { bg: "linear-gradient(145deg,#dcfce7 0%,#86efac 100%)", border: "#4ade80", iconBg: "linear-gradient(145deg,#f0fdf4 0%,#86efac 100%)", iconColor: "#15803d" }
        ],
        features: [
            { bg: "linear-gradient(145deg,#ffedd5 0%,#fdba74 100%)", border: "#fb923c", iconBg: "linear-gradient(145deg,#fff7ed 0%,#fdba74 100%)", iconColor: "#c2410c" },
            { bg: "linear-gradient(145deg,#e0f2fe 0%,#7dd3fc 100%)", border: "#38bdf8", iconBg: "linear-gradient(145deg,#f0f9ff 0%,#7dd3fc 100%)", iconColor: "#0369a1" },
            { bg: "linear-gradient(145deg,#ede9fe 0%,#c4b5fd 100%)", border: "#a78bfa", iconBg: "linear-gradient(145deg,#f5f3ff 0%,#c4b5fd 100%)", iconColor: "#6d28d9" }
        ]
    },
    slate: {
        details: [
            { bg: "linear-gradient(145deg,#ccfbf1 0%,#5eead4 100%)", border: "#2dd4bf", iconBg: "linear-gradient(145deg,#f0fdfa 0%,#5eead4 100%)", iconColor: "#0f766e" },
            { bg: "linear-gradient(145deg,#dbeafe 0%,#60a5fa 100%)", border: "#3b82f6", iconBg: "linear-gradient(145deg,#eff6ff 0%,#60a5fa 100%)", iconColor: "#1d4ed8" },
            { bg: "linear-gradient(145deg,#fee2e2 0%,#fca5a5 100%)", border: "#f87171", iconBg: "linear-gradient(145deg,#fff1f2 0%,#fca5a5 100%)", iconColor: "#be123c" },
            { bg: "linear-gradient(145deg,#fef3c7 0%,#fcd34d 100%)", border: "#f59e0b", iconBg: "linear-gradient(145deg,#fffbeb 0%,#fcd34d 100%)", iconColor: "#b45309" }
        ],
        features: [
            { bg: "linear-gradient(145deg,#fce7f3 0%,#f9a8d4 100%)", border: "#f472b6", iconBg: "linear-gradient(145deg,#fff1f2 0%,#f9a8d4 100%)", iconColor: "#be185d" },
            { bg: "linear-gradient(145deg,#e0f2fe 0%,#7dd3fc 100%)", border: "#38bdf8", iconBg: "linear-gradient(145deg,#f0f9ff 0%,#7dd3fc 100%)", iconColor: "#0369a1" },
            { bg: "linear-gradient(145deg,#f3e8ff 0%,#d8b4fe 100%)", border: "#c084fc", iconBg: "linear-gradient(145deg,#faf5ff 0%,#d8b4fe 100%)", iconColor: "#7e22ce" }
        ]
    },
    "blue-soft": {
        details: [
            { bg: "linear-gradient(145deg,#dbeafe 0%,#60a5fa 100%)", border: "#3b82f6", iconBg: "linear-gradient(145deg,#eff6ff 0%,#60a5fa 100%)", iconColor: "#1d4ed8" },
            { bg: "linear-gradient(145deg,#dcfce7 0%,#86efac 100%)", border: "#4ade80", iconBg: "linear-gradient(145deg,#f0fdf4 0%,#86efac 100%)", iconColor: "#15803d" },
            { bg: "linear-gradient(145deg,#fce7f3 0%,#f9a8d4 100%)", border: "#f472b6", iconBg: "linear-gradient(145deg,#fff1f2 0%,#f9a8d4 100%)", iconColor: "#be185d" },
            { bg: "linear-gradient(145deg,#ede9fe 0%,#c4b5fd 100%)", border: "#a78bfa", iconBg: "linear-gradient(145deg,#f5f3ff 0%,#c4b5fd 100%)", iconColor: "#6d28d9" }
        ],
        features: [
            { bg: "linear-gradient(145deg,#ffedd5 0%,#fdba74 100%)", border: "#fb923c", iconBg: "linear-gradient(145deg,#fff7ed 0%,#fdba74 100%)", iconColor: "#c2410c" },
            { bg: "linear-gradient(145deg,#ccfbf1 0%,#67e8f9 100%)", border: "#22d3ee", iconBg: "linear-gradient(145deg,#ecfeff 0%,#67e8f9 100%)", iconColor: "#0f766e" },
            { bg: "linear-gradient(145deg,#fef3c7 0%,#fcd34d 100%)", border: "#f59e0b", iconBg: "linear-gradient(145deg,#fffbeb 0%,#fcd34d 100%)", iconColor: "#b45309" }
        ]
    }
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
    const palette = productTilePalettes[product.accent] || productTilePalettes.blue;
    return `
        <article class="product-card product-card--${product.accent}" x-show="filter === 'all' || filter === '${product.type}'" x-transition>
            <div class="product-media">
                <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
            </div>
            <div class="product-body">
                <span class="card-kicker">${product.type.replace("-", " ")}</span>
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="product-detail-grid">
                    ${product.details.map((detail, index) => `
                        <div class="product-detail" style="background:${palette.details[index]?.bg || palette.details[0].bg}; border-color:${palette.details[index]?.border || palette.details[0].border};">
                            <span class="product-detail-label">${detail.label}</span>
                            <span class="product-detail-value">${detail.value}</span>
                        </div>
                    `).join("")}
                </div>
                <div class="product-feature-grid">
                    ${product.specs.map((spec, index) => `
                        <div class="product-feature" style="background:${palette.features[index]?.bg || palette.features[0].bg}; border-color:${palette.features[index]?.border || palette.features[0].border};">
                            <span class="product-feature-icon" style="background:${palette.features[index]?.iconBg || palette.features[0].iconBg}; color:${palette.features[index]?.iconColor || palette.features[0].iconColor};">${icon("shieldCheck", { width: 16, height: 16 })}</span>
                            <span class="product-feature-text">${spec}</span>
                        </div>
                    `).join("")}
                </div>
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
                <a href="./article.html?slug=${article.slug}" class="inline-link">Read more ${icon("arrowRight", { width: 16, height: 16 })}</a>
            </div>
        </article>
    `;
}

export function ctaBanner() {
    return `
        <section class="section-block section-block--cta bg-white">
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
