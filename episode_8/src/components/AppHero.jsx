import React, { useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

// function AppHero() {
//   useEffect(() => {
//     fetchData();
//   });

//   async function fetchData() {
//     try {
//       const response = await fetch("");
//       const jsonData = await response.json();
//       console.log(jsonData);
//       if (!response.ok) {
//         throw new Error(`HTTP ERROR! Status: ${response.status}`);
//       }
//     } catch (error) {
//       console.log(erro);
//     }
//   }

//   return (
//     <>
//       <div>AppHero</div>
//       <User
//         name={"test user functional"}
//         location={"test location functional"}
//         contact={"test contact functional"}
//       />
//       <UserClass
//         name={"test user class"}
//         location={"test location class"}
//         contact={"test contact class"}
//       />
//     </>
//   );
// }

class AppHero extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  // after the component mount
  componentDidMount() {
    console.log("parent componentDidMount")
  }

  render() {
    console.log("parent render");

    const { name, location, contact } = this.props;
    return (
      <>
        <UserClass name={name} location={location} contact={contact} />
      </>
    );
  }
}
export default AppHero;
