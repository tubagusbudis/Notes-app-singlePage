import React from "react";
import {Link, useSearchParams} from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import {FiPlus} from "react-icons/fi";

function HomePageWrapper(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams(keyword ? { keyword } : {}); // Jika keyword kosong, hapus parameter pencarian
  }

  return (
    <HomePage {...props} defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: props.notes, // Asumsi notes didapat dari App.js
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState({ keyword });
    this.props.keywordChange(keyword);
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => !note.archived);
    const filteredNotes = activeNotes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NoteList
          notes={filteredNotes}
          onDelete={this.props.onDelete}
          onArchive={this.props.onArchive}
        />
        <div className="homepage__action">
          <Link to="/notes/new" className="action" title="Tambah Catatan">
            <FiPlus />
          </Link>
        </div>
      </section>
    );
  }
}

export default HomePageWrapper;