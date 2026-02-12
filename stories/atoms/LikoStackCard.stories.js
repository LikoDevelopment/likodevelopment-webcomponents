import { LikoStackCardExport } from "@/components/atoms/LikoStackCard";

export default {
    title: "Atoms/LikoStackCard",
    tags: ["autodocs"],
    render: (args) => LikoStackCardExport(args),
    argTypes: {
        imageSrc: { control: "text" },
        imageAlt: { control: "text" },
        caption: { control: "text" },
        orientation: { control: "select", options: ["portrait", "landscape"] },
    },
};

export const ImageOnly = {
    args: {
        imageSrc: "https://placehold.co/400x530/4a564b/ffffff?text=Mountain",
        imageAlt: "Mountain landscape",
    },
};

export const WithCaption = {
    args: {
        imageSrc: "https://placehold.co/400x530/627663/ffffff?text=Ocean",
        imageAlt: "Ocean view",
        caption: "A beautiful sunset over the calm ocean waves",
    },
};

export const Landscape = {
    args: {
        imageSrc: "https://placehold.co/700x530/7d937e/ffffff?text=Panorama",
        imageAlt: "Panoramic view",
        caption: "A wide panoramic landscape view",
        orientation: "landscape",
    },
};
