import { useUserContext } from "../hooks/contextHooks.js";

const Logout = () => {
  const { handleLogout } = useUserContext();

  return (
    <>
      <h1>Logout</h1>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Logout;
