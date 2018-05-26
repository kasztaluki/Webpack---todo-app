import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoList.css';

const List = (props) => {
	const {rem, list} = props;
	const todoListElements = list.map(element => <li key={element.id} id={element.id} onClick={() => rem(element.id)}> {element.text} </li>);
	return (
		<ol className={style.TodoList}>{todoListElements}</ol>
	);
};

List.propTypes = {
	list: PropTypes.string,
	rem: PropTypes.func
};

export default List;