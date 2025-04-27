import React, { useEffect, useState } from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

// function AppHero() {

//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     try {
//       const response = await fetch("https://api.github.com/users/Pavithravignesh");
//       if (!response.ok) {
//         throw new Error(`HTTP ERROR! Status: ${response.status}`);
//       }
//       const jsonData = await response.json();
//       setData(jsonData); // 👈 directly update data here
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   console.log(data);

//   return data && data.login ? (
//     <>
//       <div>AppHero</div>
//       <User
//         data={data}
//       />
//       {/* <UserClass
//         name={"test user class"}
//         location={"test location class"}
//         contact={"test contact class"}
//       /> */}
//     </>
//   ) : (<><h1>Loading....</h1></>);
// }

class AppHero extends Component {


  // 1st with default value
  constructor(props) {
    super(props);
    console.log("parent constructor");
    // 4th local state has updated,
    this.state = {
      data: {}
    }
  }

  // 3rd after the component mount,
  async componentDidMount() {

    this.timer = setInterval(() => { console.log("setInterval") }, 1000)

    console.log("parent componentDidMount");
    try {
      const response = await fetch("https://api.github.com/users/Pavithravignesh");
      const jsonData = await response.json();
      // 4. updating cycle starts,
      this.setState({ data: jsonData });
      if (!response.ok) {
        throw new Error(`HTTP ERROR! Status: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }

  }

  componentDidUpdate() {
    console.log("parent compundDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount")
  }
  // 2nd render with dafault value
  // 5th once again the render has occures, but with this time with the newly updated fetched value,
  render() {
    console.log("parent render");

    const { name, location, contact } = this.props;
    return this.state.data && this.state.data.login ? (
      <>
        <UserClass data={this.state.data} />
        <UserClass data={this.state.data} />
      </>
    ) : (<><h1>loading....</h1></>);
  }

}
export default AppHero;
