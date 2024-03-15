import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <span className={styles.logo}>LOGO</span>
                <div className={styles.content}>
                    <div className={styles.menuIcon} onClick={toggleMenu}>
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </div>
                    <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                        <div className={styles.divLink}>
                            <Link className={styles.link} onClick={() => setMenuOpen(false)} href="#home">Accueil</Link>
                            <Link className={styles.link} onClick={() => setMenuOpen(false)} href="/">Compétences</Link>
                            <Link className={styles.link} onClick={() => setMenuOpen(false)} href="/">Projets</Link>
                            <Link className={styles.link} onClick={() => setMenuOpen(false)} href="/">Contacte</Link>
                        </div>
                        <div>
                            <Link href="https://www.linkedin.com/in/ifanl-ibrahim"><LinkedInIcon sx={{ fontSize: { sm: 24, md: 32, lg: 40 }, '&:hover': {color: '#6c63ff'}  }} /></Link>
                            <Link href="mailto:ifanl.ibrahim@gmail.com"><EmailIcon sx={{ fontSize: { sm: 24, md: 32, lg: 40 }, '&:hover': {color: '#6c63ff'}  }} /></Link>
                            <Link href="https://github.com/ifanl-ibrahim"><GitHubIcon sx={{fontSize: { sm: 24, md: 32, lg: 40 }, '&:hover': {color: '#6c63ff'}}}/></Link>
                        </div>
                    </div>
                    <select className={styles.languageSelect}>
                        <option>FR</option>
                        <option>EN</option>
                    </select>
                </div>
            </div>
        </nav>
    );
}