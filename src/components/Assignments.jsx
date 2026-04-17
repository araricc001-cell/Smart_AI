import React from "react";
import "./styles/form.css";

function Assignments() {
  const [username, setUserName] = React.useState("");
  const [userage, setUserAge] = React.useState("");
  const [useraddress, setUseraddress] = React.useState("");
  const [useremail, setUserEmail] = React.useState("");
  const [usergender, setUsergender] = React.useState("");
  const [userphonenumber, setUserphonenumber] = React.useState("");
  const [user, setUsers] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      Name: username,
      userAge: userage,
      address: useraddress,
      userEmail: useremail,
      gender: usergender,
      phonenumber: userphonenumber,
    };
    console.log(user);
    setUsers(user);
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
        {/*Name*/}
        <input
          type="text"
          placeholder="Enter your username"
          required
          value={username}
          name="username"
          className="input-style"
          onChange={(e) => setUserName(e.target.value)}
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

        {/* Address */}
        <input
          type="text"
          placeholder="Enter your address"
          required
          value={useraddress}
          name="address"
          className="input-style"
          onChange={(e) => setUseraddress(e.target.value)}
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

        {/*Gender*/}
        <input
          type="text"
          placeholder="Enter your gender (Male or Female)"
          required
          value={usergender}
          name="gender"
          className="input-style"
          onChange={(e) => setUsergender(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter your number"
          required
          value={userphonenumber}
          name="phoneNumber"
          className="input-style"
          onChange={(e) => setUserphonenumber(e.target.value)}
        />

        <button type="submit">Submit Details</button>
      </form>
      <div className="user-list">
        <h2>User List</h2>
        {user && (
          <div className="user-card">
            <p>Name: {user.username}</p>
            <p>Age: {user.userAge}</p>
            <p>Address: {user.address}</p>
            <p>Email: {user.userEmail}</p>
            <p>Gender: {user.gender}</p>
            <p>Phone Number:{user.phonenumber}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Assignments;