import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowAlt } from 'react-icons/bi';
import { getCountries } from './redux/country/countrySlice';
import styles from '../styles/CountryList.module.css';

const CountryList = () => {
  const { countries, isLoading, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return `Error ${error}`;
  }
  return (
    <div className={styles.container}>
      {countries.map((country) => (
        <div key={country.name} className={styles.countryContainer}>
          <div className={styles.thumbnailContainer}>
            <img src={country.flag} alt={country.demonym} className={styles.thumbnail} />
          </div>
          <div className={styles.details}>
            <h2>{country.name}</h2>
            <p>{country.region}</p>
            <p>{country.population}</p>
          </div>
          <BiRightArrowAlt className={styles.arrow} />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
