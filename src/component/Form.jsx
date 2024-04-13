import { useState } from "react";

const Form = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const [emailValidate, setEmailValidate] = useState(false);
    const [passwordValidate, setpasswordValidate] = useState(false);
    const [confirmPasswordValidate, setconfirmPasswordValidate] =
      useState(false);

    function handleSubmit(e){
        e.preventDefault();
        if(emailValidate && passwordValidate && confirmPasswordValidate){
            alert("Form Submit Successfull");
            // e.target.reset();
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setEmailValidate(false);
            setpasswordValidate(false);
            setconfirmPasswordValidate(false);
        }else{
            alert("Can't Submit Form");
        }
    }

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
        setEmail(value);
        setEmailValidate(emailRegex.test(value));
    };
    const validatePassword = (value) => {
        setPassword(value);
        setpasswordValidate(value.length >= 8);
    }
    const validateConfirmPassword = (value) => {
        setConfirmPassword(value);
        setconfirmPasswordValidate(value === password)
    }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        style={{
          border: emailValidate ? "2px solid green" : "2px solid red",
          marginBottom: emailValidate ? "10px" : "0"
        }}
        type="text"
        id="email"
        onChange={(e) => validateEmail(e.target.value)}
        value={email}
        name="email"
      />
      {!emailValidate && <p>Invalid email format</p>}
      <label htmlFor="password">Password:</label>
      <input
       style={{
          border: passwordValidate ? "2px solid green" : "2px solid red",
          marginBottom: passwordValidate ? "10px" : "0"
        }}
        type="password"
        id="password"
        onChange={(e) => validatePassword(e.target.value)}
        value={password}
        name="password"
      />
      {!passwordValidate && <p>Passsword must be at least 8 characters</p>}
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
       style={{
          border: confirmPasswordValidate ? "2px solid green" : "2px solid red",
          marginBottom: confirmPasswordValidate ? "10px" : "0"
        }}
        type="password"
        id="confirmPassword"
        onChange={(e) => validateConfirmPassword(e.target.value)}
        value={confirmPassword}
        name="confirmPassword"
      />
      {!confirmPasswordValidate && <p>Password does not match</p>}
      <div id="btn">
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
}

export default Form