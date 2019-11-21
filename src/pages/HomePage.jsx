import React, { Component } from 'react';
import api from '../components/App/api';
import MoviesList from '../components/MoviesList/MoviesList';

export default class HomePage extends Component {
  state = { moviesList: [] };

  componentDidMount() {
    api.fetchTrendingMovies().then(data => {
      this.setState({
        moviesList: data,
      });
    });
  }

  render() {
    const { moviesList } = this.state;
    return (
      <div>
        <h2>Trending today</h2>
        {!!moviesList.length && <MoviesList moviesList={moviesList} />}
      </div>
    );
  }
}
