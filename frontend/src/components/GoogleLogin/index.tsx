import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const LoginGoogle = () => {
    const navigate = useNavigate()
    
    const login = useGoogleLogin({
        onSuccess: async (tokenRes) => {
            const response = await fetch("http://localhost:9000/v1/users/googleOAuth", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokenRes.access_token}`
                },
            });

            const resData = await response.json();

            localStorage.setItem("token", resData);

            if (resData) {
                navigate("/admin")
            };
        }
    });

    const handleLogin = () => {
        login();
    };

    return (
        <div>
            <Button onClick={handleLogin} className="googleBtn">
                <Space>
                    <img src="https://i.ibb.co/K7Kb17r/google.png" alt="google" />
                    Sign In With Google
                </Space>
            </Button>
        </div>
    );
};

export default LoginGoogle;