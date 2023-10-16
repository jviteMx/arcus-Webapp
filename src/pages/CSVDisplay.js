import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const CSVDisplay = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Construct the file path based on the selected day
                const filePath = `/${props.selectedDay.toLowerCase()}.csv`; // e.g., "/monday.csv"

                const response = await fetch(filePath);
                const reader = response.body.getReader();
                const result = await reader.read();
                const text = new TextDecoder().decode(result.value);
                const { data } = Papa.parse(text, { header: true });

                // Filter out rows with missing fields
                const filteredData = data.filter((row) => {
                    return Object.keys(row).length > 0;
                });

                setData(filteredData);
            } catch (error) {
                console.error('Error fetching CSV:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [props.selectedDay]);

    return (
        <div className="data">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table>
                    <thead>
                    {data.length > 0 && (
                        <tr>
                            {Object.keys(data[0]).map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    )}
                    </thead>
                    <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.values(row).map((value, columnIndex) => (
                                <td key={columnIndex}>{value}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CSVDisplay;
