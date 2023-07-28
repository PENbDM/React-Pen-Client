import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    // await signup(email, password);
  };

  return (
    <div className="TempPlate">
      <form className="Form" onSubmit={handleSubmit}>
        <p>Login</p>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <button disabled={isLoading}>Sign up</button>
        {error && <div className="Error">{error}</div>}
      </form>
    </div>
  );
}

export default Login;
