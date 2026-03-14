import{s,a as r,i as o,b as t,c as a}from"./site-DDmNp2k0.js";import{s as i,h as n,l as c,r as m}from"./siteContent-DK6WsTMm.js";document.querySelector("#home-services").innerHTML=i.map(s).join("");document.querySelector("#home-stats").innerHTML=n.map(r).join("");document.querySelector("#home-network-list").innerHTML=c.map(e=>`
        <div class="network-legend-item">
            <span class="network-legend-icon">${o(e.icon,{width:18,height:18})}</span>
            <div>
                <p class="network-legend-title">${e.name}</p>
                <p class="network-legend-copy">${e.detail}</p>
            </div>
        </div>
    `).join("");document.querySelector("#home-articles").innerHTML=m.slice(0,4).map(t).join("");a("home");
