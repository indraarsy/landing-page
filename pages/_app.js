import Nav from "../components/nav";
import Head from "next/head";

import "../styles/index.css";
import NProgress from "nprogress";
import Router from "next/router";
import { motion } from "framer-motion";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, router, location }) {
    return (
        <>
            <Head>
                <title>Indra Arsy Kaloka</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <motion.div
                className="mobile lg:container lg:mx-auto relative"
                key={router.route}
                initial="pageInitial"
                animate="pageAnimate"
                exit="exit"
                variants={{
                    pageInitial: {
                        opacity: 0,
                        y: -50,
                    },
                    pageAnimate: {
                        opacity: 1,
                        y: 0,
                    },
                    exit: {
                        opacity: 0,
                        y: 50,
                    },
                }}
            >
                <Nav />
                <Component {...pageProps} />
            </motion.div>
        </>
    );
}

export default MyApp;
