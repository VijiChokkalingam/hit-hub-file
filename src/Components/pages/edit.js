import React, { useEffect,useState } from "react";
import Form from "../shared/form";
import axios from "axios";
import { useParams } from "react-router-dom";


function Edit() {
  const {userId} =useParams();
  // useEffect(()=>{
  //   axios.get(`https://practice-352e7-default-rtdb.firebaseio.com/users.json/${userId}`
  //   )
  //   .then((res)=>console.log(res));
  // });
  const initialState = {
    firstName: "",
    lastName: "",
    dob: "",
    gender: "female",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const genderOptions = ["male", "female"];

  const [user, setUser] = useState(initialState);
  const [users, setUsers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
    update();
    // get();
    setUser(initialState);
  }

  function update() {
    axios.put(`https://practice-352e7-default-rtdb.firebaseio.com/users.
    json/${userId}`)  
  }

  return (
    <Form
      handleSubmit={handleSubmit}
      setUser={setUser}
      user={user}
      title="Update Your Details"
      genderOptions={genderOptions}
    />
  );
}

export default Edit;
