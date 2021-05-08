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
                <p class = 'contact'>Let us know your thoughts!</p><br/>
                <form onSubmit={this.postDataHandler}>
                    <p class = 'contact'>Email:</p>
                    <input type = "text" placeholder = "email" value = {this.state.email} 
                    onChange={(e)=>this.setState({email:e.target.value})}/><br/>
                    <p class = 'contact'>Comment:</p><br/>
                    <textarea value = {this.state.message} 
                    onChange={(e)=>this.setState({message:e.target.value})}>Enter your thoughts here.</textarea><br/>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}

export default ResultsAdd;