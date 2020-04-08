import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Card extends Component {

	static propTypes = {
		recto: PropTypes.string.isRequired,
		verso: PropTypes.string.isRequired,
		visibility: PropTypes.bool.isRequired,
	}

	state = {
		editing: false,
	}

	handleDoubleClick = () => {
		this.setState({ editing: true })
	}

	handleSave = (id, text) => {
		if (text.length === 0) {
			this.props.deleteTodo(id)
		} else {
			this.props.editTodo(id, text)
		}
		this.setState({ editing: false })
	}

	render () {
		const { todo, completeTodo, deleteTodo } = this.props

		let element
		if (this.state.editing) {
			element = (
				<TodoTextInput
					text={todo.text}
					editing={this.state.editing}
					onSave={(text) => this.handleSave(todo.id, text)}
				/>
			)
		} else {
			element = (
				<div className="view">
					<input className="toggle"
						type="checkbox"
						checked={todo.completed}
						onChange={() => completeTodo(todo.id)}
					/>
					<label onDoubleClick={this.handleDoubleClick}>
						{todo.text}
					</label>
					<button
						type="button"
						className="destroy"
						onClick={() => deleteTodo(todo.id)}
					/>
				</div>
			)
		}

		return (
			<li className={classnames({
				completed: todo.completed,
				editing: this.state.editing,
			})}>
				{element}
			</li>
		)
	}
}