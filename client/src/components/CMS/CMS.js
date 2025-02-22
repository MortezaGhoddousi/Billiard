import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import RemoveProduct from "./RemoveProduct";
import SideBar from "./SideBar";
import CMSHeader from "./CMSHeader";
import Header from "../Header";
import CMSTables from "./CMSTables";
import Update from "./news/Updatenews";
import Deletet from "./tournoment/delete";
import Delete from "./news/deleteNews";
import EditTournoment from "./tournoment/EditTournoment";
import NewsCMS from "./news/NewsCMS";
import "../../css/CMS.css";
import TournamentCMS from "./tournoment/tournamentCMS";
import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../API";

function CMS() {
    const [com, setCom] = useState(null);

    useEffect(() => {
        axios
            .get(`${api}/api/user/login/current`)
            .then((result) => {
                if (result.data === "Unauthorized User!") {
                    window.location.href = "/login";
                }
            })
            .catch((err) => console.log(err));
    }, []);

    function getLi(id) {
        if (id === "addShop") {
            setCom(<AddProduct />);
        } else if (id === "updateShop") {
            setCom(<UpdateProduct />);
        } else if (id === "deleteShop") {
            setCom(<RemoveProduct />);
        } else if (id === "tournament") {
            setCom(<TournamentCMS />);
        } else if (id === "deleteTournament") {
            setCom(<Deletet />);
        } else if (id === "updateTournament") {
            setCom(<EditTournoment />);
        } else if (id === "tablePrice") {
            setCom(<CMSTables />);
        } else if (id === "addNews") {
            setCom(<NewsCMS />);
        } else if (id === "UpdateNews") {
            setCom(<Update />);
        } else if (id === "deleteNews") {
            setCom(<Delete />);
        }
    }

    return (
        <>
            <Header navActive={{ cms: true }} />
            <div className="main">
                <article className="cms-container">
                    <CMSHeader />
                    {com}
                </article>
                <SideBar getLi={getLi} />
            </div>
        </>
    );
}

export default CMS;
