package com.example.lms.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "courses")   // ✅ safe table name
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String instructor;
    private String description;

    // getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getInstructor() { return instructor; }
    public void setInstructor(String instructor) { this.instructor = instructor; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
