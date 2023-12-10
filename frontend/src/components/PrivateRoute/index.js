import { Navigate } from "react-router-dom";
import { node } from "prop-types";

const PrivateRoute = ({children}) => {
    const isLogin = localStorage.getItem("token");

    if (!isLogin) return <Navigate to={"/login"} />;

    return children;
};

PrivateRoute.propTypes = {
    children: node.isRequired,
};

export default PrivateRoute;