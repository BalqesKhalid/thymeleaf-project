package com.thymeleaf.exam.adapter.repository.jpa;

import com.thymeleaf.exam.adapter.repository.jpa.entity.ExamEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface ExamRepoJpa extends JpaRepository<ExamEntity,Long> {

}
