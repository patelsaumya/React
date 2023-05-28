import React from "react";
import {Link, useParams} from 'react-router-dom';

function ProductDetailPage() {
    const params = useParams();
    return (
        <>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>

            {/* 'relative' attribute only works if the route mentioned in the 'to' attribute is relative (and not absolute) */}

            <p><Link to=".." relative='route'>Back (Relative to Route)</Link></p>
            {/* Default behavior */}
            {/* This ("..") relative path is resolved relative to the route definitions(mentioned in App.js) */}
            {/* '/products/:productId' is child of '/' and a sibling of '/products', so going up a level (by '..') you go back to '/' */}

            <p><Link to=".." relative='path'>Back (Relative to Path)</Link></p>
            {/* react-router will look at the currently active path and will remove one segment. Hence, it will go from '/products/:productId' to '/products' */}
        </>
    );
}

export default ProductDetailPage;