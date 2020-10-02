import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { updateUserInfoInStore } from './Redux/actions';

const Login = ({ loginInfo = {}, history, updateUserInfo }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [error, setError] = useState('');

  const changePasswordType = () => {
    type == 'password' ? setType('text') : setType('password');
  };

  const userNamePasswordCheck = () => {
    if (userName == loginInfo.username && password == loginInfo.password) {
      return true;
    }
    return false;
  };

  const onSubmit = () => {
    if (!userName.length || !password.length) {
      setError("Username/Password can't be empty");
      return;
    }
    if (!userNamePasswordCheck()) {
      return setError("UserName & Password didn't match");
    }
    const userDetails = {
      userName,
      password
    };
    updateUserInfo(userDetails);
    localStorage.setItem('userInfo', JSON.stringify(userDetails));
    history.push('/list');
  };

  return (
    <div className="login-container">
      <div className="login-body">
        <span className="login-header">Login</span>
        <span className="error">{error}</span>
        <div className="userName-wrapper">
          <i className="fa fa-user"></i>
          <input
            className="login-userName"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className="password-wrapper">
          <i class="fa fa-lock"></i>
          <input
            className="login-password"
            type={type}
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span
            className="password-eye-icon "
            onClick={() => changePasswordType()}
          >
            {type == 'password' ? (
              <i class="fa fa-eye"></i>
            ) : (
              <i class="fa fa-eye-slash"></i>
            )}
          </span>
        </div>
        <button className="login-button" onClick={() => onSubmit()}>
          Login
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loginInfo: state.data.loginInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserInfo: data => dispatch(updateUserInfoInStore(data))
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withRouter)(Login);
