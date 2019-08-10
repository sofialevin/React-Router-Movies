import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MovieList from './MovieList';
import MovieCard from './MovieCard';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink activeClassName="saved-active" to={`/movies/${movie.id}`} component={MovieCard}>{movie.title}</NavLink>
    ))}
    <Link to="/" component={MovieList}>
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
