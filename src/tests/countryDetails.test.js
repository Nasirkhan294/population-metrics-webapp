import React from 'react';
import renderer from 'react-test-renderer';
import CountryDetails from '../__mocks__/CountryDetails';

describe('Country Details', () => {
  it('renders correctly', () => {
    const component = renderer.create(<CountryDetails />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
