import React, { useState } from "react";
import { Button, Flex, Modal } from "antd";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { styBtnDlt, styBtnEdt } from "../../styles/Css";

const ModalBtn: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const navigate = useNavigate();

	const handleUpdate = () => {
		navigate("/admin/cars/update");
	};

	return (
		<div>
			<Flex className="btn-content">
				<Button style={styBtnDlt} onClick={showModal}>
					<DeleteOutlined />
                    Delete
				</Button>
				<Button style={styBtnEdt} onClick={handleUpdate}>
					<FormOutlined />
                    Edit
				</Button>
			</Flex>
			<Modal 
				className="modal-content" 
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button key={""} className="btn-yes" onClick={handleOk}>Ya</Button>,
					<Button key={""} className="btn-no" onClick={handleCancel}>Tidak</Button>
				]}
			>
				<div className="modal-confirm">
					<img src="https://i.ibb.co/NSnyTs1/img-Beep-Beep.png" alt="img-modal"></img>
					<h2>Menghapus Data Mobil</h2>
					<p>
                        Setelah dihapus, data mobil tidak dapat dikembalikan. 
                        Yakin ingin menghapus?
					</p>
				</div>
			</Modal>
		</div>
	);
};

export default ModalBtn;
