import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
import { ctaBanner } from "../components/cards.js";

let alpineStarted = false;

export function bootSite(activeNav) {
    document.querySelector("#site-header").innerHTML = renderHeader(activeNav);
    document.querySelector("#site-footer").innerHTML = renderFooter();
    const cta = document.querySelector("#shared-cta");
    if (cta) cta.innerHTML = ctaBanner();
    syncHeaderHeight();

    gsap.registerPlugin(ScrollTrigger);
    Alpine.plugin(collapse);
    window.Alpine = Alpine;
    if (!alpineStarted) {
        Alpine.start();
        alpineStarted = true;
    }

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, wheelMultiplier: 0.9 });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    initHeaderScrollState(lenis);

    initReveals();
    initCounters();
    initHeroSwiper();
    initNetworkMaps();
    dismissPreloader();
}

function syncHeaderHeight() {
    const update = () => {
        const header = document.querySelector(".site-header");
        if (!header) return;
        document.documentElement.style.setProperty("--header-height", `${Math.round(header.offsetHeight)}px`);
    };

    update();
    window.addEventListener("resize", update);
}

function dismissPreloader() {
    const body = document.body;
    const preloader = document.querySelector(".site-preloader");
    if (!body || !preloader) return;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            body.classList.add("is-loaded");
            body.classList.remove("is-loading");
            window.setTimeout(() => {
                preloader.remove();
            }, 500);
        });
    });
}

function initHeaderScrollState(lenis) {
    const header = document.querySelector(".site-header");
    if (!header) return;

    let lastY = 0;
    let ticking = false;
    const downThreshold = 10;
    const upThreshold = 6;

    const applyState = (currentY) => {
        const delta = currentY - lastY;
        const nearTop = currentY <= 16;

        if (nearTop || delta <= -upThreshold) {
            header.classList.remove("is-hidden");
        } else if (delta >= downThreshold) {
            header.classList.add("is-hidden");
        }

        lastY = currentY;
        ticking = false;
    };

    lenis.on("scroll", ({ animatedScroll }) => {
        const currentY = Math.max(animatedScroll, 0);
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => applyState(currentY));
    });
}

function initHeroSwiper() {
    const hero = document.querySelector(".hero-swiper");
    if (!hero) return;
    new Swiper(hero, {
        modules: [Autoplay, EffectFade],
        effect: "fade",
        loop: true,
        speed: 1100,
        autoplay: { delay: 4200, disableOnInteraction: false }
    });

    gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-copy .eyebrow", { y: 18, opacity: 0, duration: 0.7 })
        .from(".hero-copy .display-xl", { y: 36, opacity: 0, duration: 0.8 }, "-=0.35")
        .from(".hero-copy .lead", { y: 24, opacity: 0, duration: 0.7 }, "-=0.35")
        .from(".hero-actions > *", { y: 16, opacity: 0, duration: 0.55, stagger: 0.12 }, "-=0.3")
        .from(".hero-panel", { x: 28, opacity: 0, duration: 0.8 }, "-=0.45");
}

function initReveals() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                gsap.fromTo(entry.target, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.16 }
    );

    document.querySelectorAll("[data-reveal]").forEach((item) => observer.observe(item));
}

function initCounters() {
    document.querySelectorAll("[data-counter]").forEach((counter) => {
        const target = Number(counter.dataset.counter);
        const suffix = counter.dataset.suffix || "";
        ScrollTrigger.create({
            trigger: counter,
            start: "top 88%",
            once: true,
            onEnter: () => {
                const state = { value: 0 };
                gsap.to(state, {
                    value: target,
                    duration: 1.7,
                    ease: "power2.out",
                    onUpdate: () => {
                        const current = Math.round(state.value);
                        counter.textContent = suffix === "k+" ? `${Math.round(current / 1000)}k+` : `${current}${suffix}`;
                    }
                });
            }
        });
    });
}

function initNetworkMaps() {
    const mapNodes = document.querySelectorAll("[data-network-map]");
    if (!mapNodes.length) return;
    const L = window.L;
    if (!L) return;

    const locations = [
        { name: "Penang", coords: [5.4164, 100.3327] },
        { name: "Rawang", coords: [3.3211, 101.4879] },
        { name: "Nilai", coords: [2.8033, 101.7972] },
        { name: "Johor Bahru", coords: [1.4927, 103.7414] }
    ];

    mapNodes.forEach((node) => {
        if (node.dataset.mapReady === "true") return;
        node.dataset.mapReady = "true";

        const map = L.map(node, {
            zoomControl: false,
            attributionControl: false,
            dragging: true,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            boxZoom: false,
            keyboard: false,
            tap: false
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 18
        }).addTo(map);

        map.setView([3.82, 101.92], 7);

        const iconHtml = `
            <span class="network-map-dot"></span>
            <span class="network-map-chip">
                <span class="network-map-chip-dot"></span>
                <span class="network-map-chip-text"></span>
            </span>
        `;

        locations.forEach((location) => {
            const marker = L.marker(location.coords, {
                icon: L.divIcon({
                    className: `network-map-marker${location.name === "Penang" ? " network-map-marker--west" : ""}`,
                    html: iconHtml.replace('<span class="network-map-chip-text"></span>', `<span class="network-map-chip-text">${location.name}</span>`),
                    iconSize: [140, 34],
                    iconAnchor: location.name === "Penang" ? [128, 17] : [12, 17]
                })
            });
            marker.addTo(map);
        });
    });
}
