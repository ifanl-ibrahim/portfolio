import * as React from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import styles from '../styles/index.module.css'
import DownloadIcon from '@mui/icons-material/Download';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
    const { t } = useTranslation('fr', { useSuspense: false });

    return (
        <div id="home" className={styles.main}>
            <Head>
                <title>Ifanl IBRAHIM</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>
            <div className={styles.homeContent}>
                <div className={styles.textBox}>
                    <h1>Ifanl IBRAHIM</h1>
                    <h2>{ t('index.h2') }</h2>
                    <div className={styles.text}>
                        <p>{ t('index.description') }</p>
                        <br /> <p>{ t('index.textCV') }</p> <br />
                        <a href="../assets/CV-IBRAHIM.pdf" download="CV-IBRAHIM.pdf" target="blank">
                            <DownloadIcon />{ t('index.button') }
                        </a>
                    </div>
                </div>
                <img
                    className={styles.imgLight}
                    src={"../assets/undraw_taken_vert.svg"}
                    alt="image d'accueil"
                />
                <img
                    className={styles.imgDark}
                    src={"../assets/undraw_taken_mauve.svg"}
                    alt="image d'accueil"
                />
            </div>
            <Skills />
            <Projects />
            <Contact />
        </div >
    );
}