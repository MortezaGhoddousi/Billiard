import { useEffect, useState } from "react";
import "../css/Carousel.css";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        "./images/1.jpg",
        "./images/2.jpg",
        "./images/8.jpg",
        "./images/3.jpg",
        "./images/7.jpg",
    ];

    const updateCarousel = (index) => {
        if (index < 0) {
            setCurrentIndex(slides.length - 1);
        } else if (index >= slides.length) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(index);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateCarousel(currentIndex + 1);
        }, 10000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <section id="home">
            <div className="carousel" id="myslider">
                <div
                    className="carousel-inner"
                    style={{
                        transform: `translateX(${currentIndex * 100}%)`,
                        transition: "transform 0.5s ease-in-out",
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            className={`carousel-item ${
                                index === currentIndex ? "active" : ""
                            }`}
                            key={index}
                        >
                            <img src={slide} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <button
                    className="carousel-control left"
                    onClick={() => updateCarousel(currentIndex - 1)}
                >
                    &#10095;
                </button>
                <button
                    className="carousel-control right"
                    onClick={() => updateCarousel(currentIndex + 1)}
                >
                    &#10094;
                </button>

                <div className="carousel-indicators">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={index === currentIndex ? "active" : ""}
                            onClick={() => updateCarousel(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Carousel;
