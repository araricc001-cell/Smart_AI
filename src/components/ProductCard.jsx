import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";


const ProductCard = ({ product, handleDelete }) => {
	return (
		<div className="rounded-lg p-2 backdrop-blur-2xl border border-white">
			{/* image and category section */}
			<div className="relative w-full h-40">
				<img
					src={product.image}
					alt={`${product.name}-${product.id}`}
					className="object-cover w-full h-full rounded-lg"
				/>
				<span className="absolute top-1 text-[9px] text-white bg-green-900 left-1 rounded-full px-3 py-0.5">
					{product.category}
				</span>
				<div className="absolute top-1 right-1 flex items-center gap-2">
				{/* update button */}
				<Link to={`/update-product/${product.id}`}>
				<button className="bg-gray-500 rounded-full p-1.5">
					<FaPencil color="white" size={12} />
				</button>
				</Link>
				{/* delete button */}
				<button onClick={handleDelete}>
					<MdDeleteForever size={20} color="silver" />
				</button>
				</div>
			</div>

			{/* product price, name and description */}
			<div className="space-y-1 text-white mt-3">
				<Link to={`/products/${product.id}`}>
					<p className="text-sm hover:underline cursor-pointer">
						{product.name}
					</p>
				</Link>
				<p className="text-sm font-bold">₦{product.price}</p>
				<p className="text-neutral-200 text-xs line-clamp-2">
					{product.description}
				</p>
			</div>
		</div>
	);
};

export default ProductCard;