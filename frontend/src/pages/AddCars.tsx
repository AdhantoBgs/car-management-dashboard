import React from "react";
import FormAdd from "../components/FormAddCars";
import MenuBar from "../components/Menu";
import Sidebar from "../components/Sidebar";
import "./../styles/App.css";
import { Layout } from "antd";

const AddNew = () => {
	return (
		<div>
			<Layout>
				<Sidebar />
				<Layout>
					<MenuBar />
					<FormAdd />
				</Layout>
			</Layout>
		</div>
	);
};

export default AddNew;