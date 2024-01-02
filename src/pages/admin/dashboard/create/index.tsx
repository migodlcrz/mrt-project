import React, { useState } from 'react';
import Navbar from '../../../../components/NavBar';

function Create() {
  const [uid, setUid] = useState('');
  const [screenUid, displayUid] = useState('');

  const generateRandomUid = () => {
    const randomUid = Math.floor(Math.random() * 100000000000).toString();
    setUid(randomUid);
  };

  const clearUid = () => {
    displayUid(uid);
    setUid('');
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        className="flex items-center justify-center h-screen"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/card-bg.webp)`, backgroundSize: 'cover' }}
      >
        <div className="max-w-xl w-full p-6 bg-white border border-gray-200 rounded-lg shadow mx-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">GENERATE BEEP CARD</h5>
          <div className="my-3">
            <label htmlFor="UID" className="block text-xl font-medium text-gray-700 my-1">
              UID:
            </label>
            <div className="max-w-xl w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
              {uid}
            </div>
            <label htmlFor=""></label>
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
      </div>
    </div>
  );
}

export default Create;
