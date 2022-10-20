import React, { useState, useEffect } from "react";
import UserService from "../../services/UserService";
import { useNavigate, Link, useParams } from "react-router-dom";

const AddUserComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveUser = (e) => {
    e.preventDefault();
    const user = { username, password, email, age, country };

    if (id) {
      UserService.updateUser(id, user)
        .then((res) => {
          navigate("/users");
        })
        .catch((err) => console.log(err));
    } else {
      UserService.createUser(user)
        .then((res) => {
          navigate("/users");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    UserService.getUserById(id)
      .then((res) => {
        setUsername(res.data.username);
        setPassword(res.data.password);
        setEmail(res.data.email);
        setAge(res.data.age);
        setCountry(res.data.country);
      })
      .catch((err) => console.log(err));
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update User</h2>;
    } else {
      return <h2 className="text-center">Add User</h2>;
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 mt-4">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    placeholder="Enter a password"
                    name="password"
                    className="form-control"
                    autoComplete="true"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    placeholder="Enter a valid email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="age" className="form-label">
                    Age:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your age"
                    name="age"
                    className="form-control"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <label htmlFor="country" className="form-label">
                    Country:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your country"
                    name="country"
                    className="form-control"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success btn-lg"
                  onClick={(e) => saveUser(e)}
                >
                  Save
                </button>
                <Link to="/users" className="btn btn-danger btn-lg">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserComponent;
