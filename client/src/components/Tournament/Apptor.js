import Tournament from "./Tournament";
import Headertor from "./Headertor"
import { Routes, Route } from "react-router-dom"
import RegistrationForm from "./RegistrationForm"
function Apptor() {
    return (
    <>
    <div className="news-container">
      <Headertor /> 
      <RegistrationForm/>
      <Routes>
        <Route path="12" element={<RegistrationForm />} />
        <Route path="/" element= {<Tournament/>}/>
        <Route path="/RegistrationForm" element={< RegistrationForm/>} />
      </Routes>
      {/* <Footer />  */}
    </div>
    </>
    );
}
export default Apptor ;