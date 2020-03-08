import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { useQuerySearched } from './useQuerySearched';
import { store } from '../redux/store/index.js';
import { Provider } from 'react-redux';

describe('The useQuerySearched hook', () => {

    it('querySearched should be an empty string by default', () => {
        const { result } = renderHook(() => useQuerySearched(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        });
        expect(result.current.querySearched).toEqual('');
    });

    it('setQuerySearched should change value of querySearched', () => {
        const { result } = renderHook(() => useQuerySearched(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        });
        const searchQuery = 'this is a search query';
        act(() => {
            result.current.setQuerySearched(searchQuery);
        })
        expect(result.current.querySearched).toEqual(searchQuery);
    });
    
});