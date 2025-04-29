import { useState } from "react";
import { User } from "../component/User";
import { Vechicle } from "../component/Vechicle";
import { VechicleList } from "../component/VehicleList";
import styles from './index.css'

const App = () => {
  // const[users, setUsers] = useState([])
//   const [vehicleInfo, setVehicleInfo] = useState([]);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("USERS")) || []
  );
  const[vehicleInfo, setVehicleInfo] = useState(
    JSON.parse(localStorage.getItem("VEHICLES")) || [])

  return (
    <>
      <User setUsers={setUsers} />
      <Vechicle
        users={users}
        setVehicleInfo={setVehicleInfo}
        vehicleInfo={vehicleInfo}
      />
      <VechicleList
       vehicleInfo={vehicleInfo} 
       users={users}
       />
    </>
  );
};
export default App;
