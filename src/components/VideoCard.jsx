const VideoCard = ({
  image,
  duration,
  desc,
  title,
  views,
  publishDate,
  id,
}) => {
  return (
    <div className="w-[340px] bg-[#073750] text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx">
      {/* Thumbnail */}
      <div className="relative" id={id}>
        <img
          className="w-full h-1/2 object-cover"
          src={image} // Replace with actual image URL
          alt="Feel Unstoppable"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-sm px-2 py-1 rounded">
          {duration}
        </div>
      </div>

      {/* Video Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold truncate">{desc}</h3>
        <p className="text-lg text-gray-400 mt-1">{title}</p>
        <p className="text-lg text-gray-400">
          {views} • {publishDate}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
