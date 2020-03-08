import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks'
import { useTracks } from './useTracks';
import { store } from '../redux/store/index.js';
import { Provider } from 'react-redux';

describe('The useTracks hook', () => {

    it('tracks should be an empty array by default', () => {
        const { result } = renderHook(() => useTracks(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        });
        expect(result.current.tracks).toEqual([]);
    });

    it('addTrack should add a value to Tracks', () => {
        const { result } = renderHook(() => useTracks(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        });
        const track = { title: 'songTitle', index: 3 };
        act(() => {
            result.current.addTrack(track);
        })
        expect(result.current.tracks).toEqual([track]);
    });

    it('selectedTrack should be 0 by default', () => {
        const { result } = renderHook(() => useTracks(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        });
        expect(result.current.selectedTrack).toBe(0);
    });

    it('setSelectedTrack should add correct value to selectedTrack', () => {
        const { result } = renderHook(() => useTracks(), {
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        });
        act(() => {
            result.current.setSelectedTrack(4)
        })
        expect(result.current.selectedTrack).toBe(4);
    });
    it('resetSelectedTrack should add correct value to selectedTrack', () => {
        const updatedStore = { ...store, selectedTrack: 4 }

        const { result } = renderHook(() => useTracks(), {
            wrapper: ({ children }) => <Provider store={updatedStore}>{children}</Provider>
        });
        act(() => {
            result.current.resetSelectedTrack()
        })
        expect(result.current.selectedTrack).toBe(0);
    });
});


