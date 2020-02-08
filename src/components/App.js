import React, { Component } from "react";
import { database } from "../firebase";

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
    database.push(note);
    this.setState({ title: "", body: "" });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
