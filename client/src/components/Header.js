import "../css/Header.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    axios.defaults.withCredentials = true;

    useEffect(() => {
        const checkCurrentUser = async () => {
            try {
                const result = await axios.get(
                    "http://localhost:8000/api/user/login/current"
                );
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
                <h1>لوگو.</h1>
                <i className="bx bx-menu" onClick={toggleMenu}></i>
            </div>
            <ul className={isMenuOpen ? "active" : ""}>
                <li>
                    <Link to={"/"}>خانه</Link>
                </li>
                {isLoggedIn ? (
                    <>
                        <li>
                            <Link to={"/tables"}>میز ها</Link>
                        </li>
                        <li>
                            <Link to={"/tournament"}>مسابقات</Link>
                        </li>
                        <li>
                            <Link to={"/news"}>اخبار</Link>
                        </li>
                        <li>
                            <Link to={"/shop"}>بوفه</Link>
                        </li>
                        <li>
                            <Link to={"/cms/admin"}>مدیریت</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to={"/tournament"}>مسابقات</Link>
                        </li>
                        <li>
                            <Link to={"/news"}>اخبار</Link>
                        </li>
                        <li>
                            <Link to={"/shop"}>بوفه</Link>
                        </li>
                        <li>
                            <Link to={"/login"}>ورود</Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    );
}

export default Header;
