import clsx from "clsx";

export type MemberCardProps = {
	name?: string;
	email?: string;
	title?: string;
	imageData?: object;
	isOld?: boolean;
	isCurrentLeadership?: boolean;
} & React.HTMLProps<HTMLDivElement>;

export function MemberCard({
	name,
	email,
	title,
	imageData,
	isOld,
	isCurrentLeadership,
	...restProps
}: MemberCardProps) {
	function getTitle() {
		if (title && !isCurrentLeadership) {
			return `Volt-${title}`;
		}
		if (title) {
			return title;
		}
		return isOld ? "Öregtag" : "Tag";
	}

	return (
		<figure
			className={clsx(
				"group flex max-w-xs flex-col justify-center rounded-2xl bg-white p-4 text-center shadow-2xl",
				restProps.className,
			)}
		>
			<div className="mb-2 h-64 overflow-hidden rounded-2xl object-cover">
				{image ? (
					<GatsbyImage
						image={image}
						alt={`${name} arcképe`}
						className="transform transition duration-300 ease-in-out group-hover:scale-105"
					/>
				) : (
					<StaticImage
						src="../../assets/images/blank.png"
						placeholder="blurred"
						alt="Hiányzó arckép"
						className="transform transition duration-300 ease-in-out group-hover:scale-105"
					/>
				)}
			</div>

			<h4 className="mb-2 border-b-2 border-primary text-lg font-medium">
				{name}
			</h4>

			{email && isCurrentLeadership && (
				<a
					className="mb-0.5 text-sm hover:text-primary"
					href={`mailto:${email}`}
				>
					{email}
				</a>
			)}

			<p className="font-RobotoMono text-sm lowercase text-gray-600">
				{getTitle()}
			</p>
		</figure>
	);
}
