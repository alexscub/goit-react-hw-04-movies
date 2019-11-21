import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

const getYear = date => {
  const formatedDate = new Date(date);
  return formatedDate.getFullYear();
};

const MovieCard = ({
  overview,
  release_date,
  original_title,
  poster_path,
  genres,
  vote_average,
}) => {
  return (
    <section className={styles.container}>
      <div>
        <img
          alt={`poster${original_title}`}
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        />
      </div>
      <div>
        <h3>{`${original_title} (${getYear(release_date)})`}</h3>
        <p>{`User Score: ${vote_average * 10}%`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(el => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default MovieCard;

MovieCard.propTypes = {
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  vote_average: PropTypes.number.isRequired,
};
