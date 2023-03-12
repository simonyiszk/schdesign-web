export type CalendarEvent = {
	title: string;
	details?: string;
	location?: string;
	startDate: Date;
	endDate: Date;
};

export function generateCalendarEvent({
	title,
	details,
	location,
	startDate,
	endDate,
}: CalendarEvent) {
	const baseUrl = "https://calendar.google.com/calendar/event";
	const params = {
		action: "TEMPLATE",
		text: `${title} | schdesign tanfolyam`,
		dates: `${startDate
			.toISOString()
			.replaceAll("-", "")
			.replaceAll(":", "")}/${endDate
			.toISOString()
			.replaceAll("-", "")
			.replaceAll(":", "")}`,
		ctz: "Europe/Budapest",
		details: details ?? "",
		location,
		crm: "BUSY",
		sprop: process.env.NEXT_PUBLIC_DOMAIN
			? `website:https://${process.env.NEXT_PUBLIC_DOMAIN}`
			: "website:https://www.schdesign.hu",
	} as { [key: string]: string };

	const urlParams = new URLSearchParams(params);

	return `${baseUrl}?${urlParams.toString()}`;
}
