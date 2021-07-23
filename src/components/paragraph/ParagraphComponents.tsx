import React from "react";

export function PLink({
	children,
	...restProps
}: React.HTMLProps<HTMLAnchorElement>) {
	return (
		<a className="text-primary underline" {...restProps}>
			{children}
		</a>
	);
}

export function PP({
	children,
	...restProps
}: React.HTMLProps<HTMLParagraphElement>) {
	return (
		<p className="mb-2" {...restProps}>
			{children}
		</p>
	);
}
