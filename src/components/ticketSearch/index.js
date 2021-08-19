import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import './styles.scss'
const TicketSearch = ({className,id,label,type}) => {
    const [search,setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value);

    }
    return (<>
      <TextField value={search} onChange={handleChange} className={className} id={id} label={label} type={type}/>
    </>)
}

export default TicketSearch