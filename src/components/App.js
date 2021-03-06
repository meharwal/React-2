import React, { Component } from "react";
import _ from "lodash";

import { connect } from "react-redux";
import { getNotes, saveNote, deleteNote } from "../actions/notesAction";
import NoteCard from "./NoteCard";
import { getUser } from "../actions/userActions";

class App extends Component {
  state = {
    title: "",
    body: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.saveNote(note);
    this.setState({ title: "", body: "" });
  };

  // lifecycle
  componentDidMount() {
    this.props.getNotes();
    this.props.getUser();
  }

  // render notes
  renderNotes = () => {
    return _.map(this.props.notes, (note, key) => {
      return (
        <NoteCard key={key}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
          <button
            className="btn btn-danger btn-xs"
            onClick={() => {
              this.props.deleteNote(key);
            }}
          >
            Delete
          </button>
        </NoteCard>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-sm-12">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  className="form-control no-border"
                  placeholder="Title..."
                  required
                  onChange={event => {
                    this.setState({ title: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  name="body"
                  value={this.state.body}
                  className="form-control no-border"
                  placeholder="Body..."
                  required
                  onChange={event => {
                    this.setState({ body: event.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Save</button>
              </div>
            </form>
            {this.renderNotes()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
    user: state.user
  };
}

export default connect(mapStateToProps, {
  getNotes,
  saveNote,
  deleteNote,
  getUser
})(App);
