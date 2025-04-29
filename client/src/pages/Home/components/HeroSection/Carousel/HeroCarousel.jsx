// components/HeroCarousel.tsx
import styles from "../HeroSection.module.scss";

const HeroCarousel = () => {
    return (
        <div className={styles.heroCarousel}>
            <img
                src="https://preview.redd.it/neo-beast-and-beyond-the-clouds-artwork-cr-abyssal-min-v0-eracdde1fqfb1.jpg?width=1080&crop=smart&auto=webp&s=8dd0a4ee5a6664deb1b96fd642757f3355a07ad3"
                alt=""
            />
        </div>
    );
};

export default HeroCarousel;
