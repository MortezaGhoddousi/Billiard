import "../../css/SideBar.css";
import { useState, useEffect } from "react";

function SideBar(props) {
    const [visibleDropdown, setVisibleDropdown] = useState(null);

    function handleClick(e) {
        props.getLi(e.target.id);
    }

    const handleDropdownClick = (item) => {
        // اگر همان آیتم کلیک شده بود، بسته شود
        setVisibleDropdown((prevState) => (prevState === item ? null : item));
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                !e.target.closest("#shops") &&
                !e.target.closest("#tournament") &&
                !e.target.closest("#table") &&
                !e.target.closest("#logs") &&
                !e.target.closest("#news")
            ) {
                setVisibleDropdown(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <aside className="sideBar">
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
                            <li id="updateTournament" onClick={handleClick}>
                                تغییر اطلاعات مسابقه
                            </li>
                            <li id="deleteTournament" onClick={handleClick}>
                                حذف مسابقه
                            </li>
                        </ul>
                    )}
                </li>
                <li id="table" onClick={() => handleDropdownClick("table")}>
                    میزها
                    {visibleDropdown === "table" && (
                        <ul className="dropdown">
                            <li id="addTable" onClick={handleClick}>
                                اضافه کردن میز جدید
                            </li>
                            <li id="tablePrice" onClick={handleClick}>
                                تغییر تعرفه میز
                            </li>
                            <li id="deleteTable" onClick={handleClick}>
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
                <li id="news" onClick={() => handleDropdownClick("news")}>
                    اخبار
                    {visibleDropdown === "news" && (
                        <ul className="dropdown">
                            <li id="addNews" onClick={handleClick}>
                                اضافه کردن اخبار
                            </li>
                            <li id="UpdateNews" onClick={handleClick}>
                                تغییر دادن اخبار
                            </li>
                            <li id="deleteNews" onClick={handleClick}>
                                پاک کردن اخبار
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;
