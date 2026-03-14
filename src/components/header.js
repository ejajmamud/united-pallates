export function renderHeader(active = "") {
    const isActive = (key) => (active === key ? "is-active" : "");
    return `
        <header class="site-header" x-data="{ open:false, resources:false }">
            <div class="container header-bar">
                <a href="./index.html" class="brand-mark" aria-label="United Pallets home">
                    <img src="https://olive-stork-534193.hostingersite.com/wp-content/uploads/2026/02/cropped-Untitled-design-78.png" alt="United Pallets logo" class="brand-logo">
                </a>

                <nav class="desktop-nav" aria-label="Primary">
                    <a href="./index.html" class="nav-link ${isActive("home")}">Home</a>
                    <a href="./services.html" class="nav-link ${isActive("services")}">Services</a>
                    <a href="./products.html" class="nav-link ${isActive("products")}">Products</a>
                    <div class="nav-dropdown" @mouseenter="resources = true" @mouseleave="resources = false">
                        <button type="button" class="nav-link nav-button ${isActive("resources")}" :aria-expanded="resources.toString()">Resources</button>
                        <div class="dropdown-panel" x-show="resources" x-transition.origin.top>
                            <a href="./resources.html">Articles</a>
                            <a href="./article.html">Featured Article</a>
                        </div>
                    </div>
                    <a href="./about.html" class="nav-link ${isActive("about")}">About Us</a>
                    <a href="./contact.html" class="nav-link ${isActive("contact")}">Contact</a>
                </nav>

                <div class="header-actions">
                    <a href="./contact.html" class="btn-outline header-cta">Get a Quote</a>
                    <button type="button" class="menu-toggle" @click="open = !open" :aria-expanded="open.toString()" aria-label="Open menu">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>

            <div class="mobile-nav-shell" x-show="open" x-transition:enter="transition duration-300 ease-out" x-transition:enter-start="opacity-0 -translate-y-4" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition duration-200 ease-in" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 -translate-y-4">
                <nav class="container mobile-nav" aria-label="Mobile">
                    <a href="./index.html">Home</a>
                    <a href="./services.html">Services</a>
                    <a href="./products.html">Products</a>
                    <a href="./resources.html">Resources</a>
                    <a href="./about.html">About Us</a>
                    <a href="./contact.html">Contact</a>
                    <a href="./contact.html" class="btn-primary mobile-cta">Get a Quote</a>
                </nav>
            </div>
        </header>
    `;
}
