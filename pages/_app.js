import Nav from "../components/nav";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

import "../styles/index.css";
import NProgress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MotionBox = motion.custom;

function MyApp({ Component, pageProps, router }) {
    return (
        <div>
            <div className="mobile lg:container lg:mx-auto relative">
                <Head>
                    <title>Indra Arsy Kaloka</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <Nav />
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} />
                </AnimatePresence>
            </div>
        </div>
    );
}

export default MyApp;
