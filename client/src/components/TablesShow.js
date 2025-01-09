import Tables from './Tables';
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
            <Tables />
            <Footer />
        </>
     );
}

export default Home;