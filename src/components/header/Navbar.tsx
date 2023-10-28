"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

import navbarContent from "@/data/navbar.json";

export function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<header
			className="relative z-40 -mb-px flex flex-wrap items-center justify-between bg-gray-900 text-white"
			id="header"
		>
			<div className="mx-auto flex w-full flex-wrap items-center justify-between p-4 lg:p-8">
				<div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
					<Link
						href="/"
						className="font-schdesign text-4xl no-underline lg:text-5xl 2xl:text-7xl"
					>
						sch<span className="text-primary">design</span>
					</Link>
					<button
						className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-2 text-xl leading-none outline-none focus:outline-none lg:hidden"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<FaBars />
					</button>
				</div>
				<nav
					className={clsx(
						"z-50 grow items-center lg:flex",
						navbarOpen ? "flex" : "hidden",
					)}
				>
					<ul className="flex w-full list-none flex-col font-RobotoMono lowercase lg:ml-auto lg:w-auto lg:flex-row">
						{navbarContent.links.map(({ href, label }, i) => (
							<li key={`${href}`} className="w-full py-1 pl-2 lg:pl-0">
								{href.startsWith("/") ? (
									<Link
										href={href}
										className={clsx(
											"inline-block w-full py-2 text-lg font-medium hover:text-primary lg:px-4 xl:text-2xl",
											i === 0 && "lg:pl-0",
											i === navbarContent.links.length - 1 && "lg:pr-0",
										)}
									>
										{label}
									</Link>
								) : (
									<a
										href={href}
										className={clsx(
											"inline-block w-full py-2 text-lg font-medium hover:text-primary lg:px-4 xl:text-2xl",
											i === 0 && "lg:pl-0",
											i === navbarContent.links.length - 1 && "lg:pr-0",
										)}
										target="_blank"
										rel="noreferrer"
									>
										{label}
									</a>
								)}
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
