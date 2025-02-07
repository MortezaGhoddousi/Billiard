function Intro(props) {
    return (
        <section className="intro">
            <h1>
                باشگاه ورزشی بیلیارد و اسنوکر <span>آریا من</span>
            </h1>
            <p>لذت بیلیارد جذاب را با ما تجربه کنید</p>
            <div>
                <p>اعضای باشگاه</p>
                <p>{props.peaple} نفر</p>
            </div>

            <img src="./images/9.jpg" alt="intro image" />
        </section>
    );
}

export default Intro;
