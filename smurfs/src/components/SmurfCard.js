import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { SmurfContext } from '../contexts/SmurfContext';

const SmurfCard = () => {
    const [smurfs, setSmurfs] = useState(useContext(SmurfContext));

    console.log('state:', smurfs);
    useEffect(() => {
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('this is res:', res)
            console.log('first object', res.data)
            setSmurfs(res.data);
        })
    }, []);

    console.log('smurfs:', smurfs);
    return (
        <>
            {smurfs.map(item => {
               return  <div>
                        <h3>{item.name}</h3>
                        <p>Age: {item.age}</p>
                        <p>Height: {item.height}</p>
                   </div>
            })}
        </>
    );
}

export default SmurfCard;