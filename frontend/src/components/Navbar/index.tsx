import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Row, Col, Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { styBtn, styLayout } from "../../styles/Css";

const { Header } = Layout;

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleLogo = () => {
        window.location.href = "/";
    };

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <Header className="styNavbar">
            <Row style={styLayout}>
                <Col xs={0} sm={0} md={12}>
                    <div className="logo" onClick={handleLogo} style={{cursor: "pointer"}}>
                        Binar Car Rental
                    </div>
                </Col>
                <Col xs={0} sm={0} md={12}>
                    <Flex justify="flex-end">
                        <Menu mode="horizontal" style={{background: "#F1F3FF"}}>
                            <Menu.Item><a href="#ourservices">Our Services</a></Menu.Item>
                            <Menu.Item><a href="#whyus">Why Us</a></Menu.Item>
                            <Menu.Item><a href="#testimonial">Testimonial</a></Menu.Item>
                            <Menu.Item><a href="#faq">FAQ</a></Menu.Item>
                            <Menu.Item>
                                <Button style={styBtn} onClick={handleLogin}>Register</Button>
                            </Menu.Item>
                        </Menu>
                    </Flex>
                </Col>
                <Col xs={2} sm={2} md={0}>
                    <Button onClick={showDrawer}>
                        <MenuOutlined />
                    </Button>
                </Col>
            </Row>
            <Drawer title="Binar Car Rental" placement="right" onClick={onClose} onClose={onClose} visible={visible}>
                <Menu mode="vertical">
                    <Menu.Item>Our Services</Menu.Item>
                    <Menu.Item>Why Us</Menu.Item>
                    <Menu.Item>Testimonial</Menu.Item>
                    <Menu.Item>FAQ</Menu.Item>
                    <Menu.Item>
                        <Button style={styBtn} onClick={handleLogin}>Register</Button>
                    </Menu.Item>
                </Menu>
            </Drawer>
        </Header>
    );
};

export default Navbar;