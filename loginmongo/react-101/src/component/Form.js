import React, { useState } from 'react'

function Form() {
  const [form, setForm] = useState({name: "", surname: "", gender: "0"})
  /*const [name, setName] = useState("");
  const [surname, setSurname] = useState("")
  const [gender, setGender] = useState("0")*/
  const handleChange = (e) =>{
    setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
 
  return (
    <div>
      <div>
        <div>Form</div>
        <input
        name='name'
          placeholder='İsim'
          value={form.name}
          onChange={handleChange} />

        <input
        name='surname'
          placeholder='Soyisim'
          value={form.surname}
          onChange={handleChange} />

      </div>
      <br />

      <div>
        <div>Cinsiyet</div>
        <select value={form.gender} name='gender' onChange={handleChange}>
          <option value= "0">Erkek</option>
          <option value= "1">Kadın</option>
        </select>
      </div>

      <hr></hr>

      <div>
        İsim:
        <strong>{form.name} {form.surname} </strong>
      </div>
      <div>
        Cinsiyet:
        <strong>{form.gender === '0' ? 'Erkek': 'Kadın'}</strong>
      </div>
    </div>


  )
}

export default Form