import "./App.css";
import FooterComponent from "./components/partials/FooterComponent";
import HeaderComponent from "./components/partials/HeaderComponent";
import UsersComponent from "./components/users/UsersComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUserComponent from "./components/users/AddUserComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<UsersComponent />}></Route>
            <Route path="/users" element={<UsersComponent />}></Route>
            <Route path="/add-user" element={<AddUserComponent />}></Route>
            <Route path="/edit-user/:id" element={<AddUserComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
