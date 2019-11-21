import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const MoviesList = ({ moviesList, location }) => {
  return (
    <div>
      <ul>
        {moviesList.map(el => (
          <li key={el.id}>
            <Link
              to={{ pathname: `/movies/${el.id}`, state: { from: location } }}
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(MoviesList);

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};
