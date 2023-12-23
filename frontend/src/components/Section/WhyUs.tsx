import React from "react";
import { Row, Col } from "antd";
import CardList from "../CardList";
import { styLayoutSection } from "../../styles/Css";

const WhyUs = () => {
	return (
		<Row style={styLayoutSection} id="whyus">
			<Col>
				<h1 className="title-section">Why Us?</h1>
				<p className="description">Mengapa harus pilih Binar Car Rental?</p>
				<CardList />
			</Col>
		</Row>
	);
};

export default WhyUs;