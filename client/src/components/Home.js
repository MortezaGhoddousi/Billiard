import "../css/Hiome.css"
import Carousel from './Carousel';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return ( 
        <>
            <Header />
            <Carousel/>
            <Footer />
        </>
     );
}

export default Home;