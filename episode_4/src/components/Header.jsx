export const Header = ({ logoImg }) => {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo-img" src={logoImg} />
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
