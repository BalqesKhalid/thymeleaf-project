package com.thymeleaf.exam.model;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Builder
@Setter
@Getter
public class Exam {

    long id;

    String name;

    int fullScore;

    int passingScore;

}
