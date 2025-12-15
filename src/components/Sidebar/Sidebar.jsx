import { Link, NavLink } from 'react-router';

import logo from '../../assets/greek.svg';
import iconWords from '../../assets/list.svg';
import iconPractice from '../../assets/exercise-horse.svg';
import styles from './sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <Link to="/" className={styles.logo}>               
                <img src={logo} className={styles.logopic} alt="logo" />
                <p>μιλάω ελληνικά</p>
            </Link>
            <NavLink to="/words" className={styles.link}>
                <img src={iconWords} className={styles.icon} alt="icon words" />
                <p>words</p>
            </NavLink>
            <NavLink to="/practice" className={styles.link}>
                <img src={iconPractice} className={styles.icon} alt="icon practice" />
                <p>practice</p>
            </NavLink>
        </nav>
    )
};

export default Sidebar;
