import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExamService from '../services/ExamService';

class ViewExamComponent extends Component {
    constructor(props) {
        super(props);

        this.state={
            id: this.props.match.params.id,
            exam: {}
        }

    }

    componentDidMount() {
        ExamService.getExamById(this.state.id).then( res => {
            this.setState({exam: res.data});
        })
    }
    
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Exam Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Exam Name: </label>
                            <div> { this.state.exam.name }</div>
                        </div>
                        <div className = "row">
                            <label> Exam Passing score: </label>
                            <div> { this.state.exam.passingScore }</div>
                        </div>
                        <div className = "row">
                            <label> Exam Full score: </label>
                            <div> { this.state.exam.fullScore }</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

ViewExamComponent.propTypes = {

};

export default ViewExamComponent;