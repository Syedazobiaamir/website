"use client";
import Image from "next/image";

import React from 'react'

export default function Categoriessec() {
  return (
    <div>
      <section className="bg-white py-16">
      <div className="container mx-auto px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Top Picks For You</h2>
          <p className="text-gray-600">
            Find a bright idea to suit your taste with our great selection of suspension,
            floor, and table lights.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/99new.png" // Replace with the correct image URL
              alt="Trenton modular sofa"
              width={240}
              height={174}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Trenton modular sofa...3
            </h3>
            <p className="text-lg font-medium text-gray-600 mb-2">Rs. 25,000.00</p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              View More
            </a>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/2 new.png" // Replace with the correct image URL
              alt="Granite dining table with dining chair"
              width={240}
              height={174}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Granite dining table with dining chair
            </h3>
            <p className="text-lg font-medium text-gray-600 mb-2">Rs. 25,000.00</p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              View More
            </a>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/g.png" // Replace with the correct image URL
              alt="Outdoor bar table and stool"
              width={240}
              height={174}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Outdoor bar table and stool
            </h3>
            <p className="text-lg font-medium text-gray-600 mb-2">Rs. 25,000.00</p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              View More
            </a>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center">
            <Image
              src="/4 new.png" // Replace with the correct image URL
              alt="Plain console with teak mirror"
              width={240}
              height={174}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Plain console with teak mirror
            </h3>
            <p className="text-lg font-medium text-gray-600 mb-2">Rs. 25,000.00</p>
            <a
              href="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}