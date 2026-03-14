import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import "./styles.css";

import { header } from "./components/header.js";
import { footer } from "./components/footer.js";
import { hero } from "./sections/hero.js";
import { services } from "./sections/services.js";
import { coverage } from "./sections/coverage.js";
import { network } from "./sections/network.js";
import { sustainability } from "./sections/sustainability.js";
import { faq } from "./sections/faq.js";
import { articles } from "./sections/articles.js";
import { contact } from "./sections/contact.js";

gsap.registerPlugin(ScrollTrigger);
Alpine.plugin(collapse);
window.Alpine = Alpine;

document.querySelector("#app").innerHTML = `
    <div class="bg-white text-slate-925">
        ${header()}
        <main>
            ${hero()}
            ${services()}
            ${coverage()}
            ${network()}
            ${sustainability()}
            ${faq()}
            ${articles()}
            ${contact()}
        </main>
        ${footer()}
    </div>
`;

Alpine.start();

const lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    wheelMultiplier: 0.9
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
lenis.on("scroll", ScrollTrigger.update);

gsap.timeline({ defaults: { ease: "power3.out" } })
    .from(".hero-kicker", { y: 24, opacity: 0, duration: 0.8 })
    .from(".hero-title", { y: 48, opacity: 0, duration: 0.9 }, "-=0.45")
    .from(".hero-copy", { y: 32, opacity: 0, duration: 0.75 }, "-=0.5")
    .from(".hero-actions > *", { y: 24, opacity: 0, duration: 0.6, stagger: 0.12 }, "-=0.45");

gsap.to(".hero-parallax", {
    yPercent: 8,
    ease: "none",
    scrollTrigger: {
        trigger: "#top",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

const slides = gsap.utils.toArray(".hero-slide");
slides.forEach((slide, index) => {
    gsap.set(slide, { scale: index === 0 ? 1 : 1.08, opacity: index === 0 ? 1 : 0 });
});

if (slides.length > 1) {
    let current = 0;
    setInterval(() => {
        const next = (current + 1) % slides.length;
        gsap.timeline()
            .to(slides[current], { opacity: 0, scale: 1.08, duration: 1.1, ease: "power2.out" })
            .fromTo(slides[next], { opacity: 0, scale: 1.16 }, { opacity: 1, scale: 1.02, duration: 1.3, ease: "power2.out" }, 0);
        current = next;
    }, 4200);
}

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            gsap.fromTo(entry.target, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", clearProps: "all" });
            revealObserver.unobserve(entry.target);
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

document.querySelectorAll("[data-counter]").forEach((counter) => {
    const target = Number(counter.dataset.counter);
    const suffix = counter.dataset.suffix || "";

    ScrollTrigger.create({
        trigger: counter,
        start: "top 85%",
        once: true,
        onEnter: () => {
            const state = { value: 0 };
            gsap.to(state, {
                value: target,
                duration: 1.8,
                ease: "power2.out",
                onUpdate: () => {
                    const current = Math.round(state.value);
                    if (suffix === "k+") {
                        counter.textContent = `${Math.round(current / 1000)}k+`;
                        return;
                    }
                    counter.textContent = `${current}${suffix}`;
                }
            });
        }
    });
});

document.querySelectorAll("[data-pin]").forEach((pin, index) => {
    gsap.from(pin, {
        scrollTrigger: {
            trigger: pin,
            start: "top 88%"
        },
        scale: 0.4,
        opacity: 0,
        y: 18,
        duration: 0.7,
        delay: index * 0.08,
        ease: "back.out(1.7)"
    });
});
