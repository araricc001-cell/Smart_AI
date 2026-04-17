import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import Input from "../components/Input";
import { number, object, string } from "yup";
import { API_URL } from "./../lib/api";
import { toast } from "react-toastify";
//
// name, description, price, category,inStock, , image

const ProductValidation = object({
  name: string().required("product name is required"),
  description: string().required("product description is required"),
  price: number()
    .required("product must have a price")
    .min(1, "price must be greater than 1"),
  category: string().required("product must have a category"),
  image: string()
    .url("Image must be a valid URL")
    .required("product must have an image"),
});

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataById = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/${id}`);

      if (!response.ok)
        throw new Error(
          "Unable to fetch data at this time, please try again later",
        );

      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [id])  ;

  useEffect(() => {
    fetchDataById();
  }, [fetchDataById]);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      const dataToSend = {
        ...values,
        inStock: true,
      };

      console.log(dataToSend);
      try {
        setIsSubmitting(true);
        // initial api POST request
        const response = await fetch(`${API_URL}/${id}`, {
          method: "PUT",
          // transform file to pure JSON format
          body: JSON.stringify(dataToSend),
          // attach headers, decalring it as JSON
          headers: {
            "Content-Type": "application/json",
          },
        });

        // if an error occurred throw a new error message
        if (!response.ok)
          throw new Error("An error occurred , please try again later");

        // if successfull extract data from the response object
        const data = await response.json();
        // log data to the console
        console.log(data);
        // create a successful toast message if no error occurred
        toast.success("Product updated successfully");
        // then navigate back to the products page
        navigate("/Product");
      } catch (error) {
        console.log(error);
        toast.error(error);
      } finally {
        setIsSubmitting(false);
      }
    },
    validationSchema: ProductValidation,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );

  return (
    <div className="bg-linear-to-br from-black to-green-900 min-h-screen pt-25 px-0 md:px-6">
      <div>
        <button
          onClick={() => navigate(-1)}
          className="text-white text-sm bg-green-900 px-3 py-2 rounded-full"
        >
          ← Go back
        </button>
      </div>

      {/* product form */}
      <form
        onSubmit={handleSubmit}
        className="p-4 max-w-3xl w-full mx-auto pt-10 space-y-4"
      >
        <h1 className="text-white text-center text-2xl">Update Product</h1>
        {/* name */}
        <Input
          name={"name"}
          error={errors.name}
          onChange={handleChange}
          value={values.name}
          placeholder={"Enter your product name"}
          type={"text"}
        />

        {/* price */}
        <Input
          name={"price"}
          error={errors.price}
          onChange={handleChange}
          value={values.price}
          placeholder={"Enter your product price"}
          type={"number"}
        />

        {/* category */}
        <Input
          name={"category"}
          error={errors.category}
          onChange={handleChange}
          value={values.category}
          placeholder={"Enter your product category"}
          type={"text"}
        />

        {/* image */}
        <Input
          name={"image"}
          error={errors.image}
          onChange={handleChange}
          value={values.image}
          placeholder={"Enter your product image"}
          type={"text"}
        />

        {/* description */}
        <Input
          name={"description"}
          error={errors.description}
          onChange={handleChange}
          value={values.description}
          placeholder={"Enter your product description"}
          type={"text"}
        />

        {/* submit button */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full p-2 bg-green-400 rounded-md mt-5"
        >
          {isSubmitting ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
