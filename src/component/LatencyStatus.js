import React, {Component} from 'react';

class LatencyStatus extends Component {
    render() {
        return (
            <div className="networkDetails">
                <p>Network Details</p>
                <p>Latency : 9ms</p>
                <p>Nodes : 14</p>
                <p>Speed : 500Kbps</p>
            </div>
        );
    }
}

export default LatencyStatus;