import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class VoteSuccess extends Component {
  render() {
    return (
      <div className="VoteSuccess">
        <h1>You have successfully voted.</h1>
        <Link to={`/`}>
          <button>Go Back</button>
        </Link>
      </div>
    );
  }
}

VoteSuccess.propTypes = {
  match: PropTypes.object.isRequired
};

export default VoteSuccess;