import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const NAVLINKS = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Products", path: "/Product" },
		{ name: "contact", path: "/contact" },
	];
	return (
		<section className="max-w-3xl mx-auto fixed text-white left-0 right-0 w-full py-5">
			<div className="flex justify-between items-center text-sm border border-neutral-100/30 pl-8 pr-2 py-2 rounded-full backdrop-blur-2xl">
				{/* logo */}
				<h5 className="font-bold text-lg">GreenFX</h5>

				{/* navigation links */}
				<nav className="space-x-7">
					{NAVLINKS.map((link, index) => (
						<Link to={link.path} key={index}>
							{link.name}
						</Link>
					))}
				</nav>

				{/* cta's */}
				<div>
					<button className="uppercase bg-green-600 text-sm text-black px-6 py-2 rounded-full">
					Contact us
					</button>
				</div>
			</div>
		</section>
	);
};

export default Navbar;