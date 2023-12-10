import { Button} from "antd";
import { useNavigate } from "react-router-dom";
import { styBtnFlr } from "../../styles/Css";

const ButtonFilter = () => {
    return (
        <div>
            <Button style={styBtnFlr}>All</Button>
            <Button style={styBtnFlr}>Small</Button>
            <Button style={styBtnFlr}>Medium</Button>
            <Button style={styBtnFlr}>Large</Button>
        </div>
    );
};

export default ButtonFilter;