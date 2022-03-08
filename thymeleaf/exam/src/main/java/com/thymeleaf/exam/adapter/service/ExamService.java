package com.thymeleaf.exam.adapter.service;

import com.thymeleaf.exam.adapter.repository.ExamRepo;
import com.thymeleaf.exam.adapter.repository.jpa.entity.ExamEntity;
import com.thymeleaf.exam.model.Exam;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamService {

    private final ExamRepo examRepo;

    public ExamService(ExamRepo examRepo) {
        this.examRepo = examRepo;
    }


    public List<Exam> getExamList(){

        return examRepo.getExamList();
    }

    public void save(Exam exam) {
        examRepo.save(exam);
    }

    public Exam findById(long examId) {
        return examRepo.findById(examId);
    }

    public void deleteById(long examId) {
        examRepo.deleteById(examId);
    }
}
