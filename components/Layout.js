import Footer from "./footer/Footer";
import Head from "next/head";

const Layout = ({ children }) => (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet" />
            <link href="fonts/stylesheet.css" rel="stylesheet" />
        </Head>
        <div className="container">
            {children}
            <Footer />
        </div>
    </>
);

export default Layout;