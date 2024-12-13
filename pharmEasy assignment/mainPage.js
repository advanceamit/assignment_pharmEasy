import React from "react";
import Product from "./product";
// E-commerce Product Page:
// Product Details: Display product images, description, price, and reviews.
// Add to Cart: Implement a mechanism for adding products to a shopping cart.
// Quantity Control: Allow users to adjust the quantity of products

const productList = [
    {
        id: 1,
        image: "https://picsum.photos/seed/picsum/200/300",
        description: " This is a demo Product 1",
        price: 1000,
        reciew: "Amit-I have used this product overall good product ",
    },
    {
        id: 2,
        image: "https://picsum.photos/200/300/?blur",
        description: " This is a demo Product 2",
        price: 1000,
        reciew: "Bisnu-I have used this product overall good product ",
    },
    {
        id: 3,
        image: "https://picsum.photos/200/300.jpg",
        description: " This is a demo Product 3",
        price: 1000,
        reciew: "Ankit-I have used this product overall good product ",
    },
    {
        id: 4,
        image: "https://picsum.photos/seed/picsum/200/300",
        description: " This is a demo Product 4",
        price: 1000,
        reciew: "Rohit-I have used this product overall good product ",
    },
];

const Ecommerce = () => {
    return (
        <div>
            <Product productList={productList} />
        </div>
    );
};

export default Ecommerce;
