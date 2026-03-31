import { resources } from "../content/siteContent.js";
import { bootSite } from "./site.js";

const articleContent = {
    "heat-treated-vs-fumigated": {
        date: "March 2026",
        category: "Operations & Compliance",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80",
        paragraphs: [
            "When pallets are intended for export or regulated transit, treatment standards become an operational requirement rather than a paperwork formality. The two terms most businesses encounter are heat treated and fumigated pallets, but they are not interchangeable in practice.",
            "Heat treatment uses controlled internal timber temperature exposure to reduce pest risk while preserving a cleaner operating profile for businesses that do not want chemical residue concerns tied to their packaging chain. For many industrial users, this method aligns more naturally with current compliance expectations and warehouse handling preferences.",
            "Fumigation, by contrast, refers to a chemical treatment process historically used for pest control. While it may still appear in older discussions, many operators now prefer heat-treated pallets because they fit better with contemporary export handling, environmental expectations, and documentation workflows.",
            "The right choice depends on destination requirements, customer standards, and how your internal teams manage pallet sourcing at scale. United Pallets works with customers to define the right pallet type before it becomes a shipping risk or a cost problem."
        ]
    },
    "2-way-vs-4-way": {
        date: "March 2026",
        category: "Operations",
        image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&w=1400&q=80",
        paragraphs: [
            "The difference between 2 way and 4 way pallet designs starts with access. A 2 way pallet is entered from two opposite sides, while a 4 way pallet is built for entry from all four sides using compatible handling equipment.",
            "That difference affects more than convenience. Forklift movement, warehouse turning space, line-side loading, and rack interaction all become easier to manage when pallet access matches the way your operation actually moves product.",
            "For operations with tight handling sequences or repeated repositioning, a 4 way pallet can reduce friction and improve throughput. In simpler flows or cost-sensitive programs, a 2 way pallet may still be the better fit.",
            "The best option depends on load type, handling equipment, storage method, and budget. Choosing the right pallet entry style early helps avoid unnecessary inefficiency later in the supply chain."
        ]
    },
    "csr-2025": {
        date: "March 2026",
        category: "Corporate",
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
        paragraphs: [
            "United Pallets' 2025 Corporate Social Responsibility report highlights the operational impact of pallet recovery, reuse, and responsible timber circulation across the business.",
            "The report focuses on practical outcomes rather than abstract pledges: extending pallet life, reducing wood waste, supporting recovery programs, and improving transparency in how materials move through industrial supply chains.",
            "For customers, this matters because sustainability performance is no longer separate from procurement. It influences supplier selection, reporting expectations, and how logistics partners are evaluated over time.",
            "A credible CSR approach should show measurable progress, operational discipline, and long-term commitment. That is the standard customers increasingly expect from pallet suppliers and recovery partners."
        ]
    },
    "wooden-pallet-parts": {
        date: "March 2026",
        category: "Education",
        image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1400&q=80",
        paragraphs: [
            "Understanding the parts of a wooden pallet helps buyers and operations teams make better decisions about durability, repairability, and fit for use. Core components such as deckboards, stringers, blocks, and base elements each affect handling performance.",
            "The top deck supports the load, while the lower structure influences stability, entry style, and structural reinforcement. Small changes in layout can affect whether a pallet performs well in warehousing, distribution, or export settings.",
            "Knowing the difference between structural parts also makes inspection easier. Teams can identify damage faster, understand whether repair is viable, and communicate specifications more clearly with suppliers.",
            "For procurement and logistics teams, pallet literacy reduces avoidable mistakes. It creates better alignment between product loads, handling equipment, and the pallet format selected for the job."
        ]
    }
};

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug") || resources[0].slug;
const article = resources.find((item) => item.slug === slug) || resources[0];
const content = articleContent[article.slug] || articleContent[resources[0].slug];

document.title = `${article.title} | United Pallets`;
document.querySelector('meta[name="description"]')?.setAttribute("content", article.description);
document.querySelector(".display-lg").innerHTML = article.title.replace(" vs ", ' <span class="heading-accent">vs</span> ');
document.querySelector(".article-meta").innerHTML = `<span>United Pallets Editorial</span><span>${content.date}</span><span>${content.category}</span>`;
document.querySelector(".article-main").innerHTML = `
    <img src="${content.image}" alt="${article.title}">
    ${content.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
`;

document.querySelector("#related-articles").innerHTML = resources
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3)
    .map((item) => `<a href="./article.html?slug=${item.slug}">${item.title}</a>`)
    .join("");

bootSite("resources");
