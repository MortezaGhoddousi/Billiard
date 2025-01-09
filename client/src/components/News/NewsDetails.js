import React from "react";
import { useParams } from "react-router-dom"; // استفاده از useParams برای گرفتن id

function NewsDetails() {
  const { id } = useParams(); // دریافت id از مسیر

  // برای تست، id را نمایش می‌دهیم
  return (
    <div>
      <h1>جزئیات خبر {id}</h1>
      {/* شما می‌توانید اینجا داده‌های خبر خاص را نمایش دهید */}
    </div>
  );
}

export default NewsDetails;
