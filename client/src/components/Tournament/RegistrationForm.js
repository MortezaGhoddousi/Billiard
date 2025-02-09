import React, { useState } from "react";
import "../../css/tournoment/Registration.css";

const RegistrationForm = () => {
    const [player, setPlayer] = useState({
        fullName: "",
        contactNumber: "",
        photo: null,
    });
    const [photoUploaded, setPhotoUploaded] = useState(false);

    const cardNumber = "6037 9918 1234 5678";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlayer({ ...player, [name]: value });
    };

    const handlePhotoUpload = (e) => {
        setPhotoUploaded(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("اطلاعات ثبت شد!");
    };

    const handleCardNumberClick = () => {
        navigator.clipboard.writeText(cardNumber);
        alert("شماره کارت کپی شد!");
    };

    return (
        <div className="registration-container">
            <div className="registration-form">
                <h2>ثبت‌نام بازیکن</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>نام و نام خانوادگی:</label>
                        <input
                            type="text"
                            name="fullName"
                            value={player.fullName}
                            onChange={handleChange}
                            placeholder="نام و نام خانوادگی"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>شماره تماس:</label>
                        <input
                            type="tel"
                            name="contactNumber"
                            value={player.contactNumber}
                            onChange={handleChange}
                            placeholder="شماره تماس"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>آپلود عکس:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                        />
                        {photoUploaded && (
                            <div className="upload-success">
                                <span>✔️ عکس با موفقیت آپلود شد</span>
                            </div>
                        )}
                    </div>
                    <button type="submit">ثبت‌نام</button>
                </form>
            </div>
            <div className="bank-card-container">
                <div className="bank-card">
                    <div className="card-header"> </div>
                    <div className="card-body">
                        <div
                            className="card-number"
                            onClick={handleCardNumberClick}
                            title="برای کپی کلیک کنید"
                        >
                            {cardNumber}
                        </div>
                        <p className="card-name">رسول فتحعلیان</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
