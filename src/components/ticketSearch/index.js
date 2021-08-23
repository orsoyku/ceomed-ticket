import React from 'react';
import TextField from '@material-ui/core/TextField';
import * as filterActions from '../../redux/actions/filterActions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import './styles.scss'
const TicketSearch = ({ search, className, id, label, type,actions }) => {
  console.log(actions)
  const handleOnChange = (event) => {
    let value = event.target.value
    actions.searchBySubject(value)
  }
  return (<>
    <TextField onChange={handleOnChange} value={search} className={className} id={id} label={label} type={type} />
  </>)
}


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      searchBySubject: bindActionCreators(filterActions.filterBySubject,dispatch)
    }
  }
}


export default connect(null,mapDispatchToProps)(TicketSearch);

