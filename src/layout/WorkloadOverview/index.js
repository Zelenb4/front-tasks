import React, { useCallback } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

const WorkloadOverview = ({ start, countBefore, point, countAfter, end, selectedDays }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const labels = [
        "Monday",
        "Tuesday",
        "Wednesady",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: "Overview for a week"
            }
        },
        // borderWidth: 1,
        barThickness: '60',
        // barThickness: 94,
        scale: {
            ticks: {
                display: true,
                stepSize: 1,
            },
            y: {
                suggestedMin: 0,
                suggestedMax: 4,
            }
        }
    };
    let result = []
    const countDate = useCallback(value => {
        for (let i = 0; i < selectedDays.length; i++) {
            if (selectedDays[i].active) {
                result[i] = value
            } else {
                result[i] = 1
            }
        }
        return result;
    }, [result, selectedDays]);

    const data = {
        labels,
        datasets: [
            {
                label: "Number of workers in 1 day",
                data: countDate(countBefore),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
            {
                label: "Number of workers in 1 day",
                data: countDate(countAfter),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ]
    };

    return <Bar options={options} data={data} />;
};

export default WorkloadOverview
