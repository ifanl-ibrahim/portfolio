import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../styles/contact.module.css';
import { Box, FormControl, TextField, Button } from '@mui/material';

export default function Contact() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/send-email', {
            firstName,
            lastName,
            email,
            phone,
            message
        })
        .then((response) => {
            console.log('Email sent successfully');
            // Réinitialisez les états du formulaire après l'envoi
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setMessage('');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
    };

    return (
        <div className={styles.contact}>
            <div className={styles.contact2}>
                <img
                    className={styles.imgLight}
                    src="../assets/undraw_letter_re_vert.svg"
                    alt="image de message"
                />
                <img
                    className={styles.imgDark}
                    src="../assets/undraw_letter_re_mauve.svg"
                    alt="image de message"
                />
                <section className={styles.formContent}>
                    <h1>Je suis à l'écoute</h1>
                    <Box className={styles.form}>
                        <FormControl className={styles.formControl}>
                            <TextField
                                id="firstname"
                                label="Prénom"
                                variant="filled"
                                value={firstName}
                                required
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl className={styles.formControl}>
                            <TextField
                                id="lastname"
                                label="Nom"
                                variant="filled"
                                value={lastName}
                                required
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl className={styles.formControl}>
                            <TextField
                                id="email"
                                label="E-mail"
                                variant="filled"
                                type='email'
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl className={styles.formControl}>
                            <TextField
                                id="phone"
                                label="Téléphone"
                                variant="filled"
                                type='tel'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </FormControl>
                        <FormControl className={styles.formControl}>
                            <TextField
                                id="message"
                                label="Message"
                                variant="filled"
                                multiline
                                rows={5}
                                value={message}
                                required
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </FormControl>
                        <Button
                            className={styles.button}
                            variant="contained"
                            type="submit"
                            onClick={handleSubmit}
                            disabled={firstName=='' || lastName=='' || email=='' || message==''}
                        >
                            Envoyer
                        </Button>
                    </Box>
                </section>
            </div>
        </div>
    );
}