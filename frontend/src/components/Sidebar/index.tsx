import React from "react";
import { Layout } from "antd";
import { HomeOutlined, CarOutlined }  from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Content } =Layout;

const Sidebar = () => {
	const navigate = useNavigate();

	const handleDashboard = () => {
		navigate("/admin");
	};

	const handleCars = () => {
		navigate("/admin/cars");
	};

	return (
		<Layout style={{zIndex: "1"}}>
			<Content className="sidebar">
				<a className="logo-square"></a>
				<a onClick={handleDashboard} className="col-side active">
					<HomeOutlined style={{fontSize: "24px"}} />
					<span>Dashboard</span>
				</a>
				<a onClick={handleCars} className="col-side">
					<CarOutlined style={{fontSize: "24px"}} />
					<span>Cars</span>
				</a>
			</Content>
		</Layout>
	);
};

export default Sidebar;