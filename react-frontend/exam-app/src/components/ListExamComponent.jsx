import React, { Component } from 'react';
import ExamService from '../services/ExamService';

class ListExamComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
                exams: []
        }
        this.viewExam = this.viewExam.bind(this);
        this.addExam = this.addExam.bind(this);
        this.editExam = this.editExam.bind(this);
        this.deleteExam = this.deleteExam.bind(this);
    }
    componentDidMount(){
        ExamService.getExams().then((res) => {
                this.setState({ exams: res.data});
            });
    }

    viewExam(id){
        this.props.history.push(`/view-exam/${id}`);
    }
    editExam(id){
        this.props.history.push(`/add-exam/${id}`);
    }
    deleteExam(id){
        ExamService.deleteExam(id).then(
            this.setState({exams: this.state.exams.filter(exam => exam.id !== id)})
        );
    
    }
    addExam(){
        this.props.history.push('/add-exam/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Exams List</h2>
                
                 <div className = "row" >
                    <button className="btn btn-primary" onClick={this.addExam} style={{width: "30%"}}> Add Exam</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                        <th> Name </th>   
                                        <th> passing score </th>
                                        <th> Full score </th>
                                        <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.exams.map(
                                        exam => 
                                        <tr key = {exam.id}>
                                             <td> {exam.name} </td>   
                                             <td> {exam.passingScore}</td>
                                             <td> {exam.fullScore}</td>
                                             <td>
                                                 <button onClick={ () => this.editExam(exam.id)} className="btn btn-info">Update</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewExam(exam.id)} className="btn btn-info">View</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteExam(exam.id)} className="btn btn-danger">Delete</button>

                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        );
    }
}

export default ListExamComponent;