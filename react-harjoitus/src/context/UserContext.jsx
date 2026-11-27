import { createContext, useState } from "react";
import { useAuthentication, useUser } from "../hooks/apiHooks.js";
import { useNavigate, useLocation } from "react-router";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const { postLogin } = useAuthentication();
  const { getUserByToken } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (credentials) => {
    try {
        const result = await postLogin(credentials);

        localStorage.setItem("token", result.token);
        setUser(result.user);
        navigate("/");
    } catch (error) {
        console.error("Login failed: ", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };    

  const handleAutoLogin = async () => {
    const token = localStorage.getItem("token");

    if (token) {
        try {
            const result = await getUserByToken(token);
            setUser(result.user);
            console.log("Current location: ", location.pathname);
            navigate(location.pathname);
        } catch (error) {
            console.error("Auto login failed: ", error);
        }
    };




  };
  // Seuraavaksi toteutamme:
  // handleLogin()
  // handleLogout()
  // handleAutoLogin()

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout, handleAutoLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };