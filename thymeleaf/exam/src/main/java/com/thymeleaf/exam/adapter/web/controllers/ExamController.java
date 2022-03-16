package com.thymeleaf.exam.adapter.web.controllers;


import com.thymeleaf.exam.adapter.service.ExamService;
import com.thymeleaf.exam.model.Exam;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.util.List;

@Controller
public class ExamController {

    private final ExamService examService;

    public ExamController(ExamService examService) {

        this.examService = examService;
    }


    @GetMapping({"/list", "/"})
    public ModelAndView getAllExams() {

        ModelAndView modelAndView = new ModelAndView("exam-list");
        List<Exam> examList = examService.getExamList();
        modelAndView.addObject("exams", examList);
        return modelAndView;
    }

    @GetMapping("/addExamForm")
    public ModelAndView addExamForm() {
        ModelAndView mav = new ModelAndView("add-exam-form");
        Exam exam= Exam.builder().build();
        mav.addObject("exam", exam);
        return mav;
    }

    @PostMapping("/saveExam")
    public String saveExam(@ModelAttribute @Valid Exam exam , BindingResult bindingResult , Model model) {

        boolean hasErrors = bindingResult.hasErrors();
        if (hasErrors){
            model.addAttribute("exam", exam);
            return "add-exam-form";
        }
        examService.save(exam);
        return "redirect:/list";
    }

    @GetMapping("/showUpdateForm")
    public ModelAndView showUpdateForm(@RequestParam Long examId) {
        ModelAndView mav = new ModelAndView("add-exam-form");
        Exam exam = examService.findById(examId);
        mav.addObject("exam", exam);
        return mav;
    }

    @GetMapping("/deleteExam")
    public String deleteEmployee(@RequestParam Long examId) {
        examService.deleteById(examId);
        return "redirect:/list";
    }

    @GetMapping("/security")
    public String testSecurity() {
        return "security-test";
    }
}
