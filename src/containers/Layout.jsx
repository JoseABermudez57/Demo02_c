import Header from "../components/Header";
import Footer from "../components/Footer";
import '../assets/styles/layout.css';

function Layout({children}) {
    return ( 
        <>
            <Header />
            <br />
            {children}
            <br />
            <Footer />
        </>
     );
}

export default Layout;