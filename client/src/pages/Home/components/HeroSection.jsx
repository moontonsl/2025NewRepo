import styles from "./HeroSection.module.scss"

const HeroSection = () => {
    return (
        <>
            <div className={styles.heroSection}>
                   <div className={styles.heroWrapper}>
                       <div className={styles.heroGrid}>
                           <div className={styles.heroCarosel}>
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