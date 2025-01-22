import '../../../css/CMSnews.css'; // فایل CSS برای استایل‌دهی
import { useState } from 'react';
import axios from 'axios';

function NewsCMS() {
    const [newsData, setNewsData] = useState({
        id: '', // شناسه خبر برای به‌روزرسانی
        title: '', // عنوان جدید خبر
        description: '', // توضیحات جدید خبر
        imageUrl: '' // آدرس تصویر جدید
    });

    function handleChange(e) {
        setNewsData({ ...newsData, [e.target.id]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.put('http://localhost:8000/api/news/update/' + newsData.id, newsData)
            .then((response) => {
                console.log('News updated successfully:', response.data);
            })
            .catch((error) => {
                console.error('Error updating news:', error);
            });
    }

    return (
        <section className='edit-news'>
            <form onSubmit={handleSubmit}>
                <h1>  خبر جدید</h1>
                <label>
                    <input
                        type="text"
                        id='id'
                        value={newsData.id}
                        onChange={handleChange}
                        placeholder="شناسه خبر را وارد کنید"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        id='title'
                        value={newsData.title}
                        onChange={handleChange}
                        placeholder="عنوان  خبر را وارد کنید"
                    />
                </label>
                <label>
                    <textarea
                        id='description'
                        value={newsData.description}
                        onChange={handleChange}
                        placeholder="توضیحات  خبر را وارد کنید"
                    ></textarea>
                </label>
                <label>
                    <input
                        type="file"
                        id='image'
                        value={newsData.imageUrl}
                        onChange={handleChange}
                        placeholder="آدرس تصویر  را وارد کنید"
                    />
                </label>
                <input type="submit" value="ثبت " />
            </form>
        </section>
    );
}

export default NewsCMS;
