import { serviceCards, homeStats, resources, locations, faqItems } from "../content/siteContent.js";
import { articleCard, serviceCard, statCard } from "../components/cards.js";
import { icon } from "../components/icons.js";
import { bootSite } from "./site.js";

document.querySelector("#home-services").innerHTML = serviceCards.map(serviceCard).join("");
document.querySelector("#home-stats").innerHTML = homeStats.map(statCard).join("");
document.querySelector("#home-network-list").innerHTML = locations
    .map(
        (location) => `
        <div class="network-legend-item">
            <span class="network-legend-icon">${icon(location.icon, { width: 18, height: 18 })}</span>
            <div>
                <p class="network-legend-title">${location.name}</p>
                <p class="network-legend-copy">${location.detail}</p>
            </div>
        </div>
    `
    )
    .join("");
document.querySelector("#home-faq-list").innerHTML = faqItems
    .slice(0, 6)
    .map(
        (item, index) => `
        <article class="home-faq-item" :class="activeFaq === ${index} ? 'is-active' : ''">
            <button type="button" class="home-faq-trigger" @click="activeFaq = activeFaq === ${index} ? null : ${index}" :aria-expanded="(activeFaq === ${index}).toString()">
                <span class="home-faq-trigger-icon">${icon(index % 2 === 0 ? "shieldCheck" : "clipboardList", { width: 18, height: 18 })}</span>
                <span class="home-faq-trigger-copy">
                    <span class="home-faq-question">${item.question}</span>
                    <span class="home-faq-meta">${index < 2 ? "Most asked" : index < 4 ? "Need-to-know" : "Quick reference"}</span>
                </span>
                <span class="home-faq-plus" :class="activeFaq === ${index} ? 'is-open' : ''">+</span>
            </button>
            <div x-show="activeFaq === ${index}" x-collapse.duration.300ms class="home-faq-answer">
                <p>${item.answer}</p>
            </div>
        </article>
    `
    )
    .join("");
document.querySelector("#home-articles").innerHTML = resources.slice(0, 4).map(articleCard).join("");

bootSite("home");
