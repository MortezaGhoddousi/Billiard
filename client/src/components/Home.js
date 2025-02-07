import "../App.css";
import Carousel from "./Carousel";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Intro from "./Intro";
import People from "./Peaple";

function Home() {
    const navigate = useNavigate();

    const people = 10;

    useEffect(() => {
        navigate("/");
    }, [navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header navActive={{ home: true }} />
            <Intro peaple={people} />
            <Carousel />
            <People />
            <Footer />
        </>
    );
}

export default Home;
