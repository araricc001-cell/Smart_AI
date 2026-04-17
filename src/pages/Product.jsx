import React, { useEffect, useState } from "react";
import { API_URL } from "./../lib/api";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const fetchProducts = async () => {
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

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDeleteClick = (id) => {
    setSelectedProductId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(`${API_URL}/${selectedProductId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("An unexpected error occured");

      toast.success("Product deleted successfully");

      setProducts((prev) =>
        prev.filter((item) => item.id !== selectedProductId)
      );

      setShowModal(false);
      setSelectedProductId(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProductId(null);
  };

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
        <p className="text-white text-2xl text-center">
          Sorry we could not load your data at this time. Please try again later.
        </p>
        <button
          onClick={fetchProducts}
          className="bg-blue-500 px-4 py-2 rounded-md text-white"
        >
          Reload
        </button>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-br from-black to-green-900 min-h-screen pt-28 px-6">
      <div className="text-white flex justify-between items-center py-5">
        <h1 className="text-2xl font-semibold">Products</h1>

        <Link to="/create-product">
          <button className="bg-white text-black p-2 rounded-lg">
            New Product +
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            handleDelete={() => handleDeleteClick(product.id)}
          />
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg space-y-4 w-75 text-center">
            <h2 className="text-lg font-semibold text-black">
              Are you sure you want to delete this product?
            </h2>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Yes
              </button>

              <button
                onClick={handleCloseModal}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;