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

	return (
		<Layout>
			<Seo title="Csapatunk" />
			<Separator>Tagjaink</Separator>
			<section className="container grid gap-12 grid-cols-1 2xl:grid-cols-4 justify-items-center mx-auto my-8 sm:grid-cols-2 lg:grid-cols-3">
				<MemberCard
					imageData={data.leader.image?.gatsbyImageData}
					{...data.leader}
					className="col-span-1 2xl:col-span-4 sm:col-span-2 lg:col-span-3"
				/>

				<div className="col-span-1 2xl:col-span-4 my-2 px-8 w-full opacity-50 sm:col-span-2 sm:px-16 lg:col-span-3 lg:px-32">
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

				<div className="col-span-1 2xl:col-span-4 my-2 px-8 w-full opacity-50 sm:col-span-2 sm:px-16 lg:col-span-3 lg:px-32">
					<hr className="w-full border-primary opacity-50" />
				</div>

				{data.members.edges.map(({ node }) => {
					return (
						<MemberCard
							key={node.name}
							imageData={node.image?.gatsbyImageData}
							{...node}
						/>
					);
				})}

				<div className="col-span-1 2xl:col-span-4 my-2 px-8 w-full opacity-50 sm:col-span-2 sm:px-16 lg:col-span-3 lg:px-32">
					<hr className="w-full border-primary opacity-50" />
				</div>

				{data.old.edges.map(({ node }) => {
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
