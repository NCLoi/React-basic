import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';


class TestComponent extends React.Component {
    state = {
        arrJob: [
            { id: '1', title: 'Developer', salary: '500' },
            { id: '2', title: 'Tester', salary: '100' },
            { id: '3', title: 'Project Managers', salary: '1500' }
        ]
    }

    addNewJob = (job) => {
        console.log('Checkjob parent: ', job)
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }
    delJob = (job) => {
        let curJobs = this.state.arrJob;
        curJobs = curJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJob: curJobs
        })
    }


    render() {
        // console.log('render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJob={this.state.arrJob}
                    delJob={this.delJob}
                />
            </>
        )
    }
}

export default TestComponent;