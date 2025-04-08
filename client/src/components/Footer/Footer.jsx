import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={`${styles.footer} flex justify-center h-40`}>
            <p className="text-6xl font-bold">Footer</p>
        </div>
    );
};

export default Footer;
