import React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';


const tagData = [
  
  { name: "Tag 1" },
  { name: "Tag 2" },
  { name: "Tag 3" },
  { name: "Tag 4" },
  { name: "Tag 5" },
];

function Tags() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(tagData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tagUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tagUser);
    } else {
      let tagUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tagUser);
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

export default Tags;
