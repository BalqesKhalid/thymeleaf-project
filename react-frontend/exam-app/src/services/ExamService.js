import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8081/exams";

class ExamService {

    getExams(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    getExamById(examId){
        return axios.get(EMPLOYEE_API_BASE_URL+"/"+examId);
    }

    updateExam(exam, examId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + examId, exam);
    }

    saveExam(exam){
        return axios.post(EMPLOYEE_API_BASE_URL , exam);
    }
}

export default new ExamService()