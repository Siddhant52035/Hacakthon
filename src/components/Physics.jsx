import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { videoData, physicsChapters } from "../constants";
import ChapterCard from "./ChapterCard";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const Physics = () => {
  const [showAllChapters, setShowAllChapters] = useState(false); // State to toggle chapters view
  const [showAllVideos, setShowAllVideos] = useState(false); // State to toggle videos view

  // Number of items to show initially (1 row)
  const itemsPerRow = 3;

  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#F3F8FF] text-center flex flex-col justify-center items-center py-24">
        <div className="w-[878px] flex flex-col items-center justify-center">
          <h1 className="text-6xl font-semibold">
            Nepal Best <span className="text-[#719BDD]">Physics</span> Courses
          </h1>
          <p className="text-2xl my-12">
            Simplify your Physics exam preparation with the best-in-class video
            lectures, QBank 6.0, Notes 6.0, Rapid Revision 6.0, Test Series, and
            more by the Top Medical Educators.
          </p>
          <div className="flex gap-20">
            <Link
              className="flex items-center gap-2 text-2xl bg-[#2EA0D7] hover:text-black hover:bg-transparent hover:border-[2px] hover:border-[#2EA0D7] text-white py-3 px-4 rounded-xl"
              to="/signup"
            >
              Enrol Now
              <span>
                <MdArrowForwardIos />
              </span>
            </Link>

            <Link
              className="flex items-center mx-4 gap-2 text-2xl text-black bg-transparent border-[2px] border-[#2EA0D7] hover:bg-[#2EA0D7] hover:text-white text-white py-2 px-4 rounded-xl"
              to="/test"
            >
              Take a Test
            </Link>
          </div>
        </div>
      </div>

      {/* Physics Chapters Section */}
      <div className="px-24 py-16 bg-[#FEF5E6]">
        <div className="grid grid-cols-3 gap-8 mb-8">
          {physicsChapters
            .slice(0, showAllChapters ? physicsChapters.length : itemsPerRow) // Show all or limited chapters
            .map((item) => (
              <ChapterCard key={item.key} name={item.name} desc={item.desc} />
            ))}
        </div>

        {/* View More/Less Button for Chapters */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAllChapters((prev) => !prev)} // Toggle the chapters view
            className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
          >
            {showAllChapters ? (
              <span className="text-gray-100 text-lg font-bold flex items-center gap-2 flex-nowrap">
                View Less
                <span>
                  <FaAngleDoubleDown />
                </span>
              </span>
            ) : (
              <span className="text-gray-100 text-lg font-bold  flex items-center gap-2 justify-center">
                View More
                <span>
                  <FaAngleDoubleUp />
                </span>
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className="px-24 py-16">
        <div className="grid grid-cols-3 gap-8 mb-8">
          {videoData
            .slice(0, showAllVideos ? videoData.length : itemsPerRow) // Show all or limited videos
            .map((item) => (
              <VideoCard
                key={item.id}
                image={item.thumbnail}
                duration={item.duration}
                desc={item.description}
                title={item.title}
                views={item.views}
                publishDate={item.publishedDate}
              />
            ))}
        </div>

        {/* View More/Less Button for Videos */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAllVideos((prev) => !prev)} // Toggle the videos view
            className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
          >
            {showAllVideos ? (
              <span className="text-gray-100 text-lg font-bold flex items-center gap-2 flex-nowrap">
                View Less
                <span>
                  <FaAngleDoubleDown />
                </span>
              </span>
            ) : (
              <span className="text-gray-100 text-lg font-bold  flex items-center gap-2 justify-center">
                View More
                <span>
                  <FaAngleDoubleUp />
                </span>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Physics;
