import React, { Component } from 'react'
import ExamService from '../services/ExamService';

class SaveExamComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            passingScore: '',
            fullScore: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePassingScoreHandler = this.changePassingScoreHandler.bind(this);
        this.changeFullScoreHandler = this.changeFullScoreHandler.bind(this);
        this.updateExam = this.updateExam.bind(this);
    }

    componentDidMount(){
        ExamService.getExamById(this.state.id).then( (res) =>{
            let exam = res.data;
            this.setState({
                name: exam.name,
                fullScore: exam.fullScore,
                passingScore : exam.passingScore
            });
        });
    }

    updateExam = (e) => {
        e.preventDefault();
        let exam = {name: this.state.name, passingScore: this.state.passingScore, fullScore: this.state.fullScore};
        console.log('exam => ' + JSON.stringify(exam));
        console.log('id => ' + JSON.stringify(this.state.id));
        ExamService.updateExam(exam, this.state.id).then( res => {
            this.props.history.push('/exams');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changePassingScoreHandler= (event) => {
        this.setState({passingScore: event.target.value});
    }

    changeFullScoreHandler= (event) => {
        this.setState({fullScore: event.target.value});
    }

    cancel(){
        this.props.history.push('/exams');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="Name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Passing Score: </label>
                                            <input placeholder="Passing Score" name="passingScore" className="form-control" 
                                                value={this.state.passingScore} onChange={this.changePassingScoreHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Full Score: </label>
                                            <input placeholder="Full Score" name="fullScore" className="form-control" 
                                                value={this.state.fullScore} onChange={this.changeFullScoreHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateExam}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default SaveExamComponent
