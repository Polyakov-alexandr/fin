import Footer from "./footer/Footer";

const Layout = ({ children }) => (
    <div className="container">  
        {children}
        <Footer />
    </div>
);

export default Layout;