import React from 'react';
import {Routes,Route} from 'react-router-dom';

// Import All Comps
import Home from './Home'
import Products from './Products'
import ProductDetail from './ProductDetail';
import Page404 from './Page404';

function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="products" element={<Products />} ></Route>
            <Route path="products/:shoe" element={<ProductDetail />} ></Route>
            <Route path="*" element={<Page404 />} ></Route>
        </Routes>
    )
}

export default AppRoutes;