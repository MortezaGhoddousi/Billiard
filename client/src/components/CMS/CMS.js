import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import RemoveProduct from "./RemoveProduct";
import SideBar from "./SideBar";
import CMSHeader from "./CMSHeader";
import CMSTables from "./CMSTables";
import "../../css/CMS.css";
import TournamentCMS from "../CMS/tournamentCMS";
import { useState, useEffect } from "react";
import axios from "axios";

function CMS() {
    const [com, setCom] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/user/login/current")
            .then((result) => {
                console.log(result);
                if (result.data == "Unauthorized User!") {
                    window.location.href = "/login";
                }
            })
            .catch((err) => console.log(err));
    }, []);

    function getLi(id) {
        if (id === "add") {
            setCom(<AddProduct />);
        } else if (id === "update") {
            setCom(<UpdateProduct />);
        } else if (id === "delete") {
            setCom(<RemoveProduct />);
        } else if (id === "tournament") {
            setCom(<TournamentCMS />);
        } else if (id === "price") {
            setCom(<CMSTables />);
        }
    }

    return (
        <div className="main">
            <article>
                <CMSHeader />
                {com}
            </article>
            <SideBar getLi={getLi} />
        </div>
    );
}

export default CMS;
