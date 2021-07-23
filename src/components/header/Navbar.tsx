import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";
import { FaBars } from "react-icons/fa";

import navbarContent from "@/data/navbar.json";

export function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<header
			className="relative z-40 flex flex-wrap items-center justify-between -mb-px text-white bg-blueGray-900"
			id="header"
		>
			<div className="flex flex-wrap items-center justify-between mx-auto p-4 w-full lg:p-8">
				<div className="relative flex justify-between w-full lg:static lg:block lg:justify-start lg:w-auto">
					<Link
						to="/"
						className="no-underline font-schdesign text-4xl lg:text-7xl"
					>
						sch<span className="text-primary">design</span>
					</Link>
					<button
						className="bg-transparent border-transparent block px-3 py-2 text-xl leading-none border border-solid rounded outline-none focus:outline-none cursor-pointer lg:hidden"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<FaBars />
					</button>
				</div>
				<nav
					className={clsx(
						"z-50 flex-grow items-center lg:flex",
						navbarOpen ? "flex" : "hidden",
					)}
				>
					<ul className="flex flex-col w-full font-RobotoMono list-none lowercase lg:flex-row lg:ml-auto lg:w-auto">
						{navbarContent.links.map(({ href, label }, i) => (
							<li key={`${href}`} className="pl-2 py-1 w-full lg:pl-0">
								{href.startsWith("/") ? (
									<Link
										to={href}
										className={clsx(
											"inline-block py-2 w-full hover:text-primary text-xl font-medium lg:px-5 xl:text-2xl",
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
											"inline-block py-2 w-full hover:text-primary text-xl font-medium lg:px-5 xl:text-2xl",
											i === 0 && "lg:pl-0",
											i === navbarContent.links.length - 1 && "lg:pr-0",
										)}
										target="_blank"
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
