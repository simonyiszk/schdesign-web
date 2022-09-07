import clsx from "clsx";

import styles from "./Separator.module.scss";

export type SeparatorProps = {
	children: React.ReactNode;
	id?: string;
};

export function Separator({ children, id }: SeparatorProps) {
	return (
		<div
			className={clsx(
				styles.separatorBg,
				"relative flex h-24 items-center justify-center",
			)}
			id={id}
		>
			<h2
				id={children?.toString().toLowerCase()}
				className="text-shadow-2 z-10 text-center font-RobotoMono text-2xl font-semibold lowercase text-white"
			>
				{children}
			</h2>
		</div>
	);
}
