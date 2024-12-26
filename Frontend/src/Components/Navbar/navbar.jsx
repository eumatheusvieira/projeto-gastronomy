import styles from './navbar.module.css'
import { LuShoppingCart, LuUserRound, LuMenu } from "react-icons/lu";
import { Drawer } from '@mui/material'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar () {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }
    
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarItems}>
                <Link to={'/'}>
                    <img className={styles.logo} src="/logo.png" alt="" />
                </Link>
                <div className={styles.navbarLinksContainer}>
                    <a href="/" className={styles.navbarLink}>HOME</a>
                    <a href="/plates" className={styles.navbarLink}>PLATES</a>
                    <Link to={'/cart'}>
                        <LuShoppingCart className={styles.navbarLink} />
                    </Link>
                    <Link to={'/profile'}>
                        <LuUserRound className={styles.navbarLink} />
                    </Link>
                </div>
            </div>
            <div className={styles.mobileNavbarItems}>
                <Link to={'/'}><img className={styles.logo} src="/logo.png" alt="" /></Link>
                
                <div className={styles.mobileNavbarBtns}>
                    <Link to={'/cart'}><LuShoppingCart className={styles.navbarLink} /></Link>
                    <LuMenu className={styles.navbarLink} onClick={handleOpenMenu}/>
                </div>
            </div>

            <Drawer
            anchor='right'
            open={openMenu}
            onClose={handleOpenMenu}
            >
                <div className={styles.drawer}>
                    <a href="/" className={styles.navbarLink}>HOME</a>
                    <a href="/plates" className={styles.navbarLink}>PLATES</a>
                    <a href="/profile" className={styles.navbarLink}>PROFILE</a>
                </div>
            </Drawer>
        </nav>
    )
}