import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import styles from './App.module.css';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className={styles.app}>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:id" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
