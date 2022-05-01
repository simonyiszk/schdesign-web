import { graphql } from "gatsby";
import React from "react";

import { Layout } from "@/components/Layout";
import { MemberCard } from "@/components/memberCard/MemberCard";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/separator/Separator";

export type TeamPageProps = {
	data: {
		leader: GatsbyTypes.ContentfulMember;
		leadership: GatsbyTypes.ContentfulMemberConnection;
		members: GatsbyTypes.ContentfulMemberConnection;
		old: GatsbyTypes.ContentfulMemberConnection;
	};
};

export default function Team({ data }: TeamPageProps) {
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
	const sortedLeadership = [...data.leadership.edges].sort((a, b) => {
		if (a.node.title && b.node.title) {
			return (
				sortOrder.indexOf(a.node.title.toLowerCase()) -
				sortOrder.indexOf(b.node.title.toLowerCase())
			);
		}
		return 0;
	});

	const sortedMembers = [...data.members.edges].sort((a, b) => {
		return a.node.name?.localeCompare(b.node.name || "", "hu") ?? 0;
	});
	const sortedOldMembers = [...data.old.edges].sort((a, b) => {
		return a.node.name?.localeCompare(b.node.name || "", "hu") ?? 0;
	});

	return (
		<Layout>
			<Seo title="Csapatunk" />
			<Separator>Tagjaink</Separator>
			<section className="container mx-auto my-8 grid grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				<MemberCard
					imageData={data.leader.image?.gatsbyImageData}
					{...data.leader}
					className="col-span-1 sm:col-span-2 lg:col-span-3 2xl:col-span-4"
				/>

				<div className="col-span-1 my-2 w-full px-8 opacity-50 sm:col-span-2 sm:px-16 lg:col-span-3 lg:px-32 2xl:col-span-4">
					<hr className="w-full border-primary opacity-50" />
				</div>

				{sortedLeadership.map(({ node }) => {
					return (
						<MemberCard
							key={node.name}
							imageData={node.image?.gatsbyImageData}
							{...node}
						/>
					);
				})}

				<div className="col-span-1 my-2 w-full px-8 opacity-50 sm:col-span-2 sm:px-16 lg:col-span-3 lg:px-32 2xl:col-span-4">
					<hr className="w-full border-primary opacity-50" />
				</div>

				{sortedMembers.map(({ node }) => {
					return (
						<MemberCard
							key={node.name}
							imageData={node.image?.gatsbyImageData}
							{...node}
						/>
					);
				})}

				<div className="col-span-1 my-2 w-full px-8 opacity-50 sm:col-span-2 sm:px-16 lg:col-span-3 lg:px-32 2xl:col-span-4">
					<hr className="w-full border-primary opacity-50" />
				</div>

				{sortedOldMembers.map(({ node }) => {
					return (
						<MemberCard
							key={node.name}
							imageData={node.image?.gatsbyImageData}
							{...node}
						/>
					);
				})}
			</section>
		</Layout>
	);
}

export const query = graphql`
	query TeamQuery {
		leader: contentfulMember(
			title: { eq: "Körvezető" }
			isCurrentLeadership: { eq: true }
		) {
			name
			isOld
			isCurrentLeadership
			email
			title
			image {
				gatsbyImageData
			}
		}
		leadership: allContentfulMember(
			sort: { fields: name }
			filter: { title: { ne: "Körvezető" }, isCurrentLeadership: { eq: true } }
		) {
			edges {
				node {
					name
					isOld
					isCurrentLeadership
					email
					title
					image {
						gatsbyImageData
					}
				}
			}
		}
		members: allContentfulMember(
			sort: { fields: name }
			filter: { isOld: { eq: false }, isCurrentLeadership: { eq: false } }
		) {
			edges {
				node {
					name
					isOld
					isCurrentLeadership
					title
					image {
						gatsbyImageData
					}
				}
			}
		}
		old: allContentfulMember(
			sort: { fields: name }
			filter: { isOld: { eq: true } }
		) {
			edges {
				node {
					name
					isOld
					isCurrentLeadership
					title
					image {
						gatsbyImageData
					}
				}
			}
		}
	}
`;
