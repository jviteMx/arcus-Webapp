import React, { Component } from 'react';
import ReactFlot from '../ReactFlot.jsx';

const options = {
    series: {
        bars: {
            show: true,
            barWidth: 0.3,
            align: 'center',
            lineWidth: 0,
            fill: 0.75,
        },
    },
    xaxis: {
        ticks: [
            [0, 'First'],
            [1, 'Second'],
            [2, 'Third'],
            [3, 'Fourth'],
        ],
        mode: 'categories',
        tickLength: 0,
    },
    yaxis: {
        max: 10,
    },
    grid: {
        hoverable: true,
    },
    tooltip: {
        show: true,
        content: 'This is a tooltip',
    },
};

const data = [[
    [0, 4],
    [1, 6],
    [2, 3],
    [3, 8],
]];

const pieData = [
    { label: 'data1', data: 10 },
    { label: 'data2', data: 20 },
    { label: 'data3', data: 30 },
    { label: 'data4', data: 40 },
    { label: 'data5', data: 50 },
    { label: 'data6', data: 60 },
    { label: 'data7', data: 70 },
];

const pieOptions = {
    series: {
        pie: { show: true },
    },
};

const horizontalData = [
    {
        data: [
            [70, 0],
        ],
        color: '#0C4BBB',
        bars: {
            align: 'center',
            show: true,
            barWidth: 0.4,
            fill: 1,
            lineWidth: 0,
            horizontal: true,
        },
    },
    {
        data: [
            [63.37, 1],
        ],
        color: '#BB250C',
        bars: {
            align: 'center',
            fill: 0.4,
            lineWidth: 0,
            show: true,
            barWidth: 0.4,
            horizontal: true,
        },
    },
    {
        data: [
            [66.65, 2],
        ],
        color: '#BB250C',
        bars: {
            align: 'center',
            fill: 0.8,
            lineWidth: 0,
            show: true,
            barWidth: 0.4,
            horizontal: true,
        },
    },
    {
        data: [
            [99, 3],
        ],
        color: '#A2BB0C',
        bars: {
            align: 'center',
            fill: 1,
            lineWidth: 0,
            show: true,
            barWidth: 0.4,
            horizontal: true,
        },
    },
];

const horizontalOptions = {
    xaxis: {
        min: 0,
        max: 100,
        tickLength: 0,
        show: false,
    },
    yaxis: {
        ticks: [
            [0, 'Target: 70%'],
            [1, '2013: 63.4%'],
            [2, '2014: 66.7%'],
            [3, '2014: 83.3%'],
        ],
        show: false,
        toRight: true,
        labelPadding: 9,
        font: { // Used when toRight is true
            color: 'black',
            family: 'Arial',
            size: '150%',
            style: 'italic', // ['normal', 'italic', 'oblique']
            variant: 'small-caps', // ['normal', 'small-caps']
            weight: 'bold', // ['normal', 'bold', 'bolder', 'lighter', '100' ... '900']
        },
    },
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [[
                [0, 4],
                [1, 6],
                [2, 3],
                [3, 8],
            ]],
        };
    }

    onButtonClick = () => {
        this.setState({
            data: [[
                [0, 10],
                [1, 5],
                [2, 2],
                [3, 1],
            ]],
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>
                    Update Data
                </button>
                <ReactFlot id="horizontal-bar-chart" data={horizontalData} options={horizontalOptions} />
                <ReactFlot id="first-chart" data={this.state.data} options={options} />
                <ReactFlot id="second-chart" data={this.state.data} options={options} />
                <ReactFlot id="pie-chart" data={pieData} options={pieOptions} />
            </div>
        );
    }
}
