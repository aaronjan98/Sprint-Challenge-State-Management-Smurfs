import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const SmurfCard = () => {
    const name = useContext(SmurfContext);
    return(
        <h6>{name}</h6>
    );
}

export default SmurfCard;