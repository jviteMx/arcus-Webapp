import React from 'react';

function PredictionPage() {
    const imageUrl = 'https://javiervite.com/forecastDump/NYISO_RealTime.png'
    const imageUrl2 = 'https://javiervite.com/forecastDump/NYISO_RealTime_7day.png'

    return (
        <div>

            <h2>Note: This forecast are predictions for the AVG daily change </h2>
            <div className="statistics">
                <h3> Prediction Statistics</h3>
                <p>Variance AVG : 3.45 </p>
                <p>Error AVG : 20%</p>
                <p>Drift AVG : 35%</p>
                <p>Missed Predictions : 1</p>
            </div>
            <div className="datagraphs">

                <div className="NYISO">
                    <h2>NYISO_RealTime</h2>
                    <h3> 5 days data, 2 day forecast</h3>
                    <div className="chart">
                        <img src={imageUrl} alt="Image"/>
                    </div>
                </div>
                <div className="NYISO1">
                    <h2>NYISO_RealTime_</h2>
                    <h3>10 days data, 7 day forecast</h3>
                    <div className="chart">
                        <img src={imageUrl2} alt="Image"/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PredictionPage;
