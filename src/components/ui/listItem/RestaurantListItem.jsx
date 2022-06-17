import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
const RestaurantListItem = ({ name, handleOpen }) => {
    return (
        <>
            <ListItemButton style={{ height: "60px" }} onClick={handleOpen}>
                {name}
            </ListItemButton>
        </>
    );
};

export default RestaurantListItem;
