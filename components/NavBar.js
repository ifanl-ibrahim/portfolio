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
        <nav >
            <div >
                <Link  href="/">
                    <img
                        src={"../assets/logo-black.png"}
                        alt="image d'accueil"
                    />
                </Link>
                <Link  href="/">
                    <img
                        src={"../assets/logo-white.png"}
                        alt="image d'accueil"
                    />
                </Link>
                <div >
                    <div  onClick={toggleMenu}>
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </div>
                    <div >
                        <div>
                            <Link onClick={() => setMenuOpen(false)} href="#home">{ t('header.home') }</Link>
                            <Link onClick={() => setMenuOpen(false)} href="/#skills">{ t('header.skills') }</Link>
                            <Link onClick={() => setMenuOpen(false)} href="/#projects">{ t('header.projects') }</Link>
                            <Link onClick={() => setMenuOpen(false)} href="/#contact">{ t('header.contact') }</Link>
                        </div>
                        <div>
                            <Link target='_blank' href="https://www.linkedin.com/in/ifanl-ibrahim"><LinkedInIcon  /></Link>
                            <Link target='_blank' href="mailto:ifanl.ibrahim@gmail.com"><EmailIcon  /></Link>
                            <Link target='_blank' href="https://github.com/ifanl-ibrahim"><GitHubIcon  /></Link>
                        </div>
                    </div>
                    <select defaultValue='fr' onChange={handleLangChange}>
                        <option value='fr'>FR</option>
                        <option value='en'>EN</option>
                    </select>
                </div>
            </div>
        </nav>
    );
}
