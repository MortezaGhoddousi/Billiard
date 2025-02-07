import "../css/Footer.css";

function Footer() {
    return (
        <footer id="contact">
            <div className="address">
                <h1>اسنوکر آریامن</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi magnam ut atque quis quos et esse consequuntur,
                    reprehenderit nemo assumenda tenetur porro ipsam reiciendis
                    quia. Consequatur accusantium neque optio consectetur.
                </p>
                <div className="phone">
                    <i className="bx bxs-phone"></i>
                    <h5>۰۵۱۳-۸۷۱۵۶۳۷</h5>
                </div>
            </div>
            <div className="footer-contact">
                <h1>راه های ارتباطی</h1>
                <p>
                    برای دریافت آخرین اخبار و پیشنهادات ویژه ما، ایمیل خود را
                    وارد کنید.
                </p>
                <form>
                    <input
                        type="email"
                        placeholder="ایمیل خود را وارد نمایید"
                    />
                    <input type="submit" value="ثبت" />
                </form>
            </div>
        </footer>
    );
}

export default Footer;
