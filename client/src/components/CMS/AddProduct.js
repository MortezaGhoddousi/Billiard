import "../../css/AddProduct.css";
import { useState } from "react";
import axios from "axios";
import uuid from "react-uuid";

function AddProduct() {
    const [newProduct, setNewProduct] = useState({
        id: "",
        name: "",
        detail: "",
        price: "",
        imageadd: "",
    });

    function handleChange(e) {
        setNewProduct({ ...newProduct, [e.target.id]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setNewProduct({ ...newProduct, id: uuid() });
        axios
            .post("http:localhost//:8000/api/add", newProduct)
            .then((result) => {
                console.log(result);
                setNewProduct({
                    id: "",
                    name: "",
                    price: "",
                    number: "",
                    imageadd: "",
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <section className="edit">
            <form onSubmit={handleSubmit}>
                <h1>اضافه کردن محصول</h1>
                <label>
                    <input
                        type="text"
                        id="name"
                        value={newProduct.name}
                        onChange={handleChange}
                        placeholder="نام محصول را وارد کنید"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        id="price"
                        value={newProduct.price}
                        onChange={handleChange}
                        placeholder="قیمت محصول را وارد کنید"
                    />
                </label>
                <label>
                    <input
                        id="number"
                        type="text"
                        value={newProduct.number}
                        onChange={handleChange}
                        placeholder="تعداد محصول را وارد کنید"
                    />
                </label>
                <label>
                    <input
                        id="imageadd"
                        type="text"
                        value={newProduct.imageadd}
                        onChange={handleChange}
                        placeholder="آدرس تصویر را وارد کنید"
                    />
                </label>
                <input type="submit" value="ثبت" />
            </form>
        </section>
    );
}

export default AddProduct;
