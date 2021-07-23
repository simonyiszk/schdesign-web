// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module 'package-without-declarations';

// And to shim assets, use (one file extension per `declare`):
// declare module '*.png';

declare module "*.svg";

declare module "*.mdx" {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const MDXComponent: (props: any) => JSX.Element;
	// eslint-disable-next-line import/no-default-export
	export default MDXComponent;
}
