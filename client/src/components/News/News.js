import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // استفاده از مسیرها
import Header from "../Header";
import Content from "./Content";
import NewsDetails from "./NewsDetails"; // صفحه جزئیات خبر
import Footer from "../Footer";
import "../../css/Newspage/news.css";

function News() {
    useEffect(() => {
        window.scrollTo(0, 0); // تنظیم اسکرول صفحه به بالا هنگام بارگذاری
    }, []);

    return (
        <div className="news-container">
            <Header />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/" element={<News />} />
                <Route path="/news/:id" element={<NewsDetails />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default News;
