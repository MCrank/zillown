import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../helpers/data/authRequests';
import './Auth.scss';

class Auth extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.func,
  };

  authenticateUser = (e) => {
    e.preventDefault();
    authRequests
      .authenticate()
      .then(() => {
        this.props.isAuthenticated();
      })
      .catch(error => console.error('There was an error with AuthRequest', error));
  };

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-danger" onClick={this.authenticateUser}>
          Login
        </button>
      </div>
    );
  }
}

export default Auth;
