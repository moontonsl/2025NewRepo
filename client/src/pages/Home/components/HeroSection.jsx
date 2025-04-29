import useEmblaCarousel from 'embla-carousel-react';
import {useEffect, useRef, useState} from 'react';
import styles from './HeroSection.module.scss';

const images = [
    'https://preview.redd.it/neo-beast-and-beyond-the-clouds-artwork-cr-abyssal-min-v0-eracdde1fqfb1.jpg?width=1080&crop=smart&auto=webp&s=8dd0a4ee5a6664deb1b96fd642757f3355a07ad3',
    'https://akm-img-a-in.tosshub.com/sites/itgaming/resources/202410/untitled-design031024043705.png',
    'https://akm-img-a-in.tosshub.com/sites/itgaming/resources/202410/untitled-design081024011436.png'
];

const HeroSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const autoplayInterval = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Autoplay logic
    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = () => {
            autoplayInterval.current = setInterval(() => {
                if (!isHovered) emblaApi.scrollNext();
            }, 3000);
        };

        autoplay();

        return () => {
            if (autoplayInterval.current) clearInterval(autoplayInterval.current);
        };
    }, [emblaApi, isHovered]);

    // Handlers for mouse hover
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className={styles.heroSection}>
            <div className={styles.heroWrapper}>
                <div className={styles.heroGrid}>

                    {/* Carousel ni */}
                    <div
                        className={styles.heroCarosel}
                        ref={emblaRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className={styles.emblaContainer}>
                            {images.map((src, index) => (
                                <div className={styles.emblaSlide} key={index}>
                                    <img src={src} alt={`carousel ${index}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side sa carosel */}
                    <div className={styles.bentoBox}>
                        <div className={`${styles.box} p-4 lg:p-8 flex items-end uppercase text-5xl font-bold italic`}>
                            Network
                        </div>
                        <div className={`${styles.box} p-4 lg:p-8 flex items-end uppercase text-5xl font-bold italic`}>
                            Buffs & <br className="hidden xl:block" />
                            Supports
                        </div>
                        <div className={`${styles.box} p-4 lg:p-8 flex items-end uppercase text-5xl font-bold italic`}>
                            STUDENT LEADER
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
