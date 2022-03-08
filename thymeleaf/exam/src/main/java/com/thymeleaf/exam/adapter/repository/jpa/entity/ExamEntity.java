package com.thymeleaf.exam.adapter.repository.jpa.entity;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Builder
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "exam")
public class ExamEntity {

    @Id
    @GeneratedValue
    long id;

    String name;

    int fullScore;

    int passingScore;
}