import styles from "./HeroSection.module.scss"

const HeroSection = () => {
    return (
        <>
            <div className={styles.heroSection}>
                   <div className={styles.heroWrapper}>
                       <div className={styles.heroGrid}>
                           <div className={styles.heroCarosel}>
                               <img src="https://en.moonton.com/upload/image/20250225/b8ee96141a725827df2096076d00ce4b.png" alt=""/>
                           </div>
                           <div className={styles.bentoBox}>
                               <div className={styles.box}></div>
                               <div className={styles.box}></div>
                               <div className={styles.box}></div>
                           </div>
                       </div>
                   </div>
            </div>
        </>
    )
}


export default HeroSection;