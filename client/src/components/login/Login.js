import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import "../../css/Login.css";
import axios from "axios";

function Login() {
    axios.defaults.withCredentials = true;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم
        axios
            .post("https://billiard-server-puce.vercel.app/api/user/login", {
                username,
                password,
            })
            .then((result) => {
                if (result.statusText) {
                    navigate("/cms/admin");
                } else {
                    setError("ورود ناموفق بود.");
                }
            })
            .catch((e) => setError("مشکلی در سرور رخ داده است."));
    };

    return (
        <>
            <Header navActive={{ login: true }} />
            <div className="login-container">
                <section className="login">
                    <div className="image-container">
                        <img src="./images/login.jpg" alt="login" />
                    </div>
                    <form onSubmit={handleLogin}>
                        {" "}
                        {/* فرم ارسال به تابع handleLogin */}
                        <h1>ورود به حساب کاربری</h1>
                        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
                        {/* نمایش خطا */}
                        <label>
                            <input
                                type="text"
                                placeholder="نام کاربری"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} // مدیریت وضعیت نام کاربری
                            />
                        </label>
                        <label>
                            <input
                                type="password"
                                placeholder="رمز عبور"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // مدیریت وضعیت رمز عبور
                            />
                        </label>
                        <input type="submit" value="ورود" />
                    </form>
                </section>
            </div>
        </>
    );
}

export default Login;
