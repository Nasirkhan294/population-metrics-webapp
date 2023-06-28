import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../__mocks__/Navbar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Navbar />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
