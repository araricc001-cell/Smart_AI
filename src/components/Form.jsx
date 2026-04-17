import React from "react";
import "./form.css"

const Form = () => {
  const [username, setUserName] = React.useState("");
  const [ useremail, setUserEmail] = React.useState("")
  const [ userage, setUserAge] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const userCredentials = {
      Name: username,
      userEmail: useremail,
      userAge: userage,
    };

    console.log(userCredentials);
  };
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Our Form</h1>
      {/*User form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          required
          value={username}
          name="username"
          className="input-style"
          onChange={(e) => setUserName(e.target.value)}
        />

        {/* Email form */}
          <input
          type="email"
          placeholder="Enter your email"
          required
          value={useremail}
          name="email"
          className="input-style"
          onChange={(e) => setUserEmail(e.target.value)}
        />

        {/* Age */}
         <input
          type="number"
          placeholder="Enter your age"
          required
          value={userage}
          name="age"
          className="input-style"
          onChange={(e) => setUserAge(e.target.value)}
        />

        <button type="submit">Submit Details</button>
      </form>
    </div>
  );
};

export default Form;
