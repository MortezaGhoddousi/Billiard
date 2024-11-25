import '../css/Carousel.css';
function Carousel() {

    return ( 
        <section id="home">
            <div class="carousel slide" id="myslider" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myslider" data-slide-to="0"></li>
                    <li data-target="#myslider" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="item ">
                        <img src="./images/1.jpg" alt="" />
                    </div>
                    <div class="item active">
                        <img src="./images/2.jpg" alt="" />
                    </div>
                </div>
                <a href="#myslider" class="left carousel-control" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a
                    href="#myslider"
                    class="right carousel-control"
                    data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>
        </section>
     );
}

export default Carousel;