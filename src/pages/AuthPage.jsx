import { useState } from "react";
import { useApp } from "../context/AppContext";

const AuthPage = () => {
  const { login, signup } = useApp();

  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (isLogin) {
      login(form.email, form.password);
    } else {
      signup(form.name, form.email, form.password);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>CineVault</h1>

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Create Account"}
        </button>

        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Create an account"
            : "Already have an account?"}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;