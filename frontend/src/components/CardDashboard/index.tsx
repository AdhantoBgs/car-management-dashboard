import { Layout, Flex, Button, Space, Card } from "antd";
import ModalBtn from "../Modal";

const CardDasboard = () => {
    return (
        <Layout>
            <Card className="list-col list-car-card">
                <p>Nama / Tipe Mobil</p>
                <h3>Rp {} / hari</h3>
                <ModalBtn />
            </Card>
        </Layout>
    );
};

export default CardDasboard;