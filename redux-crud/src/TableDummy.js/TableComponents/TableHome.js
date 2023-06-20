
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useSelector } from "react-redux";

// const TableHome = () => {
//   const currentUsers = useSelector((state) => state.tablelist);
//   const [filteredUsers, setFilteredUsers] = useState(currentUsers);

//   const handleFilter = (e) => {
//     const searchText = e.target.value.toLowerCase();
//     const filteredResults = currentUsers.filter(
//       (user) =>
//         user.Gender.includes(searchText)
//     );
//     setFilteredUsers(filteredResults);
//   };

//   return (
//     <div
//       className="containerTable"
//       style={{
//         border: "1px solid #ccc",
//         margin: "15px",
//         padding: "15px",
//       }}
//     >
//       <input
//         className="my-2"
//         placeholder="Search by Gender"
//         onChange={handleFilter}
//       />
//       <button className="btn btn-success mx-2 my-2" onClick={handleFilter}>
//         Search
//       </button>
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">ID</th>
//             <th scope="col">FirstName</th>
//             <th scope="col">LastName</th>
//             <th scope="col">Age</th>
//             <th scope="col">Gender</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.map((user, index) => (
//             <tr key={index}>
//               <th scope="row">{user.id}</th>
//               <td>{user.FirstName}</td>
//               <td>{user.LastName}</td>
//               <td>{user.Age}</td>
//               <td>{user.Gender}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableHome;



import React, { useState, } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const TableHome = () => {
  const currentUsers = useSelector((state) => state.tablelist);
  const [filteredUsers, setFilteredUsers] = useState(currentUsers);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedFname, setSelectedFname] = useState("");
  const [selectedLname, setSelectedLname] = useState("");


  const handleGenderFilter = (e) => {
    const searchedGender = e.target.value.toLowerCase();
    setSelectedGender(searchedGender);
    filterUsers(selectedFname, selectedLname, searchedGender);
  };

  const FirstNameHandler = (e) => {
    const searchedFirstName = e.target.value.toLowerCase();
    setSelectedFname(searchedFirstName);
    filterUsers(searchedFirstName, selectedLname, selectedGender);
  };

  const lastNameHandler = (e) => {
    const searchedLastName = e.target.value.toLowerCase();
    setSelectedLname(searchedLastName);
    filterUsers(selectedFname, searchedLastName, selectedGender);
  };

  const filterUsers = (fname, lname, gender) => {
    let filteredResults = currentUsers.filter((user) => {
      const lowerFirstName = user.FirstName.toLowerCase();
      const lowerLastName = user.LastName.toLowerCase();
      const lowerGender = user.Gender.toLowerCase();

      return (
        lowerFirstName.includes(fname) &&
        lowerLastName.includes(lname) &&
        (gender === "" || lowerGender === gender)
      );
    });

    setFilteredUsers(filteredResults);
  };


  return (
    <div
      className="containerTable"
      style={{
        border: "1px solid #ccc",
        margin: "15px",
        padding: "15px",
      }}
    >
      <div>
        <select
          style={{ width: "17%", padding: "7px" }}
          value={selectedGender}
          onChange={handleGenderFilter}
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        <input
          style={{ width: "17%", padding: "7px", marginLeft: "10px" }}
          placeholder="Search By FirstName"
          onChange={FirstNameHandler}
          value={selectedFname}
        />
        <input
          style={{ width: "17%", padding: "7px", marginLeft: "10px" }}
          placeholder="Search By LastName"
          onChange={lastNameHandler}
          value={selectedLname}
        />
      </div>
      <table className="table mt-2">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <th scope="row">{user.id}</th>
              <td>{user.FirstName}</td>
              <td>{user.LastName}</td>
              <td>{user.Age}</td>
              <td>{user.Gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableHome;


