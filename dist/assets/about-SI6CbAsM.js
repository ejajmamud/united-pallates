import{i as s,c as n}from"./site-DDmNp2k0.js";import{l as i,f as o}from"./siteContent-DK6WsTMm.js";function c(a){return a.map((e,t)=>`
            <article class="faq-item">
                <h3>
                    <button type="button" class="faq-trigger" @click="active = active === ${t} ? null : ${t}" :aria-expanded="(active === ${t}).toString()">
                        <span>${e.question}</span>
                        <span class="faq-plus" :class="active === ${t} ? 'rotate-45' : ''}">+</span>
                    </button>
                </h3>
                <div x-show="active === ${t}" x-collapse.duration.300ms class="faq-body">
                    <p>${e.answer}</p>
                </div>
            </article>
        `).join("")}document.querySelector("#about-faq").innerHTML=c(o.slice(0,4));document.querySelector("#location-list").innerHTML=i.map(a=>`
        <div class="network-legend-item">
            <span class="network-legend-icon">${s(a.icon,{width:18,height:18})}</span>
            <div>
                <p class="network-legend-title">${a.name}</p>
                <p class="network-legend-copy">${a.detail}</p>
            </div>
        </div>
    `).join("");n("about");
