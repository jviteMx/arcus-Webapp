import React, {Component} from 'react';
import Dashboard from "../iotService/Dashboard";

class IotPage extends Component {
    render() {
        return (
            <div>
                <h3>The data presented through this dashboard is an example of edge computing using data coming from a
                    CAN-BUS device @ 500 Kbps. This device implementation sole objective is to monitor and alert
                    cyber-security intrusion on a Level 3 Government Facility </h3>
                <h4>Some Technical Details: Edge computation designed to be executed by any CAN-BUS device connected to the network responsible for controlling access. This example computes for DoS, Fussy and Impersonation attacks</h4>
                <Dashboard/>
            </div>
        );
    }
}

export default IotPage;