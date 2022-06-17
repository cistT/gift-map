import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CheckBox = ({
    label = "TEST",
    check = () => undefined,
    uncheck = () => undefined,
}) => {
    const onChange = (e) => {
        if (e.target.checked) {
            check(label);
        } else {
            uncheck(label);
        }
    };
    return (
        <FormControlLabel
            control={<Checkbox defaultChecked onChange={onChange} />}
            style={{ height: "60px", margin: "5px", textAlign: "center" }}
            label={label}
        />
    );
};

export default CheckBox;
