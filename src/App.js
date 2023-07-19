import React from "react";

import Home from "./pages/Home";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ProductList from "./features/product-list/ProductList";
import Cart from "./features/cart/Cart";
import ProductDetails from "./features/product-list/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList></ProductList>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/product-details",
    element: <ProductDetails></ProductDetails>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
