import "../App.css";
import Carousel from "./Carousel";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/");
    }, [navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <Carousel />
            <Footer />
        </>
    );
}

export default Home;
