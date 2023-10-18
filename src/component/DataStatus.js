import React, {Component} from 'react';

class DataStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlinking: false,
        };

        this.blinkInterval = null;
    }

    componentDidMount() {
        this.blinkInterval = setInterval(this.toggleBlink, 1000); // Blink every 1 second
    }

    componentWillUnmount() {
        clearInterval(this.blinkInterval);
    }

    toggleBlink = () => {
        this.setState((prevState) => ({
            isBlinking: !prevState.isBlinking,
        }));
    };

    render() {
        const {isBlinking} = this.state;

        return (
            <div className={`stream-status ${isBlinking ? 'blinking' : ''}`}>
                <div>
                    <span>Stream Status</span>
                    <div className="led"></div>
                </div>
                <div>
                    <span>Stream Quality</span>
                    <div className="led"></div>
                </div>
            </div>
        );
    }
}

export default DataStatus;
