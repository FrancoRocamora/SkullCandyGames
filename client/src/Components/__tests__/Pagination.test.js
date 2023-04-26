import { render, screen, cleanup } from '@testing-library/react';
import Pagination from '../HomeComponents/Pagination'
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom'

afterEach(() => {
    cleanup()
})


describe(Pagination, () => {
    it('Expect to be render', () => {
        render(<BrowserRouter><Pagination/></BrowserRouter>)
        const divElement = screen.getByTestId('button-1')
        expect(divElement).toBeInTheDocument()
    })
    it('Expect to have content', () => {
        render(<BrowserRouter><Pagination/></BrowserRouter>)
        const buttonElement = screen.getByTestId('button-1')
        expect(buttonElement).toHaveTextContent('Previous page')
    })
})