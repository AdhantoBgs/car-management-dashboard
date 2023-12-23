import React from "react";
import { Layout, Row, Col, Space, Anchor } from "antd";
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, MailOutlined, AliwangwangOutlined } from "@ant-design/icons";
import { styLayoutFooter } from "../../styles/Css";

const Footer = () => {
	const handleLogo = () => {
		window.location.href = "/";
	};

	return (
		<Layout style={{background: "white"}}>
			<Row style={styLayoutFooter}>
				<Col span={6}>
					<p className="footer">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
					<p className="footer">binarcarrental@gmail.com</p>
					<p className="footer">081-233-334-808</p>
				</Col>
				<Col span={6}>
					<Anchor
						direction="vertical"
						items={[
							{
								key: "ourservices",
								href: "#ourservices",
								title: "Our Services",
							},
							{
								key: "whyus",
								href: "#whyus",
								title: "Why Us",
							},
							{
								key: "testimonial",
								href: "#testimonial",
								title: "Testimonial",
							},
							{
								key: "faq",
								href: "#faq",
								title: "FAQ",
							},
						]}
					/>
				</Col>
				<Col span={6}>
					<p className="footer">Connect with us</p>
					<Space>
						<a href="https://www.facebook.com"><FacebookOutlined className="social-links" /></a>
						<a href="https://www.instagram.com"><InstagramOutlined className="social-links" /></a>
						<a href="https://www.twitter.com"><TwitterOutlined className="social-links" /></a>
						<a href="https://www.gmail.com"><MailOutlined className="social-links" /></a>
						<a href="https://www.twitch.tv"><AliwangwangOutlined className="social-links" /></a>
					</Space>
				</Col>
				<Col span={6}>
					<p className="footer">Copyright Binar 2023</p>
					<div className="logo" onClick={handleLogo} style={{cursor: "pointer"}}>
                        Binar Car Rental
					</div>
				</Col>
			</Row>
		</Layout>
	);
};

export default Footer;