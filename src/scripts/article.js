import { resources } from "../content/siteContent.js";
import { bootSite } from "./site.js";

document.querySelector("#related-articles").innerHTML = resources
    .slice(0, 3)
    .map((article) => `<a href="./article.html">${article.title}</a>`)
    .join("");

bootSite("resources");
