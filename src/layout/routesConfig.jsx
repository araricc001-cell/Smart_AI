import About from "../pages/About";
import Home from "./../pages/Home";
import Contact from "./../pages/Contact";
import Product from "./../pages/Product";
import ProductPages from "../pages/ProductPages";
import AboutPages from "../pages/AboutPages";
import CreateProduct from "../pages/CreateProduct";
import UpdateProduct from "../pages/UpdateProduct";


export const routesConfig = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      {
        path: "products/:id",
        element: <ProductPages />,
      },
      
      {
        path: "students/:id",
        element: <AboutPages />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Product",
        element: <Product />,
      },

      {
        path: "create-product",
        element: <CreateProduct/>
      },
      {
        path: "update-product/:id",
        element: <UpdateProduct />
      },
    ],
  },
];
