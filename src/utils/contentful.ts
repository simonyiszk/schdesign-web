import {
	createClient,
	EntryWithLinkResolutionAndWithoutUnresolvableLinks,
} from "contentful";
import { serialize } from "next-mdx-remote/serialize";

import type {
	TypeDisplayImage,
	TypeDisplayImageFields,
	TypeMember,
	TypeMemberFields,
	TypeParagraph,
	TypeParagraphFields,
} from "@/@types/generated/index";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID ?? "ErrorNoSpaceID",
	accessToken:
		(process.env.VERCEL_ENV === "production"
			? process.env.CONTENTFUL_ACCESS_TOKEN
			: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) ?? "ErrorNoAccessToken",
	host:
		process.env.VERCEL_ENV === "production"
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
			"fields.title": "Körvezető",
		})
	).items[0];

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
