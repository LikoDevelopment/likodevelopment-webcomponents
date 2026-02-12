import { fn } from "storybook/test";

import { LikoButtonListExport } from "@/components/molecules/LikoButtonList";

export default {
    title: "Molecules/LikoButtonList",
    tags: ["autodocs"],
    render: (args) => LikoButtonListExport(args),
    argTypes: {
        buttons: { control: "object" },
    },
};

export const PrimaryAndSecondary = {
    args: {
        buttons: [
            { label: "Get Started", primary: true, onClick: fn() },
            { label: "Learn More", onClick: fn() },
        ],
    },
};

export const MultiplePrimary = {
    args: {
        buttons: [
            { label: "Accept", primary: true, onClick: fn() },
            { label: "Decline", primary: true, onClick: fn() },
        ],
    },
};

export const AllSecondary = {
    args: {
        buttons: [
            { label: "Overview", onClick: fn() },
            { label: "Details", onClick: fn() },
            { label: "Contact", onClick: fn() },
        ],
    },
};

export const SingleButton = {
    args: {
        buttons: [{ label: "Visit Project", primary: true, size: "large", onClick: fn() }],
    },
};
