
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
          <button onClick={fetchAPI}>Get User List</button>
          </div>
          <div className="lebels">
            <h4>First Name</h4>
            <h4>Last Name</h4>
            <h4>Email</h4>
            <h4>Avatar</h4>
          </div>
          {
            showList && apiData.map((item, index)=>{
              return(
                <div className="user" key={index}>
                  <h4>{item.first_name}</h4>
                  <h4>{item.last_name}</h4>
                  <h4>{item.email}</h4>
                  <img src={item.avatar} alt="No Avatar"></img>
                </div>
              )
            })
          }
        
    </div>
  )
}

export default App
