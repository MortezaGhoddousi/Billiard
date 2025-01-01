import "../../css/Newspage/news.css"
import Content from "./Content";
import Card from "./Card";
import HeaderNews from "./HeaderNews";
import { useEffect } from 'react';
import Footer from "./FooterNews"

function News() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        
        <div className="news-conteiner">
            < HeaderNews/>
            <Content/>
            
            <Footer/>

        </div>
        
     );
}

export default News;