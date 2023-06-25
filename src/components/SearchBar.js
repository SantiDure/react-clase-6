import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ enSubmit }) {
  const [term, setTerm] = useState("");

  function handleChange(event) {
    setTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    enSubmit(term);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
