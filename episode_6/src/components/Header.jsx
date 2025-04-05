import { useState } from "react";

export const Header = ({ LOGO_URL }) => {
  const [btnText, setBtnText] = useState(false);
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo-img" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Carceer</li>
            <li>About</li>
            <li>Contact</li>
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
