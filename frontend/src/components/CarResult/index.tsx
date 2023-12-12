import { Card, Space, Button, Flex } from "antd";
import { TeamOutlined, SettingOutlined, CalendarOutlined } from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styBtn, styLayout } from "../../styles/Css";

const API = "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";

const CarResult = () => {
    const [data, setData] = useState([]);

    useEffect(
        () => {
            if (data) {
                axios.get(API)
                    .then((res) => {
                        setData(res.data);
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
                id, manufacture, type, rentPerDay, capacity, transmission, year
                }) => {
                    return (
                        <div key={id} className="cars-result-col">
                            <Card className="cars-result-card">
                                <p>{manufacture} / {type}</p>
                                <h2>Rp {rentPerDay} / hari</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <Flex vertical>
                                    <Space><TeamOutlined />{capacity} orang</Space>
                                    <Space><SettingOutlined />{transmission}</Space>
                                    <Space><CalendarOutlined />Tahun {year}</Space>
                                    <Button style={styBtn}>Pilih Mobil</Button>
                                </Flex>
                            </Card>
                        </div>
                    )
                }
            )}
        </div>
        
    );
};

export default CarResult;