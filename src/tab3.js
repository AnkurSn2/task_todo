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
                        <div style={{ textDecoration: itemVal.status === 2 ? "line-through" : "none",width:"100%", display:"flex", alignItems:"center",  justifyContent: "left" }}>
                            <h3 style={{margin:"0 auto", marginLeft:"0"}}>{itemVal.status === 2 && itemVal.item}</h3>
                            <div style={{ marginInlineStart: "275px", display: "flex", justifyContent: "center" }}>
                                <DeleteOutlineTwoToneIcon onClick={() => deleteItems(index)} /></div>
                        </div>
                        </div>
                })}
            </ol>
            <Button onClick={deleteAll} startIcon={<DeleteIcon />} style={{
                marginRight: "50px", backgroundColor: "red", float: "right",
                marginRight: "0", color: "#f5f5f5" 
            }}>
                Delete all
            </Button>
        </>
    )
}
export default Tab3;
