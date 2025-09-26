import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";

function AddPageWrapper(props) {
  const navigate = useNavigate();
  return <AddPage {...props} navigate={navigate} />;
}

class AddPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddNote = this.handleAddNote.bind(this);
  }

  handleAddNote(note) {
    this.props.onAddNote(note);
    this.props.navigate("/");
  }

  render() {
    return (
      <section className="add-new-page">
        <NoteInput addNote={this.handleAddNote} />
      </section>
    );
  }
}

export default AddPageWrapper;