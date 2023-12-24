import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ModalBtn from "..";

describe("<ModalBtn />", () => {
	test("renders correctly", () => {
		const {asFragment} = render(
			<Router>
				<ModalBtn />
			</Router>
		);
        
		expect(asFragment()).toMatchSnapshot();
	});

	test("shows a modal when delete button is clicked", () => {
		const {getByText} = render(
			<Router>
				<ModalBtn />
			</Router>
		);

		fireEvent.click(getByText(/Delete/i));
		expect(getByText(/Menghapus Data Mobil/i)).toBeInTheDocument();
	});

	test("redirects to the update page when the edit button is clicked", () => {
		const {getByText} = render(
			<Router>
				<ModalBtn />
			</Router>
		);

		fireEvent.click(getByText(/Edit/i));
		expect(() => getByText(/Menghapus Data Mobil/i)).toThrow();
	});
});