import "../../css/tournoment/Headertor.css"
import { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import RegistrationForm from "./RegistrationForm";

function Headertor() {

    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    function toggleMenu () {
        setIsMenuOpen(!isMenuOpen);
    }

    function handleTablesClick() {
        navigate('/'); 
        setTimeout(() => {
            window.location.hash = 'tables'; 
        }, 0); 
    }


    return ( 
        <header className='header.news'>
            <div>
                <h1>لوگو.</h1>
                <i className='bx bx-menu' onClick={toggleMenu}></i>
            </div>
            <ul className={isMenuOpen ? 'active' : ''}>
                <li><Link to={"/"}>خانه</Link></li>
                <li><a href="#" onClick={handleTablesClick}>میز ها</a></li>
                <li><Link to={"/tournament"}>مسابقات</Link></li>
                <li><Link to={"/news"}>اخبار</Link></li>
                <li><Link to={"/shop"}>بوفه</Link></li>
                <li><Link to={"/RegistrationForm"}>ثبت نام </Link></li>

            </ul>
        </header>
     );
}
export default Headertor ;