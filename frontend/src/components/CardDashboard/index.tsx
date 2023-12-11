import { Layout, Flex, Button, Space, Card } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalBtn from "../Modal";

const CardDasboard = () => {
    const [data, setData] = useState([]);

    useEffect(
        () => {
            if (data) {
                axios.get("http://localhost:9000/v1/cars")
                    .then((res) => {
                        setData(res.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }, []
    );

    return (
        <Layout>
            {data.map(({
                id, name, type, size, price, image_url
            }) => {
                return (
                    <Card className="list-col list-car-card">
                        <img src={image_url} />
                        <p>{name} / {type}</p>
                        <h3>Rp {price} / hari</h3>
                        <ModalBtn />
                    </Card>
                )
            })}  
        </Layout>
    );
};

export default CardDasboard;