import { useMedia } from "use-media";
import { useEffect, useState } from "react";

const images = [
    '/images/home-page-slider/1.png',
    '/images/home-page-slider/2.webp',
    '/images/home-page-slider/3.webp',
    '/images/home-page-slider/4.webp',
    '/images/home-page-slider/5.webp',
];

const ImageSlider = ({ interval } : {interval: number}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(slideInterval);
    }, [interval]);

    return (
        <div className="slider-container">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Slide ${index}`}
                    className={`home-page-slide-image ${index === currentIndex ? "active" : ""}`}
                />
            ))}
            <div className="dots-container-div">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

const DesktopTemplate = () => {
    return (
        <div className="home-page-slider-div-desktop">
            <ImageSlider interval={3500} />
        </div>
    );
};

const MobileTemplate = () => {
    return <></>;
};

export default function HomePageSlider() {
    const isMobile = useMedia({ maxWidth: 1170 });

    return isMobile ? <MobileTemplate /> : <DesktopTemplate />;
}
