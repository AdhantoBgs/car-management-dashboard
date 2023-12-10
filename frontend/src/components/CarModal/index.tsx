import { Button, Card, Space } from "antd";
import { TeamOutlined, SettingOutlined, CalendarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

interface Product {
    id: string;
    manufacture: string;
    type: string;
    rentPerDay: number;
    description: string;
    capacity: number;
    transmission: string;
    year: number;
};

const CarModal: FC<Product> = ({id, manufacture, type, rentPerDay, description, capacity, transmission, year}) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`/cars/${id}`)
    };

    return (
        <Card>
            <p>{manufacture} / {type}</p>
            <h2>Rp {rentPerDay} / hari</h2>
            <p>{description}</p>
            <Space><TeamOutlined />{capacity} orang</Space>
            <Space><SettingOutlined /> {transmission}</Space>
            <Space><CalendarOutlined />Tahun {year}</Space>
            <Button onClick={handleOnClick}>Pilih Mobil</Button>
        </Card>
    );
};

export default CarModal;