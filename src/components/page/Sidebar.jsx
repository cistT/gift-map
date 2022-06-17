import { useState } from "react";

import { Divider, Typography } from "@mui/material";

import RestaurantList from "./RestaurantList";

import CheckBox from "../ui/checkBox/CheckBox";
import MenuBar from "../ui/menubar/MenuBar";

const Sidebar = ({ restaurantData, refinementMapData }) => {
    const classificationLabels = ["和食・寿司", "洋食", "中華・ラーメン"];
    const [checkClassification, setClassification] = useState([
        "和食・寿司",
        "洋食",
        "中華・ラーメン",
    ]);

    const check = (label) => {
        const tmpCheckClassification = [...checkClassification, label];
        refinementMapData(tmpCheckClassification);
        setClassification(tmpCheckClassification);
    };

    const uncheck = (label) => {
        const tmpCheckClassification = checkClassification.filter(
            (classification) => classification !== label
        );
        refinementMapData(tmpCheckClassification);
        setClassification(tmpCheckClassification);
    };

    return (
        <div style={{ display: "block" }}>
            <MenuBar />
            <div
                style={{
                    margin: "0px 5px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                {classificationLabels.map((label, i) => (
                    <CheckBox
                        key={label + i}
                        label={label}
                        check={check}
                        uncheck={uncheck}
                    />
                ))}
            </div>
            <Divider />
            <Typography
                variant="h6"
                component="div"
                style={{ margin: "5px 0px 0px 10px" }}
            >
                レストラン一覧
            </Typography>
            <RestaurantList
                restaurantData={restaurantData.filter((data) =>
                    checkClassification.includes(data.classification)
                )}
            />
        </div>
    );
};

export default Sidebar;

//CSS 参考資料
//https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet
