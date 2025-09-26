import React from "react";

class SearchBar extends React.Component {
  render() {
    const { keyword, keywordChange } = this.props;
    return (
      <section className="search-bar">
        <input
          type="text"
          placeholder="Cari berdasarkan judul ..."
          value={keyword}
          onChange={(event) => keywordChange(event.target.value)}
        />
      </section>
    );
  }
}

export default SearchBar;