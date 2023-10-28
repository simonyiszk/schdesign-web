import { MDXRemote } from "next-mdx-remote/rsc";

import { PLink, PP } from "./ParagraphComponents";

export type ParagraphProps = {
	title: string;
	source: string;
};

export function SplitParagraph({ title, source }: ParagraphProps) {
	return (
		<article className="bg-blur-5 flex flex-col justify-between pb-8 lg:flex-row">
			<h3 className="pb-4 text-xl font-medium lg:w-1/2">{title}</h3>
			<figure className="pl-2 lg:w-1/2">
				{/* @ts-expect-error mdx rsc bug? */}
				<MDXRemote components={{ a: PLink, p: PP }} source={source} />
			</figure>
		</article>
	);
}
