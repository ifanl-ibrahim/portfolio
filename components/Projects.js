import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import styles from '../styles/projects.module.css';
import { Card, Typography, CardMedia, CardContent, Modal, Link } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

export default function Projects() {
    const { t } = useTranslation('fr', { useSuspense: false });
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const projects = [
        {
            id: 0,
            title: 'Le Joli Port',
            description: `${ t('projects.project1.description') }`,
            language: 'Next.js',
            cover: '../assets/MAT-20141001-7167.jpg',
            logo: '../assets/logo-joliport-cercle.png',
            link: 'https://joli-port.vercel.app/'
        }
    ];

    return (
        <div id="projects" className={styles.projects}>
            <h1>{ t('projects.h1') }</h1>
            <section className={styles.projectsList}>
                {projects.map((project) => (
                    <Card variant="plain" key={project.id} className={styles.card}>
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
                                { t('projects.more') }
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
                                    <p>{ t('projects.madeIn') } {project.language}</p>
                                </article>
                                <section>
                                    <Link className={styles.link} underline='none' onClick={handleClose}><CloseIcon />{ t('projects.closeButton') }</Link>
                                    <Link href={project.link} target='_blank' className={styles.link} underline='none' onClick={handleClose}>{ t('projects.viewButton') }</Link>
                                </section>
                            </div>

                        </Modal>
                    </Card>
                ))}
            </section>
        </div>
    );
}