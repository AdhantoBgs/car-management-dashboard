import React from "react";
import { Layout, Button, Row, Col, Flex, Input } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import DropdownMenu from "../DropMenu";
import { useState } from "react";
import { styBtnSrc } from "../../styles/Css";

const MenuBar = () => {
	const [search, setSearch] = useState("");

	const handelChange = (e: React.FormEvent) => {
		e.preventDefault();

		console.log("search", search);
	};

	return (
		<Layout className="menu-container">
			<Row className="menu-layout">
				<Col span={12}>
					<MenuOutlined />
				</Col>
				<Col span={12}>
					<Flex justify="flex-end" align="center">
						<form onSubmit={handelChange}>
							<Flex align="center" className="src-range">
								<Input 
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									prefix={<SearchOutlined />} 
									placeholder="Search" 
								/>
								<Button 
									style={styBtnSrc} 
									htmlType="submit"
								>
                                    Search
								</Button>
							</Flex>
						</form>
						<DropdownMenu />
					</Flex>
				</Col>
			</Row>
		</Layout>
	);
};

export default MenuBar;