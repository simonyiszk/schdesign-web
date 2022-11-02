export function PLink({
	children,
	...restProps
}: React.HTMLProps<HTMLAnchorElement>) {
	return (
		<a className="text-primary hover:underline" {...restProps}>
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

export function POList({
	children,
	...restProps
}: React.DetailedHTMLProps<
	React.OlHTMLAttributes<HTMLOListElement>,
	HTMLOListElement
>) {
	return (
		<ol className="list-inside list-decimal" {...restProps}>
			{children}
		</ol>
	);
}

export function PLi({
	children,
	...restProps
}: React.DetailedHTMLProps<
	React.LiHTMLAttributes<HTMLLIElement>,
	HTMLLIElement
>) {
	return (
		<li className="mb-2 marker:font-bold before:pr-2" {...restProps}>
			{children}
		</li>
	);
}

export function PEm({
	children,
	...restProps
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
	return (
		<em className="text-gray-600" {...restProps}>
			{children}
		</em>
	);
}
