import React from 'react';
import PropTypes from 'prop-types';

const CastItem = ({ name, character, profile_path }) => {
  const image = profile_path
    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
    : 'noimage.png';
  return (
    <li>
      <img alt={`actor ${name}`} src={image} />
      <p>{name}</p>
      {!!character && <p>character: {character}</p>}
    </li>
  );
};

export default CastItem;

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string.isRequired,
};
