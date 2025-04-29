import { useEffect, useState } from "react";
import styles  from './index.css'
import PassGenerator from "./passGenerator";
const type = {
  Cycle: {
    Daily: 5,
    Month: 50,
    Annual: 500,
  },
  Bike: {
    Daily: 10,
    Month: 100,
    Annual: 1000,
  },
  Car: {
    Daily: 50,
    Month: 500,
    Annual: 5000,
  },
};
const calculateExpiryDate = (duration) => {
  let today = new Date();
  if (duration === "Daily") {
    today.setDate(today.getDate() + 1);
  } else if (duration === "Month") {
    today.setMonth(today.getMonth() + 1);
  } else if (duration === "Annual") {
    today.setFullYear(today.getFullYear() + 1);
  }
  return today.toISOString().split("T")[0];
};

console.log(styles)

export const Vechicle = ({ users, setVehicleInfo,vehicleInfo }) => {
  // * users is passing as object because this is an array

  const [vehicleNo, setVehicleNo] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [owner, setOwner] = useState("");
  const [duration, setDuration] = useState("");
  const[pass,setPass] = useState("")

  const addVehicle = (e) => {
    e.preventDefault()  // to prevent the default behaviour
    // alert(JSON.stringify({vehicleNo,vehicleType,owner}))
    const isDuplicate = vehicleInfo.some(vehicle => vehicle.vehicleNo === vehicleNo)
    if(isDuplicate){
        alert("This vehicle is already registred") 
        return;
    }
    setVehicleInfo(prevVehicles =>{
      localStorage.setItem("VEHICLES",JSON.stringify([...prevVehicles, {vehicleNo,vehicleType,owner}]))
        return [...prevVehicles, {vehicleNo,vehicleType,owner}]
    })
    setOwner("")
    setVehicleNo("")
    setVehicleType("")
    setDuration("")
}


  useEffect(() => {
    if (!vehicleNo || !vehicleType || !owner || !duration) return;

    const newPass = {
      vehicleNo,
      vehicleType,
      owner,
      duration,
      expiryDate: calculateExpiryDate(duration),
      issueDate: new Date().toISOString().split("T")[0],
      price: type[vehicleType][duration]
    };

    setPass(newPass); // Set the generated pass in state
  }, [vehicleNo, vehicleType, owner, duration]);

  return ( <>
  
  <form className="formVehicle" action="" onSubmit={addVehicle}>
      {" "}
      <h1 className="heading">Vehicle Registration</h1>
      <input className="vehicleNo"
        type="text"
        placeholder="Enter Vehicle Number"
        required
        pattern="[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}"
        onChange={(e) => setVehicleNo(e.target.value)}
      /> <br />
      <select className="vehicleType"
        name="" id="" onChange={(e) => setVehicleType(e.target.value)}>
        <option value="" disabled select selected>
          -- Selction Type --
        </option>
        <option value="Cycle">Cycle</option>
        <option value="Bike">Bike</option>
        <option value="Car">Car</option>
      </select> <br />
      <select className="vehicleOwner"
        name="" id="" onChange={(e) => setOwner(e.target.value)} required>
        <option value="" disabled selected>
          -- Select Owner --
        </option>
        {users.map((user, index) => (
          <option key={index} value={user.name}>
            {index + 1}.{user.name}
          </option>
        ))}
      </select> <br />
      {vehicleType ? (
        <>
          {/* <br /> */}
          <button className="btn"
            type="button"
            value="daily"
            onClick={(e) => setDuration("Daily")}
          >
            Daily : {type[vehicleType].Daily}
          </button>
          <button className="btn"
            type="button"
            value="month"
            onClick={(e) => setDuration("Month")}
          >
            Month : {type[vehicleType].Month}
          </button>
          <button className="btn"
            type="button"
            value="annual"
            onClick={() => setDuration("Annual")}
          >
            Annual : {type[vehicleType].Annual}
          </button>
        </>
      ) : null}
      <br />
      <input className="registerBtn"
        type="submit"
        value="Register"
        onClick={console.log(pass)}
        disabled={!duration || !vehicleNo || !owner}
      />
    </form>
    { pass && <PassGenerator pass={pass}/>
      }
  </>
  );
};
