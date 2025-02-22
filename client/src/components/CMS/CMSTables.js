import "../../css/AddProduct.css";
import { useState } from "react";
import axios from "axios";
import { api } from "../../API";

function CMSTable() {
    const [snooker, setSnooker] = useState({ id: "", price: "" });
    const [billiard, setBilliard] = useState({ id: "", price: "" });

    function handleSnookerChange(e) {
        setSnooker({ ...snooker, [e.target.id]: e.target.value });
    }

    function handleBilliardChange(e) {
        setBilliard({ ...billiard, [e.target.id]: e.target.value });
    }

    function handleSnookerSubmit(e) {
        e.preventDefault();
        axios
            .put(`${api}/api/table/snooker`, snooker)
            .then((result) => {
                console.log(result);
                setSnooker({ id: "", price: "" });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleBilliardSubmit(e) {
        e.preventDefault();
        axios
            .put(`${api}/api/table/pocket`, billiard)
            .then((result) => {
                console.log(result);
                setBilliard({ id: "", price: "" });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="cmsTableContainer">
            <section className="edit">
                <form onSubmit={handleSnookerSubmit}>
                    <h1> میزهای اسنوکر</h1>
                    <label>
                        <input
                            type="text"
                            id="id"
                            onChange={handleSnookerChange}
                            placeholder="شماره میز را وارد کنید"
                            value={snooker.id}
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            id="price"
                            onChange={handleSnookerChange}
                            placeholder="قیمت جدید میز را وارد کنید"
                            value={snooker.price}
                        />
                    </label>
                    <input type="submit" value="ثبت" />
                </form>
            </section>
            <section className="edit">
                <form onSubmit={handleBilliardSubmit}>
                    <h1> میزهای بیلیارد </h1>
                    <label>
                        <input
                            type="number"
                            id="id"
                            onChange={handleBilliardChange}
                            placeholder="شماره میز را وارد کنید"
                            value={billiard.id}
                        />
                    </label>
                    <label>
                        <input
                            type="number"
                            id="price"
                            onChange={handleBilliardChange}
                            placeholder="قیمت جدید میز را وارد کنید"
                            value={billiard.price}
                        />
                    </label>
                    <input type="submit" value="ثبت" />
                </form>
            </section>
        </div>
    );
}

export default CMSTable;
