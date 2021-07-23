import clsx from "clsx";
import React from "react";

import * as styles from "./Separator.module.scss";

export type SeparatorProps = {
	children: React.ReactNode;
};

export function Separator({ children }: SeparatorProps) {
	return (
		<div
			className={clsx(
				styles.separatorBg,
				"relative flex items-center justify-center h-24",
			)}
		>
			<h2 className="text-shadow-2 z-10 text-center text-white font-RobotoMono text-2xl font-semibold lowercase">
				{children}
			</h2>
		</div>
	);
}
