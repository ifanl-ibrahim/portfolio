import * as React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <span className={styles.logo}>LOGO</span>
                <div className={styles.footerLink}>
                    <Link href="https://www.linkedin.com/in/ifanl-ibrahim"><LinkedInIcon sx={{ fontSize: { sm: 24, md: 32, lg: 40 }, '&:hover': { color: '#6c63ff' } }} /></Link>
                    <Link href="mailto:ifanl.ibrahim@gmail.com"><EmailIcon sx={{ fontSize: { sm: 24, md: 32, lg: 40 }, '&:hover': { color: '#6c63ff' } }} /></Link>
                    <Link href="https://github.com/ifanl-ibrahim"><GitHubIcon sx={{ fontSize: { sm: 24, md: 32, lg: 40 }, '&:hover': { color: '#6c63ff' } }} /></Link>
                </div>
            </div>
            <p className={styles.copytight}>Copyright © Ifanl IBRAHIM All Rights Reserved</p>
        </div>
    );
}