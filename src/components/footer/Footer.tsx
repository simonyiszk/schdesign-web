import clsx from "clsx";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import manifest from "@/../package.json";
import schsvg from "@/assets/images/sch.svg";
import simonyisvg from "@/assets/images/simonyi_color.svg";
import viksvg from "@/assets/images/vik.svg";

import * as styles from "./Footer.module.scss";

export function Footer() {
	const { currentBuildDate } =
		useStaticQuery<GatsbyTypes.FooterQueryQuery>(graphql`
			query FooterQuery {
				currentBuildDate {
					currentDate
				}
			}
		`);
	const buildDate = new Date(Date.parse(currentBuildDate?.currentDate ?? ""));
	const buildDateString = new Intl.DateTimeFormat("hu-HU", {
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	})
		.format(buildDate)
		.match(/\d+/g)
		?.join("");

	return (
		<footer
			className={clsx(styles.footer, "w-full bg-blueGray-900 p-8 text-white")}
		>
			<div className="container mx-auto flex flex-col content-center justify-center text-center">
				<h3 className="mb-4 mt-4 font-RobotoMono text-2xl">kapcsolat</h3>
				<p className="mb-4 text-xl">
					Van egy projekted számunkra? <br />
					Küldj egy e-mailt a{" "}
					<a
						href="mailto:hello@schdesign.hu"
						className="text-primary hover:underline"
					>
						hello@schdesign.hu
					</a>{" "}
					címre.
				</p>
				<div className="mx-auto flex w-full justify-evenly pb-4 lg:w-1/3">
					<a href="https://www.instagram.com/schdesign.hu/">
						<FaInstagram className="h-auto w-10 hover:text-primary" />
					</a>
					<a href="https://www.facebook.com/schdesignbme/">
						<FaFacebookSquare className="h-auto w-10 hover:text-primary" />
					</a>
				</div>
				<div className="mx-auto flex flex-col items-center justify-evenly pb-4 md:w-2/3 md:flex-row">
					<a href="https://sch.bme.hu" target="_blank" rel="noreferrer">
						<img
							className="w-40 pb-4 hover:text-primary md:h-24 md:pb-0"
							src={schsvg}
							alt="Schönherz Zoltán Kollégium logó"
						/>
					</a>
					<a href="https://simonyi.bme.hu" target="_blank" rel="noreferrer">
						<img
							className="w-56 pb-4 md:h-24 md:pb-0"
							src={simonyisvg}
							alt="Simonyi Károly Szakkollégium logó"
						/>
					</a>
					<a href="https://vik.bme.hu" target="_blank" rel="noreferrer">
						<img
							className="w-40 pb-4 md:h-24 md:pb-0"
							src={viksvg}
							alt="BME Villamosmérnöki és Infromatikai kar logó"
						/>
					</a>
				</div>
				<div className="flex w-full flex-row justify-center">
					<p className="mx-auto block w-fit text-xs text-gray-400">
						<a
							href="https://github.com/simonyiszk/schdesign-web"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub repo link"
							className="hover:text-gray-300 hover:underline"
						>
							{`v${manifest.version}.${buildDateString}`}
						</a>{" "}
						©&nbsp;{new Date().getFullYear()}&nbsp;schdesign
					</p>
				</div>
			</div>
		</footer>
	);
}
