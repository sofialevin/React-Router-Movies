import React from 'react';
import { Link } from 'react-router-dom';
import MovieList from './MovieList';
import MovieCard from './MovieCard';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link to={`/movies/${movie.id}`} component={MovieCard}>{movie.title}</Link>
    ))}
    <Link to="/" component={MovieList}>
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
