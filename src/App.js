import React, { useState } from "react";

import Sidebar from "./components/page/Sidebar";
import Map from "./components/page/Map";
import Header from "./components/ui/header/Header";

const App = () => {
    const restaurants = [
        {
            id: "1",
            name: "駒そば亭",
            address: "柏台南1丁目5-2",
            classification: "和食・寿司",
            url: "https://www.hotpepper.jp/strJ000701591/",
            telephone: "0123-40-8816",
            latitude: 42.813571,
            longitude: 141.678947,
        },

        {
            id: "2",
            name: "レストラン アキオカ",
            address: "栄町4丁目4-1",
            classification: "洋食",
            url: "https://www.hotpepper.jp/strJ000801775/",
            telephone: "0123-23-0532",
            latitude: 42.826131,
            longitude: 141.64697,
        },
        {
            id: "3",
            name: "ビストロマンジェ",
            address: "幸町5丁目14-5 伸和ビル1F",
            classification: "洋食",
            url: "https://tabelog.com/hokkaido/A0107/A010701/1055010/",
            telephone: "0123-42-5353",
            latitude: 42.82611,
            longitude: 141.650166,
        },
        {
            id: "4",
            name: "香来軒",
            address: "幸町2丁目11",
            classification: "中華・ラーメン",
            url: "https://www.hotpepper.jp/strJ000624561/",
            telephone: "0123-23-2640",
            latitude: 42.823151,
            longitude: 141.646173,
        },
        {
            id: "5",
            name: "さっぽろ桃園",
            address: "千代田町6丁目8 平和駅前ビル1F",
            classification: "中華・ラーメン",
            url: "https://www.hotpepper.jp/strJ000255097/",
            telephone: "0123-26-6631",
            latitude: 42.82741,
            longitude: 141.65089,
        },
    ];
    const [restaurantData, setRestaurantData] = useState(restaurants);
    const [restaurantMapData, setRestaurantMapData] = useState(restaurants);
    const refinementMapData = (condition) => {
        setRestaurantMapData(
            restaurantData.filter((restaurant) =>
                condition.includes(restaurant.classification)
            )
        );
    };
    return (
        <>
            <Header title="レストラン" />
            <div style={{ display: "flex" }}>
                <Sidebar
                    restaurantData={restaurantData}
                    refinementMapData={refinementMapData}
                />
                <Map mapData={restaurantMapData} />
            </div>
        </>
    );
};

export default App;
