import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_URL } from "../lib/api";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

const ProductDetails = () => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        setCurrentProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

      // fetch(`${API_URL}/${id}`)
      //   .then((data) => data.json())
      //   .catch((error) => console.log(error))
      //   .finally(() => console.log("Completed"));
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-linear-to-br from-black to-green-900 min-h-screen flex items-center justify-center">
        <div className="text-3xl text-white animate-pulse">
          <ProductCardSkeleton/>
        </div>
      </div>
    );
  }

  if (!currentProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-black to-green-900 px-6 py-28 text-white">
      {/* Back button */}
      <div className="max-w-5xl mx-auto mb-4">
        <Link
          to="/products"
          className="text-sm text-green-300 hover:text-green-200 transition"
        >
          ← Back to products
        </Link>
      </div>

      {/* Card */}
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className="w-full h-100 object-cover"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-between space-y-4">
          <div>
            <span className="inline-block bg-green-700 text-xs px-3 py-1 rounded-full mb-3">
              {currentProduct.category}
            </span>

            <h1 className="text-3xl font-bold mb-3">{currentProduct.name}</h1>

            <p className="text-neutral-300">{currentProduct.description}</p>
          </div>

          <div className="flex items-center justify-between pt-4">
            <p className="text-2xl font-bold text-green-400">
              ₦{currentProduct.price}
            </p>

            <button className="bg-green-600 hover:bg-green-500 transition px-6 py-2 rounded-lg font-semibold shadow-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
