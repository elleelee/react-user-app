import React from "react";
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filter';


const UserListFilter = (props) => (
  <div className="search-input">
    <i className="fas fa-search" id="search-icon"></i>
    <input className="form-control" id="input" placeholder="Search by User Name" type="text" value={props.filter.text} onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  };
};

export default connect(mapStateToProps)(UserListFilter);
