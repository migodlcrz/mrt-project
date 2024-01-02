import React from 'react'
import Navbar from '../../../../components/NavBar';

function Update() {
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
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">UPDATE BEEP CARD</h5>
          <div className="my-3">


          </div>
        </div>
      </div>
    </div>
  )
}

export default Update;