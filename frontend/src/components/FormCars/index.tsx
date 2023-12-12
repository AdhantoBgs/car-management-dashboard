import { Layout, Button, Form, Input, Radio, DatePicker, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { styFormAdd, styBtnCnl, styBtnSave } from "../../styles/Css";

const { Content} = Layout;
const { TextArea } = Input;

const FormCars = () => {
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    const onFinish = (values: any) => {
        const addForm = new FormData();
        
        addForm.append("name", values.name);
        addForm.append("type", values.type);
        addForm.append("capacity", values.capacity);
        addForm.append("transmission", values.transmission);
        addForm.append("year", values.year);
        addForm.append("price", values.price);
        addForm.append("availableat", values.availableat);
        addForm.append("drivertype", values.drivertype);
        addForm.append("image_url", values.image_url);
        addForm.append("description", values.description);

        axios.post("http://localhost:9000/v1/cars/create", addForm)
            .then((response) => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleCancel = () => {
        navigate("/admin/cars");
    };

    return (
        <Form name="cars" initialValues={{remember: true}} autoComplete="off" onFinish={onFinish}>
            <Content className="form-container">
                <Layout style={styFormAdd}>
                    <Form.Item 
                        name="name" 
                        label="Nama"
                        rules={[{required: true, message: "Please fill the form"}]}
                    >
                        <Input placeholder="Avanza" />
                    </Form.Item>
                    <Form.Item 
                        name="type" 
                        label="Tipe"
                        rules={[{required: true, message: "Please fill the form"}]}
                    >
                        <Input placeholder="MPV" />
                    </Form.Item>
                    <Form.Item 
                        name="capacity" 
                        label="Kapasitas"
                        rules={[{required: true, message: "Please fill the form"}]}
                    >
                        <Input placeholder="5" />
                    </Form.Item>
                    <Form.Item 
                        name="transmission" 
                        label="Transmisi"
                        rules={[{required: true, message: "Please fill the form"}]}
                    >
                        <Input placeholder="Manual" />
                    </Form.Item>
                    <Form.Item 
                        name="year" 
                        label="Tahun"
                        rules={[{required: true, message: "Please fill the form"}]}
                    >
                        <Input placeholder="2019" />
                    </Form.Item>
                    <Form.Item 
                        name="price" 
                        label="Harga"
                        rules={[{required: true, message: "Please fill the form"}]}
                    >
                        <Input placeholder="Rp. ,-" />
                    </Form.Item>
                    <Form.Item 
                        name="availableat" 
                        label="Tersedia"
                        rules={[{required: true, message: "Please fill the form"}]}
                    >
                        <DatePicker showTime />
                    </Form.Item>
                    <Form.Item 
                        name="drivertype" 
                        label="Tipe Driver"
                        rules={[{required: true, message: "Please fill the form"}]}
                    >
                        <Radio.Group>
                            <Radio value="driver">Driver</Radio>
                            <Radio value="non-driver">Non-driver</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item 
                        name="image_url" 
                        label="Foto"
                        rules={[{required: true, message: "Please fill the form"}]}
                    >
                        <Input type="file" />
                    </Form.Item>
                    <Form.Item 
                        name="description" 
                        label="Deskripsi"
                        rules={[{required: true, message: "Please fill the form"}]}
                    >
                        <TextArea rows={4} placeholder="Deskripsi mobil" />
                    </Form.Item>
                </Layout>
            </Content>
            <Button style={styBtnCnl} onClick={handleCancel}>Cancel</Button>
            <Button style={styBtnSave} htmlType="submit">Save</Button>
        </Form>
    );
};

export default FormCars;