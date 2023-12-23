import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Accordion from "..";

describe("<Accordion />", () => {
	test("renders the accordion component with all collapsible items", () => {
		const { getByText } = render(<Accordion />);

		const firstCollapsibleItemLabel = getByText("Apa saja syarat yang dibutuhkan?");
		expect(firstCollapsibleItemLabel).toBeInTheDocument();
	});

	test("should open and close accordion panels on click", () => {
		const {getByText} = render(<Accordion />);

		const firstCollapsibleItemLabel = getByText("Apa saja syarat yang dibutuhkan?");
		fireEvent.click(firstCollapsibleItemLabel);

		const firstCollapsibleItemContent = getByText("Apa saja syarat yang dibutuhkan?");
		expect(firstCollapsibleItemContent).toBeVisible();
		
	});
});