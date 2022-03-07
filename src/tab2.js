import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const Tab2 = () => {
// state for getting data from local storage
  const [lItems, setLocalItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("lists"));
    if (items) {
      setLocalItems(items);
    }
    // gettingData();
  }, [localStorage.getItem("lists")]);

  return (
    <>
      <div>
        <TextField id="outlined-basic" label="Enter Task" />
        <Button variant="contained" style={{ marginLeft: "20px" }}> Add</Button>
        <ol>
          {lItems.length > 0 && lItems.map((itemVal, index) => {
            return <div key={index}>
              <span >
                {itemVal.status === 1 && itemVal.item}
                {console.log(itemVal.item)}
              </span></div>
          })}
        </ol>
      </div>
    </>
  )
}

export default Tab2;