import React from 'react';
import axios from 'axios'; // یا می‌توانید از fetch استفاده کنید.

function CMSHeader() {
  const handleLogout = () => {
    // فرض می‌کنیم که `userId` شناسه اکانت ادمین باشد
    const userId = 'admin-id'; // باید شناسه کاربر ادمین را از جایی بگیرید

    // ارسال درخواست DELETE به سرور برای حذف اکانت
    axios
      .delete(`/api/user/${userId}`)
      .then((response) => {
        console.log(response.data);
        alert('حساب کاربری با موفقیت حذف شد');
        // پس از موفقیت، می‌توانید ریدایرکت کنید یا صفحه را بازنشانی کنید
        window.location.href = '/login'; // ریدایرکت به صفحه ورود یا صفحه دلخواه
      })
      .catch((error) => {
        console.error('خطا در حذف کاربر:', error);
        alert('خطا در حذف حساب کاربری');
      });
  };

  return (
    <section className='header'>
      <div>
        <h2>به صفحه ادمین خوش آمدید.</h2>
      </div>
      <button onClick={handleLogout}>خروج</button>
    </section>
  );
}

export default CMSHeader;
