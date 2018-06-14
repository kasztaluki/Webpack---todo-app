import React from 'react';
// import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            input: ''
        }
    }

    changeValue(event) {
        this.setState({
            input: event.target.value
        });
    }

    addValue() {
        this.props.addTodo(this.state.input);
        this.setState({
            input: ''
        });
    }

    render() {
    	return (
    		<div>
    			<label>Wprowadź treść</label>
    			<input value={this.state.input} onChange={this.changeValue.bind(this)} type="text" />
    			<button onClick={this.addValue.bind(this)}>Zapisz</button>
    		</div>
    	);
    }
}

export default TodoForm;