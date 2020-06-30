import React from 'react';
import { shallow } from 'enzyme';
import { ShowPostComponent } from './ShowPost';

describe('Component ShowPost', () => {
  it('should render without crashing', () => {
    const component = shallow(<ShowPostComponent />);
    expect(component).toBeTruthy();
  });
});
