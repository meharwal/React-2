import React, { Component } from "react";
import { connect } from "react-redux";

// with Withredux you can get access to the history object's property
import { withRouter } from "react-router-dom";
import { getUser } from "../actions/userActions";
import { getNotes } from "../actions/notesAction";

class LoadingComponent extends Component {
  componentWillMount() {}
  componentWillReceiveProps() {}
  render() {}
}

function mapStateToProprs(state) {
  return {
    user: state.user,
    userLoading: state.loading.user,
    notesLoading: state.loading.notes
  };
}

export default withRouter(
  connec(mapStateToProprs, { getUser, getNotes })(LoadingComponent)
);
