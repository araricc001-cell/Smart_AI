import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const NAVLINKS = [
	{ name: "Home", path: "/" },
	{ name: "Products", path: "/products" },
	{ name: "About", path: "/about" },
	{ name: "Contact", path: "/contact" },
];
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((prevState) => !prevState);
	};
	return (
		<>
			<div className="bg-transparent fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50">
				{/* logo */}
				<h1 className="text-white text-2xl">Smart AI</h1>

				{/* navlinks */}
				<ul className="hidden md:flex items-center gap-10">
					{NAVLINKS.map((item, idx) => (
						<NavLink
							key={idx}
							className={({ isActive }) =>
								`text-white hover:bg-green-800  rounded-full px-4 py-1.5 ${isActive ? "bg-green-800" : ""}`
							}
							to={item.path}
						>
							{item.name}
						</NavLink>
					))}
				</ul>

				{/* mobile navbar triggers */}
				<button onClick={handleToggle} className="block md:hidden">
					{isOpen ? (
						<IoMdClose color="white" size={20} />
					) : (
						<CiMenuFries color="white" size={20} />
					)}
				</button>
			</div>

			{/* mobile navbar */}
			{isOpen && (
				<div className="bg-transparent fixed top-14 left-0 w-full z-50">
					<ul className="flex-col items-start flex gap-3 bg-black py-3">
						{NAVLINKS.map((item, idx) => (
							<>
								<NavLink
									key={idx}
									className={({ isActive }) =>
										`text-white hover:bg-green-800  rounded-full px-4 py-1.5 ${isActive ? "text-green-500" : ""}`
									}
									to={item.path}
								>
									{item.name}
								</NavLink>
								<div className="bg-white/20 w-full h-px" />
							</>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default Navbar;