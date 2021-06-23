import Navbar from "./navbar/Navbar";
import Header from "./navbar/Header";
import Footer from "./Footer";
import Notify from "./Notify";
import Modal from "./Modal";

const Layout = ({children}) => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            <Notify/>
            <Modal/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;