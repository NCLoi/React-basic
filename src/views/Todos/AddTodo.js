import React from "react";
import { toast } from 'react-toastify';


class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleChangeTitleTodo = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAdd = (event) => {
        event.preventDefault();
        console.log('check', this.state)

        if (!this.state.title) {
            toast.warn("Không được bỏ trống!");
            return;
        }

        this.props.addNewTodo({
            id: Math.floor(Math.random() * 101),
            title: this.state.title
        })

        this.setState({
            title: ''
        })
    }


    render() {
        let { title } = this.state;
        return (
            <>
                <div className="add-todo">
                    <input type="text"
                        value={title}
                        onChange={(event) => this.handleChangeTitleTodo(event)} />
                    <button type="button" className="add"
                        onClick={(event) => this.handleAdd(event)}>
                        Add
                    </button>
                </div>
            </>
        )
    }
}

export default AddTodo;