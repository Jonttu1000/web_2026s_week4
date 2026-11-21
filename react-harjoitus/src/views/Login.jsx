import { useState } from "react";
import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {showRegister ? <RegisterForm /> : <LoginForm />}

      <button
        type="button"
        onClick={() => {
          setShowRegister(!showRegister);
        }}
      >
        {showRegister ? (
          <p>Already have an account?</p>
        ) : (
          <p>Click here, to register an account!</p>
        )}
      </button>
    </>
  );
};

export default Login;
