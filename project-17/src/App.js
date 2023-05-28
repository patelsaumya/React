import React from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path='/' element={<HomePage />} />
//         <Route path='/products' element={<ProductsPage />} />
//     </Route>
// );

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />, // <ErrorPage /> is displayed only if error occurs inside the child of this route
        // children: [
        //     // Absolute paths
        //     { path: '/', element: <HomePage /> },
        //     { path: '/products', element: <ProductsPage /> }, // errorElement: <ErrorPage /> -> show ErrorPage when ProductsPage throws an error
        //     { path: '/products/:productId', element: <ProductDetail />} // dynamic path segments (path parameters). /:productId segment of the route is dynamic
        // ]
        children: [
            // Relative paths
            
            // { path: '', element: <HomePage /> },
            { index: true, element: <HomePage /> }, // Index Route: Default route that should be displayed if the parent's route is currently active
            { path: 'products', element: <ProductsPage /> }, // errorElement: <ErrorPage /> -> show ErrorPage when ProductsPage throws an error
            { path: 'products/:productId', element: <ProductDetail />} // dynamic path segments (path parameters). /:productId segment of the route is dynamic
        ]
    }
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;