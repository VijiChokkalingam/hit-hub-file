import React, { Fragment, useState } from "react";
import Form from "../shared/form";
import UserTable from "../shared/usertable";


function SignUp() {
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
    post();
    // get();
    setUser(initialState);
  }

  function post() {
    fetch("https://practice-352e7-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(get)
      .catch((err) => console.error(err));
  }

  function get() {
    fetch("https://practice-352e7-default-rtdb.firebaseio.com/users.json")
      .then((res) => res.json())
      .then((users) => {
        const ur = [];
        for (const key in users) {
          ur.push({ ...users[key], id: key });
        }
        setUsers(ur);
      })
      .catch((err) => console.error(err));
  }


  return (
    <Fragment>
      <Form
        title="Sign Up"
        user={user}
        setUser={setUser}
        submit={handleSubmit}
        genderOptions={genderOptions}
      />
      <UserTable users={users} />
    </Fragment>
  );

  // {user and setUser }using parameter pass name - Form.js give - any related name give- this is child to parent  element type
  //   let count = 0;
  // const [count,setCount] = useState(0)
  //   function increaseCount() {
  //     // count++;
  //    setCount(count + 1)
  //     console.log(count);
  //   }
  //   console.log("Rerendered")
  //   return (
  //     <div>
  //       {count}
  //       <div>
  //         <button onClick={increaseCount}>Increase Count</button>
  //       </div>
  //     </div>
  // );
}
export default SignUp;
