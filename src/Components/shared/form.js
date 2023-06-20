import React from "react";
import useInput from "../../hooks/useInput";

function Form({ title,user,setUser,submit,genderOptions }) {
const{
  value: enteredFirstName,
  isValid:enteredFirstNameIsValid,
  valueChangeHandler:firstNameChangeHandler,
  inputBlurHandler:firstNameBlurHandler,
  reset:firstNameReset,
  hasError:firstNameHasError,
} = useInput((value)=> value.trim() !== "");

const{
  value: enteredLastName,
  isValid:enteredLastNameIsValid,
  valueChangeHandler:lastNameChangeHandler,
  inputBlurHandler:lastNameBlurHandler,
  reset:lastNameReset,
  hasError:lastNameHasError,
} = useInput((value)=> value.trim() !== "");

const{
  value: enteredEmail,
  isValid:enteredEmailIsValid,
  valueChangeHandler:emailChangeHandler,
  inputBlurHandler:emailBlurHandler,
  reset:emailReset,
  hasError:emailHasError,
} = useInput((value)=> value.includes("@") === true);
  
  function getValue(event) {
    // console.log(event.target.name, event.target.value);
    setUser({...user,[event.target.name]: event.target.value})
  }
  return (
    <div className="card mt-2">
      <div className="card-body">
        <form className="row g-1 g-lg-2" onSubmit={submit}>
          <div className="col-12">
            <div className="border-bottom border-3 text-center fs-3 fw-bold pb-2">
               {title}
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="form-floating">
              <input
                type="text"
                className={
                  firstNameHasError? 
                  "form-control border border-danger border-1"
                 : "form-control" 
                
                }
                placeholder="First Name"
                name="firstName"
              onChange ={firstNameChangeHandler}
              onBlur ={firstNameBlurHandler}
              value={enteredFirstName}
              />
              <label htmlFor="firstName">FirstName</label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-floating">
              <input
                type="text"
                className= {
                  lastNameHasError?
                  "form-control border border-danger border-1"
                : "form-control" 
                }
                placeholder="LastName"
                name="lastName"
                onChange ={lastNameChangeHandler}
                onBlur ={lastNameBlurHandler}
                value={enteredLastName}
              />
              <label htmlFor="lastName">LastName</label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-floating">
              <input
                type="date"
                class="form-control"
                placeholder="Date Of Birth"
                name="dob"
                onChange ={getValue}
                value={user.dob}
              />
              <label htmlFor="dob">Date Of Birth</label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-floating">
              <div class="form-control">
                {genderOptions.map((opt)=>(
               <div class="form-check-inline">
             <input
              type="radio"
                  class="form-check-input"
                  placeholder="Gender"
                 name="gender"
                 onChange ={getValue}
                  value={opt}
              />
             <label htmlFor="gender">{opt} </label>
              </div>
                ))}
              </div>
              <label for="gender">Gender</label>
              </div>
              </div>
          <div class="col-12 col-md-6">
            <div class="form-floating">
              <input
                type="number"
                class="form-control"
                placeholder="Phone"
                name="phone"
                onChange ={getValue}
                value={user.phone}
              />
              <label htmlFor="phone" >Phone</label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-floating">
              <input
                type="email"
                className= {
                  emailHasError?
                  "form-control border border-danger border-1"
                : "form-control" 
                }
                placeholder="Email"
                name="email"
                onChange ={emailChangeHandler}
                onBlur ={emailBlurHandler}
                value={enteredEmail}
              />
              <label htmlFor="email">Email </label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                onChange ={getValue}
                value={user.password}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange ={getValue}
                value={user.confirmPassword}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
              </div>
          <div class="col-12">
            <div class="d-name col-6 mx-auto">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
