import styles from "./NetworkSection.module.scss"

const logos = [
    "https://teamsecret.gg/cdn/shop/files/logo_header_mobile.png?v=1614731632",
    "https://ggscore.com/media/logo/t23125.png",
    "https://ggscore.com/media/logo/t89541.png?967",
    "https://preview.redd.it/shukeojrpscz.png?width=640&crop=smart&auto=webp&s=8e285654958b5d0bf4d758be5b2f5ffb9e2d7639",
    "https://freepnglogo.com/images/all_img/1706465524the-north-face-logo-png-white.png",
];

const NetworkSection = () => {
    return (
        <div className={`py-24 md:py-40 grid gap-10 md:gap-20 ${styles.networkSection}`}>
            <h2 className="text-4xl text-center font-bold">MSL NETWORK ORGANIZATIONS</h2>

            <div
                className={`gap-4 md:gap-8 container mx-auto flex justify-center flex-wrap ${styles.networkLogosWrapper}`}
            >
                {logos.map((src, index) => (
                    <div key={index} className={styles.networkLogos}>
                        <img src={src} alt={`Logo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NetworkSection;
