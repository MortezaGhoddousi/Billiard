import '../../css/AddProduct.css';
import { useState } from 'react';
import axios from 'axios';

function UpdateProduct() {
    const [data, setData] = useState({
        id: '',
        name: '',
        price: '',
        number:'',
        imageadd: ''
    });

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.put('http://localhost:8000/api/update/' +  data.id, data)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <section className='edit'>
            <form onSubmit={handleSubmit}>
                <h1>به‌روزرسانی محصول</h1>
                <label>
                    <input type="text" id='id' onChange={handleChange} placeholder="آیدی محصول برای به‌روزرسانی را وارد کنید" />
                </label>
                <label>
                    <input type="text" id='name' onChange={handleChange} placeholder="نام جدید محصول را وارد کنید" />
                </label>
                <label>
                    <input type="text" id='price' onChange={handleChange} placeholder="قیمت جدید محصول را وارد کنید" />
                </label>
                <label>
                    <input type="text" id="number" onChange={handleChange} placeholder="تعداد جدید محصول را وارد کنید" />
                </label>
                <label>
                    <input type="text" id='imageadd' onChange={handleChange} placeholder="آدرس تصویر جدید را وارد کنید" />
                </label>
                <input type="submit" value="ثبت" />
            </form>
        </section>
    );
}

export default UpdateProduct;
