import {
	createClient,
	EntryWithLinkResolutionAndWithoutUnresolvableLinks,
} from "contentful";
import { serialize } from "next-mdx-remote/serialize";

import type {
	TypeCourseFields,
	TypeDisplayImage,
	TypeDisplayImageFields,
	TypeMember,
	TypeMemberFields,
	TypeParagraph,
	TypeParagraphFields,
	TypeSiteSettingsFields,
	TypeTermsOfServiceFields,
} from "@/@types/generated/index";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID ?? "ErrorNoSpaceID",
	accessToken:
		(process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
			? process.env.CONTENTFUL_ACCESS_TOKEN
			: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) ?? "ErrorNoAccessToken",
	host:
		process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
			? "cdn.contentful.com"
			: "preview.contentful.com",
}).withoutUnresolvableLinks;

function orderParagraphs(a: TypeParagraph, b: TypeParagraph): number {
	if (!a.fields.order || !b.fields.order) return 0;
	return a.fields.order - b.fields.order;
}

export async function getParagraphs() {
	const paragraphs = await client.getEntries<TypeParagraphFields>({
		content_type: "paragraph",
		order: "fields.order",
	});

	// paragraphs.items.sort(orderParagraphs);

	const renderedParagraphs = await Promise.all(
		paragraphs.items.map(async (paragraph) => {
			const mdxSource = await serialize(paragraph.fields.content);
			return { mdxSource, ...paragraph };
		}),
	);

	return renderedParagraphs;
}

function orderWorks(
	a: EntryWithLinkResolutionAndWithoutUnresolvableLinks<TypeDisplayImageFields>,
	b: EntryWithLinkResolutionAndWithoutUnresolvableLinks<TypeDisplayImageFields>,
): number {
	if (!a.fields.createdAt || !b.fields.createdAt) return 0;
	return Date.parse(a.fields.createdAt) - Date.parse(b.fields.createdAt);
}

export async function getWorks() {
	const works = await client.getEntries<TypeDisplayImageFields>({
		content_type: "displayImage",
		order: "-fields.createdAt",
	});

	// works.items.sort(orderWorks);

	return works;
}

const sortOrder = [
	"projektmenedzser",
	"gazdasági felelős",
	"pr felelős",
	"hr felelős",
	"3d mentor",
	"rasztermentor",
	"vektormentor",
	"webmentor",
];

function orderLeadership(a: TypeMember, b: TypeMember): number {
	if (!a.fields.title || !b.fields.title) return 0;
	return (
		sortOrder.indexOf(a.fields.title.toLowerCase()) -
		sortOrder.indexOf(b.fields.title.toLowerCase())
	);
}

function orderMembers(a: TypeMember, b: TypeMember): number {
	if (!a.fields.name || !b.fields.name) return 0;
	return a.fields.name.localeCompare(b.fields.name, "hu");
}

export async function getMembers() {
	const leader = (
		await client.getEntries<TypeMemberFields>({
			content_type: "member",
			limit: 1,
			"fields.isCurrentLeadership": "true",
			"fields.title[in]": "Körvezető",
		})
	).items[0] ?? {
		fields: {
			isCurrentLeadership: true,
			isOld: false,
			name: "Titkos Körvezető",
			title: "Körvezető",
		},
	};

	const leaderShip = await client.getEntries<TypeMemberFields>({
		content_type: "member",
		"fields.isCurrentLeadership": "true",
		"fields.title[ne]": "Körvezető",
	});

	leaderShip.items.sort(orderLeadership);

	const members = await client.getEntries<TypeMemberFields>({
		content_type: "member",
		order: "fields.name",
		"fields.isCurrentLeadership": "false",
		"fields.isOld": "false",
	});

	// members.items.sort(orderMembers);

	const oldMembers = await client.getEntries<TypeMemberFields>({
		content_type: "member",
		order: "fields.name",
		"fields.isOld": "true",
	});

	// oldMembers.items.sort(orderMembers);

	return { leader, leaderShip, members, oldMembers };
}

export async function getTOS() {
	const tos = (
		await client.getEntries<TypeTermsOfServiceFields>({
			content_type: "termsOfService",
			limit: 1,
		})
	).items[0];

	const renderedTOS = await (async () => {
		const mdxSource = await serialize(tos.fields.content);
		return { mdxSource, ...tos };
	})();

	return renderedTOS;
}

export type GetCoursesReturnType = Awaited<ReturnType<typeof getCourses>>;

export async function getCourses() {
	const courses = await client.getEntries<TypeCourseFields>({
		content_type: "course",
		order: "fields.order",
	});

	const renderedCourses = await Promise.all(
		courses.items.map(async (course) => {
			const mdxSource = course.fields.content
				? await serialize(course.fields.content)
				: null;
			return { mdxSource, ...course };
		}),
	);

	return renderedCourses;
}

export async function getSiteSettings() {
	const siteSettings = await client.getEntries<TypeSiteSettingsFields>({
		content_type: "siteSettings",
		limit: 1,
	});

	return siteSettings.items[0];
}
