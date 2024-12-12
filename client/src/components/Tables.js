import '../css/Tables.css';
import Timer from './Timer'; 
import { useContext } from 'react';
import { nameContext } from '../App';

function Tables({children}) {
    // Destructure the context values
    const [snooker, billiard] = useContext(nameContext); 
    console.log(snooker); // Log snooker tables
    console.log(billiard); // Log billiard tables

    return (
        <section id="tables">
            <h1>میزها</h1>
            <div className="snooker">
                {snooker.map((table) => (
                    <div className="option" key={table.id}>
                        <div className="image-container">
                            <h1>{table.id}</h1>
                            <img src="./images/snooker.webp" alt="" />
                            <div className="overlay"></div>
                        </div>
                       <Timer price={table.price / 3600} />
                    </div>
                ))}
            </div>
            <div className="billiard">
                {billiard.map((table) => (
                   <div className="option" key={table.id}>
                       <div className="image-container">
                           <h1>{table.id}</h1>
                           <img src="./images/billiard.jpg" alt="" />
                           <div className="overlay"></div>
                       </div>
                       <Timer price={table.price / 3600} />
                   </div>
                ))}
            </div>
            {children}
        </section>
    );
}

export default Tables;
