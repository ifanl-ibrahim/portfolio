import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
// import styles from '../styles/navBar.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function NavBar() {
    const { t, i18n } = useTranslation('fr', { useSuspense: false });
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    function handleLangChange(event) {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link className={styles.logoLight} href="/">
                    <img
                        src={"../assets/logo-black.png"}
                        alt="image d'accueil"
                    />
                </Link>
                <Link className={styles.logoDark} href="/">
                    <img
                        src={"../assets/logo-white.png"}
                        alt="image d'accueil"
                    />
                </Link>
                <div className={styles.content}>
                    <div className={styles.menuIcon} onClick={toggleMenu}>
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </div>
                    <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                        <div className={styles.divLink}>
                            <Link className={styles.link} onClick={() => setMenuOpen(false)} href="#home">{ t('header.home') }</Link>
                            <Link className={styles.link} onClick={() => setMenuOpen(false)} href="/#skills">{ t('header.skills') }</Link>
                            <Link className={styles.link} onClick={() => setMenuOpen(false)} href="/#projects">{ t('header.projects') }</Link>
                            <Link className={styles.link} onClick={() => setMenuOpen(false)} href="/#contact">{ t('header.contact') }</Link>
                        </div>
                        <div>
                            <Link target='_blank' href="https://www.linkedin.com/in/ifanl-ibrahim"><LinkedInIcon className={styles.social} /></Link>
                            <Link target='_blank' href="mailto:ifanl.ibrahim@gmail.com"><EmailIcon className={styles.social} /></Link>
                            <Link target='_blank' href="https://github.com/ifanl-ibrahim"><GitHubIcon className={styles.social} /></Link>
                        </div>
                    </div>
                    <select className={styles.languageSelect} defaultValue='fr' onChange={handleLangChange}>
                        <option value='fr'>FR</option>
                        <option value='en'>EN</option>
                    </select>
                </div>
            </div>
        </nav>
    );
}
