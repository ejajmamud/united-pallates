export function renderFaq(items) {
    return items
        .map(
            (item, index) => `
            <article class="faq-item">
                <h3>
                    <button type="button" class="faq-trigger" @click="active = active === ${index} ? null : ${index}" :aria-expanded="(active === ${index}).toString()">
                        <span>${item.question}</span>
                        <span class="faq-plus" :class="active === ${index} ? 'rotate-45' : ''}">+</span>
                    </button>
                </h3>
                <div x-show="active === ${index}" x-collapse.duration.300ms class="faq-body">
                    <p>${item.answer}</p>
                </div>
            </article>
        `
        )
        .join("");
}
