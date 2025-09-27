package com.example.lms.repository;

import com.example.lms.entity.Discussion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiscussionRepository extends JpaRepository<Discussion, Long> {
}
