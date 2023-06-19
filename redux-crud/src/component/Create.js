import React, { useState } from "react";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [enteredName, setName] = useState("");
  const [enteredEmail, setEmail] = useState("");

  const users = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        name: enteredName,
        email: enteredEmail,
      })
    );
    navigate("/");
    // console.log(object);
  };
  return (
    <div
      style={{
        position: "relative",
        top: "150px",
        left: "200px",
        border: "1px solid #ccc",
        padding: "40px",
        width: "600px",
        backgroundColor: "grey",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: "white" }}>Add New User</h2>
        <div className="mb-3 text-white">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            style={{ width: "500px" }}
            placeholder="enter name"
            value={enteredName}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 text-white">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{ width: "500px" }}
            placeholder="enter email"
            value={enteredEmail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
