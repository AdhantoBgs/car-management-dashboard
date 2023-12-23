import React from "react";
import CarsDashboard from "../components/Dashboard/Cars";
import MenuBar from "../components/Menu";
import Sidebar from "../components/Sidebar";
import "./../styles/App.css";
import { Layout } from "antd";

const Cars = () => {
	return (
		<div>
			<Layout>
				<Sidebar />
				<Layout>
					<MenuBar />
					<CarsDashboard />
				</Layout>
			</Layout>
		</div>
	);
};

export default Cars;