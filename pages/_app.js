import '../styles/globals.css'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

i18next.use(initReactI18next).use(Backend).init({
    backend: {
        loadPath: '/translations/{{ lng }}/translations.json'
    },
    lng: 'fr',
    fallbackLng: 'fr'
})

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}

export default MyApp