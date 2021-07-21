import clsx from "clsx";
import React from "react";

import * as styles from "./Hero.module.scss";

export function Hero() {
	return (
		<header className="w-full bg-blueGray-900">
			<div className="container mx-auto px-4">
				<h2 className="mb-4 text-white text-2xl font-medium">
					Az schdesign a Simonyi Károly&nbsp;Szakkollégium{" "}
					<span className="text-primary">kreatív</span>&nbsp;alkotóműhelye.
				</h2>
			</div>
			<div className="relative w-full overflow-hidden" id="hero-container">
				<h1
					className={clsx(
						styles.textHero,
						"pl-4 font-schdesign cursor-default select-none sm:pl-16 md:pl-24 md:pt-32 lg:pl-32 xl:pl-48 xl:pt-64",
					)}
				>
					schdesign
				</h1>
			</div>
		</header>
	);
}
