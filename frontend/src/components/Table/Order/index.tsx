import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";

interface DataType {
    key: React.Key;
    no: number;
    userEmail: string;
    car: string;
    startRent: string;
    finishRent: string;
    price: number;
    status: string;
};

const columns: ColumnsType<DataType> = [
    {
        title: 'No',
        dataIndex: 'no',
    },
    {
        title: 'User Email',
        dataIndex: 'userEmail',
    },
    {
        title: 'Car',
        dataIndex: 'car',
    },
    {
        title: 'Start Rent',
        dataIndex: 'startRent',
    },
    {
        title: 'Finish Rent',
        dataIndex: 'finishRent',
    },
    {
        title: 'Price',
        dataIndex: 'price',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, extra) => {
    console.log('params', pagination, filters, extra);
};

const TableOrder = () => {
    return (
        <>
            <Table columns={columns} onChange={onChange} />
        </>
    );
};

export default TableOrder;