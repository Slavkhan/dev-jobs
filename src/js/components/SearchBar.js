import IconFilter from '../images/IconFilters';
import IconLocation from '../images/IconLocation';
import IconSearch from '../images/IconSearch';
import Checkbox from './CheckBox';
import {useCallback} from 'react';
import debounce from 'lodash.debounce';

const SearchBar = ({handleSearchTitle, handleSearchLocation, handleContract}) => {
  const searchTitle = (e) => {
    handleSearchTitle(e);
  };
  const searchLocation = (e) => {
    handleSearchLocation(e);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearchLocation = useCallback(debounce(searchLocation, 300), []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearchTitle = useCallback(debounce(searchTitle, 300), []);
  return (
    <>
      <div className="searchbar">
        <div className="searchbar-input">
          <IconSearch />
          <input
            className="searchbar-input-textbox"
            onInput={(e) => debouncedSearchTitle(e.target.value)}
            type="text"
            placeholder="Filter by title..."
          />
        </div>
        <div className="searchbar-input">
          <IconLocation />
          <input
            className="searchbar-input-textbox"
            onInput={(e) => debouncedSearchLocation(e.target.value)}
            type="text"
            placeholder="Filter  by location..."
          />
        </div>
        <div className="searchbar-input">
          <Checkbox handleContract={handleContract} />
        </div>
        <span className="searchbar-icon">
          <IconFilter />
        </span>
      </div>
    </>
  );
};
export default SearchBar;
