import { Layout, Button, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { styFormAdd, styBtnCnl, styBtnSave } from "../../styles/Css";

const { Content} = Layout;
const { Option } = Select;

const FormCars = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [image_url, setImage_url] = useState("");
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    const handelSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const addData = () => {
        axios.post("http://localhost:9000/v1/cars/create", {
            name: name,
            type: type,
            size: size,
            price: price,
            image_url: image_url,
        })
        .then((response) => {
            setPosts(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    };

    const handleCancel = () => {
        navigate("/admin/cars");
    };

    return (
        <form onSubmit={handelSubmit}>
            <Content className="form-container">
                <Layout style={styFormAdd}>
                    <Form.Item label="Nama">
                        <Input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Avanza" 
                        />
                    </Form.Item>
                    <Form.Item label="Tipe">
                        <Input 
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            placeholder="MPV" 
                        />
                    </Form.Item>
                    <Form.Item label="Kapasitas">
                        <Input 
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            placeholder="5"
                        />
                    </Form.Item>
                    <Form.Item label="Harga">
                        <Input 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Rp. ,-" 
                        />
                    </Form.Item>
                    <Form.Item label="Foto">
                        <Input 
                            value={image_url}
                            onChange={(e) => setImage_url(e.target.value)}
                            type="file"
                        />
                    </Form.Item>
                </Layout>
            </Content>
            <Button style={styBtnCnl} onClick={handleCancel}>Cancel</Button>
            <Button style={styBtnSave} htmlType="submit" onClick={addData}>Save</Button>
        </form>
    );
};

export default FormCars;