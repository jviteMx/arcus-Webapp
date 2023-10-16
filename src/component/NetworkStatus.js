import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import Papa from 'papaparse';

class NetworkStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Data Stream',
                        fill: false,
                        borderColor: 'blue',
                        data: [],
                    },
                ],
            },
        };
    }

    componentDidMount() {
        this.loadData();
        this.streamData();
    }

    componentWillUnmount() {
        // Clear any intervals or ongoing processes
        clearInterval(this.streamInterval);
    }

    loadData = () => {
        Papa.parse('your-csv-file.csv', {
            header: true,
            dynamicTyping: true,
            complete: (result) => {
                const { data } = result;
                this.setState({ data });
            },
        });
    };

    streamData = () => {
        const { data } = this.state;
        let dataIndex = 0;

        this.streamInterval = setInterval(() => {
            const newDataPoint = data[dataIndex].columnName; // Replace 'columnName' with the actual column name
            const newChartData = { ...this.state.chartData };

            newChartData.labels.push(new Date().toLocaleTimeString());
            newChartData.datasets[0].data.push(newDataPoint);

            if (newChartData.labels.length > 10) {
                newChartData.labels.shift();
                newChartData.datasets[0].data.shift();
            }

            this.setState({ chartData: newChartData });
            dataIndex = (dataIndex + 1) % data.length;
        }, 1000); // Simulate streaming data every 1 second
    };

    render() {
        const { chartData } = this.state;
        return (
            <div className="data-stream-chart">
                <Line data={chartData} options={{ responsive: true }} />
            </div>
        );
    }
}

export default NetworkStatus;
