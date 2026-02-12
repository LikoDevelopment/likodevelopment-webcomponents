import { LikoHomePageExport } from "@/components/pages/LikoHomePage";

export default {
    title: "Pages/LikoHomePage",
    tags: ["autodocs"],
    render: (args) => LikoHomePageExport(args),
    argTypes: {
        title: { control: "text" },
        subtitle: { control: "text" },
        description: { control: "text" },
        filterLabel: { control: "text" },
        stackCards: { control: "object" },
        filterCards: { control: "object" },
    },
};

export const Default = {
    args: {
        title: "Welcome to Liko",
        subtitle: "Discover curated experiences",
        description:
            "We bring together the finest destinations, activities and stories — handpicked for those who seek something extraordinary.",
        filterLabel: "Filter by category",
        stackCards: [
            {
                imageSrc: "https://placehold.co/400x530/4a564b/ffffff?text=Mountains",
                imageAlt: "Mountain landscape",
                caption: "Escape to the serene mountains",
            },
            {
                imageSrc: "https://placehold.co/400x530/627663/ffffff?text=Ocean",
                imageAlt: "Ocean view",
                caption: "Relax by the coast",
            },
            {
                imageSrc: "https://placehold.co/400x530/7d937e/ffffff?text=Forest",
                imageAlt: "Forest path",
                caption: "Discover hidden trails",
            },
            {
                imageSrc: "https://placehold.co/400x530/322f2f/ffffff?text=City",
                imageAlt: "City skyline",
            },
        ],
        filterCards: [
            {
                heading: "Mountain Retreat",
                text: "Escape to the serene mountains and enjoy breathtaking views with fresh alpine air.",
                imageSrc: "https://placehold.co/600x400/4a564b/ffffff?text=Mountains",
                imageAlt: "Mountain landscape",
                buttonLabel: "Book Now",
                tags: [{ label: "Nature" }, { label: "Popular" }],
            },
            {
                heading: "Ocean Breeze",
                text: "Relax by the coast with the soothing sound of waves and golden sunsets.",
                imageSrc: "https://placehold.co/600x400/627663/ffffff?text=Ocean",
                imageAlt: "Ocean view",
                buttonLabel: "Explore",
                tags: [{ label: "Beach" }, { label: "Relaxation" }],
            },
            {
                heading: "Forest Walk",
                text: "Discover hidden trails through ancient forests and reconnect with nature.",
                imageSrc: "https://placehold.co/600x400/7d937e/ffffff?text=Forest",
                imageAlt: "Forest path",
                buttonLabel: "Enjoy",
                tags: [{ label: "Nature" }, { label: "Adventure" }],
            },
            {
                heading: "City Lights",
                text: "Experience the vibrant nightlife and cultural richness of modern cities.",
                imageSrc: "https://placehold.co/600x400/322f2f/ffffff?text=City",
                imageAlt: "City skyline",
                buttonLabel: "Discover",
                tags: [{ label: "Urban" }, { label: "Popular" }],
            },
            {
                heading: "Desert Dunes",
                text: "Venture into the vast golden desert for an unforgettable adventure.",
                imageSrc: "https://placehold.co/600x400/7c7272/ffffff?text=Desert",
                imageAlt: "Desert landscape",
                buttonLabel: "Explore",
                tags: [{ label: "Adventure" }],
            },
        ],
    },
};
