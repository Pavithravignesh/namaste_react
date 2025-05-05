// const About = () => {
//   return (
//     <>
//       <h1>About</h1>
//       <h3>You're at about page</h3>
//     </>
//   );
// };
// export default About;

import React from "react";
import UserContext from "../../utils/context/userContext";


class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<>
      <h1>About</h1>
      <h3>You're at about page HERe?</h3>
      {/* component way of using useContext */}
      <UserContext.Consumer>
        {(data) => <h1>{data.loginUser}</h1>}
      </UserContext.Consumer>
    </>)
  }
}

export default About;