// loading a component in class-based-component
// - creating a instances of the class
// whenever there is creating a instance of a class;
// 1. constructor will be called ever-time next after, then;
// 2. render
// delcare state - this.state={}
// to set the states - this.setState({})

import React from "react";

class UserClass extends React.Component {
  // props
  constructor(props) {
    super(props);
    console.log("child constructor");

    // declarating state variables
    this.state = {
      name: this.props.name,
      location: this.props.location,
      contact: this.props.contact,
      count: 0,
    };
    // console.log("consutrcutor");
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }

  render() {
    const { name, location, contact } = this.props;
    console.log("child render");
    return (
      <>
        <div className="user-items">
          <h1>username - {this.state.name}</h1>
          <h1>location - {this.state.location}</h1>
          <h1>contact - {this.state.contact}</h1>
          <h1>count - {this.state.count}</h1>
        </div>
        <button
          onClick={() => {
            console.log("clicked");
            this.setState({ count: this.state.count + 1 });
          }}
        >
          click
        </button>
      </>
    );
  }
}

// console.log(UserClass);
export default UserClass;
