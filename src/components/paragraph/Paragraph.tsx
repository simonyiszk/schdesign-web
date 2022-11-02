import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { PEm, PLi, PLink, POList, PP } from "./ParagraphComponents";

export type ParagraphProps = {
	children: MDXRemoteSerializeResult;
};

export function Paragraph({ children }: ParagraphProps) {
	return (
		<article className="bg-blur-5 pb-8 2xl:mx-32">
			<figure className="sm:pl-2">
				<MDXRemote
					components={{ a: PLink, p: PP, ol: POList, li: PLi, em: PEm }}
					{...children}
				/>
			</figure>
		</article>
	);
}
