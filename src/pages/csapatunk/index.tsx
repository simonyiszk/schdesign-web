import type { InferGetStaticPropsType } from "next";

import { Layout } from "@/components/Layout";
import { MemberCard } from "@/components/memberCard/MemberCard";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/separator/Separator";
import { getMembers } from "@/utils/contentful";

export async function getStaticProps() {
	const members = await getMembers();

	return { props: { members } };
}

type TeamProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Team({ members }: TeamProps) {
	return (
		<Layout>
			<Seo title="Csapatunk" />
			<Separator>Tagjaink</Separator>
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
		</Layout>
	);
}
