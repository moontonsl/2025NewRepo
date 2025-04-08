import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={`${styles.footer} flex justify-center h-40`}>
            <p className="text-6xl font-bold">Footer</p>
        </footer>
    );
};

export default Footer;
