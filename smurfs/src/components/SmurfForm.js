import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log('state object:', this.state)
        axios
          .post('http://localhost:3333/smurfs', this.state)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
    }

    render() {
        const { name, age, height } = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                    type="text"
                    name="name"
                    placeholder="name of smurf"
                    value={name}
                    onChange={this.changeHandler}
                />
                <input 
                    type="text"
                    name="age"
                    placeholder="age"
                    value={age}
                    onChange={this.changeHandler}
                />
                <input 
                    type="text"
                    name="height"
                    placeholder="height"
                    value={height}
                    onChange={this.changeHandler}
                />
                <button type="submit" onClick={this.addItem}>Submit</button>
            </form>
        )
    }
}
export default SmurfForm;



//     const [smurf ,setSmurf] = useState({
//         name: '',
//         age: '',
//         height: ''
//     });

//     const handleChanges = e => {
//         setSmurf( 
//             {...smurf, [e.target.name]: e.target.value} 
//             );
//             console.log('smurf', smurf);
//     };
    
//     const handleSubmit = (e, smurf) => {
//         console.log('handleSubmit:', smurf);
//         e.preventDefault();
//     };

//     const addItem = (e, smurf) => {
//         console.log('SMURF', smurf);
//         e.preventDefault();
        // axios
        //   .post('http://localhost:3333/smurfs', smurf)
        //   .then(res => {
        //       console.log('RES', res.data);
        //     setSmurf({
        //       name: res.data.name,
        //       age: res.data.age,
        //       height: res.data.height
        //     });
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
//       };


//     );
// }

