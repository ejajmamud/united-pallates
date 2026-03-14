import{s as t,a as o,i as s,b as i,c}from"./site-YEAJUXZo.js";import{s as r,h as n,l,f as m,r as p}from"./siteContent-CmZOU2qp.js";document.querySelector("#home-services").innerHTML=r.map(t).join("");document.querySelector("#home-stats").innerHTML=n.map(o).join("");document.querySelector("#home-network-list").innerHTML=l.map(a=>`
        <div class="network-legend-item">
            <span class="network-legend-icon">${s(a.icon,{width:18,height:18})}</span>
            <div>
                <p class="network-legend-title">${a.name}</p>
                <p class="network-legend-copy">${a.detail}</p>
            </div>
        </div>
    `).join("");document.querySelector("#home-faq-list").innerHTML=m.slice(0,6).map((a,e)=>`
        <article class="home-faq-item" :class="activeFaq === ${e} ? 'is-active' : ''">
            <button type="button" class="home-faq-trigger" @click="activeFaq = activeFaq === ${e} ? null : ${e}" :aria-expanded="(activeFaq === ${e}).toString()">
                <span class="home-faq-trigger-icon">${s(e%2===0?"shieldCheck":"clipboardList",{width:18,height:18})}</span>
                <span class="home-faq-trigger-copy">
                    <span class="home-faq-question">${a.question}</span>
                    <span class="home-faq-meta">${e<2?"Most asked":e<4?"Need-to-know":"Quick reference"}</span>
                </span>
                <span class="home-faq-plus" :class="activeFaq === ${e} ? 'is-open' : ''">+</span>
            </button>
            <div x-show="activeFaq === ${e}" x-collapse.duration.300ms class="home-faq-answer">
                <p>${a.answer}</p>
            </div>
        </article>
    `).join("");document.querySelector("#home-articles").innerHTML=p.slice(0,4).map(i).join("");c("home");
