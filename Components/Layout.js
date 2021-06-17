import Navbar from "./navbar/Navbar";
import Header from "./navbar/Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;