// layout.tsx
import './globals.css'; // Import your Tailwind CSS styles
import React from 'react';

export const metadata = {
  title: 'GameZone',
  description: 'Play the best online games for free!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-blue-600 text-white">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">ArtZone</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto p-4 text-center">
            &copy; {new Date().getFullYear()} GameZone. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
