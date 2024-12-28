import '../css/Tables.css';
import Timer from './Timer'; 
import { useContext } from 'react';
import { nameContext } from '../App';

function Tables({children}) {
    const [snooker, billiard] = useContext(nameContext); 

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
                       <Timer price={table.price / 3600} table={table.table} />
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
                       <Timer price={table.price / 3600} table={table.table} />
                   </div>
                ))}
            </div>
            {children}
        </section>
    );
}

export default Tables;
