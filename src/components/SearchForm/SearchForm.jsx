import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  initialState = {
    value: '',
  };

  state = { ...this.initialState };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    const { onSubmit } = this.props;
    const handleSubmit = e => {
      e.preventDefault();
      onSubmit(value);
      this.setState({
        ...this.initialState,
      });
    };
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search movies..."
          onChange={this.handleChange}
          value={value}
        />
        <button type="submit">search</button>
      </form>
    );
  }
}
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
