import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "../../css/Login.css"

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();      
    const [error, setError] = useState(''); 

    const handleLogin = async (e) => {
        e.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم

        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                navigate('/cms/admin');
            } else {
                setError(data.message || 'ورود ناموفق بود.');
            }
        } catch (err) {
            console.error('خطا در ارسال درخواست:', err);
            setError('مشکلی در سرور رخ داده است.');
        }
    };

    return (
        <div className='container'>
            <section className='login'>
                <div className='image-container'>
                    <img src="./images/login.jpg" alt="login" />
                </div>
                <form onSubmit={handleLogin}> {/* فرم ارسال به تابع handleLogin */}
                    <h1>ورود به حساب کاربری</h1>
                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* نمایش خطا */}
                    <label>
                        <input 
                            type="text" 
                            placeholder="نام کاربری" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}  // مدیریت وضعیت نام کاربری
                        />
                    </label>
                    <label>
                        <input 
                            type="password" 
                            placeholder="رمز عبور" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}  // مدیریت وضعیت رمز عبور
                        />
                    </label>
                    <input type="submit" value="ورود" />
                </form>
            </section>
        </div>
    );
}

export default Login;
