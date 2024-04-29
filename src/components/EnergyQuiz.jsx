import React, { useState } from 'react';

const EnergyQuiz = () => {
  const [householdMembers, setHouseholdMembers] = useState('');
  const [income, setIncome] = useState('');
  const [climate, setClimate] = useState('');
  const [estimatedEnergy, setEstimatedEnergy] = useState('');
  const [additionalQuestion, setAdditionalQuestion] = useState('');
  const [energyType, setEnergyType] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleHouseholdChange = event => {
    setHouseholdMembers(event.target.value);
  };

  const handleIncomeChange = event => {
    setIncome(event.target.value);
  };

  const handleClimateChange = event => {
    setClimate(event.target.value);
  };

  const handleEstimatedEnergyChange = event => {
    setEstimatedEnergy(event.target.value);
  };

  const handleAdditionalQuestionChange = event => {
    setAdditionalQuestion(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (householdMembers === '1' && income === 'low') {
      setEnergyType('solar');
    } else if (householdMembers === '1' && income === 'medium') {
      setEnergyType('wind');
    } else if (householdMembers === '1' && income === 'high') {
      setEnergyType('geothermal');
    } else if (householdMembers === '2-4' && income === 'low') {
      setEnergyType('solar');
    } else if (householdMembers === '2-4' && income === 'medium') {
      setEnergyType('wind');
    } else if (householdMembers === '2-4' && income === 'high') {
      setEnergyType('geothermal');
    } else if (householdMembers === '5+' && income === 'low') {
      setEnergyType('solar');
    } else if (householdMembers === '5+' && income === 'medium') {
      setEnergyType('wind');
    } else if (householdMembers === '5+' && income === 'high') {
      setEnergyType('geothermal');
    } else {
      setShowResult(false);
      return;
    }

    setShowResult(true);
  };

  return (
    <div className="mt-40 p-4 bg-gray-900 rounded-lg text-">
      <h2 className="text-2xl font-bold mb-4">Energy Recommendation Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="householdMembers"
            className="block font-semibold mb-2"
          >
            How many members are in your household?
          </label>
          <select
            id="householdMembers"
            value={householdMembers}
            onChange={handleHouseholdChange}
            className="w-full p-2 text-black border rounded"
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2-4">2-4</option>
            <option value="5+">5 or more</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="income" className="block font-semibold mb-2">
            What is your household income level?
          </label>
          <select
            id="income"
            value={income}
            onChange={handleIncomeChange}
            className="w-full text-black p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="climate" className="block font-semibold mb-2">
            Which climate do you live in?
          </label>
          <select
            id="climate"
            value={climate}
            onChange={handleClimateChange}
            className="w-full  text-black p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="tropical">Tropical</option>
            <option value="cold">Cold</option>
            <option value="wet">Wet</option>
            <option value="rocky">Rocky</option>
            <option value="dry">Dry</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="estimatedEnergy" className="block font-semibold mb-2">
            How many watts of estimated energy do you require everyday in your
            household?
          </label>
          <select
            id="estimatedEnergy"
            value={estimatedEnergy}
            onChange={handleEstimatedEnergyChange}
            className="w-full text-black p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="1200">1,200</option>
            <option value="1500">1,500</option>
            <option value="1750">1,750</option>
            <option value="2000">2,000</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="additionalQuestion"
            className="block font-semibold mb-2"
          >
            Do you have any specific energy preferences or concerns?
          </label>
          <input
            type="text"
            id="additionalQuestion"
            value={additionalQuestion}
            onChange={handleAdditionalQuestionChange}
            className="w-full text-black p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
        >
          Submit
        </button>
      </form>
      {showResult && (
        <div className="mt-4">
          <p className="text-xl font-semibold">
            Based on your answers, we recommend you to use {energyType} energy.
          </p>
        </div>
      )}
    </div>
  );
};

export default EnergyQuiz;
