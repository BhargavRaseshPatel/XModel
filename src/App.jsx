import { useState } from 'react'
import './App.css'

function App() {
  const [displayForm, setDisplayForm] = useState(false)
  const [date, setDate] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Form submitted")

    const formData = {};
    const formElements = event.target.elements;
    for (let element of formElements) {
      if (element.name) {
        formData[element.name] = element.value;
      }
    }

    if (formData['phone'].length != 10) alert("Invalid phone number. Please enter a 10-digit phone number.")
    // console.log(formElements);
  }

  const handleDate = (e) => {

    if (new Date(e.target.value).getTime() > Date.now()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }
    const inputDate = e.target.value; // yyyy-mm-dd
    const [year, month, day] = inputDate.split("-");
    const formattedDate = `${day}-${month}-${year}`; // dd-mm-yyyy
    setDate(formattedDate);
  };

  return (
    <div className='modal' onClick={() => setDisplayForm(false)}>
      <h1>User Details Modal</h1>
      <button onClick={(e) => { e.stopPropagation(); setDisplayForm(true); }}>Open Form</button>

      {displayForm && (
        <div className="modal-form">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <form onSubmit={handleSubmit}>

              <h2>Fill Details</h2>

              <h3>Username :</h3>
              <input type="text" name="username" required id='username'/>

              <h3>Email Address:</h3>
              <input type="email" name="email" required id='email'/>

              <h3>Phone Number</h3>
              <input type="number" name="phone" required id='phone'/>

              <h3>Date of Birth</h3>
              <input
                type="date"
                name="dob"
                required
                id='dob'
                onChange={handleDate}
              />

              <button className='submit-button' type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
