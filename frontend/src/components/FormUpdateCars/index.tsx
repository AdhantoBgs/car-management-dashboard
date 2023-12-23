import React from "react";
import { Layout, Breadcrumb } from "antd";
import FormCars from "../FormCars";

const FormUpdate = () => {
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
						title: "Update Car Information",
					},
				]}
			/>
			<h2 className="dsh-title">Update Car Information</h2>
			<FormCars />
		</Layout>
	);
};

export default FormUpdate;