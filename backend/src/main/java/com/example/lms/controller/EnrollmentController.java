package com.example.lms.controller;

import com.example.lms.entity.Enrollment;
import com.example.lms.repository.EnrollmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enrollments")
public class EnrollmentController {
    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @GetMapping
    public List<Enrollment> getAll() {
        return enrollmentRepository.findAll();
    }

    @PostMapping
    public Enrollment create(@RequestBody Enrollment enrollment) {
        return enrollmentRepository.save(enrollment);
    }
}
