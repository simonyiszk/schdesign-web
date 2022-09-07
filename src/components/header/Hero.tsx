import clsx from "clsx";

import styles from "./Hero.module.scss";

export function Hero() {
	return (
		<header className="w-full bg-gray-900">
			<div className="container mx-auto px-4">
				<h2 className="mb-4 text-2xl font-medium text-white">
					Az schdesign a Simonyi Károly&nbsp;Szakkollégium{" "}
					<span className="text-primary">kreatív</span>&nbsp;alkotóműhelye.
				</h2>
			</div>
			<div className="relative w-full overflow-hidden" id="hero-container">
				<h1
					className={clsx(
						styles.textHero,
						"cursor-default select-none pl-4 font-schdesign sm:pl-16 md:pl-24 md:pt-32 lg:pl-32 xl:pl-48 xl:pt-64",
					)}
				>
					schdesign
				</h1>
			</div>
		</header>
	);
}
