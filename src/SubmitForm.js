import React, { Component } from 'react';

class SubmitForm extends Component {

    state = { term: ''};

    handleSubmit = (e) => {
        console.log("submit");
        e.preventDefault();
        if(this.state.term === '') return;
        this.props.onFormSubmit(this.state.term);
        this.setState({term : '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                className="input" 
                placeholder="Enter task" 
                value={this.state.term}
                onChange={(e)=>this.setState({term: e.target.value})}
                />
                <button className="button">Add</button>
            </form>
        );
    }
}

export default SubmitForm;