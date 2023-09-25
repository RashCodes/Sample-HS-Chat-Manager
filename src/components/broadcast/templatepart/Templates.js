import React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';


const templateData = [
  
  { name: "Template 1" },
  { name: "Template 2" },
  { name: "Template 3" },
  { name: "Template 4" },
  { name: "Template 5" }
];

function Templates() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(templateData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  return (
    <div className="container my-4">
      <Box className="form">
        <div className="form-check">
          <Checkbox
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className=" form-check-label ms-2 " style={{color: '#2F80ED', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '17px'}}>Select All</label>
        </div>

        {users.map((user, index) => (

          <div className="form-check" key={index}>
            <Checkbox
              type="checkbox"
              className="form-check-input"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2" style={{color: '#2F80ED', fontFamily: 'Montserrat', fontWeight: 'bold'}}>{user.name}</label>
          </div>
          
        ))}
      </Box>
    </div>
  );
}

export default Templates;
