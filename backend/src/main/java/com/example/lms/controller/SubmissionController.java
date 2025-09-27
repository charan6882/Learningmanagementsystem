package com.example.lms.controller;

import com.example.lms.entity.Submission;
import com.example.lms.repository.SubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/submissions")
public class SubmissionController {
    @Autowired
    private SubmissionRepository submissionRepository;

    @GetMapping
    public List<Submission> getAll() {
        return submissionRepository.findAll();
    }

    @PostMapping
    public Submission create(@RequestBody Submission submission) {
        return submissionRepository.save(submission);
    }

    @PutMapping("/{id}/grade")
    public Submission grade(@PathVariable Long id, @RequestBody String grade) {
        Submission s = submissionRepository.findById(id).orElseThrow();
        s.setGrade(grade);
        return submissionRepository.save(s);
    }
}
