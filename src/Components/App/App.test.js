import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './App';
import { rootReducer } from '../../redux/ducks/index';
import { createStore, applyMiddleware } from 'redux';
import { render } from '@testing-library/react'

describe.skip('<AppContainer /> unit test', () => {
  const mockStore = createStore(rootReducer,applyMiddleware(thunk));
  const getWrapper = () => shallow(
    <Provider store={mockStore}>
      <App/>
    </Provider>
  );


  it('should add to count and display the correct # of counts', () => {
    const wrapper = getWrapper();
    wrapper.searchTracks('yolo');
    console.log(wrapper)
  });
});