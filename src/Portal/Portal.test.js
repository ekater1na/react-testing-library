/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/prefer-screen-queries */

import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from './Portal'

describe("Portal", () => {
    it("modal shows the children and a close button", () => {
        const handleClose = jest.fn();
        const { getByText } = render(
            <Modal onClose={handleClose}>
                <div>My Portal</div>
            </Modal>
        );
        expect(getByText('My Portal')).toBeInTheDocument();
        userEvent.click(getByText(/close/i));
         expect(handleClose).toHaveBeenCalledTimes(1);
    })

    it("shows be unmounted", () => {
        const { getByText, unmount, queryByText } = render(
            <Modal>
                <div>My Portal</div>
            </Modal>
        );
        expect(getByText('My Portal')).toBeInTheDocument();
        unmount();
        expect(queryByText('My Portal')).not.toBeInTheDocument();
    })
})