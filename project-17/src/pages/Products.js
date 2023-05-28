import React from "react";
import { Link } from 'react-router-dom';

const PRODUCTS = [
    {id: 'p1', title: 'Product 1'},
    {id: 'p2', title: 'Product 2'},
    {id: 'p3', title: 'Product 3'}
];

function ProductsPage() {
    return (
        <>
            <h1>The Products Page</h1>
            <ul>
                {/* If route starts with '/' then it is absolute path else it is relative path to the current active link */}
                {PRODUCTS.map(prod => <li key={prod.id}>
                    {/*<Link to={`${prod.id}`}>{prod.title}</Link>*/}
                    <Link to={`/products/${prod.id}`}>{prod.title}</Link>
                </li>)}
            </ul>
        </>
    );
}

export default ProductsPage;