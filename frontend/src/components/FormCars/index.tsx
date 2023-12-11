import { Layout, Button, Form, Input, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { styFormAdd, styBtnCnl, styBtnSave } from "../../styles/Css";

const { Content} = Layout;
const { Option } = Select;

const FormCars = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [image_url, setImage_url] = useState("");

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
                    <Form.Item label="Tipe">
                        <Input placeholder="MPV" />
                    </Form.Item>
                    <Form.Item label="Ukuran">
                        <Select placeholder="Medium">
                            <Option value="small">Small</Option>
                            <Option value="medium">Medium</Option>
                            <Option value="large">Large</Option>
                        </Select>
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