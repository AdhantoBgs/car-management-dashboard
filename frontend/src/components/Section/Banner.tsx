import React from "react";
import { Button, Layout, Row } from "antd";
import { styBtn, styLayoutSection } from "../../styles/Css";

const { Content } = Layout;

const Banner = () => {
	const handleOnClick = () => {
		window.location.href = "/cars";
	};

	return (
		<Row style={styLayoutSection}>
			<Content className="banner-content">
				<h1 className="title-banner">
                    Sewa Mobil di (Lokasimu) Sekarang
				</h1>
				<p className="paragraf-banner">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<Button style={styBtn} onClick={handleOnClick}>Mulai Sewa Mobil</Button>
			</Content>
		</Row>
	);
};

export default Banner;