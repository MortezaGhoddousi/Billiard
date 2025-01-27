import "../css/Tables.css";
import Timer from "./Timer";
import { useContext } from "react";
import { nameContext } from "../App";

function Tables({ children }) {
    const [snooker, billiard] = useContext(nameContext);

    const getLocalStorageData = (key) => {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
    };

    return (
        <section id="tables">
            <h1>میزها</h1>
            <div className="snooker">
                {snooker.map((table) => {
                    const localData = getLocalStorageData(table.id);

                    return (
                        <div
                            className="option"
                            id={`table${table.id}`}
                            key={table.id}
                        >
                            <div className="image-container">
                                <h1>{table.table}</h1>
                                <img src="./images/snooker.webp" alt="" />
                                <div className="overlay"></div>
                            </div>
                            <Timer
                                price={table.price / 3600}
                                table={table.table}
                                description={
                                    localData
                                        ? localData.description
                                        : table.description
                                }
                                startTime={
                                    localData ? localData.startTime : null
                                }
                                id={table.id}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="billiard">
                {billiard.map((table) => {
                    const localData = getLocalStorageData(table.id);

                    return (
                        <div
                            className="option"
                            id={`table${table.id}`}
                            key={table.id}
                        >
                            <div className="image-container">
                                <h1>{table.table}</h1>
                                <img src="./images/billiard.jpg" alt="" />
                                <div className="overlay"></div>
                            </div>
                            <Timer
                                price={table.price / 3600}
                                table={table.table}
                                description={
                                    localData
                                        ? localData.description
                                        : table.description
                                }
                                startTime={
                                    localData ? localData.startTime : null
                                }
                                id={table.id}
                            />
                        </div>
                    );
                })}
            </div>
            {children}
        </section>
    );
}

export default Tables;
