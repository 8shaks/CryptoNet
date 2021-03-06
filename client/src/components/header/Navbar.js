import React, { Component } from "react";
import { Menu } from "antd";
import "./header.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearProfile } from "../../actions/profileActions";
import { logoutUser } from "../../actions/authActions";
import MediaQuery from "react-responsive";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  state = {
    current: ""
  };
  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearProfile();
    this.props.logoutUser(this.props.history);
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    let links;
    if (isAuthenticated) {
      links = (
        <div>
          <MediaQuery query="(min-device-width: 700px)">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              className="nav"
            >
              {/* <Menu.Item key="feed" className="navItem">
              <Link to="/feed"> Feed</Link>
            </Menu.Item> */}
              <Menu.Item key="home" className="navItem">
                <Link to="/"> Home</Link>
              </Menu.Item>
              <Menu.Item key="posts" className="navItem">
                <Link to="/posts"> Posts</Link>
              </Menu.Item>
              <Menu.Item key="profile" className="navItem">
                <Link to="/dashboard"> My Profile</Link>
              </Menu.Item>
              <Menu.Item key="profiles" className="navItem">
                <Link to="/profiles"> Find a Creator</Link>
              </Menu.Item>

              <Menu.Item key="logout" className="navItem">
                <Link to="/" onClick={this.onLogoutClick}>
                  {" "}
                  Logout
                </Link>
              </Menu.Item>
              <Menu.Item key="greeting" className="navItem greeting">
                {" "}
                Hello {user.username}
              </Menu.Item>
            </Menu>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 699px)">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="inline"
              className="nav"
            >
              <Menu.Item key="greeting"> Hello {user.username}</Menu.Item>
              {/* <Menu.Item key="feed" className="navItem">
              <Link to="/feed"> Feed</Link>
            </Menu.Item> */}
              <Menu.Item key="home" className="navItem">
                <Link to="/"> Home</Link>
              </Menu.Item>
              <Menu.Item key="posts" className="navItem">
                <Link to="/posts"> Posts</Link>
              </Menu.Item>
              <Menu.Item key="profile" className="navItem">
                <Link to="/dashboard"> My Profile</Link>
              </Menu.Item>
              <Menu.Item key="profiles" className="navItem">
                <Link to="/profiles"> Find a Creator</Link>
              </Menu.Item>

              <Menu.Item key="logout" className="navItem">
                <Link to="/" onClick={this.onLogoutClick}>
                  {" "}
                  Logout
                </Link>
              </Menu.Item>
            </Menu>
          </MediaQuery>
        </div>
      );
    } else {
      links = (
        <div>
          <MediaQuery query="(min-device-width: 700px)">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              className="nav"
            >
              <Menu.Item key="home" className="navItem">
                <Link to="/"> Home</Link>
              </Menu.Item>
              <Menu.Item key="posts" className="navItem">
                <Link to="/posts"> Posts</Link>
              </Menu.Item>
              <Menu.Item key="login" className="navItem">
                <Link to="/login"> Login</Link>
              </Menu.Item>
              <Menu.Item key="profiles" className="navItem">
                <Link to="/profiles"> Find a Creator</Link>
              </Menu.Item>

              <Menu.Item key="signup" className="navItem ">
                <Link to="/register"> Sign Up</Link>
              </Menu.Item>
            </Menu>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 699px)">
            {" "}
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="inline"
              className="nav"
            >
              <Menu.Item key="home" className="navItem">
                <Link to="/"> Home</Link>
              </Menu.Item>
              <Menu.Item key="posts" className="navItem">
                <Link to="/posts"> Posts</Link>
              </Menu.Item>
              <Menu.Item key="login" className="navItem">
                <Link to="/login"> Login</Link>
              </Menu.Item>
              <Menu.Item key="profiles" className="navItem">
                <Link to="/profiles"> Find a Creator</Link>
              </Menu.Item>

              <Menu.Item key="signup" className="navItem ">
                <Link to="/register"> Sign Up</Link>
              </Menu.Item>
            </Menu>
          </MediaQuery>
        </div>
      );
    }
    return <div>{links}</div>;
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, clearProfile }
)(withRouter(Navbar));
