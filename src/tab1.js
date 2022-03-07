import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

// to get data from local storage
const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  }
  else {
    return [];
  }
}

const Tab1 = () => {
  // state for input field
  const [inputList, setInputList] = useState("");
  // array state for collection of list of items
  const [items, setItems] = useState(getLocalItems());

  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

  // counting the itemId and setting it
  // also setting the initial status as 1
  const addItems = () => {
    if (!inputList) {

    } else {
      var count = items.length;
      setItems([...items, { itemId: count + 1, item: inputList, status: 1}]);
      setInputList(inputList);
    }

    //setting input field to empty state
    setInputList("");
  }

  //checking the item status while clicking on checkbox
  const checkboxClick = (index) => {
    var itemStatus= items[index];
    if (itemStatus.status == 1) {
      itemStatus.status = 2
    }
    else {
      itemStatus.status = 1
    }
    items[index] = itemStatus;
    setItems([...items]);
  }

  //add data to local storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div>
        <TextField id="outlined-basic" label="Enter Task" onChange={itemEvents} value={inputList} />
        <Button variant="contained" onClick={addItems} style={{ marginLeft: "20px" }}> Add</Button>
        <ol>
          {items.map((itemVal, index) => {
            return <div key={index}>
              <span style={{ textDecoration: itemVal.status == 2 ? "line-through" : "none" }}>
                <Checkbox onChange={() => checkboxClick(index)} checked={itemVal.status == 2} color="success" />
                {itemVal.item}
              </span></div>
          })}
        </ol>
      </div>
    </>
  )
}

export default Tab1;