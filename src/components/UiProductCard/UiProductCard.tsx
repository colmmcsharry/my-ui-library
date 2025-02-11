import React from "react";
import { EBadgeKind, EBadgeSize, UiPills } from "../UiPills";
import {
	UiTypography, ETypographySizes, ETextWeight, ETextAlign, EColors
} from "../UiTypography";

type TUiProductCardProps = {
	badgeText?: string;
	location?: React.ReactNode;
	date?: React.ReactNode;
	heading?: React.ReactNode;
	image?: string;
	pillText?: string;
}

export const UiProductCard: React.FC<TUiProductCardProps> = ({ badgeText,
	image,
	location,
	date,
	pillText,
	heading }) => {
	return (
		<div className='relative
			flex
			max-w-4xl
			flex-col
			gap-sm
			rounded-2xl
			border
			border-secondary-alt-500
			bg-white
			px-0
			py-sm
			pt-0'>

			{ badgeText && (
				<div className="!absolute -top-xxs right-xs z-10">
					<UiPills rounded kind={ EBadgeKind.ACCENT_ALT }>{ badgeText }</UiPills>
				</div>
			) }

			{ image && (
				<img src={ image } className="relative h-auto w-full rounded-2xl rounded-b-none object-cover" />
			) }

			<div className="px-sm">
				{ pillText && (
					<div className="relative z-10 mb-xxs">
						<UiPills
							rounded
							size={ EBadgeSize.MEDIUM }
							kind={ EBadgeKind.ACCENT_ALT }>{ pillText }</UiPills>
					</div>
				) }

				{ heading }

				<div className="grid gap-xxs">
					<UiTypography
						size={ ETypographySizes.XS }

						align={ ETextAlign.LEFT }
						color={ EColors.SECONDARY_400 }
						lineHeight
					>
						{ date }
					</UiTypography>
					<UiTypography
						size={ ETypographySizes.MD }
						weight={ ETextWeight.BOLD }
						align={ ETextAlign.LEFT }
						color={ EColors.SECONDARY }
						lineHeight
					>
						{ location }
					</UiTypography>

				</div>
			</div>
		</div >
	);
};
