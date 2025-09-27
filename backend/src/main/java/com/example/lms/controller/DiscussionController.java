package com.example.lms.controller;

import com.example.lms.entity.Discussion;
import com.example.lms.repository.DiscussionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/discussions")
public class DiscussionController {
    @Autowired
    private DiscussionRepository discussionRepository;

    @GetMapping
    public List<Discussion> getAll() {
        return discussionRepository.findAll();
    }

    @PostMapping
    public Discussion create(@RequestBody Discussion discussion) {
        return discussionRepository.save(discussion);
    }
}
