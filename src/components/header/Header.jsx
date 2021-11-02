import React, {useState} from 'react';
import MyInput from "../../sharedUI/myInput/MyInput";
import MyButton from "../../sharedUI/myButton/MyButton";
import './../../App.css'

const Header = ({searchQuery, setSearchQuery }) => {



    return (
        <div className='header__container'>
            <div className='header__title'>
                MovieCatalog
            </div>

            <div className='header__search'>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}

                />

            </div>


    <div className='header__auth'>
        AUTH
    </div>
        </div>
    );
};

export default Header;