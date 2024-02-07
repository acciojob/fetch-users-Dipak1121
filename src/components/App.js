
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [showList, setShowList] = useState(false);

  const [apiData, setApiData] = useState([]);

  function fetchAPI(){

    fetch("https://reqres.in/api/users")
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data.data);
      setApiData(data.data);
      setShowList(true);
      console.log(apiData);
    })
    .catch((err)=>{
      console.log(err);
    })

    // console.log(data);
  }
  return (
    <div>
        <div className="head">
          <h3>Blue Whales</h3>
          <button className="btn"
          onClick={fetchAPI}>Get User List</button>
          </div>
          {/* <div className="lebels">
            <h4>First Name</h4>
            <h4>Last Name</h4>
            <h4>Email</h4>
            <h4>Avatar</h4>
          </div> */}
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
            {
              showList && apiData.map((item, index)=>{
                return(
                  <tr className="user" key={index}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td><img src={item.avatar} alt="No Avatar"></img></td>
                  </tr>
                )
              }) 
            }
            </tbody>
          </table>

          {
            (apiData.length == 0) && <h3>No data found to display</h3>
          }
          
        
    </div>
  )
}

export default App
