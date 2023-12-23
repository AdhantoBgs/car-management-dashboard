import React from "react";
import { Layout, Flex, Space, Card } from "antd";
import { TeamOutlined, SettingOutlined, CalendarOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalBtn from "../Modal";

const CardDasboard = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:9000/v1/cars")
			.then((response) => {
				setData(response.data);
			})
			.catch(error => {
				console.log(error);
			});  
	}, []
	);

	return (
		<Layout>
			{data.map(({
				id, name, type, capacity, transmission, year, price, image_url, description
			}) => {
				return (
					<Card key={id} className="list-col list-car-card">
						<img src={image_url} />
						<p>{name} / {type}</p>
						<h3>Rp {price} / hari</h3>
						<p>{description}</p>
						<Flex vertical>
							<Space><TeamOutlined />{capacity} orang</Space>
							<Space><SettingOutlined />{transmission}</Space>
							<Space><CalendarOutlined />Tahun {year}</Space>
						</Flex>
						<ModalBtn />
					</Card>
				);
			})}  
		</Layout>
	);
};

export default CardDasboard;