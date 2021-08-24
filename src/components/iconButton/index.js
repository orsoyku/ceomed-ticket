import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MessageIcon from '@material-ui/icons/Message';
import './styles.scss'
const IconBtn = ({onClick}) => {
    return <>
       <IconButton height="25%" onClick={onClick} className="fixedbutton" color="primary" aria-label="new ticket">
            <MessageIcon style={{ fontSize: 60 }}/>
      </IconButton>
    </>
}

export default IconBtn