import { resources } from "../content/siteContent.js";
import { articleCard } from "../components/cards.js";
import { bootSite } from "./site.js";

document.querySelector("#resource-grid").innerHTML = resources.map(articleCard).join("");
bootSite("resources");
