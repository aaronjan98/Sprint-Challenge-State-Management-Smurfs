import React, { useState } from 'react';
import axios from 'axios';

const SmurfForm = () => {

    const [smurf ,setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChanges = e => {
        setSmurf( 
            {...smurf, [e.target.name]: e.target.value} 
            );
            console.log('smurf', smurf);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
    };

    const addItem = (e, smurf) => {
        e.preventDefault();
        axios
          .post('http://localhost:3333/smurfs', smurf)
          .then(res => {
            this.setSmurf({
              items: res.data
            });
            // HTTP STEP V - Clear data form in ItemForm and route to /item-list
            this.props.history.push('/item-list');
          })
          .catch(err => {
            console.log(err);
          });
      };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name"
                placeholder="name of smurf"
                value={smurf.name}
                onChange={handleChanges}
            />
            <input 
                type="text"
                name="age"
                placeholder="age"
                value={smurf.age}
                onChange={handleChanges}
            />
            <input 
                type="text"
                name="height"
                placeholder="height"
                value={smurf.height}
                onChange={handleChanges}
            />
            <button className='add-btn' onClick={addItem}>Add</button>

        </form>
    );
}

export default SmurfForm;