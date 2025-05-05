import { useNavigate } from "react-router-dom";
import styles from "./HeroSection.module.scss";
import HeroCarousel from "./HeroCarousel.jsx";

import minImg from "@/pages/Home/assets/hero/minsi.png";
import laylaImg from "@/pages/Home/assets/hero/layla.png";
import badingImg from "@/pages/Home/assets/hero/bada.png";
import blur from "@/pages/Home/assets/hero/blur.svg";

const HeroSection = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <div className={styles.heroSection}>
            <div className={styles.heroWrapper}>
                <div className={`${styles.heroGrid} overflow-hidden`}>
                    <HeroCarousel />

                    <div className={styles.bentoBox}>
                        {/* Box 1 - Network */}
                        <div
                            onClick={() => handleClick("/network")}
                            className={`${styles.box} group relative flex items-end overflow-hidden cursor-pointer`}
                        >
                            <div className="absolute p-4 lg:p-8 uppercase text-5xl font-bold italic z-10 text-white">
                                Network
                            </div>
                            <div className="h-full w-full relative z-0">
                                <img
                                    src={minImg}
                                    alt=""
                                    className="h-[500px] w-full object-cover absolute object-left transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>

                        {/* Box 2 - Buff & Supports */}
                        <div
                            onClick={() => handleClick("/buff-&-support")}
                            className={`${styles.box} group relative flex items-end overflow-hidden cursor-pointer`}
                        >
                            <div className="absolute p-4 lg:p-8 uppercase text-5xl font-bold italic z-10 text-white">
                                Buffs <br className="hidden xl:block" /> & Supports
                            </div>
                            <div className="h-full w-full relative z-0">
                                <img
                                    src={laylaImg}
                                    alt=""
                                    className="h-[500px] w-full object-cover absolute object-left transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>

                        {/* Box 3 - Student Leader */}
                        <div
                            onClick={() => handleClick("/student-leader")}
                            className={`${styles.box} group relative flex items-end overflow-hidden cursor-pointer`}
                        >
                            <div className="absolute p-4 lg:p-8 uppercase text-5xl font-bold italic z-10 text-white">
                                STUDENT LEADER
                            </div>
                            <div className="h-full w-full relative z-0">
                                <img
                                    src={badingImg}
                                    alt=""
                                    className="h-[500px] w-full object-cover absolute transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
