import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({children}) =>{
    const design = (
        <>
        <Navbar />
        <h1>Layout</h1>
        {children}
        <Footer />
        </>
    );
    return design;
}

export default Layout;