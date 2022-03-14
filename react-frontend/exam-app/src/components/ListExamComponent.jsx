import React, { Component } from 'react';
import ExamService from '../services/ExamService';

class ListExamComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
                exams: []
        }
    }
    componentDidMount(){
        ExamService.getExams().then((res) => {
                this.setState({ exams: res.data});
            });
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Exams List</h2>

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
                                             <td> {exam.id}</td>
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