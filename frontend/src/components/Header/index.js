import { Link, NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/userSlice";
const Header = () => {
  const { user } = useSelector((s) => s.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <div className="main-header">
      <Link to="/">
        <img src="/rise-blog-logo.png" />
      </Link>
      {user ? (
        <div className="links-container">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/my-blogs"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            My Blogs
          </NavLink>
          <NavLink
            to="/create-blog"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Create Blog
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Profile
          </NavLink>
          <Button onClick={handleLogOut}>Log out</Button>
        </div>
      ) : (
        <div className="login-signup-button">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/signup">
            <Button type="primary">Signup</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
