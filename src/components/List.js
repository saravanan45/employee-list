import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

const List = ({ userInfo = [], history }) => {
  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className="list-container">
      <div className="list-header">Employee List</div>
      <button className="logout" onClick={() => logout()}>
        Logout
      </button>
      <table class="table table-striped table-dark">
        <thead class="thead-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map(user => (
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phoneNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.data.user
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect, withRouter)(List);
