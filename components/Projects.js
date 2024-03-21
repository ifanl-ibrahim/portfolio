import * as React from 'react';
import { useState } from 'react';
import styles from '../styles/projects.module.css';
import { Card, Typography, CardMedia, CardContent, Modal, Link } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

export default function Projects() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const projects = [
        {
            id: 0,
            title: 'Le Joli Port',
            description: 'Site pour le restaurant "Le joli Port" (mobile)',
            language: 'Next.js',
            cover: '../assets/MAT-20141001-7167.jpg',
            logo: '../assets/logo-joliport-cercle.png',
            link: 'https://joli-port.vercel.app/'
        }
    ];

    return (
        <div className={styles.projects}>
            <h1>Projets</h1>
            <section className={styles.projectsList}>
                {projects.map((project) => (
                    <Card variant="plain" className={styles.card}>
                        <CardMedia
                            className={styles.cardMedia}
                            component="img"
                            height="285"
                            image={project.cover}
                            alt="image du projet"
                        />
                        <CardContent className={styles.cardContent} onClick={handleOpen}>
                            <Typography className={styles.cardText} href="#dribbble-shot">
                                {project.title}
                            </Typography>
                            <Typography className={styles.cardText} href="#dribbble-shot">
                                En savoir plus sur le projet
                            </Typography>
                        </CardContent>
                        <Modal open={open} onClose={handleClose}>
                            <div className={styles.modal}>
                                <h1>{project.title}</h1>
                                <img
                                    className={styles.logo}
                                    src={project.logo}
                                    alt="logo du projet"
                                />
                                <article>
                                    <p>{project.description}</p>
                                    <p>réalisé en {project.language}</p>
                                </article>
                                <section>
                                    <Link className={styles.link} underline='none' onClick={handleClose}><CloseIcon /> Fermer</Link>
                                    <Link href={project.link} target='_blank' className={styles.link} underline='none' onClick={handleClose}>Voir le Projet</Link>
                                </section>
                            </div>

                        </Modal>
                    </Card>
                ))}
            </section>
        </div>
    );
}