/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import UserService from "../../services/UserService";
import { Link, useNavigate } from "react-router-dom";
const UsersComponent = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    UserService.getAllUsers()
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (userId) => {
    UserService.deleteUser(userId)
      .then((res) => {
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h2 className="text-center">List Users</h2>
      <Link to="/add-user" className="btn btn-primary mb-2">
        Add User
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr className="text-center">
            <th>User Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="text-center" key={user.idUser}>
              <td>{user.idUser}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.country}</td>
              <td>
                <Link to={`/edit-user/${user.idUser}`} className="btn btn-info">
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  style={{marginLeft:"10px"}}
                  onClick={() => deleteUser(user.idUser)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersComponent;
