import useForm from "../hooks/formHooks.js";
import { useAuthentication } from "../hooks/apiHooks.js";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate();
  const { postLogin } = useAuthentication();

  const initValues = {
    username: "",
    password: "",
  };

  const doLogin = async () => {
    try {
      console.log("Submitting login:", {
        username: inputs.username,
        email: inputs.email,
      });
      const result = await postLogin(inputs);
      console.log(result);

      if (!result.token) {
        throw new Error("Login response didnt contai a token.");
      }

      localStorage.setItem("token", result.token);
      //Login onnistunut, siirrytään etusivulle.
      navigate("/");
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doLogin,
    initValues,
  );

  console.log("Inputs: ", inputs);
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
