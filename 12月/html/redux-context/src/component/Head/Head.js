import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from '../../redux';
 class Head extends Component {
  render () {
    return (
      <div className="head">{this.props.head}</div>
    )
  }
}
const propTypes={
  store:PropTypes.object
}
export default connect(Head,propTypes);