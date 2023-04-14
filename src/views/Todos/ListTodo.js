import React from "react";
import './Todos.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';



class Listtodo extends React.Component {

    state = {
        listTodos: [
            { id: '1', title: 'Homework' },
            { id: '2', title: 'Relax' },
            { id: '3', title: 'Sleep' }
        ],
        updateTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Add todo success!");

    }
    handleDelTodo = (todo) => {
        let curTodo = this.state.listTodos;
        curTodo = curTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: curTodo
        })
        toast.success("Detele success!");
    }
    handleEditTodo = (todo) => {
        let { updateTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(updateTodo).length === 0;
        let objIndex = '';

        if (isEmptyObj === false && updateTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            objIndex = listTodosCopy.findIndex((item => item.id === todo.id))
            listTodosCopy[objIndex].title = updateTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                updateTodo: {}
            })
            toast.success(`Update todo ${objIndex + 1} succeed!`)
            return;
        }

        this.setState({
            updateTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let updateTodoCopy = { ...this.state.updateTodo };
        updateTodoCopy.title = event.target.value;
        this.setState({
            updateTodo: updateTodoCopy
        })
    }

    render() {
        let { listTodos, updateTodo } = this.state;
        let isEmptyObj = Object.keys(updateTodo).length === 0;

        return (
            <>
                <div className="todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo} />

                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>
                                                {index + 1} - {item.title}
                                            </span>
                                            :
                                            <>
                                                {updateTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={updateTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>

                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}>
                                            {!isEmptyObj && updateTodo.id === item.id ?
                                                'Save' : 'Edit'}
                                        </button>
                                        <button className="del" onClick={() => this.handleDelTodo(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </>
        )
    }
}

export default Listtodo;