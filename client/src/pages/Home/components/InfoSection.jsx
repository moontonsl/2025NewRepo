import styles from "./InfoSection.module.scss";
import infoImage from "../assets/info.jpg";

const stats = [
    { value: "8,000", label: "STUDENT PLAYERS" },
    { value: "201", label: "STUDENT LEADERS" },
    { value: "74", label: "UNIVERSITY COMMUNITIES" },
    { value: "35", label: "PARTNERED SCHOOL ORGS" },
];

const HeroSection = () => {
    return (
        <div className={`${styles.infoSection} gap-20 grid pb-16 pt-24`}>
            <h1 className="text-6xl font-bold text-center w-full">
                MOONTON STUDENT LEADER PHILIPPINES
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 sm:gap-8 container mx-auto">
                {stats.map(({ value, label }, index) => (
                    <div key={index} className="text-center grid gap-2 sm:gap-4">
                        <div className={`text-6xl font-bold ${styles.infoHead}`}>{value}</div>
                        <div className="text-2xl font-semibold">{label}</div>
                    </div>
                ))}
            </div>

            <div className={`${styles.infoAbout} grid md:grid-cols-2`}>
                <div className={styles.infoImageWrapper}>
                    <img src={infoImage} alt="Moonton Student Leader" className={styles.infoImage} />
                </div>
                <div className="p-4 md:p-8 flex flex-col gap-4">
                    <h2 className="text-5xl font-bold">
                        Here at <br className={`hidden md:block`} />
                        MOONTON STUDENT LEADER <br className={`hidden md:block`} />
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
        </div>
    );
};

export default HeroSection;
