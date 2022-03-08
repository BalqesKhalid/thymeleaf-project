package com.thymeleaf.exam.adapter.repository.jpa;

import com.thymeleaf.exam.adapter.repository.ExamRepo;
import com.thymeleaf.exam.adapter.repository.jpa.entity.ExamEntity;
import com.thymeleaf.exam.model.Exam;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ExamRepoImp implements ExamRepo {

    private final ExamRepoJpa examRepoJpa;

    public ExamRepoImp(ExamRepoJpa examRepoJpa) {
        this.examRepoJpa = examRepoJpa;
    }

    @Override
    public List<Exam> getExamList(){

        return examRepoJpa
                .findAll()
                .stream()
                .map(ConvertToModelUtil::convertToExam)
                .collect(Collectors.toList());
    }

    @Override
    public void save(Exam exam) {
        examRepoJpa.save(ExamEntity.builder()
                        .id(exam.getId())
                        .name(exam.getName())
                        .passingScore(exam.getPassingScore())
                        .fullScore(exam.getFullScore())
                .build());
    }

    @Override
    public Exam findById(long examId) {
        ExamEntity examEntity = examRepoJpa.findById(examId)
                .orElseThrow(NullPointerException::new);

        return ConvertToModelUtil.convertToExam(examEntity);
    }

    @Override
    public void deleteById(long examId) {

        examRepoJpa.deleteById(examId);

    }


}
