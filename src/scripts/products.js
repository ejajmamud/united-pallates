import { productCards } from "../content/siteContent.js";
import { productCard } from "../components/cards.js";
import { bootSite } from "./site.js";

document.querySelector("#product-grid").innerHTML = productCards.map(productCard).join("");
bootSite("products");
