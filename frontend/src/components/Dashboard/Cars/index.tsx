import React from "react";
import { Layout, Breadcrumb, Flex, Button, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { styBtnAdd } from "../../../styles/Css";
import CardDasboard from "../../CardDashboard";
import ButtonFilter from "../../ButtonFilter";

const CarsDashboard = () => {
	const navigate = useNavigate();

	const handleAdd = () => {
		navigate("/admin/cars/add");
	};

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
				]}
			/>
			<Flex justify="space-between" className="dsh-title">
				<h2>List Car</h2>
				<Button style={styBtnAdd} onClick={handleAdd}>
					<Space>
						<PlusOutlined />
                        Add New Car
					</Space>
				</Button>
			</Flex>
			<ButtonFilter />
			<CardDasboard />
		</Layout>
	);
};

export default CarsDashboard;