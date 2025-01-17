import "../css/Carousel.css";
function Carousel() {
    return (
        <section id="home">
            <div className="carousel slide" id="myslider" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myslider" data-slide-to="0"></li>
                    <li data-target="#myslider" data-slide-to="1"></li>
                    <li data-target="#myslider" data-slide-to="2"></li>
                    <li data-target="#myslider" data-slide-to="3"></li>
                    <li data-target="#myslider" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="./images/1.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="./images/2.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="./images/6.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="./images/7.jpg" alt="" />
                    </div>
                    <div className="item">
                        <img src="./images/8.jpg" alt="" />
                    </div>
                </div>
                <a
                    href="#myslider"
                    className="left carousel-control"
                    data-slide="prev"
                >
                    <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a
                    href="#myslider"
                    className="right carousel-control"
                    data-slide="next"
                >
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>
        </section>
    );
}

export default Carousel;
