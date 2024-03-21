import * as React from 'react';
import Link from 'next/link';
import styles from '../styles/footer.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <span className={styles.logo}>LOGO</span>
                <div className={styles.footerLink}>
                    <Link href="https://www.linkedin.com/in/ifanl-ibrahim"><LinkedInIcon className={styles.social} /></Link>
                    <Link href="mailto:ifanl.ibrahim@gmail.com"><EmailIcon className={styles.social} /></Link>
                    <Link href="https://github.com/ifanl-ibrahim"><GitHubIcon className={styles.social} /></Link>
                </div>
            </div>
            <p className={styles.copytight}>Copyright © Ifanl IBRAHIM All Rights Reserved</p>
        </div>
    );
}