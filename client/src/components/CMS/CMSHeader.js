import React from "react";
import axios from "axios";

function CMSHeader() {
    axios.defaults.withCredentials = true;

    const handleLogout = () => {
        // ارسال درخواست DELETE به سرور برای خروج اکانت
        axios
            .delete("http://localhost:8000/api/user/login/current")
            .then((response) => {
                console.log(response);
                window.location.href = "/login"; // ریدایرکت به صفحه ورود یا صفحه دلخواه
            })
            .catch((error) => {
                console.error("خطا در حذف کاربر:", error);
                alert("خطا در حذف حساب کاربری");
            });
    };

    return (
        <section className="header1">
            <div>
                <h2>به صفحه ادمین خوش آمدید.</h2>
            </div>
            <button onClick={handleLogout}>خروج</button>
        </section>
    );
}

export default CMSHeader;
