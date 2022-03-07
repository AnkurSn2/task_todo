import React, { useEffect, useState } from 'react'
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Tab3 = () => {
    const [lItems, setLocalItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("lists"));
        if (items) {
            setLocalItems(items);
        }
        // gettingData();
    }, [localStorage.getItem("lists")]);

    const deleteItems = (id) => {
        const updatedItems = lItems.filter((itemVal, index) => {
            return index !== id;
        });
        setLocalItems(updatedItems);
    }

    const deleteAll = () => {
        setLocalItems([]);
    }

    return (
        <>
            <Button onClick={deleteAll} startIcon={<DeleteIcon />} style={{
                marginRight: "50px", backgroundColor: "red", float: "right",
                marginRight: "0"
            }}>
                Delete all
            </Button>
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
        </>
    )
}
export default Tab3;
