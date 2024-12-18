"use client";
import Image from "next/image";

export default function ProductDisplay() {
  return (
    <section className=" bg-gray-100 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-8 bg-gray-100">

        {/* Left Content */}
        <div className="">
        <div className="mt-8 md:mt-0">
          <Image
            src="/capturetable.png" // Add the appropriate image path
            alt="Hero"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
            priority
          />
          <h2 className="text-3xl">Side table</h2>
          
          <a
              href="#"
              className="text-black-600 hover:text-grey underline text-2xl"
            >
              View More
            </a>
        </div>
         
          
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0">
          <Image
            src="/my.png" // Add the appropriate image path
            alt="Hero"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
            priority
          />
          <h2 className="text-3xl">Side table</h2>
          <a
              href="#"
              className="text-grey-600 hover:text-black underline text-base text size-200"
            >
              View More
            </a> 
        </div>
      </div>
    </section>
  );
}