import clsx from "clsx";
import React from "react";

import * as styles from "./Separator.module.scss";

export type SeparatorProps = {
	children: React.ReactNode;
	id?: string;
};

export function Separator({ children, id }: SeparatorProps) {
	return (
		<div
			className={clsx(
				styles.separatorBg,
				"relative flex items-center justify-center h-24",
			)}
			id={id}
		>
			<h2
				id={children?.toString().toLowerCase()}
				className="text-shadow-2 z-10 text-center text-white font-RobotoMono text-2xl font-semibold lowercase"
			>
				{children}
			</h2>
		</div>
	);
}
