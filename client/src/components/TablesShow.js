import Tables from "./Tables";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useEffect } from "react";
import { api } from "../API";

function TableShow() {
    axios.defaults.withCredentials = true;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        axios
            .get(`${api}/api/user/login/current`)
            .then((result) => {
                if (result.data === "Unauthorized User!") {
                    window.location.href = "/";
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="tableContainer">
            <Header navActive={{ tables: true }} />
            <Tables />
            <Footer />
        </div>
    );
}

export default TableShow;
