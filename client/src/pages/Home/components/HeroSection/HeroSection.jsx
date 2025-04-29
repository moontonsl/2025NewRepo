import styles from "./HeroSection.module.scss"
import HeroCarousel from "./Carousel/HeroCarousel.jsx";
import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel.jsx";

const HeroSection = () => {
    const OPTIONS = {loop: true}
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <div className={styles.heroSection}>
            <div className={styles.heroWrapper}>
                <div className={styles.heroGrid}>

                    {/* hero carousel */}
                    {/*<HeroCarousel />*/}

                    <EmblaCarousel slides={SLIDES} options={OPTIONS}/>

                    {/* box sa right 3*/}
                    <div className={`${styles.bentoBox}`}>
                        <div
                            className={`${styles.box} p-4 lg:p-8 flex items-end uppercase text-5xl font-bold italic`}>
                            Network
                        </div>
                        <div
                            className={`${styles.box} p-4 lg:p-8 flex items-end uppercase text-5xl font-bold italic`}>Buffs
                            & <br className="hidden xl:block"/>
                            Supports
                        </div>
                        <div
                            className={`${styles.box} p-4 lg:p-8 flex items-end uppercase text-5xl font-bold italic`}>STUDENT
                            LEADER
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeroSection;