import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = ({ title }) => {
    return (
        <div style={{ height: "60px" }}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
