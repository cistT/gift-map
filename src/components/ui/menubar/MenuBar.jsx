import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Divider } from "@mui/material";

const MenuBar = ({ menu = 0, selectMenu = (num) => undefined }) => {
    const handleChange = (_, newValue) => {
        selectMenu(newValue);
    };

    return (
        <>
            <Tabs
                value={menu}
                onChange={handleChange}
                aria-label="icon label tabs example"
                centered
                style={{ margin: "5px" }}
            >
                <Tab icon={<CheckBoxIcon />} label="チェックボックス" />
            </Tabs>
            <Divider />
        </>
    );
};

export default MenuBar;
