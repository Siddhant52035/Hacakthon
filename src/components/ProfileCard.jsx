import { Link } from "react-router-dom";
import useUserStore from "../store/useUserStore";

const ProfileCard = () => {
  const getUser = useUserStore((state) => state.getUser);
  const user = getUser();

  const handleLogout = () => {
    const logout = useUserStore((state) => state.logout);

    logout();
  };

  return (
    <div className="absolute top-12 right-[-40px] w-48 bg-gray-300 flex flex-col items-center shadow-xl rounded-xl px-6 py-4 z-50">
      <ul className="nav-ul">
        <li key="1" className="nav-li     ">
          <Link to="/profile" className="nav-li_a">
            {user?.firstName} {user?.lastName}
          </Link>
        </li>
        <li key="2" className="nav-li">
          <Link to="/edit-profile" className="nav-li_a">
            Edit Profile
          </Link>
        </li>
        <li key="3" className="nav-li">
          <button className="nav-li_a">Log Out</button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
