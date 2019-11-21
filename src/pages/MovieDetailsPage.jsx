import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../components/App/api';
import MovieCard from '../components/MovieCard/MovieCard';
import Reviews from '../components/MovieCard/Reviews/Reviews';
import Cast from '../components/MovieCard/Cast/Cast';
import AdditionalInfo from '../components/AdditionalInfo/AdditionalInfo';

const getIdFromProps = props => props.match.params.id;
const getUrlFromProps = props => props.match.url;
const getPathFromProps = props => props.match.path;
const getStateFromProps = props => props.location.state;
export default class MovieDetailsPage extends Component {
  state = { movie: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    api.fetchMovieById(id).then(data => {
      this.setState({
        movie: data,
      });
    });
  }

  onGoBack = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }
    return history.push('/');
  };

  render() {
    const { movie } = this.state;
    const url = getUrlFromProps(this.props);
    const path = getPathFromProps(this.props);
    const state = getStateFromProps(this.props);
    return (
      movie && (
        <div>
          <button type="button" onClick={this.onGoBack}>
            Go back
          </button>
          <MovieCard {...movie} />
          <AdditionalInfo url={url} state={state} />
          <Route path={`${path}/cast`} component={Cast} />
          <Route path={`${path}/reviews`} component={Reviews} />
        </div>
      )
    );
  }
}

MovieDetailsPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
