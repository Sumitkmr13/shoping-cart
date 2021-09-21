import React from 'react'
import './Header.css'
import {FaShoppingCart} from 'react-icons/fa'
import {Link, useHistory} from "react-router-dom";

export default function Header(props) {
    const {countCartItems} = props;
    const history= useHistory();
    function handleCartClick(){
        history.push('/basket');
    }
    return (
        <div className='head'>
            <header className='header'><Link to='/'><center><span>Shopping Mall</span></center></Link>
            <span className='cart' onClick={handleCartClick}><FaShoppingCart/> {countCartItems}</span>
            </header>
        </div>
    )
}
