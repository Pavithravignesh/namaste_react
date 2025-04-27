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

    // console.log(this.props.data);
    // declarating state variables
    this.state = {
      count: 0,
      apiData: this.props.data,
    };
    console.log("child constructor " + this.state.apiData?.login);
  }

  componentDidMount() {
    console.log("child componentDidMount " + this.state.apiData?.login);
  }

  render() {
    const { name, location, contact } = this.props;
    console.log("child render " + this.state.apiData?.login);
    return (
      <>
        <img alt="there's a handsome men image was here" src={this.state.apiData.avatar_url} />
        <div className="user-items">
          <h1>username - {this.state.apiData?.login}</h1>
          <h1>created at - {this.state.apiData?.created_at}</h1>
          <h1>follwing - {this.state.apiData?.following}</h1>
          <h1>followrers - {this.state.apiData?.followrers}</h1>
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
