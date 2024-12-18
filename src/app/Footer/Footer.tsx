import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-100 py-8 text-gray-700 text-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b pb-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Address</h3>
              <p>123 Example Street, Apt 101</p>
              <p>City, Country 12345</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Help</h3>
              <ul>
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Newsletter</h3>
              <p>Subscribe to our newsletter.</p>
              <div className="flex mt-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 border rounded-l w-full"
                />
                <button className="bg-gray-800 text-white px-4 py-2 rounded-r">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="text-center pt-6">&copy; 2024 MyShop. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
