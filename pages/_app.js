import React, { useState } from 'react';
import Head from 'next/head'
import Header from '../components/shared/Header'
import { Router } from 'next/dist/client/router';
import NProgress from 'nprogress';

import '../styles/main.scss'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

NProgress.configure({ showSpinner: false, trickleRate: 0.1, trickleSpeed: 300 });

Router.events.on('routeChangeStart', () => {
    NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
    NProgress.done();
})

Router.events.on('routeChangeError', () => {
    NProgress.done();
})

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

    // const time = new Date().getHours();

    // let modeState = true;

    // if (time > 17 || time < 6) {
    //     modeState = true;
    // } else {
    //     modeState = false;
    // }

    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(prevMode => !prevMode)
    }


    return (
        <>
            <Head>
                <title>natacha romano | portfolio</title>
            </Head>
            <div className={`portfolio-app ${darkMode ? "dark-mode" : "light-mode"}`}>
                <Header handleClick={handleClick} />
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default MyApp;