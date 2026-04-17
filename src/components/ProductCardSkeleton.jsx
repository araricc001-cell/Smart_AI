import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductCardSkeleton = () => {
	return (
		<div className="rounded-lg p-2 backdrop-blur-2xl border border-white">
			{/* Image and category section skeleton */}
			<div className="relative w-full h-40">
				{/* Image: h-40 in Tailwind is 160px */}
				<Skeleton
					height={160}
					borderRadius="0.5rem"
					baseColor="#333333"
					highlightColor="#555555"
				/>

				{/* Category Pill */}
				<div className="absolute top-1 right-1">
					<Skeleton
						width={60}
						height={18}
						borderRadius="9999px"
						baseColor="#333333"
						highlightColor="#555555"
					/>
				</div>
			</div>

			{/* Product price, name, and description skeleton */}
			<div className="space-y-1 mt-3">
				{/* Product Name */}
				<p className="text-sm">
					<Skeleton width="80%" baseColor="#333333" highlightColor="#555555" />
				</p>

				{/* Price */}
				<p className="text-sm font-bold">
					<Skeleton width="40%" baseColor="#333333" highlightColor="#555555" />
				</p>

				{/* Description: line-clamp-2 means we should show 2 skeleton lines */}
				<p className="text-xs">
					<Skeleton
						count={2}
						baseColor="#333333"
						highlightColor="#555555"
						style={{ marginTop: "4px" }}
					/>
				</p>
			</div>
		</div>
	);
};

export default ProductCardSkeleton;