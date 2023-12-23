import React from "react";
import { Row, Col } from "antd";
import SlideTesti from "../Carousel";
import { styLayoutSection } from "../../styles/Css";

const Testimonial = () => {
	return (
		<Row style={styLayoutSection} id="testimonial">
			<Col>
				<h1 className="title-section section-center">Testimonial</h1>
				<p className="description section-center">
                    Berbagai review positif dari para pelanggan kami
				</p>
				<SlideTesti />
			</Col>
		</Row>
	);
};

export default Testimonial;