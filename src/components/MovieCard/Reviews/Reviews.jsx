import React, { Component } from 'react';
import api from '../../App/api';
import ReviewsItem from './ReviewsItem/ReviewsItem';

const getIdFromProps = props => props.match.params.id;
class Reviews extends Component {
  state = { reviews: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    const movieReviews = `${id}/reviews`;
    api.fetchMovieById(movieReviews).then(data => {
      this.setState({
        reviews: data.results,
      });
    });
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        {!!reviews && reviews.length > 0 && (
          <ul>
            {reviews.map(el => (
              <ReviewsItem key={el.id} {...el} />
            ))}
          </ul>
        )}
        {!!reviews && reviews.length === 0 && (
          <p>We dont have any reviews for this movie</p>
        )}
      </div>
    );
  }
}

export default Reviews;
