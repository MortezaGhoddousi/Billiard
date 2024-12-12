import '../../css/Login.css';

function Login() {
    return ( 
        <div className='container'>
        <section className='login' >
            <div className='image-container'>
                <img src="./images/login.jpg" alt="" />
            </div>
            <form>
            <h1>ورود به حساب کاربری</h1>
                <label>
                    <input type="text" placeholder="نام کاربری" />
                </label>
                <label>
                    <input type="password" placeholder="رمز عبور" />
                </label>
                <input type="submit" value="ورود" />
            </form>
        </section>
    </div>
     );
}

export default Login;