import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

function ArchivePageWrapper(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivePage
      {...props}
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
    />
  );
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: props.defaultKeyword || "",
    };
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState({ keyword });
    this.props.keywordChange(keyword);
  }

  render() {
    const archivedNotes = this.props.notes.filter((note) => note.archived);
    const filteredNotes = archivedNotes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NoteList
          notes={filteredNotes}
          onDelete={this.props.onDelete}
          onArchive={this.props.onArchive}
          emptyMessage="Arsip kosong"
        />
      </section>
    );
  }
}

export default ArchivePageWrapper;