import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Track extends Component {
  render() {
    console.log(this.props);
    return (
      <div>Track Component <img src={`https://avatars0.githubusercontent.com/u/27437337?s=460&v=4`} /></div>
    );
  }
}
export default connect()(Track);