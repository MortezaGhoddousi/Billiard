import '../../../css/CMSnews.css'
import { useState } from 'react';
import axios from 'axios';


function RemoveProduct() {

    const [id , setId] = useState ('');

    function handleChange (e) {
       setId(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/delete/'+id)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return ( 
        <section className='edit'>
            <form onSubmit={handleSubmit}>
                <h1>حذف خبر</h1>
                <label>
                    <input type="text" value={id} onChange={handleChange} placeholder="آیدی محصول برای حذف را وارد کنید"/>
                </label>
                <input type="submit" value="ثبت" />
            </form>
        </section>
     );
}

export default RemoveProduct;