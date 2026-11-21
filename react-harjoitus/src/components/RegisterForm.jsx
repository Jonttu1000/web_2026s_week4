import { useUser } from "../hooks/apiHooks.js";
import useForm from "../hooks/formHooks.js";

const RegisterForm = () => {
  const { postUser } = useUser();

  const initValues = {
    username: "",
    email: "",
    password: "",
  };

  const doRegister = async () => {
    try {
      console.log("Submitting registration:", {
        username: inputs.username,
        email: inputs.email,
      });
      const result = await postUser(inputs);
      console.log("Registeration result: ", result);
    } catch (error) {
      console.error("Failed to register a new user.", error);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doRegister,
    initValues,
  );

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="registeruser">Username</label>
          <input
            name="username"
            type="text"
            id="registeruser"
            value={inputs.username}
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="registerpassword">Password</label>
          <input
            name="password"
            type="password"
            id="registerpassword"
            value={inputs.password}
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="registeremail">Email</label>
          <input
            name="email"
            type="email"
            id="registeremail"
            value={inputs.email}
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
