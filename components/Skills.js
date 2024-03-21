import * as React from 'react';
import { useState } from 'react';
import styles from '../styles/skills.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faPhp, faGithub, faWordpress, faJs, faReact, faSymfony, faPython, faDev } from '@fortawesome/free-brands-svg-icons';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import StorageIcon from '@mui/icons-material/Storage';

export default function Skills() {
    const slides = [
        { id: 0, title: 'HTML', icon: <FontAwesomeIcon className={styles.items} icon={faHtml5} /> },
        { id: 1, title: 'CSS', icon: <FontAwesomeIcon className={styles.items} icon={faCss3} /> },
        { id: 2, title: 'PHP', icon: <FontAwesomeIcon className={styles.items} icon={faPhp} /> },
        { id: 3, title: 'GitHub', icon: <FontAwesomeIcon className={styles.items} icon={faGithub} /> },
        { id: 4, title: 'SQL', icon: <JoinFullIcon className={styles.items} /> },
        { id: 5, title: 'MySQL', icon: <StorageIcon className={styles.items} /> },
        { id: 6, title: 'Wordpress', icon: <FontAwesomeIcon className={styles.items} icon={faWordpress} /> },
        { id: 7, title: 'JavaScript', icon: <FontAwesomeIcon className={styles.items} icon={faJs} /> },
        { id: 9, title: 'React.Js', icon: <FontAwesomeIcon className={styles.items} icon={faReact} /> },
        { id: 9, title: 'React Native', icon: <FontAwesomeIcon className={styles.items} icon={faReact} /> },
        { id: 10, title: 'Next.js', icon: <FontAwesomeIcon className={styles.items} icon={faReact} /> },
        { id: 11, title: 'Symfony', icon: <FontAwesomeIcon className={styles.items} icon={faSymfony} /> },
        { id: 12, title: 'Strapi', icon: <StorageIcon className={styles.items} /> },
        { id: 13, title: 'Python', icon: <FontAwesomeIcon className={styles.items} icon={faPython} /> },
        { id: 14, title: 'HTML', icon: <FontAwesomeIcon className={styles.items} icon={faHtml5} /> }
    ];
    return (
        <div className={styles.skills}>
            <h1>Compétences</h1>
            <section className={styles.slider}>
                <div className={styles.skillsList}>
                    {slides.map((slide) => (
                        <article key={slide.id} className={styles.skillsItems}>
                            {slide.icon}
                            <figcaption>{slide.title}</figcaption>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}