import { useState } from "react"
import '../App.css'

// This is where we retrieve people & setPeople to use here in AddPerson 
const AddPerson = ({people, setPeople}) => {

    const[name, setName] = useState('')
    const[gender, setGender] = useState('')
    const[age, setAge] = useState('')
    const[money, setMoney] = useState('')
    const[height, setHeight] = useState('')

// now we create an object of a person using values from state above 
    const handleSubmit = (e) =>{
        e.preventDefault()
        const person = {
            name: name,
            gender: gender,
            age: age,
            money: money,
            height: height
        }
        setPeople([...people, person])
        setName('')
        setGender('')
        setAge('')
        setMoney('')
        setHeight('')
    }



  return (
    <div className="form-container">
    <h3>Create Your Profile</h3>
    <form className="row g-3 mx-auto" onSubmit={handleSubmit}>
        <label className="form-label">Name:
            <input className="form-control" type="text" onChange={e=>setName(e.target.value)} value={name}/>
        </label>
        <label className="form-label">Gender:
            {/* <input className="form-control" type="select" onChange={e=>setGender(e.target.value)} value={gender}/> */}
            <select class="form-select" onChange={e=>setGender(e.target.value)} value={gender}>
                <option selected>Please Select Your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Undefined">Choose Not To Answer</option>
            </select>
        </label>
        <label className="form-label">Age:
            <input className="form-control" type="int" onChange={e=>setAge(e.target.value)} value={age}/>
        </label>
        <label className="form-label">Money:
            <input className="form-control" type="text" onChange={e=>setMoney(e.target.value)} value={money}/>
        </label>
        <label className="form-label">Height:
            {/* <input className="form-control" type="text" onChange={e=>setHeight(e.target.value)} value={height}/> */}
            <select class="form-select" onChange={e=>setHeight(e.target.value)} value={height}>
                <option selected>How Tall Are You?</option>
                <option value="6 ft +">Over 6 Foot</option>
                <option value="5ft - 6ft">Between 5ft & 6ft</option>
                <option value="Under 5 ft">Under 5 ft</option>
            </select>
        </label>
        <button type='submit' id="submit" className="btn btn-primary">Create Profile</button>
    </form>
    </div>
  )
}

export default AddPerson