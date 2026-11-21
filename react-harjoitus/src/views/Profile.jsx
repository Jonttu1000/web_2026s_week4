import { useState, useEffect } from "react";
import { useUser } from "../hooks/apiHooks.js";

const Profile = () => {
  const [user, setUser] = useState(null);

  const { getUserByToken } = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.log("Token not found!");
          return;
        }

        const userData = await getUserByToken(token);
        console.log("User data: ", userData);
        setUser(userData.user);
      } catch (error) {
        console.error("Failed to fetch user.");
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading user info...</p>;
  }
  return (
    <div>
        <h1>Profile Info</h1>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
