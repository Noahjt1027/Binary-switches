import React, { Component } from 'react';

class Switch extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: null,
        }
    }

    renderbutton(i){
        return (
            <div>
                <button onClick={()=> 
                    alert('click')}>
                    {i}
                </button>
            </div>
        )
    };

    render (){
        return(
            <div> 
                {this.renderbutton(0)}
                {this.renderbutton(1)}
                {this.renderbutton(2)}
                {this.renderbutton(3)}
            </div>
        )
    };
}

class Board extends Component{
    render(){
        return(
            <div>
              <Switch/>
            </div>
        );
    }
}

export default Board;