import React from 'react';
import { NavigationButtons } from './NavigationButtons';
import { cleanup, render} from '@testing-library/react'
import { store } from '../../redux/store/index.js';
import { Provider } from 'react-redux';

const mockData = [{ title: 'song1', index: 0 }, { title: 'song2', index: 1 }]

describe('NavigationButtons', () => {
    afterEach(cleanup)     
    
    it("should render", () => {   
         const NavigationButtonComponent = render(
                <Provider store={store}>
                    <NavigationButtons data={mockData} selectedTrack={1} />
                </Provider>)
          expect(NavigationButtonComponent).toBeTruthy();  
    });

    it("matches snapshot with data", () => {
        const NavigationButtonComponent = render(
            <Provider store={store}>
                <NavigationButtons data={mockData} selectedTrack={1} />)
            </Provider>)
            expect(NavigationButtonComponent).toMatchSnapshot();
    });

    it("matches snapshot without data", () => {
        const NavigationButtonComponent = render(
            <Provider store={store}>
                <NavigationButtons selectedTrack={1} />)
            </Provider>)
            expect(NavigationButtonComponent).toMatchSnapshot();
    });
});
