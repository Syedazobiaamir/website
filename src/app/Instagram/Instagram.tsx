import React from 'react'

export default function Instagram() {
  return (
    <div>
      <div className="bg-gray-50 h-200flex flex-col justify-between">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-center text-center py-12">
         
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Our Instagram
          </h1>
          <p className="text-gray-500 mb-6">Follow our store on Instagram</p>
          <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-600">
            Follow Us
          </button>
        </div>
      </div>
    </div> 
  );
}
