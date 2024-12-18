"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function Page() {
  // Define the type for status
  type Status = "success" | "error" | "loading" | null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>(null);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.subject.trim() === "" ||
      formData.message.trim() === ""
    ) {
      setStatus("error");
      return;
    }

    // Simulate form submission
    console.log("Form Submitted:", formData);

    // Display success message
    setStatus("success");

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      {/* Banner Section */}
      <div
        className="relative h-64 flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/com 8.jpg')", // Update to your banner image path
        }}
      >
        <h1 className="text-4xl font-bold">contact us</h1>
      </div>

      {/* Main Contact Section */}
      <main className="container mx-auto p-6 md:p-12 bg-white shadow rounded-lg mt-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-gray-500 text-center mb-10">
          For More Information About Our Products & Services, Please Feel Free
          To Contact Us. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="flex flex-col space-y-4">
            {/* Address */}
            <div className="flex items-center">
              <span className="inline-block mr-4 text-lg">📍</span>
              <div>
                <h3 className="font-bold">Address</h3>
                <p>28 New Street, Australia</p>
                <p>New York, United States</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <span className="inline-block mr-4 text-lg">📞</span>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>Mobile: +123 456 6789</p>
                <p>Hotline: 1900 888</p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-center">
              <span className="inline-block mr-4 text-lg">🕒</span>
              <div>
                <h3 className="font-bold">Working Time</h3>
                <p>Monday - Friday: 08:00 - 20:00</p>
                <p>Saturday - Sunday: 09:00 - 20:00</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-semibold rounded hover:bg-gray-700"
              >
                Submit
              </button>
              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-500">
                  Your message has been submitted successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500">
                  Please fill in all the fields before submitting.
                </p>
              )}
            </form>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-100 mt-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6 text-center">
          <div>
            <h4 className="font-bold">Free Delivery</h4>
            <p>For all orders over $50, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h4 className="font-bold">90 Days Return</h4>
            <p>If goods have problems, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h4 className="font-bold">Secure Payment</h4>
            <p>100% secure payment, consectetur adipiscing elit.</p>
          </div>
        </div>
      </footer>
      <Footer/>
    </div>
  );
}
