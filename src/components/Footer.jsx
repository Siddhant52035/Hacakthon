import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#073750] pt-12">
      <div className="mx-16 flex justify-around gap-28 ">
        <div>
          <div className="flex items-center gap-4">
            <h1 className="text-white  text-3xl font-semibold">Code Craft</h1>
          </div>

          <p className="text-xl text-[#839BA8] flex flex-col my-6">
            Why wait more? Start your <span>learning</span>{" "}
            <span>journey now.</span>
          </p>
          <div className="flex gap-4 text-[#839BA8] text-3xl my-6 ">
            <FaFacebookSquare className="hover:text-white duration-300 delay-150" />
            <LuInstagram className="hover:text-white duration-300 delay-150" />
            <FaGithub className="hover:text-white duration-300 delay-150" />
            <FaLinkedin className="hover:text-white duration-300 delay-150" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl text-white font-semibold mb-4">
            Our Courses
          </h1>
          <div className="text-[#839BA8] flex flex-col gap-3 text-xl">
            <p className="hover:text-white duration-300 delay-150">
              <Link to="/physics">Physics</Link>
            </p>
            <p className="hover:text-white duration-300 delay-150">
              <Link to="/chemistry">Chemistry</Link>
            </p>
            <p className="hover:text-white duration-300 delay-150">
              <Link to="/biology">Biology</Link>
            </p>
            <p className="hover:text-white duration-300 delay-150">
              <Link to="/Math">Math</Link>
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl text-white font-semibold mb-4">Help Line</h1>
          <div className="text-[#839BA8] flex flex-col gap-3 text-xl">
            <p className="hover:text-white duration-300 delay-150">
              Contact us
            </p>
            <p className="hover:text-white duration-300 delay-150">FAQs</p>
            <p className="flex flex-col hover:text-white duration-300 delay-150">
              Grievance <span>Redressal</span>
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl text-white font-semibold mb-4">
            Other Links
          </h1>
          <div className="text-[#839BA8] flex flex-col gap-3 text-xl">
            <p className="hover:text-white duration-300 delay-150">Blogs</p>
            <p className="hover:text-white duration-300 delay-150">Students</p>
            <p className="hover:text-white duration-300 delay-150">
              Ambassador
            </p>
            <p className="hover:text-white duration-300 delay-150">Careers</p>
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center text-xl text-[#839BA8] border-[1px] border-transparent border-t-[#839BA8] p-8  mt-14 mx-16">
        <p className="hover:text-white duration-300 delay-150">
          {" "}
          &copy; 2024 CodeCraft Private Limited
        </p>
        <p className="hover:text-white duration-300 delay-150">About us</p>
        <p className="hover:text-white duration-300 delay-150">Cookies</p>
        <p className="hover:text-white duration-300 delay-150">
          Privacy Policy
        </p>
        <p className="hover:text-white duration-300 delay-150">
          Terms and Condition
        </p>
        <p className="hover:text-white duration-300 delay-150">Refund Policy</p>
      </div>
    </div>
  );
};

export default Footer;
