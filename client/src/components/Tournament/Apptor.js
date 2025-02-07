import Tournament from "./Tournament";
import Header from "../Header";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
function Apptor() {
    return (
        <>
            <div className="news-container">
                <Header navActive={{ tournament: true }} />
                <RegistrationForm />
                <Routes>
                    <Route path="12" element={<RegistrationForm />} />
                    <Route path="/" element={<Tournament />} />
                    <Route
                        path="/RegistrationForm"
                        element={<RegistrationForm />}
                    />
                </Routes>
                {/* <Footer />  */}
            </div>
        </>
    );
}
export default Apptor;
