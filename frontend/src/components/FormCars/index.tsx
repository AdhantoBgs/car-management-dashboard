import { Layout, Button, Form, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { styFormAdd, styBtnCnl, styBtnSave } from "../../styles/Css";

const { Content} = Layout;

const FormCars = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/admin/cars");
    };

    return (
        <form>
            <Content className="form-container">
                <Layout style={styFormAdd}>
                    <Form.Item label="Nama">
                        <Input placeholder="Avanza" />
                    </Form.Item>
                    <Form.Item label="Harga">
                        <Input placeholder="Rp. ,-" />
                    </Form.Item>
                    <Form.Item label="Foto">
                        <Input type="file" suffix={<UploadOutlined />} />
                    </Form.Item>
                </Layout>
            </Content>
            <Button style={styBtnCnl} onClick={handleCancel}>Cancel</Button>
            <Button style={styBtnSave} htmlType="submit">Save</Button>
        </form>
    );
};

export default FormCars;