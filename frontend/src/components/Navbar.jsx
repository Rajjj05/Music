/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, useEffect, useRef } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { Search, Menu } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  const { user } = useUser();
  const { openSignIn, openSignUp, signOut } = useClerk();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleProfileClick = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the document
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-20 bg-black/95 backdrop-blur-md px-4 py-2 flex items-center gap-4 relative">
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 hover:bg-zinc-800 rounded-full"
      >
        <Menu className="w-6 h-6" />
      </button>
      <div className="flex-1 max-w-2xl mx-auto relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
        <input
          type="search"
          placeholder="Search songs, albums, artists..."
          className="w-full bg-zinc-900 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>
      <div className="flex items-center">
        {user ? (
          <>
            <button className="relative" onClick={handleProfileClick}>
              <img
                src={user.imageUrl}
                alt={user.firstName || "User"}
                className="w-8 h-8 rounded-full cursor-pointer"
              />

              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 bg-black/80 rounded-lg shadow-lg p-2 z-50"
                  style={{
                    minWidth: "180px",
                  }}
                >
                  <ul className="text-white">
                    <li
                      className="px-4 py-2 cursor-pointer text-red-500 hover:bg-zinc-800"
                      onClick={() => signOut()}
                    >
                      Sign Out
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </>
        ) : (
          <button
            onClick={openSignIn}
            className="text-sm bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Join
          </button>
        )}
      </div>
    </nav>
  );
}
