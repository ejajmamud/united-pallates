import { locations, faqItems } from "../content/siteContent.js";
import { renderFaq } from "../components/faq.js";
import { icon } from "../components/icons.js";
import { bootSite } from "./site.js";

document.querySelector("#about-faq").innerHTML = renderFaq(faqItems.slice(0, 4));
document.querySelector("#location-list").innerHTML = locations
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

bootSite("about");
