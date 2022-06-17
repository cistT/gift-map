import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Leaflet from "leaflet";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";

let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ mapData }) => {
    return (
        <>
            <MapContainer
                center={[42.8209, 141.6508]}
                zoom={13}
                scrollWheelZoom
                centerUpdate
                zoomControl={false}
                style={{ height: "88vh", width: "100vw" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mapData.map((item) => (
                    <Marker
                        key={item.id}
                        position={[item.latitude, item.longitude]}
                    >
                        <Popup>{item.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
};

export default Map;
