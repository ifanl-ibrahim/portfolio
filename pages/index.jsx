import * as React from 'react';
import styles from '../styles/index.module.css'
import DownloadIcon from '@mui/icons-material/Download';

export default function Home() {

    return (
        <div id="home" className={styles.main}>
            <div className={styles.homeContent}>
                <div className={styles.textBox}>
                    <h1>Ifanl IBRAHIM</h1>
                    <h2>Développeur web</h2>
                    <div className={styles.text}>
                        <p>Passionné par les métiers du numérique je met à profit mes compétences techniques, ma créativité et ma capacité d'adaptation à votre service. Mon expérience combinée à ma passion pour les nouvelles technologies, font de moi un candidat idée pour donée vie à vos projets et votre image numérique.</p>
                        <br /> <p>Vous pouvez d'ores et déjà</p> <br />
                        <a href="../assets/CV-IBRAHIM.pdf" download="CV-IBRAHIM.pdf" target="blank">
                            <DownloadIcon />Télécharger mon CV!
                        </a>
                    </div>
                </div>
                <img
                    className={styles.img}
                    class="fit-picture"
                    src="../assets/undraw_taken_re_yn20.svg"
                    alt="image d'accueil"
                />
            </div>
        </div >
    );
}