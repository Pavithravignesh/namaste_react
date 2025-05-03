import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../../utils/useOnlineStatus";

export const Header = ({ LOGO_URL }) => {
  const [btnText, setBtnText] = useState(false);

  const onlineStatus = useOnlineStatus();

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
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/grocery">grocery</Link>
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
