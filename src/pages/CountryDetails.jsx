import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from '../styles/CountryDetails.module.css';

const CountryDetails = () => {
  const { name } = useParams();
  const countries = useSelector((state) => state.countries.countries);
  const country = countries.find((country) => country.name === name);

  if (!country) {
    return <p>Country not found</p>;
  }

  return (
    <>
      <div className={styles.banner}>
        <img src={country.flag} alt={country.name} />
        <h2 className={styles.header}>
          States by country:
          <span>{country.name}</span>
        </h2>
      </div>
      <div>
        <li className={styles.info}>
          <p>Sub region:</p>
          {country.subregion}
        </li>
        <li className={styles.info}>
          <p>Capital:</p>
          {country.capital}
        </li>
        <li className={styles.info}>
          <p>Population:</p>
          {country.population}
        </li>
        <li className={styles.info}>
          <p>Native name:</p>
          {country.nativeName}
        </li>
        <li className={styles.info}>
          <p>Time zone:</p>
          {country.timezones}
        </li>
        <li className={styles.info}>
          <p>Calling Codes:</p>
          {country.callingCodes}
        </li>
        <li className={styles.info}>
          <p>Area:</p>
          {country.area}
        </li>
        <li className={styles.info}>
          <p>Alpha3Code:</p>
          {country.alpha3Code}
        </li>
      </div>
    </>
  );
};

export default CountryDetails;
