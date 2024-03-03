import styles from "./CityItem.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

CityItem.propTypes = {
  city: PropTypes.shape({
    cityName: PropTypes.node,
    emoji: PropTypes.node,
    date: PropTypes.node,
    id: PropTypes.node,
    position: PropTypes.shape({
      lat: PropTypes.node,
      lng: PropTypes.node,
    }),
  }),
};

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  async function handleDeleteCity(e){
    e.preventDefault();
    await deleteCity(id);
  }

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleDeleteCity} >&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
