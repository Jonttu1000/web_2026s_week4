import { Link, Outlet } from "react-router";
import { useEffect } from "react";
import { useUserContext } from "../hooks/contextHooks.js";

const Layout = () => {
  const { user, handleAutoLogin } = useUserContext();
  
  useEffect(() => {
    handleAutoLogin();
  }, []);
  return (
    <div className="app-shell">
      <nav className="site-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
