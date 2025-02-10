import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { UiProductCard } from "./UiProductCard";
import { UiIcon } from "../UiIcon";
import { ESize } from "../../_types/sizing";

const meta = {
	title: "Components/UiProductCard",
	component: UiProductCard,
	argTypes: {
		title: {
			control: {
				type: "text",
			},
			description: "The title text",
		},
		subtitle: {
			control: {
				type: "text",
			},
			description: "The subtitle text",
		},
		header: {
			description:
				"The element to display in the header area of the card",
		},
		badgeText: {
			description: "The text or component displayed in the badge",
		},
		pillText: {
			description: "The text or component displayed in the pill",
		},
	},
	args: {
		title: "This is a Title",
		subtitle: "This is a Subtitle",
		badgeText: "",
		header: null,
		pillText: "",
	},
} satisfies Meta<typeof UiProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		const image = "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F954243163%2F338708682421%2F1%2Foriginal.20250206-123227?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C5940%2C2970&s=9bb8643dbd5fedd238c50b14dc3cd02a";
		const Header = (
			<h2 className="text-2xl font-bold text-black">This is a Header</h2>
		);
		return <UiProductCard { ...args } header={ Header } image={ image } badgeText="UP TO €586 OFF" pillText="This is a Pill Text"  />;
	},
};

export const Variants: Story = {
	render: (args) => {
		const Header1 = (
			<div className="flex w-fit rounded-full bg-primary p-sm text-white">
				<UiIcon name={ ["far", "face-angry"] } size={ ESize.MD } />
			</div>
		);

		const Header2 = (
			<div className="flex w-fit rounded-full bg-primary p-xxs text-white">
				<UiIcon name={ ["far", "face-meh"] } size={ ESize.LG } />
			</div>
		);

		return (
			<div className="grid w-[412px] grid-cols-2 gap-xs">
				<UiProductCard { ...args } header={ Header1 } />
				<UiProductCard
					{ ...args }
					header={ Header2 }
					badgeText="UP TO €586 OFF"
				/>
			</div>
		);
	},
};

export const Test1: Story = {
	args: {
		title: "This is a Titleajhs",
		subtitle: "This is a Subtitle uablobv",
		badgeText: "",
		header: null,
	},

	render: (args) => {
		const Header = (
			<div className="flex w-fit rounded-full bg-primary p-sm text-white">
				<UiIcon name={ ["far", "face-smile"] } size={ ESize.LG } />
			</div>
		);
		return <UiProductCard { ...args } header={ Header } />;
	},
};
