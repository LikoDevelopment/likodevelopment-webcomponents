import { tw } from "../../utils/tw.js";
import "../organisms/LikoCardStack";
import "../organisms/LikoCardFilter";

class LikoHomePage extends HTMLElement {
    static get observedAttributes() {
        return ["title", "subtitle", "description", "filter-label"];
    }

    get stackCards() {
        return this._stackCards || [];
    }

    set stackCards(value) {
        this._stackCards = value;
        if (this.isConnected) this.render();
    }

    get filterCards() {
        return this._filterCards || [];
    }

    set filterCards(value) {
        this._filterCards = value;
        if (this.isConnected) this.render();
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const title = this.getAttribute("title") || "";
        const subtitle = this.getAttribute("subtitle") || "";
        const description = this.getAttribute("description") || "";
        const filterLabel = this.getAttribute("filter-label") || "";

        this.innerHTML = "";

        const wrapper = document.createElement("div");
        wrapper.className = tw`mx-auto max-w-6xl px-6 py-12`;

        // --- Hero row: text left, card stack right ---
        const hero = document.createElement("div");
        hero.className = tw`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16`;

        const textCol = document.createElement("div");
        textCol.className = tw`flex-1`;

        if (title) {
            const h1 = document.createElement("h1");
            h1.textContent = title;
            textCol.appendChild(h1);
        }

        if (subtitle) {
            const h2 = document.createElement("h2");
            h2.textContent = subtitle;
            textCol.appendChild(h2);
        }

        if (description) {
            const p = document.createElement("p");
            p.textContent = description;
            textCol.appendChild(p);
        }

        hero.appendChild(textCol);

        if (this.stackCards.length > 0) {
            const stackCol = document.createElement("div");
            stackCol.className = tw`w-full flex-1`;

            const stack = document.createElement("liko-card-stack");
            stack.cards = this.stackCards;
            stackCol.appendChild(stack);

            hero.appendChild(stackCol);
        }

        wrapper.appendChild(hero);

        // --- Filter row ---
        if (this.filterCards.length > 0) {
            const filterSection = document.createElement("section");
            filterSection.className = tw`mt-16`;

            const filter = document.createElement("liko-card-filter");
            if (filterLabel) filter.setAttribute("filter-label", filterLabel);
            filter.cards = this.filterCards;
            filterSection.appendChild(filter);

            wrapper.appendChild(filterSection);
        }

        this.appendChild(wrapper);
    }
}

if (!customElements.get("liko-home-page")) {
    customElements.define("liko-home-page", LikoHomePage);
}

export const LikoHomePageExport = ({
    title,
    subtitle,
    description,
    filterLabel,
    stackCards = [],
    filterCards = [],
}) => {
    const el = document.createElement("liko-home-page");
    if (title) el.setAttribute("title", title);
    if (subtitle) el.setAttribute("subtitle", subtitle);
    if (description) el.setAttribute("description", description);
    if (filterLabel) el.setAttribute("filter-label", filterLabel);
    el.stackCards = stackCards;
    el.filterCards = filterCards;
    return el;
};
