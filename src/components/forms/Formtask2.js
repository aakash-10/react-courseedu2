import React from 'react'

function Formtask2() {


  return (
    <div>
        <form className="w-50 mx-auto mt-5">
        <div className="mb-3">
          <select name="state" id="state" className="form-label">
            <option value="Telangana">Telangana</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
          </select>
        </div>
        <button className="btn btn-success d-block mx-auto">Submit</button>
        </form>
    </div>
  )
}

export default Formtask2