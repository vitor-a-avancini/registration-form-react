import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = (e) => {
    // Implement this function
if (
  validateEmail(email) == true &&
  role == (individual) 
  ) {
   return true; 
  
} else {
    return false;
}
  
  };

  const clearForm = () => {
    // Implement this function
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              onChange={e => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              onChange= {e => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
              onChange={PasswordErrorMessage()}
              minlength="8"
            />
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
            onChange= {e => setRole(e.target.value)}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
