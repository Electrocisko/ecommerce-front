/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext.jsx";
import style from "../../scss/modules/loginform.module.scss";

const LoginForm = ({toggleModal}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticateUser } = useContext(GlobalContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/sessions/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok)  toggleModal();
     
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error de autenticación");
      } else {
        const data = await response.json();
        authenticateUser(data.token);
      }

    } catch (error) {
      console.log(error);
      alert(error.message)
    }
  };

  return (
    <div className={style.form_container}>
         <h3>Login</h3>
         <div>
        <a href="/auth/google"><button><img src="/google-icon.png" alt=""/></button></a>
        <br/>
        <a href="/github"><button><img src="/github-icon.png" alt=""/></button></a>
        <br/>
    
      </div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">User email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
          autoFocus
        />
          <label htmlFor="password">User Password</label>
        <input
        id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <button className={style.submit} type="submit">Submit</button>
      </form>
      <hr />
      <p className={style.help}>Don&lsquo;t have an account? <a href="/">Sign up</a></p>
    </div>
  );
};

export default LoginForm;
