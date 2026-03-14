import { icon } from "../components/icons.js";

export function contact() {
    return `
        <section id="contact" class="section-shell bg-slate-925 text-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div data-reveal>
                        <p class="section-label text-brand-gold">Contact</p>
                        <h2 class="section-title text-white">Need pallet supply, recovery support, or a custom quote?</h2>
                        <p class="section-body mt-6 text-slate-300">
                            Share your operating requirement and the United Pallets team can help shape the right mix of
                            supply, collection, repair, and recovery support.
                        </p>
                        <div class="mt-8 space-y-3 font-body text-base text-slate-300">
                            <p class="contact-line"><span aria-hidden="true">${icon("mapPinned")}</span><span>Lot 1047, Batu 23, Jalan Batu Arang, Kampung Sungai Bakau, 48000 Rawang, Selangor</span></p>
                            <p class="contact-line"><span aria-hidden="true">${icon("phone")}</span><span>+603 6090 9719</span></p>
                            <p class="contact-line"><span aria-hidden="true">${icon("phone")}</span><span>+6016 281 9995</span></p>
                            <p class="contact-line"><span aria-hidden="true">${icon("mail")}</span><span>unitedpallets.my@gmail.com</span></p>
                        </div>
                    </div>
                    <form class="contact-panel" data-reveal>
                        <div class="grid gap-4 md:grid-cols-2">
                            <label class="form-field"><span>Name</span><input type="text" placeholder="Your name" aria-label="Name"></label>
                            <label class="form-field"><span>Email</span><input type="email" placeholder="Email address" aria-label="Email"></label>
                        </div>
                        <div class="grid gap-4 md:grid-cols-2">
                            <label class="form-field"><span>Phone</span><input type="text" placeholder="Phone number" aria-label="Phone"></label>
                            <label class="form-field"><span>Company</span><input type="text" placeholder="Company name" aria-label="Company"></label>
                        </div>
                        <label class="form-field"><span>Requirement</span><textarea rows="5" placeholder="Tell us what you need, where you operate, and the pallet volume involved." aria-label="Requirement"></textarea></label>
                        <button type="button" class="cta-primary w-full justify-center">Get a Quote</button>
                    </form>
                </div>
            </div>
        </section>
    `;
}
