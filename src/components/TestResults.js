// src/components/TestResult.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TestResults = () => {
  const data = {
    labels: ['Test 1', 'Test 2', 'Test 3', 'Test 4'],
    datasets: [
      {
        label: 'Scores',
        data: [85, 90, 78, 88], // Example scores
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Test Scores',
      },
    },
  };

  return (
    <div className="test-results-container">
      <h2>Your Test Results</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TestResults;
