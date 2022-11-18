import { render } from '@testing-library/react';
import React,{ Component } from 'react';

export default class extends Component{
    constructor(props){
        super(props)

        this.state ={
            makanan: 'Bakso',
            minuman: 'juice',
            data: {}
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    data: json
                })
            }) 
    }
    render(){
        return(
            <div>
                <p>{this.state.data.title}</p>
                <p>{this.state.data.user}</p>
            </div>
        )
    }
}