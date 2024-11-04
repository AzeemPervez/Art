"use client";

import { useState } from "react";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to go to the next image
  const nextImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500); // Animation duration matches Tailwind's transition
    }
  };

  // Function to go to the previous image
  const prevImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500); // Animation duration matches Tailwind's transition
    }
  };

  // Function to generate a downloadable filename from the image path
  const getImageFileName = (url: string) => {
    return url.substring(url.lastIndexOf("/") + 1);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side Navbar */}
      <div className="w-1/4 bg-blue-900 text-white py-10 px-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Menu</h1>
        <ul className="space-y-4">
          <li>
            <a href="#home" className="hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="/animal.tsx" className="hover:text-blue-300">
              Animals
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-300">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-300">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Carousel Section */}
      <div className="w-3/4 flex flex-col items-center justify-center">
        <div className="relative w-full max-w-4xl">
          <div className="flex items-center justify-center">
            {/* Carousel Image with fade animation */}
            <img
              key={currentIndex} // To trigger re-render on index change
              src={images[currentIndex]}
              alt="Carousel"
              className={`w-full h-96 object-cover rounded-lg shadow-lg transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-3 rounded-full shadow-md hover:bg-blue-500"
          >
            &lt;
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-3 rounded-full shadow-md hover:bg-blue-500"
          >
            &gt;
          </button>
        </div>

        {/* Image Indicators */}
        <div className="flex space-x-2 mt-6">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-blue-200"
              }`}
            ></div>
          ))}
        </div>

        {/* Download Button */}
        <a
          href={images[currentIndex]}
          download={getImageFileName(images[currentIndex])}
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Download Image
        </a>
      </div>
    </div>
  );
}
