import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { usePlaying } from './usePlaying';
import { store } from '../redux/store/index.js';
import { Provider } from 'react-redux';

describe('The usePlaying hook', () => {

    it('playing should be false by default', () => {
        const { result } = renderHook(() => usePlaying(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        });
        expect(result.current.playing).toEqual(false);
    });

    it('if playing is false, togglePlay should change playing to true', () => {
        const { result } = renderHook(() => usePlaying(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        });
        act(() => {
            result.current.togglePlay();
        })
        expect(result.current.playing).toEqual(true);
    });

    it('if playing is true, togglePlay should change playing to false', () => {
        const updatedStore = {...store, playing:true}
        const { result } = renderHook(() => usePlaying(), {
            wrapper: ({ children }) => <Provider store={updatedStore}>{children}</Provider>
        });
        act(() => {
            result.current.togglePlay();
        })
        expect(result.current.playing).toEqual(false);
    });
    it('setPlay should change value of playing to true', () => {
        const { result } = renderHook(() => usePlaying(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        });
        act(() => {
            result.current.setPlay();
        })
        expect(result.current.playing).toEqual(true);
    });
    
});


