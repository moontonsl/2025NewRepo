import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const navLinks = [
    { name: 'Events', path: '/events' },
    { name: 'News', path: '/news' },
    { name: 'Program', path: '/program' },
    { name: 'Resources', path: '/resources' },
];

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>

                <div className={styles.logo}>
                    <img src="/msl-logo.png" alt="MSL Logo"/>
                </div>

                <nav>
                    <ul>
                        {navLinks.map(({ name, path }) => (
                            <li key={name}>
                                <Link to={path}>{name}</Link>
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
        </div>
    );
};

export default Header;
