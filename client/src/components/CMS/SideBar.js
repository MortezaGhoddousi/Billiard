import "../../css/SideBar.css";
import { useState, useEffect } from "react";

function SideBar(props) {
    const [visibleDropdown, setVisibleDropdown] = useState(null);

    function handleClick(e) {
        props.getLi(e.target.id);
    }

    const handleDropdownClick = (item) => {
        setVisibleDropdown((prevState) => (prevState === item ? null : item));
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                !e.target.closest("#shops") &&
                !e.target.closest("#tournament") &&
                !e.target.closest("#table") &&
                !e.target.closest("#logs")
            ) {
                setVisibleDropdown(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    useEffect(() => {
        const lists = document.querySelectorAll("li");
        lists.forEach((element) => {
            element.addEventListener("mouseover", (e) => {
                e.stopPropagation();
                e.target.style.color = "#f7bb26";
            });
            element.addEventListener("mouseout", (e) => {
                e.stopPropagation();
                e.target.style.color = "whitesmoke";
            });
        });
    }, []);

    return (
        <aside>
            <h1>داشبورد</h1>
            <ul>
                <li id="shops" onClick={() => handleDropdownClick("shops")}>
                    بوفه
                    {visibleDropdown === "shops" && (
                        <ul className="dropdown">
                            <li id="addShop" onClick={handleClick}>
                                اضافه کردن محصول جدید
                            </li>
                            <li id="updateShop" onClick={handleClick}>
                                تغییر قیمت
                            </li>
                            <li id="deleteShop" onClick={handleClick}>
                                حذف محصول
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    id="tournament"
                    onClick={() => handleDropdownClick("tournament")}
                >
                    مسابقات
                    {visibleDropdown === "tournament" && (
                        <ul className="dropdown">
                            <li id="tournament" onClick={handleClick}>
                                اضافه کردن مسابقه جدید
                            </li>
                            <li id="" onClick={handleClick}>
                                تغییر اطلاعات مسابقه
                            </li>
                            <li id="" onClick={handleClick}>
                                حذف مسابقه
                            </li>
                        </ul>
                    )}
                </li>
                <li id="table" onClick={() => handleDropdownClick("table")}>
                    میزها
                    {visibleDropdown === "table" && (
                        <ul className="dropdown">
                            <li id="" onClick={handleClick}>
                                اضافه کردن میز جدید
                            </li>
                            <li id="tablePrice" onClick={handleClick}>
                                تغییر تعرفه میز
                            </li>
                            <li id="" onClick={handleClick}>
                                حذف میز
                            </li>
                        </ul>
                    )}
                </li>
                <li id="logs" onClick={() => handleDropdownClick("logs")}>
                    حسابداری
                    {visibleDropdown === "logs" && (
                        <ul className="dropdown">
                            <li onClick={handleClick}>نمایش گزارشات</li>
                            <li onClick={handleClick}>اضافه کردن تراکنش</li>
                            <li onClick={handleClick}>حذف گزارش</li>
                        </ul>
                    )}
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;
