import { useState } from "react"
import styles from "./index.css"

export const User = ({setUsers}) =>{
    
    const[name, setName] = useState("")
    const[contact, setContact] = useState("")
    const[role, setRole] = useState("student")

    const addUser = (e) =>{
        e.preventDefault()
        setUsers(prevUsers => {
            localStorage.setItem("USERS",JSON.stringify([...prevUsers, {name,contact,role}]))
            return [...prevUsers, {name,contact,role}]
        })     
        // This is added for the make empty after submitting the details
        setName("")
        setContact("")
        setRole("student")
        alert("User Registered")
    }

    return <form className="formUser"  action="" onSubmit={addUser}>
        <h1 className="heading">User Registration</h1>
        <input  className="name"
        type="text" placeholder="Name" 
        value={name} onChange={e => setName(e.target.value)} required
        /> <br />
        <input className="contact"
         type="text" placeholder="Contact" value={contact} 
         onChange={e => setContact(e.target.value)} required pattern="[0-9]{10}"
         /> <br />
        <select className="selectBtn"
            name="" id="" onChange={e => setRole(e.target.value)}>
            <option value="none" disabled selected>-- Select Role --</option>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
        </select> <br />
        <input className="submitBtn" 
            type="submit" value="Submit" disabled={!name || !contact || !role}
        />
    </form>
}