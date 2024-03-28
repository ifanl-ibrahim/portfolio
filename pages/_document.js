import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Découvrez le portfolio de ifanl IBRAHIM - développeur web passionné par la création d'expériences numériques uniques. Explorez mes projets, compétences et expériences professionnelles pour voir comment je peux vous aider à concrétiser vos idées et atteindre vos objectifs en ligne." />
                    <meta name="description" content="Discover the portfolio of ifanl IBRAHIM - web developer passionate about creating unique digital experiences. Explore my projects, skills and work experience to see how I can help you turn your ideas into reality and achieve your online goals." />
                    <meta name="keywords" content="Portfolio en ligne, Portefeuille de compétences, CV en ligne, Site web personnel, Développeur web, Créatif, Compétences, Expérience professionnelle, Projets, Réalisations, Compétences techniques, Technologies web, Langages de programmation, Outils de développement, Certifications, Références, Contact, Blog, Portfolio numérique, Présentation de projet, Portefeuille de travail, Présentation professionnelle, Portfolio, CV, Curriculum vitae, Développement web, Next.js, Nextjs, Online portfolio, Skills portfolio, Online resume, Personal website, Web developer, Creative, Skills, Professional experience, Projects, Achievements, Technical skills, Web technologies, Programming languages, Development tools, References, Blog, Digital portfolio, Project presentation, Work portfolio, Professional presentation, Resume, Web development, html, css, php, Javascript, sql, MySql, git, gitHub, react, react-native, python, symfony, reactjs, wordpress" />
                    <meta name="robots" content="index, follow" />
                    <meta name="author" content="Ifanl IBRAHIM | IBRA-IT" />
                    <link rel="canonical" href="https://ifanl-ibrahim.vercel.app/" />
                    <html lang="fr" />
                    <link rel="alternate" hrefLang="en" href="https://ifanl-ibrahim.vercel.app/" />
                    <meta property="og:title" content="Ifanl IBRAHIM" />
                    <meta property="og:description" content="Découvrez le portfolio de ifanl IBRAHIM - développeur web passionné par la création d'expériences numériques uniques. Explorez mes projets, compétences et expériences professionnelles pour voir comment je peux vous aider à concrétiser vos idées et atteindre vos objectifs en ligne." />
                    <meta property="og:description" content="Discover the portfolio of ifanl IBRAHIM - web developer passionate about creating unique digital experiences. Explore my projects, skills and work experience to see how I can help you turn your ideas into reality and achieve your online goals." />
                    <meta property="og:url" content="https://ifanl-ibrahim.vercel.app/" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Ifanl IBRAHIM" />
                    <meta name="twitter:description" content="Découvrez le portfolio de ifanl IBRAHIM - développeur web passionné par la création d'expériences numériques uniques. Explorez mes projets, compétences et expériences professionnelles pour voir comment je peux vous aider à concrétiser vos idées et atteindre vos objectifs en ligne." />
                    <meta name="twitter:description" content="Discover the portfolio of ifanl IBRAHIM - web developer passionate about creating unique digital experiences. Explore my projects, skills and work experience to see how I can help you turn your ideas into reality and achieve your online goals." />
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