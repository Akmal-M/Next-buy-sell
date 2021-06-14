import React from 'react';
import Search from "../search/Search";
import MainDropdown from "../Dropdown/MainDropdown";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div>
            <Search/>
            <MainDropdown/>
        </div>
    );
};

export default Header;