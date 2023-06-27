import CountryList from '../components/CountryList';
import styles from '../styles/Home.module.css';

const Home = () => (
  <div>
    <div className={styles.banner}>
      <input
        type="text"
        className={styles.input}
        placeholder="search by coutry name..."
      />
    </div>
    <CountryList />
  </div>
);

export default Home;
