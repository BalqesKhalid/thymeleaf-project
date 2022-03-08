package com.thymeleaf.exam.adapter.repository;

import com.thymeleaf.exam.adapter.repository.jpa.entity.ExamEntity;
import com.thymeleaf.exam.model.Exam;

import java.util.List;

public interface ExamRepo {

    List<Exam> getExamList();

    void save(Exam exam);

    Exam findById(long examId);

    void deleteById(long examId);
}
