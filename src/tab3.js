import React, { useEffect, useState } from 'react'
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Tab3 = () => {
    // state for getting data from local storage
    const [lItems, setLocalItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("lists"));
        if (items) {
            setLocalItems(items);
        }
        // gettingData();
    }, [localStorage.getItem("lists")]);

//delete item one by one
    const deleteItems = (id) => {
        const updatedItems = lItems.filter((itemVal, index) => {
            return index !== id;
        });
        setLocalItems(updatedItems);
    }

//delete all items
    const deleteAll = () => {
        setLocalItems([]);
    }

    return (
        <>
            <ol>
                {lItems.length > 0 && lItems.map((itemVal, index) => {
                    return <div key={index}>
                        <span style={{ textDecoration: itemVal.status === 2 ? "line-through" : "none" }}>
                            {itemVal.status === 2 && itemVal.item}
                            <div style={{ marginInlineStart: "275px", display: "flex", justifyContent: "left" }}>
                                <DeleteOutlineTwoToneIcon onClick={() => deleteItems(index)} /></div>
                        </span></div>
                })}
            </ol>
            <Button onClick={deleteAll} startIcon={<DeleteIcon />} style={{
                marginRight: "50px", backgroundColor: "red", float: "right",
                marginRight: "0"
            }}>
                Delete all
            </Button>
        </>
    )
}
export default Tab3;
