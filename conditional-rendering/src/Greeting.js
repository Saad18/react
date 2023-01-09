import { Component } from "react";
class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: true};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: false});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: true});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LoginButton onClick={this.handleLoginClick} />;
      console.log(isLoggedIn);
    } else {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
      console.log(isLoggedIn);
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    console.log(isLoggedIn);
    return <GuestGreeting />;
    
  }
  console.log(isLoggedIn);
  return <UserGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}


export default LoginControl;