import React, {Component} from 'react';
import DataStatus from "../component/DataStatus";
import NetworkStatus from "../component/NetworkStatus";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <DataStatus/>
                <NetworkStatus/>
            </div>
        );
    }
}

export default Dashboard;