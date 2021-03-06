import { useCallback, useState } from "react";
import "./SearchForm.scss";

function SearchForm({ fetchBookList }) {
  const [query, setQuery] = useState("");

  const handleChange = useCallback(
    (e) => {
      setQuery(e.target.value.trim());
    },
    [setQuery]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!query) return;

      fetchBookList(query);
    },
    [query, fetchBookList]
  );

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <fieldset className="fieldset">
        <legend className="a11y-hidden">검색 폼</legend>
        <label aria-label="검색어">
          <input
            id="search-term"
            type="search"
            className="search-term"
            autoComplete="off"
            value={query}
            onChange={handleChange}
          />
        </label>
        <button
          className="icon-search search-btn"
          type="submit"
          aria-label="검색"
        />
      </fieldset>
    </form>
  );
}

export default SearchForm;
