import React, {Component} from 'react';
import DataStatus from "../component/DataStatus";
import NetworkStatus from "../component/NetworkStatus";
import LatencyStatus from "../component/LatencyStatus";
import FlotChartComponent from "../component/FlotChartComponent";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="statusPanel">
                    <p>Status Panel</p>
                    <DataStatus/>
                </div>
                <div>
                    <LatencyStatus/>
                </div>
                {/*<NetworkStatus/>*/}
                {/*<FlotChartComponent/>*/}
            </div>
        );
    }
}

export default Dashboard;