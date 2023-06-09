import React, { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsData from 'highcharts/modules/data';
import HighchartsCSV from 'highcharts/modules/data';
import { Box } from '@mui/material';
import darkUnica from 'highcharts/themes/dark-unica';
import { useSelector } from 'react-redux';
import secret from "../secrets.json";

darkUnica(Highcharts);
HighchartsData(Highcharts);
HighchartsCSV(Highcharts);

const StockGraph = () => {
    const csvUrl = useSelector((state) => state.urlReducer.url);
    const [chartOptions, setChartOptions] = useState({
        title: {
            text: 'Stock Vizualization'
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: 'Timeline'
            }
        },
        series: [],
        chart: {
            height: 650,
            width: (12 / 9) * 1000
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the CSV file
                const lastString = `&apikey=${secret.API_KEY}&datatype=csv`;
                const response = await fetch(csvUrl + lastString);
                const csvData = await response.text();

                // Parse the CSV data
                const parsedData = Highcharts.data({
                    csv: csvData,
                    parsed: function (columns) {
                        console.log(columns);
                        // Process the parsed data and create series
                        const categories = columns[0].slice(1).map((timestamp) => {
                            const date = new Date(parseInt(timestamp));
                            return `${date.getUTCHours()}:${date.getUTCMinutes()}`;
                        });

                        // Process the subsequent columns as series data
                        const seriesData = columns.slice(1).map((column, index) => {
                            return {
                                name: column[0],
                                data: column.slice(1).map(Number),
                                marker: {
                                    radius: 3,
                                    states: {
                                        hover: {
                                            radius: 4 // Set the desired radius (size) for the points on hover
                                        }
                                    }
                                }
                            };
                        });
                        // Calculate the tick interval based on the desired number of labels
                        const desiredLabelCount = 6; // Adjust this value as per your requirement
                        const tickInterval = Math.floor(categories.length / desiredLabelCount);

                        // Update the chart options with the parsed data
                        setChartOptions((prevOptions) => ({
                            ...prevOptions,
                            xAxis: {
                                ...prevOptions.xAxis,
                                categories, // Assign the extracted categories to the x-axis
                                tickInterval
                            },
                            series: seriesData
                        }));
                    }
                });
            } catch (error) {
                alert("Error fetching or parsing CSV data");
            }
        };

        fetchData();
    }, [csvUrl]);

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
            />
        </Box>
    )
}

export default StockGraph;
