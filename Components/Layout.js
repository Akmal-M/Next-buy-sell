import Navbar from "./navbar/Navbar";

const Layout = ({children}) => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            {children}
        </div>
    );
};

export default Layout;