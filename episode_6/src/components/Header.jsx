export const Header = ({ LOGO_URL }) => {
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
        </div>
      </div>
    </>
  );
};
