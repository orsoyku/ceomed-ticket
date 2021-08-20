import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as filterActions from '../../redux/actions/filterActions';


import './styles.scss'
const TicketSearch = ({className,searchBySubject,id,label,type}) => {
    const [search,setSearch] = useState('');

    return (<>
      <TextField value={search} onChange={searchBySubject} className={className} id={id} label={label} type={type}/>
    </>)
}

function mapStateToProps(state) {
  return {

  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      searchBySubject: bindActionCreators(filterActions.filterBySubject,dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketSearch);

