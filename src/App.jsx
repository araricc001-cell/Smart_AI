import { BrowserRouter, useRoutes } from "react-router-dom";
import { routesConfig } from "./layout/routesConfig";
import Navbar from "./layout/Navbar";

export default function App() {
  const AppRoutes = () => {
    const elements = useRoutes(routesConfig);
    return elements;
  };
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </main>
  );
}
