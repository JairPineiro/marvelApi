import React from 'react';

export const SearchBar = (props) => {
  const { text, setText, search } = props;

  const handleOnSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
    search(); // Llama a la función search que proviene de props
  }

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid justify-content-evenly">
        <form className="d-flex" role="search" onSubmit={handleOnSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
