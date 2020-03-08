import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { useData } from './useData';
import { store } from '../redux/store/index.js';
import { Provider } from 'react-redux';

describe('The useData hook', () => {

    it('data should be null by default', () => {
        const { result } = renderHook(() => useData(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        });
        expect(result.current.data).toEqual(null);
    });

    it('setData should add a value to data', () => {
        const { result } = renderHook(() => useData(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        });
        const data = [{ title: 'songTitle' },{ title: 'songTitle2' }];
        act(() => {
            result.current.setData(data);
        })
        expect(result.current.data).toEqual(data);
    });
});


