import { useState } from 'react'

function Form1() {

  let [user, setUser] = useState({ username: "", password: "", email: "", state: '', css: false, react: false })

  let [err, setErr] = useState({})

  function handleFormSubmit(event) {
    event.preventDefault()
    //console.log(user)

    //call validation function
    let errors = validateUser(user)
    if (Object.keys(errors).length === 0) {
      setErr({})
      console.log(user)
    } else {
      setErr(errors)
    }

  }

  let errors = validateUser(user)
  if (Object.keys(errors).length === 0) {
    setErr({})
  }
  else {
    setErr({ errors })
  }

  //console.log(err)

  // function handleUsername(event){
  //     console.log(event.target.type)
  //    console.log(event.target.name)
  //    setUsername(event.target.value)
  // }

  //  function handlePassword(event){
  //   setPassword(event.target.value)
  // }

  function handleUser(event) {
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setUser({ ...user,[name]: value })
  }
  return (
    <div>
      <h1 className="display-2 text-center text-primary">Forms</h1>
      <form className="w-50 mx-auto mt-5" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" name="username" id="username" className="form-control" onChange={handleUser} />
        </div>
        {/*username validation error message*/}
        {err.username && <p className="text-danger">{err.username}</p>}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" id="password" className="form-control" onChange={handleUser} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" id="email" className="form-control" onChange={handleUser} />
        </div>
        <div className="mb-3">
          <select name="state" id="state" className="form-label" onChange={handleUser}>
            <option value="Telangana">Telangana</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
          </select>
        </div>


        <div className="mb-3">

          <label>Select your Skills</label>
          <div className="form-check">
            <input type="checkbox" id="css" name="css" className="form-check-input" onChange={handleUser} />
            <label htmlFor="css" className="form-check-label">CSS</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="react" name="react" className="form-check-input" onChange={handleUser} />
            <label htmlFor="react" className="form-check-label">React Js</label>
          </div>

        </div>

        <button className="btn btn-success d-block mx-auto">Submit</button>
      </form>
    </div>
  )
}

export default Form1




function validateUser(user) {
  let errors = {};
  //when username is empty
  if (!user.username) {
    //console.log("first")
    errors.username = 'Username is required';
  }
  if (user.username.length !== 0 && user.username.length < 4) {
    errors.username = "Min length should be 4";
  }

  return errors;
}

