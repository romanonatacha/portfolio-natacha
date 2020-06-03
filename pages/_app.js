import React, { useState } from 'react';
import Header from '../components/shared/Header'

const MyApp = ({ Component, pageProps }) => {

    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // MyApp.getInitialProps = async (appContext) => {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //
    //   return { ...appProps }
    // }


    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(prevMode => !prevMode)
        console.log(darkMode);
    }

    return (
        <div className={`portfolio-app ${darkMode ? "dark-mode" : "light-mode"}`}>
            <Header handleClick={handleClick} />
            <Component {...pageProps} />
        </div>
    )
}
export default MyApp;