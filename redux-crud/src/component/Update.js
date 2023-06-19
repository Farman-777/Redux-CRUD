import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

const Update = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.id == id);
  console.log(existingUser[0]);
  const { name, email } = existingUser[0];

  const [updateName, setName] = useState(name);
  const [updateEmail, setEmail] = useState(email);

  //23:17
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: id,
      name: updateName,
      email: updateEmail,
    }));
    navigate("/");
  };
  return (
    <div
      style={{
        position: "relative",
        top: "180px",
        left: "200px",
        border: "1px solid #ccc",
        padding: "40px",
        width: "600px",
        backgroundColor: "grey",
      }}
    >
      <form onSubmit={handleUpdate}>
        <h2 style={{ color: "white" }}>Update User</h2>
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
            value={updateName}
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
            value={updateEmail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
