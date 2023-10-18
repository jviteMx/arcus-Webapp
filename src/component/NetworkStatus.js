import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Papa from 'papaparse';

class NetworkStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: [],
                datasets: [
                    {
                        label: 'Horizontal Bar Chart',
                        data: [],
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    },
                ],
            },
        };
    }

    componentDidMount() {
        this.loadDataFromCSV('data.csv');
    }

    // Function to load data from CSV file
    loadDataFromCSV = (csvFile) => {
        Papa.parse(csvFile, {
            download: true,
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: (result) => {
                const labels = result.data.map((row) => row.Category);
                const values = result.data.map((row) => row.Value);
                this.updateChart(labels, values);
            },
        });
    };

    // Function to update the chart
    updateChart = (labels, values) => {
        const updatedData = { ...this.state.data };
        updatedData.labels = labels;
        updatedData.datasets[0].data = values;
        this.setState({ data: updatedData });
    };

    render() {
        return (
            <div>
                <h1>Horizontal Bar Chart</h1>
                <Bar
                    data={this.state.data}
                    options={{
                        scales: {
                            xAxes: [
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },
                            ],
                        },
                    }}
                />
            </div>
        );
    }
}

export default NetworkStatus;
