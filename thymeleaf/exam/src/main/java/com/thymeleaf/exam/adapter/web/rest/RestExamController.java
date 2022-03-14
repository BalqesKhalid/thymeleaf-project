package com.thymeleaf.exam.adapter.web.rest;


import com.thymeleaf.exam.adapter.service.ExamService;
import com.thymeleaf.exam.model.Exam;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("exams")
public class RestExamController {

    private final ExamService examService;

    public RestExamController(ExamService examService) {

        this.examService = examService;
    }


    @GetMapping()
    public List<Exam> getAllExams() {

        List<Exam> exams = examService.getExamList();
        return exams;
    }

    @GetMapping("/examId")
    public Exam saveExam(@PathVariable long examId) throws Exception {

        return examService.findById(examId);
    }


    @PutMapping("/examId")
    public void updateExam(@PathVariable long examId,Exam exam) throws Exception {
        Exam originalExam = examService.findById(examId);

        originalExam.setName(exam.getName());
        originalExam.setFullScore(exam.getFullScore());
        originalExam.setPassingScore(exam.getPassingScore());

        examService.save(originalExam);
    }


}
