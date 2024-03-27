import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Découvrez le portfolio de ifanl IBRAHIM - développeur web passionné par la création d'expériences numériques uniques. Explorez mes projets, compétences et expériences professionnelles pour voir comment je peux vous aider à concrétiser vos idées et atteindre vos objectifs en ligne." />
                    <meta name="keywords" content="Portfolio en ligne, Portefeuille de compétences, CV en ligne, Site web personnel, Développeur web, Créatif, Compétences, Expérience professionnelle, Projets, Réalisations, Compétences techniques, Technologies web, Langages de programmation, Outils de développement, Certifications, Références, Contact, Blog, Portfolio numérique, Présentation de projet, Portefeuille de travail, Présentation professionnelle, Portfolio, CV, Curriculum vitae, Développement web, Next.js, Nextjs" />
                    <meta name="robots" content="index, follow" />
                    <meta name="author" content="Ifanl IBRAHIM | IBRA-IT" />
                    <link rel="canonical" href="https://www.votre-site-web.com/chemin-de-la-page" />
                    <html lang="fr" />
                    <link rel="alternate" hrefLang="en" href="" />
                    <meta property="og:title" content="Ifanl IBRAHIM" />
                    <meta property="og:description" content="Découvrez le portfolio de ifanl IBRAHIM - développeur web passionné par la création d'expériences numériques uniques. Explorez mes projets, compétences et expériences professionnelles pour voir comment je peux vous aider à concrétiser vos idées et atteindre vos objectifs en ligne." />
                    <meta property="og:url" content="https://www.votre-site-web.com/chemin-de-la-page" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Ifanl IBRAHIM" />
                    <meta name="twitter:description" content="Découvrez le portfolio de ifanl IBRAHIM - développeur web passionné par la création d'expériences numériques uniques. Explorez mes projets, compétences et expériences professionnelles pour voir comment je peux vous aider à concrétiser vos idées et atteindre vos objectifs en ligne." />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument