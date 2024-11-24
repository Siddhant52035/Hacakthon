import { AiFillAndroid } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-[#E3EFFF] flex items-center justify-around py-12 ">
        <div className=" w-[700px]">
          <h1 className="text-[#303153] text-5xl font-semibold leading-[64px]">
            Kickstart Your Exam Preparation with the{" "}
            <span className="text-[#249DD8]">Dream Team</span>
          </h1>
          <p className="text-[#303153] text-2xl my-6">
            Engaging Videos, top-notch study material, high yield QBank and the
            best of everything - just a click away.
          </p>
          <p className="text-[#303153] font-semibold text-2xl mb-10">
            Select your course:
          </p>
          <div className="flex gap-4 flex-wrap text-xl font-semibold">
            <button className="text-[#303153] py-2 px-8 bg-white rounded-3xl">
              <Link to="/physics"> Physics</Link>
            </button>
            <button className="text-[#303153] py-2 px-8 bg-white rounded-3xl">
              <Link to="/chemistry">Chemistry</Link>
            </button>
            <button className="text-[#303153] py-2 px-8 bg-white rounded-3xl">
              <Link to="/biology">Biology</Link>
            </button>
            <button className="text-[#303153] py-2 px-8 bg-white rounded-3xl">
              <Link to="/math">Math</Link>
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://image.prepladder.com/content/IGWbllX30tgsucar1ZG61629373757.svg"
            alt="Error"
          />
        </div>
      </div>
      {/* second part starts here */}
      <div className="flex flex-col justify-center items-center mb-8 px-16">
        <div className="text-center">
          <h1 className="text-4xl text-[#303153] font-semibold mt-20 mb-6">
            Why Choose <span className="text-[#249DD8]">CodeCraft?</span>
          </h1>
          <p className="text-2xl">
            To elevate your preparation with the best-in-class resources
          </p>
        </div>

        <div className="flex  gap-8 my-12 justify-center items-center">
          <div className="w-[400px] flex flex-col justify-center items-center">
            <img
              src="https://image.prepladder.com/content/YfY7gin3T67jCYAmOKDE1709892261.svg"
              alt="Error"
            />
            <div className="text-center">
              <h1 className="text-[#303153] text-3xl font-semibold my-4">
                Top Quality Content
              </h1>
              <p className="text-xl text-center w-[80%]">
                Enrich your knowledge with highly informative, engaging content
                crafted by the Dream Team.
              </p>
            </div>
          </div>

          <div className="w-[400px] flex flex-col justify-center items-center">
            <img
              src="https://image.prepladder.com/content/vJH8Yo6OROiGdcEZBQXX1709892177.svg"
              alt="Error"
            />
            <h1 className="text-[#303153] text-3xl font-semibold my-4">
              Top Quality Content
            </h1>
            <p className="text-xl text-center w-[80%]">
              Enrich your knowledge with highly informative, engaging content
              crafted by the Dream Team.
            </p>
          </div>

          <div className="w-[400px] flex flex-col justify-center items-center">
            <img
              src="https://image.prepladder.com/content/4GAp8nuh10Fm05xis87E1709892098.svg"
              alt="Error"
            />
            <h1 className="text-[#303153] text-3xl font-semibold my-4">
              Top Quality Content
            </h1>
            <p className="text-xl text-center w-[80%]">
              Enrich your knowledge with highly informative, engaging content
              crafted by the Dream Team.
            </p>
          </div>
        </div>
      </div>

      {/* Third part start here */}

      <div className="flex items-center justify-center gap-12 py-16 px-16">
        <div className="w-[684px]">
          <h1 className="text-5xl text-[#249DD8] font-semibold">
            Videos,{" "}
            <span className="text-[#303153]">
              QBank, Test Series, Notes & More
            </span>
          </h1>
          <p className="text-2xl text-[#333456] my-6">
            Access PrepLadder on the device of your choice & reap the benefits
            of top-notch content-be it IOS, Android or Laptop.
          </p>
          <div className="text-[#9B98C8] flex text-4xl mb-6">
            <AiFillAndroid />
            <FaApple />
          </div>
          <button className="text-2xl bg-[#303153] text-white py-3 px-7 rounded-lg">
            Try now for free
          </button>
        </div>

        <div>
          <img
            src="https://image.prepladder.com/content/I4t3DAq3hiwJB3czIj141709892196.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
