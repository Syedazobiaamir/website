"use client";

import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineBell,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [alertCount] = useState(2); // Removed unused setAlertCount
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoggedIn = false;

  const handleCartClick = () => {
    router.push("/Card");
  };

  const handleHeartClick = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  };

  return (
    <header className="bg-yellow-100 shadow-md sticky top-0 z-50 text-lg md:text-xl">
      <nav className="container mx-auto flex justify-between items-center py-6 px-10">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-800">Your Store</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-gray-600 font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6 text-gray-600">
          <AiOutlineSearch
            size={30}
            className="cursor-pointer hover:text-gray-800"
          />
          <AiOutlineHeart
            size={30}
            className="cursor-pointer hover:text-gray-800"
            onClick={handleHeartClick}
          />
          <div className="relative">
            <AiOutlineBell
              size={30}
              className="cursor-pointer hover:text-gray-800"
            />
            {alertCount > 0 && (
              <span className="absolute -top-2 -right-2 text-sm font-bold bg-red-500 text-white rounded-full px-2 py-0.5">
                {alertCount}
              </span>
            )}
          </div>
          <AiOutlineShoppingCart
            size={30}
            className="cursor-pointer hover:text-gray-800"
            onClick={handleCartClick}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-yellow-100 w-full p-6`}
      >
        <ul className="space-y-6 text-gray-600 font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>

        <div className="flex flex-col items-start mt-6 space-y-6">
          <AiOutlineSearch
            size={30}
            className="cursor-pointer text-gray-600 hover:text-gray-800"
          />
          <AiOutlineHeart
            size={30}
            className="cursor-pointer text-gray-600 hover:text-gray-800"
            onClick={handleHeartClick}
          />
          <div className="relative">
            <AiOutlineBell
              size={30}
              className="cursor-pointer text-gray-600 hover:text-gray-800"
            />
            {alertCount > 0 && (
              <span className="absolute -top-2 -right-2 text-sm font-bold bg-red-500 text-white rounded-full px-2 py-0.5">
                {alertCount}
              </span>
            )}
          </div>
          <AiOutlineShoppingCart
            size={30}
            className="cursor-pointer text-gray-600 hover:text-gray-800"
            onClick={handleCartClick}
          />
        </div>
      </div>
    </header>
  );
}
