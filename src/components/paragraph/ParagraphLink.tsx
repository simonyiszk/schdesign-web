import React from "react";

export function ParagraphLink({
	children,
	...restProps
}: React.HTMLProps<HTMLAnchorElement>) {
	return (
		<a className="text-primary underline" {...restProps}>
			{children}
		</a>
	);
}
