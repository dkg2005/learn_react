import { Vechicle } from "../Vechicle";
import styles from "./index.css"
export const VechicleList = ({ vehicleInfo, users }) => {
  // console.log(users.map(user,idx)=>(
  //   user.role
  // ))

  const getRole = (owner)=>{
    for (let i=0; i<=users.length; i++){
      if (users[i].name === owner){
        return users[i].role
      }
    }
  }
  const getContact = (owner) =>{
    for(let i=0; i<=users.length; i++){
      if(users[i].name === owner){
        return users[i].contact
      }
    }
  }
  return (
    <>
      <h2 className="heading">Registerd Vechicles</h2>
      <table className="tableDetails">
        <thead>
          <tr>
            <th>Name</th>
            <th>Vechicle Number</th>
            <th>Type</th>
            <th>Role</th>
            <th>Contact No.</th>
          </tr>
        </thead>
        <tbody>
          {vehicleInfo.map((vehicle, index) => (
            <tr key={index}>
              <td>{vehicle.owner}</td>
              <td>{vehicle.vehicleNo}</td>
              <td>{vehicle.vehicleType}</td>
              <td>{getRole(vehicle.owner)}</td>
              <td>{getContact(vehicle.owner)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

// {vehicleInfo.map((vehicle) => {
//     <tr>
//       <td>vehicle.owner</td>
//       <td>vehicle.vehicleType</td>
//       <td>vehicle.vehicleNo</td>
//     </tr>;
//   })}
