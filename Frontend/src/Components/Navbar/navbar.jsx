import styles from './navbar.module.css'
import { LuShoppingCart, LuUserRound, LuMenu } from "react-icons/lu";
import { Drawer } from '@mui/material'
import { useState } from 'react';


export default function Navbar () {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }
    
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarItems}>
            <img className={styles.logo} src="/logo.png" alt="" />
                <div className={styles.navbarLinksContainer}>
                    <a href="" className={styles.navbarLink}>HOME</a>
                    <a href="" className={styles.navbarLink}>PLATES</a>
                    <LuShoppingCart className={styles.navbarLink} />
                    <LuUserRound className={styles.navbarLink} />
                </div>
            </div>
            <div className={styles.mobileNavbarItems}>
                <img className={styles.logo} src="/logo.png" alt="" />
                <div className={styles.mobileNavbarBtns}>
                    <LuShoppingCart className={styles.navbarLink} />
                    <LuMenu className={styles.navbarLink} onClick={handleOpenMenu}/>
                </div>
            </div>

            <Drawer
            anchor='right'
            open={openMenu}
            onClose={handleOpenMenu}
            >
                <div className={styles.drawer}>
                    <a href="" className={styles.navbarLink}>HOME</a>
                    <a href="" className={styles.navbarLink}>PLATES</a>
                    <a href="" className={styles.navbarLink}>PROFILE</a>
                </div>
            </Drawer>
        </nav>
    )
}