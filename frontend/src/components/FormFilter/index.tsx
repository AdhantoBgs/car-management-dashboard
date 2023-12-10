import { Button, Layout, Form, Input, Select, DatePicker, Row, Col } from "antd";
import { ClockCircleOutlined, TeamOutlined } from "@ant-design/icons";
import { styInputFilter, styLayoutForm, styBtn, marginTop } from "../../styles/Css";
import { useState } from "react";

const Content = Layout;
const Option = Select;

const FormFilter = () => {
    const [driver, setDriver] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [capacity, setCapacity] = useState("");

    

    const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
        
    };

    return (
        <Layout style={styLayoutForm}>
            <Content>
                <Form layout="vertical">
                    <Row>
                        <Col style={styInputFilter}>
                            <Form.Item label="Tipe Driver">
                                <Select placeholder="Pilih Tipe Driver">
                                    <Option value="driver">Dengan Supir</Option>
                                    <Option value="non-driver">Tanpa Supir (Lepas Kunci)</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col style={styInputFilter}>
                            <Form.Item label="Tanggal">
                                <DatePicker style={{width: "100%"}} />
                            </Form.Item>
                        </Col>
                        <Col style={styInputFilter}>
                            <Form.Item name="waktu" label="Waktu Jemput">
                                <Select placeholder="Pilih Waktu" suffixIcon={<ClockCircleOutlined />}>
                                    <Option value="08:00:00">08.00</Option>
                                    <Option value="09:00:00">09.00</Option>
                                    <Option value="10:00:00">10.00</Option>
                                    <Option value="11:00:00">11.00</Option>
                                    <Option value="12:00:00">12.00</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col style={styInputFilter}>
                            <Form.Item label="Jumlah Penumpang (optional)">
                                <Input placeholder="Jumlah Penumpang" suffix={<TeamOutlined />} />
                            </Form.Item>
                        </Col>
                        <Col>
                            <div style={marginTop}>
                                <Button htmlType="submit" style={styBtn}>Cari Mobil</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Content>
        </Layout>
    );
};

export default FormFilter;