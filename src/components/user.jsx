import React from 'react';
import { DatePicker } from 'antd';
import Mm from './manybtn.jsx';
export default  class Btn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'kobe-bryant'
        }
    }

    handle(a) {
        alert(a)
        // console.log(event)
        console.log(this.props)
    }

    handleChangeName(){
        // console.log(11)
        this.setState({
            name: 'yaoming'
        },() => {
            console.log(this.state)
        })
       
    }

    render() {
        return (
            <div>
              <button onClick={ () => this.handle('ok') }>
                {this.props.age}
              </button> 
              <hr/>
              <button onClick={ () => this.handleChangeName() }>changeName</button>
        <span>name: {this.state.name}</span>
        <hr/>
            <DatePicker />
                <hr />
                <Mm />
              </div>
            );
    }
}