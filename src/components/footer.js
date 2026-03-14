import { siWhatsapp } from "simple-icons";
import { icon } from "./icons.js";

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
            <div class="container footer-shell">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <img src="https://olive-stork-534193.hostingersite.com/wp-content/uploads/2026/02/cropped-Untitled-design-80.png" alt="United Pallets" class="footer-logo">
                        <p class="footer-copy">
                            United Pallets supports industrial supply chains with pallet manufacturing, recycling, logistics support, and lifecycle recovery programs across Peninsular Malaysia.
                        </p>
                    </div>
                    <div class="footer-nav-column">
                        <p class="footer-title">Navigation</p>
                        <nav class="footer-links" aria-label="Footer navigation">
                            <a href="./index.html">Home</a>
                            <a href="./services.html">Services</a>
                            <a href="./products.html">Products</a>
                            <a href="./resources.html">Resources</a>
                            <a href="./about.html">About Us</a>
                            <a href="./contact.html">Contact</a>
                        </nav>
                    </div>
                    <div class="footer-contact-column">
                        <p class="footer-title">Contact</p>
                        <div class="footer-contact-list">
                            <a href="https://maps.google.com/?q=Lot+1047,+Batu+23,+Jalan+Batu+Arang,+Kampung+Sungai+Bakau,+48000+Rawang,+Selangor" target="_blank" rel="noopener noreferrer" class="footer-contact-item">
                                <span class="footer-contact-icon">${icon("mapPinned", { width: 18, height: 18, "stroke-width": 1.9 })}</span>
                                <span class="footer-contact-text">Lot 1047, Batu 23, Jalan Batu Arang, Kampung Sungai Bakau, 48000 Rawang, Selangor</span>
                            </a>
                            <a href="tel:+60360909719" class="footer-contact-item">
                                <span class="footer-contact-icon">${icon("phone", { width: 18, height: 18, "stroke-width": 1.9 })}</span>
                                <span class="footer-contact-text">+603 6090 9719</span>
                            </a>
                            <a href="tel:+60162819995" class="footer-contact-item">
                                <span class="footer-contact-icon">${icon("messageCircle", { width: 18, height: 18, "stroke-width": 1.9 })}</span>
                                <span class="footer-contact-text">+6016 281 9995</span>
                            </a>
                            <a href="mailto:unitedpallets.my@gmail.com" class="footer-contact-item">
                                <span class="footer-contact-icon">${icon("mail", { width: 18, height: 18, "stroke-width": 1.9 })}</span>
                                <span class="footer-contact-text">unitedpallets.my@gmail.com</span>
                            </a>
                        </div>
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
