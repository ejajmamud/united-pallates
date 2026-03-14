function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    if (!menu) return;
    menu.classList.toggle("is-open");
    menu.classList.toggle("hidden");
}

function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
}

function initFaq() {
    document.querySelectorAll("[data-faq-trigger]").forEach((button) => {
        button.addEventListener("click", () => {
            const item = button.closest(".faq-item");
            const root = item?.parentElement;
            if (!item || !root) return;
            const shouldOpen = item.getAttribute("data-open") !== "true";

            root.querySelectorAll(".faq-item").forEach((node) => {
                node.setAttribute("data-open", "false");
            });

            item.setAttribute("data-open", shouldOpen ? "true" : "false");
        });
    });
}

function initContactForm() {
    const form = document.getElementById("contactForm");
    const success = document.getElementById("successMessage");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(form);
        const name = data.get("name") || "";
        const email = data.get("email") || "";
        const phone = data.get("phone") || "";
        const company = data.get("company") || "";
        const message = data.get("message") || "";

        const subject = encodeURIComponent(`Website enquiry from ${name || "United Pallets site"}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nRequirements:\n${message}`
        );

        window.location.href = `mailto:unitedpallets.my@gmail.com?subject=${subject}&body=${body}`;

        form.reset();
        if (success) {
            success.classList.remove("hidden");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }
    initReveal();
    initFaq();
    initContactForm();
});
