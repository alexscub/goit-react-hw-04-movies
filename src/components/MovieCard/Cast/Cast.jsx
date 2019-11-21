import React, { Component } from 'react';
import api from '../../App/api';
import CastItem from './CastItem/CastItem';

const getIdFromProps = props => props.match.params.id;
class Cast extends Component {
  state = { cast: [] };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    const movieCast = `${id}/credits`;
    api.fetchMovieById(movieCast).then(data => {
      this.setState({
        cast: data.cast,
      });
    });
  }

  render() {
    const { cast } = this.state;
    return (
      <ul>
        {!!cast.length && cast.map(el => <CastItem key={el.id} {...el} />)}
      </ul>
    );
  }
}

export default Cast;
