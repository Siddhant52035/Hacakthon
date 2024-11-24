import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import useUserStore from "../store/useUserStore";

const Topbar = () => {
  const [isVerified, setIsVerified] = useState(false); // User login status
  const [showProfile, setShowProfile] = useState(false); // Controls ProfileCard visibility
  const profileRef = useRef(null);

  // Get user data from store
  const getUser = useUserStore((state) => state.getUser);
  const user = getUser();

  // Check if user is verified
  useEffect(() => {
    if (user.fullName !== "") {
      setIsVerified(true);
    }
  }, [user]); // Dependency on 'user' ensures this runs when user data changes

  // Close ProfileCard when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center top-0 bg-transparent justify-between py-4 px-10 z-40">
      {/* Header Logo */}
      <Link to="/" className="w-60 h-8 mt-[-70px] ms-[-40px]">
        <img src="public/assets/12.png" alt="Logo" />
      </Link>

      {/* User Actions */}
      <div ref={profileRef} className="relative">
        {isVerified ? (
          <>
            <button
              className="w-10 h-10 border-none rounded-full"
              onClick={() => setShowProfile((prev) => !prev)}
            >
              <img
                src={user.avatar}
                alt="User Profile"
                className="w-full h-full rounded-full"
              />
            </button>

            {/* Conditionally render the ProfileCard */}
            {showProfile && <ProfileCard />}
          </>
        ) : (
          <div className="p-2 bg-[#303153] rounded-lg group">
            <Link to="/login">
              <span className="font-normal text-gray-200 text-pretty text-lg ps-4 group-hover:shadow-xl">
                Login
              </span>
            </Link>
            <span className="font-thin text-3xl text-white"> | </span>
            <Link to="/signup">
              <span className="font-normal text-pretty text-gray-200 text-lg pe-2">
                Sign Up
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
