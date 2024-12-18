import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-very light bg-yellow-100 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-8">
        
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-7xl font-bold text-gray-800 leading-tight">
          Rocket Single Seater
          </h1>
          {/* <p className="text-lg text-gray-600">
            Discover the best products tailored for your style and needs. Shop now and redefine your fashion.
          </p> */}
          <button className="mt-4 px-8 py-3  text-gray-800 text-lg font-semibold rounded-md hover:bg-orange-600 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0">
          <Image
            src="/couch.png" // Add the appropriate image path
            alt="Hero"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
