package com.example.lms.entity;

import jakarta.persistence.*;

@Entity
public class Assignment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;

    @ManyToOne
    private Course course;

    // getters/setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public Course getCourse() { return course; }
    public void setCourse(Course course) { this.course = course; }
}
