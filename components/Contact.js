import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '/styles/contact.module.css';
import { Box, FormControl, TextField, Button, Snackbar } from '@mui/material';
import { sendContactForm } from '../lib/api';

export default function Contact() {
    const { t } = useTranslation('fr', { useSuspense: false });
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    
    const handleSubmit = async () => {
        try {
            await sendContactForm(
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    message: message
                }
            )
            setAlert(`${ t('contact.errorMessageTrue') }`)
            handleOpen()
        } catch (error) {
            setAlert(`${ t('contact.errorMessageFalse') }`)
            handleOpen()
        }
    }

    return (
        <div id="contact" className={styles.contactContainer}>
            <div className={styles.contact}>
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
                    <h1>{ t('contact.h1') }</h1>
                    <Box className={styles.form}>
                        <FormControl className={styles.formControl}>
                            <TextField
                                id="firstname"
                                label={ t('contact.firstname') }
                                variant="filled"
                                value={firstName}
                                required
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl className={styles.formControl}>
                            <TextField
                                id="lastname"
                                label={ t('contact.lastname') }
                                variant="filled"
                                value={lastName}
                                required
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl className={styles.formControl}>
                            <TextField
                                id="email"
                                label={ t('contact.email') }
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
                                label={ t('contact.phone') }
                                variant="filled"
                                type='tel'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </FormControl>
                        <FormControl className={styles.formControl}>
                            <TextField
                                id="message"
                                label={ t('contact.message') }
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
                            disabled={firstName == '' || lastName == '' || email == '' || message == ''}
                        >
                            { t('contact.button') }
                        </Button>
                        <Snackbar
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                            open={open}
                            onClose={handleClose}
                            message={alert}
                            autoHideDuration={6000}
                        />
                    </Box>
                </section>
            </div>
        </div>
    );
}