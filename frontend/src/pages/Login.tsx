import React from "react";
import { Flex } from "antd";
import FormLogin from "../components/FormLogin";
import "./../styles/App.css";

const Login = () => {
	return (
		<div>
			<Flex>
				<img className="img-signin" src="https://i.ibb.co/CBstbPg/bg-signin.png" alt="bg-signin" />
				<FormLogin />
			</Flex>
		</div>
	);
};

export default Login;
