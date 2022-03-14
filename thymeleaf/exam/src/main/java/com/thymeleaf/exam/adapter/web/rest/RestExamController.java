package com.thymeleaf.exam.adapter.web.rest;


import com.thymeleaf.exam.adapter.service.ExamService;
import com.thymeleaf.exam.model.Exam;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("exams")
public class ExamController {

    private final ExamService examService;

    public ExamController(ExamService examService) {

        this.examService = examService;
    }


    @GetMapping()
    public List<Exam> getAllExams() {

        List<Exam> exams = examService.getExamList();
        return exams;
    }

    @PostMapping("/saveExam")
    public void saveExam(@ModelAttribute @Valid Exam exam , BindingResult bindingResult , Model model) throws Exception {

        boolean hasErrors = bindingResult.hasErrors();
        if (hasErrors){
            //TODO:
            throw new Exception("Invalid input ....");
        }
        examService.save(exam);
    }


}
