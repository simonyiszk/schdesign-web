import { Layout } from "@/components/Layout";
import { MemberCard } from "@/components/memberCard/MemberCard";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/separator/Separator";

export type TeamPageProps = {
	data: {
		leader: object;
		leadership: object[];
		members: object[];
		old: object[];
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

	return (
		<Layout>
			<Seo title="Csapatunk" />
			<Separator>Tagjaink</Separator>
			<section className="container mx-auto my-8 grid grid-cols-1 justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				<MemberCard
					imageData={undefined}
					{...data.leader}
					className="col-span-1 sm:col-span-2 lg:col-span-3 2xl:col-span-4"
				/>

				<div className="col-span-1 my-2 w-full px-8 opacity-50 sm:col-span-2 sm:px-16 lg:col-span-3 lg:px-32 2xl:col-span-4">
					<hr className="w-full border-primary opacity-50" />
				</div>

				{[0].map((i) => {
					return (
						<MemberCard
							key={i}
							imageData={undefined}
							// {...node}
						/>
					);
				})}

				<div className="col-span-1 my-2 w-full px-8 opacity-50 sm:col-span-2 sm:px-16 lg:col-span-3 lg:px-32 2xl:col-span-4">
					<hr className="w-full border-primary opacity-50" />
				</div>

				{[0].map((i) => {
					return (
						<MemberCard
							key={i}
							imageData={undefined}
							// {...node}
						/>
					);
				})}

				<div className="col-span-1 my-2 w-full px-8 opacity-50 sm:col-span-2 sm:px-16 lg:col-span-3 lg:px-32 2xl:col-span-4">
					<hr className="w-full border-primary opacity-50" />
				</div>

				{[0].map((i) => {
					return (
						<MemberCard
							key={i}
							imageData={undefined}
							// {...node}
						/>
					);
				})}
			</section>
		</Layout>
	);
}
