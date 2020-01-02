import React from 'react';

interface SearchProps {
  filterByQuery: (event: React.SyntheticEvent<{value: string}>) => void;
}

const Search: React.FunctionComponent<SearchProps> = ({ filterByQuery }) => (
  <section className="searchContainer">
    <label htmlFor="searchInput" ><h2>Search Games By Name</h2></label>
    <input id="searchInput" placeholder="Search" onChange={filterByQuery}></input>
  </section>
);

export default Search;