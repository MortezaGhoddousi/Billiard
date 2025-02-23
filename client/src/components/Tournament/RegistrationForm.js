import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { api } from "../../API";
import axios from "axios";
import "../../css/tournoment/Registration.css";

const RegistrationForm = () => {
    const [player, setPlayer] = useState({
        fullName: "",
        contactNumber: "",
    });

    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const cardNumber = "6037 9918 1234 5678";

    // Handle text input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlayer({ ...player, [name]: value });
    };

    // Handle file selection & preview
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(file);
            setPhotoPreview(URL.createObjectURL(file)); // Show image preview
        }
    };

    // Handle form submission (Send everything together)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage("");

        const formData = new FormData();
        formData.append("fullName", player.fullName);
        formData.append("contactNumber", player.contactNumber);
        if (photo) {
            formData.append("photo", photo);
        }

        try {
            const response = await axios.post(
                `${api}/api/tournament/register-player`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );

            if (response.data.success) {
                setSuccessMessage("✅ ثبت‌نام با موفقیت انجام شد!");
                setPlayer({ fullName: "", contactNumber: "" });
                setPhoto(null);
                setPhotoPreview(null);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSuccessMessage("مشکلی در ثبت نام شما پیش آمده است!");
            setPlayer({ fullName: "", contactNumber: "" });
            setPhoto(null);
            setPhotoPreview(null);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handle Card Number Copy
    const handleCardNumberClick = () => {
        navigator.clipboard.writeText(cardNumber);
        alert("شماره کارت کپی شد!");
    };

    return (
        <>
            <Header navActive={{ tables: true }} />
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
                                onChange={handleFileChange}
                            />

                            {/* <div className="photo-preview">
                                <img src={photoPreview} alt="Preview" />
                            </div> */}
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "در حال ثبت‌نام..." : "ثبت‌نام"}
                        </button>
                    </form>

                    {successMessage && (
                        <p className="success-message">{successMessage}</p>
                    )}
                </div>

                <div className="bank-card-container">
                    <div className="bank-card">
                        <div className="card-header"></div>
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
            <Footer />
        </>
    );
};

export default RegistrationForm;
