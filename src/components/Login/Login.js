import React, { useState } from 'react';

const Login = () => {
  let errors = {};

  const validPassword = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$!#?+-])");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!email) {
    errors.email = "Ovo polje ne smije biti prazno";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Neispravna email adresa";
  }

  if (!password) {
    errors.password = "Ovo polje ne smije biti prazno";
  } else if (password.length < 6) {
    errors.password = "Lozinka mora sadržavati 6 ili više znakova";
  } else if (!validPassword.test(password)) {
    errors.password =
      "Lozinka mora sadržavati jedan broj i jedan specijalan znak";
  }
const handleSubmit = () =>{
  e.preventDefault();
}

  return (
    <div className="login-container">
      <div className="login">
        <h2>Login</h2>
        <form className="login_form" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            label="Email"
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword (e.target.value)}
            label="Password"
          />
          <div className="login_error">
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );

}

export default Login;