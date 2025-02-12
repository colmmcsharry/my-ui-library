import React from "react";
import { EBadgeKind, EBadgeSize, UiPills } from "../UiPills";
import {
	UiTypography, ETypographySizes, ETextWeight, ETextAlign, EColors
} from "../UiTypography";

type TUiProductCardProps = {
	badgeText?: string;
	badgeKind?: EBadgeKind;
	pillText?: string;
	pillKind?: EBadgeKind;
	venue?: React.ReactNode;
	county?: React.ReactNode;
	date?: React.ReactNode;
	heading?: React.ReactNode;
	image?: string;
}

export const UiProductCard: React.FC<TUiProductCardProps> = ({ badgeText,
	badgeKind = EBadgeKind.ACCENT_ALT,
	pillText,
	pillKind = EBadgeKind.ACCENT_ALT,
	image,
	venue,
	county,
	date,
	heading }) => {
	return (
		<div className='relative
			mx-auto
			flex
			w-full
			max-w-2xl
			flex-col
			gap-sm
			overflow-hidden
			rounded-2xl
			border
			border-secondary-alt-500
			bg-white
			pb-sm
			pt-0'>

			{ badgeText && (
				<div className="!absolute -top-xxs right-xs z-10">
					<UiPills rounded kind={ badgeKind }>{ badgeText }</UiPills>
				</div>
			) }

			{ image && (
				<img src={ image } className="relative size-full max-h-[200px] rounded-b-none rounded-t-2xl object-cover" />
			) }

			<div className="px-sm">
				{ pillText && (
					<div className="relative z-10 mb-xxs">
						<UiPills
							rounded
							size={ EBadgeSize.MEDIUM }
							kind={ pillKind }>{ pillText }</UiPills>
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
						{ venue }
						<br />

						{ county }
					</UiTypography>

				</div>
			</div>
		</div >
	);
};
