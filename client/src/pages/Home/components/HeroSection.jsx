import styles from "./HeroSection.module.scss"

const HeroSection = () => {
    return (
        <>
            <div className={styles.heroSection}>
                <div className={styles.heroWrapper}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroCarosel}>
                            <img
                                src="https://preview.redd.it/neo-beast-and-beyond-the-clouds-artwork-cr-abyssal-min-v0-eracdde1fqfb1.jpg?width=1080&crop=smart&auto=webp&s=8dd0a4ee5a6664deb1b96fd642757f3355a07ad3"
                                alt=""/>
                        </div>
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
        </>
    )
}


export default HeroSection;