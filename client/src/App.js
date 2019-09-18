import React, { useState } from 'react';
import { Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie.js";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
     
      <SavedList list={savedList} />
      <div> 
        <Route path="/" component={MovieList} />
        <Route path={`/movie-list/${Movie.id}`} component={Movie} />
      </div>
    </div>
  );
};

export default App;
