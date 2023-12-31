import React from 'react';
import Navbar from '../../../../components/NavBar';

function Read() {
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
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">VIEW BEEP CARD</h5>
          <div className="my-3">
            {/* Input textbox for accepting only numbers */}
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter a number"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
