import '../css/Header.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const [isMenuOpen , setIsMenuOpen] = useState(false);

    function toggleMenu () {
        setIsMenuOpen(!isMenuOpen);
    }


    return ( 
        <header>
            <div>
                <h1>لوگو.</h1>
                <i className='bx bx-menu' onClick={toggleMenu}></i>
            </div>
            <ul className={isMenuOpen ? 'active' : ''}>
                <li><Link to={"/"}>خانه</Link></li>
                <li><a href="/tables" >میز ها</a></li>
                <li><Link to={"/shop"}>بوفه</Link></li>

            </ul>
        </header>
     );
}

export default Header;