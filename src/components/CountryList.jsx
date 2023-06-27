import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { getCountries } from './redux/country/countrySlice';
import styles from '../styles/CountryList.module.css';

const CountryList = () => {
  const [searchItem, setSearchItem] = useState('');
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

  const filteredCountries = countries.filter((country) => (
    country.name.toLowerCase().includes(searchItem.toLowerCase())
  ));

  return (
    <>
      <div className={styles.banner}>
        <input
          type="text"
          className={styles.input}
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="search country ..."
        />
      </div>
      <div className={styles.container}>
        {filteredCountries.map((country) => (
          <div key={country.name} className={styles.countryContainer}>
            <div className={styles.thumbnailContainer}>
              <img src={country.flag} alt={country.name} className={styles.thumbnail} />
            </div>
            <div className={styles.details}>
              <h2>{country.name}</h2>
              <p>{country.region}</p>
              <p>{country.population}</p>
            </div>
            <Link to={`/country/${country.name}`}>
              <BiRightArrowAlt className={styles.arrow} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountryList;
