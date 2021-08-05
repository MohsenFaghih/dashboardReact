import React from 'react';
import './Style/Modal.css';

const RedirecModal = ({msg, happening}) => {
    return (
    <div className='modal'>
        <div className='mainModal'>
            <h4>{msg}</h4>
            <span>{happening}</span>
        </div>
    </div>
    )
}

export default RedirecModal
