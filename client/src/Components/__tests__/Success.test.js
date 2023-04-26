import { render, screen, cleanup } from '@testing-library/react';
import Success from '../SuccessComponents/Success'
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom'



describe(Success, () => {
    beforeEach(() => {
        Videogame.sync({force: true})
    })
    it('Expect div to be in the document',() => {
        render(<BrowserRouter><Success/></BrowserRouter>)
        const h1Element = screen.getByTestId('favs-1')
        expect(h1Element).toBeInTheDocument()
    })
    it('Expect button to have text', () => {
        render(<BrowserRouter><Success/></BrowserRouter>)
        const buttonElement = screen.getByTestId('btn-1')
        expect(buttonElement).toHaveTextContent('GoBack')
    })
})