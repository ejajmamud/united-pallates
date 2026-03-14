import { serviceCards, homeStats, resources, locations } from "../content/siteContent.js";
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
document.querySelector("#home-articles").innerHTML = resources.slice(0, 4).map(articleCard).join("");

bootSite("home");
