import React from 'react';
import ReactDOM from 'react-dom';



// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     console.log('here')
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// const domContainer = document.getElementById('app')
// ReactDOM.render(e(LikeButton), domContainer);
let name = 'jamefsssdfs'


// 创建一个button组件 方式一
// let btn = React.createElement('button',{"id":'mybtn',onClick:function(){ alert('hello world') }},`我是button${name}`);

// 方式二 jsx 
let mybtn = <div id="mybtn">hello,world1234</div>

// 方式三 函数 无状态组件
// function Btn(props) {
//     return (
//       <button>
//         {props.value},{props.age}
//       </button>
//     );
// }


// 方式四 类 有状态组件 state

// class Btn extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'kobe'
//         }
//     }

//     handle(a) {
//         alert(a)
//         // console.log(event)
//         console.log(this.props)
//     }

//     handleChangeName(){
//         // console.log(11)
//         this.setState({
//             name: Math.random()
//         })
//         console.log(this.state)
//     }

//     render() {
//         return (
//             <div>
//               <button onClick={ () => this.handle('ok') }>
//                 {this.props.age}
//               </button>
//               <button onClick={ () => this.handleChangeName() }>changeName</button>
//         <span>name: {this.state.name}</span>
//               </div>
//             );
//     }
// }

import Btn from "@/components/user.jsx"
import '@/css/index.css'
import 'antd/dist/antd.css';

let foo = () => {
    return '123';
}
console.log(foo())

class Person{}
Person.age = 111;
console.log(Person.age)
let rootEle = document.getElementById('app');

ReactDOM.render(<Btn age="24"/>,rootEle);


