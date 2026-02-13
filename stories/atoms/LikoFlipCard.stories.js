import { fn } from "storybook/test";

import { LikoFlipCardExport } from "@/components/atoms/LikoFlipCard";

export default {
    title: "Atoms/LikoFlipCard",
    tags: ["autodocs"],
    render: (args) => {
        const wrapper = document.createElement("div");
        wrapper.style.width = "250px";
        wrapper.style.height = "250px";
        wrapper.appendChild(LikoFlipCardExport(args));
        return wrapper;
    },
    argTypes: {
        heading: { control: "text" },
        text: { control: "text" },
        flipped: { control: "boolean" },
    },
    args: { onFlip: fn() },
};

export const Default = {
    args: {
        heading: "Research",
        text: "We begin by understanding your goals, audience, and market landscape to lay a solid foundation.",
    },
};

export const Flipped = {
    args: {
        heading: "Research",
        text: "We begin by understanding your goals, audience, and market landscape to lay a solid foundation.",
        flipped: true,
    },
};
