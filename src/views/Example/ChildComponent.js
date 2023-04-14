import React from 'react';

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleDelete = (job) => {
        console.log('check x:', job)
        this.props.delJob(job)
    }

    render() {
        let { arrJob } = this.props;
        let { showJobs } = this.state;

        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                        <div className='Job-list'>
                            {
                                arrJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}$ <></>
                                            <span onClick={() => this.handleDelete(item)}>
                                                x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     console.log('check props: ', props)
//     let { firstname, lastname, arrJob } = props
//     return (
//         <>
//             <div>Chlid: {firstname}-{lastname} </div>
//             <div className='Job-list'>
//                 {
//                     arrJob.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;