import styles from './footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <img src="/logo.png" alt="" />
            <div>
                <h4>Important Links</h4>
                <div className={styles.linksContainer}>
                    <Link className={styles.link} to={'/'}>Homepage</Link>
                    <Link className={styles.link} to={'/plates'}>Plates</Link>
                    <Link className={styles.link} to={'/profile'}>Profile</Link>
                </div>
            </div>
            <div className={styles.credits}>
                Developed by <a target='_blank' href='https://github.com/eumatheusvieira'>Matheus Vieira</a>
            </div>
        </footer>
    )
}