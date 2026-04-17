import React from "react";
import { BsLightningFill } from "react-icons/bs";

const Home = () => {
	return (
		<section className="min-h-screen bg-linear-to-br from-black to-green-950">
			<div className="py-40 px-8 text-white">
				{/* button and logo */}
				<div className="flex items-center gap-3 pl-1 pr-3 py-1 text-[10px] rounded-full border border-white/20 w-fit">
					<p className="bg-white size-5 flex justify-center items-center rounded-full">
						<BsLightningFill className="text-black" />
					</p>
					<span>Series O funding round was closed</span>
				</div>
				{/* hero text */}
				<div className="max-w-xl space-y-6">
					<h1 className="text-[50px]  leading-15">
						Your smartest AI assistant{" "}
						<span className="text-green-600">work faster and smarter</span>
					</h1>
					<p className="text-sm">
						{" "}
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Perferendis, provident commodi! Qui modi, maxime atque sapiente quod
						nulla id. Omnis.
					</p>
				</div>

				{/* cta's */}
				<div className="flex gap-4 mt-10">
					<button className="bg-white text-black px-6 py-3 rounded-full uppercase font-medium">
						get started
					</button>
					<button className="border border-white/20 px-6 py-3 rounded-full uppercase font-medium">
						discover more
					</button>
				</div>
			</div>
		</section>
	);
};

export default Home;