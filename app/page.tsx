"use client";

import { useState } from "react";

// Array of 10 images for the main carousel
const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image9.jpg",
  "/images/image10.jpg",
];

// Updated nav items with "Art" at the top and "Sky" at the bottom
const itemNames = [
  "Art",
  "Desert",
  "Forest",
  "Beach",
  "Space",
  "City",
  "Anime",
  "Games",
  "Wallpapers",
  "Sky",
];

// Define moreImages as a Record<number, string[]> with 9 images for each category
const moreImages: Record<number, string[]> = {
  0: ["/images/image1.jpg", "/images/art2.jpg", "/images/art3.jpg", "/images/art4.jpg", "/images/art5.jpg", "/images/art6.jpg", "/images/art7.jpg", "/images/art8.jpg", "/images/art9.jpg"],
  1: ["/images/image2.jpg", "/images/desert2.jpg", "/images/desert3.jpg", "/images/desert4.jpg", "/images/desert5.jpg", "/images/desert6.jpg", "/images/desert7.jpg", "/images/desert8.jpg", "/images/desert9.jpg"],
  2: ["/images/image3.jpg", "/images/forest2.jpg", "/images/forest3.jpg", "/images/forest4.jpg", "/images/forest5.jpg", "/images/forest6.jpg", "/images/forest7.jpg", "/images/forest8.jpg", "/images/forest9.jpg"],
  3: ["/images/image4.jpg", "/images/beach2.jpg", "/images/beach3.jpg", "/images/beach4.jpg", "/images/beach5.jpg", "/images/beach6.jpg", "/images/beach7.jpg", "/images/beach8.jpg", "/images/beach9.jpg"],
  4: ["/images/image5.jpg", "/images/space2.jpg", "/images/space3.jpg", "/images/space4.jpg", "/images/space5.jpg", "/images/space6.jpg", "/images/space7.jpg", "/images/space8.jpg", "/images/space9.jpg"],
  5: ["/images/image6.jpg", "/images/city2.jpg", "/images/city3.jpg", "/images/city4.jpg", "/images/city5.jpg", "/images/city6.jpg", "/images/city7.jpg", "/images/city8.jpg", "/images/city9.jpg"],
  6: ["/images/image7.jpg", "/images/anime2.jpg", "/images/anime3.jpg", "/images/anime4.jpg", "/images/anime5.jpg", "/images/anime6.jpg", "/images/anime7.jpg", "/images/anime8.jpg", "/images/anime9.jpg"],
  7: ["/images/image8.jpg", "/images/games2.jpg", "/images/games3.jpg", "/images/games4.jpg", "/images/games5.jpg", "/images/games6.jpg", "/images/games7.jpg", "/images/games8.jpg", "/images/games9.jpg"],
  8: ["/images/image9.jpg", "/images/wallpaper2.jpg", "/images/wallpaper3.jpg", "/images/wallpaper4.jpg", "/images/wallpaper5.jpg", "/images/wallpaper6.jpg", "/images/wallpaper7.jpg", "/images/wallpaper8.jpg", "/images/wallpaper9.jpg"],
  9: ["/images/image10.jpg", "/images/sky2.jpg", "/images/sky3.jpg", "/images/sky4.jpg", "/images/sky5.jpg", "/images/sky6.jpg", "/images/sky7.jpg", "/images/sky8.jpg", "/images/sky9.jpg"],
};

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showDialog, setShowDialog] = useState(false); // State to show/hide dialog
  const [selectedImages, setSelectedImages] = useState<string[]>([]); // Images for dialog based on nav item
  const [selectedItem, setSelectedItem] = useState(itemNames[0]); // Track the selected nav item name
  const [isPageCleared, setIsPageCleared] = useState(false); // Track if the page is cleared

  // Function to handle navbar item click and set the image
  const handleNavClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setSelectedItem(itemNames[index]); // Update selected item heading
      setSelectedImages(moreImages[index] || []); // Update dialog images based on nav item
      setIsAnimating(false);
    }, 500);
  };

  // Function to generate a downloadable filename from the image path
  const getImageFileName = (url: string) => {
    return url.substring(url.lastIndexOf("/") + 1);
  };

  // Function to clear the page
  const handleUploadClick = () => {
    setIsPageCleared(true);
  };

  // If the page is cleared, show an empty page
  if (isPageCleared) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <h2 className="text-2xl text-gray-500">Page Cleared</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navbar with Upload Button */}
      <div className="w-full bg-blue-800 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Art Gallery</h1>
        <button
          onClick={handleUploadClick}
          className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Upload
        </button>
      </div>

      {/* Hero Image Section */}
      <div className="w-full h-64 bg-cover bg-center relative" style={{ backgroundImage: `url('/images/image5.jpg')` }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">Welcome to Our Art Zone</h1>
        </div>
      </div>

      <div className="flex">
        {/* Left Side Navbar with Modern Styling */}
        <div className="w-1/6 bg-gradient-to-b from-blue-800 to-blue-600 text-white py-10 px-6 flex flex-col items-center rounded-r-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-8">Gallery</h1>
          <ul className="space-y-4 w-full">
            {itemNames.map((name, index) => (
              <li key={index} className="w-full">
                <button
                  onClick={() => handleNavClick(index)}
                  className="w-full text-left px-4 py-2 rounded-lg transition-transform duration-300 transform hover:bg-blue-500 hover:scale-105 focus:outline-none relative"
                >
                  <span className="relative z-10">{name}</span>
                  <span className="absolute inset-0 w-full h-[2px] bg-white rounded-full bottom-1 left-4 transition-transform duration-300 transform scale-x-0 hover:scale-x-100"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Carousel Section with Margin on Top */}
        <div className="w-3/4 flex flex-col items-center justify-center mt-10">
          {/* Selected Item Heading */}
          <h2 className="text-3xl font-bold mb-6 text-blue-800">{selectedItem}</h2>
          
          <div className="relative w-full max-w-4xl">
            <div className="flex items-center justify-center">
              {/* Carousel Image with fade-in animation and new height */}
              <img
                key={currentIndex} // To trigger re-render on index change
                src={images[currentIndex]}
                alt={`Carousel Image ${currentIndex + 1}`}
                className={`w-full h-[30rem] object-cover rounded-lg shadow-lg transition-opacity duration-500 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
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

          {/* Buttons */}
          <div className="flex space-x-4 mt-6 mb-10">
            <a
              href={images[currentIndex]}
              download={getImageFileName(images[currentIndex])}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
            >
              Download Image
            </a>
            <button
              onClick={() => setShowDialog(true)}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 focus:outline-none"
            >
              Show More
            </button>
          </div>
        </div>
      </div>

      {/* Dialog Box */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[80vw] h-[80vh] overflow-y-auto relative">
            <button
              onClick={() => setShowDialog(false)}
              className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            >
              Cancel
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Additional Images</h2>
            <div className="grid grid-cols-3 gap-4">
              {selectedImages.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image}
                    alt={`Additional Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-125 cursor-pointer"
                  />
                  {/* Download button overlay */}
                  <a
                    href={image}
                    download={getImageFileName(image)}
                    className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm font-bold rounded-lg transition-opacity duration-300"
                  >
                    Download Image
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
