import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './AdditionalInfo.module.css';

const AdditionalInfo = ({ url, state }) => {
  return (
    <div className={styles.container}>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={{ pathname: `${url}/cast`, state }}>cast</Link>
        </li>
        <li>
          <Link to={{ pathname: `${url}/reviews`, state }}>reviews</Link>
        </li>
      </ul>
    </div>
  );
};
export default AdditionalInfo;

AdditionalInfo.propTypes = {
  url: PropTypes.string.isRequired,
  state: PropTypes.shape({
    from: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
