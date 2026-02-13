import { LikoFlipCardGridExport } from "@/components/organisms/LikoFlipCardGrid";

export default {
    title: "Organisms/LikoFlipCardGrid",
    tags: ["autodocs"],
    render: (args) => LikoFlipCardGridExport(args),
    argTypes: {
        heading: { control: "text" },
        cards: { control: "object" },
    },
};

export const Default = {
    args: {
        heading: "Our Process",
        cards: [
            {
                heading: "Research",
                text: "We begin by understanding your goals, audience, and market landscape to lay a solid foundation for the project.",
            },
            {
                heading: "Design",
                text: "Our designers craft wireframes and visual concepts that align with your brand identity and user expectations.",
            },
            {
                heading: "Develop",
                text: "Engineers bring the designs to life with clean, performant code — building features iteratively with continuous feedback.",
            },
            {
                heading: "Launch",
                text: "After thorough testing and refinement, we deploy your product and provide ongoing support to ensure success.",
            },
        ],
    },
};

export const WithoutHeading = {
    args: {
        cards: [
            {
                heading: "Plan",
                text: "Define the scope, timeline, and key milestones for the upcoming sprint.",
            },
            {
                heading: "Build",
                text: "Implement features according to the plan, with daily stand-ups to track progress.",
            },
            {
                heading: "Test",
                text: "Run automated and manual tests to ensure quality and catch regressions early.",
            },
            {
                heading: "Ship",
                text: "Deploy to production with confidence after thorough review and stakeholder sign-off.",
            },
        ],
    },
};

export const TwoCards = {
    args: {
        heading: "Key Features",
        cards: [
            {
                heading: "AI Itineraries",
                text: "Personalised itineraries powered by AI — your perfect trip, planned in seconds.",
            },
            {
                heading: "Live Guides",
                text: "Live local guides connecting you with authentic experiences in real time.",
            },
        ],
    },
};
