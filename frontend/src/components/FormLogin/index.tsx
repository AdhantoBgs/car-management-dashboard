import { Button, Layout, Form, Input, Space, Divider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginGoogle from "../GoogleLogin";

const FormLogin = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        localStorage.setItem("token", "true");
        navigate("/admin");
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handelSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <Layout className="stySignin">
            <p className="logo-signin"></p>
            <h2>Welcome, Admin BCR</h2>
            <form onSubmit={handelSubmit}>
                <Form.Item>
                    <label>Email</label>
                    <Input 
                        className="space"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email"
                    />
                </Form.Item>
                <Form.Item>
                    <label>Password</label>
                    <Input.Password
                        className="space"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password"
                    />
                </Form.Item>
                <Button 
                    className="btn-signin" 
                    onClick={handleOnClick}
                    type="primary"
                    htmlType="submit"
                >
                    Sign In
                </Button>
            </form>
            <Divider orientation="center" style={{fontSize: "12px", color: "#d9d9d9"}}>Or</Divider>
            <LoginGoogle />
            <a href="/" className="bck-home">
                <Space>
                    <ArrowLeftOutlined />
                    Back
                </Space>
            </a>
        </Layout>
    );
};

export default FormLogin;