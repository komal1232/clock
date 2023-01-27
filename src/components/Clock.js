import React from 'react'
export default class Clock extends React.Component {

    constructor(props){
        super(props);
        this.state ={date:new Date()}
    }
    componentDidMount(){
        console.log("mount")
     setInterval(()=>this.tick(),1000)
    }
    tick(){
        console.log("tick",new Date)
        this.setState({
            date:new Date()
        })
    }
    componentWillUnmount(){
        console.log("unmount",new Date())
        clearInterval(this.timeId)
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is time.{this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }