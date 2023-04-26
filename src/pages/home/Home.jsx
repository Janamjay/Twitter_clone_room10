import React,{useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loginSuccesss = JSON.parse(localStorage.getItem("login-success"));

    if (!loginSuccesss) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <h1>this is home</h1>
      <NavLink to="/">
        <button>home</button>
      </NavLink>
      <NavLink to="/login">
        <button>Login</button>
      </NavLink>
      <NavLink to="/signup">
        <button>Signup</button>
      </NavLink>
    </div>
  );
};

export default Home;
