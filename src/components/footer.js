import { siWhatsapp } from "simple-icons";

const whatsappHref = "https://wa.me/60162819995";

function whatsappFab() {
    return `
        <a href="${whatsappHref}" class="whatsapp-fab" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="${siWhatsapp.path}"></path>
            </svg>
        </a>
    `;
}

export function renderFooter() {
    return `
        <footer class="site-footer">
            <div class="container footer-grid">
                <div>
                    <img src="https://olive-stork-534193.hostingersite.com/wp-content/uploads/2026/02/cropped-Untitled-design-80.png" alt="United Pallets" class="footer-logo">
                    <p class="footer-copy">
                        United Pallets supports industrial supply chains with pallet manufacturing, recycling, logistics support, and lifecycle recovery programs across Peninsular Malaysia.
                    </p>
                </div>
                <div>
                    <p class="footer-title">Navigation</p>
                    <div class="footer-links">
                        <a href="./services.html">Services</a>
                        <a href="./products.html">Products</a>
                        <a href="./resources.html">Resources</a>
                        <a href="./about.html">About Us</a>
                    </div>
                </div>
                <div>
                    <p class="footer-title">Contact</p>
                    <div class="footer-links">
                        <p>Lot 1047, Batu 23, Jalan Batu Arang, Kampung Sungai Bakau, 48000 Rawang, Selangor</p>
                        <p>+603 6090 9719</p>
                        <p>+6016 281 9995</p>
                        <p>unitedpallets.my@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="container footer-bottom">
                <p>&copy; 2026 United Pallets Sdn. Bhd. (1466394-T). All rights reserved.</p>
                <p>Built for operational clarity and dependable industrial service.</p>
            </div>
        </footer>
        ${whatsappFab()}
    `;
}

export const footer = renderFooter;
