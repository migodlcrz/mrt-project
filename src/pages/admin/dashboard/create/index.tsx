import React, { useState } from 'react';
import Navbar from '../../../../components/NavBar';

function Create() {
  const [uid, setUid] = useState('');
  const [screenUid, displayUid] = useState('');
  const [newStationName, setNewStationName] = useState('');

  const generateRandomUid = () => {
    const randomUid = Math.floor(Math.random() * 100000000000).toString();
    setUid(randomUid);
  };

  const clearUid = () => {
    displayUid(uid);
    setUid('');
  };

  const handleNewStationChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setNewStationName(event.target.value);
  };

  const addNewStation = () => {
    // Logic to add a new station
    console.log(`Adding new station: ${newStationName}`);
    // You can implement the logic to add a new station as per your requirements
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex items-center justify-center h-screen">
        {/* Card for generating UID */}
        <div className="max-w-xl w-full p-6 bg-white border border-gray-200 rounded-lg shadow mx-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">GENERATE BEEP CARD</h5>
          <div className="my-3">
            <label htmlFor="UID" className="block text-xl font-medium text-gray-700 my-1">
              UID:
            </label>
            <div className="max-w-xl w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
              {uid}
            </div>
          </div>
          <div className="flex flex-auto justify-between">
            <button
              type="button"
              onClick={generateRandomUid}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Generate
            </button>
            <button
              type="button"
              onClick={clearUid}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Confirm
            </button>
          </div>
          <div>
            {screenUid && (
              <div className="mt-4 text-gray-700 ">
                <p>Confirmed UID:</p>
                <p className="font-bold">{screenUid}</p>
              </div>
            )}
          </div>
        </div>

        {/* Card for adding a new station */}
        <div className="max-w-xl w-full p-6 bg-white border border-gray-200 rounded-lg shadow mx-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">ADD NEW STATION</h5>
          <div className="my-3">
            <label htmlFor="newStation" className="block text-xl font-medium text-gray-700 my-1">
              Station Name:
            </label>
            <input
              type="text"
              id="newStation"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter station name"
              value={newStationName}
              onChange={handleNewStationChange}
            />
          </div>
          <button
            type="button"
            onClick={addNewStation}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Add Station
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
