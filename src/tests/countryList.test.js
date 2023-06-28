import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CountryList from '../components/CountryList';

const mockStore = configureStore([thunk]);

describe('CountryList component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      countries: {
        isLoading: false,
        error: null,
        countries: [
          {
            name: 'Australia',
            population: 25600000,
            flag: 'https://restcountries.com/data/aus.svg',
            region: 'Oceania',
          },
          {
            name: 'Brazil',
            population: 213000000,
            flag: 'https://restcountries.com/data/bra.svg',
            region: 'Americas',
          },
          {
            name: 'Canada',
            population: 37742154,
            flag: 'https://restcountries.com/data/can.svg',
            region: 'Americas',
          },
        ],
      },
    });
  });

  it('should render the CountryList component correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CountryList />
        </MemoryRouter>
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
