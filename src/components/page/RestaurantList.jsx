import { List } from "@mui/material";

import RestaurantDialog from "../ui/dialog/RestaurantDialog";

const RestaurantList = ({ restaurantData }) => {
    return (
        <List style={{ width: "40vw" }}>
            {restaurantData.map((restaurant) => (
                <RestaurantDialog key={restaurant.id} restaurant={restaurant} />
            ))}
        </List>
    );
};

export default RestaurantList;
