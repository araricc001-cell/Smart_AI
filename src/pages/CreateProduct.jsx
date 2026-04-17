import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Input from "../components/Input";
import { number, object, string } from "yup";
import { API_URL } from "./../lib/api";
import { toast } from "react-toastify";

const ProductValidation = object({
  name: string().required("product name is required"),
  description: string().required("product description is required"),
  price: number()
    .required("product must have a price")
    .min(1, "price must be greater than 1"),
  category: string().required("product must have a category"),
  image: string()
    .url("Image must have a valid URL")
    .required("product must have a image"),
});

const CreateProduct = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      category: "",
      instock: true,
      image: "",
    },

    onSubmit: async (values) => {
      try {
        setIsSubmitting(true);
        // initial api POST request
        const response = await fetch(API_URL, {
          method: "POST",
          // transform file to pure JSON format
          body: JSON.stringify(values),
          // attach headers, declaring it as JSON
          headers: {
            "Content-Type": "application/json",
          },
        });
        // if an error occured throw a new error message
        if (response.status != 201)
          throw new Error("An error occurred, please try again later");

        // if successful extract data from the response object
        const data = await response.json();
        // log data to the console
        console.log(data);
        // create a successful toast message if no error occurred
        toast.success("Product created successfully");
        // then navigate back to the products page
        navigate("/products");
      } catch (error) {
        console.log(error);
        toast.error(error);
      } finally {
        setIsSubmitting(false);
      }
    },

    validationSchema: ProductValidation,
  });

  return (
    <div className="bg-linear-to-br from-black to-green-900 min-h-screen pt-28 px-6">
      <div>
        <button
          onClick={() => navigate(-1)}
          className="text-white text-sm bg-green-900 px-3 py-3 rounded-full"
        >
          ← Go Back
        </button>
      </div>

      {/* product form */}
      <form
        onSubmit={handleSubmit}
        className="p-4 max-w-3xl w-full mx-auto pt-10 space-y-4 backdrop-blur-2xl"
      >
        <h1 className="text-white text-center text-2xl">User Form</h1>
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

        {/* category */}
        <Input
          name={"category"}
          error={errors.category}
          onChange={handleChange}
          value={values.category}
          placeholder={"Enter your product category"}
          type={"text"}
        />

        {/* submit button */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full p-2 bg-green-400 rounded-md mt-5"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;