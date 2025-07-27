import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
    },
  });

  const loginProps = {
    minLemgth: {
      value: 3,
      message: "Login must be at least 3 characters long",
    },
    maxLength: {
      value: 20,
      message: "Login must be at most 20 characters long",
    },
    required: { value: true, message: "Login is required" },
    pattern: {
      value: /^[w_]*$/,
      message: "Login can only contain letters, numbers, and underscores",
    },
  };

  const loginError = errors.login?.message;

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <div className="error-text">{loginError}</div>}
        <input name="login" type="text" {...register("login", loginProps)} />
        <button type="submit" disabled={!!loginError}>
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
