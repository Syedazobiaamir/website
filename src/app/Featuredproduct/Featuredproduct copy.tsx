"use client";
import Image from "next/image";

export default function Featuredproduct() {
  return (
    <section className="bg-[#FFF8E6] py-16">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src="/no.png" // Replace with the actual image URL
            alt="Asgaard sofa"
            width={800}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left mt-8 md:mt-0 md:ml-12">
          <p className="text-gray-600 text-lg font-medium mb-2 text-center">New Arrivals</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Asgaard sofa</h2>
          <a
            href="#"
            className="bg-white text-gray-800 border border-gray-800 py-2 px-6 rounded-full font-medium hover:bg-gray-800 hover:text-white transition duration-300 justify-center "
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
