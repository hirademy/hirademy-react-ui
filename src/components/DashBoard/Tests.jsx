import React, { useState } from 'react';

const Tests = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle test/assignment submission logic here
    alert('Test/Assignment submitted successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Take Test/Assignment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="question1">
            Question 1
          </label>
          <textarea
            id="question1"
            name="question1"
            value={answers.question1}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="question2">
            Question 2
          </label>
          <textarea
            id="question2"
            name="question2"
            value={answers.question2}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="question3">
            Question 3
          </label>
          <textarea
            id="question3"
            name="question3"
            value={answers.question3}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          Submit Test/Assignment
        </button>
      </form>
    </div>
  );
};

export default Tests;
