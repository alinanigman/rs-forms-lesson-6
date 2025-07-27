import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState("");
  const [loginError, setLoginError] = useState(null);
  const onLoginChange = ({ target }) => {
    setLogin(target.value);
    let error = null;
    if (!/^[\w_]*$/.test(target.value)) {
      error = "Login must contain only letters, numbers, and underscores";
    } else if (target.value.length > 20) {
      error = "Login must be no more than 20 characters long";
    }
    setLoginError(error);
  };
  const onLoginBlur = () => {
    if (login.length < 3) {
      setLoginError("Login must be at least 3 characters long");
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted login:", login);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div className="error-text">{loginError}</div>
        <input
          type="text"
          name="login"
          placeholder="Login"
          value={login}
          onChange={onLoginChange}
          onBlur={onLoginBlur}
        />
        <button type="submit" disabled={!!loginError}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
