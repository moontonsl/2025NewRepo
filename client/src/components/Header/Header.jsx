import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'lucide-react';
import styles from './Header.module.scss';

const navLinks = [
    {name: 'Events', path: '/events'},
    {name: 'News', path: '/news'},
    {name: 'Program', path: '/program'},
    {name: 'Resources', path: '/resources'},
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.menuButtons}>
                    <button
                        className={styles.menuButton}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <Menu size={24}/>
                    </button>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src="/msl-logo.png" alt="MSL Logo"/>
                        </Link>
                    </div>
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                    <ul>
                        {navLinks.map(({name, path}) => (
                            <li key={name}>
                                <Link to={path} onClick={() => setIsMenuOpen(false)}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.headerAuth}>
                    <img
                        src="https://tiermaker.com/images/chart/chart/mobile-legends-bang-bang-characters-2021-978637/17fannypng.png"
                        alt="User avatar"
                    />
                </div>



            </div>
        </header>
    );
};

export default Header;
