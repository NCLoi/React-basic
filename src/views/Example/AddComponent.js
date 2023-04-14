import React from "react";

class AddComponent extends React.Component {


    state = {
        title: '',
        salary: ''
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('check', this.state)

        if (!this.state.title || !this.state.salary) {
            alert('Thieu muc vui long nhap lai!')
            return;
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 11),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <div> Hello NCL</div>
                <form>
                    <label htmlFor="titleJobs">Job's title:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitleJob(event)}
                    /><br />
                    <label htmlFor="salary">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)} />
                    
                    <br /><br />
                    <input
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        )
    }
}

export default AddComponent;