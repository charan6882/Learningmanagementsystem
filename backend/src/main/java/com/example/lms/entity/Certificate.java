package com.example.lms.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Certificate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String studentName;
    private String courseName;
    private LocalDate issuedOn;
}
