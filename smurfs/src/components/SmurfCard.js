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

    const name = smurfs.map(item => {
        return item.name;
    })
    const age = smurfs.map(item => {
        return item.age;
    })

    console.log('smurfs:', smurfs);
    return (
        <>
            <h3>{name}</h3>
            <p>age: {age }</p>
        </>
    );
}

export default SmurfCard;