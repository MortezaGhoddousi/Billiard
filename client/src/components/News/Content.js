import React from "react";
import "../../css/Newspage/Newscard.css";

function NewsPage() {
  const newsData = [
    {
      title: "",
      content:
        "مسابقات بیلیارد در سطح جهانی همیشه مورد توجه قرار می‌گیرد و حالا قرار است یک رویداد مهم دیگر در این عرصه برگزار شود. بیلیاردبازان از سراسر دنیا برای رقابت در این مسابقات مهیج و پرهیجان گرد هم می‌آیند. با دنبال کردن اخبار این مسابقات، اطلاعات به‌روز و هیجان‌انگیزترین لحظات را از دست ندهید.",
      image: "./images/1.jpg",
    },
    {
      title: "تخفیفات ویژه تابستان",
      content:
      "مسابقات بیلیارد در سطح جهانی همیشه مورد توجه قرار می‌گیرد و حالا قرار است یک رویداد مهم دیگر در این عرصه برگزار شود. بیلیاردبازان از سراسر دنیا برای رقابت در این مسابقات مهیج و پرهیجان گرد هم می‌آیند. با دنبال کردن اخبار این مسابقات، اطلاعات به‌روز و هیجان‌انگیزترین لحظات را از دست ندهید.",
      image: "./images/5.jpg",
    },
  ];

  return (
    <div className="news-page">
      <h1>مسابقات بزرگ بیلیارد در پیش است</h1>
      {newsData.map((news, index) => (
        <div key={index} className="news-article">
          <div className="news-article__content">
            <p>{news.content}</p>
          </div>
          <img
            src={news.image}
            alt={news.title}
            className="news-article__image"
          />
          <h2 className="news-article__title">{news.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default NewsPage;
