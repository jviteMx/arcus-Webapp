import React, { useState } from 'react';
import CSVDisplay from "./loaders/CSVDisplay";
import PredictionComponent from "./loaders/PredictionComponent"; // Import the new prediction component
import './App.css';
import IotComponent from "./loaders/IotComponent";

function App() {
    const [selectedDay, setSelectedDay] = useState("");
    const [showPrediction, setShowPrediction] = useState(false); // State to control the prediction component visibility
    const [showIOT, setShowIOT] = useState(false); // State to control the prediction component visibility

    const handleDayClick = (day) => {
        setSelectedDay(day);
        setShowPrediction(false); // Hide the prediction component when a day button is clicked

    };

    const handlePredictionClick = () => {
        setShowPrediction(true); // Show the prediction component when the prediction button is clicked
        setSelectedDay(false);
    };
    const handleIotClick = () => {
        setShowIOT(true); // Show the prediction component when the prediction button is clicked
        setShowPrediction(false); // Show the prediction component when the prediction button is clicked
        setSelectedDay(false);
    };

    return (
        <div className="App">
            <div className="DataType">
                <h2>Choose your Data</h2>
                <button className="button" onClick={() => handleDayClick("Monday")}>Monday</button>
                <button className="button" onClick={() => handleDayClick("Sunday")}>Sunday</button>
                <button className="button" onClick={() => handleDayClick("Saturday")}>Saturday</button>
                <button className="button" onClick={() => handleDayClick("Friday")}>Friday</button>
                <button className="button" onClick={() => handleDayClick("Thursday")}>Thursday</button>
                <button className="button" onClick={() => handleDayClick("Wednesday")}>Wednesday</button>
                <button className="prediction" onClick={handlePredictionClick}>7 Day Forecast</button>
                <button className="prediction" onClick={handleIotClick}>IOT Edge</button>
            </div>
            {showPrediction ? (
                <PredictionComponent selectedDay={selectedDay} />
            ) : showIOT ? (
                <IotComponent />
            ) : (
                <CSVDisplay selectedDay={selectedDay} />
            )}
        </div>
    );
}

export default App;
