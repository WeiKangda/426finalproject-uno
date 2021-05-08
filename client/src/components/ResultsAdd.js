import React from 'react';
import result from '../result'


class ResultsAdd extends React.Component{
    
    state = {
        email:'',
        message:''
    }

    postDataHandler = (e)=>{
        e.preventDefault();
        const Data = {
            email: this.state.email,
            message: this.state.message
        }
        result.post('marks.json', Data).then(response=>{
            console.log(response);
        })
    }

    render(){
        return(
            <div>
                <h>Let us know your thoughts!</h><br/>
                <form onSubmit={this.postDataHandler}>
                    <label>Email:</label>
                    <input type = "text" placeholder = "email" value = {this.state.email} 
                    onChange={(e)=>this.setState({email:e.target.value})}/><br/>
                    <label>Comment:</label><br/>
                    <textarea value = {this.state.message} 
                    onChange={(e)=>this.setState({message:e.target.value})}>Enter your thoughts here.</textarea><br/>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}

export default ResultsAdd;