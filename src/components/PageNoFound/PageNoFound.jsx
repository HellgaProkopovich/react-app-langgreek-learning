import picMinotaur from '../../assets/minotaur2.png';
import styles from '../PageNoFound/pageNoFound.module.css';

const PageNoFound = () => {
    return (
        <div className={styles.pageNoFoundContainer}>
            <div>
                <p className={styles.textNoFound}>Trapped</p>
                <p className={styles.textNoFound}>in the Minotaur’s Labyrinth</p>
                <p className={styles.textNoFound}>– no way out, no page found. </p>
                <p className={styles.text404}>404.</p>
            </div>
            <img src={picMinotaur} className={styles.picMinotaur} alt="picMinotaur" />
        </div>
    )
};

export default PageNoFound;