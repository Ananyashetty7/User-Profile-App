import { useEffect, useState } from "react";
import "../App.css";
import { FaPhoneAlt, FaVenusMars } from "react-icons/fa"; //Importing icons

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=1");
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <p className="loading-text">Loading...</p>;
  }

  // Capitalize gender
  const formattedGender = user.gender.charAt(0).toUpperCase() + user.gender.slice(1);

  return (
    <div className="container">
      <div className="profile-card">
        {/* Profile Image */}
        <div className="profile-image">
          <img src={user.picture.large} alt="Profile" />
        </div>

        {/* User Details */}
        <div className="profile-details">
          <p className="name">{user.name.first} {user.name.last}</p>
          <p className="info"><FaVenusMars className="icon" /> {formattedGender}</p>
          <p className="info"><FaPhoneAlt className="icon" /> {user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

