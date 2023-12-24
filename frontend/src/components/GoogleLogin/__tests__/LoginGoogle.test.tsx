import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginGoogle from "..";
import { useGoogleLogin } from "@react-oauth/google";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("@react-oauth/google");

describe("<LoginGoogle />", () => {
	test("renders login button", () => {
		const {getByText} = render(
			<Router>
				<LoginGoogle />
			</Router>
		);

		const button = getByText(/Sign In With Google/i);

		expect(button).toBeInTheDocument();
	});
});