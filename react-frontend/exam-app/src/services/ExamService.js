import axios from 'axios';

const EXAM_API_BASE_URL = "http://localhost:8081/exams";

class ExamService {

    getExams(){
        return axios.get(EXAM_API_BASE_URL);
    }

    createExam(exam){
        return axios.post(EXAM_API_BASE_URL, exam);
    }

    getExamById(examId){
        return axios.get(EXAM_API_BASE_URL+"/"+examId);
    }

    updateExam(exam, examId){
        return axios.put(EXAM_API_BASE_URL + '/' + examId, exam);
    }

    saveExam(exam){
        return axios.post(EXAM_API_BASE_URL , exam);
    }

    deleteExam(examId){
        return axios.delete(EXAM_API_BASE_URL +'/' + examId);
        
    }
}

export default new ExamService()