import React from 'react';
import { Tracklist } from './Tracklist';
import { cleanup, render} from '@testing-library/react'
import { store } from '../../redux/store/index.js';
import { Provider } from 'react-redux';

const mockTracks = [{ title: 'song1', index: 0 }, { title: 'song2', index: 1 }]
const querySearched = "Song"

describe('TrackList', () => {
    afterEach(cleanup)     
    
    it("should render", () => {   
         const TracklistComponent = render(
            <Provider store={store}>
                <Tracklist querySearched={querySearched} tracks={mockTracks} selectedTrack={0} />
            </Provider>)
          expect(TracklistComponent).toBeTruthy();  
    });

    it("matches snapshot", () => {
        const TracklistComponent = render(
            <Provider store={store}>
                <Tracklist querySearched={querySearched} tracks={mockTracks} selectedTrack={0} />
            </Provider>)
            expect(TracklistComponent).toMatchSnapshot();
    });

    it("matches snapshot with non default selectedTrack", () => {
        const TracklistComponent = render(
            <Provider store={store}>
                <Tracklist querySearched={querySearched} tracks={mockTracks} selectedTrack={1} />
            </Provider>)
            expect(TracklistComponent).toMatchSnapshot();
    });

    it("matches snapshot with no querySearched", () => {
        const TracklistComponent = render(
            <Provider store={store}>
                <Tracklist tracks={mockTracks} selectedTrack={1} />
            </Provider>)
            expect(TracklistComponent).toMatchSnapshot();
    });

    it("should have text with correct length of tracks", () => {  
        const { getByText } = render(
           <Provider store={store}>
               <Tracklist querySearched={querySearched} tracks={mockTracks} selectedTrack={0} />
           </Provider>)
           expect(getByText('2 Search Results')).toBeInTheDocument()
   });

   it("heading should be querySearched ", () => {  
    const { getByRole } = render(
       <Provider store={store}>
           <Tracklist querySearched={querySearched} tracks={mockTracks} selectedTrack={0} />
       </Provider>)
        expect(getByRole('heading')).toHaveTextContent(querySearched);
    });
});
