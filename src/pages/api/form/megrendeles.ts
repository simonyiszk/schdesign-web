import type { NextApiRequest, NextApiResponse } from "next";

import { FormValuesType, validationSchema } from "@/components/form/formTypes";
import { rateLimit } from "@/utils/rate-limit";
import { sendEmail } from "@/utils/send-email";

const limiter = rateLimit({
	interval: 60 * 1000,
	uniqueTokenPerInterval: 100,
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const body = req.body as unknown as FormValuesType;

	try {
		await limiter.check(res, 10, "CACHE_TOKEN");
		const result = await validationSchema.validate(body, {
			abortEarly: true,
			strict: true,
		});
		await sendEmail(result);
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json(err);
	}
}
