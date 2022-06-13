import Footer from "./footer/Footer";
import Head from "next/head";

const Layout = ({ children }) => (
    <>
        <Head>
            
        </Head>
        <div className="container">
            {children}
            <Footer />
        </div>
    </>
);

export default Layout;