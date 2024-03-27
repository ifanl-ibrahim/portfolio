import * as React from 'react';
import Link from 'next/link';
// import styles from '../styles/footer.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {

    return (
        <div >
            <div >
                <Link  href="/">
                    <img
                        src={"../assets/logo-black.png"}
                        alt="image d'accueil"
                    />
                </Link>
                <Link href="/">
                    <img
                        src={"../assets/logo-white.png"}
                        alt="image d'accueil"
                    />
                </Link>
                <div >
                    <Link target='_blank' href="https://www.linkedin.com/in/ifanl-ibrahim"><LinkedInIcon  /></Link>
                    <Link target='_blank' href="mailto:ifanl.ibrahim@gmail.com"><EmailIcon  /></Link>
                    <Link target='_blank' href="https://github.com/ifanl-ibrahim"><GitHubIcon  /></Link>
                </div>
            </div>
            <p >Copyright © Ifanl IBRAHIM All Rights Reserved</p>
        </div>
    );
}
