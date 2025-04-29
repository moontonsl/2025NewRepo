import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import styles from './HeroSection.module.scss';

const images = [
    'https://preview.redd.it/neo-beast-and-beyond-the-clouds-artwork-cr-abyssal-min-v0-eracdde1fqfb1.jpg?width=1080&crop=smart&auto=webp&s=8dd0a4ee5a6664deb1b96fd642757f3355a07ad3',
    'https://akm-img-a-in.tosshub.com/sites/itgaming/resources/202410/untitled-design031024043705.png',
    'https://akm-img-a-in.tosshub.com/sites/itgaming/resources/202410/untitled-design081024011436.png'
];

const HeroSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    useEffect(() => {
        const autoplay = setInterval(() => {
            if (emblaApi) {
                emblaApi.scrollNext();
            }
        }, 3000); // 3000ms = 3 seconds sus

        return () => clearInterval(autoplay);
    }, [emblaApi]);

    return (
        <div className={styles.heroSection}>
            <div className={styles.heroWrapper}>
                <div className={styles.heroGrid}>

                    {/* Carousel */}
                    <div className={styles.heroCarosel} ref={emblaRef}>
                        <div className={styles.emblaContainer}>
                            {images.map((src, index) => (
                                <div className={styles.emblaSlide} key={index}>
                                    <img src={src} alt={`carousel ${index}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side on desktop */}
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
