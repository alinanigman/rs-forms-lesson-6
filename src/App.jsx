import * as yup from "yup";
import { useState, useRef } from "react";
import "./App.css";

const loginChangeSchema = yup
  .string()
  .matches(
    /^[\w_]*$/,
    "Login must contain only letters, numbers, and underscores",
  )
  .max(20, "Login must be no more than 20 characters long");

const loginBlurSchema = yup
  .string()
  .min(3, "Login must be at least 3 characters long");

const validateAndGetError = (value, schema) => {
  let errorMessage = null;

  try {
    schema.validateSync(value, { abortEarly: false });
  } catch ({ errors }) {
    errorMessage = errors.join("\n");
  }

  return errorMessage;
};

function App() {
  const [login, setLogin] = useState("");
  const [loginError, setLoginError] = useState(null);

  const submitButtonRef = useRef(null);

  const onLoginChange = ({ target }) => {
    setLogin(target.value);
    let error = validateAndGetError(target.value, loginChangeSchema);
    setLoginError(error);
    if (target.value.length === 20) {
      submitButtonRef.current.focus();
    }
  };

  const onLoginBlur = () => {
    let error = validateAndGetError(login, loginBlurSchema);
    setLoginError(error);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted login:", login);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div className="error-text">
          {loginError &&
            loginError.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
        </div>
        <input
          type="text"
          name="login"
          placeholder="Login"
          value={login}
          onChange={onLoginChange}
          onBlur={onLoginBlur}
        />
        <button ref={submitButtonRef} type="submit" disabled={!!loginError}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
