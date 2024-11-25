import '../css/Tables.css';
import { useState } from 'react';
import Timer from './Timer'; 

function Tables() {
    const [snooker , setSnooker] = useState([
        { id: 1, price: 90000 },
        { id: 2, price: 90000 },
        { id: 3, price: 90000 },
    ]);
    
    const [billiard , setBilliard] = useState([
        { id: 1, price: 60000 },
        { id: 2, price: 60000 },
        { id: 3, price: 60000 },
    ]);

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
                       <Timer price={snooker[table.id - 1].price / 3600} />
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
                       <Timer price={billiard[table.id - 1].price / 3600} />
               </div>
                ))}
            </div>
        </section>
    );
}

export default Tables;
