import { tw } from "../../utils/tw.js";
import "../atoms/LikoFlipCard";

class LikoFlipCardGrid extends HTMLElement {
    static get observedAttributes() {
        return ["heading"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue && this.isConnected) {
            this.render();
        }
    }

    get cards() {
        return this._cards || [];
    }

    set cards(value) {
        this._cards = value;
        if (this.isConnected) this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = "";

        if (this.cards.length === 0) return;

        const container = document.createElement("div");
        container.className = tw`flex flex-col gap-6`;

        // Optional heading
        const heading = this.getAttribute("heading");
        if (heading) {
            const label = document.createElement("span");
            label.className = tw`block text-center text-2xl font-semibold text-text`;
            label.textContent = heading;
            container.appendChild(label);
        }

        // Responsive grid: 1 column on mobile, 2 on sm, 4 on lg
        const grid = document.createElement("div");
        grid.className = tw`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4`;

        for (const card of this.cards) {
            const el = document.createElement("liko-flip-card");
            if (card.heading) el.setAttribute("heading", card.heading);
            if (card.text) el.setAttribute("text", card.text);

            // Height: shorter on mobile, taller on desktop
            el.className = tw`h-60 md:h-80`;

            grid.appendChild(el);
        }

        container.appendChild(grid);
        this.appendChild(container);
    }
}

if (!customElements.get("liko-flip-card-grid")) {
    customElements.define("liko-flip-card-grid", LikoFlipCardGrid);
}

export const LikoFlipCardGridExport = ({ heading, cards = [] }) => {
    const el = document.createElement("liko-flip-card-grid");
    if (heading) el.setAttribute("heading", heading);
    el.cards = cards;
    return el;
};
