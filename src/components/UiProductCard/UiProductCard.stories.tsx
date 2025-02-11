import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { UiProductCard } from "./UiProductCard";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing";
import { EBadgeKind } from "../UiPills";

const meta = {
	title: "Components/UiProductCard",
	component: UiProductCard,
	argTypes: {
		location: {
			control: {
				type: "text",
			},
			description: "The location text",
		},
		date: {
			control: {
				type: "text",
			},
			description: "The date text",
		},
		heading: {
			description:
				"The element to display in the heading area of the card",
		},
		badgeText: {
			description: "The text or component displayed in the badge",
		},
		pillText: {
			description: "The text or component displayed in the pill",
		},
		badgeKind: {
			control: {
				type: "select",
			},
			options: Object.values(EBadgeKind),
			description: "Badge Kind",
		},
		pillKind: {
			control: {
				type: "select",
			},
			options: Object.values(EBadgeKind),
			description: "Pill Kind",
		},
	},
	args: {
		location: "McGowan's Pub",
		date: "27 Feb 2025",
		badgeText: "",
		heading: null,
		pillText: "",
		badgeKind: EBadgeKind.ACCENT_ALT,
		pillKind: EBadgeKind.ACCENT_ALT,
	},
} satisfies Meta<typeof UiProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		const image = "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F954243163%2F338708682421%2F1%2Foriginal.20250206-123227?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C5940%2C2970&s=9bb8643dbd5fedd238c50b14dc3cd02a";
		const heading = (
			<h2 className="text-2xl font-bold text-black">Valentine's Day Celebration</h2>
		);
		return <UiProductCard { ...args } heading={ heading } date="27 Feb 2025" image={ image } badgeText="UP TO €586 OFF" pillText="This is a Pill Text"  />;
	},
};

export const Variants: Story = {
	render: (args) => {
		const heading1 = (
			<div className="flex w-fit rounded-full bg-primary p-sm text-white">
				<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
			</div>
		);

		const heading2 = (
			<div className="flex w-fit rounded-full bg-primary p-xxs text-white">
				<UiIcon name={ ["far", "face-meh"] } size={ ESize.LG } />
			</div>
		);

		return (
			<div className="grid w-[412px] grid-cols-2 gap-xs">
				<UiProductCard { ...args } heading={ heading1 } />
				<UiProductCard
					{ ...args }
					heading={ heading2 }
					badgeText="UP TO €586 OFF"
				/>
			</div>
		);
	},
};

export const Test1: Story = {
	args: {
		location: "This is a locationajhs",
		date: "This is a date uablobv",
		badgeText: "",
		heading: null,
	},

	render: (args) => {
		const heading = (
			<div className="flex w-fit rounded-full bg-primary p-sm text-white">
				<UiIcon name={ ["far", "face-smile"] } size={ ESize.LG } />
			</div>
		);
		return <UiProductCard { ...args } heading={ heading } />;
	},
};
