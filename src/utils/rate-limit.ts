/**
 * @link https://github.com/vercel/next.js/tree/canary/examples/api-routes-rate-limit
 */

import LRU from "lru-cache";
import type { NextApiResponse } from "next";

type Options = {
	uniqueTokenPerInterval?: number;
	interval?: number;
};

export function rateLimit(options?: Options) {
	const tokenCache = new LRU({
		max: options?.uniqueTokenPerInterval ?? 500,
		ttl: options?.interval ?? 60000,
	});

	return {
		check: (res: NextApiResponse, limit: number, token: string) =>
			new Promise<void>((resolve, reject) => {
				// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
				const tokenCount = (tokenCache.get(token) as number[]) || [0];
				if (tokenCount[0] === 0) {
					tokenCache.set(token, tokenCount);
				}
				tokenCount[0] += 1;

				const currentUsage = tokenCount[0];
				const isRateLimited = currentUsage >= limit;
				res.setHeader("X-RateLimit-Limit", limit);
				res.setHeader(
					"X-RateLimit-Remaining",
					isRateLimited ? 0 : limit - currentUsage,
				);

				// eslint-disable-next-line no-promise-executor-return
				return isRateLimited ? reject() : resolve();
			}),
	};
}
