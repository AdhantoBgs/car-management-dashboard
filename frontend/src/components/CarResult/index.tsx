import { Layout, Card, Space, Button, Flex } from "antd";
import { TeamOutlined, SettingOutlined, CalendarOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styBtn } from "../../styles/Css";

const API = "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";

const CarResult = () => {
    const [data, setData] = useState([]);

    useEffect(
        () => {
            if (data) {
                axios.get(API)
                    .then((res) => {
                        setData(res.data)
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }, [data]
    );

    return (
        <div>
            {data.map(({
                id, manufacture, type, rentPerDay, description, capacity, transmission, year
                }) => {
                    return (
                        <Layout className="cars-result-container">
                            <div key={id} className="cars-result-col">
                                <Card className="cars-result-card">
                                    <p>{manufacture} / {type}</p>
                                    <h2>Rp {rentPerDay} / hari</h2>
                                    <p>{description}</p>
                                    <Flex vertical>
                                        <Space><TeamOutlined />{capacity} orang</Space>
                                        <Space><SettingOutlined />{transmission}</Space>
                                        <Space><CalendarOutlined />Tahun {year}</Space>
                                        <Button style={styBtn}>Pilih Mobil</Button>
                                    </Flex>
                                </Card>
                            </div>
                        </Layout>
                    )})}
        </div>
        
    );
};

export default CarResult;