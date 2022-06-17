import { useState } from "react";

import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import RestaurantListItem from "../listItem/RestaurantListItem";
import HeadingWithText from "../heading/HeadingWithText";
import HeadingWithLink from "../heading/HeadingWithLink";

const RestaurantDialog = ({ restaurant }) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <RestaurantListItem
                name={restaurant.name}
                handleOpen={handleOpen}
            />
            <Divider />
            <Dialog onClose={handleClose} open={open} maxWidth="xl">
                <DialogTitle>{restaurant.name}</DialogTitle>
                <div style={{ display: "flex", flexDirection: "" }}>
                    <DialogContent>
                        <HeadingWithText
                            Heading="ジャンル"
                            text={restaurant.classification}
                        />
                        <HeadingWithText
                            Heading="住所"
                            text={restaurant.address}
                        />

                        <HeadingWithLink
                            Heading="ホットペッパー"
                            href={restaurant.url}
                        />
                        <HeadingWithLink
                            Heading="Google Map"
                            href={`https://www.google.com/maps/search/?api=1&query=千歳市+${restaurant.name}`}
                        />
                    </DialogContent>

                    <img
                        src="https://via.placeholder.com/69x69"
                        alt="店舗画像"
                        style={{
                            width: "200px",
                            height: "200px",
                            padding: "0px 50px 50px 0px",
                        }}
                    />
                </div>
            </Dialog>
        </>
    );
};

export default RestaurantDialog;
