import { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../../utils/useOnlineStatus";
import UserContext from "../../utils/context/userContext";

export const Header = ({ LOGO_URL }) => {
  const [btnText, setBtnText] = useState(false);

  const onlineStatus = useOnlineStatus();

  const { loginUser } = useContext(UserContext);

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo-img" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <p>Online Status: {onlineStatus ? "🟢" : "🔴"}</p>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cart">Cart {"headerCartCount"}</Link>
            </li>
            <li>
              <Link to="/grocery">grocery</Link>
            </li>
            <li>
              {loginUser}
            </li>
          </ul>
          <div className="log-btn">
            <button type="button" onClick={() => setBtnText((prev) => !prev)}>
              {btnText ? "login" : "logout"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
