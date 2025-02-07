import "../css/Shop.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Shop() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "اب معدنی",
            price: "10,000 تومان",
            imageAdd: "./images/p-1.webp",
        },
        {
            id: 1,
            name: "اب معدنی",
            price: "10,000 تومان",
            imageAdd: "./images/p-1.webp",
        },
        {
            id: 1,
            name: "اب معدنی",
            price: "10,000 تومان",
            imageAdd: "./images/p-1.webp",
        },
        {
            id: 1,
            name: "اب معدنی",
            price: "10,000 تومان",
            imageAdd: "./images/p-1.webp",
        },
        {
            id: 1,
            name: "اب معدنی",
            price: "10,000 تومان",
            imageAdd: "./images/p-1.webp",
        },
        {
            id: 1,
            name: "اب معدنی",
            price: "10,000 تومان",
            imageAdd: "./images/p-1.webp",
        },
        {
            id: 1,
            name: "اب معدنی",
            price: "10,000 تومان",
            imageAdd: "./images/p-1.webp",
        },
        {
            id: 1,
            name: "اب معدنی",
            price: "10,000 تومان",
            imageAdd: "./images/p-1.webp",
        },
        {
            id: 1,
            name: "اب معدنی",
            price: "10,000 تومان",
            imageAdd: "./images/p-1.webp",
        },
        {
            id: 1,
            name: "اب معدنی",
            price: "10,000 تومان",
            imageAdd: "./images/p-1.webp",
        },
        {
            id: 1,
            name: "اب معدنی",
            price: "10,000 تومان",
            imageAdd: "./images/p-1.webp",
        },
        {
            id: 1,
            name: "اب معدنی",
            price: "10,000 تومان",
            imageAdd: "./images/p-1.webp",
        },
    ]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header navActive={{ shop: true }} />
            <section id="shop">
                <h1>بوفه</h1>
                <div className="products">
                    {products.map((product) => (
                        <div className="option" key={product.id}>
                            <div className="image-container">
                                <img src={product.imageAdd} alt="" />
                            </div>
                            <h1>{product.name}</h1>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Shop;
