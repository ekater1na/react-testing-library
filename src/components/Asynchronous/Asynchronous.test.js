/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import Asynchronous from "./Asynchronous";
import axios from "axios";
import { act } from "react-dom/test-utils";

jest.mock('axios');

const hits = [
    {
        objectID: "1",
        title: "Angular"
    },
    {
        objectID: "2",
        title: "React"
    }
];

describe("Asynchronous", () => {
    it("fetches news from an API", async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits } }));
        const { getByRole, findAllByRole } = render(<Asynchronous />)
        userEvent.click(getByRole('button'));
        const items = await findAllByRole('listitem');
        expect(items).toHaveLength(2);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('http://hn.algolia.com/api/v1/search?query=React')
    })

    it("fetches news from an API and reject", async () => {
        axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
        const { getByRole, findByText } = render(<Asynchronous />)
        userEvent.click(getByRole('button'));
        const items = await findByText(/Something went wrong/);
        expect(items).toBeInTheDocument();       
    })

    it("fetches data from an API", async () => {
        const promise =  Promise.resolve({ data: { hits } })
        axios.get.mockImplementationOnce(() => promise);
        const { getByRole, queryAllByRole } = render(<Asynchronous />)
        userEvent.click(getByRole('button'));
        await act(() => promise)
        const items = queryAllByRole('listitem');
        expect(items).toHaveLength(2);   
    })
})