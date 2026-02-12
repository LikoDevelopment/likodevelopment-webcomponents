import { tw } from "../utils/tw.js";

class LikoCard extends HTMLElement {
    static get observedAttributes() {
        return ["heading", "text", "image-src", "image-alt"];
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
        const heading = this.getAttribute("heading");
        const text = this.getAttribute("text");
        const imageSrc = this.getAttribute("image-src");
        const imageAlt = this.getAttribute("image-alt") || "";

        this.innerHTML = "";

        const card = document.createElement("div");
        card.className = tw`overflow-hidden rounded-lg border border-border bg-background-100 shadow-sm`;

        if (imageSrc) {
            const img = document.createElement("img");
            img.src = imageSrc;
            img.alt = imageAlt;
            img.className = tw`h-48 w-full object-cover`;
            card.appendChild(img);
        }

        const body = document.createElement("div");
        body.className = tw`p-5`;

        if (heading) {
            const h3 = document.createElement("h3");
            h3.className = tw`mb-2 text-lg font-bold text-foreground-100`;
            h3.textContent = heading;
            body.appendChild(h3);
        }

        if (text) {
            const p = document.createElement("p");
            p.className = tw`text-sm leading-relaxed text-foreground-60`;
            p.textContent = text;
            body.appendChild(p);
        }

        card.appendChild(body);
        this.appendChild(card);
    }
}

if (!customElements.get("liko-card")) {
    customElements.define("liko-card", LikoCard);
}

export const LikoCardExport = ({ heading, text, imageSrc, imageAlt }) => {
    const card = document.createElement("liko-card");
    if (heading) card.setAttribute("heading", heading);
    if (text) card.setAttribute("text", text);
    if (imageSrc) card.setAttribute("image-src", imageSrc);
    if (imageAlt) card.setAttribute("image-alt", imageAlt);
    return card;
};
