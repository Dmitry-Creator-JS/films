import React from 'react';
import MyInput from "../../sharedUI/myInput/MyInput";
import MyButton from "../../sharedUI/myButton/MyButton";
import './../../App.css'

const Header = () => {
    return (
        <div className='header__container'>
            <MyInput/>
            <MyButton> Find </MyButton>

        </div>
    );
};

export default Header;