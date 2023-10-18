import { MDXRemote } from "next-mdx-remote/rsc";

import { PEm, PLi, PLink, POList, PP } from "./ParagraphComponents";

export type ParagraphProps = {
	source: string;
};

export function Paragraph({ source }: ParagraphProps) {
	return (
		<article className="bg-blur-5 pb-8 2xl:mx-32">
			<figure className="sm:pl-2">
				{/* @ts-expect-error mdx rsc bug? */}
				<MDXRemote
					components={{ a: PLink, p: PP, ol: POList, li: PLi, em: PEm }}
					source={source}
				/>
			</figure>
		</article>
	);
}
