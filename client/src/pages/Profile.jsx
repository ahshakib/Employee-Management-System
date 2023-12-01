import profile_img from "../assets/img/default.jpg";
import "../index.css";
import userService from "../services/userService";

const Profile = () => {
  const { email, firstName, lastName } = userService.userProfile();

  return (
    <div className="container">
      <div className="up"></div>
      <div className="down">
        <img src={profile_img} alt="" />
        <div className="profile-title">Hello, {lastName}</div>
        <div className="profile-desc">
          <p>Full Name: {`${firstName} ${lastName}`}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
