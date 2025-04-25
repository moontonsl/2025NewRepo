import styles from "./InfoSection.module.scss";
import infoImage from "../assets/info.jpg";

const stats = [
    {value: "8,000", label: "STUDENT PLAYERS"},
    {value: "201", label: "STUDENT LEADERS"},
    {value: "74", label: "UNIVERSITY COMMUNITIES"},
    {value: "35", label: "PARTNERED SCHOOL ORGS"},
];

const HeroSection = () => {
    return (
        <section className={`${styles.infoSection} pt-24`}>

            <div className="container mx-auto px-4 gap-16 grid mb-20">
                <h1 className="text-4xl md:text-6xl font-bold text-center w-full">
                    MOONTON STUDENT LEADER PHILIPPINES
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-6 sm:gap-8">
                    {stats.map(({value, label}, index) => (
                        <div key={index} className="text-center grid gap-2 sm:gap-4">
                            <div className={`text-4xl sm:text-5xl md:text-6xl font-bold ${styles.infoHead}`}>
                                {value}
                            </div>
                            <div className="text-lg sm:text-xl font-semibold">{label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${styles.infoAbout} grid lg:grid-cols-2`}>
                <div className={styles.infoImageWrapper}>
                    <img src={infoImage} alt="Moonton Student Leader" className={styles.infoImage}/>
                </div>
                <div className="p-4 md:p-8 flex flex-col gap-4">
                    <h2 className="text-5xl font-bold">
                        Here at <br className={`hidden md:block`}/>
                        MOONTON STUDENT LEADER <br className={`hidden md:block`}/>
                        PHILIPPINES we <span className="text-brand">CREATE</span>
                    </h2>

                    <p className="text-2xl font-semibold">
                        Moonton Student Leaders (MSL) Philippines is an organization of student-gamers
                        from different colleges and universities all over the country. Under the supervision
                        of Moonton Technologies Philippines, Inc., the program was developed to promote the
                        growth of Mobile Legends: Bang Bang communities in schools while advocating for academic
                        excellence.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
