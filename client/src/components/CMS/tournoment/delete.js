import "../../../css/tournomentCMS.css";
import { useState } from "react";
import axios from "axios";
import { api } from "../../../API";

function RemoveProduct() {
    const [id, setId] = useState("");

    function handleChange(e) {
        setId(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .delete(`${api}/api/delete/` + id)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <section className="edit">
            <form onSubmit={handleSubmit}>
                <h1>حذف مسابقه</h1>
                <label>
                    <input
                        type="text"
                        value={id}
                        onChange={handleChange}
                        placeholder="اسم  مسابقه برای حذف را وارد کنید"
                    />
                </label>
                <input type="submit" value="ثبت" />
            </form>
        </section>
    );
}

export default RemoveProduct;
