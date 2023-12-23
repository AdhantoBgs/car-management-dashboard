import React from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

interface DataType {
    key: React.Key;
    no: number;
    name: string;
    category: string;
    price: number;
    startRent: string;
    finishRent: string;
    createdAt: string;
    updatedAt: string;
}

const columns: ColumnsType<DataType> = [
	{
		title: "No",
		dataIndex: "no",
	},
	{
		title: "Name",
		dataIndex: "name",
	},
	{
		title: "Category",
		dataIndex: "category",
	},
	{
		title: "Price",
		dataIndex: "price",
	},
	{
		title: "Start Rent",
		dataIndex: "startRent",
	},
	{
		title: "Finish Rent",
		dataIndex: "finishRent",
	},
	{
		title: "Created at",
		dataIndex: "createdAt",
	},
	{
		title: "Updated at",
		dataIndex: "updatedAt",
	},
];

const onChange: TableProps<DataType>["onChange"] = (pagination, filters, extra) => {
	console.log("params", pagination, filters, extra);
};

const TableCar = () => {
	return (
		<>
			<Table columns={columns} onChange={onChange} />
		</>
	);
};

export default TableCar;