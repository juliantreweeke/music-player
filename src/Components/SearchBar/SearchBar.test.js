import React from 'react';
import { SearchBar } from './SearchBar';
import { cleanup, render, fireEvent } from '@testing-library/react'

const searchTracks = jest.fn();

describe('SearchBar', () => {
    afterEach(cleanup)

    it("should render", () => {
        const SearchBarComponent = render(
            <SearchBar />
        )
        expect(SearchBarComponent).toBeTruthy();
    });

    it("matches snapshot", () => {
        const SearchBarComponent = render(
            <SearchBar />
        )
        expect(SearchBarComponent).toMatchSnapshot();
    });

    it("calls searchTracks when Search button is clicked", () => {
        const { getByRole } = render(<SearchBar searchTracks={searchTracks} />)
        fireEvent.click(getByRole('button'))
        expect(searchTracks).toHaveBeenCalledTimes(1)
    });
    it("calls searchTracks when enter button is pressed on input", () => {
        const SearchBarComponent = render(
            <SearchBar />
        )
        const input = SearchBarComponent.getByPlaceholderText('Search for...')
        fireEvent.keyDown(input, {
            key: 'Enter',
            keyCode: 13,
        });
        expect(searchTracks).toHaveBeenCalledTimes(1)
    });

    it('should allow letters to be inputted, then used as a parameter for searchTracks function', () => {
        const songQuery = 'my have song bruh';
        const SearchBarComponent = render(
            <SearchBar searchTracks={searchTracks} />
        )
        const { getByRole } = SearchBarComponent;
        const input = SearchBarComponent.getByPlaceholderText('Search for...')
        expect(input.value).toBe('');
        fireEvent.change(input, { target: { value: songQuery } })
        expect(input.value).toBe(songQuery);
        fireEvent.click(getByRole('button'))
        expect(searchTracks).toHaveBeenCalledWith(songQuery);
    })
});
