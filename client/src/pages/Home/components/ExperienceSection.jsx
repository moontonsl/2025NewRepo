import styles from "./ExperienceSection.module.scss"

const ExperienceSection = () => {
    return (
        <div className={`${styles.experienceSection} py-16 mt-16`}>

            <div className={`grid gap-4 mb-10 container mx-auto px-4`}>
                <h2 className={`text-6xl text-center font-bold`}>LEAD TO EXPERINCE!</h2>
                <p className={`mx-auto`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et
                    dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan
                    lacus vel facilisis. </p>
            </div>

            <div className={`${styles.experienceCardWrapper} gap-4 px-4`}>
                <div className={`${styles.experienceCard}`}></div>
                <div className={`${styles.experienceCard}`}></div>
                <div className={`${styles.experienceCard}`}></div>
                <div className={`${styles.experienceCard}`}></div>
                <div className={`${styles.experienceCard}`}></div>
            </div>

        </div>
    )
}

export default ExperienceSection;