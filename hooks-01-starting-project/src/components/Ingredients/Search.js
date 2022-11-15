import React from 'react';

import Card from '../UI/Card';
import './Search.css';

// memo keeps component from re-rendering if it doesn't change
const Search = React.memo(props => {
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" />
        </div>
      </Card>
    </section>
  );
});

export default Search;
