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

    initReveals();
    initCounters();
    initHeroSwiper();
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
