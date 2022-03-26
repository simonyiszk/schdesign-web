import clsx from "clsx";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import schsvg from "@/assets/images/sch.svg";
import simonyisvg from "@/assets/images/simonyi_color.svg";
import viksvg from "@/assets/images/vik.svg";

import * as styles from "./Footer.module.scss";

export function Footer() {
	return (
		<footer
			className={clsx(styles.footer, "p-8 w-full text-white bg-blueGray-900")}
		>
			<div className="container flex flex-col content-center justify-center mx-auto text-center">
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
				<div className="flex justify-evenly mx-auto pb-4 w-full lg:w-1/3">
					<a href="https://www.instagram.com/schdesign.hu/">
						<FaInstagram className="w-10 h-auto hover:text-primary" />
					</a>
					<a href="https://www.facebook.com/schdesignbme/">
						<FaFacebookSquare className="w-10 h-auto hover:text-primary" />
					</a>
				</div>
				<div className="flex flex-col items-center justify-evenly mx-auto pb-4 md:flex-row md:w-2/3">
					<a href="https://sch.bme.hu" target="_blank" rel="noreferrer">
						<img
							className="pb-4 w-40 hover:text-primary md:pb-0 md:h-24"
							src={schsvg}
							alt="Schönherz Zoltán Kollégium logó"
						/>
					</a>
					<a href="https://simonyi.bme.hu" target="_blank" rel="noreferrer">
						<img
							className="pb-4 w-56 md:pb-0 md:h-24"
							src={simonyisvg}
							alt="Simonyi Károly Szakkollégium logó"
						/>
					</a>
					<a href="https://vik.bme.hu" target="_blank" rel="noreferrer">
						<img
							className="pb-4 w-40 md:pb-0 md:h-24"
							src={viksvg}
							alt="BME Villamosmérnöki és Infromatikai kar logó"
						/>
					</a>
				</div>
				<a
					className="w-fit block mx-auto text-gray-400 hover:underline text-xs"
					href="https://github.com/simonyiszk/schdesign-web"
					target="_blank"
				>
					© schdesign {new Date().getFullYear()}
				</a>
			</div>
		</footer>
	);
}
