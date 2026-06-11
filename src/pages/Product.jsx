import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { API_URL } from "../lib/api";
import ProductCard from './../components/ProductCard';
import ProductCardSkeleton from "../components/ProductCardSkeleton";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [productToDelete, setProductToDelete] = useState(null);

	const fetchData = async () => {
		try {
			setIsError(false);
			setIsLoading(true);
			const response = await fetch(API_URL);
			if (!response.ok) throw new Error("An unexpected error occured");
			const data = await response.json();
			setProducts(data);
		} catch (error) {
			console.log(error);
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	const handleDelete = async (id) => {
		try {
			const response = await fetch(`${API_URL}/${id}`, {
				method: "DELETE",
			});

			if (!response.ok) throw new Error("An unexpected error occured");

			toast.success("Product deleted successfully");
			setProductToDelete(null);
			fetchData();
		} catch (error) {
			console.log(error);
			toast.error("Unable to delete the product. Please try again.");
		}
	};

	const confirmDelete = (product) => {
		setProductToDelete(product);
	};

	const cancelDelete = () => {
		setProductToDelete(null);
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading)
		return (
			<div className="min-h-screen pt-38 bg-linear-to-br from-black to-green-900 grid grid-cols-4">
				{Array.from({ length: 8 }).map((_, i) => (
					<ProductCardSkeleton key={i} />
				))}
			</div>
		);

	if (isError) {
		return (
			<div className="h-screen bg-linear-to-br flex-col gap-2 from-black to-green-900 flex justify-center items-center">
				<p className="text-white text-2xl">
					Sorry we could not load your data at this time please try again
					later.....
				</p>
				<button
					onClick={() => window.location.reload()}
					className="bg-blue-500 px-4 py-2 rounded-md "
				>
					Reload
				</button>
			</div>
		);
	}

	return (
		<div className="bg-linear-to-br from-black to-green-900 min-h-screen pt-28 px-6">
			{/* product header */}
			<div className="text-white flex justify-between items-center py-5">
				<h1 className="text-2xl font-semibold">Products</h1>
				<Link to="/create-product">
					<button className="bg-white text-black p-2 rounded-lg">
						New Product+
					</button>
				</Link>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
				{products.map((product) => (
					<ProductCard
						product={product}
						key={product.id}
						handleDelete={() => confirmDelete(product)}
					/>
				))}
			</div>

{/* Delete Confirmation Modal */}
			{productToDelete && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
					<div className="w-full max-w-md rounded-2xl bg-white p-6 text-black shadow-2xl">
						<p className="text-lg font-semibold">Confirm Delete</p>
						<p className="mt-4 text-sm text-gray-700">
							Are you sure you want to delete "{productToDelete.name}"?
							This action cannot be undone.
						</p>
						<div className="mt-6 flex justify-end gap-3">
							<button
								className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
								onClick={cancelDelete}
							>
								No
							</button>
							<button
								className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
								onClick={() => handleDelete(productToDelete.id)}
							>
								Yes, delete
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Products;