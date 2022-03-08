package com.thymeleaf.exam.adapter.repository.jpa;

import com.thymeleaf.exam.adapter.repository.jpa.entity.ExamEntity;
import com.thymeleaf.exam.model.Exam;

public class ConvertToModelUtil {


    public static Exam convertToExam(ExamEntity entity){

        return Exam.builder()
                .id(entity.getId())
                .name(entity.getName())
                .fullScore(entity.getFullScore())
                .passingScore(entity.getPassingScore())
                .build();
    }
}
