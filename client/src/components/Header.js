import "../css/Header.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { api } from "../API";

function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    axios.defaults.withCredentials = true;

    useEffect(() => {
        const checkCurrentUser = async () => {
            try {
                const result = await axios.get(`${api}/api/user/login/current`);
                if (result.data !== "Unauthorized User!") {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (err) {
                console.error(err);
                setIsLoggedIn(false);
            }
        };
        checkCurrentUser();
    }, []);

    return (
        <header className="header-news">
            <div>
                <h1>اسنوکر آریامن</h1>
                <i className="bx bx-menu" onClick={toggleMenu}></i>
            </div>
            <ul className={isMenuOpen ? "active" : ""}>
                <li className={props.navActive.home ? "active" : ""}>
                    <Link to={"/"}>خانه</Link>
                </li>

                {isLoggedIn ? (
                    <>
                        <li className={props.navActive.tables ? "active" : ""}>
                            <Link to={"/tables"}>میز ها</Link>
                        </li>
                        <li
                            className={
                                props.navActive.tournament ? "active" : ""
                            }
                        >
                            <Link to={"/tournament"}>مسابقات</Link>
                        </li>
                        <li className={props.navActive.news ? "active" : ""}>
                            <Link to={"/news"}>اخبار</Link>
                        </li>
                        <li className={props.navActive.shop ? "active" : ""}>
                            <Link to={"/shop"}>بوفه</Link>
                        </li>
                        <li className={props.navActive.cms ? "active" : ""}>
                            <Link to={"/cms/admin"}>مدیریت</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li
                            className={
                                props.navActive.tournament ? "active" : ""
                            }
                        >
                            <Link to={"/tournament"}>مسابقات</Link>
                        </li>
                        <li className={props.navActive.news ? "active" : ""}>
                            <Link to={"/news"}>اخبار</Link>
                        </li>
                        <li className={props.navActive.shop ? "active" : ""}>
                            <Link to={"/shop"}>بوفه</Link>
                        </li>
                        <li className={props.navActive.login ? "active" : ""}>
                            <Link to={"/login"}>ورود</Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    );
}

export default Header;
