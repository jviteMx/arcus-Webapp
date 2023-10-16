import React, {useState} from 'react';
import CSVDisplay from "./pages/CSVDisplay";
import PredictionPage from "./pages/PredictionPage"; // Import the new prediction component
import './App.css';
import IotPage from "./pages/IotPage";

function App() {
    const [selectedDay, setSelectedDay] = useState("");
    const [showPrediction, setShowPrediction] = useState(false); // State to control the prediction component visibility
    const [showIOT, setShowIOT] = useState(false); // State to control the prediction component visibility

    const handleDayClick = (day) => {
        setSelectedDay(day);
        setShowPrediction(false); // Hide the prediction component when a day button is clicked
        setShowIOT(false); // Show the prediction component when the prediction button is clicked

    };

    const handlePredictionClick = () => {
        setShowPrediction(true); // Show the prediction component when the prediction button is clicked
        setShowIOT(false); // Show the prediction component when the prediction button is clicked

    };
    const handleIotClick = () => {
        setShowIOT(true); // Show the prediction component when the prediction button is clicked
        setShowPrediction(false); // Show the prediction component when the prediction button is clicked

    };

    return (
        <div className="App">
            <div className="DataType">
                <div>
                    <h2>Choose your Data</h2>
                    <button className="button" onClick={() => handleDayClick("Monday")}>Monday</button>
                    <button className="button" onClick={() => handleDayClick("Sunday")}>Sunday</button>
                    <button className="button" onClick={() => handleDayClick("Saturday")}>Saturday</button>
                    <button className="button" onClick={() => handleDayClick("Friday")}>Friday</button>
                    <button className="button" onClick={() => handleDayClick("Thursday")}>Thursday</button>
                    <button className="button" onClick={() => handleDayClick("Wednesday")}>Wednesday</button>
                </div>
                <div>
                    <button className="prediction" onClick={handlePredictionClick}>7 Day Forecast</button>
                    <button className="prediction" onClick={handleIotClick}>IOT Edge</button>
                </div>
            </div>

            {showPrediction ? (
                <PredictionPage selectedDay={selectedDay}/>
            ) : showIOT ? (
                <IotPage/>
            ) : (
                <CSVDisplay selectedDay={selectedDay}/>
            )}
        </div>
    );
}

export default App;
