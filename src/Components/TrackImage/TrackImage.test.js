import React from 'react';
import { TrackImage } from './TrackImage';
import { cleanup, render} from '@testing-library/react'

import Image from "./testImage.jpg";

describe('TrackImage', () => {
    afterEach(cleanup)     
    
    it("should render", () => {   
         const TrackImageComponent = render(
                <TrackImage playing={false} image={Image} />
                )
          expect(TrackImageComponent).toBeTruthy();  
    });

    it("matches snapshot with playing is false", () => {
        const TrackImageComponent = render(
            <TrackImage playing={false} image={Image} />
            )
            expect(TrackImageComponent).toMatchSnapshot();
    });

    it("matches snapshot with playing is true", () => {
        const TrackImageComponent = render(
            <TrackImage playing={true} image={Image} />
            )
            expect(TrackImageComponent).toMatchSnapshot();
    });

});
