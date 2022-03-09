package com.thymeleaf.exam.model;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;


@Builder
@Setter
@Getter
public class Exam {

    long id;

    @NotEmpty(message = "exam name is essential field")
    @Size(min = 4, max = 50)
    String name;

    int fullScore;

    int passingScore;

}
