import React from "react";
import { Layout, Breadcrumb } from "antd";
import FormCars from "../FormCars";

const FormAdd = () => {
	return (
		<Layout className="dashboard-layout margin-top">
			<Breadcrumb
				separator=">"
				items={[
					{
						title: "Cars",
					},
					{
						title: "List Car",
					},
					{
						title: "Add New Car",
					},
				]}
			/>
			<h2 className="dsh-title">Add New Car</h2>
			<FormCars />
		</Layout>
	);
};

export default FormAdd;