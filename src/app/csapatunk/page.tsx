import type { Metadata } from "next";

import { MemberCard } from "@/components/memberCard/MemberCard";
import { getMembers } from "@/utils/contentful";
import { makeTitle } from "@/utils/seo";

export const metadata: Metadata = {
	title: makeTitle("Csapatunk"),
};

export default async function Team() {
	const members = await getMembers();

	return (
		<section className="container mx-auto my-8 grid grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
			<MemberCard
				image={members.leader.fields.image}
				className="col-span-1 sm:col-span-2 lg:col-span-3 2xl:col-span-4"
				{...members.leader.fields}
			/>

			<div className="col-span-1 my-2 w-full px-8 opacity-50 sm:col-span-2 sm:px-16 lg:col-span-3 lg:px-32 2xl:col-span-4">
				<hr className="w-full border-primary opacity-50" />
			</div>

			{members.leaderShip.items.map(({ fields }) => {
				return (
					<MemberCard key={fields.name} image={fields.image} {...fields} />
				);
			})}

			<div className="col-span-1 my-2 w-full px-8 opacity-50 sm:col-span-2 sm:px-16 lg:col-span-3 lg:px-32 2xl:col-span-4">
				<hr className="w-full border-primary opacity-50" />
			</div>

			{members.members.items.map(({ fields }) => {
				return (
					<MemberCard key={fields.name} image={fields.image} {...fields} />
				);
			})}

			<div className="col-span-1 my-2 w-full px-8 opacity-50 sm:col-span-2 sm:px-16 lg:col-span-3 lg:px-32 2xl:col-span-4">
				<hr className="w-full border-primary opacity-50" />
			</div>

			{members.oldMembers.items.map(({ fields }) => {
				return (
					<MemberCard key={fields.name} image={fields.image} {...fields} />
				);
			})}
		</section>
	);
}
