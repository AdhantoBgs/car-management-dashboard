import { Button, Row, Col, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { styLayout, styBtn, styBakcground } from "../../../styles/Css";

const Heading = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/cars");
    };

    return (
        <Layout style={styBakcground}>
            <Row style={styLayout}>
                <Col span={12} style={{paddingTop: "108px"}}>
                    <h1 className="title-landing">
                        Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                    </h1>
                    <p className="paragraf">
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil 
                        kualitas terbaik dengan harga terjangkau. Selalu siap melayani 
                        kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                    <Button style={styBtn} onClick={handleOnClick}>Mulai Sewa Mobil</Button>
                </Col>
                <Col span={12}>
                    <div className="img-bg">
                        <img style={{width: "123%"}} src='https://i.ibb.co/Jq1DzQ3/Mercedes-Car-EQC-300k-W-Edition-900x598-1.png' alt="car-img" />
                    </div>
                </Col>
            </Row>
        </Layout>
    );
};

export default Heading;