import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
    // await signup(email, password);
  };

  return (
    <div>
      <div className="TempPlate">
        <form className="Form" onSubmit={handleSubmit}>
          <p>Sign Up</p>
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
      <div></div>
    </div>
  );
}

export default Signup;
