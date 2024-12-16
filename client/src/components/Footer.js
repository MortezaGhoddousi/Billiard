import '../css/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <footer id='contact'>
            <div className='address'>
                <h1>لوگو.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnam ut atque quis quos et esse consequuntur, reprehenderit nemo assumenda tenetur porro ipsam reiciendis quia. Consequatur accusantium neque optio consectetur.</p>
                <div className="phone">
                    <i class='bx bxs-phone'></i>
                    <h5>۰۵۱۳-۸۷۱۵۶۳۷</h5>
                </div>
            </div>
            <div className='quick-access'>
                <h1>دسترسی سریع</h1>
                <ul>
                <li><Link to={"/"}>خانه</Link></li>
                <li><a href="#tables">میز ها</a></li>
                <li><a href="#contact">تماس با ما</a></li>
                <li><Link to={"/shop"}>بوفه</Link></li>
                </ul>
            </div>
            <div className='footer-contact'>
                <h1>راه های ارتباطی</h1>
                <p>برای دریافت آخرین اخبار و پیشنهادات ویژه ما، ایمیل خود را وارد کنید.</p>
                <form>
                    <input type="email" placeholder='ایمیل خود را وارد نمایید' />
                    <input type="submit" value="ثبت" />
                </form>
            </div>
        </footer>
     );
}

export default Footer;